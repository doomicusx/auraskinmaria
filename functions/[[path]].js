export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (
    url.pathname === "/oauth/authorize" ||
    url.pathname === "/oauth/callback"
  ) {
    if (url.pathname === "/oauth/authorize") {
      const redirectUrl = new URL("https://github.com/login/oauth/authorize");
      redirectUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
      redirectUrl.searchParams.set("scope", "repo,user");
      return Response.redirect(redirectUrl.href, 302);
    }

    if (url.pathname === "/oauth/callback") {
      const code = url.searchParams.get("code");
      const response = await fetch(
        "https://github.com/login/oauth/access_token",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "user-agent": "cloudflare-pages-consumer",
            accept: "application/json",
          },
          body: JSON.stringify({
            client_id: env.GITHUB_CLIENT_ID,
            client_secret: env.GITHUB_CLIENT_SECRET,
            code,
          }),
        }
      );
      const result = await response.json();

      const content = `
        <script>
          const receiveMessage = (message) => {
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify(result)}',
              message.origin
            );
          };
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        </script>`;
      return new Response(content, {
        headers: { "content-type": "text/html" },
      });
    }
  }

  return env.ASSETS.fetch(request);
}

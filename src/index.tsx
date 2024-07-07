import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import Profile from "./component";

const app = new Hono();

const Layout = ({ children }: { children: any }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/static/main.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
};

app.get("/", (c) => {
  return c.html(
    <Layout>
      <Profile />
    </Layout>,
  );
});

app.use("/static/*", serveStatic({ root: "./" }));
const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});

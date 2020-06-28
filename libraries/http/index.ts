import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 3333 });
for await (const req of server) {
  req.respond({ body: "hi en /" });
  const url = req.url;
  console.log(url);
}

import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("method", req.method); // will be post
  console.log("bodyUsed", req.bodyUsed); // will be false
  console.log("headers", req.headers); // shows proper content type and content length
  console.log("body", req.body); // always null!

  /***
   *
   * If middleware is async and I try any of the following:
   *
   * await res.json() // TypeError: invalid json body reason: Unexpected end of JSON input
   * await res.text() // blank string
   *
   */
  return new Response(JSON.stringify({ message: "hello world!" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

import { rest } from "msw";
import { apiURL, sleep } from "utils";

const handlers = [
  rest.post(apiURL("/login"), async (req, res, ctx) => {
    const { username } = await req.json();
    await sleep(2000);

    return res(
      ctx.status(200),
      ctx.json({
        code: "200",
        message: "success",
        data: {
          username,
          token: "access-token-123",
        },
      })
    );
  }),

  rest.post(apiURL("/logout"), async (req, res, ctx) => {
    await sleep(2000);
    return res(
      ctx.status(200),
      ctx.json({
        code: "200",
        message: "success",
      })
    );
  }),
];

export default handlers;

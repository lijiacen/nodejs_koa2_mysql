const Router = require("koa-router");
const HttpException = require("../../core/http-exception");

const router = new Router();

router.get("/test", (ctx) => {
  ctx.body = "test";
  throw new HttpException("主动抛出异常", 10001, 401);
});

module.exports = router;

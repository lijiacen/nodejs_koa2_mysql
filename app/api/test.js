const Router = require("koa-router");
const router = new Router();

router.get("/test", (ctx) => {
  ctx.body = "test";
  throw new Error("test error");
});

module.exports = router;

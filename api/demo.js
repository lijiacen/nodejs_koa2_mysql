const Router = require("koa-router");
const router = new Router();

router.get("/demo", (ctx) => {
  ctx.body = "demo";
});

module.exports = router;

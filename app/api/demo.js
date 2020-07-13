const Router = require("koa-router");
const router = new Router();

router.post("/demo/:id/laster", (ctx) => {
  const path = ctx.params; //url中的param
  const query = ctx.request.query; //?后面的参数
  const headers = ctx.request.header; //requset请求头
  const body = ctx.request.body; //requset body
  ctx.body = "demo";
});

module.exports = router;

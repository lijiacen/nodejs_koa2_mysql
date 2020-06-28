const Koa = require("koa");

const app = new Koa();

//async修饰的函数，任意返回值，都会包装成promise
//async await 保证洋葱圈模型的执行
app.use(async (ctx, next) => {
  console.log("洋葱圈1");
  //await 求值关键字;
  //1):可以对任意表达式求值promise其中之一;计算next返回的promise 转换为字符串;
  //2):会阻塞线程,把异步调用的函数，变成同步
  const a = await next(); // next 返回promise
  console.log("洋葱圈4");

  if (ctx.path === "/") {
    ctx.body = ctx.result;
  }
});

app.use(async (ctx, next) => {
  console.log("洋葱圈2");
  console.log("洋葱圈3");
  ctx.result = "res";
});

app.listen(3000);

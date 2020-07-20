const HttpException = require("../core/http-exception");

//函数调用链的最外层，做了一个中间件形式的全局异常处理，可以监听到函数调用链上的任何异常
//并集中处理异常错误逻辑
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    //instanceof HttpException 作为判断已知异常的标识
    if (error instanceof HttpException) {
      let { code, message, status } = error;
      ctx.body = {
        code,
        message,
        url: `${ctx.method} ${ctx.path}`
      };
      ctx.status = status;
    }
  }
};

module.exports = catchError;

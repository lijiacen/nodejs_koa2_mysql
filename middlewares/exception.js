//函数调用链的最外层，做了一个中间件形式的全局异常处理，可以监听到函数调用链上的任何异常
//并集中处理异常错误逻辑
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.body = "异常";
  }
};

module.exports = catchError;

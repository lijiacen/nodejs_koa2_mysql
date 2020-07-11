const Koa = require("koa");
const Router = require("koa-router");
//使用requireDirectory实现路由自动加载
const requireDirectory = require("require-directory");
const app = new Koa();
const router = new Router();

//导入目录下所有文件，用于路由的加载
const modules = requireDirectory(module, "./api", {
  visit: function (obj) {
    //回调，判断导入的对象为路由对象，则在koa中注册
    if (obj instanceof Router) {
      app.use(obj.routes());
    }
  }
});

app.listen(3000);

//使用requireDirectory实现路由自动加载
const requireDirectory = require("require-directory");
const Router = require("koa-router");

class InitManager {
  static initCore(app) {
    //入口方法
    InitManager.app = app;
    InitManager.initLoadRouters(app);
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api`;
    //导入目录下所有文件，用于路由的加载
    const modules = requireDirectory(module, apiDirectory, {
      visit: function (obj) {
        //回调，判断导入的对象为路由对象，则在koa中注册
        if (obj instanceof Router) {
          InitManager.app.use(obj.routes());
        }
      }
    });
  }
}
module.exports = InitManager;

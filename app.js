const Koa = require("koa");
const parser = require("koa-bodyparser");
const InitManager = require("./core/init");
const catchException = require("./middlewares/exception");

const app = new Koa();

app.use(catchException);
app.use(parser());
InitManager.initCore(app);

app.listen(3000);

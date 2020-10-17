class HttpException extends Error {
  constructor(message = "服务器异常", code = 10000, status = 400) {
    super();
    this.message = message;
    this.code = code;
    this.status = status;
  }
}
class ParameterException extends HttpException {
  constructor(message, code) {
    super();
    this.message = message || "参数错误";
    this.code = code || 10000;
    this.status = 400;
  }
}
module.exports = { ParameterException, HttpException };

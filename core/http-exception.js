class HttpException extends Error {
  constructor(message = "服务器异常", code = 10000, status = 400) {
    super();
    this.message = message;
    this.code = code;
    this.status = status;
  }
}

module.exports = HttpException;

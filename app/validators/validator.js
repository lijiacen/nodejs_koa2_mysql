const { LinValidator, Rule } = require("../../core/lin-validator");

//正整数校验器
class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super();
    this.id = [
      new Rule('isInt', '需要是正整数', { min: 1 })
    ];
  }
}

module.exports = {
  PositiveIntegerValidator
};
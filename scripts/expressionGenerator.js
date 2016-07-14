//function expr(value, left, op, right, hasParentheses) {
//    this.value = value;
//    this.left = left;
//    this.right = right;
//    this.op = op;
//    this.hasParentheses = hasParentheses;
//    var self = this;
//    this.toString = function () {
//        var result = self.left + " " + self.op + " " + self.right;
//        if (self.hasParentheses)
//            return "(" + result + ")";
//        return result;
//    }
//};
//var add = function (value, hasParentheses) {
//    var val = Math.floor(Math.random() * value);
//    return new expr(value, val, '+', value - val, hasParentheses);
//}
//var minus = function (value, hasParentheses) {
//    var val = Math.floor(Math.random() * value);
//    return new expr(value, value + val, '-', val, hasParentheses);
//}
//var divide = function (value, hasParentheses) {
//    var val = Math.floor(Math.random() * 3) + 1;
//    return new expr(value, value * val, '/', val, hasParentheses);
//}
//var multiply = function (value, hasParentheses) {
//    var val = 1;
//    var trial = 0;
//    do {
//        if (trial == 100)
//            break;
//        val = Math.floor(Math.random() * (value / 2)) + 1;
//        trial++;
//    } while (value % val != 0);
//    return new expr(value, val, '*', value / val, hasParentheses);
//}
//var ops = ['+', '-', '*', '/'];
//var genDict = [];
//genDict.push(add);
//genDict.push(minus);
//genDict.push(multiply);
//genDict.push(divide);
//function generate(prevOp, value, level) {
//    var index = Math.floor(Math.random() * 4);
//    var op = ops[index];
//    var gen = genDict[index];
//    var hasPrnt = Math.floor(ops.indexOf(prevOp) / 2) >= Math.floor(ops.indexOf(op) / 2);
//    var newExp = gen(value, hasPrnt);
//    if (level == 0)
//        return newExp;
//    return new expr(value, generate(op, newExp.left, level - 1), op, generate(op, newExp.right, level - 1), hasPrnt);
//} 
//# sourceMappingURL=expressionGenerator.js.map
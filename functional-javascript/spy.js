module.exports = function (target, method) {
    var originalFunction = target[method];
    var results = {'count' : 0};
    target[method] = function () {
        results.count++;
        return originalFunction.apply(this, arguments);
    }
    return results;
}
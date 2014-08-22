module.exports = function (namespace) {
    return function () {
        console.log.apply(console, [namespace].concat(Array.prototype.slice.call(arguments)));
    }
}
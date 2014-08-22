module.exports = function (arr, fn) {
    return arr.reduce(function (previous, current, index, array) {
        previous[index] = fn(current);
        return previous;
    }, []);
}
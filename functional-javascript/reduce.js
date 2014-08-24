module.exports = function (args) {
    return args.reduce(function (map, current, index, array) {
        map[current] = ++map[current] || 1;
        return map;
    }, {})};
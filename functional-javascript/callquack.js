module.exports = function(){
    return Array.prototype.slice.call(arguments).filter(function (obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack');
    }).length;
}


/**
 * Created by ARA8376 on 22/08/2014.
 */
function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return repeat(operation, num)
}
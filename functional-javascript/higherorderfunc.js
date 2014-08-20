function ec (op, num){
    if (num == 0) return;
    op();
    return ec(op,num-1)
}

module.exports = ec;
module.exports = function (goodUsers) {
    return function (submittedUsers) {
        return submittedUsers.every(function (element, index, array) {
            return goodUsers.some(function (goodUser, index2, array2) {
                return goodUser.id === element.id;
            })
        })
    };
}
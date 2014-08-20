module.exports = function (messages) {
    return messages.filter(function (message) {
      return message.message.length < 50;
    }).map(function (message) {
        return message.message;
    });
}
const validateParameterMessage = (param) => {
    if (param == undefined) {
        return ' is undefined. ';
    } else if (param == '') {
        return ' is empty. ';
    }
}

module.exports = {
    validateParameterMessage
}
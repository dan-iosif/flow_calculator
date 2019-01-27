function checkIfEmpty(paramName, param){
    if (param == null){
        throw new Error(paramName + ' is empty!');
    } 
}

function varToString(variable){
    return Object.keys(variable)[0];
}

module.exports = {
    checkIfEmpty,
    varToString
}
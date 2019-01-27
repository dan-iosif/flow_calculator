const { PI } = require('../constants');
const helpers = require('../helpers/helpers');

//Newtonian flow through a straight circular pipe
function simpleFlowCalculation(diameter, velocity){
    if (diameter == undefined || diameter == '') {
        throw new Error('Diameter ' + helpers.validateParameterMessage(diameter));
    }
    if (velocity == undefined || velocity == '') {
        throw new Error('Velocity' + helpers.validateParameterMessage(velocity));
    }
    if (diameter < 0) {
        throw new Error('Diameter is negative');
    }
    if (velocity < 0) {
        throw new Error('Velocity is negative');
    }

    let flow = 0.25 * PI * Math.pow(diameter, 2) * velocity;
    return flow;
}

module.exports = {
    simpleFlowCalculation
}
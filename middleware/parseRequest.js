const {Pipe} = require('../models/pipe');
const {checkIfEmpty, varToString} = require('../helpers/helpers')

function parseRequest(body){
    var pipeObjects = [];
    for (var loop in body) {
        for (var pipe in body[loop]) {
            extractedPipe = extractPipeInformation(pipe, body[loop][pipe]);
            pipeObjects.push(extractedPipe);
        }
    }
    return pipeObjects;
}

function extractPipeInformation(pipeName, pipe) {
    diameter = pipe.diameter; checkIfEmpty(varToString(diameter), diameter);
    pipeLength = pipe.pipeLength; checkIfEmpty(varToString(pipeLength), pipeLength);
    roughness = pipe.roughness; checkIfEmpty(varToString(roughness), roughness);
    flowDirection = pipe.flowDirection; checkIfEmpty(varToString(flowDirection), flowDirection);
    flowGuess = pipe.flowGuess; checkIfEmpty(varToString(varToString), flowGuess);

    var pipeWithParams = new Pipe(pipeName, diameter, pipeLength, roughness, flowDirection, flowGuess);

    return pipeWithParams;
}

module.exports = {
    parseRequest
}
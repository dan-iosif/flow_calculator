// flows in a network of pipes forming one or more closed loops

/* Takes pipe objects as input */
function sumHeadLossInLoop(pipes){
    let sum = 0;
    pipes.forEach((pipe) => {
         sum += pipe.calculateHeadLoss();
    })
    return sum;
}

/*  */
function correctionFactorDenominator(pipes){
    let sum = 0;
    pipes.forEach((pipe) => {
        sum += 1.85 * pipe.headLossPerUnitOfFlow * Math.pow(pipe.flow, 0.85);
    })
    return sum;
}

function correctionFactorNominator(pipes){
    let sum = 0;
    pipes.forEach(function(pipe){
        sum += pipe.calculateHeadLoss();
    })
    return sum;
}


function applyFlowCorrectionFactor(pipes, correctionFactor){
    pipes.forEach(function(pipe){
         pipe.flow = pipe.flow + (-1) * pipe.flowDirection * correctionFactor;    
    });
}

function isHeadBalancedInLoop(pipes){
    var balance = 0;
    pipes.forEach(function(pipe){
        balance += pipe.calculateHeadLoss();
    })
    return (Math.abs(balance) < 1);
}

function startCalculation(pipes){
    var sumHeadloss = sumHeadLossInLoop(pipes);
    var correctionFactor = correctionFactorNominator(pipes) / correctionFactorDenominator(pipes);
    
    while (isHeadBalancedInLoop(pipes) == false){
        applyFlowCorrectionFactor(pipes, correctionFactor);
        sumHeadloss = sumHeadLossInLoop(pipes);
    }    
    return pipes;
}

module.exports = {startCalculation}
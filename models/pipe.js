/*
 flowDirection should be 1 for clockwise, -1 for counter-clockwise
 Units
    lengthPipe: meters
    roughnessConstant: unitless
    innerPipeDiameter: milimeters
 */
function Pipe(name, diameter, pipeLength, roughness, flowDirection, flow){
    this.name = name,
    this.diameter = diameter;
    this.pipeLength = pipeLength;
    this.roughness = roughness;
    this.flowDirection = flowDirection;
    this.flow = flow;

    this.headLossPerUnitOfFlow = 10.67 * this.pipeLength / (Math.pow(this.roughness, 1.85) * Math.pow(this.diameter / 1000, 4.87));
    

}

Pipe.prototype.inputValues = function(){
    let msg = this.diameter + this.pipeLength + this.roughness;
    return msg;
}

Pipe.prototype.calculateHeadLoss = function(){
    return this.flowDirection * this.headLossPerUnitOfFlow * Math.pow(this.flow, 1.85);
}

module.exports = {
    Pipe
}
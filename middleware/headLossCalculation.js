//Hazen-Williams equation for calculating head loss over the length of a pipe
//SI units
function headLossCalculation(pipeLength, flow, roughnessConstant, diameter){
  if (flow == undefined || flow == '') {
    throw new Error('flow ' + helpers.validateParameterMessage(flow));
  }
  if (roughnessConstant == undefined || roughnessConstant == '') {
    throw new Error('frictionCoef ' + helpers.validateParameterMessage(roughnessConstant));
  }
  if (diameter == undefined || diameter == '') {
    throw new Error('hidraulicDiameter ' + helpers.validateParameterMessage(diameter));
  }
  
/*   multiply pipe length by hydraulic slope to obtain head loss in meters
  pressure drop can be computed from head loss as hl * unit weight of water
  hl: meters
  pipelength: meters
  flow: m3/s
  roughnessConstant: unitless
  hydraulicDiameter: meters  ! (inside diameter)/4
 */  
let hl = pipeLength * 10.67 * Math.pow(flow,1.85) / (Math.pow(roughnessConstant,1.85) * Math.pow(diameter,4.8655));

  return hl;
}

module.exports = {
    headLossCalculation
}
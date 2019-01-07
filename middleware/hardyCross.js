// flows in a network of pipes forming one or more closed loops

/* Units
    lengthPipe: meters
    roughnessConstant: unitless
    innerPipeDiameter: milimeters 
*/
function headlossPerUnitOfFlow(lengthPipe, roughnessConstant, innerPipeDiameter){
    let hlu = 10.67 * lengthPipe /(Math.pow(roughnessConstant, 1.85) * Math.pow(innerPipeDiameter/1000, 4.87));
    return hlu;
}

/* Units
    headlossPerUnitFlow: meters per cubic meters per second
    flow: cubic meters per second
 */
function calculateHeadLoss(headlossPerUnitOfFlow, flow){
    return headlossPerUnitOfFlow * flow
}


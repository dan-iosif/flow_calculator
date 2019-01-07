const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {simpleFlowCalculation} = require('../middleware/flowCalculation');
const {headLossCalculation} = require('../middleware/headLossCalculation');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/about', function(req, res) {
    res.send('About this application.');
})

//define the flow calculation route
router.post('/simple-flow', function (req, res) {
    let diameter = req.body.diameter;
    let velocity = req.body.velocity;

        //
        let flow = simpleFlowCalculation(diameter, velocity)
        res.send({ flow: flow });
});

router.post('/hazen-williams', function(req,res) {
    let pipeLength = req.body.pipeLength;
    let flow = req.body.flow;
    let roughnessConstant = req.body.roughnessConstant;
    let diameter = req.body.diameter;

    let headLoss = headLossCalculation(pipeLength, flow, roughnessConstant, diameter);
    res.send({headLoss: headLoss});
})


module.exports = router;
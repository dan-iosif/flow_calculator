const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {simpleFlowCalculation} = require('../middleware/flowCalculation');
const {headLossCalculation} = require('../middleware/headLossCalculation');
const {parseRequest} = require('../middleware/parseRequest');
const {startCalculation} = require('../middleware/hardyCross');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/about', function(req, res) {
    res.send('About this application.');
})

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

router.post('/hardy-cross', function(req, res){
    let body = req.body;
    var pipeObjects = parseRequest(body);
    var answer = startCalculation(pipeObjects);
})

module.exports = router;
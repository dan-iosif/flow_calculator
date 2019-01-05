const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {simpleFlowCalculation} = require('../middleware/flowCalculation');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/about', function(req, res) {
    res.send('About this application.');
})

//define the flow calculation route
router.post('/', function (req, res) {
    let diameter = req.body.diameter;
    let velocity = req.body.velocity;

        let flow = simpleFlowCalculation(diameter, velocity)
        res.send({ flow: flow });
});


module.exports = router;
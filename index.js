const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {PI} = require('./constants');
const helpers = require('./helpers');



app.use(bodyParser.urlencoded({extended:false}));

app.post('/flow', function(req, res){
    let diameter = req.body.diameter;
    let velocity = req.body.velocity;

    let body = '';

    if (diameter == undefined || diameter == '')   {
        body += 'Diameter ' + helpers.validateParameterMessage(diameter);
    }
    if (velocity == undefined || velocity == '') {
        body += 'Velocity' + helpers.validateParameterMessage(velocity)
    } 
    
    if (body != ''){ 
            res.status(400)
            .send(body);
    } else  {
        let flow = 0.25 * PI * Math.pow(diameter,2) * velocity;
        res.send({flow: flow});
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

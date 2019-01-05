const express = require('express')
 , bodyParser = require('body-parser')
 , app = express()
 , port = 3000   

app.use(bodyParser.urlencoded({extended:false}));

app.use(require('./controllers'));

app.use(function (error, req, res, next) {
    res.status(400)
        .json({ message: error.message });
});

app.listen(port,  () =>
    console.log(`Example app listening on port ${port}!`))

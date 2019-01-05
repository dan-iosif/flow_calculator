const express = require('express')
    , router = express.Router();

router.use('/flow', require('./flow'));

module.exports = router;
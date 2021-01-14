const express = require('express');
const router = express.Router();

const dog = require('./dog/router');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Router Connected Ok!' });
  });

router.use('/dog', dog);

module.exports = router;
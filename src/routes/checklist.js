const express = require('express');

const router = express.Router();

router.get('checkilist', (req, res) => {
    console.log('Olá');
    res.send();
})

module.exports = router;
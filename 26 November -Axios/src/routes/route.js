const express = require('express');
const router = express.Router();

const cryptoController = require("../controllers/cryptoController")
const dustController = require("../dustCode/dustcode")

    router.get('/test-me', function (req, res) {
        res.send('Testing - My first ever api!')
    });


//26 November 
router.post("/getCryptoCurrency", cryptoController.createCryptoCurrency)
router.get("/getCryptoList", cryptoController.getCryptoList)
router.post("/getExperiment", dustController.getCryptoList2)

//Experiment

module.exports = router;
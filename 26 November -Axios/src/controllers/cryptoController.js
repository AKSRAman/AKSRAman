const cryptoModel = require("../models/cryptoModel.js");
const nomgoose = require('mongoose');
const axios = require('axios');

const getCryptoList = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "http://api.coincap.io/v2/assets",
        };
        console.log("WORKING");
        const cryptoTypes = await axios(options);
        let cryptoDetails = cryptoTypes.data;
        res.status(200).send({ msg: "Successfully fetched data", data: cryptoDetails});
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
};

const createCryptoCurrency = async function (req, res) {
    try {
        const cryptoData = req.body;
        let myData = await cryptoModel.create(cryptoData)
        res.status(200).send({ msg: myData })
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "Something went wrong" })
    }
}


module.exports.createCryptoCurrency = createCryptoCurrency;
module.exports. getCryptoList = getCryptoList;
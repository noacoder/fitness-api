var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const FitnessClientsDb = require("../models/FitnessClientsDb");


//req och res här är request och response objekt
router.get('/', function(req, res, next) {

  FitnessClientsDb.find().then(function(fitnessClients) {
    res.json(fitnessClients);
  });
  
});

router.post("/", async (req, res) => {
  try {
    console.log("BODY:", req.body); 
    const newClient = new FitnessClientsDb(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;

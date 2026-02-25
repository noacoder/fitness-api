var mongoose = require('mongoose');

var FitnessSchema = new mongoose.Schema({
    fnamn: String,
    enamn: String,
    age: String,
    trainingStatus: String,
    trainingLevel: String,
    clientStatus: String
},
{
    collection: 'fitnessClientsDb_collection'
});

module.exports = mongoose.model('FitnessClientsDb', FitnessSchema);
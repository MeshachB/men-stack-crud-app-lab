const mongoose = require('mongoose'); // needed

const GoatProducersSchema = new mongoose.Schema({ 
    name: String, 
    hometown: String, 
    era: String,
    style: String // list of artists or songs
}); 

module.exports = mongoose.model('Producer', GoatProducersSchema);


const mongoose = require('mongoose')


const formTemplate= new mongoose.Schema({
    fullname:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    title:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    wallet:{
        type:String,
        required:false
    },
    twittername:{
        type:String,
        required:false
    },
    quote:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: () => Date.now()
    }

})
module.exports = mongoose.model('Mytable',formTemplate)
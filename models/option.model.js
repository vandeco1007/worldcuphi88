const mongoose = require('mongoose')
const matchoption = mongoose.Schema({
    matchStatus1:{
        type:String,
        require:true
    },
    starTime1:{
        type:String,
        required:true
    },
    team1Name:{
        type:String,
        required:true
    },
    team1Image:{
        type:String,
        required:true
    },
    matchStatus2:{
        type:String,
        require:true
    },
    starTime2:{
        type:String,
        required:true
    },
    team2Name:{
        type:String,
        required:true
    },
    team2Image:{
        type:String,
        required:true
    },
    matchStatus3:{
        type:String,
        require:true
    },
    starTime3:{
        type:String,
        required:true
    },
    team3Name:{
        type:String,
        required:true
    },
    team3Image:{
        type:String,
        required:true
    },
    matchStatus4:{
        type:String,
        require:true
    },
    starTime4:{
        type:String,
        required:true
    },
    team4Name:{
        type:String,
        required:true
    },
    team4Image:{
        type:String,
        required:true
    },
    matchStatus5:{
        type:String,
        require:true
    },
    starTime5:{
        type:String,
        required:true
    },
    team5Name:{
        type:String,
        required:true
    },
    team5Image:{
        type:String,
        required:true
    },
    matchStatus6:{
        type:String,
        require:true
    },
    starTime6:{
        type:String,
        required:true
    },
    team6Name:{
        type:String,
        required:true
    },
    team6Image:{
        type:String,
        required:true
    },
    matchStatus7:{
        type:String,
        require:true
    },
    starTime7:{
        type:String,
        required:true
    },
    team7Name:{
        type:String,
        required:true
    },
    team7Image:{
        type:String,
        required:true
    },
    matchStatus8:{
        type:String,
        require:true
    },
    starTime8:{
        type:String,
        required:true
    },
    team8Name:{
        type:String,
        required:true
    },
    team8Image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('matchoption',matchoption)
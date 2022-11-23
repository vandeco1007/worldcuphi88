const matchoption = require('../models/option.model')

module.exports = {
    getOption: async(req,res,next)=>{
        try {
            let option = await matchoption.find()
            res.json(option[0])
        } catch (error) {
            res.json(error)
        }
    },
    createOption: async(req,res,next)=>{
        let {...body} = req.body
        let check = await matchoption.find()
        if(check[0]==undefined){
            console.log(check)
            let create = await matchoption.create(body)
            res.json(create)
        }else{
            console.log("this is check id: "+check[0]._id)
            let update = await matchoption.findOneAndUpdate({_id:check[0]._id},body,{new:true})
            res.json(update)
        }
    },
    deleteOption: async(req,res,next)=>{
        try {
            let del = await matchoption.deleteMany({})
            res.json(del)
        } catch (error) {
            res.json(error)
        }
    }
}

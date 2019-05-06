const billingCycle = require('../models/billingCycle')

billingCycle.methods(['get','post','put','delete'])

billingCycle.updateOptions({ new:true,  runValidators:true })

billingCycle.route('count',(req, res, next) => {
    billingCycle.count((error, value) => {
        if(error){
            res.status(500).json({erors:[error]})
        }else{
            res.json({value})
        }
    })
})

billingCycle.route('summary',(req, res, next) =>{
    billingCycle.aggregate({
        $project:{credit:{$sum:"$credits.value"},debt:{$sum:"$debts.value"}}
    },{
        $group:{_id:null,credit:{$sum:"$credit"},debt:{$sum:"$debt"}}
    },{
        $project:{_id: 0, credit: 1, debt: 1}
    },(error, result) => {
        if(error){
            res.status(500).json({errors:[error]})
        }else{
            res.json(result[0] || {credit: 0, debt:0})
        }
    })
})

module.exports = billingCycle
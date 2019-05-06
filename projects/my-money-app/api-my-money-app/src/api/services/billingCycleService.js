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

module.exports = billingCycle
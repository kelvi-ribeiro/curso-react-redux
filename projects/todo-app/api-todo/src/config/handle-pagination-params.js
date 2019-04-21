module.exports = function(req,res,next){
    req.query.skip = parseInt(req.query.skip)    
    req.query.limit = parseInt(req.query.limit)
    next()
}
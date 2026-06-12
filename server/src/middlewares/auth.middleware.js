const jwt = require('jsonwebtoken')

async function identifyUser(req , res , next){

    const token = req.cookies.jwt_token

    if(!token){
        return res.status(401).json({
            'message' : 'Invalid user token, unauthorized access'
        })
    }

    let decoded = null;

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }
    catch(err){
        return res.status(401).json({
            'message' : 'unauthorized access'
        })  
    }

    req.user = decoded

    next()

}

module.exports = identifyUser
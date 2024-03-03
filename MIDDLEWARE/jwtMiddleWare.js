const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{

    try {
        const token = req.headers['authorization'].split(" ")[1]
        console.log(token);

        const jwtResponse = jwt.verify(token,process.env.SECRETKEY)
        console.log(jwtMiddleware);
        req.payload = jwtResponse.userId
        next()
        
    } catch (error) {
        res.status(401).json('Autherization failed ....please login')
    }
}

module.exports = jwtMiddleware
import jwt from 'jsonwebtoken'

const cookieJwtAuth = (req,res,next)=>{
    try{
    const token = req.cookies.token
    try{
        const user = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        req.user = user 
        next()
    }catch(err){
        res.clearCookie('token')
        return res.status(401).json({message:'token expired'})
    }
    }catch{
        return res.status(400).json({error:'not authorized'})
    }
}
export default cookieJwtAuth
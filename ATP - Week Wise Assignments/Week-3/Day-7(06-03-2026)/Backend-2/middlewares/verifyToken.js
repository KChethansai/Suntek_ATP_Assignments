//To access cookies property of req object,we need cookie parser middleware.Otherwise req.cookis is undefined
import jwt from 'jsonwebtoken'
const {verify}=jwt
export function verifyToken(req,res,next){
    //token verification logic
    const token=req.cookies?.token
    //if req from unauthorized user
    if(!token){
        return res.status(401).json({message:'Plz login'})
    }
    try{
    //if token is existed
    const decodedToken=verify(token,'abcdef')
    console.log(decodedToken)
    req.user=decodedToken
    //call next
    next()
    }catch(err){
        res.status(401).json({message:'Session expired.Plz relogin'})
    }
}
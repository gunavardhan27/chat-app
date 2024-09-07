import asyncHandler from 'express-async-handler'

export const sendMessage = (async (req,res)=>{
    try{
        const message = req.body
        const {id:recieverId} = req.params
        const senderId = req.user._id
        res.status(200).json({message:`${id} ${senderId}`})
    }catch{
        res.status(500).json({error:'internal server error'})
    }
})


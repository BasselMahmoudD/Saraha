

export const globalError = (err,req,res,next)=>{
let code = err.statusCode || 500
res.status(code).json({Error:"Error" , message:err.message})
}
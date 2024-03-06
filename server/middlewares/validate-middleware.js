const { parseAsync } = require("../validators/auth-validator");

const validate=(schema)=>async(req,res,next)=>{
    try{
        const parseBody=await schema.parseAsync(req.body); //make sure the data filled is matchced  with schema or not
        req.body=parseBody;
        next();
    }catch(err){
        const status=422;
        const message="Fill the input properly";
        const extraDetails=err.errors[0].message;

        const error={
            status,message,extraDetails,
        };

        console.log(error);  
        next(error);
    }
}

module.exports=validate;
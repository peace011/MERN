const {z}=require('zod');

const signupSchema=z.object({
    username:z
    .string({required_error: "name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 chars"})
    .max(255, {message:"Name must not be more than 255 chars"}),

    email:z
    .string({required_error:"Email is required"})
    .trim()
    .min(3,{message:"Invalid email address"})
    .max(255, {message:"Email must be at least of 3 chars"}),

    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(3,{message:"Phone must be at least of 10 chars"})
    .max(255, {message:"Phone must be more than 20 chars"}),

     password:z
    .string({required_error:"Email is required"})
    .min(3,{message:"Phone must be at least of 6 chars"})
    .max(255, {message:"Phone must be more than 10 chars"}),

})

module.exports=signupSchema;
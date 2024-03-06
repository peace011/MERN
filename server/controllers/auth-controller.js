const User=require('../models/user-model');
const bcrypt=require('bcryptjs');

const home=async(req,res)=>{
    try{
        res.status(200).send("Welcime to router function  home");
    }catch(error){
        console.log(error);
    }
}

const register=async(req,res)=>{
    try{
        console.log(req.body);
        const {username,email,phone,password}=req.body;
        const userExist=await User.findOne({email:email});
        if(userExist){
            return res.status(400).json({msg:"email already exists"});
        }
        //hash the ppassword
        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password,saltRound);

        const userCreated=await User.create({username,email,phone,password});

         res.status(201).json({msg:"registration successful", token:await userCreated.generateToken(), userId:userCreated._id.toString() }); 
   }
    catch(err){
          res.status(400).json('internal serverrs error');
    }
}

const login=async(req,res)=>{
    try{
        const{email,password}=req.body;

        const userExist=await User.findOne({email});
        console.log(userExist);//\if the email matches then the entire user object is  returned
        // findOne() method of Mongoose or a similar library in other databases returns the entire document (or object) that matches the query criteria, not just the specific field that was used for the query.
        // f a user with the specified email exists in the database, the userExist variable holds the entire user object associated with that email, including all fields such as email, password, username, phone, etc. It's the full user document retrieved from the database.
        if(!userExist){
            return res.status(400).json({msg:"invalid creentials"});
        }

        // const user=await bcrypt.compare(password,userExist.password);
        const user= await userExist.comparePassword(password);

        if(user){
            res.status(200).json({msg:"login successfully done", token:await userExist.generateToken(), userId:userExist._id.toString() }); 
        }else{
            res.status(401).json({msg:"invalid credentioals"});
        }
    }catch(error){
        res.status(500).json("internal server error");
    }
}

const user=async(req,res)=>{
    try{
        const userData= req.user;
        console.log(userData);
        return res.status(200).json({userData});
    }catch(error){
        console.log(`error from the user route ${error}`);
    }
}

module.exports= {home,register,login,user};
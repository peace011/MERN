const mongoose=require('mongoose');

const URI=process.env.MONGODB_URI;
// mongoose.connect(URI,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
// }).then(()=>{
//     console.log("Connection successful");
// }).catch((err)=>console.log('no connection'));

const connectDb=async()=>{
    try{
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Other options if needed
        });
        console.log("Connection successful to Db");
    }catch(error){
        console.error('database connection failed');
        process.exit(0);
    }
}

module.exports=connectDb;
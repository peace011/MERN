const {Schema,model}=require('mongoose');

const serviceSchema=new Schema({
    service:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    provider:{
        type:String,
        require:true,
    },
});

const Service=model('service',serviceSchema);
module.exports=Service;
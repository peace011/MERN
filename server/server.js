require('dotenv').config()
const express = require('express')
const app= express();
const authRoute=require('./router/auth-router');
const connectDb=require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute=require('./router/contact-router')
const serviceRoute=require('./router/service-router');
const cors=require('cors')

// app.use(cors);
const corsOptions={
    origin:'http://localhost:5173',
    method:'GET,POST,PUT,DELETE,PATCH,HEAD',
    credentials:true,
};
app.use(cors(corsOptions));

app.use(express.json()); 
app.use('/api/auth', authRoute);
app.use('/api/form',contactRoute);
app.use('/api/data',serviceRoute);

app.use(errorMiddleware);
// app.get('/', (req,res)=>{
//     // res.json({msg:"Welcomet to mern series  message"})
//     res.status(200).send("Welcome to Home");
// });
connectDb().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running at port.process.env.PORT`);
    });
})



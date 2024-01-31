const express=require("express");
const app=express();
const router=require('./router/auth-router');

app.use('/api/auth', router);

app.get('/', (req,res)=>{
    res.status(200).send("Welcome to mern series")
});

app.get('/register', (req,res)=>{
    res.status(200).send("Welcome to registration");
})

const port=5000;
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})
const express = require('express');
const app= express();
app.use(express.json());

app.get('/signup',(req,res) =>{
    const {username , email , password, dateofbirth}=req.body

    if(!username){
        return res.status(400).json({ error: "Username cannot be empty "})
    }
    if(!email){
        return res.status(400).json({ error: "email cannot be empty "})
    }

    if(!dateofbirth){
        return res.status(400).json({ error: "date of birth cannot be empty "})
    }
         
    if(!password){
        return res.status(400).json({ error: "Password cannot be empty "})
    }
    if(password.length() < 8  && password.length() > 16){
        return res.status(400).json({error:"Password length should be greator then 8 or less then or equal to 16"})
        }
    
   res.status(201).json({
    message: "User signup succesfully ",
    user:{
        username,
        email,
        dateofbirth
    }
   })
})


const PORT=3000
app.listen(PORT,()=>{
    console.log(`Server is runnng on Port ${PORT}`)
});
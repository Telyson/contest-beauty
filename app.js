
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config();

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json({}))
app.use(cors())

const MONGO_URI = 
"mongodb+srv://socialpage-login:socialpage-login@cluster0.ydvat.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("Connected to Database");
})
.catch((err)=>{
    console.log(err);
})


const UserSchema = new mongoose.Schema({

    phone: {
        type: String,
        min: 9,
        max: 11,
    },
    username: {
        type: String,
        
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    
});

const User = mongoose.model("User", UserSchema)



app.post("/login", async(req,res)=>{
    // console.log("Post users data");
    // return res.send("Post users data")
console.log("got here")
    try {

        const body = req.body
        console.log(req.body)
        const preUser = new User(body)
        const user = await preUser.save()
        console.log(user);
       res.status(200).json({status:"success"})
        
    } catch (error) {
        console.log(error);
    }
})


const port = process.env.PORT || 3009

app.listen(port, (err)=> {
    if (err) {
        console.log(err);
    } else {
        console.log(`App is running on port ${port}`);
    }
})



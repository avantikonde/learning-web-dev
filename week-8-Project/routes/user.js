const express = require('express');
const {Router} = require('express');
const mongoose = require('mongoose');
const { UserModel , AdminModel , CourseModel , PurchaseModel} = require('./db');
const jwt = require('jsonwebtoken')
const {JWT_USER_PASSWORD} = require("../config")

const userRouter = Router();


app.post("/signup", async function(req,res) {
    const { email, password, firstname, lastname } = req.body;
    
    const requiredBody = z.object({
        email: z.string().min(5).max(60).email(),
        password: z.string().min(5).max(50),
        firstname: z.string().min(5).max(50),
        lastname: z.string().min(5).max(50)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message:"Incorrect Format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const hashedpassword = await bcrypt.hash(password, 5);
    console.log(hashedpassword)


    await UserModel.create({
        email: email,
        password: hashedpassword,
        firstname: firstname,
        lastname: lastname
    })

    req.json({
        message: "You have signed Up Successfullyy!!"
    })

})

app.post("/signin", async function(req,res) {
    const { email, password } = req.body;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    const passwordMatch = bcrypt.compare(password, user.password);

    if(user && passwordMatch){
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET );
        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        });
    }

});

module.exports = {
    userRouter: userRouter
}

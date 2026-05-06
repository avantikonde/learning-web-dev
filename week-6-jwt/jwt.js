const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "helloeveryone"

app.use(express.json());

const users = [];    

function logger(req,res,next) {
    console.log(req.method + " request came")
    next();
}
app.post("/signup", logger, function(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username,
        password
    })
    res.send({
        message: "You have signed up Successfully!"
    })
});
app.post("/signin", logger, function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password );

    if (user){
        const token = jwt.sign({
            username,
        }, JWT_SECRET);

        user.token = token;
        res.send({
            token
        })
        console.log(users)
    } else {
        res.status(403).send({
            messgae: "Invalid Username or Password"
        })
    }
    function auth(req,res,next){
        const token = req.headers.authorization;
        if(token) {
            jwt.verify(token, JWT_SECRET, function(err, data){
                if(err) {
                    res.status(404).send({
                        message: "Unauthorized"
                    })
                } else {
                    req.user = data;
                    next();
                }  
            });
            
        } else {
            res.status(401).send({
                message: "Doesn't Exists"
            })
        }

    }
    app.get("/me",logger, auth, function(req,res){
        const token = req.headers.authorization;  //create a key "Authorization" in headers and put the token value into it
        const user = users.find(user => user.token === token);
        const userDetails = jwt.verify(token,JWT_SECRET);
        const username = userDetails.username;
        if(user) {
            res.send({
                username: user.username,
                password: user.password
            })
        } else {
            res.status(401).send({
                message: "Unauthorized"
            })
        }
    })
});
app.listen(3000);

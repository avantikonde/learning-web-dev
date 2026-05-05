const express = require("express");
const app = express();

app.use(express.json());

const users = [];    //considering an array of users info

function generateToken(){
    let options = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let token = "";
    for(let i=0; i<32; i++){
        token += options[Math.floor(Math.random() * options.length)];  //Math.random() generates random no. 0-1 and option.length Scales that random number to the size of the options array and Math.floor Rounds it down to get a valid index (like 0, 1, 2, ...) 
    }
    return token;
        
}

app.post("/signup", function(req,res) {
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

app.post("/signin", function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password );

    if (user){
        const token = generateToken();
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

    app.get("/me", function(req,res){
        const token = req.headers.authorization;  //create a key "Authorization" in headers and put the token value into it
        const user = users.find(user => user.token === token);
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

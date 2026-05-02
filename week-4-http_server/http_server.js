const express = require("express");
const app = express();

app.get("/sum/:firstArg/:secondArg", function(req,res){
    const a = parseInt(req.params.firstArg);
    const b = parseInt(req.params.secondArg);

    res.json ({
        ans: a+b 
    })

});
app.get("/sub/:firstArg/:secondArg", function(req,res){
    const a = req.params.firstArg;
    const b = req.params.secondArg;

    res.json ({
        ans: a-b
    })

});
app.get("/multiply/:firstArg/:secondArg", function(req,res){
    const a = req.params.firstArg;
    const b = req.params.secondArg;

    res.json ({
        ans: a*b
    })

});
app.get("/divide/:firstArg/:secondArg", function(req,res){
    const a = req.params.firstArg;
    const b = req.params.secondArg;

    res.json ({
        ans: a/b
    })

});
app.get("/modulus/:firstArg/:secondArg", function(req,res){
    const a = req.params.firstArg;
    const b = req.params.secondArg;

    res.json ({
        ans: a%b
    })

});
app.listen(3000);

// we can use query as well but it will give the input in form of URL 
//params give it in route form for that we specify the route using firstArg and secondArg

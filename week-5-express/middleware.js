const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

let request_count = 0;
function requestIncreaser(req, res, next) {
    request_count = request_count + 1;
    console.log("Total number of request: " + request_count);
    console.log("Method is : " + req.method);
    console.log("Host Name is : " + req.hostname);
    console.log(new Date());

    next(); //moves to next function
}

app.use(requestIncreaser);

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);
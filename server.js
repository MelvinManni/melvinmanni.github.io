const express = require("express");
const bodyParser = require ("body-parser");
const request = require ("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res)=>{

    var email = req.body.email;

    var data = {
        members :[
            {
                email_address: email,
                status: "subscribed"
            }
        ]
    }
    
    var jsonData = JSON.stringify(data);

    options = {
        url: "https://us4.api.mailchimp.com/3.0/lists/9212aae8f1",
        method: "POST",
        headers: {
            "Authorization": "Melvin 99bab853d08e3a0c51e25fa1f1e5ff60-us4"
        },
        body: jsonData

    };
    

    request(options, (error, response, body)=>{
        
        if (error){
            res.sendFile(__dirname + "/failure.html");
        }
        else{

            if(response.statusCode === 200){
                res.sendFile(__dirname + "/success.html");
            }

            else{
                res.sendFile(__dirname + "/failure.html");
            }

            
        }

    })
    
});

app.post("/failure", (req, res) => {
    res.redirect("/");
});


app.post("/success", (req, res) => {
    res.redirect("/");
});


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})

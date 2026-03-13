const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Main Page
app.get("/sumer", (req, res) => {

res.send(`
<!DOCTYPE html>
<html>

<head>

<title>Sumer Registration System</title>

<style>

body{
font-family: Arial, sans-serif;
background: linear-gradient(135deg,#74ebd5,#ACB6E5);
height:100vh;
display:flex;
justify-content:center;
align-items:center;
margin:0;
}

.container{
background:white;
padding:30px;
border-radius:10px;
width:340px;
box-shadow:0 5px 15px rgba(0,0,0,0.2);
text-align:center;
}

/* Professional Header Styling */

.developer{
font-size:13px;
color:#555;
margin-bottom:4px;
letter-spacing:0.5px;
}

.appname{
font-size:24px;
font-weight:600;
color:#222;
margin:6px 0;
}

.subtitle{
font-size:14px;
color:#666;
margin-bottom:15px;
}

h2{
margin-bottom:15px;
color:#333;
}

input{
width:90%;
padding:10px;
margin:10px 0;
border-radius:5px;
border:1px solid #ccc;
}

button{
width:95%;
padding:10px;
background:#4CAF50;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
font-size:16px;
}

button:hover{
background:#45a049;
}

</style>

</head>

<body>

<div class="container">

<h4 class="developer">Developed by Sumer</h4>

<h1 class="appname">Sumer Web Application</h1>

<p class="subtitle">Node.js Form Submission Project</p>

<h2>User Registration Form</h2>

<form action="/submit" method="POST">

<input type="text" name="name" placeholder="Enter your name" required>

<input type="email" name="email" placeholder="Enter your email" required>

<br>

<button type="submit">Submit</button>

</form>

</div>

</body>

</html>
`);
});


// Handle Form Submission
app.post("/submit", (req, res) => {

const name = req.body.name;
const email = req.body.email;

res.send(`
<html>

<head>
<title>Submission Result</title>
</head>

<body style="font-family:Arial;text-align:center;margin-top:100px;">

<h2>Form Submitted Successfully 🎉</h2>

<p><b>Name:</b> ${name}</p>

<p><b>Email:</b> ${email}</p>

<br>

<a href="/sumer">Go Back</a>

</body>

</html>
`);

});


// Start Server
app.listen(PORT, () => {

console.log("Server running at http://localhost:3000/sumer");

});
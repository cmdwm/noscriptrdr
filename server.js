const express = require("express");
const app = express();


app.use(express.static("public"));
const views = __dirname + "/views/"
app.get("/", (req, res) => {
  res.sendFile(views + "index.html");
});
app.get("/make-it", (req, res) => {
  res.sendFile(views + "make-it.html");
});

app.get("/ns", (req, res) => {
  try {
const q = req.query
if(!q.a && !q.b) return res.redirect('/')
if(!q.a.includes('https://')) return res.send('Please tell the site owner to add HTTPS:// to query A for NoScriptRDR.')
if(q.b === "light") {
  
    res.send(`
<html>
	<head>
    <link rel="icon" href="https://cdn.glitch.com/c604be0e-67bd-4b83-bca6-73849f5a25e9%2FOIP-removebg-preview.png">
 <link rel="stylesheet" href="/light.css">
    <title>No Script</title>
<link href="mr_quackers.png" rel="icon" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	</head>
    <body class="w3-container">
<div id="WARNING-CLASS" style="border-radius: 10px !important; " class="w3-panel w3-red">
  <h3>JavaScript Disabled!</h3> 
  <p>To get the best experience from ${q.a.replace("https://", "").replace("http://")}, you need to have JS enabled - it looks like you don't. Here's how you can fix it on the most popular browsers. 
    </p>
</div>
      
      <div id="NORMAL-TEXT">
        <h2><a href="https://enable-javascript.com/">Enable-JavaScript.com</a> has a great guide on how to enable JS on every popular browser.</h2>
        
       <br><br><br>
<div style="color: green; text-align: center">
  Ready to <a href="${q.a}">head back to ${q.a.replace("https://", "").replace("http://")}</a>?
        </div>
      </div>
<footer style="color: black">Created using <a href="/">NoScriptRDR</a>, made by <a href="https://willm.xyz">Will M</a></footer>
</body>
</html>

`)
  
  
  
  
  
  
} else {
  res.send(`
<html>
	<head>
    <link rel="icon" href="https://cdn.glitch.com/c604be0e-67bd-4b83-bca6-73849f5a25e9%2FOIP-removebg-preview.png">
 <link rel="stylesheet" href="/dark.css">
    <title>No Script</title>
<link href="mr_quackers.png" rel="icon" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	</head>
    <body class="w3-container">
<div id="WARNING-CLASS" style="border-radius: 10px !important; " class="w3-panel w3-red">
  <h3>JavaScript Disabled!</h3> 
  <p>To get the best experience from ${q.a.replace("https://", "").replace("http://")}, you need to have JS enabled - it looks like you don't. Here's how you can fix it on the most popular browsers. 
    </p>
</div>
      
      <div id="NORMAL-TEXT">
        <h2><a href="https://enable-javascript.com/">Enable-JavaScript.com</a> has a great guide on how to enable JS on every popular browser.</h2>
        
       <br><br><br>
<div style="color: green; text-align: center">
  Ready to <a href="${q.a}">head back to ${q.a.replace("https://", "").replace("http://")}</a>?
        </div>
      </div>
      <footer style="color: white">Created using <a href="/">NoScriptRDR</a> made by <a href="https://willm.xyz">Will M</a></footer>
</body>
</html>

`)
}
  } catch {
    res.redirect('/')
  }
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

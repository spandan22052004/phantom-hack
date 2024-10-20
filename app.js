const express = require('express');
const app = express();
const PORT = 3000;  // Choose any port you like
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));

// Define a simple route
app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home',(req,res)=>{
    res.render("./index.ejs",{name:'Spandan'});
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

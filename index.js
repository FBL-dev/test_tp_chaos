const express = require("express"); 
const app = express(); 
 
app.get("/health", (req, res) => { 
  res.status(200).json({ status: "UP" }); 
}); 
 
app.get("/add", (req, res) => { 
  const a = parseInt(req.query.a); 
  const b = parseInt(req.query.b); 
  res.json({ result: a + b }); 
}); 
 
module.exports = app; 
 
if (require.main === module) { 
  app.listen(3000, () => { 
    console.log("App running on port 3000"); 
  }); 
} 

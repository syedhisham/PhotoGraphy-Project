const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const port = 3000;

const staticPath = path.join(__dirname,"../public")
app.use(express.static(staticPath));
app.get('/', (req, res) => {
  res.send('home.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

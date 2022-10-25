const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.post('/gupshupwebhook', (req, res) => {
  fs.appendFileSync('webhook.txt', "\n\n------------\n" + JSON.stringify(req.headers) + "\n" + JSON.stringify(req.body));
  res.sendStatus(200);
});

app.listen('9999', ()=> {
  console.log("Listening on port 3000");
});
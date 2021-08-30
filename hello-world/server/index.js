//npm init -y & npm i express

const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/*REMEMBER TO EDIT JSON FOLDER!!!!!
EDIT MAIN TO JS PATH
ADD START BELOW TEST
{
  "name": "deployment-demo",
  "version": "1.0.0",
  "main": "server/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/index.js"
*/

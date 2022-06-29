const express = require("express");
const app = express();
const port = 8000;
var mysql = require("mysql");
app.use(express.json())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "matrimony",
});

con.connect(function (err) {
  if (err)
    console.log(err);
});

app.post("/login", function (req, res) {

  con.query("SELECT id FROM tblusers where txtname='" + req.body.name + "' and txtPassword ='" + req.body.password + "'"
    ,
    function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
});

app.post("/signup", function (req, res) {
  con.query("insert into tblusers(txtProfileFor,txtUsername,Mobilenumber)value('" + req.body.ProfileFor + "','" + req.body.name + "'," + req.body.Mobilenumber + ") ",
    function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
});
app.post("/register", function (req, res) {
  con.query(
    "update tblusers set dtBOB='" + req.body.DOB + "', refReligion='" + req.body.religion + "',refCaste='" + req.body.caste + "',refMothertounge='" + req.body.mothertoungue + "',txtEmail='" + req.body.email + "'",
    function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });

  app.post("/profile", function (req, res) {
    con.query("select txtUsername,txtHeight,txtGender,dtBOB,refReligion,refCaste,refMothertounge,txtEmail,txtAddress,txtInterests,refEducation,refProfession,refState,blImage,Mobilenumber from tblusers",
    function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
  });


app.listen(port, function () {
  console.log("Server is running");
});



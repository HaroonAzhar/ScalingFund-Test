var express = require("express");
var router = express.Router();
const fetch = require("fetch");
const axios = require('axios').default;

/* GET home page. */
router.get("/events/get-invertors", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  // fetch("http://localhost:9000").then((response) => {
  //   console.log("data", response);
    
  //   response.json();
  // });
     let  result ; 
  axios.get('http://localhost:9000')
  .then(function (response) {
    // handle success
    console.log(response);
    result = response
    
  })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // return .json();
});

module.exports = router;

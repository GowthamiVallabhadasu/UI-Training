

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let data = [{
    name: "Gowthami Vallabhadasu",
    age: 21,
    salary: 51000
  },
  {
    name: "Gowthami",
    age: 21,
    salary: 40000
  },

  ]
  res.render('index', {
    title: 'Express',
    myName: "mGowthami", 
    users: data
  });
});

module.exports = router;

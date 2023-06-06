const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('bmi');
});

app.post('/', (req, res) => {
  var age = req.body.age;
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height)/100;
  var bmi = weight/(height**2);
  if (isNaN(bmi)){
    res.render('bmi', { result: "Height and weight must be numbers"});
  }
  else {
    res.render('bmi', { result: "Your BMI is: "+bmi.toString()});
  }

});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

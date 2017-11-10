var express = require('express');
var router = express.Router();

router.post('/weather', function(req,res,next){
  
  if(!req.body || !req.body.day){
    return res.send({
      error : 'Give me something to play'
    });
  }

  // var spuriousResponse1 = {
  //   message : 1
  // };
  // return res.send(spuriousResponse1);

  var spuriousResponse2 = {
    messages : "hola"
  };
  return res.send(spuriousResponse2);

  // var spuriousResponse3 = {
  //   message : "hola",
  //   warning : "due to a dev error this key was added in response, and we don't yet have ajv"
  // };
  // return res.send(spuriousResponse3);

  var reqDay = req.body.day;
  var responseMessage;
  if(reqDay == 'today'){
    responseMessage = 'foggy';
  }
  if(reqDay == 'yesterday'){
    responseMessage = 'Smoggy and Poisonous';
  }
  if(reqDay == 'tomorrow'){
    responseMessage = 'Lazy';
  }
  if(responseMessage){
    return res.send({
      message : responseMessage
    });
  }
  console.log(req.body);
  return res.send({
    error : 'This is an error.'
  });
});
function circuitbreaker(req,res,next){
  console.log('inside the circuitbreaker function');
  console.log('this has been done to test the timeout functionality of the mocha test cases');
  return setTimeout(function(){
    return next();
  },5000);
}
module.exports = router;

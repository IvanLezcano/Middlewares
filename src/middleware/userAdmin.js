const fs =require ('fs')
const path = require('path');

const users =["Ada","Damian"]

function  adminMiddleware(req,res,next){
     
   for (let i = 0; i < users.length; i++) {
    if(req.params === users[i]) {
        return res.send('hola admin: ' + req.parms)
      }else{
       return res.send('no existe el usuario')
      }
   
 }
  
 next()
}

module.exports=adminMiddleware;


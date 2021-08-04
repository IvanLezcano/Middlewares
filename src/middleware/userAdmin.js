const fs =require ('fs')
const path = require('path');

let users =["Ada","Greta","Vim","Tim"]

function  adminMiddleware(req,res,next){
    let todoloqueintentamosfalloyporesorecurrimosaestoyaqueesimposibleencontrarlelalogica = 0
    if(req.query.usuario !==undefined){
                users.forEach(usuario => {
                
                        if(req.query.usuario === usuario){
                        res.send("Hola Admin " + req.query.usuario)
                    }
                    else{
                        todoloqueintentamosfalloyporesorecurrimosaestoyaqueesimposibleencontrarlelalogica = todoloqueintentamosfalloyporesorecurrimosaestoyaqueesimposibleencontrarlelalogica + 1
                    }
                    
                });}  
    if(todoloqueintentamosfalloyporesorecurrimosaestoyaqueesimposibleencontrarlelalogica >0){
        console.log(todoloqueintentamosfalloyporesorecurrimosaestoyaqueesimposibleencontrarlelalogica)
        res.send("No tengo los permisos")
    }

 

    next()
}

module.exports=adminMiddleware;


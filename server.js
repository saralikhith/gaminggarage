//import express module
const exp=require('express');
//import path
const path = require('path');


//create express object
const app=exp();

//import userApi
let userApi=require('./APIS/userapi')

//import adminApi
let adminApi=require('./APIS/adminapi')

//import productApi
let productApi=require('./APIS/productapi')


//import express async-handler
const errorHandler=require('express-async-handler')

//import bcryptjs
const bcryptjs=require('bcryptjs')

//import dotenv
require('dotenv').config()


//import jsonwebtoken
const jwt=require('jsonwebtoken')




//connect express server with mongodb data base

//get connection string
const dataBaseUrl=process.env.DATABASE_URL

//import mongoclient from mongodb
const mc=require('mongodb').MongoClient

//connect to database
mc.connect(dataBaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log(err)
    }
    else{
        //get database object from client object
        let dataBaseObj=client.db('gamesdatabase')
        console.log('connected to database')
       
        //get collection object
        let userCollectionObj=dataBaseObj.collection('usercollection')
        let adminCollectionObj=dataBaseObj.collection('admincollection')
        let productCollectionObj=dataBaseObj.collection('productcollection')
         let contactUsCollectionObj=dataBaseObj.collection('contact-uscollection')
         let usercartCollectionObj=dataBaseObj.collection('usercartcollection')

        //set collection obj to exp obj
        app.set('userCollectionObj',userCollectionObj)
        app.set('adminCollectionObj',adminCollectionObj)
        app.set('productCollectionObj',productCollectionObj)
        app.set('contactUsCollectionObj',contactUsCollectionObj)
        app.set('usercartCollectionObj',usercartCollectionObj)

    }

})




//connect server to angular app
app.use(exp.static(path.join(__dirname,'./dist/GamingGarage/')))




//get body parser
app.use(exp.json())

//login handler
app.post('/login',errorHandler(async(req,res)=>{
    //get usercollection object
    let userCollectionObj=  req.app.get('userCollectionObj')

    //get admin collection obj
    let adminCollectionObj=req.app.get('adminCollectionObj')
    //get login obj
     let credentials=req.body;

    //search username is valid or not in user
     let user=await userCollectionObj.findOne({username:credentials.username})
     
     //search username is valid or not in admin
     let adminUser=await adminCollectionObj.findOne({username:credentials.username})
    

     if(user==null && adminUser==null){
         res.send({message:'username is invalid'})
     }
     else if(user!==null && adminUser==null){
         //check password is valid or not
         let resultOfUser=await bcryptjs.compare(credentials.password,user.password)

         if(resultOfUser==false){
            res.send({message:'password is  invalid'})
         }
         else{
               //create a token
          let token=   jwt.sign({username:credentials.username},process.env.SECRETKEY,{expiresIn:"2d"})
              
               //send token to client
             res.send({message:'user login success',token:token,username:credentials.username,userObj:user})
         }
     }
     else if(user==null && adminUser!==null){
             //check password is valid or not 
             let resultOfAdmin=await bcryptjs.compare(credentials.password,adminUser.password)   
             
             
         if(resultOfAdmin==false){
            res.send({message:'password is  invalid'})
         }
         else{
            //create a token
       let token=   jwt.sign({username:credentials.username},process.env.SECRETKEY,{expiresIn:"2d"})
           
            //send token to client
          res.send({message:'admin login success',token:token,username:credentials.username,userObj:adminUser})
      }

     }

    

}))



//contact-us handler
app.post('/contact-us',errorHandler(async(req,res)=>{
    
    let contactUsCollectionObj=req.app.get('contactUsCollectionObj')

    message=req.body;
 

    await contactUsCollectionObj.insertOne(message)
    res.send({message:'issue saved'})
    
})) 



//if path is /user forward to user-api
app.use('/user',userApi)
app.use('/admin',adminApi)
app.use('/products',productApi)






//error handling for invalid path
app.use((req,res,next)=>{
       res.send({message:`path ${req.url} is invalid`})
})

//error handling for invalid syntax
app.use((err,req,res,next)=>{
        console.log(err.message)
        res.send({message:`${err.message}`})
})


//assign port number to server
port=process.env.PORT || 3000
app.listen(port,()=>{
           console.log(`server listening to ${port}....`)
})
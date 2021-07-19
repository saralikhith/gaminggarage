//import mini express module
const exp=require('express')

//create an object
const userApi=exp.Router();

//import express async-handler
const errorHandler=require('express-async-handler')

//import bcryptjs
const bcryptjs=require('bcryptjs')

//import jsonwebtoken
const jwt=require('jsonwebtoken')

//import multerobj
const multer=require('./middlewares/multer')


//create an user
userApi.post('/createuser',multer.single('photo'),errorHandler(async(req,res)=>{
    //get usercollectionobj
  let userCollectionObj=  req.app.get('userCollectionObj')
   //get admin collection obj
   let adminCollectionObj=req.app.get('adminCollectionObj')

    //get userobj
    let newUser=JSON.parse(req.body.userObj);

    //get adminObj
    let adminUser=await adminCollectionObj.findOne({username:newUser.username})

    if(adminUser==null){
    //username should'nt match
    let user=await userCollectionObj.findOne({username:newUser.username})

    //if username already existed then do not add 
    if(user!==null){
        res.send({message:`username ${user.username} already existed`})
    }
    else{
        //need to hash the password
        hashedPassword= await bcryptjs.hash(newUser.password,7)
        //replace password with hashed password
        newUser.password=hashedPassword;
        //insert user to database

        //get cdn link 
        newUser.profilePic=req.file.path;
        delete newUser.photo
        await userCollectionObj.insertOne(newUser)
        res.send({message:'user created successfully'})

    }
}
else{
    res.send({message:`username ${adminUser.username} already existed`})
}
    
}))

userApi.post('/add-to-cart',errorHandler(async(req,res)=>{
    //get collection obj
    let usercartCollectionObj=req.app.get('usercartCollectionObj')
    let newProdObj=req.body;
    
    //find in usercartcollection
    let userCart=await usercartCollectionObj.findOne({username:newProdObj.username})

    if(userCart==null){
        
        //create new object
        let products=[];
 products.push(newProdObj.gameObj)
        let newCartObj={username:newProdObj.username,products}
        //insert to db
        await usercartCollectionObj.insertOne(newCartObj)
       
  let latestData=await userCartCollectionObj.findOne({username:newProdObj.username})

  res.send({message:'new product added to cart',latestData:latestData})
   }
else{
    
    userCart.products.push(newProdObj.gameObj)

  await usercartCollectionObj.updateOne({username:newProdObj.username},{$set:{...userCart}})


  let latestData=await usercartCollectionObj.findOne({username:newProdObj.username})

  res.send({message:'new product added to cart',latestData:latestData})
  
}

}))

userApi.get('/getproducts/:username',errorHandler(async(req,res)=>{
      //connect usercollection
      let usercartCollectionObj=req.app.get('usercartCollectionObj')
      //get username from url
      let un=req.params.username;
      
      //search by user
      let userProdObj=await usercartCollectionObj.findOne({username:un})
   
      if(userProdObj===null){
         res.send({message:'cart is empty'})
      }
      else{
         res.send({message:userProdObj})
      }
}))



//export api to server 
module.exports=userApi;
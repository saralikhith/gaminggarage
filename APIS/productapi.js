//import miniexpress
const exp=require('express')

const productApi=exp.Router();

//import express async-handler
const errorHandler=require('express-async-handler')


//import json web token
const jwt=require('jsonwebtoken')



//import multerobj
const multer=require('./middlewares/multer')

//import verifyToken
const verifyToken=require('./middlewares/verifyToken')

productApi.post('/addproducts',verifyToken,errorHandler(async(req,res)=>{

    //get product collection object
    let productCollectionObj=req.app.get('productCollectionObj')
            
    //get userobj from body
    let newProd=req.body;

    //check whether title is present or not
    let prodObj=await productCollectionObj.findOne({title:newProd.title})

    if(prodObj!==null){
        res.send({message:'product already existed'})
    }
    else{
    
        await productCollectionObj.insertOne(newProd)
        res.send({message:'product created successfully'})
    }
}))

productApi.get('/getproducts',errorHandler(async(req,res)=>{

     //get product collection object
     let productCollectionObj=req.app.get('productCollectionObj')

    
     let prods= await productCollectionObj.find().toArray()
   
     res.send({message:prods})
    
    

}))


//delete product
//delete an product
productApi.delete('/deleteproduct/:title',verifyToken,errorHandler(async(req,res)=>{
    //get product collection
    let productCollectionObj=req.app.get('productCollectionObj')

    //get username
    let mode=req.params.title;

    
    //delete in db
    await productCollectionObj.deleteOne({title:mode})

    let newProducts=await productCollectionObj.find().toArray()
    
    res.send({message:'product deleted  successfully',newProducts:newProducts})


}))

//export it
module.exports=productApi;
const express = require('express');
const ProductData = require('./src/model/Productdata');
const cors = require('cors');
var bodyparser = require('body-parser');
const { isValidObjectId } = require('mongoose');
var app = new express();

app.use(cors());
app.use(bodyparser.json());

app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.find()
    .then(function(products){
        res.json(products);
    });
});

app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product={
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl  
    }
    var product=new ProductData(product);
    product.save();
});

// delete products
// app.get('/:id',function(req,res){
//     if(!isValidObjectId.isValid(req.params.id))
//       return res.status(400).send('No record');
//       ProductData.findByIdAndRemove(req.params.id,function(err,result){
//         if(!err)
//                 {
//                     res.send(result);
//                 }
//                 else{
//                     console.log('error in employee delete: '+JSON.stringify(err,undefined,2));
//                 }
//       });
// });
// app.get('/delete/:id',function(req,res)
// {
//     ProductData.deleteOne({_id:req.params.id})
//     .then(function(products){
        
//         res.redirect('/products')
//         products
//     }); 
// });
app.get('/delete/:id',function(req,res){
    ProductData.remove({_id:req.params.id},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});


app.listen(3000);
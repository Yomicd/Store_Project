// import express to create express routers
const express = require("express");
//create router
const router = express.Router();
const productControllers = require('../controllers/productControllers')

//router 1
//index of all products
('/products')
.get(productControllers.getAllTeas)

//new product
('products/new')
.get
.post 

//delete product
('/products/:id')
.get
.delete
.put


//update product
('products/:id')
.get
.put

//create product
('/products')
.get
.post

//edit product
('/products/:id/edit')
.get
.put

//show product
('/products/:id')
.get
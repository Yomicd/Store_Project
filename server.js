// import express application
const express = require('express');
const teaProducts = require('./models/productModel')
const app = express();
const dotenv = require('dotenv')
//use dotenv to connect to our config file, run before app is called

// Setting engine to display my JSX 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
//define variable for my product model
const teaData = require('./models/productModel')
//Homepage
app.get('/', (req, res)=>{
    res.render('Home', {teaProducts:teaData})
})
// render the Index to show all products
app.get('/products', (req,res)=>{
    res.render('Index', {teaProducts: teaData})
})
//get a single product on show page
app.get('/product/:id', (req, res)=>{
    res.render('Show',{teaProducts:teaData[req.params.id]})
})
// form to create a new product
app.get('/products/new', (req, res)=>{
    res.render('New')
})
//update an item with edit form
app.post('/product/:id/edit', (req, res)=>{
    res.render('Edit')
    teaProducts.findbyIdAndUpdate()
})
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})

//------------------Code for DB in future--------------------------
// update product data
// app.put('product/:id', (req, res)=>{
//     res.render('Show',{teaProducts:teaData[req.params.id]})

// })
//delete an item
// app.get('/products/:id/delete', (req, res)=>{
//     console.log(req.params.id)
//     console.log(deletedTea)
//     res.redirect('Delete')
// })
  

// const TeaClusterDB = mongoose.connect(process.env.DATABASE.replace("<password>", process.env.PASSWORD)).then(() =>{
//     console.log("DATABASE IS UP AND RUNNING...")
//   })

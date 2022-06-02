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
app.post('/products/new', (req, res)=>{
    res.render('New')
})

//delete an item
app.get('/products/:id/delete', (req, res)=>{
    console.log(req.params.id)
    console.log(deletedTea)
    res.redirect('Delete')
})

//update an item with edit form
app.post('products/:id/Edit', (req, res)=>{
    teaProducts.push(req.body)
    res.redirect('products')

})
// update product data
app.put('products/:id', (req, res)=>{
    res.render('Show',{teaProducts:teaData[req.params.id]})


})




const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})


  

// const TeaClusterDB = mongoose.connect(process.env.DATABASE.replace("<password>", process.env.PASSWORD)).then(() =>{
//     console.log("DATABASE IS UP AND RUNNING...")
//   })

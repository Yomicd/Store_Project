//inmport react
const React = require('react');
const teaProducts = require('../models/productModel')

const newFormBody = {
    backgroundColor: "#efdb3e",
    color: "a68fb6",
    fontWeight: "200",

}
const myh3 = {
    textAlign: "center",
    paddingTop: "10px"
}
//create form

class New extends React.Component{
    render(){
        return(
            <>

            <body style={newFormBody}>
                <h3 style={myh3}>Add A New Tea</h3>


            <form action='/products/new' method='post'>
                Product Name: <input type='text' name='name' placeholder='type'></input>
                Product Price: <input type='text' name='price' placeholder='type'></input>
                Product Category: <input type='text' name='category' placeholder='type'></input>
                Product Quantity: <input type='text' name='quantity' placeholder='type'></input>
                Product Ingredients: <input type='text' name='ingredients' placeholder='type'></input>
                Product Image: <input type='text' name='ingredients' placeholder='type'></input>
                
            </form>
            </body>
            </>
        )
    }
}
//send form new to method = POST to products page
module.exports = New

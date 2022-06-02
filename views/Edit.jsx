//inmport react

const React = require('react');
const teaProducts = require('../models/productModel')

const newFormBody = {
    backgroundColor: "white",
    color: "#ebb1ba",
    fontWeight: "200",
    margin: "2rem",
    padding: "1em",
    paddingTop: "2px"
    

}
const formelements = {
    color: "#ebb1ba",
    paddingTop: "5px",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column"
}

const myh3 = {
    textAlign: "center",
    paddingTop: "10px",
    color: "white"
}
//create form

class Edit extends React.Component{
    render(){
        return(
            <>

            <body style={newFormBody}>
                <h3 style={myh3}>Update Tea</h3>


            <form style={formelements} action='/product/:id/' method='post'>
                Product Name: <input type='text' name='name' placeholder='type' value={teaProducts.name}></input>
                Product Price: <input type='text' name='price' placeholder='0' value={teaProducts.Price}></input>
                Product Category: <input type='text' name='category' placeholder='' value={teaProducts.Category}></input>
                Product Quantity: <input type='text' name='quantity' placeholder='0' value={teaProducts.Quantity}></input>
                Product Ingredients: <input type='text' name='ingredients' placeholder='ingredients' value={teaProducts.Ingredients}></input>
                Product Image: <textarea type='text' name='image' placeholder='paste url'></textarea>
                <input type="submit" name='' value="Update"></input>
            </form>
            </body>
            </>
        )
    }
}

module.exports = Edit
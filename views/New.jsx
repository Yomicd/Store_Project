//inmport react
const React = require('react');
//const teaProducts = require('../models/productModel')
const newFormBody = {
    backgroundColor: "white",
    color: "#c8a27c",
    fontWeight: "200",
    margin: "2rem",
    padding: "30em",
    paddingTop: "5px"
}
const formelements = {
    color: "#c8a27c",
    paddingTop: "5px",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column"
}

const myh3 = {
    textAlign: "center",
    paddingTop: "10px",
    color: "#c8a27c"
}
//create form

class New extends React.Component{
    render(){
        return(
            <>

            <body style={newFormBody}>
                <h3 style={myh3}>Add A New Tea</h3>


            <form style={formelements} action='/products/' method='post'>
                Product Name: <input type='text' name='name' placeholder='type'></input>
                Product Price: <input type='text' name='price' placeholder='0'></input>
                Product Category: <input type='text' name='category' placeholder=''></input>
                Product Quantity: <input type='text' name='quantity' placeholder='0'></input>
                Product Ingredients: <input type='text' name='ingredients' placeholder='ingredients'></input>
                Product Image: <textarea type='text' name='image' placeholder='paste url'></textarea>
                <input type="submit" name='' value="Add New"></input>
            </form>
            </body>
            </>
        )
    }
}
//send form new to method = POST to products page
module.exports = New

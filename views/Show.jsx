//require react
const React = require('react');
const teaProducts = require('../models/productModel')
const thisColor = {backgroundColor: "#efdb3e"}
const showBody = {
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYSH26w8Acs1o2QbGXjzQ1ZDaZFgXWSO166f5FifZUBxg7vEBZtg5GXFLrJJtvRh30Vs&usqp=CAU')",
    backgroundColor: "#efdb3e",
    color: "a68fb6",
    fontWeight: "200",
    

}

const showHeader = {
    justifyContent: "center",
    color: "#ebb1ba"

}
const myLinks = {
    padding: ".5rem",
    color: "#c8a27c"

}
const teaImage = {
    width: "500px",
    height: "500 px",
    display:"50 px",
    justifyContent: "center",
    paddingRight: "15px",
    paddingLeft: "15px"
    
}


class Show extends React.Component{
 // render single product   
    render(){
        const teaProducts = this.props.teaProducts;
        console.log(teaProducts);
        return(
            <>
                
                  <body style={{showBody}}>
                  <h1 style={showHeader}>{teaProducts.Name}</h1>
                  <img style={teaImage}src={teaProducts.img}></img>
                  <br></br>
                  <h3>Price: {teaProducts.Price} </h3>
                  <h4>Ingredients: {teaProducts.Ingredients}</h4>
                  <h5>In Stock: {teaProducts.Quantity}</h5>
    
            
                <a style={myLinks} href='/products/'>Back</a>
                <br></br>

                <a style={myLinks} href='/product/:id/edit'>Edit</a>
                <br></br>
                <a style={myLinks} href={`/products/${teaProducts.id}`}>Delete</a>
                </body>
            </>
        )

    }
}



//export single product
module.exports = Show;
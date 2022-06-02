//require react
const React = require('react');

const teaProducts = require('../models/productModel')

const myBody = { backgroundColor: "a68fb6",
                color: "white ",
                margin: ".5rem",
                backgroundSize: "cover",
                backgroundImage: "url('https://cdn.shopify.com/s/files/1/0428/8521/products/Green1_1024x1024.jpg?v=1584288447')"

}
const mytitle = { textAlign: "center",
    
}

const myh4 = {
    textAlign: "center",
    paddingTop: "10px"
}

const teaContainer = {
    display: "flex"
}
const myLinks = {
    padding: "3px",
    color: "#c8a27c",
    fontSize: "20px",
    border: "solid 3px",
    borderRadius:"2px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "sea green",
    
    

}
const teaImage = {
    width: "200px",
    height: "200 px",
    justifyContent: "center",
    paddingRight: "15px",
    paddingLeft: "15px"
    
}


class Home extends React.Component{
    render(){
        //render homepage styling
        const {teaProducts} = this.props
        return(
            <>
            <body style={myBody}></body>
            <h1 style ={mytitle}>"What's The Tea"</h1>
                  
                        <>
                        <h4 style={myh4}>Providing Wellness with every cup</h4>
                        <a style={myLinks} href='/products'>Start Here</a>
                        </>
                       
                         
                    
            </> 
        
      
                     
            
        )
    }
}
// export homepage
module.exports = Home
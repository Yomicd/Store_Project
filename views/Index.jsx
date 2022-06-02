//import react
const React = require('react');
const teaProducts = require('../models/productModel');

const thisNav = {
    color: "#ebb1ba",
    height: "100px", 
    borderWidth:".2px",
    border: "black, solid",
    padding:" 8px",
    height: "15px",
    marginBottom: ".2em",
    textAlign: "center",
    justifyContent: "center"

    


}
const navContainer = {
    borderWidth:".2px",
    margin: ".2em",
    display: "flex"
}

const teaImage = {
    width: "300px",
    height: "300px",
    padding: "2px",
    margin: ".2rem",

   
    
}

const bodyContainer = {
    display: "flex",
    
}
const indexBody = {
    backgroundColor: "#efdb3e",
    color: "a68fb6",
    fontWeight: "200",  
    background: "cover",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "8rem",
    
    
    


}
const indexItem = { color: "#ebb1ba",
display:"flex",

}

const thisFooter = {
    backgroundColor: "#ebb1ba",
    color: "white",
    height: "4vh",
    fontWeight: "200",
    textAlign: "center",
    display:"flex",
    position: "relative",
    top: "40px"

}


class Index extends React.Component{
    //render tea products index
    //create style for index
    render(){
        const {teaProducts} = this.props
        return(
            
            <> 
            <div style={navContainer}>
                    <a href="/" style={thisNav}>Home</a>
                    <nav style={thisNav}>Wellness Tips</nav>
                    </div>

            
                
            
                <body style={indexBody}>

                    <div style={bodyContainer}>
                    
                    </div>
                        
                    {
                        this.props.teaProducts.map((teaProducts,i, props)=>{
                            return(

                                 <>
                                <div style={teaImage}>
                                    <a style={indexItem} href={`/product/${i}`}>{teaProducts.Name}</a>
                                    <img style={teaImage}src={teaProducts.img}></img>

                                   
              
                                </div>
                               
                                
                                </>
                               
                                

                                
                            )
                        })
                    }
                
                   
                </body> 
                 <>
                    <a style={indexItem} href={`/products/new`}>Create New Product</a>
                    </>
            

            </>
           
        )
           
                }}      


//export tea index
module.exports = Index





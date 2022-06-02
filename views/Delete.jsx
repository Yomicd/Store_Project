const React = require('react');


class Delete extends React.Component{
    render(){
        return(
            <>
            <form action='/products/:id' method='post'>
                Product Name: <input type='text' name='name' placeholder='type'></input>
                Product Price: <input type='text' name='price' placeholder='type'></input>
                
            </form>
            </>
        )
    }
}

module.exports = Delete
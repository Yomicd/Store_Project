// // import model for products
// // const Tea = require('/models/productModel')

// //GET /products/, retrieve all products in an index or list
// exports.getAllTeas = async (req, res) =>{
//     //retrieve all teas from database
//         const teas = await Tea.find();
//         try {
//          //send response success   
//         res.status(200).render({
//             status: "success",
//             data: {tea}
//         })


//         res.render()
//     } 
//     catch(error){
//         res.status(404).render({
//             status: "error",
//             message: error,
//         })
//     }
// }

// exports.getSingleTea = async (req, res) =>{
//     //retrieve single tea for show page
//     const showTea = await Tea.findbyId();
//     try {
//         //send response
//         res.status(200).render({
//             status: "success",
//             data: {showTea}
//         })

//         res.render()
//     }
//     catch(error){
//         res.status(404).render({
//             status: "error oops, wrong way",
//             message: error
//         })
//     }
// }




// //GET /products/new, show user a new form to create new product
// exports.createProduct = async (req, res) => {
//     // create new product 
//     const newTea = await Tea.create(req.body);
//     try{
        
//         res.status(201).render({
//             status: "success",
//             data: {
//                 newTea
//             },
//         });
//     } catch(error) {
//         res.status(404).render({
//             status: "error",
//             message: error,
//         })
//     }

// };


// //DELETE /products/:id, delete a product with a form submission
// // redirect to index
// exports.deleteProduct = async (req, res) => {
//     try {
//         await Tea.findByIdAndDelete(request.params.id)
//         res.status(200).render({
//             data: {},
//         });
//     } catch(error) {
//         res.status(404).render({
//             status: "error",
//             message: error
//         })
//     }
// };    


// //PUT /products/:id, update data about a product with form submission
// //redirect to product show page
// exports.updateProduct = async (request, response) => {
   
//         const updateProduct = await Coffee.findByIdAndUpdate(request.params.id, request.body, {new: true});
//      try {    
//          response.status(500).render({
//             status:"fail",
//             data: {
//                 updateProduct,
//             },
//         });
//     } catch(error) {
//         response.status(500).render({
//             status: "fail",
//             message: error
//         })
//     }
// };



// //POST /products, create product with form submission
// //redirect to the index
// exports.createProduct = async (request, response) => {
//     // create new product 
//     const newProduct = await Coffee.create(request.body);
//     try{
//         // send response 
//         response.status(201).render({
//             status: "success",
//             data: {
//                 newProduct: newProduct,
//             },
//         });
//     } catch(error) {
//         response.status(500).render({
//             status: "error",
//             message: error,
//         })
//     }

// };

// module.exports = getAllTeas, createProduct, deleteProduct, updateProduct

const mongoose = require("mongoose")

//product schemas
const productSchema = mongoose.Schema ({
    productName: {
        type: String,
    },
    productCategory: {
        type: String,
    },
    productPrice: {
        type: Number,
    },
    productQuantity: {
        type: Number,
    },
   
})

//module.export
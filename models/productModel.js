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

const Tea = mongoose.model("Tea", productSchema);

module.exports = Tea;
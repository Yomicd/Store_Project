

//product schemas
const teaProducts = [
    {
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/BANANA_DULCE_800x.jpg?v=1582508854",
        Name: "Anxie-tea",
        Category: "stress relief",
        Price: "$30.00",
        Quantity: "7",
        Ingredients: ["Chamomile", "Lavender", "Kava"]
    },
    
    {
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/LIQUID_JADE_800x.jpg?v=1582490954",
        Name: "Clari-tea",
        Category: "focus",
        Price: "$30.00",
        Quantity: "7",
        Ingredients: ["Green Tea", "Ginger", "Peach"]
        
    },
    
    {
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/SUMMER_PEACH_800x.jpg?v=1582325253",
        Name: "Pu-erh Power",
        Category: "Energy Boosting",
        Price: "$30.00",
        Quantity: "7",
        Ingredients: ["Pu-erh", " Peppermint", " Peach"]
    },
    
    {
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/ROSE_BLACK_3d550f88-e237-44e3-9d54-424072b4f554_800x.jpg?v=1650401031",
        Name: "Moodt",
        Category: "Mood Enhancing",
        Price: "$30.00",
        Quantity: "7",
        Ingredients: ["Rose Petals", "Tulsi", "Hibiscus"]
    }]
    
module.exports = teaProducts;

//const Tea = mongoose.model("Tea", productSchema);
//export product model 


// {
//     productName: {
//         type: String,
//         required: true,
//     },
//     productCategory: {
//         type: String,
//         required: true,
//     },
//     productPrice: {
//         type: Number,
//         required: true,
//     },
//     productQuantity: {
//         type: Number,
        
    
//     },
//     productIngredients: {
//         type: Array,
//         required: true
//     }
   
// }]
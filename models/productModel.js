

//product schemas
const teaProducts = [
    {
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/BANANA_DULCE_800x.jpg?v=1582508854",
        Name: "Anxie-tea",
        Category: "stress relief",
        Price: "$30.00",
        Quantity: "7",
        Ingredients: ["Chamomile", " Lavender", " Kava"],
        Description: "If you're experiencing anxiety, bouts of stress, or generally would like a calming glass of nourishment, enjoy the soothing taste of chamomile with floral hints of lavender, while Kava gives you the chill you need"
    },
    
    {
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/LIQUID_JADE_800x.jpg?v=1582490954",
        Name: "Clari-tea",
        Category: "focus",
        Price: "$30.00",
        Quantity: "7",
        Ingredients: ["Green Tea", " Ginger", " Peach"],
        Description: "Can you focus on....tea? This tea is for those who's mind needs a boost of clarity and focus. If that's you, Clari-tea is right for you"
        
    },
    
    {
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/SUMMER_PEACH_800x.jpg?v=1582325253",
        Name: "Pu-erh Power",
        Category: "Energy Boosting",
        Price: "$30.00",
        Quantity: "7",
        Ingredients: ["Pu-erh", " Peppermint", " Peach"],
        Description: "Big Boost Energy! The Power of Pu-erh provides a boost to your mind and body with the refreshing addition of peppermint and a sweet peach treat"
    },
    
    {
        img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/products/ROSE_BLACK_3d550f88-e237-44e3-9d54-424072b4f554_800x.jpg?v=1650401031",
        Name: "Moodt",
        Category: "Mood Enhancing",
        Price: "$30.00",
        Quantity: "7",
        Ingredients: ["Rose Petals", " Tulsi", " Hibiscus"],
        Description: "This is sure to put you in a beautiful mood. The tantalizing taste of rose, the nourishment of tulsi, and the delicious flavor of hibiscus is the perfect recipe for self care"
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
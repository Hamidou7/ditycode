const Products = require("./models/ProductSchema");

const productdata = require("./constant/ProductData");

const DefaultData= async()=>{
    try {
        const  storeData = await Products.insertMany(productdata);
        console.log(storeData);
    } catch (error) {
        console.log("erreur" + error.message);
    }
};

module.exports = DefaultData;
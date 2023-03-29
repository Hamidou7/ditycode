const express= require("express");
const router = new express.Router();
const Products = require('../models/ProductSchema');



// get products data api
router.get("/getproducts", async(req,res)=>{
try {
    const productsdata = await Products.find();
    // console.log("console the data " + productsdata);
    res.status(201).json(productsdata);
} catch (error) {
    console.log("erreur" + error.message);
}
})

router.get("/getproductsone/:id", async (req, res) => {

    try {
        const { id } = req.params;
        const individual = await Products.findOne({ id: id });
        res.status(201).json(individual);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
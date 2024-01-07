const Product = require('../model/Product');

const ProductController={
    getAllProducts: async function (req, res, next) {
        try {
            const productList = await Product.find();
            res.status(200).json(productList);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    saveProduct: async function (req, res, next) {
        try {
            const productData = req.body;

            const product = await Product.create(productData);

            res.status(200).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }
}

module.exports = ProductController;

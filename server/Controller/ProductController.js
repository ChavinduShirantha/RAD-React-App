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
    },

    getProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const product = await Product.find({id: productId});

            res.status(200).json(product);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    updateProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const productData = req.body;
            const updatedProduct = await Product.findOneAndUpdate({
                id: productId
            }, productData, {new: true});

            if (!updatedProduct) {
                return res.status(404).json({error: 'Product Not Found'});
            }

            res.status(200).json(updatedProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }

}

module.exports = ProductController;

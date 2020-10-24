const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb+srv://theo:TVTHa5RC4BsR6iz@cluster0.1o6wa.mongodb.net/products_test?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to database!')
    }).catch(() => {
        console.log('Connection failed')
    })



const createProduct = async(req, res, next) => {
    const createProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    const result = await createProduct.save();

    res.json(result);
}

exports.createProduct = createProduct;
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true },
    price: { type: Number, required: true }
})

module.exports = module.expmongoose.model('Product', productSchema)
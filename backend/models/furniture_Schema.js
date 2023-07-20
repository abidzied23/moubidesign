import mongoose from "mongoose"

let product = new mongoose.Schema({
    type: String,
    description: String,
    image_url: String,
    price: Number
}, { collection: 'product' })
var furnitur = mongoose.model('product', product)
export default furnitur



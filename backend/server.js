import express from 'express'
const app = express()
import path from 'path'
let url = 'mongodb+srv://abidzied23:i7a2LBpHcDqVodDp@cluster0.dltp0tt.mongodb.net/furniture?retryWrites=true&w=majority';
import furnitur from './models/furniture_Schema.js'
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from 'body-parser';





mongoose.connect(url).then(() => {
    console.log('connected')

}).catch(err => {
    console.error('error')
})
app.use(express.json())
app.use(cors())

app.post('/addfur', bodyParser.urlencoded({ extended: true }), (req, res) => {


    console.log(req.body);

    let fur = new furnitur({
        type: req.body.type,
        description: req.body.description,
        image_url: req.body.image_url,
        price: req.body.price
    })
    fur.save();
    res.send("success")
})
let data = [];
app.get('/', (req, res) => {
    furnitur.find().then(doc => {
        console.log(doc)
        data = doc



    })
        .catch(err => {
            console.error(err)
        })
    res.send(data)
})










app.listen(3000, () => console.log("server connected"))

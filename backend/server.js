import express from 'express'
const app = express()
import path from 'path'
let url = 'mongodb+srv://abidzied23:i7a2LBpHcDqVodDp@cluster0.dltp0tt.mongodb.net/furniture?retryWrites=true&w=majority';
import furnitur from './models/furniture_Schema.js'
import users from './models/users_schema.js'
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
app.post('/contact', bodyParser.urlencoded({ extended: true }), (req, res) => {


    console.log(req.body);

    let person = new users({
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password,
        Phone_Number: req.body.Phone_Number,
        Massage: req.body.Massage

    })
    person.save()
    res.send("success")
})
app.post('/login', bodyParser.urlencoded({ extended: true }), (req, res) => {
    async function person_verif(name_user) {
        try {

            const user = await users.find({ Name: name_user });
            console.log(user)
            console.log(user.Password)

            if (user.Password === req.body.Password) {
                console.log("verified user")

            }
        }
        catch (err) {
            console.error(err);
        }
    }
    person_verif(req.body.Name);


})

let data = [];
app.get('/', (req, res) => {
    furnitur.find().then(doc => {
        //console.log(doc)
        data = doc



    })
        .catch(err => {
            console.error(err)
        })
    res.send(data)
})
let result = [];
app.get('/search/:term', async (req, res) => {
    try {
        const searchTerm = req.params.term;
        console.log(searchTerm)

        const filteredItems = await furnitur.find({ type: { $regex: searchTerm, $options: 'i' } });
        console.log(filteredItems)
        result = filteredItems;



    } catch (error) {
        console.error(error)
    }
});
app.get('/searchresult', async (req, res) => {
    try {
        res.send(result);
    }
    catch (error) {
        console.error(error)
    }
})






app.listen(5000, () => console.log("server connected"))

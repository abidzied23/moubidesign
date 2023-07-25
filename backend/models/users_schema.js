import mongoose from "mongoose"

let users_contact = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
    Phone_Number: Number,
    Massage: String


}, { collection: 'users_contact' })
var users = mongoose.model('users_contact', users_contact)
export default users
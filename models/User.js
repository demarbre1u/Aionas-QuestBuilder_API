import mongoose from 'mongoose'

const Schema = mongoose.Schema

let User = new Schema({
    username: {
        type: String
    }, 
    password: {
        type: String
    }, 
    token: {
        type: String 
    }
})

export default mongoose.model('User', User, 'User')
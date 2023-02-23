const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
email: { type: String, required: true, unique: true },
password: { type: String, required: false },
})

userSchema.pre('save', async function (next) {
const users = this
if (users.isModified('password')) {
users.password =  bcrypt.hash(users.password, 10)
}
next()
})

userSchema.methods.comparePassword = async function (password) {
const users = this
return bcrypt.compare(password, users.password)
}

const User = mongoose.model('users', userSchema)

module.exports = User
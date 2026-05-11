const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    email: {type: String, unique:true},
    username: String,
    password: String
})

const Admin = new Schema({
    admin_email: {type: String, unique:true},
    admin_name: String,
    admin_password: String
})

const Course = new Schema({
    
})

const Purchase = new Schema({
    
})

const UserModel = mongoose.model('Users', User);
const AdminModel = mongoose.model('Admins', Admin);
const CourseModel = mongoose.model('Courses', Course);
const PurchaseModel = mongoose.model('Purchases', Purchase);

module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}

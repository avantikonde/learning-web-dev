const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const UserSchema = new Schema({
    email: {type: String, unique:true},
    password: String,
    firstName: String,
    LastName: String
})

const AdminSchema = new Schema({
    email: {type: String, unique:true},
    password: String,
    firstName: String,
    LastName: String
})

const CourseSchema = new Schema({
    title: String,
    description: String,
    Price: Number,
    ImageURL: String,
    CreatorId: ObjectId
})

const PurchaseSchema = new Schema({
    
})

const UserModel = mongoose.model('Users', UserSchema);
const AdminModel = mongoose.model('Admins', AdminSchema);
const CourseModel = mongoose.model('Courses', CourseSchema);
const PurchaseModel = mongoose.model('Purchases', PurchaseSchema);

module.exports = {
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
}

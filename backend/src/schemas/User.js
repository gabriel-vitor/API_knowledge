import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    phone: String,
});

export default mongoose.model("Users", UserSchema);

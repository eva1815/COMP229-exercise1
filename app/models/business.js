import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    name: String,
    number: Number,
    address: String

}, {
    timestamps: true,
    collection: 'business'
});

export default mongoose.model('Business', BusinessSchema);
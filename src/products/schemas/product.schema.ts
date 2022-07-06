import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    name: String,
    code: Number,
    weight: Number,
    price: Number,
    color: String,
    isDeleted: Boolean
});
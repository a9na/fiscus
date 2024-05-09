const mongoose = require('mongoose');
const { title } = require('process');


const ExpensesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 25,
    },
    type: {
        type: String,
        default: "income",
    },
    date: {
        type: DataTransferItem,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
        maxLength: 25,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 25,
    },
}, {timestamps: true})

module.exports = mongoose.model('Expenses', ExpensesSchema)


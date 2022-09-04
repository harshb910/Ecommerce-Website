const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please Enter Product Name'],
        trim: true
    },
    price:{
        type: Number,
        required: [true, 'Please Enter Product Price'],
        maxlength: [8, 'Price should be less than 8 digits']
    },
    description:{
        type: String,
        required: [true, 'Please Enter Product Description']
    },
    ratings:{
        type: Number,
        default: 0
    },
    images:[
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    ],
    category:{
        type: String,
        required: [true, 'Please Enter Product Category']
    },
    Stock:{
        type: Number,
        required: [true, 'Please Enter Product Stock'],
        maxlength: [5, 'Stock should not exceed 5 characters or else it is not able to sale'],
        default: 1
    },
    numOfReviews:{
        type: Number,
        default: 0
    },
    reviews:[
        {
            user:{
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name:{
                type: String,
                required: true
            },
            rating:{
                type: Number,
                required: true
            },
            comment:{
                type: String,
                required: true
            }
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    
    createdAt:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Product', productSchema);
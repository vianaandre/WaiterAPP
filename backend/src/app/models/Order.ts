import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
    table: {
        type: Schema.Types.String,
        required: true
    },
    status: {
        type: Schema.Types.String,
        enum: ['WAITING', 'IN_PRODUCTION', 'DONE', 'CANCELED'],
        default: 'WAITING',
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now
    },
    products: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            },
            quantity: {
                type: Schema.Types.Number,
                default: 1
            }
        }],
        required: true
    }
}));
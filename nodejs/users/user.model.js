const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    balance: {type: mongoose.Decimal128, required: true },
});

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true }, // Used for setPin flows
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    mobile: { type: Number, required: true },
    otp: { type: Number },
    loginPin: { type: Number },
    transactionPin: { type: Number },
    createdDate: { type: Date, default: Date.now },
    wallet: WalletSchema,
    friends: [{ type : mongoose.ObjectId, ref: 'User' }],
    pendingRequests: [{ type : mongoose.ObjectId, ref: 'User' }],
    sentRequests: [{ type : mongoose.ObjectId, ref: 'User' }],
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
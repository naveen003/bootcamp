const WalletSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    balance: {type: mongoose.Decimal128, required: true },
});

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String, required: true }, // Used for setPin flows
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    mobile: { type: Number, required: true },
    loginPin: { type: Number },
    transactionPin: { type: Number },
    createdDate: { type: Date, default: Date.now },
    wallet: WalletSchema,
    friends: [{ type : ObjectId, ref: 'User' }],
    pendingRequests: [{ type : ObjectId, ref: 'User' }],
    sentRequests: [{ type : ObjectId, ref: 'User' }],
});


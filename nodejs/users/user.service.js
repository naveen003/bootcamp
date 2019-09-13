const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;
const Wallet = db.Wallet;
const nodeMailer = require('nodemailer');

const userrname = "";
const password = ""

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    setLoginPin,
    setTransactionPin,
    delete: _delete
};

async function authenticate({ email, pin }) {
    const user = await User.findOne({ email: email, loginPin: pin });
    // if (user && bcrypt.compareSync(password, user.hash)) {
    if (user) {
        const { hash, loginPin, transactionPin, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getAll() {
    return await User.find().select('-hash -loginPin -transactionPin');
}

async function getById(id) {
    return await User.findById(id).select('-hash -loginPin -transactionPin');
}

async function create(userParam) {
    // validate
    if (await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.email) {
        user.hash = bcrypt.hashSync(userParam.email, 10);
    }

    user.wallet = {
        name: userParam.firstName +" "+ userParam.lastName + " Wallet",
        description: userParam.firstName +" "+ userParam.lastName + " Wallet",
        balance: 0,
    };

    user.otp = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

    // save user
    await user.save();
    var hash = user.hash;

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: userrname,
            pass: password
        }
    });
    // console.log(req.body)
    let mailOptions = {
        from: '"ewallet" <ewallet@test.com>', // sender address
        to: userParam.email, // list of receivers
        subject: "E-Wallet - New User Register - Verify Pin", // Subject line
        text: "Hi User, \n\n Please use the following link and otp to verify user and setup accesss pin. \n\n http://localhost:3000/verifypin/"+ encodeURIComponent(hash) +" \n\n otp - "+ user.otp +"\n\n Regards \n E-Wallet Team", // plain text body
        // html: '<b>NodeJS Email Tutorial</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            // res.status(400).send({"status": "failure"})
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        // res.status(200).send({"status": "success"})
    });
    console.log(hash)
    return { hash };
}

async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
        throw 'Email "' + userParam.email + '" is already taken';
    }

    // hash password if it was entered
    // if (userParam.password) {
    //     userParam.hash = bcrypt.hashSync(userParam.password, 10);
    // }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function setLoginPin(userParam) {
    const user = await User.findOne({ hash: userParam.hash });

    // validate
    if (!user) throw 'User not found';
    // if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
    //     throw 'Email "' + userParam.email + '" is already taken';
    // }

    // hash password if it was entered
    // if (userParam.password) {
    //     userParam.hash = bcrypt.hashSync(userParam.password, 10);
    // }

    // copy userParam properties to user
    // Object.assign(user, userParam);

    user.loginPin = userParam.pin;

    await user.save();
}

async function setTransactionPin(userParam) {
    const user = await User.findOne({ hash: userParam.hash });

    // validate
    if (!user) throw 'User not found';
    // if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
    //     throw 'Email "' + userParam.email + '" is already taken';
    // }

    // hash password if it was entered
    // if (userParam.password) {
    //     userParam.hash = bcrypt.hashSync(userParam.password, 10);
    // }

    user.transactionPin = userParam.pin;

    // copy userParam properties to user
    // Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const UserModel = require('./model');

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/so67562131';

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const log = msg => console.log(msg);

(async () => {
    const guid = uuidv4();

    // create user
    await UserModel.create({ guid });
    log('user created');

    ["admin", "user", "admin"].forEach(async (role) => {
        // add role to user
        await UserModel.updateOne({ guid }, { $addToSet: { role } });
        log(`user role updated with ${role}`);
    });

    // read user
    const newUser = await UserModel.where({ guid }).findOne();
    log(JSON.stringify(newUser, null, 2));

    process.exit(0);
})();

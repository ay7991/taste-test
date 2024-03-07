const User = require('../models/userModel');

const controller: any = {};

controller.postUser = async (req: any, res: any, next: any) => {
    const {username, password} = req.body;

    if (!username || !password) {
        return next('Error: Please fill out username and/or password field');
    }

    try {
        await User.create({username: username, password: password});
        return next();
    } catch (error) {
        console.log('Error in userController: could not create user');
        return next(JSON.stringify(error));
    }
};

module.exports = controller;
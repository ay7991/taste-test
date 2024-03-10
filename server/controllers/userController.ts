const User = require('../models/userModel');

const controller: any = {};

const bcryptCheck = require('bcryptjs');
const SALT_WORK_FACTOR_ = 10;

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

controller.checkUsername = async (req: any, res: any, next: any) => {
    const { username } = req.body;
    try {
        const foundUser = await User.findOne({username: username});
        if (!foundUser) {
            return next('Cannot find username');
        } else {
            res.locals.password = foundUser.password;
            return next();
        }
    } catch (error) {
        console.log('Error checking username');
        return next(JSON.stringify(error));
    }
}

controller.checkPassword = async (req: any, res: any, next: any) => {
    let { password } = req.body;
    try {
        const checkedPassword = bcryptCheck.compareSync(password, res.locals.password);
        if (!checkedPassword) {
            return next('password is incorrect');
        } else {
            return next();
        }
    } catch (error) {
        console.log('Error checking password');
        return next(JSON.stringify(error));
    }
}

module.exports = controller;
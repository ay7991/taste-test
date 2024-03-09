const userExpress = require('express');
const userController = require('../controllers/userController');
const router = userExpress.Router();

router.post('/signup', userController.postUser, (req: any, res: any) => {
   return res.status(200); 
});

router.post('/login', userController.checkUsername, userController.checkPassword, (req: any, res: any) => {
   // needed to actually send something back to the front end through .json
   return res.status(200).json('successful login');
});

module.exports = router;
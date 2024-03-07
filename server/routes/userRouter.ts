const userExpress = require('express');
const userController = require('../controllers/userController');
const router = userExpress.Router();

router.post('/signup', userController.postUser, (req: any, res: any) => {
   console.log('in user router')
   return res.status(200); 
});

module.exports = router;
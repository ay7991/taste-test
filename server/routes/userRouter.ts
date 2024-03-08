const userExpress = require('express');
const userController = require('../controllers/userController');
const router = userExpress.Router();

router.post('/signup', userController.postUser, (req: any, res: any) => {
   return res.status(200); 
});

// router.get('/login')

module.exports = router;
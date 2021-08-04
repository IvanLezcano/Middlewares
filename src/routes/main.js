// ************ Require's ************
const express = require('express');
const router = express.Router();
let  adminMiddleware = require ('../middleware/userAdmin.js')
// ************ Controller Require ************
const {user,admin} = require('../controllers/mainController');



router.get('/services', user); 
router.get('/services/design', user); 
router.get('/', admin); 
router.get('/admin',adminMiddleware, user);



module.exports = router;
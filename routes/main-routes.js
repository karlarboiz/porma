const commonController = require('../controllers/common-controller');

const express = require('express');

const router = express.Router();

router.get('',(req,res,next)=>{
    const csrf = req.csrfToken();
    res.render('home',{
        csrf:csrf
    });
})

router.get('/login',commonController.loginPage)

router.post('/login',commonController.loginFunc);

router.get('/signup',commonController.signupPage);

router.post('/signup',commonController.signupFunc);

router.get('/about',(req,res)=>{
    res.render('about');
})
router.post('/logout',commonController.logoutFunc);

module.exports = router;
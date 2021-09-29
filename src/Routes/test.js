const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/',(req,res,next)=>{
    return res.status(200).json({"Just Checking":"Message"});
})

module.exports = router;
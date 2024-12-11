const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
   res.render('Main_Login.ejs');
});



module.exports = router;
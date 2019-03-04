var express = require ('express');
var router = express.Router();

/* GET portfolio page */
router.get('/', function (req, res) {
    res.render('portfolio', {title: 'Portfolio'});
});

module.exports = router;
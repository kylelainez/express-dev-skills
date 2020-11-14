var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills');

router.get('/', skillsController.index);
router.post('/', skillsController.addSkill);
router.get('/new', skillsController.new);

module.exports = router;

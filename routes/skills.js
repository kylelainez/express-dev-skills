var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills');

router.get('/', skillsController.index);
router.get('/new', skillsController.new);
router.get('/:skill/edit', skillsController.edit);
router.post('/', skillsController.addSkill);
router.delete('/:skill', skillsController.delete);
router.put('/:skill', skillsController.editSkill);
module.exports = router;

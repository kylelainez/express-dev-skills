const Skill = require('../models/skills');

module.exports = {
	index,
	show
};

function index(req, res) {
	res.render('skills/index', {
		skills: Skill.getAllSkills()
	});
}

function show(req, res) {
	res.render('skills/show', {
		skill: Skill.getSkill(req.params.id)
	});
}

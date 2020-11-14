const Skill = require('../models/skills');

module.exports = {
	index,
	new: newSkill,
	addSkill
};

function index(req, res) {
	res.render('skills/index', {
		skills: Skill.getAllSkills()
	});
}

function newSkill(req, res) {
	res.render('skills/new');
}

function addSkill(req, res) {
	Skill.addSkill(req.body.skill, req.body.newSkill);
	res.redirect('/skills');
}

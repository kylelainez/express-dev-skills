const Skill = require('../models/skills');

module.exports = {
	index,
	new: newSkill,
	addSkill,
	delete: deleteSkill,
	edit,
	editSkill
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

function deleteSkill(req, res) {
	Skill.deleteSkill(req.params.skill);
	res.redirect('/skills');
}

function edit(req, res) {
	res.render('skills/edit', { skill: req.params.skill });
}

function editSkill(req, res) {
	Skill.editSkill(req.params.skill, req.body.newSkill);
	res.redirect('/skills');
}

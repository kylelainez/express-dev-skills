const Skills = [
	{
		name: 'Languages',
		list: ['Java', 'JavaScript', 'C++', 'Python', 'HTML', 'CSS'],
		id: 'language'
	},
	{
		name: 'Tools and Technologies',
		list: ['Version Control', 'Arduino', 'Raspberry Pi', 'GCP', 'Android'],
		id: 'tools_and_technologies'
	},
	{
		name: 'Other Skills',
		list: ['Electronics', 'Circuits'],
		id: 'other_skills'
	}
];

module.exports = {
	getAllSkills,
	addSkill,
	deleteSkill,
	editSkill
};

function getAllSkills() {
	return Skills;
}

function addSkill(name, skill) {
	Skills.find((el) => el.name === name).list.push(skill);
}

function deleteSkill(skill) {
	Skills.forEach((el, i) => {
		el.list.forEach((elem, j) => {
			if (elem === skill) Skills[i].list.splice(j, 1);
		});
	});
}

function editSkill(skill, newSkill) {
	Skills.forEach((el) => {
		el.list.forEach((elem, idx) => {
			if (elem === skill) {
				el.list[idx] = newSkill;
			}
		});
	});
}

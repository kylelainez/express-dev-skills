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
	addSkill
};

function getAllSkills() {
	return Skills;
}

function addSkill(name, skill) {
	Skills.find((el) => el.name === name).list.push(skill);
}

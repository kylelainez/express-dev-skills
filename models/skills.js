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
	getSkill
};

function getAllSkills() {
	return Skills;
}

function getSkill(id) {
	return Skills.find((el) => el.id === id);
}

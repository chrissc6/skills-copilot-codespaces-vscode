function skillsMember() {
    var name = 'Chris';
    var age = 25;
    var skills = ['JS', 'React', 'Node'];
    var address = 'USA';
    var getSkills = function () {
        return skills;
    };
    var updateSkills = function (newSkills) {
        skills = newSkills;
    };
    return {
        name: name,
        age: age,
        address: address,
        getSkills: getSkills,
        updateSkills: updateSkills
    };
}
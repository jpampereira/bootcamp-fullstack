function getAdmins(users) {
    const admins = [];

    for ([name, level] of users) {
        if (level === 'Admin') {
            admins.push(name);
        }
    }

    return admins;
}

const users = new Map();

users.set('Wagner', 'Admin');
users.set('João', 'User');
users.set('Nathalia', 'User');
users.set('Lucas', 'Admin');
users.set('Antonio', 'User');

console.log(getAdmins(users));
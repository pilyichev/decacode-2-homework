const User = require('./user.class');
const user = new User('Pavel', 'Ilichev');
user.login();
console.log(user);

const Admin = require('./admin.class');
const admin = new Admin('Super', 'Manager');
admin.login();
console.log(admin);
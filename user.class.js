function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasAccess = false;
    this.isLoggedIn = false;
};

    this.login = function() {
        if (this.hasAccess = true) {this.isLoggedIn = true};
    };

    this.logout = function() {
        if (this.hasAccess = false) {this.isLoggedIn = false};
    };

    module.exports = User;
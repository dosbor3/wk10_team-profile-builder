function Employee(name="", id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    this.getName = function() {
        return this.name;
    }

    this.getId = function() {
        return this.id;
    }

    this.getEmail = function() {
        return this.email;
    }

    Employee.prototype.getRole = function() {
        return {
            name: this.name,
            id: this.id,
            email: this.email
        };
    };
}

module.exports = Employee;
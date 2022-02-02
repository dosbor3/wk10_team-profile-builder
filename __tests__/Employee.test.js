const Employee = require("../lib/Employee");
const employee = new Employee("John Smith", "1234567", "johnsmithemail@gmail.com");

test(" creates a John Smith Employee object with an id of 1234567, and an email address of johnsmithemail@gmail.com", () => {
    // const employee = new Employee("John Smith", "1234567", "johnsmithemail@gmail.com");

    expect(employee.name).toBe("John Smith");
    expect(employee.id).toBe("1234567");
    expect(employee.email).toBe("johnsmithemail@gmail.com");    
});

test("gets employee's name", () => {
    // const employee = new Employee("John Smith", "1234567", "johnsmithemail@gmail.com");
    expect(employee.getName()).toBe("John Smith");
});

test("gets employee's id", () => {
    // const employee = new Employee("John Smith", "1234567", "johnsmithemail@gmail.com");
    expect(employee.getId()).toBe("1234567");
});

test("gets employee's email", () => {
    // const employee = new Employee("John Smith", "1234567", "johnsmithemail@gmail.com");
    expect(employee.getEmail()).toBe("johnsmithemail@gmail.com");
});

test("gets employee's role as an object", () => {
    // const employee = new Employee("John Smith", "1234567", "johnsmithemail@gmail.com");

    expect(employee.getRole()).toHaveProperty("name");
    expect(employee.getRole()).toHaveProperty("id");
    expect(employee.getRole()).toHaveProperty("email");
});
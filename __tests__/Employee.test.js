const Employee = require("../lib/Employee");

test(" creates an Employee object with a name of John Smith", () => {
    const employee = new Employee("John Smith", "sj1234567", "sj1234567@ipg.org");

    expect(employee.name).toBe("John Smith");
    expect(employee.id).toBe("sj1234567");
    expect(employee.email).toBe("sj1234567@ipg.org"); 
});

test("gets employee's name", () => {
    const employee = new Employee("nameTest", "sj1234567", "sj1234567@ipg.org");
    expect(employee.getName()).toBe("nameTest");
});

test("gets employee's id", () => {
    const employee = new Employee("John Smith", "idTest", "sj1234567@ipg.org");
    expect(employee.getId()).toBe("idTest");
});

test("gets employee's email", () => {
    const employee = new Employee("John Smith", "sj1234567", "emailTest");
    expect(employee.getEmail()).toBe("emailTest");
});

test("gets employee's role as an object", () => {
    const employee = new Employee("John Smith", "sj1234567", "sj1234567@ipg.org");

    expect(employee.getRole()).toBe("Employee");
});
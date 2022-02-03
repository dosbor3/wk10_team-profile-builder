const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


jest.mock('../lib/Employee.js');

test("create a manager object", () => {
    const manager = new Manager("Jane Smith", "sj340010750", "jsemail50@gmail.com");

    expect(manager.name).toBe("Jane Smith");
    expect(manager.id).toBe("sj340010750");
    expect(manager.email).toBe("jsemail50@gmail.com");

});

test("gets manager's name", () => {
    const manager = new Manager("John Smith", "1234567", "johnsmithemail@gmail.com");
    expect(manager.getName()).toBe("John Smith");
});

test("gets manager's id", () => {
    const manager = new Manager("John Smith", "1234567", "johnsmithemail@gmail.com");
    expect(manager.getId()).toBe("1234567");
});

test("gets manager's email", () => {
    const manager = new Manager("John Smith", "1234567", "johnsmithemail@gmail.com");
    expect(manager.getEmail()).toBe("johnsmithemail@gmail.com");
});

test("gets manager's role as an Employee object", (Employee) => {
    const employee = new Employee(this.name, this.id, this.email);

    expect(Employee.name).toMatchObject(this.name);
    expect(Manager.id).toMatchObject(Employee.id);
    expect(Manager.email).toMatchObject(Employee.email);    
});




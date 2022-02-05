const Manager = require("../lib/Manager.js");

test("create a manager object", ()  => {
    const manager = new Manager("Dave Thomas", "td32001458", "td32001458@ipg.org", "(555)555-5555");

    expect(manager.name).toBe("Dave Thomas");
    expect(manager.id).toBe("td32001458");
    expect(manager.email).toBe("td32001458@ipg.org");
    expect(manager.officeNumber).toBe("(555)555-5555");
});

test("gets manager's name", () => {
    const manager = new Manager("Dave Thomas", "td32001458", "td32001458@ipg.org", "(555)555-5555");
    expect(manager.name).toBe("Dave Thomas");
});

test("gets manager's id", () => {
    const manager = new Manager("Dave Thomas", "td32001458", "td32001458@ipg.org", "(555)555-5555");
    expect(manager.id).toBe("td32001458");
});

test("gets manager's email", () => {
    const manager = new Manager("Dave Thomas", "td32001458", "td32001458@ipg.org", "(555)555-5555");
    expect(manager.email).toBe("td32001458@ipg.org");
});

test("gets manager's role as object", () => {
    const manager = new Manager("Dave Thomas", "td32001458", "td32001458@ipg.org", "(555)555-5555");

    expect(manager.getRole()).toBe("Manager");
});
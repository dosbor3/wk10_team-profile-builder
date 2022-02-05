const Engineer = require("../lib/Engineer.js");

test("create a engineer object", ()  => {
    const engineer = new Engineer("Dave Thomas", "td32001458", "td32001458@ipg.org", "td3200");

    expect(engineer.name).toBe("Dave Thomas");
    expect(engineer.id).toBe("td32001458");
    expect(engineer.email).toBe("td32001458@ipg.org");
    expect(engineer.github).toBe("td3200");
});

test("gets engineer's name", () => {
    const engineer = new Engineer("Dave Thomas", "td32001458", "td32001458@ipg.org", "td3200");
    expect(engineer.name).toBe("Dave Thomas");
});

test("gets engineer's id", () => {
    const engineer = new Engineer("Dave Thomas", "td32001458", "td32001458@ipg.org", "td3200");
    expect(engineer.id).toBe("td32001458");
});

test("gets engineer's email", () => {
    const engineer = new Engineer("Dave Thomas", "td32001458", "td32001458@ipg.org", "td3200");
    expect(engineer.email).toBe("td32001458@ipg.org");
});

test("gets engineer's role as object", () => {
    const engineer = new Engineer("Dave Thomas", "td32001458", "td32001458@ipg.org", "td3200");

    expect(engineer.getRole()).toBe("Engineer");
});
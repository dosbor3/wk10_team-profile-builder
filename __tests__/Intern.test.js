const Intern = require("../lib/Intern.js");

test("create a intern object", ()  => {
    const intern = new Intern("Dave Thomas", "td32001458", "td32001458@ipg.org", "Rice University");

    expect(intern.name).toBe("Dave Thomas");
    expect(intern.id).toBe("td32001458");
    expect(intern.email).toBe("td32001458@ipg.org");
    expect(intern.school).toBe("Rice University");
});

test("gets intern's name", () => {
    const intern = new Intern("Dave Thomas", "td32001458", "td32001458@ipg.org", "Rice University");

    expect(intern.name).toBe("Dave Thomas");
});

test("gets intern's id", () => {
    const intern = new Intern("Dave Thomas", "td32001458", "td32001458@ipg.org", "Rice University");

    expect(intern.id).toBe("td32001458");
});

test("gets intern's email", () => {
    const intern = new Intern("Dave Thomas", "td32001458", "td32001458@ipg.org", "Rice University");
    
    expect(intern.email).toBe("td32001458@ipg.org");
});

test("gets intern's role as object", () => {    
    const intern = new Intern("Dave Thomas", "td32001458", "td32001458@ipg.org", "Rice University");

    expect(intern.getRole()).toBe("Intern");
});
const Prompt = require("./lib/Prompt");

new Prompt().managerPrompt();

function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }
const generateTeam = teamArr => {
    // create the about section
    const generateManager = manager => {
        return `
        <section class='manager  mt-4 mb-1'>
            <div class="card border-primary mx-1 shadow ">
                    <div class="card-body text-primary card-header">
                        <h4>Manager: ${manager.getName()}'s Team</h4>
                    </div>
                    <div class="card-body text-secondary">
                        <h5 class="card-title">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h5>
                        <h5 class="card-title">Employee ID: ${manager.getId()}</h5>
                        <h5 class="card-title">Office #: ${manager.getOfficeNumber()}</h5>
                    </div>
            </div>
        </section>`
    }

    // create the projects section
    const generateEngineer = engineer => {
        return `
        <div class="card border-primary mx-1 shadow ">
            <div class="card-body text-primary card-header">
                <h4>Engineer: ${engineer.getName()}</h4>
            </div>
            <div class="card-body text-secondary">
                <h5 class="card-title">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h5>
                <h5 class="card-title">Employee ID: ${engineer.getId()}</h5>
                <h5 class="card-title">Github: <a href="https://www.github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></h5>
            </div>
        </div>`     
    };

    const generateIntern = intern => {
        return `
        <div class="card border-primary mx-1 shadow ">
            <div class="card-body text-primary card-header">
                <h4>Intern: ${intern.getName()}</h4>
            </div>
            <div class="card-body text-secondary">
                <h5 class="card-title">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h5>
                <h5 class="card-title">Employee ID: ${intern.getId()}</h5>
                <h5 class="card-title">School: ${intern.getSchool()}</h5>
            </div>
      </div>`
    }

    const html = [];
    html.push(teamArr.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));
    html.push("<section class='engineer  d-flex flex-row ' >")
    html.push(teamArr.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)).join(''));
    html.push("</section>")
    html.push("<section class='intern  d-flex flex-row ' >")
    html.push(teamArr.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)).join(''));
    html.push("</section>")
    return html.join('');
}



// export function to generate entire page
module.exports = templateData => {
   return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
    <header>
        <div class="jumbotron-fluid d-flex justify-content-center">
            <h2>My Amazing Team</h2>
        </div>
    </header>
    <main>
        <div class='container-fluid  d-flex align-items-center flex-column'>
            ${generateTeam(templateData)}
        </div>
    </main>
    <script src='../index.js'></script>
    </body>
    </html>`;
}
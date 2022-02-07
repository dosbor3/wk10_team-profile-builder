const generateTeam = teamArr => {
    // create the about section
    const generateManager = manager => {
        return `
        <section class='manager '>
            <div class="card ">
                    <div class="card-body ">
                        <h4>Manager: ${manager.getName()}'s Team</h4>
                    </div>
                    <div class="card-body ">
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
        <section class='engineer' >
            <div class="card ">
                <div class="card-body ">
                    <h4>Engineer: ${engineer.getName()}</h4>
                </div>
                <div class="card-body ">
                    <h5 class="card-title">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h5>
                    <h5 class="card-title">Employee ID: ${engineer.getId()}</h5>
                    <h5 class="card-title">Github: <a href="https://www.github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></h5>
                </div>
            </div>
        </section>`     
    };

    const generateIntern = intern => {
        return `
        <section class='intern' >
        <div class="card ">
            <div class="card-body ">
                <h4>Intern: ${intern.getName()}</h4>
            </div>
            <div class="card-body ">
                <h5 class="card-title">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h5>
                <h5 class="card-title">Employee ID: ${intern.getId()}</h5>
                <h5 class="card-title">School: ${intern.getSchool()}</h5>
            </div>
      </div>
      </section>`
    }

    const html = [];
    html.push(teamArr.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));    
    html.push(teamArr.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)).join(''));    
    html.push(teamArr.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)).join(''));    
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
        <div>
            <h2>My Amazing Team</h2>
        </div>
    </header>
    <main>
        <div class='container-fluid'>
            ${generateTeam(templateData)}
        </div>
    </main>
    <script src='../index.js'></script>
    </body>
    </html>`;
}
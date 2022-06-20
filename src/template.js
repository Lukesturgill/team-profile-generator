// Generate team member cards
let teamHtml = '';

const teamCards = teamArray => {
    console.log(teamArray + 'sTRING');
    var teamData = JSON.parse(teamArray);
    console.log(teamData);
    for ( i = 0; i < teamData.length; i++ ) {
      if (teamData[i].type === "Manager"){
        teamHtml = teamHtml + manager(teamData[i])
      }
      if (teamData[i].type === "Engineer"){
        teamHtml = teamHtml + engineer(teamData[i])
      }
      if (teamData[i].type === "Intern"){
        teamHtml = teamHtml + intern(teamData[i])
      }
    } 
    return teamHtml;
  }

// html page template
const template = data => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Team Profile</title>
        <link rel="stylesheet" href="./style.css"> <source src="./template.js" type="template">
      </head>
      <body>
        <header class="header">
          <div class="title">
            <h1> My Team </h1>
          </div>
        </header>
        <main class ="team-cards">
        ${teamCards(data)}
        </main>
      </body>
    </html>
  `
  }

const manager = managerData => {
    return `
    <div class="manager">
      <div class="m-name">
        <h2>${managerData.getName()}</h2>
        <h3>Manager</h3>
      </div> 
      <div class="m-info">
        <ul class="m-list">
          <li class="m-list-items">ID: ${managerData.getId()}</li>
          <li class="m-list-items">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
          <li class="m-list-items">Office Number: ${managerData.getOffice()}</li>
        </ul>
      </div>
    </div>
  `
  }

  // Engineer card template
  const engineer = engineerData => {
    return `
    <div class="engineer">
      <div class="e-name">
        <h2>${engineerData.getName()}</h2>
        <h3>Engineer</h3>
      </div> 
      <div class="e-info">
        <ul class="e-list">
          <li class="e-list-items">ID: ${engineerData.getId()}</li>
          <li class="e-list-items">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
          <li class="e-list-items">GitHub:
          <a href="https://www.github.com/${engineerData.getGitHub()}" target="_blank">www.github.com/${engineerData.getGitHub()}</a>
          </li>
        </ul>
      </div>
    </div>
  `
  }

  // Intern card template
  const intern = internData => {
    return `
    <div class="intern">
      <div class="i-name">
        <h2>${internData.getName()}</h2>
        <h3>Intern</h3>
      </div> 
      <div class="i-info">
        <ul class="i-list">
          <li class="i-list-items">ID: ${internData.getId()}</li>
          <li class="i-list-items">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
          <li class="i-list-items">School: ${internData.getSchool()}</li>
        </ul>
      </div>
    </div>
  `
  }

  module.exports = template;

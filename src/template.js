const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");

// Generate team member cards
const teamCards = teamArray => {
    let teamHtml = '';
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

  // Manager card template
const manager = managerData => {
    return `
    <div class="employ-card">
      <div class="m-name">
        <h2>${managerData.name}</h2>
        <h3>Manager</h3>
      </div> 
      <div class="info">
        <div class="list">
          <p class="list-items">ID: ${managerData.id}</p>
          <p class="list-items">Email: <a href="mailto:${managerData.email}">${managerData.email}</a></p>
          <p class="list-items">Office Number: ${managerData.officeNumber}</p>
        </div>
      </div>
    </div>
  `;
  }

  // Engineer card template
  const engineer = engineerData => {
    return `
    <div class="employ-card">
      <div class="e-name">
        <h2>${engineerData.name}</h2>
        <h3>Engineer</h3>
      </div> 
      <div class="info">
        <div class="list">
          <p class="list-items">ID: ${engineerData.id}</p>
          <p class="list-items">Email: <a href="mailto:${engineerData.email}">${engineerData.email}</a></p>
          <p class="list-items">GitHub:
          <a href="https://www.github.com/${engineerData.github}" target="_blank">${engineerData.github}</a>
          </p>
        </div>
      </div>
    </div>
  `;
  }

  // Intern card template
  const intern = internData => {
    return `
    <div class="employ-card">
      <div class="i-name">
        <h2>${internData.name}</h2>
        <h3>Intern</h3>
      </div> 
      <div class="info">
        <div class="list">
          <p class="list-items">ID: ${internData.id}</p>
          <p class="list-items">Email: <a href="mailto:${internData.email}">${internData.email}</a></p>
          <p class="list-items">School: ${internData.school}</p>
        </div>
      </div>
    </div>
  `;
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
        <main class ="team">
        ${teamCards(data)}
        </main>
      </body>
    </html>
  `
  }
  module.exports = template;

const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");

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
const template = teamArray => {
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
        ${teamCards(teamArray)}
        </main>
      </body>
    </html>
  `
  }

const manager = managerData => {
    teamHtml+=`
    <div class="manager">
      <div class="m-name">
        <h2>${managerData.name}</h2>
        <h3>Manager</h3>
      </div> 
      <div class="m-info">
        <ul class="m-list">
          <li class="m-list-items">ID: ${managerData.id}</li>
          <li class="m-list-items">Email: <a href="mailto:${managerData.email}">${managerData.email}</a></li>
          <li class="m-list-items">Office Number: ${managerData.officeNumber}</li>
        </ul>
      </div>
    </div>
  `;
    return teamCards;
  }

  // Engineer card template
  const engineer = engineerData => {
    teamHtml+=`
    <div class="engineer">
      <div class="e-name">
        <h2>${engineerData.name}</h2>
        <h3>Engineer</h3>
      </div> 
      <div class="e-info">
        <ul class="e-list">
          <li class="e-list-items">ID: ${engineerData.id}</li>
          <li class="e-list-items">Email: <a href="mailto:${engineerData.email}">${engineerData.email}</a></li>
          <li class="e-list-items">GitHub:
          <a href="https://www.github.com/${engineerData.github}" target="_blank">www.github.com/${engineerData.github}</a>
          </li>
        </ul>
      </div>
    </div>
  `;
  return teamCards;
  }

  // Intern card template
  const intern = internData => {
    teamHtml+=`
    <div class="intern">
      <div class="i-name">
        <h2>${internData.name}</h2>
        <h3>Intern</h3>
      </div> 
      <div class="i-info">
        <ul class="i-list">
          <li class="i-list-items">ID: ${internData.id}</li>
          <li class="i-list-items">Email: <a href="mailto:${internData.email}">${internData.email}</a></li>
          <li class="i-list-items">School: ${internData.school}</li>
        </ul>
      </div>
    </div>
  `;
  return teamCards;
  }

  module.exports = template;

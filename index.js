const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');

inquirer.prompt([
    {
        type: "input",
        message: "what is your github username",
        name: "user"

    },
    {
        type: "input",
        message: "Project title:",
        name: "title"

    },
    {
        type: "input",
        message: "Project description:",
        name: "description"

    },
    {
        type: "input",
        message: "Installation",
        name: "installation"

    },
    {
        type: "input",
        message: "Usage",
        name: "usage"

    },
    {
        type: "input",
        message: "License",
        name: "license"

    }, {
        type: "input",
        message: "Contributing",
        name: "contributing"

    }, {
        type: "input",
        message: "Tests",
        name: "tests"

    },
]).then(function (res) {
    console.log(res.user);
    console.log(res.title);
    console.log(res.description);
    console.log(res.installation);
    console.log(res.usage);
    console.log(res.license);
    console.log(res.contributing);
    console.log(res.tests);
    fs.writeFile('README.md', `#Title: ${res.title}
    #Description ${res.description}
    #Installation ${res.installation}
    #Tables of Contents: 
    - Description
    - Table of Contents
    - Installation
    - Usage
    - License
    - Contributing
    - Tests
    #Installation ${res.installation}
    #Usage ${res.usage}
    #License ${res.usage}
    #Contributing ${res.contributing}
    #Tests ${res.tests}`, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('ReadMe created!');

        }

    })

})
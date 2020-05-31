const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');

inquirer.prompt({
    messgae: "Enter Github username"
}).then(function ({ username }) {
    const searchUrl = `https://api.github.com/users/${username}`

    axios.get(searchUrl).then((res) =>
        fs.writeFile('README.md', { username }), function (err) {
            if (err) {
                console.log(err);

            } else {
                console.log('success');

            }
        });
});

inquirer.prompt([
    {
        type: "input",
        message: "what is your name",
        name: "username"

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
        message: "Table of contents",
        name: "table"

    },
    {
        type: "input",
        message: "Installation",
        name: "installation"

    },
    {
        type: "input",
        message: "Usage",
        name: "Usage"

    },
    {
        type: "input",
        message: "Usage",
        name: "Usage"

    }, {
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
])

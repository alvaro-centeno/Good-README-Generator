const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');

inquirer.prompt({
    type: 'input',
    messgae: "Enter Github username",
    name: 'username'
}).then(function ({ username }) {
    const searchUrl = `https://api.github.com/users/${username}`;

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
        message: "what is your git hub username",
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
    console.log(res.table);
    console.log(res.installation);
    console.log(res.usage);
    console.log(res.license);
    console.log(res.contributing);
    console.log(res.tests);











})

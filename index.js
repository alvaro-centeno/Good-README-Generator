const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');

inquirer.prompt({
    type: 'input',
    message: "Enter your Github user name",
    name: 'username'
}).then(function ({ username }) {
    const searchUrl = `https://api.github.com/users/${username}`;

    axios.get(searchUrl).then(function (res) {
        var avatar = res.data.avatar_url;
        var username = res.data.login;
        var url = res.data.html_url;
        var repos = res.data.repos_url;

        inquirer.prompt([
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

            },
            {
                type: "input",
                message: "Contributing",
                name: "contributing"

            },
            {
                type: "input",
                message: "Tests",
                name: "tests"

            },
            {
                type: "input",
                message: "Email",
                name: "email",
            }
        ]).then(function (res) {
            console.log(res.username);
            console.log(res.title);
            console.log(res.description);
            console.log(res.installation);
            console.log(res.usage);
            console.log(res.license);
            console.log(res.contributing);
            console.log(res.tests);
            fs.writeFile(`README.md`, `
#Title: ${res.title}
---
##User
![user's avatar](${avatar})
username: [${username}](${url}) | email: ${res.email} | repos: ${repos}

---

##Description ${res.description}
---

##Installation ${res.installation}
---
##Tables of Contents: 
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
---
##Installation 
* How to: ${res.installation}
---
##Usage ${res.usage}
---
##License ${res.license}
---
##Contributing ${res.contributing}
---
##Tests ${res.tests} `
                , (error) => {
                    if (error) {
                        console.log(error);
                    }
                    console.log("Your readme has been created");
                })
        });
    });
});

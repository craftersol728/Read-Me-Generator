// TODO: Include packages needed for this application
var inquire = require('inquirer');
var fs = require('fs');

// a buffer that will change through out the file
var readMeBuffer = '';

//read me requirements
var readMeRequirements = 
{
    'title' :'',
    'desc' :'',
    'install' :'',
    'usage' :'',
    'contrib' :'',
    'tests' :'',
    'license' :'',
    'auther name' :'',
    'autherEmail' :'',
    'fileName' :'',
};

//a few common licenses to use, along with their url and badge icon markdown
const licenses =
{
    'Apache 2.0': ['https://opensource.org/licenses/Apache-2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
    'Creative Commons Attribution-NonCommercial' : ['https://creativecommons.org/licenses/by-nc/4.0/', '[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)'],
    'GNU GPL v3' : ['https://www.gnu.org/licenses/gpl-3.0', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],
    'MIT' : ['https://opensource.org/licenses/MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
    'Mozilla Public License 2.0' : ['https://opensource.org/licenses/MPL-2.0', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'],
}

//if the answer is blank the program inputs nothing
const isEmpty = async (input) =>{
    if (input =='') return 'Can not be left empty';
    else return true;
}
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'what is the title of this project',
        validate: isEmpty,
    },
    {
        type:'input',
        name:'description',
        message:'what is the title of this project',
        validate: isEmpty,
    },
    {
        type:'input',
        name:'Install',
        message:'Enter any installation information required to get your project working, or leave emptyk:',
    },
    {
        type:'input',
        name:'usage',
        message:'Enter any usage information your users should be aware of, or leave empty:',
    },
    {
        type:'input',
        name:'contrib',
        message:'Enter who or what contributed to this project',
    },
    {
        type:'input',
        name:'test',
        message:'Enter test information, or leave empty',
    },
    {
        type:'input',
        name:'license',
        message:'What are the licenses used for this project',
        choices: Object.keys(licenses),
    },
    {
        type:'input',
        name:'username',
        message:'Input your github username:',
        validate: isEmpty,
    },
    {
        type:'input',
        name:'email',
        message:'Enter your Email address',
        validate: isEmpty,
    },
    {
        type:'input',
        name:'fileName',
        message:'Enter the name you want for your .md file',
        default: 'readme.md' ,
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    fs.appendFile(('./outcome/'+fileName),data,function(err)
    {
        if (err) throw err;
        console.log ('Saved');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) =>
    {
        readmeEntries.title = answers.title;
        readmeEntries.desc = answers.description;
        readmeEntries.install = answers.install;
        readmeEntries.usage = answers.usage;
        readmeEntries.contrib = answers.contrib;
        readmeEntries.tests = answers.tests;
        readmeEntries.license = answers.license;
        readmeEntries.authorName = answers.username;
        readmeEntries.authorEmail = answers.email;
        readmeEntries.fileName = answers.fileName;

        console.log('Responses logged, creating readme file.');
        createReadme();        
    })
    .catch((error) =>
    {
        if (error.isTtyError)
        {
            console.log('prompt cannot- be rendered in the current environment.');
        } else
        {
            console.log('something went wrong.')
        }
    });
}

// Function call to initialize app
init();

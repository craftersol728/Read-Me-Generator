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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// const licences = {
//   mit: {
//     name: 'MIT',
//     url: 'https://opensource.org/license/mit/',
//     badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//   },
//   apache: {
//     name: 'Apache',
//     url: 'https://www.apache.org/licenses/LICENSE-2.0',
//     badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//   },
//   gnu: {
//     name: 'GNU GPLv3',
//     url: 'https://www.gnu.org/licenses/gpl-3.0.html',
//     badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
//   },
//   boost: {
//     name: "Boost",
//     url: 'https://www.boost.org/users/license.html',
//     badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
//   },
//   isc: {
//     name: 'ISC',
//     url: 'https://opensource.org/license/isc-license-txt/',
//     badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
//   },
// }

function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
    
      case "Apache":
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
    
      case "GNU GPLv3":
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
    
      case "Boost":
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        break;
    
      case "ISC":
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        break;
    
      default: 
      return '';
        break;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return 'https://opensource.org/license/mit/';
      break;
  
    case "Apache":
      return 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
  
    case "GNU GPLv3":
      return 'https://www.gnu.org/licenses/gpl-3.0.html';
      break;
  
    case "Boost":
      return 'https://www.boost.org/users/license.html';
      break;
  
    case "ISC":
      return 'https://opensource.org/license/isc-license-txt/';
      break;
  
    default: 
    return '';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `Licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return       `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## How to Contribute
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  email: [${data.email}](${data.email})
  Github: [${data.github}](https://github.com/${data.github})

  ## License
  ${renderLicenseSection(data.license)}
  
  `;
}

  module.exports = generateMarkdown;


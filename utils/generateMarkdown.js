//Function to take the user input and make generate the markdown for the readme.md
function generateMarkdown(data) {
  return `# ${data.title}
  ### Licensing:
  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

  ### Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#questions)

  ### Description:

  ${data.description}

  ### Installation:

  ${data.installation}

  ### Usage:

  ${data.usage}

  ### Contribution:

 ${data.contribution}

  ### Testing:

  ${data.testing}

  ### Questions:

  - Github: [${data.gituser}](https://github.com/${data.gituser})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;
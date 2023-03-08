// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered by the ${license} license`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title} 
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  
  1. [Description](#description)
  2. [Usage](#usage)
  3. [Installation](#installation)
  4. [Test](#test)
  5. [Contribution](#contribution)
  6. ${renderLicenseLink(data.license)}
  7. [Questions](#questions)
  
  ## Description <a name="description"></a>
  ${data.description}
  
  ## Usage <a name="usage"></a>
  ${data.usage}
  
  ## Installation <a name="installation"></a>
  ${data.installation}
  
  ## Test <a name="test"></a>
  ${data.test}
  
  ## Contribution <a name="contribution"></a>
  ${data.contribution}

  ${renderLicenseSection(data.license)}

  
  ## Questions <a name="questions"></a>
  For any questions on my ${data.title} project you can reach me at my github account https://github.com/${data.github} or email me at ${data.email}
  
  `;
}

module.exports = generateMarkdown
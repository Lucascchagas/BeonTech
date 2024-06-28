# Playwright API Automation

<a name="readme-top"></a>

## How to Run This Automated Testing

### About The Project

This project is designed as an interview test that includes two challenges: automating API testing and UI testing using Playwright. The README covers the necessary steps to run the automation tests both locally and within a CI/CD pipeline (Azure DevOps).

### Built With

The project leverages several frameworks and tools for efficient automation:

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![Joi](https://img.shields.io/badge/Joi-9cf?style=for-the-badge)
![dotenv](https://img.shields.io/badge/dotenv-0769ad?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-43853d?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## Getting Started

### Initial Configuration

First steps include setting up your environment:

- **Node.js Installation**

  Ensure the latest version of Node.js is installed on your machine.

  Visit https://nodejs.org/en/download/ for the LTS version

- **Project Directory Setup**

  Create a directory for your project.

  mkdir your_project_name
  cd your_project_name

### Running Locally

Here are the necessary steps to run the automation using Playwright on Windows.

- **Initialize NPM**

  npm init -y
  npm install

- **Install Playwright**

  npm install playwright
  npx playwright install

- **Install Joi and dotenv**

  For schema validation and environment variable management.

  npm i joi dotenv

### Running Tests

After coding to meet the test assessment objectives and creating a test case, tests can be run as follows:

- **Execute a Spec.js File**

  npx playwright test

- **Debug Mode**

  Run in debug mode:

  npx playwright test --debug

For a finished project setup, clone the project and install all required dependencies with:

    git clone git@github.com:Lucascchagas/BeonTech.git

## THANK YOU!

(<a href="#readme-top">back to top</a>)

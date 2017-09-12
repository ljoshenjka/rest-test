# Mocha+Chai+JavaScript framework for rest web-services test automation #

This framework purpose is the implementation and execution of acceptance tests for rest web-services. It consists of predefined dependencies and API's that will help to describe the expected behaviour of web-services.

### Core dependencies ###

* Mocha - JavaScript test framework running on node.js, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.
* Chai - BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework

## Getting Started ##

Run "npm install" terminal command from project core directory to install dependencies. Notice you must have node package manager installed on you machine.

### Architecture ###

Framework is divided in such subsections:

* app
* config
* data
* test

**app** - core of the testing framework, list of API under test and additional helpers for your tests
**config** - default configuration is loaded from default.json, such as server host of the web-services, environmental data etc.
**data** - mock data to use for the testing purpouses
**test** - test cases in a format of "describe-it", the can be held in a suites to run separately

### Writing Test Cases ###

Mocha gives us the ability to describe the features that we are implementing by giving us a "describe" function that encapsulates our expectations. The first argument is a simple string that describes the feature, while the second argument is a function that represents the body of the description.
We will set up a concrete thing we are testing using the "it" feature. The "it" function is very similar to the "describe" function, except that we can only put expectations in the body of the "it" function.

### Running Test Cases ###

##### Precondition ####
Install nodeJS. You can do that through homebrew.

##### Execution ####
Go to project root directory and run terminal command "npm test". It's a predifined script from package.json file which actually executes command "./node_modules/.bin/mocha ./test/suites/demosuite.js --reporter mochawesome" where:
* "./node_modules/.bin/mocha" - path to Mocha framework
* "./test/suites/demosuite.js" - suite with testcases or actual TC file
*  "--reporter mochawesome" - opensource reporter for pretty testing results

Test report is stored in "mochawesome-report/mochawesome.html"

# Team Generator
    
- [Description](#description)
- [Table of Contents](#tableofcontents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Testing](#testing)
- [Questions](#questions)

# Description

A command line program to automatically generate a team roster based in inquirer prompts.

The usere will be prompted after running `node script.js` a series of questions regarding the employees they want to add to their team page. Once those questions have been answere, a stylized HTML page will be redered into the root folder.

![Site render](/team-profile-gen-MR/assets/img/site-render.png)
![Project demo](/team-profile-gen-MR/assets/img/project-render.mov)

# Table of Contents

true

# Installation

Download the repository to your computer, open with text editor of choice, or run node script.js from your command line after isntalling necessary dependencies

## Usage

Personal

## License
  
MIT
  
## Contributors
To contribue, please for the main branch.


## Testing
 FAIL  tests_/Employee.test.js
  ✓ Can create a new object when you call new Employee
  ✓ when I pass the first parameter on new Employee, I create an id property with my new parameter
  ✕ when I pass the second parameter on new Employee, I create an name property with my new parameter
  ✕ when I pass the third parameter on new Employee, I create an email property with my new parameter

  ● when I pass the second parameter on new Employee, I create an name property with my new parameter

    ReferenceError: name is not defined

      13 | test("when I pass the second parameter on new Employee, I create an name property with my new parameter", () => {
      14 |     const testVal =  new Employee();
    > 15 |     expect(testVal.name).toBe(name)
         |                               ^
      16 | })
      17 |
      18 | test("when I pass the third parameter on new Employee, I create an email property with my new parameter", () => {

      at Object.<anonymous> (tests_/Employee.test.js:15:31)

  ● when I pass the third parameter on new Employee, I create an email property with my new parameter

    ReferenceError: email is not defined

      18 | test("when I pass the third parameter on new Employee, I create an email property with my new parameter", () => {
      19 |     const testVal =  new Employee();
    > 20 |     expect(testVal.email).toBe(email)
         |                                ^
      21 | })
      22 |
      23 |

      at Object.<anonymous> (tests_/Employee.test.js:20:32)

 FAIL  tests_/Intern.test.js
  ✕ when I pass the fourth parameter on new Intern, I create an office number property with my new parameter (1 ms)

  ● when I pass the fourth parameter on new Intern, I create an office number property with my new parameter

    ReferenceError: school is not defined

      3 | test("when I pass the fourth parameter on new Intern, I create an office number property with my new parameter", () => {
      4 |     const testVal =  new Intern();
    > 5 |     expect(testVal.school).toBe(school)
        |                                 ^
      6 | })
      7 |

      at Object.<anonymous> (tests_/Intern.test.js:5:33)

 FAIL  tests_/Manager.test.js
  ✕ when I pass the fourth parameter on new Manager, I create an office number property with my new parameter (1 ms)

  ● when I pass the fourth parameter on new Manager, I create an office number property with my new parameter

    ReferenceError: officenumber is not defined

      3 | test("when I pass the fourth parameter on new Manager, I create an office number property with my new parameter", () => {
      4 |     const testVal =  new Manager();
    > 5 |     expect(testVal.officenumber).toBe(officenumber)
        |                                       ^
      6 | })
      7 |

      at Object.<anonymous> (tests_/Manager.test.js:5:39)

Test Suites: 3 failed, 3 total
Tests:       4 failed, 2 passed, 6 total
Snapshots:   0 total
Time:        0.261 s, estimated 1 s
Ran all test suites matching /tests_\/Employee.test.js|tests_\/Intern.test.js|tests_\/Manager.test.js/i.
mitchellroutman@Mitchells-MacBook-Pro tests_ % 

## Questions

See contact info below

Contact Information:
  - GitHub: https://github.com/mitchroutman/team-profile-gen-MR
  - Email: mitchell.routman@gmail.com 
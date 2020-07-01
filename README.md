# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria(My read resposes were created starting with ==>//**)

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password

==>//**A new Password is Generated on Every Button Click

THEN I am presented with a series of prompts for password criteria

==>//**A Series of Question are asked to begin the password Selection


WHEN prompted for password criteria
THEN I select which criteria to include in the password

==>//*you Are able to select the criteria to determine what is important to you for you password choice

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

==>//* you able to select between 8 and 128 to determine the length of your password.  Any other value outside of this will result in an "Invalid Password Length"

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

==>//**Boolean Questions are given to determine the value of uppercase , numeric, lowercase or Special Characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

==>//**input  is validated by the inspector while completing the series of questions verified by a boolean output - an invalid choice at the initial selection of length will leads to  "Invalid Password length"

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

==>//**A password is generated after all questions have been answered and the "Generate Password" button is selected

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
==>//** The Password is Generated in the "Secure Password Window"

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

@login
Feature: Swag Labs - Login
  Background: User on the login page
    Given I am on the login page

  @positive
  Scenario: As a user, I want to login successfully
    When I am login with "<username>" credential
    Then I should see home page

    Examples:
      |username                |       
      |standard_user           |
      |problem_user            |
      |performance_glitch_user |
      |error_user              |
      |visual_user             | 


  @negative
  Scenario: As a user, I should get error message
    When I am login with "<username>" credential
    Then I should see error "Epic sadface: Sorry, this user has been locked out."

    Examples:
      |username        |           
      |locked_out_user |  
      

  @negative
  Scenario: As a user, I should get error message
    When I am login with "" credential
    Then I should see error "Epic sadface: Username is required"
    
    


@login
Feature: Swag Labs - Login

  @positive
  Scenario: As a user, I want to login successfully
    Given I am on the login page
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
    Given I am on the login page
    When I am login with "<username>" credential
    Then I should see error "Epic sadface: Sorry, this user has been locked out."

    Examples:
      |username        |           
      |locked_out_user |  
      

  @negative
  Scenario: As a user, I should get error message
    Given I am on the login page
    When I am login with "" credential
    Then I should see error "Epic sadface: Username is required"
    
    


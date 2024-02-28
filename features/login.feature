@login
Feature: Swag Labs - Login
Background: User on the login page
  Given I am on the login page

  @positive
  Scenario: As a standard_user, I want to login successfully
    When I am login with "standard_user" credentianl
    Then I should see home page

  @negative
  Scenario: As a locked_out_user, I should get error message
    When I am login with "locked_out_user" credentianl
    Then I should see error "Epic sadface: Sorry, this user has been locked out."

@addproduct
Feature: Swag Labs - Add Product After Login
  Background: User on the home page after login
    Given I am logged in with "<username>"
    
  Scenario: As a user, I want to add product to the cart
    When I add "<product>" to the cart and I click icon cart
    Then I should see product on the cart page

    Examples:
      |username                | product      
      |standard_user           | add-to-cart-sauce-labs-backpack
      |problem_user            | add-to-cart-sauce-labs-bike-light
      |performance_glitch_user |
      |error_user              |
      |visual_user             | 


    
    


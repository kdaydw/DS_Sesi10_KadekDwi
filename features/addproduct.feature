@addproduct
Feature: Swag Labs - Add Product After Login
    
  Scenario: As a user, I want to add product to the cart
    Given I am logged in with "<username>"
    When I add product to the cart and I click icon cart
    Then I should see product on the cart page

    Examples:
      | username                | 
      | standard_user           | 
      | problem_user            | 
      | performance_glitch_user |                                   
      | error_user              |                                   
      | visual_user             |                                 

    
    


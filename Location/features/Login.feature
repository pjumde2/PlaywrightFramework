Feature: Login Page Functionality

@SmokeTest
  Scenario: Verify that user can login to PM with Valid Username and valid Password
    Given I open Browser and enter PM Url
    When I enter Username "pramsing"
    When I entered Password "Portland002"
    Then Got Home Page with Title  "LTL Shipping Quotes, Status & Account Login | XPO"



@SmokeTest
  Scenario: Verify that user not able to login to PM with invalid Username and Valid Password
    Given I open Browser and enter PM Url
    When I enter Username "naksh.kakadye@xpo.com"
    When I entered Password "Portland002"
    Then Display Login Error as "Invalid username or password"


@WebTest
  Scenario: Verify that user not able to login to PM with Valid Username and invalid Password
    Given I open Browser and enter PM Url
    When I enter Username "pramsing"
    When I entered Password "Portl"
    Then Display Login Error as "Invalid username or password"
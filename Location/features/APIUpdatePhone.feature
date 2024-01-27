
Feature: Update Phone API Functionality

Background: Generate and Store Token
Given I generate Valid Token using Username and Password
Then I check if response is 200


@APITest
Scenario: Update Phone API
When I submit request to Update Phone API
Then I check if response is 200

@APITest
Scenario: For Update Phone API Check for 401 Unauthorized Response when Token is Invalid
When I submit request to Update Phone API with invalid token
Then I check if response is 401

@APITest
Scenario: For Update Phone API Check for 400 Response when URL is Incorrect
When I submit request to Update Phone API with Incorrect URL
Then I check if response is 400
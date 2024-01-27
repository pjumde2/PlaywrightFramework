
Feature: API Location Page Functionality


Background: Generate and Store Token
Given I generate Valid Token using Username and Password
Then I check if response is 200

@APITest
Scenario: Create Location API
When I submit request to Create Location  API
Then I check if response is 201


@APITest
Scenario: For Create Location API Check for 401 Unauthorized Resonse when Token is Invalid
When I submit request to Create Location API with invalid token
Then I check if response is 401


@APITest
Scenario: For Create Location API Check for 400 Response when Body parameters are wrong
When I submit request to Create Location API with when sicCd is "CIW"
Then I check if response is 400
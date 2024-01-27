Feature: List Note API Functionality


Background: Generate and Store Token
Given I generate Valid Token using Username and Password
Then I check if response is 200

@ZTest
Scenario: List Note API
When I submit request to List Note API
Then I check if response is 200

@APITest
Scenario: For List Note API Check for 401 Unauthorized Response when Token is Invalid
When I submit request to List Note API with invalid token
Then I check if response is 401

@RunTest
Scenario: For List Note API Check for 400 Response when URL is Incorrect
When I submit request to List Note API with Incorrect URL
Then I check if response is 400
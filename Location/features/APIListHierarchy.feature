
Feature: Get Hierarchy API Functionality

Background: Generate and Store Token
Given I generate Valid Token using Username and Password
Then I check if response is 200


@APITest
Scenario: Get Hierarchy API
When I submit request to Get Hierarchy API
Then I check if response is 200

@APITest
Scenario: For Get Hierarchy API in response I will get sicCd as "CUD"
When I submit request to Get Hierarchy API
Then I check response I will get sicCd as "CUD"

@APITest
Scenario: For Get Hierarchy API Check for 401 Unauthorized Response when Token is Invalid
When I submit request to Get Hierarchy API with invalid token
Then I check if response is 401
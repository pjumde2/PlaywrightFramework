
Feature: Get Service Ceter API Functionality

Background: Generate and Store Token
Given I generate Valid Token using Username and Password
Then I check if response is 200


@APITest
Scenario: Get Service Center API
When I submit request to Get Service Center API
Then I check if response is 200


@APITest
Scenario: For Get Service Center API Check for 401 Unauthorized Response when Token is Invalid
When I submit request to Get Service Center API with invalid token
Then I check if response is 401



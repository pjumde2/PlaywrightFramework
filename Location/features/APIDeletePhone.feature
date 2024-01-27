
Feature: Delete Phone API Functionality

Background: Generate and Store Token
Given I generate Valid Token using Username and Password
Then I check if response is 200


@APITest
Scenario: Delete Phone API
When I submit request to Delete Phone API
Then I check if response is 200
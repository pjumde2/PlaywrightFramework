Feature: Rate Quote Page Functionality

@ZTest
Scenario: Verify that US to US delivery with Role as Shipper and Payment Term as Prepaid
Given I open Browser and enter PM Url
When I enter Username "pramsing"
When I entered Password "Portland002"
When I click on New Quote
When I select Role as Shipper
When I select Pickup Location
When I select Delivery Location
When I enter Postal Code as "35004"
When I select Payment Terms as Prepaid
When I enter Commodity Details
When I click on Get Rate Quote button
Then Quote get Created with Requote button should appear
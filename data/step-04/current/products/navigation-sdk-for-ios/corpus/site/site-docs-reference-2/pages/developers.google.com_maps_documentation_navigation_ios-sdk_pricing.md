---
title: "Navigation SDK for iOS Usage and Billing \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/ios-sdk/pricing
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/ios-sdk/pricing
  title: "Navigation SDK for iOS Usage and Billing \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Navigation SDK for iOS
Resources
Send feedback
Navigation SDK for iOS Usage and Billing
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK for iOS uses a pay-as-you-go model, charging for each destination requested in route generation API calls.
Each destination (waypoint) in a request is billed as a "Navigation Request" SKU, with pricing varying by monthly volume.
There are no extra charges for starting turn-by-turn navigation or for route adjustments due to traffic or deviations.
You can manage costs by setting daily quota limits in the Google Cloud Console for Navigation SDK for iOS requests.
Usage is subject to limits, including a rate limit of 30,000 queries per minute and a maximum of 25 waypoints per API call.
Reminder: To use the Navigation SDK for iOS, you must enable billing on each of your
projects and include an API key or OAuth token with all API or
SDK requests.
Requests to the Navigation SDK are billed to the Navigation Request
SKU. You are charged for API calls you make to generate routes to a destination.
API calls can include one or more destinations, also referred to as waypoints.
You can calculate the cost of a call by multiplying the number of waypoints that
it contains by the price for each destination requested.
There are no additional charges to start turn-by-turn guidance for a
route. There are also no additional charges for route changes after a
destination has already been fetched. For example, there are no charges for
route changes due to traffic updates, closed roads, or deviation from the
planned route.
Billing and pricing for the Navigation SDK depend on the service agreement you
have with Google Maps Platform. If you're a Mobility Services customer, for
more information refer to the
Mobility Services documentation
or the
Navigation SDK FAQs .
SKU details and pricing for the Navigation SDK for iOS
The following table shows the SKU details and pricing for the Navigation SDK for iOS.
Category SKU Details SKU Pricing
Enterprise
SKU: Navigation Request
Main pricing list
India pricing list
Other usage limits
To review and manage your quotas and usage limits, see Quotas and quota
alerts .
Adjust quota
Quota limits define the maximum number of requests allowed for a specific API or service within a
given timeframe. When the number of requests in your project reaches the quota limit, your service
stops responding to requests.
Important: To understand how an increase in quota could affect your bill, check out the
pricing calculator .
To modify a quota value for your API, follow these steps:
In the Cloud console, navigate to Google Maps Platform > Quotas .
Select the API for which you want to modify the quota.
Identify the quota value that you want to change, and select it using the checkbox.
Click Edit , enter a new quota value, and click Submit request .
View quota increase requests
Important: You must have the appropriate IAM permissions to view quota increase requests .
To view all quota increase requests, including past and pending requests:
In the Cloud console, navigate to Google Maps Platform > Quotas .
Select the API for which you want to view the quota increase request.
Click Increase Requests .
Tip: Make sure to monitor your quota usage regularly to avoid service
interruptions. Learn more about quotas and
quota alerts .
Terms of Use restrictions
For information on terms of use, see the License Restrictions
section
of the Google Maps Platform Terms of Service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

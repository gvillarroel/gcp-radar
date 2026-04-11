---
title: "Get app installation and licensing details \_|\_ Google Workspace Marketplace\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/workspace/marketplace/example-calls-marketplace-api
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/authorizing
source_metadata:
  url: https://developers.google.com/workspace/marketplace/example-calls-marketplace-api
  title: "Get app installation and licensing details \_|\_ Google Workspace Marketplace\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Marketplace
Guides
Send feedback
Get app installation and licensing details
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide demonstrates how to retrieve Google Workspace Marketplace app installation and licensing information using the Google Workspace Marketplace API.
It provides example requests and responses for scenarios like individual user installations, admin installations for entire organizations or specific OUs, and application deletions.
You can use the licenseNotification.list , userLicense.get , and customerLicense.get methods to obtain detailed licensing and installation data.
By examining the response fields like enabled , state , seatCount , and provisions , you can determine the licensing status and access permissions of users and domains.
By providing example requests to and responses from the
Google Workspace Marketplace API , this document shows how to get
Google Workspace Marketplace app installation and licensing details.
The application is installed by an administrator
The administrator of cymbalgroup.com installed the application for everyone in
the organization.
userLicense.get request
This request calls the userLicense.get method to get the licensing status
of user1@cymbalgroup.com to determine if they have permission to use the
application.
GET /appsmarket/v2/userLicense/{applicationId}/{userId}
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/ APPLICATION_ID /user1@cymbalgroup.com
Response body
Since cymbalgroup.com has installed the application, the response returns the
userLicense resource for user1@cymbalgroup.com. The userLicense
resource has the
enabled
field set to true , indicating that the domain administrator for
cymbalgroup.com has activated the application for this domain, and the
state
field set to ACTIVE , indicating that user1@cymbalgroup.com has a valid license
and should be permitted to use the application.
{
"kind" : "appsmarket#userLicense" ,
"enabled" : true ,
"state" : "ACTIVE" ,
"editionId" : "default_edition" ,
"customerId" : "user1@cymbalgroup.com" ,
"applicationId" : " APPLICATION_ID " ,
"id" : " USER_LICENSE_ID " ,
"userId" : "user1@cymbalgroup.com"
}
customerLicense.get request
This request calls the customerLicense.get method to get the licensing
status of cymbalgroup.com to determine if they have access to the application.
GET /appsmarket/v2/customerLicense/{applicationId}/{customerId}
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/customerLicense/ APPLICATION_ID /cymbalgroup.com
Response body
The response returns the customerLicense resource for cymbalgroup.com
where the
state
field is set to ACTIVE , indicating that the customer has a valid license.
{
"kind" : "appsmarket#customerLicense" ,
"id" : " CUSTOMER_LICENSE_ID " ,
"applicationId" : " APPLICATION_ID " ,
"customerId" : "cymbalgroup.com" ,
"state" : "ACTIVE" ,
"editions" : [
{
"editionId" : "default_edition" ,
"seatCount" : -1
}
]
}
The application is only administrator installed for a specific user's organizational unit
The application is now only administrator installed for user2@cymbalgroup.com's
organizational unit (OU). It's no longer administrator installed for everyone in
the organization.
userLicense.get request
This request calls the userLicense.get method to get the licensing status
of user3@cymbalgroup.com to determine if they have permission to use the
application.
GET /appsmarket/v2/userLicense/{applicationId}/{userId}
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/ APPLICATION_ID /user3@cymbalgroup.com
Response body
Since the application is only administrator installed for user2@cymbalgroup.com,
the response returns a userLicense resource for user3@cymbalgroup.com
that has the enabled field set to false , indicating that the domain
administrator for cymbalgroup.com has not activated the application for this
domain, and the state field set to ACTIVE , indicating that the user has a
valid license and should be permitted to use the application.
{
"kind" : "appsmarket#userLicense" ,
"enabled" : false ,
"state" : "ACTIVE" ,
"editionId" : "default_edition" ,
"customerId" : "cymbalgroup.com" ,
"applicationId" : " APPLICATION_ID " ,
"id" : " USER_LICENSE_ID " ,
"userId" : "user3@cymbalgroup.com"
}
userLicense.get request
This request calls the userLicense.get method to get the licensing status
of user2@cymbalgroup.com to determine if they have permission to use the
application.
GET /appsmarket/v2/userLicense/{applicationId}/{userId}
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/ APPLICATION_ID /user2@cymbalgroup.com
Response body
Since the application is only administrator installed for user2@cymbalgroup.com,
the response returns a userLicense resource for user2@cymbalgroup.com
that has the enabled field set to true and the state field set to
ACTIVE .
{
"kind" : "appsmarket#userLicense" ,
"enabled" : true ,
"state" : "ACTIVE" ,
"editionId" : "default_edition" ,
"customerId" : "cymbalgroup.com" ,
"applicationId" : " APPLICATION_ID " ,
"id" : " USER_LICENSE_ID " ,
"userId" : "user2@cymbalgroup.com"
}
The application is deleted for everyone in the organization
Even though the application was deleted for everyone in the organization,
user1@cymbalgroup.com still has access because they previously installed it
individually.
userLicense.get request
This request calls the userLicense.get method to get the licensing status
of user2@cymbalgroup.com to determine if they have permission to use the
application.
GET /appsmarket/v2/userLicense/{applicationId}/{userId}
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/ APPLICATION_ID /user2@cymbalgroup.com
Response body
Since the application was deleted for everyone in the organization, the response
returns a userLicense resource for user2@cymbalgroup.com that has the
enabled field set to false and the state field set to UNLICENSED ,
indicating that the administrator of this user's domain didn't assign a seat for
the application to this user.
{
"kind" : "appsmarket#userLicense" ,
"enabled" : false ,
"state" : "UNLICENSED" ,
"applicationId" : " APPLICATION_ID " ,
"id" : " USER_LICENSE_ID " ,
"userId" : "user2@cymbalgroup.com"
}
userLicense.get request
This request calls the userLicense.get method to get the licensing status
of user1@cymbalgroup.com to determine if they have permission to use the
application.
GET /appsmarket/v2/userLicense/{applicationId}/{userId}
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/ APPLICATION_ID /user1@cymbalgroup.com
Response body
Since user1@cymbalgroup.com previously installed the application individually,
they still have permission to use it. The response returns a userLicense
resource that has the enabled field set to true and the state field set to
ACTIVE .
{
"kind" : "appsmarket#userLicense" ,
"enabled" : true ,
"state" : "ACTIVE" ,
"editionId" : "default_edition" ,
"customerId" : "user1@cymbalgroup.com" ,
"applicationId" : " APPLICATION_ID " ,
"id" : " USER_LICENSE_ID " ,
"userId" : "user1@cymbalgroup.com"
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],["This guide demonstrates how to retrieve Google Workspace Marketplace app installation and licensing details using the API. Key actions include using `licenseNotification.list` to check for licensing notifications. When an app is individually installed, a provision notification is returned. `userLicense.get` checks a user's license status, revealing if they are enabled and active. `customerLicense.get` checks domain licensing status, and the `licenseNotification.list` is used to see all notifications. Lastly the response changes depending on the action done by the user/admin.\n"]]

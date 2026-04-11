---
title: "REST Resource: customerLicense \_|\_ Google Workspace Marketplace \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/marketplace/reference/rest/v2/customerLicense
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/marketplace/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/marketplace/reference/rest/v2/customerLicense
  title: "REST Resource: customerLicense \_|\_ Google Workspace Marketplace \_|\_\
    \ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Marketplace
Reference
Send feedback
REST Resource: customerLicense
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The CustomerLicense resource provides information about a customer's license status for a specific application.
It includes details such as the license state (ACTIVE or UNLICENSED), application ID, customer ID, and license ID.
The Editions section within the resource, containing editionId, seatCount, and assignedSeats, is deprecated.
You can retrieve the license status for a customer using the get method.
Resource: CustomerLicense
JSON representation
{
"kind" : string ,
"state" : string ,
"applicationId" : string ,
"editions" : [
{
object ( Editions )
}
] ,
"id" : string ,
"customerId" : string
}
Fields
kind
string
The type of API resource. This is always appsmarket#customerLicense .
state
string
The customer's license status. One of:
ACTIVE : The customer has a valid license.
UNLICENSED : There is no license. Either this customer has never installed your application or has deleted it.
applicationId
string
The ID of the application corresponding to this license query.
editions[] (deprecated)
object ( Editions )
This item is deprecated!
(Deprecated)
id
string
The ID of the customer license.
customerId
string
The domain name of the customer.
Editions
JSON representation
{
"editionId" : string ,
"seatCount" : integer ,
"assignedSeats" : integer
}
Fields
editionId (deprecated)
string
This item is deprecated!
(Deprecated)
seatCount (deprecated)
integer
This item is deprecated!
(Deprecated)
assignedSeats (deprecated)
integer
This item is deprecated!
(Deprecated)
Methods
get
Gets the customer's licensing status to determine if they have access to a given app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-03 UTC."],[],["The `CustomerLicense` resource represents a customer's license for an application. Key information includes the license `state` (ACTIVE or UNLICENSED), the associated `applicationId`, and the customer's `customerId`. It contains a unique `id` for the license. The `kind` always indicates `appsmarket#customerLicense`. The `get` method retrieves the license status, indicating whether the customer has access to the application. Several fields regarding `editions`, such as `editionId`, `seatCount`, and `assignedSeats` are deprecated.\n"]]

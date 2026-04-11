---
title: "REST Resource: networks \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/reference/rest
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/reference/rest/v1/networks
  title: "REST Resource: networks \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Reference
Send feedback
REST Resource: networks
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Network resource represents a network in the Ad Manager API.
It includes fields such as name, networkCode, timeZone, and currencyCode.
The resource supports get and list methods to retrieve network objects.
Resource: Network
JSON representation
Methods
Resource: Network
The Network resource.
JSON representation
{
"name" : string ,
"secondaryCurrencyCodes" : [
string
] ,
"displayName" : string ,
"networkCode" : string ,
"propertyCode" : string ,
"timeZone" : string ,
"currencyCode" : string ,
"effectiveRootAdUnit" : string ,
"testNetwork" : boolean ,
"networkId" : string
}
Fields
name
string
Identifier. The resource name of the Network. Format: networks/{networkCode}
secondaryCurrencyCodes[]
string
Optional. Currency codes that can be used as an alternative to the primary currency code for trafficking Line Items.
displayName
string
Optional. Display name for Network.
networkCode
string
Output only. Network Code.
propertyCode
string
Output only. Property code.
timeZone
string
Output only. Time zone associated with the delivery of orders and reporting.
currencyCode
string
Output only. Primary currency code, in ISO-4217 format.
effectiveRootAdUnit
string
Output only. Top most Ad Unit to which descendant Ad Units can be added. Format: networks/{networkCode}/adUnits/{adUnit}
testNetwork
boolean
Output only. Whether this is a test network.
networkId
string ( int64 format)
Output only. Network ID.
Methods
get
API to retrieve a Network object.
list
API to retrieve all the networks the current user has access to.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-05 UTC."],[],["The content defines a \"Network\" resource, represented in JSON format with fields like `name`, `displayName`, `networkCode`, `propertyCode`, `timeZone`, `currencyCode`, `secondaryCurrencyCodes`, `effectiveRootAdUnit`, `testNetwork`, and `networkId`. Key actions include retrieving a single Network object via a \"get\" method or listing all accessible networks via a \"list\" method. The `networkCode` is a core identifier for each `network` and the output information can be retrieved with the API.\n"]]

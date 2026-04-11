---
title: "Method: organizations.locations.addressGroups.cloneItems \_|\_ Cloud Next\
  \ Generation Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/organizations.locations.addressGroups/cloneItems
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/organizations.locations.addressGroups/cloneItems
  title: "Method: organizations.locations.addressGroups.cloneItems \_|\_ Cloud Next\
    \ Generation Firewall \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Reference
Send feedback
Method: organizations.locations.addressGroups.cloneItems
Stay organized with collections
Save and categorize content based on your preferences.
Clones items from one address group to another.
HTTP request
POST https://networksecurity.googleapis.com/v1/{addressGroup=organizations/*/locations/*/addressGroups/*}:cloneItems
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
addressGroup
string
Required. A name of the AddressGroup to clone items to. Must be in the format projects|organization/*/locations/{location}/addressGroups/* .
Authorization requires the following IAM permission on the specified resource addressGroup :
networksecurity.addressGroups.update
Request body
The request body contains data with the following structure:
JSON representation
{
"sourceAddressGroup" : string ,
"requestId" : string
}
Fields
sourceAddressGroup
string
Required. Source address group to clone items from.
Authorization requires the following IAM permission on the specified resource sourceAddressGroup :
networksecurity.addressGroups.get
requestId
string
Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-24 UTC."],[],[]]

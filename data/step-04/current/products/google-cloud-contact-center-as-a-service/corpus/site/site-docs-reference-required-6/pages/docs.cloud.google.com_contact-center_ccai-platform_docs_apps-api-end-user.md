---
title: "End users endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-end-user
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-end-user
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api-end-user
  title: "End users endpoints \_|\_ Google Cloud Contact Center as a Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Google Cloud CCaaS
User Guides
Send feedback
End users endpoints
Stay organized with collections
Save and categorize content based on your preferences.
The end users API endpoints provide access to the end-user objects. An end-user
object is created for each end user of Contact Center AI Platform (CCAI Platform).
The following are the call API endpoints:
Update end-user
Get end-user
Update end-user
This endpoint lets you update an end-user details including:
email address
name
phone number
{
"identifier" : "string" ,
"email" : "string" ,
"name" : "string" ,
"phone" : "string"
}
Endpoint:
Method: POST
Type: RAW
URL: https:// { subdomain } . { domain } /apps/api/v1/end_users
Headers:
Key
Value
Description
Content-Type
application/json
Accept
application/json
Body:
{
"identifier" : "abc123" ,
"email" : "joe@mydomain.com" ,
"name" : "Joe Smith" ,
"phone" : "+16171231234"
}
Example request and responses
The following sections provide example requests to the endpoint.
End user ID and identifier
This example shows how to update an end-user by providing the ID.
Request
Headers:
Key
Value
Description
Content-Type
application/json
Body:
{
"identifier" : "string" ,
"email" : "string" ,
"name" : "string" ,
"phone" : "string"
}
Response
{
"id" : "integer" ,
"identifier" : "string"
}
Status Code: 200
Get end-user
This endpoint provides the ability to retrieve an end-user using either the id
or identifier .
Endpoint:
Method: GET
Type:
URL: https:// { subdomain } . { domain } /apps/api/v1/end_users
Headers:
Key
Value
Description
Content-Type
application/json
Query:
Key
Value
Description
id
integer
Internal ID for the End User
identifier
string
External identifier for the End User
Example request and responses
The following sections provide example requests to the endpoint.
Get by ID
This example shows how to retrieve an end-user by providing the ID.
Request
Headers:
Key
Value
Description
Content-Type
application/json
Query:
Key
Value
Description
id
integer
Internal ID for the End User
Response
{
"id" : "integer" ,
"identifier" : "string"
}
Status Code: 200
Get by identifier
This example shows how to retrieve an end-user by providing the identifier.
Request
Headers:
Key
Value
Description
Content-Type
application/json
Query:
Key
Value
Description
identifier
string
External identifier for the End User
Response
{
"id" : "integer" ,
"identifier" : "string"
}
Status Code: 200
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]

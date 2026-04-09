---
title: "Method: projects.locations.instances.datasets.list \_|\_ Anti Money Laundering\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.datasets/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/reference/rest/v1/projects.locations.instances.datasets/list
  title: "Method: projects.locations.instances.datasets.list \_|\_ Anti Money Laundering\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Industry solutions
Anti Money Laundering AI
Reference
Send feedback
Method: projects.locations.instances.datasets.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
Lists datasets.
HTTP request
GET https://financialservices.googleapis.com/v1/{parent=projects/*/locations/*/instances/*}/datasets
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent of the Dataset is the Instance.
Authorization requires the following IAM permission on the specified resource parent :
financialservices.v1datasets.list
Query parameters
Parameters
pageSize
integer
Optional. The number of resources to be included in the response. The response contains a nextPageToken, which can be used to retrieve the next page of resources.
pageToken
string
Optional. In case of paginated results, this is the token that was returned in the previous ListDatasetResponse. It should be copied here to retrieve the next page of resources. Empty will give the first page of ListDatasetRequest, and the last page will return an empty pageToken.
filter
string
Optional. Specify a filter to narrow search results.
orderBy
string
Optional. Specify a field to use for ordering.
Request body
The request body must be empty.
Response body
Response for retrieving a list of Datasets
If successful, the response body contains data with the following structure:
JSON representation
{
"datasets" : [
{
object ( Dataset )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
datasets[]
object ( Dataset )
List of Dataset resources
nextPageToken
string
This token should be passed to the next ListDatasetsRequest to retrieve the next page of Datasets (empty indicates we are done).
unreachable[]
string
Locations that could not be reached.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
financialservices.v1datasets.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-18 UTC."],[],[]]

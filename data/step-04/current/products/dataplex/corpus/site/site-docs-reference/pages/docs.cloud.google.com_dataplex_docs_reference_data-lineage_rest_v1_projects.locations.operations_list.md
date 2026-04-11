---
title: "Method: projects.locations.operations.list \_|\_ Knowledge Catalog \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/projects.locations.operations/list
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest/v1/projects.locations.operations/list
  title: "Method: projects.locations.operations.list \_|\_ Knowledge Catalog \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Reference
Send feedback
Method: projects.locations.operations.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED .
HTTP request
GET https://datalineage.googleapis.com/v1/{name}/operations
Path parameters
Parameters
name
string
The name of the operation's parent resource. It takes the form projects/{project}/locations/{location} .
Query parameters
Parameters
filter
string
The standard list filter.
pageSize
integer
The standard list page size.
pageToken
string
The standard list page token.
returnPartialSuccess
boolean
When set to true , operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.
This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-" .
This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation.
Request body
The request body must be empty.
Response body
The response message for Operations.ListOperations .
If successful, the response body contains data with the following structure:
JSON representation
{
"operations" : [
{
object ( Operation )
}
] ,
"nextPageToken" : string ,
"unreachable" : [
string
]
}
Fields
operations[]
object ( Operation )
A list of operations that matches the specified filter in the request.
nextPageToken
string
The standard List next-page token.
unreachable[]
string
Unordered list. Unreachable resources. Populated when the request sets ListOperationsRequest.return_partial_success and reads across collections. For example, when attempting to list all resources across all supported locations.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-29 UTC."],[],[]]

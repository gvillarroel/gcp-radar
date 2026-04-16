---
title: "ListOperationsRequest \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest/Shared.Types/ListOperationsRequest
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest/Shared.Types/ListOperationsRequest
  title: "ListOperationsRequest \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Reference
Send feedback
ListOperationsRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The request message for Operations.ListOperations .
JSON representation
{
"name" : string ,
"filter" : string ,
"pageSize" : integer ,
"pageToken" : string ,
"returnPartialSuccess" : boolean
}
Fields
name
string
The name of the operation's parent resource.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-16 UTC."],[],[]]

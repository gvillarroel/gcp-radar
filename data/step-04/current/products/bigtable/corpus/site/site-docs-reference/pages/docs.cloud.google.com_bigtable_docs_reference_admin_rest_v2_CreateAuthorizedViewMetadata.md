---
title: "CreateAuthorizedViewMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateAuthorizedViewMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateAuthorizedViewMetadata
  title: "CreateAuthorizedViewMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
CreateAuthorizedViewMetadata
Stay organized with collections
Save and categorize content based on your preferences.
The metadata for the Operation returned by authorizedViews.create.
JSON representation
{
"originalRequest" : {
object ( CreateAuthorizedViewRequest )
} ,
"requestTime" : string ,
"finishTime" : string
}
Fields
originalRequest
object ( CreateAuthorizedViewRequest )
The request that prompted the initiation of this authorizedViews.create operation.
requestTime
string ( Timestamp format)
The time at which the original request was received.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
finishTime
string ( Timestamp format)
The time at which the operation failed or was completed successfully.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
CreateAuthorizedViewRequest
The request for authorizedViews.create
JSON representation
{
"parent" : string ,
"authorizedViewId" : string ,
"authorizedView" : {
object ( AuthorizedView )
}
}
Fields
parent
string
Required. This is the name of the table the AuthorizedView belongs to. Values are of the form projects/{project}/instances/{instance}/tables/{table} .
authorizedViewId
string
Required. The id of the AuthorizedView to create. This AuthorizedView must not already exist. The authorizedViewId appended to parent forms the full AuthorizedView name of the form projects/{project}/instances/{instance}/tables/{table}/authorizedView/{authorizedView} .
authorizedView
object ( AuthorizedView )
Required. The AuthorizedView to create.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-06 UTC."],[],[]]

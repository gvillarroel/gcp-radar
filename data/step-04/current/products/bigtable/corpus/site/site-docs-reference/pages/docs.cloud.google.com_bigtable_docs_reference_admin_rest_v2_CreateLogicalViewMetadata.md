---
title: "CreateLogicalViewMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateLogicalViewMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateLogicalViewMetadata
  title: "CreateLogicalViewMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
CreateLogicalViewMetadata
Stay organized with collections
Save and categorize content based on your preferences.
The metadata for the Operation returned by logicalViews.create.
JSON representation
{
"originalRequest" : {
object ( CreateLogicalViewRequest )
} ,
"startTime" : string ,
"endTime" : string ,
"requestTime" : string ,
"finishTime" : string
}
Fields
originalRequest
object ( CreateLogicalViewRequest )
The request that prompted the initiation of this logicalViews.create operation.
startTime (deprecated)
string ( Timestamp format)
This item is deprecated!
DEPRECATED: Use requestTime instead.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime (deprecated)
string ( Timestamp format)
This item is deprecated!
DEPRECATED: Use finishTime instead.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
requestTime
string ( Timestamp format)
The time at which the original request was received.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
finishTime
string ( Timestamp format)
The time at which the operation failed or was completed successfully.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
CreateLogicalViewRequest
Request message for BigtableInstanceAdmin.CreateLogicalView.
JSON representation
{
"parent" : string ,
"logicalViewId" : string ,
"logicalView" : {
object ( LogicalView )
}
}
Fields
parent
string
Required. The parent instance where this logical view will be created. Format: projects/{project}/instances/{instance} .
logicalViewId
string
Required. The ID to use for the logical view, which will become the final component of the logical view's resource name.
logicalView
object ( LogicalView )
Required. The logical view to create.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-06 UTC."],[],[]]

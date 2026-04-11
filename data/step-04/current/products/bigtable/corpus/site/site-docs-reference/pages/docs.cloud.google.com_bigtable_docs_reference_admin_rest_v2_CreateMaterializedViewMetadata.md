---
title: "CreateMaterializedViewMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateMaterializedViewMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateMaterializedViewMetadata
  title: "CreateMaterializedViewMetadata \_|\_ Bigtable \_|\_ Google Cloud Documentation"
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
CreateMaterializedViewMetadata
Stay organized with collections
Save and categorize content based on your preferences.
The metadata for the Operation returned by materializedViews.create.
JSON representation
{
"originalRequest" : {
object ( CreateMaterializedViewRequest )
} ,
"startTime" : string ,
"endTime" : string ,
"requestTime" : string ,
"finishTime" : string
}
Fields
originalRequest
object ( CreateMaterializedViewRequest )
The request that prompted the initiation of this materializedViews.create operation.
startTime (deprecated)
string ( Timestamp format)
This item is deprecated!
The time at which this operation started. DEPRECATED: Use requestTime instead.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime (deprecated)
string ( Timestamp format)
This item is deprecated!
If set, the time at which this operation finished or was canceled. DEPRECATED: Use finishTime instead.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
requestTime
string ( Timestamp format)
The time at which the original request was received.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
finishTime
string ( Timestamp format)
The time at which the operation failed or was completed successfully.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
CreateMaterializedViewRequest
Request message for BigtableInstanceAdmin.CreateMaterializedView.
JSON representation
{
"parent" : string ,
"materializedViewId" : string ,
"materializedView" : {
object ( MaterializedView )
}
}
Fields
parent
string
Required. The parent instance where this materialized view will be created. Format: projects/{project}/instances/{instance} .
materializedViewId
string
Required. The ID to use for the materialized view, which will become the final component of the materialized view's resource name.
materializedView
object ( MaterializedView )
Required. The materialized view to create.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-06 UTC."],[],[]]

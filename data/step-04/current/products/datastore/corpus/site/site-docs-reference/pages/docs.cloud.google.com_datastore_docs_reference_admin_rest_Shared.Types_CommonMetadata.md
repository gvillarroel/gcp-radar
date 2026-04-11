---
title: "CommonMetadata \_|\_ Datastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/CommonMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastore/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/datastore/docs/reference/admin/rest/Shared.Types/CommonMetadata
  title: "CommonMetadata \_|\_ Datastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Datastore
Reference
Send feedback
CommonMetadata
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Metadata common to all Datastore Admin operations.
JSON representation
{
"startTime" : string ,
"endTime" : string ,
"operationType" : enum ( OperationType ) ,
"labels" : {
string : string ,
...
} ,
"state" : enum ( State )
}
Fields
startTime
string ( Timestamp format)
The time that work began on the operation.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
The time the operation ended, either successfully or otherwise.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
operationType
enum ( OperationType )
The type of the operation. Can be used as a filter in ListOperationsRequest.
labels
map (key: string, value: string)
The client-assigned labels which were provided when the operation was created. May also include additional labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
The current state of the Operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-05 UTC."],[],[]]

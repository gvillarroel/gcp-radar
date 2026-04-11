---
title: "BulkDeleteDocumentsMetadata \_|\_ Firestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/BulkDeleteDocumentsMetadata
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firestore/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/firestore/docs/reference/rest/Shared.Types/BulkDeleteDocumentsMetadata
  title: "BulkDeleteDocumentsMetadata \_|\_ Firestore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Firestore
Reference
Send feedback
BulkDeleteDocumentsMetadata
Stay organized with collections
Save and categorize content based on your preferences.
Metadata for google.longrunning.Operation results from FirestoreAdmin.BulkDeleteDocuments .
JSON representation
{
"startTime" : string ,
"endTime" : string ,
"operationState" : enum ( OperationState ) ,
"progressDocuments" : {
object ( Progress )
} ,
"progressBytes" : {
object ( Progress )
} ,
"collectionIds" : [
string
] ,
"namespaceIds" : [
string
] ,
"snapshotTime" : string
}
Fields
startTime
string ( Timestamp format)
The time this operation started.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
The time this operation completed. Will be unset if operation still in progress.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
operationState
enum ( OperationState )
The state of the operation.
progressDocuments
object ( Progress )
The progress, in documents, of this operation.
progressBytes
object ( Progress )
The progress, in bytes, of this operation.
collectionIds[]
string
The IDs of the collection groups that are being deleted.
namespaceIds[]
string
Which namespace IDs are being deleted.
snapshotTime
string ( Timestamp format)
The timestamp that corresponds to the version of the database that is being read to get the list of documents to delete. This time can also be used as the timestamp of PITR in case of disaster recovery (subject to PITR window limit).
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]

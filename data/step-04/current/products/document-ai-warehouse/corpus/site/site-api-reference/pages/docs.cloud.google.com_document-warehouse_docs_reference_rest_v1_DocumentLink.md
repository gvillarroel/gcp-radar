---
title: "DocumentLink \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/DocumentLink
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/DocumentLink
  title: "DocumentLink \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Reference
Send feedback
DocumentLink
Stay organized with collections
Save and categorize content based on your preferences.
A document-link between source and target document.
JSON representation
{
"name" : string ,
"sourceDocumentReference" : {
object ( DocumentReference )
} ,
"targetDocumentReference" : {
object ( DocumentReference )
} ,
"description" : string ,
"updateTime" : string ,
"createTime" : string ,
"state" : enum ( State )
}
Fields
name
string
name of this document-link. It is required that the parent derived form the name to be consistent with the source document reference. Otherwise an exception will be thrown. Format: projects/{projectNumber}/locations/{location}/documents/{source_document_id}/documentLinks/{document_link_id}.
sourceDocumentReference
object ( DocumentReference )
Document references of the source document.
targetDocumentReference
object ( DocumentReference )
Document references of the target document.
description
string
description of this document-link.
updateTime
string ( Timestamp format)
Output only. The time when the documentLink is last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
createTime
string ( Timestamp format)
Output only. The time when the documentLink is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
state
enum ( State )
The state of the documentlink. If target node has been deleted, the link is marked as invalid. Removing a source node will result in removal of all associated links.
DocumentReference
References to the documents.
JSON representation
{
"documentName" : string ,
"displayName" : string ,
"snippet" : string ,
"documentIsFolder" : boolean ,
"updateTime" : string ,
"createTime" : string ,
"deleteTime" : string ,
"documentIsRetentionFolder" : boolean ,
"documentIsLegalHoldFolder" : boolean
}
Fields
documentName
string
Required. name of the referenced document.
displayName
string
displayName of the referenced document; this name does not need to be consistent to the displayName in the Document proto, depending on the ACL constraint.
snippet
string
Stores the subset of the referenced document's content. This is useful to allow user peek the information of the referenced document.
documentIsFolder
boolean
The document type of the document being referenced.
updateTime
string ( Timestamp format)
Output only. The time when the document is last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
createTime
string ( Timestamp format)
Output only. The time when the document is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
deleteTime
string ( Timestamp format)
Output only. The time when the document is deleted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
documentIsRetentionFolder
boolean
Document is a folder with retention policy.
documentIsLegalHoldFolder
boolean
Document is a folder with legal hold.
State
The state of a document-link.
Enums
STATE_UNSPECIFIED
Unknown state of documentlink.
ACTIVE
The documentlink has both source and target documents detected.
SOFT_DELETED
target document is deleted, and mark the documentlink as soft-deleted.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-08 UTC."],[],[]]

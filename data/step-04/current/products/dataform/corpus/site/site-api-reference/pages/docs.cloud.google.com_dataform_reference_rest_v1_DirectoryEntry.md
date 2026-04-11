---
title: "DirectoryEntry \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/reference/rest/v1/DirectoryEntry
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataform/reference/rest/v1/DirectoryEntry
  title: "DirectoryEntry \_|\_ Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Dataform
Reference
Send feedback
DirectoryEntry
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
FilesystemEntryMetadata
JSON representation
Represents a single entry in a directory.
JSON representation
{
"metadata" : {
object ( FilesystemEntryMetadata )
} ,
// Union field entry can be only one of the following:
"file" : string ,
"directory" : string
// End of list of possible types for union field entry .
}
Fields
metadata
object ( FilesystemEntryMetadata )
Entry with metadata.
Union field entry . The entry's contents. entry can be only one of the following:
file
string
A file in the directory.
directory
string
A child directory in the directory.
FilesystemEntryMetadata
Represents metadata for a single entry in a filesystem.
JSON representation
{
"sizeBytes" : string ,
"updateTime" : string
}
Fields
sizeBytes
string ( int64 format)
Output only. Provides the size of the entry in bytes. For directories, this will be 0.
updateTime
string ( Timestamp format)
Output only. Represents the time of the last modification of the entry.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]

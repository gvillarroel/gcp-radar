---
title: "ObjectConditions \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/ObjectConditions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/ObjectConditions
  title: "ObjectConditions \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
ObjectConditions
Stay organized with collections
Save and categorize content based on your preferences.
Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage.
The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the updated property of Cloud Storage objects, the LastModified field of S3 objects, and the Last-Modified header of Azure blobs.
For S3 objects, the LastModified value is the time the object begins uploading. If the object meets your "last modification time" criteria, but has not finished uploading, the object is not transferred. See Transfer from Amazon S3 to Cloud Storage for more information.
Transfers with a PosixFilesystem source or destination don't support ObjectConditions .
JSON representation
{
"minTimeElapsedSinceLastModification" : string ,
"maxTimeElapsedSinceLastModification" : string ,
"includePrefixes" : [
string
] ,
"excludePrefixes" : [
string
] ,
"lastModifiedSince" : string ,
"lastModifiedBefore" : string
}
Fields
minTimeElapsedSinceLastModification
string ( Duration format)
Ensures that objects are not transferred until a specific minimum time has elapsed after the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the startTime of the TransferOperation and the "last modification time" of the object is equal to or greater than the value of minTimeElapsedSinceLastModification`. Objects that do not have a "last modification time" are also transferred.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maxTimeElapsedSinceLastModification
string ( Duration format)
Ensures that objects are not transferred if a specific maximum time has elapsed since the "last modification time". When a TransferOperation begins, objects with a "last modification time" are transferred only if the elapsed time between the startTime of the TransferOperation and the "last modification time" of the object is less than the value of maxTimeElapsedSinceLastModification`. Objects that do not have a "last modification time" are also transferred.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
includePrefixes[]
string
If you specify includePrefixes , Storage Transfer Service uses the items in the includePrefixes array to determine which objects to include in a transfer. Objects must start with one of the matching includePrefixes for inclusion in the transfer. If excludePrefixes is specified, objects must not start with any of the excludePrefixes specified for inclusion in the transfer.
The following are requirements of includePrefixes :
Each include-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported.
Each include-prefix must omit the leading slash. For example, to include the object s3://my-aws-bucket/logs/y=2015/requests.gz , specify the include-prefix as logs/y=2015/requests.gz .
None of the include-prefix values can be empty, if specified.
Each include-prefix must include a distinct portion of the object namespace. No include-prefix may be a prefix of another include-prefix.
The max size of includePrefixes is 1000.
For more information, see Filtering objects from transfers .
excludePrefixes[]
string
If you specify excludePrefixes , Storage Transfer Service uses the items in the excludePrefixes array to determine which objects to exclude from a transfer. Objects must not start with one of the matching excludePrefixes for inclusion in a transfer.
The following are requirements of excludePrefixes :
Each exclude-prefix can contain any sequence of Unicode characters, to a max length of 1024 bytes when UTF8-encoded, and must not contain Carriage Return or Line Feed characters. Wildcard matching and regular expression matching are not supported.
Each exclude-prefix must omit the leading slash. For example, to exclude the object s3://my-aws-bucket/logs/y=2015/requests.gz , specify the exclude-prefix as logs/y=2015/requests.gz .
None of the exclude-prefix values can be empty, if specified.
Each exclude-prefix must exclude a distinct portion of the object namespace. No exclude-prefix may be a prefix of another exclude-prefix.
If includePrefixes is specified, then each exclude-prefix must start with the value of a path explicitly included by includePrefixes .
The max size of excludePrefixes is 1000.
For more information, see Filtering objects from transfers .
lastModifiedSince
string ( Timestamp format)
If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.
The lastModifiedSince and lastModifiedBefore fields can be used together for chunked data processing. For example, consider a script that processes each day's worth of data at a time. For that you'd set each of the fields as follows:
lastModifiedSince to the start of the day
lastModifiedBefore to the end of the day
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
lastModifiedBefore
string ( Timestamp format)
If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]

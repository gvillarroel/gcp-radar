---
title: "GcsData \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/GcsData
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/GcsData
  title: "GcsData \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
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
GcsData
Stay organized with collections
Save and categorize content based on your preferences.
In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's updated property of Cloud Storage objects, which changes when the content or the metadata of the object is updated.
JSON representation
{
"bucketName" : string ,
"path" : string ,
"managedFolderTransferEnabled" : boolean
}
Fields
bucketName
string
Required. Cloud Storage bucket name. Must meet Bucket Name Requirements .
path
string
Root path to transfer objects.
Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
The root path value must meet Object Name Requirements .
managedFolderTransferEnabled
boolean
Preview. Enables the transfer of managed folders between Cloud Storage buckets. Set this option on the gcsDataSource.
If set to true:
Managed folders in the source bucket are transferred to the destination bucket.
Managed folders in the destination bucket are overwritten. Other OVERWRITE options are not supported.
See Transfer Cloud Storage managed folders .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]

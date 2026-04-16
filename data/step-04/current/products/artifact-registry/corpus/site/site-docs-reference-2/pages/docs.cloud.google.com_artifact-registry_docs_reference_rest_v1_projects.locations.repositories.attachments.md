---
title: "REST Resource: projects.locations.repositories.attachments \_|\_ Artifact\
  \ Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments
  title: "REST Resource: projects.locations.repositories.attachments \_|\_ Artifact\
    \ Registry \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Reference
Send feedback
REST Resource: projects.locations.repositories.attachments
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Attachment
JSON representation
Methods
Resource: Attachment
An Attachment refers to additional metadata that can be attached to artifacts in Artifact Registry. An attachment consists of one or more files.
JSON representation
{
"name" : string ,
"target" : string ,
"type" : string ,
"attachmentNamespace" : string ,
"annotations" : {
string : string ,
...
} ,
"createTime" : string ,
"updateTime" : string ,
"files" : [
string
] ,
"ociVersionName" : string
}
Fields
name
string
The name of the attachment. E.g. projects/p1/locations/us/repositories/repo/attachments/sbom .
target
string
Required. The target the attachment is for, can be a Version, Package or Repository. E.g. projects/p1/locations/us-central1/repositories/repo1/packages/p1/versions/v1 .
type
string
Type of attachment. E.g. application/vnd.spdx+json
attachmentNamespace
string
The namespace this attachment belongs to. E.g. If an attachment is created by artifact analysis, namespace is set to artifactanalysis.googleapis.com .
annotations
map (key: string, value: string)
Optional. User annotations. These attributes can only be set and used by the user, and not by Artifact Registry. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
createTime
string ( Timestamp format)
Output only. The time when the attachment was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time when the attachment was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
files[]
string
Required. The files that belong to this attachment. If the file ID part contains slashes, they are escaped. E.g. projects/p1/locations/us-central1/repositories/repo1/files/sha:<sha-of-file> .
ociVersionName
string
Output only. The name of the OCI version that this attachment created. Only populated for Docker attachments. E.g. projects/p1/locations/us-central1/repositories/repo1/packages/p1/versions/v1 .
Methods
create
Creates an attachment.
delete
Deletes an attachment.
get
Gets an attachment.
list
Lists attachments.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-14 UTC."],[],[]]

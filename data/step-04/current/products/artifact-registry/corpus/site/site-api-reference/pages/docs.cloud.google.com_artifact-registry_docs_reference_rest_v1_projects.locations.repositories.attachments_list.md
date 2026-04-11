---
title: "Method: projects.locations.repositories.attachments.list \_|\_ Artifact Registry\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments/list
  title: "Method: projects.locations.repositories.attachments.list \_|\_ Artifact\
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
Method: projects.locations.repositories.attachments.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
Examples
Try it!
Lists attachments.
HTTP request
Choose a location: global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu
GET https://artifactregistry.googleapis.com/v1/{parent=projects/*/locations/*/repositories/*}/attachments
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The name of the parent resource whose attachments will be listed.
Authorization requires the following IAM permission on the specified resource parent :
artifactregistry.attachments.list
Query parameters
Parameters
filter
string
Optional. An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are:
target
type
attachmentNamespace
pageSize
integer
The maximum number of attachments to return. Maximum page size is 1,000.
pageToken
string
The nextPageToken value returned from a previous list request, if any.
Request body
The request body must be empty.
Response body
The response from listing attachments.
If successful, the response body contains data with the following structure:
JSON representation
{
"attachments" : [
{
object ( Attachment )
}
] ,
"nextPageToken" : string
}
Fields
attachments[]
object ( Attachment )
The attachments returned.
nextPageToken
string
The token to retrieve the next page of attachments, or empty if there are no more attachments to return.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloud-platform.read-only
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-14 UTC."],[],[]]

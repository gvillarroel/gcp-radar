---
title: "Method: projects.locations.repositories.attachments.create \_|\_ Artifact\
  \ Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments/create
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.attachments/create
  title: "Method: projects.locations.repositories.attachments.create \_|\_ Artifact\
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
Method: projects.locations.repositories.attachments.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Examples
Try it!
Creates an attachment. The returned Operation will finish once the attachment has been created. Its response will be the created attachment.
HTTP request
Choose a location: global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu
POST https://artifactregistry.googleapis.com/v1/{parent=projects/*/locations/*/repositories/*}/attachments
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The name of the parent resource where the attachment will be created.
Authorization requires the following IAM permission on the specified resource parent :
artifactregistry.attachments.create
Query parameters
Parameters
attachmentId
string
Required. The attachment id to use for this attachment.
Request body
The request body contains an instance of Attachment .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-14 UTC."],[],[]]

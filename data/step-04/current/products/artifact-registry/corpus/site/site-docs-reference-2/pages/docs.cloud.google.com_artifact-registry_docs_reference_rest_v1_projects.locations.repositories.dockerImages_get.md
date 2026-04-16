---
title: "Method: projects.locations.repositories.dockerImages.get \_|\_ Artifact Registry\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages/get
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages/get
  title: "Method: projects.locations.repositories.dockerImages.get \_|\_ Artifact\
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
Method: projects.locations.repositories.dockerImages.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Examples
Try it!
Gets a docker image.
HTTP request
Choose a location: global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu
GET https://artifactregistry.googleapis.com/v1/{name=projects/*/locations/*/repositories/*/dockerImages/*}
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The name of the docker images.
Authorization requires the following IAM permission on the specified resource name :
artifactregistry.dockerImages.get
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of DockerImage .
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

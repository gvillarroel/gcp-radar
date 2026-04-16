---
title: "Method: projects.locations.repositories.aptArtifacts.import \_|\_ Artifact\
  \ Registry \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.aptArtifacts/import
  title: "Method: projects.locations.repositories.aptArtifacts.import \_|\_ Artifact\
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
Method: projects.locations.repositories.aptArtifacts.import
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
ImportAptArtifactsGcsSource
JSON representation
Examples
Try it!
Imports Apt artifacts. The returned Operation will complete once the resources are imported. Package, Version, and File resources are created based on the imported artifacts. Imported artifacts that conflict with existing resources are ignored.
HTTP request
Choose a location: global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu
POST https://artifactregistry.googleapis.com/v1/{parent=projects/*/locations/*/repositories/*}/aptArtifacts:import
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
The name of the parent resource where the artifacts will be imported.
Authorization requires the following IAM permission on the specified resource parent :
artifactregistry.aptartifacts.create
Request body
The request body contains data with the following structure:
JSON representation
{
// Union field source can be only one of the following:
"gcsSource" : {
object ( ImportAptArtifactsGcsSource )
}
// End of list of possible types for union field source .
}
Fields
Union field source . The source location of the package binaries. source can be only one of the following:
gcsSource
object ( ImportAptArtifactsGcsSource )
Google Cloud Storage location where input content is located.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
ImportAptArtifactsGcsSource
Google Cloud Storage location where the artifacts currently reside.
JSON representation
{
"uris" : [
string
] ,
"useWildcards" : boolean
}
Fields
uris[]
string
Cloud Storage paths URI (e.g., gs://my_bucket//my_object).
useWildcards
boolean
Supports URI wildcards for matching multiple objects from a single URI.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-14 UTC."],[],[]]

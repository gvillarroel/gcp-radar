---
title: "Artifact Registry API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/reference/rest
  title: "Artifact Registry API \_|\_ Google Cloud Documentation"
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
Artifact Registry API
Stay organized with collections
Save and categorize content based on your preferences.
Store and manage build artifacts in a scalable and integrated service built on Google infrastructure.
REST Resource: v1.projects
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.repositories
REST Resource: v1.projects.locations.repositories.aptArtifacts
REST Resource: v1.projects.locations.repositories.attachments
REST Resource: v1.projects.locations.repositories.dockerImages
REST Resource: v1.projects.locations.repositories.files
REST Resource: v1.projects.locations.repositories.genericArtifacts
REST Resource: v1.projects.locations.repositories.goModules
REST Resource: v1.projects.locations.repositories.googetArtifacts
REST Resource: v1.projects.locations.repositories.kfpArtifacts
REST Resource: v1.projects.locations.repositories.mavenArtifacts
REST Resource: v1.projects.locations.repositories.npmPackages
REST Resource: v1.projects.locations.repositories.packages
REST Resource: v1.projects.locations.repositories.packages.tags
REST Resource: v1.projects.locations.repositories.packages.versions
REST Resource: v1.projects.locations.repositories.pythonPackages
REST Resource: v1.projects.locations.repositories.rules
REST Resource: v1.projects.locations.repositories.yumArtifacts
Service: artifactregistry.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://artifactregistry.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://artifactregistry.googleapis.com
Regional service endpoint
A regional service endpoint is a base URL that specifies the network address of an API service in a single region. A service that is available in multiple regions might have multiple regional endpoints. Select a location to see its regional service endpoint for this service. global africa-south1 asia-east1 asia-east2 asia-northeast1 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast1 asia-southeast2 australia-southeast1 australia-southeast2 europe-central2 europe-north1 europe-southwest1 europe-west1 europe-west10 europe-west12 europe-west2 europe-west3 europe-west4 europe-west6 europe-west8 europe-west9 me-central1 me-west1 northamerica-northeast1 northamerica-northeast2 southamerica-east1 southamerica-west1 us-central1 us-east1 us-east4 us-east5 us-south1 us-west1 us-west2 us-west3 us-west4 me-central2 us-east7 us eu
https://artifactregistry.googleapis.com
REST Resource: v1.projects
Methods
getProjectSettings
GET /v1/{name=projects/*/projectSettings}
Retrieves the Settings for the Project.
updateProjectSettings
PATCH /v1/{projectSettings.name=projects/*/projectSettings}
Updates the Settings for the Project.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
getVpcscConfig
GET /v1/{name=projects/*/locations/*/vpcscConfig}
Retrieves the VPCSC Config for the Project.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
updateVpcscConfig
PATCH /v1/{vpcscConfig.name=projects/*/locations/*/vpcscConfig}
Updates the VPCSC Config for the Project.
REST Resource: v1.projects.locations.operations
Methods
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.repositories
Methods
create
POST /v1/{parent=projects/*/locations/*}/repositories
Creates a repository.
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*}
Deletes a repository and all of its contents.
exportArtifact
POST /v1/{repository=projects/*/locations/*/repositories/*}:exportArtifact
Exports an artifact to a Cloud Storage bucket.
get
GET /v1/{name=projects/*/locations/*/repositories/*}
Gets a repository.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/repositories/*}:getIamPolicy
Gets the IAM policy for a given resource.
list
GET /v1/{parent=projects/*/locations/*}/repositories
Lists repositories.
patch
PATCH /v1/{repository.name=projects/*/locations/*/repositories/*}
Updates a repository.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/repositories/*}:setIamPolicy
Updates the IAM policy for a given resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/repositories/*}:testIamPermissions
Tests if the caller has a list of permissions on a resource.
REST Resource: v1.projects.locations.repositories.aptArtifacts
Methods
import
POST /v1/{parent=projects/*/locations/*/repositories/*}/aptArtifacts:import
Imports Apt artifacts.
upload
POST /v1/{parent=projects/*/locations/*/repositories/*}/aptArtifacts:create
POST /upload/v1/{parent=projects/*/locations/*/repositories/*}/aptArtifacts:create
Directly uploads an Apt artifact.
REST Resource: v1.projects.locations.repositories.attachments
Methods
create
POST /v1/{parent=projects/*/locations/*/repositories/*}/attachments
Creates an attachment.
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*/attachments/*}
Deletes an attachment.
get
GET /v1/{name=projects/*/locations/*/repositories/*/attachments/*}
Gets an attachment.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/attachments
Lists attachments.
REST Resource: v1.projects.locations.repositories.dockerImages
Methods
get
GET /v1/{name=projects/*/locations/*/repositories/*/dockerImages/*}
Gets a docker image.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/dockerImages
Lists docker images.
REST Resource: v1.projects.locations.repositories.files
Methods
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*/files/*}
Deletes a file and all of its content.
download
GET /v1/{name=projects/*/locations/*/repositories/*/files/*}:download
Download a file.
get
GET /v1/{name=projects/*/locations/*/repositories/*/files/**}
Gets a file.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/files
Lists files.
patch
PATCH /v1/{file.name=projects/*/locations/*/repositories/*/files/*}
Updates a file.
upload
POST /v1/{parent=projects/*/locations/*/repositories/*}/files:upload
POST /upload/v1/{parent=projects/*/locations/*/repositories/*}/files:upload
Directly uploads a file to a repository.
REST Resource: v1.projects.locations.repositories.genericArtifacts
Methods
upload
POST /v1/{parent=projects/*/locations/*/repositories/*}/genericArtifacts:create
POST /upload/v1/{parent=projects/*/locations/*/repositories/*}/genericArtifacts:create
Directly uploads a Generic artifact.
REST Resource: v1.projects.locations.repositories.goModules
Methods
upload
POST /v1/{parent=projects/*/locations/*/repositories/*}/goModules:create
POST /upload/v1/{parent=projects/*/locations/*/repositories/*}/goModules:create
Directly uploads a Go module.
REST Resource: v1.projects.locations.repositories.googetArtifacts
Methods
import
POST /v1/{parent=projects/*/locations/*/repositories/*}/googetArtifacts:import
Imports GooGet artifacts.
upload
POST /v1/{parent=projects/*/locations/*/repositories/*}/googetArtifacts:create
POST /upload/v1/{parent=projects/*/locations/*/repositories/*}/googetArtifacts:create
Directly uploads a GooGet artifact.
REST Resource: v1.projects.locations.repositories.kfpArtifacts
Methods
upload
POST /v1/{parent=projects/*/locations/*/repositories/*}/kfpArtifacts:create
POST /upload/v1/{parent=projects/*/locations/*/repositories/*}/kfpArtifacts:create
Directly uploads a KFP artifact.
REST Resource: v1.projects.locations.repositories.mavenArtifacts
Methods
get
GET /v1/{name=projects/*/locations/*/repositories/*/mavenArtifacts/*}
Gets a maven artifact.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/mavenArtifacts
Lists maven artifacts.
REST Resource: v1.projects.locations.repositories.npmPackages
Methods
get
GET /v1/{name=projects/*/locations/*/repositories/*/npmPackages/*}
Gets a npm package.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/npmPackages
Lists npm packages.
REST Resource: v1.projects.locations.repositories.packages
Methods
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*/packages/*}
Deletes a package and all of its versions and tags.
get
GET /v1/{name=projects/*/locations/*/repositories/*/packages/*}
Gets a package.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/packages
Lists packages.
patch
PATCH /v1/{package.name=projects/*/locations/*/repositories/*/packages/*}
Updates a package.
REST Resource: v1.projects.locations.repositories.packages.tags
Methods
create
POST /v1/{parent=projects/*/locations/*/repositories/*/packages/*}/tags
Creates a tag.
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*/packages/*/tags/*}
Deletes a tag.
get
GET /v1/{name=projects/*/locations/*/repositories/*/packages/*/tags/*}
Gets a tag.
list
GET /v1/{parent=projects/*/locations/*/repositories/*/packages/*}/tags
Lists tags.
patch
PATCH /v1/{tag.name=projects/*/locations/*/repositories/*/packages/*/tags/*}
Updates a tag.
REST Resource: v1.projects.locations.repositories.packages.versions
Methods
batchDelete
POST /v1/{parent=projects/*/locations/*/repositories/*/packages/*}/versions:batchDelete
Deletes multiple versions across a repository.
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*/packages/*/versions/*}
Deletes a version and all of its content.
get
GET /v1/{name=projects/*/locations/*/repositories/*/packages/*/versions/*}
Gets a version
list
GET /v1/{parent=projects/*/locations/*/repositories/*/packages/*}/versions
Lists versions.
patch
PATCH /v1/{version.name=projects/*/locations/*/repositories/*/packages/*/versions/*}
Updates a version.
REST Resource: v1.projects.locations.repositories.pythonPackages
Methods
get
GET /v1/{name=projects/*/locations/*/repositories/*/pythonPackages/*}
Gets a python package.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/pythonPackages
Lists python packages.
REST Resource: v1.projects.locations.repositories.rules
Methods
create
POST /v1/{parent=projects/*/locations/*/repositories/*}/rules
Creates a rule.
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*/rules/*}
Deletes a rule.
get
GET /v1/{name=projects/*/locations/*/repositories/*/rules/*}
Gets a rule.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/rules
Lists rules.
patch
PATCH /v1/{rule.name=projects/*/locations/*/repositories/*/rules/*}
Updates a rule.
REST Resource: v1.projects.locations.repositories.yumArtifacts
Methods
import
POST /v1/{parent=projects/*/locations/*/repositories/*}/yumArtifacts:import
Imports Yum (RPM) artifacts.
upload
POST /v1/{parent=projects/*/locations/*/repositories/*}/yumArtifacts:create
POST /upload/v1/{parent=projects/*/locations/*/repositories/*}/yumArtifacts:create
Directly uploads a Yum artifact.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-14 UTC."],[],[]]

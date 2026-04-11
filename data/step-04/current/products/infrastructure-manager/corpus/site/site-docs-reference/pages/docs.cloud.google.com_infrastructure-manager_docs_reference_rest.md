---
title: "Infrastructure Manager API \_|\_ Infrastructure Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest
  title: "Infrastructure Manager API \_|\_ Infrastructure Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Infrastructure Manager
Reference
Send feedback
Infrastructure Manager API
Stay organized with collections
Save and categorize content based on your preferences.
Creates and manages Google Cloud Platform resources and infrastructure.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.deploymentGroups
REST Resource: v1.projects.locations.deploymentGroups.revisions
REST Resource: v1.projects.locations.deployments
REST Resource: v1.projects.locations.deployments.revisions
REST Resource: v1.projects.locations.deployments.revisions.resources
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.previews
REST Resource: v1.projects.locations.previews.resourceChanges
REST Resource: v1.projects.locations.previews.resourceDrifts
REST Resource: v1.projects.locations.terraformVersions
Service: config.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://config.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://config.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
getAutoMigrationConfig
GET /v1/{name=projects/*/locations/*/autoMigrationConfig}
Get the AutoMigrationConfig for a given project and location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
updateAutoMigrationConfig
PATCH /v1/{autoMigrationConfig.name=projects/*/locations/*/autoMigrationConfig}
Updates the AutoMigrationConfig for a given project and location.
REST Resource: v1.projects.locations.deploymentGroups
Methods
create
POST /v1/{parent=projects/*/locations/*}/deploymentGroups
Creates a DeploymentGroup The newly created DeploymentGroup will be in the CREATING state and can be retrieved via Get and List calls.
delete
DELETE /v1/{name=projects/*/locations/*/deploymentGroups/*}
Deletes a DeploymentGroup
deprovision
POST /v1/{name=projects/*/locations/*/deploymentGroups/*}:deprovision
Deprovisions a deployment group.
get
GET /v1/{name=projects/*/locations/*/deploymentGroups/*}
Get a DeploymentGroup for a given project and location.
list
GET /v1/{parent=projects/*/locations/*}/deploymentGroups
List DeploymentGroups for a given project and location.
patch
PATCH /v1/{deploymentGroup.name=projects/*/locations/*/deploymentGroups/*}
Updates a DeploymentGroup
provision
POST /v1/{name=projects/*/locations/*/deploymentGroups/*}:provision
Provisions a deployment group.
REST Resource: v1.projects.locations.deploymentGroups.revisions
Methods
get
GET /v1/{name=projects/*/locations/*/deploymentGroups/*/revisions/*}
Gets details about a DeploymentGroupRevision .
list
GET /v1/{parent=projects/*/locations/*/deploymentGroups/*}/revisions
Lists DeploymentGroupRevision s in a given DeploymentGroup .
REST Resource: v1.projects.locations.deployments
Methods
create
POST /v1/{parent=projects/*/locations/*}/deployments
Creates a Deployment .
delete
DELETE /v1/{name=projects/*/locations/*/deployments/*}
Deletes a Deployment .
deleteState
POST /v1/{name=projects/*/locations/*/deployments/*}:deleteState
Deletes Terraform state file in a given deployment.
exportLock
GET /v1/{name=projects/*/locations/*/deployments/*}:exportLock
Exports the lock info on a locked deployment.
exportState
POST /v1/{parent=projects/*/locations/*/deployments/*}:exportState
Exports Terraform state file from a given deployment.
get
GET /v1/{name=projects/*/locations/*/deployments/*}
Gets details about a Deployment .
getIamPolicy
GET /v1/{resource=projects/*/locations/*/deployments/*}:getIamPolicy
Gets the access control policy for a resource.
importState
POST /v1/{parent=projects/*/locations/*/deployments/*}:importState
Imports Terraform state file in a given deployment.
list
GET /v1/{parent=projects/*/locations/*}/deployments
Lists Deployment s in a given project and location.
lock
POST /v1/{name=projects/*/locations/*/deployments/*}:lock
Locks a deployment.
patch
PATCH /v1/{deployment.name=projects/*/locations/*/deployments/*}
Updates a Deployment .
setIamPolicy
POST /v1/{resource=projects/*/locations/*/deployments/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/deployments/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
unlock
POST /v1/{name=projects/*/locations/*/deployments/*}:unlock
Unlocks a locked deployment.
REST Resource: v1.projects.locations.deployments.revisions
Methods
exportState
POST /v1/{parent=projects/*/locations/*/deployments/*/revisions/*}:exportState
Exports Terraform state file from a given revision.
get
GET /v1/{name=projects/*/locations/*/deployments/*/revisions/*}
Gets details about a Revision .
list
GET /v1/{parent=projects/*/locations/*/deployments/*}/revisions
Lists Revision s of a deployment.
REST Resource: v1.projects.locations.deployments.revisions.resources
Methods
get
GET /v1/{name=projects/*/locations/*/deployments/*/revisions/*/resources/*}
Gets details about a Resource deployed by Infra Manager.
list
GET /v1/{parent=projects/*/locations/*/deployments/*/revisions/*}/resources
Lists Resources in a given revision.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.previews
Methods
create
POST /v1/{parent=projects/*/locations/*}/previews
Creates a Preview .
delete
DELETE /v1/{name=projects/*/locations/*/previews/*}
Deletes a Preview .
export
POST /v1/{parent=projects/*/locations/*/previews/*}:export
Export Preview results.
get
GET /v1/{name=projects/*/locations/*/previews/*}
Gets details about a Preview .
list
GET /v1/{parent=projects/*/locations/*}/previews
Lists Preview s in a given project and location.
REST Resource: v1.projects.locations.previews.resourceChanges
Methods
get
GET /v1/{name=projects/*/locations/*/previews/*/resourceChanges/*}
Get a ResourceChange for a given preview.
list
GET /v1/{parent=projects/*/locations/*/previews/*}/resourceChanges
Lists ResourceChanges for a given preview.
REST Resource: v1.projects.locations.previews.resourceDrifts
Methods
get
GET /v1/{name=projects/*/locations/*/previews/*/resourceDrifts/*}
Get a ResourceDrift for a given preview.
list
GET /v1/{parent=projects/*/locations/*/previews/*}/resourceDrifts
List ResourceDrifts for a given preview.
REST Resource: v1.projects.locations.terraformVersions
Methods
get
GET /v1/{name=projects/*/locations/*/terraformVersions/*}
Gets details about a TerraformVersion .
list
GET /v1/{parent=projects/*/locations/*}/terraformVersions
Lists TerraformVersion s in a given project and location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

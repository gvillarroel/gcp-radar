---
title: "Infrastructure Manager API \_|\_ Infrastructure Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/reference/rpc
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
Service: config.googleapis.com
The Service name config.googleapis.com is needed to create RPC client stubs.
google.cloud.config.v1.Config
Methods
CreateDeployment
Creates a Deployment .
CreateDeploymentGroup
Creates a DeploymentGroup The newly created DeploymentGroup will be in the CREATING state and can be retrieved via Get and List calls.
CreatePreview
Creates a Preview .
DeleteDeployment
Deletes a Deployment .
DeleteDeploymentGroup
Deletes a DeploymentGroup
DeletePreview
Deletes a Preview .
DeleteStatefile
Deletes Terraform state file in a given deployment.
DeprovisionDeploymentGroup
Deprovisions a deployment group.
ExportDeploymentStatefile
Exports Terraform state file from a given deployment.
ExportLockInfo
Exports the lock info on a locked deployment.
ExportPreviewResult
Export Preview results.
ExportRevisionStatefile
Exports Terraform state file from a given revision.
GetAutoMigrationConfig
Get the AutoMigrationConfig for a given project and location.
GetDeployment
Gets details about a Deployment .
GetDeploymentGroup
Get a DeploymentGroup for a given project and location.
GetDeploymentGroupRevision
Gets details about a DeploymentGroupRevision .
GetPreview
Gets details about a Preview .
GetResource
Gets details about a Resource deployed by Infra Manager.
GetResourceChange
Get a ResourceChange for a given preview.
GetResourceDrift
Get a ResourceDrift for a given preview.
GetRevision
Gets details about a Revision .
GetTerraformVersion
Gets details about a TerraformVersion .
ImportStatefile
Imports Terraform state file in a given deployment.
ListDeploymentGroupRevisions
Lists DeploymentGroupRevision s in a given DeploymentGroup .
ListDeploymentGroups
List DeploymentGroups for a given project and location.
ListDeployments
Lists Deployment s in a given project and location.
ListPreviews
Lists Preview s in a given project and location.
ListResourceChanges
Lists ResourceChanges for a given preview.
ListResourceDrifts
List ResourceDrifts for a given preview.
ListResources
Lists Resources in a given revision.
ListRevisions
Lists Revision s of a deployment.
ListTerraformVersions
Lists TerraformVersion s in a given project and location.
LockDeployment
Locks a deployment.
ProvisionDeploymentGroup
Provisions a deployment group.
UnlockDeployment
Unlocks a locked deployment.
UpdateAutoMigrationConfig
Updates the AutoMigrationConfig for a given project and location.
UpdateDeployment
Updates a Deployment .
UpdateDeploymentGroup
Updates a DeploymentGroup
google.cloud.location.Locations
Methods
GetLocation
Gets information about a location.
ListLocations
Lists information about the supported locations for this service.
google.iam.v1.IAMPolicy
Methods
GetIamPolicy
Gets the access control policy for a resource.
SetIamPolicy
Sets the access control policy on the specified resource.
TestIamPermissions
Returns permissions that a caller has on the specified resource.
google.longrunning.Operations
Methods
CancelOperation
Starts asynchronous cancellation on a long-running operation.
DeleteOperation
Deletes a long-running operation.
GetOperation
Gets the latest state of a long-running operation.
ListOperations
Lists operations that match the specified filter in the request.
WaitOperation
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

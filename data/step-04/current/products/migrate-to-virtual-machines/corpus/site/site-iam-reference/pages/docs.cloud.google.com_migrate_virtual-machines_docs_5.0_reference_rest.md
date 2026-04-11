---
title: "VM Migration API \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/reference/rest
  title: "VM Migration API \_|\_ Migrate to Virtual Machines \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Reference
Send feedback
VM Migration API
Stay organized with collections
Save and categorize content based on your preferences.
Use the Migrate to Virtual Machines API to programmatically migrate workloads.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.groups
REST Resource: v1.projects.locations.imageImports
REST Resource: v1.projects.locations.imageImports.imageImportJobs
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.sources
REST Resource: v1.projects.locations.sources.datacenterConnectors
REST Resource: v1.projects.locations.sources.migratingVms
REST Resource: v1.projects.locations.sources.migratingVms.cloneJobs
REST Resource: v1.projects.locations.sources.migratingVms.cutoverJobs
REST Resource: v1.projects.locations.sources.migratingVms.replicationCycles
REST Resource: v1.projects.locations.sources.utilizationReports
REST Resource: v1.projects.locations.targetProjects
Service: vmmigration.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://vmmigration.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.groups
Methods
addGroupMigration
POST /v1/{group=projects/*/locations/*/groups/*}:addGroupMigration
Adds a MigratingVm to a Group.
create
POST /v1/{parent=projects/*/locations/*}/groups
Creates a new Group in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/groups/*}
Deletes a single Group.
get
GET /v1/{name=projects/*/locations/*/groups/*}
Gets details of a single Group.
list
GET /v1/{parent=projects/*/locations/*}/groups
Lists Groups in a given project and location.
patch
PATCH /v1/{group.name=projects/*/locations/*/groups/*}
Updates the parameters of a single Group.
removeGroupMigration
POST /v1/{group=projects/*/locations/*/groups/*}:removeGroupMigration
Removes a MigratingVm from a Group.
REST Resource: v1.projects.locations.imageImports
Methods
create
POST /v1/{parent=projects/*/locations/*}/imageImports
Creates a new ImageImport in a given project.
delete
DELETE /v1/{name=projects/*/locations/*/imageImports/*}
Deletes a single ImageImport.
get
GET /v1/{name=projects/*/locations/*/imageImports/*}
Gets details of a single ImageImport.
list
GET /v1/{parent=projects/*/locations/*}/imageImports
Lists ImageImports in a given project.
REST Resource: v1.projects.locations.imageImports.imageImportJobs
Methods
cancel
POST /v1/{name=projects/*/locations/*/imageImports/*/imageImportJobs/*}:cancel
Initiates the cancellation of a running clone job.
get
GET /v1/{name=projects/*/locations/*/imageImports/*/imageImportJobs/*}
Gets details of a single ImageImportJob.
list
GET /v1/{parent=projects/*/locations/*/imageImports/*}/imageImportJobs
Lists ImageImportJobs in a given project.
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
REST Resource: v1.projects.locations.sources
Methods
create
POST /v1/{parent=projects/*/locations/*}/sources
Creates a new Source in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/sources/*}
Deletes a single Source.
fetchInventory
GET /v1/{source=projects/*/locations/*/sources/*}:fetchInventory
List remote source's inventory of VMs.
get
GET /v1/{name=projects/*/locations/*/sources/*}
Gets details of a single Source.
list
GET /v1/{parent=projects/*/locations/*}/sources
Lists Sources in a given project and location.
patch
PATCH /v1/{source.name=projects/*/locations/*/sources/*}
Updates the parameters of a single Source.
REST Resource: v1.projects.locations.sources.datacenterConnectors
Methods
create
POST /v1/{parent=projects/*/locations/*/sources/*}/datacenterConnectors
Creates a new DatacenterConnector in a given Source.
delete
DELETE /v1/{name=projects/*/locations/*/sources/*/datacenterConnectors/*}
Deletes a single DatacenterConnector.
get
GET /v1/{name=projects/*/locations/*/sources/*/datacenterConnectors/*}
Gets details of a single DatacenterConnector.
list
GET /v1/{parent=projects/*/locations/*/sources/*}/datacenterConnectors
Lists DatacenterConnectors in a given Source.
upgradeAppliance
POST /v1/{datacenterConnector=projects/*/locations/*/sources/*/datacenterConnectors/*}:upgradeAppliance
Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
REST Resource: v1.projects.locations.sources.migratingVms
Methods
create
POST /v1/{parent=projects/*/locations/*/sources/*}/migratingVms
Creates a new MigratingVm in a given Source.
delete
DELETE /v1/{name=projects/*/locations/*/sources/*/migratingVms/*}
Deletes a single MigratingVm.
finalizeMigration
POST /v1/{migratingVm=projects/*/locations/*/sources/*/migratingVms/*}:finalizeMigration
Marks a migration as completed, deleting migration resources that are no longer being used.
get
GET /v1/{name=projects/*/locations/*/sources/*/migratingVms/*}
Gets details of a single MigratingVm.
list
GET /v1/{parent=projects/*/locations/*/sources/*}/migratingVms
Lists MigratingVms in a given Source.
patch
PATCH /v1/{migratingVm.name=projects/*/locations/*/sources/*/migratingVms/*}
Updates the parameters of a single MigratingVm.
pauseMigration
POST /v1/{migratingVm=projects/*/locations/*/sources/*/migratingVms/*}:pauseMigration
Pauses a migration for a VM.
resumeMigration
POST /v1/{migratingVm=projects/*/locations/*/sources/*/migratingVms/*}:resumeMigration
Resumes a migration for a VM.
startMigration
POST /v1/{migratingVm=projects/*/locations/*/sources/*/migratingVms/*}:startMigration
Starts migration for a VM.
REST Resource: v1.projects.locations.sources.migratingVms.cloneJobs
Methods
cancel
POST /v1/{name=projects/*/locations/*/sources/*/migratingVms/*/cloneJobs/*}:cancel
Initiates the cancellation of a running clone job.
create
POST /v1/{parent=projects/*/locations/*/sources/*/migratingVms/*}/cloneJobs
Initiates a Clone of a specific migrating VM.
get
GET /v1/{name=projects/*/locations/*/sources/*/migratingVms/*/cloneJobs/*}
Gets details of a single CloneJob.
list
GET /v1/{parent=projects/*/locations/*/sources/*/migratingVms/*}/cloneJobs
Lists the CloneJobs of a migrating VM.
REST Resource: v1.projects.locations.sources.migratingVms.cutoverJobs
Methods
cancel
POST /v1/{name=projects/*/locations/*/sources/*/migratingVms/*/cutoverJobs/*}:cancel
Initiates the cancellation of a running cutover job.
create
POST /v1/{parent=projects/*/locations/*/sources/*/migratingVms/*}/cutoverJobs
Initiates a Cutover of a specific migrating VM.
get
GET /v1/{name=projects/*/locations/*/sources/*/migratingVms/*/cutoverJobs/*}
Gets details of a single CutoverJob.
list
GET /v1/{parent=projects/*/locations/*/sources/*/migratingVms/*}/cutoverJobs
Lists the CutoverJobs of a migrating VM.
REST Resource: v1.projects.locations.sources.migratingVms.replicationCycles
Methods
get
GET /v1/{name=projects/*/locations/*/sources/*/migratingVms/*/replicationCycles/*}
Gets details of a single ReplicationCycle.
list
GET /v1/{parent=projects/*/locations/*/sources/*/migratingVms/*}/replicationCycles
Lists ReplicationCycles in a given MigratingVM.
REST Resource: v1.projects.locations.sources.utilizationReports
Methods
create
POST /v1/{parent=projects/*/locations/*/sources/*}/utilizationReports
Creates a new UtilizationReport.
delete
DELETE /v1/{name=projects/*/locations/*/sources/*/utilizationReports/*}
Deletes a single Utilization Report.
get
GET /v1/{name=projects/*/locations/*/sources/*/utilizationReports/*}
Gets a single Utilization Report.
list
GET /v1/{parent=projects/*/locations/*/sources/*}/utilizationReports
Lists Utilization Reports of the given Source.
REST Resource: v1.projects.locations.targetProjects
Methods
create
POST /v1/{parent=projects/*/locations/*}/targetProjects
Creates a new TargetProject in a given project.
delete
DELETE /v1/{name=projects/*/locations/*/targetProjects/*}
Deletes a single TargetProject.
get
GET /v1/{name=projects/*/locations/*/targetProjects/*}
Gets details of a single TargetProject.
list
GET /v1/{parent=projects/*/locations/*}/targetProjects
Lists TargetProjects in a given project.
patch
PATCH /v1/{targetProject.name=projects/*/locations/*/targetProjects/*}
Updates the parameters of a single TargetProject.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]

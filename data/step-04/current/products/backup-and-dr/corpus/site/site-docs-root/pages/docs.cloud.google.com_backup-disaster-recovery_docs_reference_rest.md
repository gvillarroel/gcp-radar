---
title: "Backup and DR Service API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/rest
  title: "Backup and DR Service API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Reference
Send feedback
Backup and DR Service API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.backupPlanAssociations
REST Resource: v1.projects.locations.backupPlans
REST Resource: v1.projects.locations.backupPlans.revisions
REST Resource: v1.projects.locations.backupVaults
REST Resource: v1.projects.locations.backupVaults.dataSources
REST Resource: v1.projects.locations.backupVaults.dataSources.backups
REST Resource: v1.projects.locations.dataSourceReferences
REST Resource: v1.projects.locations.managementServers
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.resourceBackupConfigs
REST Resource: v1.projects.locations.serviceConfig
REST Resource: v1.projects.locations.trial
Service: backupdr.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://backupdr.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://backupdr.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
getTrial
GET /v1/{name=projects/*/locations/*/trial}
Gets the Trial state for a given project
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.backupPlanAssociations
Methods
create
POST /v1/{parent=projects/*/locations/*}/backupPlanAssociations
Create a BackupPlanAssociation
delete
DELETE /v1/{name=projects/*/locations/*/backupPlanAssociations/*}
Deletes a single BackupPlanAssociation.
fetchForResourceType
GET /v1/{parent=projects/*/locations/*}/backupPlanAssociations:fetchForResourceType
List BackupPlanAssociations for a given resource type.
get
GET /v1/{name=projects/*/locations/*/backupPlanAssociations/*}
Gets details of a single BackupPlanAssociation.
list
GET /v1/{parent=projects/*/locations/*}/backupPlanAssociations
Lists BackupPlanAssociations in a given project and location.
patch
PATCH /v1/{backupPlanAssociation.name=projects/*/locations/*/backupPlanAssociations/*}
Update a BackupPlanAssociation.
triggerBackup
POST /v1/{name=projects/*/locations/*/backupPlanAssociations/*}:triggerBackup
Triggers a new Backup.
REST Resource: v1.projects.locations.backupPlans
Methods
create
POST /v1/{parent=projects/*/locations/*}/backupPlans
Create a BackupPlan
delete
DELETE /v1/{name=projects/*/locations/*/backupPlans/*}
Deletes a single BackupPlan.
get
GET /v1/{name=projects/*/locations/*/backupPlans/*}
Gets details of a single BackupPlan.
list
GET /v1/{parent=projects/*/locations/*}/backupPlans
Lists BackupPlans in a given project and location.
patch
PATCH /v1/{backupPlan.name=projects/*/locations/*/backupPlans/*}
Update a BackupPlan.
REST Resource: v1.projects.locations.backupPlans.revisions
Methods
get
GET /v1/{name=projects/*/locations/*/backupPlans/*/revisions/*}
Gets details of a single BackupPlanRevision.
list
GET /v1/{parent=projects/*/locations/*/backupPlans/*}/revisions
Lists BackupPlanRevisions in a given project and location.
REST Resource: v1.projects.locations.backupVaults
Methods
create
POST /v1/{parent=projects/*/locations/*}/backupVaults
Creates a new BackupVault in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/backupVaults/*}
Deletes a BackupVault.
fetchUsable
GET /v1/{parent=projects/*/locations/*}/backupVaults:fetchUsable
FetchUsableBackupVaults lists usable BackupVaults in a given project and location.
get
GET /v1/{name=projects/*/locations/*/backupVaults/*}
Gets details of a BackupVault.
list
GET /v1/{parent=projects/*/locations/*}/backupVaults
Lists BackupVaults in a given project and location.
patch
PATCH /v1/{backupVault.name=projects/*/locations/*/backupVaults/*}
Updates the settings of a BackupVault.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/backupVaults/*}:testIamPermissions
Returns the caller's permissions on a BackupVault resource.
REST Resource: v1.projects.locations.backupVaults.dataSources
Methods
abandonBackup
POST /v1/{dataSource=projects/*/locations/*/backupVaults/*/dataSources/*}:abandonBackup
Internal only.
fetchAccessToken
POST /v1/{name=projects/*/locations/*/backupVaults/*/dataSources/*}:fetchAccessToken
Internal only.
finalizeBackup
POST /v1/{dataSource=projects/*/locations/*/backupVaults/*/dataSources/*}:finalizeBackup
Internal only.
get
GET /v1/{name=projects/*/locations/*/backupVaults/*/dataSources/*}
Gets details of a DataSource.
initiateBackup
POST /v1/{dataSource=projects/*/locations/*/backupVaults/*/dataSources/*}:initiateBackup
Internal only.
list
GET /v1/{parent=projects/*/locations/*/backupVaults/*}/dataSources
Lists DataSources in a given project and location.
patch
PATCH /v1/{dataSource.name=projects/*/locations/*/backupVaults/*/dataSources/*}
Updates the settings of a DataSource.
remove
POST /v1/{name=projects/*/locations/*/backupVaults/*/dataSources/*}:remove
Deletes a DataSource.
setInternalStatus
POST /v1/{dataSource=projects/*/locations/*/backupVaults/*/dataSources/*}:setInternalStatus
Sets the internal status of a DataSource.
REST Resource: v1.projects.locations.backupVaults.dataSources.backups
Methods
delete
DELETE /v1/{name=projects/*/locations/*/backupVaults/*/dataSources/*/backups/*}
Deletes a Backup.
fetchForResourceType
GET /v1/{parent=projects/*/locations/*/backupVaults/*/dataSources/*}/backups:fetchForResourceType
Fetch Backups for a given resource type.
get
GET /v1/{name=projects/*/locations/*/backupVaults/*/dataSources/*/backups/*}
Gets details of a Backup.
list
GET /v1/{parent=projects/*/locations/*/backupVaults/*/dataSources/*}/backups
Lists Backups in a given project and location.
patch
PATCH /v1/{backup.name=projects/*/locations/*/backupVaults/*/dataSources/*/backups/*}
Updates the settings of a Backup.
restore
POST /v1/{name=projects/*/locations/*/backupVaults/*/dataSources/*/backups/*}:restore
Restore from a Backup
REST Resource: v1.projects.locations.dataSourceReferences
Methods
fetchForResourceType
GET /v1/{parent=projects/*/locations/*}/dataSourceReferences:fetchForResourceType
Fetch DataSourceReferences for a given project, location and resource type.
get
GET /v1/{name=projects/*/locations/*/dataSourceReferences/*}
Gets details of a single DataSourceReference.
list
GET /v1/{parent=projects/*/locations/*}/dataSourceReferences
Lists DataSourceReferences for a given project and location.
REST Resource: v1.projects.locations.managementServers
Methods
create
POST /v1/{parent=projects/*/locations/*}/managementServers
Creates a new ManagementServer in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/managementServers/*}
Deletes a single ManagementServer.
get
GET /v1/{name=projects/*/locations/*/managementServers/*}
Gets details of a single ManagementServer.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/managementServers/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/managementServers
Lists ManagementServers in a given project and location.
msComplianceMetadata
POST /v1/{parent=projects/*/locations/*/managementServers}:msComplianceMetadata
Returns the Assured Workloads compliance metadata for a given project.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/managementServers/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/managementServers/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
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
REST Resource: v1.projects.locations.resourceBackupConfigs
Methods
list
GET /v1/{parent=projects/*/locations/*}/resourceBackupConfigs
Lists ResourceBackupConfigs.
REST Resource: v1.projects.locations.serviceConfig
Methods
initialize
POST /v1/{name=projects/*/locations/*/serviceConfig}:initialize
Initializes the service related config for a project.
REST Resource: v1.projects.locations.trial
Methods
end
POST /v1/{parent=projects/*/locations/*}/trial:end
Ends the trial for a project
subscribe
POST /v1/{parent=projects/*/locations/*}/trial:subscribe
Subscribes to a trial for a project
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-28 UTC."],[],[]]

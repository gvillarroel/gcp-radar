---
title: "Backup for GKE API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/Policy
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest
  title: "Backup for GKE API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Reference
Send feedback
Backup for GKE API
Stay organized with collections
Save and categorize content based on your preferences.
Backup for GKE is a managed Kubernetes workload backup and restore service for GKE clusters.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.backupChannels
REST Resource: v1.projects.locations.backupChannels.backupPlanBindings
REST Resource: v1.projects.locations.backupPlans
REST Resource: v1.projects.locations.backupPlans.backups
REST Resource: v1.projects.locations.backupPlans.backups.volumeBackups
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.restoreChannels
REST Resource: v1.projects.locations.restoreChannels.restorePlanBindings
REST Resource: v1.projects.locations.restorePlans
REST Resource: v1.projects.locations.restorePlans.restores
REST Resource: v1.projects.locations.restorePlans.restores.volumeRestores
Service: gkebackup.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://gkebackup.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://gkebackup.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.backupChannels
Methods
create
POST /v1/{parent=projects/*/locations/*}/backupChannels
Creates a new BackupChannel in a given location.
delete
DELETE /v1/{name=projects/*/locations/*/backupChannels/*}
Deletes an existing BackupChannel.
get
GET /v1/{name=projects/*/locations/*/backupChannels/*}
Retrieve the details of a single BackupChannel.
list
GET /v1/{parent=projects/*/locations/*}/backupChannels
Lists BackupChannels in a given location.
patch
PATCH /v1/{backupChannel.name=projects/*/locations/*/backupChannels/*}
Update a BackupChannel.
REST Resource: v1.projects.locations.backupChannels.backupPlanBindings
Methods
get
GET /v1/{name=projects/*/locations/*/backupChannels/*/backupPlanBindings/*}
Retrieve the details of a single BackupPlanBinding.
list
GET /v1/{parent=projects/*/locations/*/backupChannels/*}/backupPlanBindings
Lists BackupPlanBindings in a given location.
REST Resource: v1.projects.locations.backupPlans
Methods
create
POST /v1/{parent=projects/*/locations/*}/backupPlans
Creates a new BackupPlan in a given location.
delete
DELETE /v1/{name=projects/*/locations/*/backupPlans/*}
Deletes an existing BackupPlan.
get
GET /v1/{name=projects/*/locations/*/backupPlans/*}
Retrieve the details of a single BackupPlan.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/backupPlans/*}:getIamPolicy
Gets the access control policy for a resource.
getTags
GET /v1/{name=projects/*/locations/*/backupPlans/*}:getTags
Returns tags directly bound to a GCP resource.
list
GET /v1/{parent=projects/*/locations/*}/backupPlans
Lists BackupPlans in a given location.
patch
PATCH /v1/{backupPlan.name=projects/*/locations/*/backupPlans/*}
Update a BackupPlan.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/backupPlans/*}:setIamPolicy
Sets the access control policy on the specified resource.
setTags
POST /v1/{name=projects/*/locations/*/backupPlans/*}:setTags
Updates tags directly bound to a GCP resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/backupPlans/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.backupPlans.backups
Methods
create
POST /v1/{parent=projects/*/locations/*/backupPlans/*}/backups
Creates a Backup for the given BackupPlan.
delete
DELETE /v1/{name=projects/*/locations/*/backupPlans/*/backups/*}
Deletes an existing Backup.
get
GET /v1/{name=projects/*/locations/*/backupPlans/*/backups/*}
Retrieve the details of a single Backup.
getBackupIndexDownloadUrl
GET /v1/{backup=projects/*/locations/*/backupPlans/*/backups/*}:getBackupIndexDownloadUrl
Retrieve the link to the backupIndex.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/backupPlans/*/backups/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/backupPlans/*}/backups
Lists the Backups for a given BackupPlan.
patch
PATCH /v1/{backup.name=projects/*/locations/*/backupPlans/*/backups/*}
Update a Backup.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/backupPlans/*/backups/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/backupPlans/*/backups/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.backupPlans.backups.volumeBackups
Methods
get
GET /v1/{name=projects/*/locations/*/backupPlans/*/backups/*/volumeBackups/*}
Retrieve the details of a single VolumeBackup.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/backupPlans/*/backups/*/volumeBackups/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/backupPlans/*/backups/*}/volumeBackups
Lists the VolumeBackups for a given Backup.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/backupPlans/*/backups/*/volumeBackups/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/backupPlans/*/backups/*/volumeBackups/*}:testIamPermissions
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
REST Resource: v1.projects.locations.restoreChannels
Methods
create
POST /v1/{parent=projects/*/locations/*}/restoreChannels
Creates a new RestoreChannel in a given location.
delete
DELETE /v1/{name=projects/*/locations/*/restoreChannels/*}
Deletes an existing RestoreChannel.
get
GET /v1/{name=projects/*/locations/*/restoreChannels/*}
Retrieve the details of a single RestoreChannel.
list
GET /v1/{parent=projects/*/locations/*}/restoreChannels
Lists RestoreChannels in a given location.
patch
PATCH /v1/{restoreChannel.name=projects/*/locations/*/restoreChannels/*}
Update a RestoreChannel.
REST Resource: v1.projects.locations.restoreChannels.restorePlanBindings
Methods
get
GET /v1/{name=projects/*/locations/*/restoreChannels/*/restorePlanBindings/*}
Retrieve the details of a single RestorePlanBinding.
list
GET /v1/{parent=projects/*/locations/*/restoreChannels/*}/restorePlanBindings
Lists RestorePlanBindings in a given location.
REST Resource: v1.projects.locations.restorePlans
Methods
create
POST /v1/{parent=projects/*/locations/*}/restorePlans
Creates a new RestorePlan in a given location.
delete
DELETE /v1/{name=projects/*/locations/*/restorePlans/*}
Deletes an existing RestorePlan.
get
GET /v1/{name=projects/*/locations/*/restorePlans/*}
Retrieve the details of a single RestorePlan.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/restorePlans/*}:getIamPolicy
Gets the access control policy for a resource.
getTags
GET /v1/{name=projects/*/locations/*/restorePlans/*}:getTags
Returns tags directly bound to a GCP resource.
list
GET /v1/{parent=projects/*/locations/*}/restorePlans
Lists RestorePlans in a given location.
patch
PATCH /v1/{restorePlan.name=projects/*/locations/*/restorePlans/*}
Update a RestorePlan.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/restorePlans/*}:setIamPolicy
Sets the access control policy on the specified resource.
setTags
POST /v1/{name=projects/*/locations/*/restorePlans/*}:setTags
Updates tags directly bound to a GCP resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/restorePlans/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.restorePlans.restores
Methods
create
POST /v1/{parent=projects/*/locations/*/restorePlans/*}/restores
Creates a new Restore for the given RestorePlan.
delete
DELETE /v1/{name=projects/*/locations/*/restorePlans/*/restores/*}
Deletes an existing Restore.
get
GET /v1/{name=projects/*/locations/*/restorePlans/*/restores/*}
Retrieves the details of a single Restore.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/restorePlans/*/restores/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/restorePlans/*}/restores
Lists the Restores for a given RestorePlan.
patch
PATCH /v1/{restore.name=projects/*/locations/*/restorePlans/*/restores/*}
Update a Restore.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/restorePlans/*/restores/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/restorePlans/*/restores/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.restorePlans.restores.volumeRestores
Methods
get
GET /v1/{name=projects/*/locations/*/restorePlans/*/restores/*/volumeRestores/*}
Retrieve the details of a single VolumeRestore.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/restorePlans/*/restores/*/volumeRestores/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/restorePlans/*/restores/*}/volumeRestores
Lists the VolumeRestores for a given Restore.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/restorePlans/*/restores/*/volumeRestores/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/restorePlans/*/restores/*/volumeRestores/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-11 UTC."],[],[]]

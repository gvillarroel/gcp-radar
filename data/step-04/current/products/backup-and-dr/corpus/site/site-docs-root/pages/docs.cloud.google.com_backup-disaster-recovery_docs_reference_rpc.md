---
title: "Backup and DR Service API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/rpc
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
Service: backupdr.googleapis.com
The Service name backupdr.googleapis.com is needed to create RPC client stubs.
google.cloud.backupdr.v1.BackupDR
Methods
AbandonBackup
Internal only.
CreateBackupPlan
Create a BackupPlan
CreateBackupPlanAssociation
Create a BackupPlanAssociation
CreateBackupVault
Creates a new BackupVault in a given project and location.
CreateManagementServer
Creates a new ManagementServer in a given project and location.
DeleteBackup
Deletes a Backup.
DeleteBackupPlan
Deletes a single BackupPlan.
DeleteBackupPlanAssociation
Deletes a single BackupPlanAssociation.
DeleteBackupVault
Deletes a BackupVault.
DeleteManagementServer
Deletes a single ManagementServer.
EndTrial
Ends the trial for a project
FetchAccessToken
Internal only.
FetchBackupPlanAssociationsForResourceType
List BackupPlanAssociations for a given resource type.
FetchBackupsForResourceType
Fetch Backups for a given resource type.
FetchDataSourceReferencesForResourceType
Fetch DataSourceReferences for a given project, location and resource type.
FetchMsComplianceMetadata
Returns the Assured Workloads compliance metadata for a given project.
FetchUsableBackupVaults
FetchUsableBackupVaults lists usable BackupVaults in a given project and location.
FinalizeBackup
Internal only.
GetBackup
Gets details of a Backup.
GetBackupPlan
Gets details of a single BackupPlan.
GetBackupPlanAssociation
Gets details of a single BackupPlanAssociation.
GetBackupPlanRevision
Gets details of a single BackupPlanRevision.
GetBackupVault
Gets details of a BackupVault.
GetDataSource
Gets details of a DataSource.
GetDataSourceReference
Gets details of a single DataSourceReference.
GetManagementServer
Gets details of a single ManagementServer.
GetTrial
Gets the Trial state for a given project
InitializeService
Initializes the service related config for a project.
InitiateBackup
Internal only.
ListBackupPlanAssociations
Lists BackupPlanAssociations in a given project and location.
ListBackupPlanRevisions
Lists BackupPlanRevisions in a given project and location.
ListBackupPlans
Lists BackupPlans in a given project and location.
ListBackupVaults
Lists BackupVaults in a given project and location.
ListBackups
Lists Backups in a given project and location.
ListDataSourceReferences
Lists DataSourceReferences for a given project and location.
ListDataSources
Lists DataSources in a given project and location.
ListManagementServers
Lists ManagementServers in a given project and location.
RemoveDataSource
Deletes a DataSource.
RestoreBackup
Restore from a Backup
SetInternalStatus
Sets the internal status of a DataSource.
SubscribeTrial
Subscribes to a trial for a project
TestIamPermissions
Returns the caller's permissions on a BackupVault resource.
TriggerBackup
Triggers a new Backup.
UpdateBackup
Updates the settings of a Backup.
UpdateBackupPlan
Update a BackupPlan.
UpdateBackupPlanAssociation
Update a BackupPlanAssociation.
UpdateBackupVault
Updates the settings of a BackupVault.
UpdateDataSource
Updates the settings of a DataSource.
google.cloud.backupdr.v1.BackupDrProtectionSummary
Methods
ListResourceBackupConfigs
Lists ResourceBackupConfigs.
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
Last updated 2025-11-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-28 UTC."],[],[]]

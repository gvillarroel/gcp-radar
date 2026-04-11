---
title: "NetApp API \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest
  title: "NetApp API \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Reference
Send feedback
NetApp API
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud NetApp Volumes is a fully-managed, cloud-based data storage service that provides advanced data management capabilities and highly scalable performance with global availability.
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.activeDirectories
REST Resource: v1beta1.projects.locations.backupPolicies
REST Resource: v1beta1.projects.locations.backupVaults
REST Resource: v1beta1.projects.locations.backupVaults.backups
REST Resource: v1beta1.projects.locations.hostGroups
REST Resource: v1beta1.projects.locations.kmsConfigs
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1beta1.projects.locations.storagePools
REST Resource: v1beta1.projects.locations.volumes
REST Resource: v1beta1.projects.locations.volumes.quotaRules
REST Resource: v1beta1.projects.locations.volumes.replications
REST Resource: v1beta1.projects.locations.volumes.snapshots
REST Resource: v1alpha1.projects.locations
REST Resource: v1alpha1.projects.locations.activeDirectories
REST Resource: v1alpha1.projects.locations.backupPolicies
REST Resource: v1alpha1.projects.locations.backupVaults
REST Resource: v1alpha1.projects.locations.backupVaults.backups
REST Resource: v1alpha1.projects.locations.hostGroups
REST Resource: v1alpha1.projects.locations.kmsConfigs
REST Resource: v1alpha1.projects.locations.operations
REST Resource: v1alpha1.projects.locations.storagePools
REST Resource: v1alpha1.projects.locations.volumes
REST Resource: v1alpha1.projects.locations.volumes.quotaRules
REST Resource: v1alpha1.projects.locations.volumes.replications
REST Resource: v1alpha1.projects.locations.volumes.snapshots
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.activeDirectories
REST Resource: v1.projects.locations.backupPolicies
REST Resource: v1.projects.locations.backupVaults
REST Resource: v1.projects.locations.backupVaults.backups
REST Resource: v1.projects.locations.hostGroups
REST Resource: v1.projects.locations.kmsConfigs
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.storagePools
REST Resource: v1.projects.locations.volumes
REST Resource: v1.projects.locations.volumes.quotaRules
REST Resource: v1.projects.locations.volumes.replications
REST Resource: v1.projects.locations.volumes.snapshots
Service: netapp.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://netapp.googleapis.com/$discovery/rest?version=v1
https://netapp.googleapis.com/$discovery/rest?version=v1beta1
https://netapp.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://netapp.googleapis.com
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.projects.locations.activeDirectories
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/activeDirectories
CreateActiveDirectory Creates the active directory specified in the request.
delete
DELETE /v1beta1/{name=projects/*/locations/*/activeDirectories/*}
Delete the active directory specified in the request.
get
GET /v1beta1/{name=projects/*/locations/*/activeDirectories/*}
Describes a specified active directory.
list
GET /v1beta1/{parent=projects/*/locations/*}/activeDirectories
Lists active directories.
patch
PATCH /v1beta1/{activeDirectory.name=projects/*/locations/*/activeDirectories/*}
Update the parameters of an active directories.
REST Resource: v1beta1.projects.locations.backupPolicies
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/backupPolicies
Creates new backup policy
delete
DELETE /v1beta1/{name=projects/*/locations/*/backupPolicies/*}
Warning!
get
GET /v1beta1/{name=projects/*/locations/*/backupPolicies/*}
Returns the description of the specified backup policy by backup_policy_id.
list
GET /v1beta1/{parent=projects/*/locations/*}/backupPolicies
Returns list of all available backup policies.
patch
PATCH /v1beta1/{backupPolicy.name=projects/*/locations/*/backupPolicies/*}
Updates settings of a specific backup policy.
REST Resource: v1beta1.projects.locations.backupVaults
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/backupVaults
Creates new backup vault
delete
DELETE /v1beta1/{name=projects/*/locations/*/backupVaults/*}
Warning!
get
GET /v1beta1/{name=projects/*/locations/*/backupVaults/*}
Returns the description of the specified backup vault
list
GET /v1beta1/{parent=projects/*/locations/*}/backupVaults
Returns list of all available backup vaults.
patch
PATCH /v1beta1/{backupVault.name=projects/*/locations/*/backupVaults/*}
Updates the settings of a specific backup vault.
REST Resource: v1beta1.projects.locations.backupVaults.backups
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/backupVaults/*}/backups
Creates a backup from the volume specified in the request The backup can be created from the given snapshot if specified in the request.
delete
DELETE /v1beta1/{name=projects/*/locations/*/backupVaults/*/backups/*}
Warning!
get
GET /v1beta1/{name=projects/*/locations/*/backupVaults/*/backups/*}
Returns the description of the specified backup
list
GET /v1beta1/{parent=projects/*/locations/*/backupVaults/*}/backups
Returns descriptions of all backups for a backupVault.
patch
PATCH /v1beta1/{backup.name=projects/*/locations/*/backupVaults/*/backups/*}
Update backup with full spec.
REST Resource: v1beta1.projects.locations.hostGroups
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/hostGroups
Creates a new host group.
delete
DELETE /v1beta1/{name=projects/*/locations/*/hostGroups/*}
Deletes a host group.
get
GET /v1beta1/{name=projects/*/locations/*/hostGroups/*}
Returns details of the specified host group.
list
GET /v1beta1/{parent=projects/*/locations/*}/hostGroups
Returns a list of host groups in a location .
patch
PATCH /v1beta1/{hostGroup.name=projects/*/locations/*/hostGroups/*}
Updates an existing host group.
REST Resource: v1beta1.projects.locations.kmsConfigs
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/kmsConfigs
Creates a new KMS config.
delete
DELETE /v1beta1/{name=projects/*/locations/*/kmsConfigs/*}
Warning!
encrypt
POST /v1beta1/{name=projects/*/locations/*/kmsConfigs/*}:encrypt
Encrypt the existing volumes without CMEK encryption with the desired the KMS config for the whole region.
get
GET /v1beta1/{name=projects/*/locations/*/kmsConfigs/*}
Returns the description of the specified KMS config by kms_config_id.
list
GET /v1beta1/{parent=projects/*/locations/*}/kmsConfigs
Returns descriptions of all KMS configs owned by the caller.
patch
PATCH /v1beta1/{kmsConfig.name=projects/*/locations/*/kmsConfigs/*}
Updates the Kms config properties with the full spec
verify
POST /v1beta1/{name=projects/*/locations/*/kmsConfigs/*}:verify
Verifies KMS config reachability.
REST Resource: v1beta1.projects.locations.operations
Methods
cancel
POST /v1beta1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.projects.locations.storagePools
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/storagePools
Creates a new storage pool.
delete
DELETE /v1beta1/{name=projects/*/locations/*/storagePools/*}
Warning!
get
GET /v1beta1/{name=projects/*/locations/*/storagePools/*}
Returns the description of the specified storage pool by poolId.
list
GET /v1beta1/{parent=projects/*/locations/*}/storagePools
Returns descriptions of all storage pools owned by the caller.
patch
PATCH /v1beta1/{storagePool.name=projects/*/locations/*/storagePools/*}
Updates the storage pool properties with the full spec
switch
POST /v1beta1/{name=projects/*/locations/*/storagePools/*}:switch
This operation will switch the active/replica zone for a regional storagePool.
validateDirectoryService
POST /v1beta1/{name=projects/*/locations/*/storagePools/*}:validateDirectoryService
ValidateDirectoryService does a connectivity check for a directory service policy attached to the storage pool.
REST Resource: v1beta1.projects.locations.volumes
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/volumes
Creates a new Volume in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/volumes/*}
Deletes a single Volume.
establishPeering
POST /v1beta1/{name=projects/*/locations/*/volumes/*}:establishPeering
Establish volume peering.
get
GET /v1beta1/{name=projects/*/locations/*/volumes/*}
Gets details of a single Volume.
list
GET /v1beta1/{parent=projects/*/locations/*}/volumes
Lists Volumes in a given project.
patch
PATCH /v1beta1/{volume.name=projects/*/locations/*/volumes/*}
Updates the parameters of a single Volume.
restore
POST /v1beta1/{name=projects/*/locations/*/volumes/*}:restore
Restore files from a backup to a volume.
revert
POST /v1beta1/{name=projects/*/locations/*/volumes/*}:revert
Revert an existing volume to a specified snapshot.
REST Resource: v1beta1.projects.locations.volumes.quotaRules
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/volumes/*}/quotaRules
Creates a new quota rule.
delete
DELETE /v1beta1/{name=projects/*/locations/*/volumes/*/quotaRules/*}
Deletes a quota rule.
get
GET /v1beta1/{name=projects/*/locations/*/volumes/*/quotaRules/*}
Returns details of the specified quota rule.
list
GET /v1beta1/{parent=projects/*/locations/*/volumes/*}/quotaRules
Returns list of all quota rules in a location.
patch
PATCH /v1beta1/{quotaRule.name=projects/*/locations/*/volumes/*/quotaRules/*}
Updates a quota rule.
REST Resource: v1beta1.projects.locations.volumes.replications
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/volumes/*}/replications
Create a new replication for a volume.
delete
DELETE /v1beta1/{name=projects/*/locations/*/volumes/*/replications/*}
Deletes a replication.
establishPeering
POST /v1beta1/{name=projects/*/locations/*/volumes/*/replications/*}:establishPeering
Establish replication peering.
get
GET /v1beta1/{name=projects/*/locations/*/volumes/*/replications/*}
Describe a replication for a volume.
list
GET /v1beta1/{parent=projects/*/locations/*/volumes/*}/replications
Returns descriptions of all replications for a volume.
patch
PATCH /v1beta1/{replication.name=projects/*/locations/*/volumes/*/replications/*}
Updates the settings of a specific replication.
resume
POST /v1beta1/{name=projects/*/locations/*/volumes/*/replications/*}:resume
Resume Cross Region Replication.
reverseDirection
POST /v1beta1/{name=projects/*/locations/*/volumes/*/replications/*}:reverseDirection
Reverses direction of replication.
stop
POST /v1beta1/{name=projects/*/locations/*/volumes/*/replications/*}:stop
Stop Cross Region Replication.
sync
POST /v1beta1/{name=projects/*/locations/*/volumes/*/replications/*}:sync
Syncs the replication.
REST Resource: v1beta1.projects.locations.volumes.snapshots
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/volumes/*}/snapshots
Create a new snapshot for a volume.
delete
DELETE /v1beta1/{name=projects/*/locations/*/volumes/*/snapshots/*}
Deletes a snapshot.
get
GET /v1beta1/{name=projects/*/locations/*/volumes/*/snapshots/*}
Describe a snapshot for a volume.
list
GET /v1beta1/{parent=projects/*/locations/*/volumes/*}/snapshots
Returns descriptions of all snapshots for a volume.
patch
PATCH /v1beta1/{snapshot.name=projects/*/locations/*/volumes/*/snapshots/*}
Updates the settings of a specific snapshot.
REST Resource: v1alpha1.projects.locations
Methods
get
GET /v1alpha1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha1.projects.locations.activeDirectories
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/activeDirectories
CreateActiveDirectory Creates the active directory specified in the request.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/activeDirectories/*}
Delete the active directory specified in the request.
get
GET /v1alpha1/{name=projects/*/locations/*/activeDirectories/*}
Describes a specified active directory.
list
GET /v1alpha1/{parent=projects/*/locations/*}/activeDirectories
Lists active directories.
patch
PATCH /v1alpha1/{activeDirectory.name=projects/*/locations/*/activeDirectories/*}
Update the parameters of an active directories.
REST Resource: v1alpha1.projects.locations.backupPolicies
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/backupPolicies
Creates new backup policy
delete
DELETE /v1alpha1/{name=projects/*/locations/*/backupPolicies/*}
Warning!
get
GET /v1alpha1/{name=projects/*/locations/*/backupPolicies/*}
Returns the description of the specified backup policy by backup_policy_id.
list
GET /v1alpha1/{parent=projects/*/locations/*}/backupPolicies
Returns list of all available backup policies.
patch
PATCH /v1alpha1/{backupPolicy.name=projects/*/locations/*/backupPolicies/*}
Updates settings of a specific backup policy.
REST Resource: v1alpha1.projects.locations.backupVaults
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/backupVaults
Creates new backup vault
delete
DELETE /v1alpha1/{name=projects/*/locations/*/backupVaults/*}
Warning!
get
GET /v1alpha1/{name=projects/*/locations/*/backupVaults/*}
Returns the description of the specified backup vault
list
GET /v1alpha1/{parent=projects/*/locations/*}/backupVaults
Returns list of all available backup vaults.
patch
PATCH /v1alpha1/{backupVault.name=projects/*/locations/*/backupVaults/*}
Updates the settings of a specific backup vault.
REST Resource: v1alpha1.projects.locations.backupVaults.backups
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/backupVaults/*}/backups
Creates a backup from the volume specified in the request The backup can be created from the given snapshot if specified in the request.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/backupVaults/*/backups/*}
Warning!
get
GET /v1alpha1/{name=projects/*/locations/*/backupVaults/*/backups/*}
Returns the description of the specified backup
list
GET /v1alpha1/{parent=projects/*/locations/*/backupVaults/*}/backups
Returns descriptions of all backups for a backupVault.
patch
PATCH /v1alpha1/{backup.name=projects/*/locations/*/backupVaults/*/backups/*}
Update backup with full spec.
REST Resource: v1alpha1.projects.locations.hostGroups
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/hostGroups
Creates a new host group.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/hostGroups/*}
Deletes a host group.
get
GET /v1alpha1/{name=projects/*/locations/*/hostGroups/*}
Returns details of the specified host group.
list
GET /v1alpha1/{parent=projects/*/locations/*}/hostGroups
Returns a list of host groups in a location .
patch
PATCH /v1alpha1/{hostGroup.name=projects/*/locations/*/hostGroups/*}
Updates an existing host group.
REST Resource: v1alpha1.projects.locations.kmsConfigs
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/kmsConfigs
Creates a new KMS config.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/kmsConfigs/*}
Warning!
encrypt
POST /v1alpha1/{name=projects/*/locations/*/kmsConfigs/*}:encrypt
Encrypt the existing volumes without CMEK encryption with the desired the KMS config for the whole region.
get
GET /v1alpha1/{name=projects/*/locations/*/kmsConfigs/*}
Returns the description of the specified KMS config by kms_config_id.
list
GET /v1alpha1/{parent=projects/*/locations/*}/kmsConfigs
Returns descriptions of all KMS configs owned by the caller.
patch
PATCH /v1alpha1/{kmsConfig.name=projects/*/locations/*/kmsConfigs/*}
Updates the Kms config properties with the full spec
verify
POST /v1alpha1/{name=projects/*/locations/*/kmsConfigs/*}:verify
Verifies KMS config reachability.
REST Resource: v1alpha1.projects.locations.operations
Methods
cancel
POST /v1alpha1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1alpha1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha1.projects.locations.storagePools
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/storagePools
Creates a new storage pool.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/storagePools/*}
Warning!
get
GET /v1alpha1/{name=projects/*/locations/*/storagePools/*}
Returns the description of the specified storage pool by poolId.
list
GET /v1alpha1/{parent=projects/*/locations/*}/storagePools
Returns descriptions of all storage pools owned by the caller.
patch
PATCH /v1alpha1/{storagePool.name=projects/*/locations/*/storagePools/*}
Updates the storage pool properties with the full spec
switch
POST /v1alpha1/{name=projects/*/locations/*/storagePools/*}:switch
This operation will switch the active/replica zone for a regional storagePool.
validateDirectoryService
POST /v1alpha1/{name=projects/*/locations/*/storagePools/*}:validateDirectoryService
ValidateDirectoryService does a connectivity check for a directory service policy attached to the storage pool.
REST Resource: v1alpha1.projects.locations.volumes
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/volumes
Creates a new Volume in a given project and location.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/volumes/*}
Deletes a single Volume.
establishPeering
POST /v1alpha1/{name=projects/*/locations/*/volumes/*}:establishPeering
Establish volume peering.
get
GET /v1alpha1/{name=projects/*/locations/*/volumes/*}
Gets details of a single Volume.
list
GET /v1alpha1/{parent=projects/*/locations/*}/volumes
Lists Volumes in a given project.
patch
PATCH /v1alpha1/{volume.name=projects/*/locations/*/volumes/*}
Updates the parameters of a single Volume.
restore
POST /v1alpha1/{name=projects/*/locations/*/volumes/*}:restore
Restore files from a backup to a volume.
revert
POST /v1alpha1/{name=projects/*/locations/*/volumes/*}:revert
Revert an existing volume to a specified snapshot.
REST Resource: v1alpha1.projects.locations.volumes.quotaRules
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/volumes/*}/quotaRules
Creates a new quota rule.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/volumes/*/quotaRules/*}
Deletes a quota rule.
get
GET /v1alpha1/{name=projects/*/locations/*/volumes/*/quotaRules/*}
Returns details of the specified quota rule.
list
GET /v1alpha1/{parent=projects/*/locations/*/volumes/*}/quotaRules
Returns list of all quota rules in a location.
patch
PATCH /v1alpha1/{quotaRule.name=projects/*/locations/*/volumes/*/quotaRules/*}
Updates a quota rule.
REST Resource: v1alpha1.projects.locations.volumes.replications
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/volumes/*}/replications
Create a new replication for a volume.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/volumes/*/replications/*}
Deletes a replication.
establishPeering
POST /v1alpha1/{name=projects/*/locations/*/volumes/*/replications/*}:establishPeering
Establish replication peering.
get
GET /v1alpha1/{name=projects/*/locations/*/volumes/*/replications/*}
Describe a replication for a volume.
list
GET /v1alpha1/{parent=projects/*/locations/*/volumes/*}/replications
Returns descriptions of all replications for a volume.
patch
PATCH /v1alpha1/{replication.name=projects/*/locations/*/volumes/*/replications/*}
Updates the settings of a specific replication.
resume
POST /v1alpha1/{name=projects/*/locations/*/volumes/*/replications/*}:resume
Resume Cross Region Replication.
reverseDirection
POST /v1alpha1/{name=projects/*/locations/*/volumes/*/replications/*}:reverseDirection
Reverses direction of replication.
stop
POST /v1alpha1/{name=projects/*/locations/*/volumes/*/replications/*}:stop
Stop Cross Region Replication.
sync
POST /v1alpha1/{name=projects/*/locations/*/volumes/*/replications/*}:sync
Syncs the replication.
REST Resource: v1alpha1.projects.locations.volumes.snapshots
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/volumes/*}/snapshots
Create a new snapshot for a volume.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/volumes/*/snapshots/*}
Deletes a snapshot.
get
GET /v1alpha1/{name=projects/*/locations/*/volumes/*/snapshots/*}
Describe a snapshot for a volume.
list
GET /v1alpha1/{parent=projects/*/locations/*/volumes/*}/snapshots
Returns descriptions of all snapshots for a volume.
patch
PATCH /v1alpha1/{snapshot.name=projects/*/locations/*/volumes/*/snapshots/*}
Updates the settings of a specific snapshot.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.activeDirectories
Methods
create
POST /v1/{parent=projects/*/locations/*}/activeDirectories
CreateActiveDirectory Creates the active directory specified in the request.
delete
DELETE /v1/{name=projects/*/locations/*/activeDirectories/*}
Delete the active directory specified in the request.
get
GET /v1/{name=projects/*/locations/*/activeDirectories/*}
Describes a specified active directory.
list
GET /v1/{parent=projects/*/locations/*}/activeDirectories
Lists active directories.
patch
PATCH /v1/{activeDirectory.name=projects/*/locations/*/activeDirectories/*}
Update the parameters of an active directories.
REST Resource: v1.projects.locations.backupPolicies
Methods
create
POST /v1/{parent=projects/*/locations/*}/backupPolicies
Creates new backup policy
delete
DELETE /v1/{name=projects/*/locations/*/backupPolicies/*}
Warning!
get
GET /v1/{name=projects/*/locations/*/backupPolicies/*}
Returns the description of the specified backup policy by backup_policy_id.
list
GET /v1/{parent=projects/*/locations/*}/backupPolicies
Returns list of all available backup policies.
patch
PATCH /v1/{backupPolicy.name=projects/*/locations/*/backupPolicies/*}
Updates settings of a specific backup policy.
REST Resource: v1.projects.locations.backupVaults
Methods
create
POST /v1/{parent=projects/*/locations/*}/backupVaults
Creates new backup vault
delete
DELETE /v1/{name=projects/*/locations/*/backupVaults/*}
Warning!
get
GET /v1/{name=projects/*/locations/*/backupVaults/*}
Returns the description of the specified backup vault
list
GET /v1/{parent=projects/*/locations/*}/backupVaults
Returns list of all available backup vaults.
patch
PATCH /v1/{backupVault.name=projects/*/locations/*/backupVaults/*}
Updates the settings of a specific backup vault.
REST Resource: v1.projects.locations.backupVaults.backups
Methods
create
POST /v1/{parent=projects/*/locations/*/backupVaults/*}/backups
Creates a backup from the volume specified in the request The backup can be created from the given snapshot if specified in the request.
delete
DELETE /v1/{name=projects/*/locations/*/backupVaults/*/backups/*}
Warning!
get
GET /v1/{name=projects/*/locations/*/backupVaults/*/backups/*}
Returns the description of the specified backup
list
GET /v1/{parent=projects/*/locations/*/backupVaults/*}/backups
Returns descriptions of all backups for a backupVault.
patch
PATCH /v1/{backup.name=projects/*/locations/*/backupVaults/*/backups/*}
Update backup with full spec.
REST Resource: v1.projects.locations.hostGroups
Methods
create
POST /v1/{parent=projects/*/locations/*}/hostGroups
Creates a new host group.
delete
DELETE /v1/{name=projects/*/locations/*/hostGroups/*}
Deletes a host group.
get
GET /v1/{name=projects/*/locations/*/hostGroups/*}
Returns details of the specified host group.
list
GET /v1/{parent=projects/*/locations/*}/hostGroups
Returns a list of host groups in a location .
patch
PATCH /v1/{hostGroup.name=projects/*/locations/*/hostGroups/*}
Updates an existing host group.
REST Resource: v1.projects.locations.kmsConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/kmsConfigs
Creates a new KMS config.
delete
DELETE /v1/{name=projects/*/locations/*/kmsConfigs/*}
Warning!
encrypt
POST /v1/{name=projects/*/locations/*/kmsConfigs/*}:encrypt
Encrypt the existing volumes without CMEK encryption with the desired the KMS config for the whole region.
get
GET /v1/{name=projects/*/locations/*/kmsConfigs/*}
Returns the description of the specified KMS config by kms_config_id.
list
GET /v1/{parent=projects/*/locations/*}/kmsConfigs
Returns descriptions of all KMS configs owned by the caller.
patch
PATCH /v1/{kmsConfig.name=projects/*/locations/*/kmsConfigs/*}
Updates the Kms config properties with the full spec
verify
POST /v1/{name=projects/*/locations/*/kmsConfigs/*}:verify
Verifies KMS config reachability.
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
REST Resource: v1.projects.locations.storagePools
Methods
create
POST /v1/{parent=projects/*/locations/*}/storagePools
Creates a new storage pool.
delete
DELETE /v1/{name=projects/*/locations/*/storagePools/*}
Warning!
get
GET /v1/{name=projects/*/locations/*/storagePools/*}
Returns the description of the specified storage pool by poolId.
list
GET /v1/{parent=projects/*/locations/*}/storagePools
Returns descriptions of all storage pools owned by the caller.
patch
PATCH /v1/{storagePool.name=projects/*/locations/*/storagePools/*}
Updates the storage pool properties with the full spec
switch
POST /v1/{name=projects/*/locations/*/storagePools/*}:switch
This operation will switch the active/replica zone for a regional storagePool.
validateDirectoryService
POST /v1/{name=projects/*/locations/*/storagePools/*}:validateDirectoryService
ValidateDirectoryService does a connectivity check for a directory service policy attached to the storage pool.
REST Resource: v1.projects.locations.volumes
Methods
create
POST /v1/{parent=projects/*/locations/*}/volumes
Creates a new Volume in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/volumes/*}
Deletes a single Volume.
get
GET /v1/{name=projects/*/locations/*/volumes/*}
Gets details of a single Volume.
list
GET /v1/{parent=projects/*/locations/*}/volumes
Lists Volumes in a given project.
patch
PATCH /v1/{volume.name=projects/*/locations/*/volumes/*}
Updates the parameters of a single Volume.
restore
POST /v1/{name=projects/*/locations/*/volumes/*}:restore
Restore files from a backup to a volume.
revert
POST /v1/{name=projects/*/locations/*/volumes/*}:revert
Revert an existing volume to a specified snapshot.
REST Resource: v1.projects.locations.volumes.quotaRules
Methods
create
POST /v1/{parent=projects/*/locations/*/volumes/*}/quotaRules
Creates a new quota rule.
delete
DELETE /v1/{name=projects/*/locations/*/volumes/*/quotaRules/*}
Deletes a quota rule.
get
GET /v1/{name=projects/*/locations/*/volumes/*/quotaRules/*}
Returns details of the specified quota rule.
list
GET /v1/{parent=projects/*/locations/*/volumes/*}/quotaRules
Returns list of all quota rules in a location.
patch
PATCH /v1/{quotaRule.name=projects/*/locations/*/volumes/*/quotaRules/*}
Updates a quota rule.
REST Resource: v1.projects.locations.volumes.replications
Methods
create
POST /v1/{parent=projects/*/locations/*/volumes/*}/replications
Create a new replication for a volume.
delete
DELETE /v1/{name=projects/*/locations/*/volumes/*/replications/*}
Deletes a replication.
establishPeering
POST /v1/{name=projects/*/locations/*/volumes/*/replications/*}:establishPeering
Establish replication peering.
get
GET /v1/{name=projects/*/locations/*/volumes/*/replications/*}
Describe a replication for a volume.
list
GET /v1/{parent=projects/*/locations/*/volumes/*}/replications
Returns descriptions of all replications for a volume.
patch
PATCH /v1/{replication.name=projects/*/locations/*/volumes/*/replications/*}
Updates the settings of a specific replication.
resume
POST /v1/{name=projects/*/locations/*/volumes/*/replications/*}:resume
Resume Cross Region Replication.
reverseDirection
POST /v1/{name=projects/*/locations/*/volumes/*/replications/*}:reverseDirection
Reverses direction of replication.
stop
POST /v1/{name=projects/*/locations/*/volumes/*/replications/*}:stop
Stop Cross Region Replication.
sync
POST /v1/{name=projects/*/locations/*/volumes/*/replications/*}:sync
Syncs the replication.
REST Resource: v1.projects.locations.volumes.snapshots
Methods
create
POST /v1/{parent=projects/*/locations/*/volumes/*}/snapshots
Create a new snapshot for a volume.
delete
DELETE /v1/{name=projects/*/locations/*/volumes/*/snapshots/*}
Deletes a snapshot.
get
GET /v1/{name=projects/*/locations/*/volumes/*/snapshots/*}
Describe a snapshot for a volume.
list
GET /v1/{parent=projects/*/locations/*/volumes/*}/snapshots
Returns descriptions of all snapshots for a volume.
patch
PATCH /v1/{snapshot.name=projects/*/locations/*/volumes/*/snapshots/*}
Updates the settings of a specific snapshot.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-07 UTC."],[],[]]

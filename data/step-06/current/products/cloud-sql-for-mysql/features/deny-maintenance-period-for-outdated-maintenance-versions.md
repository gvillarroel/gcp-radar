---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.887Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Deny maintenance period for outdated maintenance versions"
feature_slug: "deny-maintenance-period-for-outdated-maintenance-versions"
latest_feature_date: "2025-08-15"
deprecation_date: "2025-08-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
keywords:
  - "deny"
  - "maintenance"
  - "period"
  - "outdated"
  - "versions"
  - "capability"
  - "lets"
  - "you"
---

# Deny maintenance period for outdated maintenance versions

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This capability lets you set a deny maintenance period for instances running older maintenance versions; deprecated on 2025-08-15.

## Extended Definition

This capability lets you set a deny maintenance period for instances running older maintenance versions; deprecated on 2025-08-15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "settingsVersion" : string , "authorizedGaeApplications" : [ string ] , "tier" : string , "kind" : string , "userLabels" : { string : string , ... } , "availabilityType" : enum ( SqlAvailabilityType ) , "pricingPlan" : enum ( SqlPricingPlan ) , "replicationType" : enum ( SqlReplicationType ) , "storageAutoResizeLimit" : string , "activationPolicy" : enum ( SqlActivationPolicy ) , "ipConfiguration" : { object ( IpConfiguration ) } , "storageAutoResize" : boolean , "locationPreference" : { object ( LocationPreference ) } , "databaseFlags" : [ { object ( DatabaseFlags ) } ] , "dataDiskType" : enum ( SqlDataDiskType ) , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "backupConfiguration" : { object ( BackupConfiguration ) } , "databaseReplicationEnabled" : boolean , "crashSafeReplicationEnabled" : boolean , "dataDiskSizeGb" : string , "activeDirectoryConfig" : { object ( SqlActiveDirectoryConfig ) } , "collation" : string , "denyMaintenancePeriods" : [ { object ( DenyMaintenancePeriod ) } ] , "insightsConfig" : { object ( InsightsConfig ) } , "passwordValidationPolicy" : { object ( PasswordValidationPolicy ) } , "sqlServerAuditConfig" : { object ( SqlServerAuditConfig ) } , "edition" : enum ( Edition ) , "connectorEnforcement" : enum ( ConnectorEnforcement ) , "deletionProtectionEnabled" : boolean , "timeZone" : string , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "dataCacheConfig" : { object ( DataCacheConfig ) } , "replicationLagMaxSeconds" : integer , "enableGoogleMlIntegration" : boolean , "enableDataplexIntegration" : boolean , "retainBackupsOnDelete" : boolean , "dataDiskProvisionedIops" : string , "dataDiskProvisionedThroughput" : string , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "finalBackupConfig" : { object ( FinalBackupConfig ) } , "readPoolAutoScaleConfig" : { object ( ReadPoolAutoScaleConfig ) } , "autoUpgradeEnabled" : boolean , "dataApiAccess" : enum ( DataApiAccess ) } Fields settingsVersion string ( Int64Value format) The version of instance settings.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- The data disk size minimum is 10GB. activeDirectoryConfig object ( SqlActiveDirectoryConfig ) Active Directory configuration, relevant only for Cloud SQL for SQL Server. collation string The name of server Instance collation. denyMaintenancePeriods[] object ( DenyMaintenancePeriod ) Deny maintenance periods insightsConfig object ( InsightsConfig ) Insights configuration, for now relevant only for Postgres. passwordValidationPolicy object ( PasswordValidationPolicy ) The local user password validation policy of the instance. sqlServerAuditConfig object ( SqlServerAuditConfig ) SQL Server specific audit configuration. edition enum ( Edition ) Optional.
- The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 time string Time in UTC when the "deny maintenance period" starts on startDate and ends on endDate.

### Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest)
- Source ID: `site-api-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta4.projects.instances Methods getDiskShrinkConfig GET /sql/v1beta4/projects/{project}/instances/{instance}/getDiskShrinkConfig Get Disk Shrink Config for a given instance. getLatestRecoveryTime GET /sql/v1beta4/projects/{project}/instances/{instance}/getLatestRecoveryTime Get Latest Recovery Time for a given instance. performDiskShrink POST /sql/v1beta4/projects/{project}/instances/{instance}/performDiskShrink Perform Disk Shrink on primary instance. rescheduleMaintenance POST /sql/v1beta4/projects/{project}/instances/{instance}/rescheduleMaintenance Reschedules the maintenance on the given instance. startExternalSync POST /sql/v1beta4/projects/{project}/instances/{instance}/startExternalSync Start External primary instance migration. verifyExternalSyncSettings POST /sql/v1beta4/projects/{project}/instances/{instance}/verifyExternalSyncSettings Verify External primary instance external sync settings.
- REST Resource: v1.projects.instances Methods getDiskShrinkConfig GET /v1/projects/{project}/instances/{instance}/getDiskShrinkConfig Get Disk Shrink Config for a given instance. getLatestRecoveryTime GET /v1/projects/{project}/instances/{instance}/getLatestRecoveryTime Get Latest Recovery Time for a given instance. performDiskShrink POST /v1/projects/{project}/instances/{instance}/performDiskShrink Perform Disk Shrink on primary instance. rescheduleMaintenance POST /v1/projects/{project}/instances/{instance}/rescheduleMaintenance Reschedules the maintenance on the given instance. startExternalSync POST /v1/projects/{project}/instances/{instance}/startExternalSync Start External primary instance migration. verifyExternalSyncSettings POST /v1/projects/{project}/instances/{instance}/verifyExternalSyncSettings Verify External primary instance external sync settings.
- REST Resource: v1beta4.backups Methods createBackup POST /sql/v1beta4/{parent=projects/ }/backups Creates a backup for a Cloud SQL instance. deleteBackup DELETE /sql/v1beta4/{name=projects/ /backups/ } Deletes the backup. getBackup GET /sql/v1beta4/{name=projects/ /backups/ } Retrieves a resource containing information about a backup. listBackups GET /sql/v1beta4/{parent=projects/ }/backups Lists all backups associated with the project. updateBackup PATCH /sql/v1beta4/{backup.name=projects/ /backups/ } Updates the retention period and the description of the backup.
- REST Resource: v1beta4.instances Methods ListServerCertificates GET /sql/v1beta4/projects/{project}/instances/{instance}/listServerCertificates Lists all versions of server certificates and certificate authorities (CAs) for the specified instance.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- The following command lets you check the redo log size: SHOW VARIABLES LIKE 'innodb log file%'; You can check the size of general log , if it is enabled, with the help of this command: SELECT ROUND(SUM(LENGTH(argument)/POW(1024,2)),2) AS GB from mysql.general log; If needed, you can truncate your log tables by using the API.
- Once the replica finishes this transaction, the catch up period would depend on the write workload on the source and the replica's processing speed.
- Please follow https://cloud.google.com/sql/docs/mysql/self-service-maintenance to update the maintenance version of the instance.
- If your instance runs out of storage, and the automatic storage increase capability isn't enabled, your instance goes offline.


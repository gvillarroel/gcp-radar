---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.751Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Deny maintenance period for outdated maintenance versions"
feature_slug: "deny-maintenance-period-for-outdated-maintenance-versions"
latest_feature_date: "2025-08-15"
deprecation_date: "2025-08-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest"
keywords:
  - "outdated"
  - "deny"
  - "versions"
  - "period"
  - "maintenance"
  - "users"
  - "lets"
---

# Deny maintenance period for outdated maintenance versions

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Deny maintenance period for outdated maintenance versions lets users set a deny maintenance period only if the instance maintenance version is not older than 12 months; deprecated on 2025-08-15.

## Extended Definition

Deny maintenance period for outdated maintenance versions lets users set a deny maintenance period only if the instance maintenance version is not older than 12 months; deprecated on 2025-08-15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "settingsVersion" : string , "authorizedGaeApplications" : [ string ] , "tier" : string , "kind" : string , "userLabels" : { string : string , ... } , "availabilityType" : enum ( SqlAvailabilityType ) , "pricingPlan" : enum ( SqlPricingPlan ) , "replicationType" : enum ( SqlReplicationType ) , "storageAutoResizeLimit" : string , "activationPolicy" : enum ( SqlActivationPolicy ) , "ipConfiguration" : { object ( IpConfiguration ) } , "storageAutoResize" : boolean , "locationPreference" : { object ( LocationPreference ) } , "databaseFlags" : [ { object ( DatabaseFlags ) } ] , "dataDiskType" : enum ( SqlDataDiskType ) , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "backupConfiguration" : { object ( BackupConfiguration ) } , "databaseReplicationEnabled" : boolean , "crashSafeReplicationEnabled" : boolean , "dataDiskSizeGb" : string , "activeDirectoryConfig" : { object ( SqlActiveDirectoryConfig ) } , "collation" : string , "denyMaintenancePeriods" : [ { object ( DenyMaintenancePeriod ) } ] , "insightsConfig" : { object ( InsightsConfig ) } , "passwordValidationPolicy" : { object ( PasswordValidationPolicy ) } , "sqlServerAuditConfig" : { object ( SqlServerAuditConfig ) } , "edition" : enum ( Edition ) , "connectorEnforcement" : enum ( ConnectorEnforcement ) , "deletionProtectionEnabled" : boolean , "timeZone" : string , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "dataCacheConfig" : { object ( DataCacheConfig ) } , "replicationLagMaxSeconds" : integer , "enableGoogleMlIntegration" : boolean , "enableDataplexIntegration" : boolean , "retainBackupsOnDelete" : boolean , "dataDiskProvisionedIops" : string , "dataDiskProvisionedThroughput" : string , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "finalBackupConfig" : { object ( FinalBackupConfig ) } , "readPoolAutoScaleConfig" : { object ( ReadPoolAutoScaleConfig ) } , "autoUpgradeEnabled" : boolean , "dataApiAccess" : enum ( DataApiAccess ) } Fields settingsVersion string ( Int64Value format) The version of instance settings.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- The data disk size minimum is 10GB. activeDirectoryConfig object ( SqlActiveDirectoryConfig ) Active Directory configuration, relevant only for Cloud SQL for SQL Server. collation string The name of server Instance collation. denyMaintenancePeriods[] object ( DenyMaintenancePeriod ) Deny maintenance periods insightsConfig object ( InsightsConfig ) Insights configuration, for now relevant only for Postgres. passwordValidationPolicy object ( PasswordValidationPolicy ) The local user password validation policy of the instance. sqlServerAuditConfig object ( SqlServerAuditConfig ) SQL Server specific audit configuration. edition enum ( Edition ) Optional.
- The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 time string Time in UTC when the "deny maintenance period" starts on startDate and ends on endDate.

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "settingsVersion" : string , "authorizedGaeApplications" : [ string ] , "tier" : string , "kind" : string , "userLabels" : { string : string , ... } , "availabilityType" : enum ( SqlAvailabilityType ) , "pricingPlan" : enum ( SqlPricingPlan ) , "replicationType" : enum ( SqlReplicationType ) , "storageAutoResizeLimit" : string , "activationPolicy" : enum ( SqlActivationPolicy ) , "ipConfiguration" : { object ( IpConfiguration ) } , "storageAutoResize" : boolean , "locationPreference" : { object ( LocationPreference ) } , "databaseFlags" : [ { object ( DatabaseFlags ) } ] , "dataDiskType" : enum ( SqlDataDiskType ) , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "backupConfiguration" : { object ( BackupConfiguration ) } , "databaseReplicationEnabled" : boolean , "crashSafeReplicationEnabled" : boolean , "dataDiskSizeGb" : string , "activeDirectoryConfig" : { object ( SqlActiveDirectoryConfig ) } , "collation" : string , "denyMaintenancePeriods" : [ { object ( DenyMaintenancePeriod ) } ] , "insightsConfig" : { object ( InsightsConfig ) } , "passwordValidationPolicy" : { object ( PasswordValidationPolicy ) } , "sqlServerAuditConfig" : { object ( SqlServerAuditConfig ) } , "edition" : enum ( Edition ) , "connectorEnforcement" : enum ( ConnectorEnforcement ) , "deletionProtectionEnabled" : boolean , "timeZone" : string , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "dataCacheConfig" : { object ( DataCacheConfig ) } , "replicationLagMaxSeconds" : integer , "enableGoogleMlIntegration" : boolean , "enableDataplexIntegration" : boolean , "retainBackupsOnDelete" : boolean , "dataDiskProvisionedIops" : string , "dataDiskProvisionedThroughput" : string , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "finalBackupConfig" : { object ( FinalBackupConfig ) } , "readPoolAutoScaleConfig" : { object ( ReadPoolAutoScaleConfig ) } , "autoUpgradeEnabled" : boolean , "dataApiAccess" : enum ( DataApiAccess ) } Fields settingsVersion string ( Int64Value format) The version of instance settings.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- The data disk size minimum is 10GB. activeDirectoryConfig object ( SqlActiveDirectoryConfig ) Active Directory configuration, relevant only for Cloud SQL for SQL Server. collation string The name of server Instance collation. denyMaintenancePeriods[] object ( DenyMaintenancePeriod ) Deny maintenance periods insightsConfig object ( InsightsConfig ) Insights configuration, for now relevant only for Postgres. passwordValidationPolicy object ( PasswordValidationPolicy ) The local user password validation policy of the instance. sqlServerAuditConfig object ( SqlServerAuditConfig ) SQL Server specific audit configuration. edition enum ( Edition ) Optional.
- The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01 time string Time in UTC when the "deny maintenance period" starts on startDate and ends on endDate.

### Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta4.projects.instances Methods getDiskShrinkConfig GET /sql/v1beta4/projects/{project}/instances/{instance}/getDiskShrinkConfig Get Disk Shrink Config for a given instance. getLatestRecoveryTime GET /sql/v1beta4/projects/{project}/instances/{instance}/getLatestRecoveryTime Get Latest Recovery Time for a given instance. performDiskShrink POST /sql/v1beta4/projects/{project}/instances/{instance}/performDiskShrink Perform Disk Shrink on primary instance. rescheduleMaintenance POST /sql/v1beta4/projects/{project}/instances/{instance}/rescheduleMaintenance Reschedules the maintenance on the given instance. startExternalSync POST /sql/v1beta4/projects/{project}/instances/{instance}/startExternalSync Start External primary instance migration. verifyExternalSyncSettings POST /sql/v1beta4/projects/{project}/instances/{instance}/verifyExternalSyncSettings Verify External primary instance external sync settings.
- REST Resource: v1.projects.instances Methods getDiskShrinkConfig GET /v1/projects/{project}/instances/{instance}/getDiskShrinkConfig Get Disk Shrink Config for a given instance. getLatestRecoveryTime GET /v1/projects/{project}/instances/{instance}/getLatestRecoveryTime Get Latest Recovery Time for a given instance. performDiskShrink POST /v1/projects/{project}/instances/{instance}/performDiskShrink Perform Disk Shrink on primary instance. rescheduleMaintenance POST /v1/projects/{project}/instances/{instance}/rescheduleMaintenance Reschedules the maintenance on the given instance. startExternalSync POST /v1/projects/{project}/instances/{instance}/startExternalSync Start External primary instance migration. verifyExternalSyncSettings POST /v1/projects/{project}/instances/{instance}/verifyExternalSyncSettings Verify External primary instance external sync settings.
- REST Resource: v1beta4.backupRuns REST Resource: v1beta4.backups REST Resource: v1beta4.connect REST Resource: v1beta4.databases REST Resource: v1beta4.flags REST Resource: v1beta4.instances REST Resource: v1beta4.operations REST Resource: v1beta4.projects.instances REST Resource: v1beta4.sslCerts REST Resource: v1beta4.tiers REST Resource: v1beta4.users REST Resource: v1.Backups REST Resource: v1.backupRuns REST Resource: v1.connect REST Resource: v1.databases REST Resource: v1.flags REST Resource: v1.instances REST Resource: v1.operations REST Resource: v1.projects.instances REST Resource: v1.sslCerts REST Resource: v1.tiers REST Resource: v1.users Service: sqladmin.googleapis.com Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1beta4.users Methods delete DELETE /sql/v1beta4/projects/{project}/instances/{instance}/users Deletes a user from a Cloud SQL instance. get GET /sql/v1beta4/projects/{project}/instances/{instance}/users/{name} Retrieves a resource containing information about a user. insert POST /sql/v1beta4/projects/{project}/instances/{instance}/users Creates a new user in a Cloud SQL instance. list GET /sql/v1beta4/projects/{project}/instances/{instance}/users Lists users in the specified Cloud SQL instance. update PUT /sql/v1beta4/projects/{project}/instances/{instance}/users Updates an existing user in a Cloud SQL instance.


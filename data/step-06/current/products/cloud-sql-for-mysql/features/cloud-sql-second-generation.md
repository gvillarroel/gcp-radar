---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:52.004Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Second Generation"
feature_slug: "cloud-sql-second-generation"
latest_feature_date: "2016-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/availability"
  - "https://docs.cloud.google.com/sql/docs/mysql/high-availability"
keywords:
  - "sql"
  - "second"
  - "generation"
  - "mysql"
  - "reached"
  - "availability"
---

# Cloud SQL Second Generation

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Second Generation for MySQL reached general availability.

## Extended Definition

Cloud SQL Second Generation for MySQL reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- JSON representation { "settingsVersion" : string , "authorizedGaeApplications" : [ string ] , "tier" : string , "kind" : string , "userLabels" : { string : string , ... } , "availabilityType" : enum ( SqlAvailabilityType ) , "pricingPlan" : enum ( SqlPricingPlan ) , "replicationType" : enum ( SqlReplicationType ) , "storageAutoResizeLimit" : string , "activationPolicy" : enum ( SqlActivationPolicy ) , "ipConfiguration" : { object ( IpConfiguration ) } , "storageAutoResize" : boolean , "locationPreference" : { object ( LocationPreference ) } , "databaseFlags" : [ { object ( DatabaseFlags ) } ] , "dataDiskType" : enum ( SqlDataDiskType ) , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "backupConfiguration" : { object ( BackupConfiguration ) } , "databaseReplicationEnabled" : boolean , "crashSafeReplicationEnabled" : boolean , "dataDiskSizeGb" : string , "activeDirectoryConfig" : { object ( SqlActiveDirectoryConfig ) } , "collation" : string , "denyMaintenancePeriods" : [ { object ( DenyMaintenancePeriod ) } ] , "insightsConfig" : { object ( InsightsConfig ) } , "passwordValidationPolicy" : { object ( PasswordValidationPolicy ) } , "sqlServerAuditConfig" : { object ( SqlServerAuditConfig ) } , "edition" : enum ( Edition ) , "connectorEnforcement" : enum ( ConnectorEnforcement ) , "deletionProtectionEnabled" : boolean , "timeZone" : string , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "dataCacheConfig" : { object ( DataCacheConfig ) } , "replicationLagMaxSeconds" : integer , "enableGoogleMlIntegration" : boolean , "enableDataplexIntegration" : boolean , "retainBackupsOnDelete" : boolean , "dataDiskProvisionedIops" : string , "dataDiskProvisionedThroughput" : string , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "finalBackupConfig" : { object ( FinalBackupConfig ) } , "readPoolAutoScaleConfig" : { object ( ReadPoolAutoScaleConfig ) } , "autoUpgradeEnabled" : boolean , "dataApiAccess" : enum ( DataApiAccess ) } Fields settingsVersion string ( Int64Value format) The version of instance settings.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- MySQL's default is 60 seconds. masterHeartbeatPeriod string ( Int64Value format) Interval in milliseconds between replication heartbeats. caCertificate string PEM representation of the trusted CA's x509 certificate. clientCertificate string PEM representation of the replica's x509 certificate. clientKey string PEM representation of the replica's private key.

### About high availability \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback About high availability Stay organized with collections Save and categorize content based on your preferences.
- Legacy MySQL high availability option The legacy process for adding high availability to MySQL instances uses a failover replica.
- MySQL PostgreSQL SQL Server This page is an overview of the high availability (HA) configuration for Cloud SQL instances.
- Starting on May 1, 2025, Cloud SQL will begin updating any instances that use the legacy high availability configuration to use the current regional persistent disk-based high availability configuration automatically.

### Availability in Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/availability](https://docs.cloud.google.com/sql/docs/availability)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Maintenance , which includes the following operations with sub-second downtime: Automatic maintenance that Cloud SQL performs every quarter Self-service maintenance that you can initiate at any time Maintenance simulation that you can initiate to test the sub-second downtime behavior Minor version upgrade Perform a minor version upgrade on a MySQL 8.0 instance with sub-second downtime For PostgreSQL instances, minor version upgrades are part of automatic maintenance and happen with sub-second downtime Edition upgrade Perform an in-place upgrade to Cloud SQL Enterprise Plus edition Enable data cache You can enable or disable data cache as frequently as needed Instance scaling Scale-up: Increase the compute size (vCPU, memory) of your Cloud SQL instance as frequently as needed Scale-down: Reduce the compute size (vCPU, memory) of your Cloud SQL instance infrequently Note: If you scale down your instance more than once during a three-hour period, then only the first scale down event benefits from near-zero downtime.
- For instances configured with regional availability, if the instance encounters a failure, then Cloud SQL automatically brings up the instance in the secondary zone with the same IP address and no data loss so that applications can resume operations on the database.
- Unplanned events and zonal outage For applications that require high availability, we recommend configuring the instance for regional availability, also referred to as the high availability (HA) configuration in Cloud SQL.
- What's next Learn about high availability (HA) Enable or disable high availability (HA) Read about disaster recovery (DR) View all the Google Cloud services available in locations worldwide .


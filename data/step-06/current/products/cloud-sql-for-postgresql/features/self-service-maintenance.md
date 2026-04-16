---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.802Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Self-service maintenance"
feature_slug: "self-service-maintenance"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
keywords:
  - "normal"
  - "outside"
  - "apply"
  - "self"
  - "maintenance"
  - "update"
  - "lets"
---

# Self-service maintenance

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Self-service maintenance lets you apply a maintenance update outside the normal scheduled maintenance flow.

## Extended Definition

Self-service maintenance lets you apply a maintenance update outside the normal scheduled maintenance flow.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- AUTOMATIC ROTATION DURING MAINTENANCE : With this option, automatic server certificate rotation is enabled during Cloud SQL scheduled maintenance or self-service maintenance updates.
- Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 Create the instance This example creates an instance.
- You only need to do this once per directory. terraform init Optionally, to use the latest Google provider version, include the -upgrade option: terraform init -upgrade Apply the changes Review the configuration and verify that the resources that Terraform is going to create or update match your expectations: terraform plan Make corrections to the configuration as necessary.
- Maintenance timing --maintenance-release-channel Your preferred timing for instance updates, relative to other instances in the same project.

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, the server certificate will be automatically rotated during Cloud SQL scheduled maintenance or self-service maintenance updates up to six months before it expires.
- AUTOMATIC ROTATION DURING MAINTENANCE Automatic server certificate rotation during Cloud SQL scheduled maintenance or self-service maintenance updates.
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "replicationCluster" : { object ( ReplicationCluster ) } , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- When enabled, the server certificate will be automatically rotated during Cloud SQL scheduled maintenance or self-service maintenance updates up to six months before it expires.
- AUTOMATIC ROTATION DURING MAINTENANCE Automatic server certificate rotation during Cloud SQL scheduled maintenance or self-service maintenance updates.
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "replicationCluster" : { object ( ReplicationCluster ) } , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.


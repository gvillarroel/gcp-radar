---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.983Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Committed use discounts"
feature_slug: "committed-use-discounts"
latest_feature_date: "2020-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/cud"
  - "https://docs.cloud.google.com/sql/docs/mysql/pricing"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
keywords:
  - "committed"
  - "use"
  - "discounts"
  - "sql"
  - "offers"
  - "year"
  - "resource"
  - "commitments"
---

# Committed use discounts

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL offers committed use discounts for 1-year and 3-year resource commitments in a region.

## Extended Definition

Cloud SQL offers committed use discounts for 1-year and 3-year resource commitments in a region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/cud](https://docs.cloud.google.com/sql/docs/mysql/cud)
- [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)

## Supporting Pages

### Committed use discounts \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/cud](https://docs.cloud.google.com/sql/docs/mysql/cud)
- Source ID: `site-docs-reference-3`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Committed use discounts (CUDs) for Cloud SQL provide deeply discounted prices in exchange for your commitment to continuously use database instances in a particular region for a one- or three-year term.
- Home Documentation Databases Cloud SQL MySQL Resources Send feedback Committed use discounts Stay organized with collections Save and categorize content based on your preferences.
- To purchase or manage Cloud SQL for MySQL committed use discounts for your Cloud Billing account, follow the instructions at Purchasing spend-based commitments .
- Learn how to purchase spend-based commitments in Committed use discounts .

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL also offers committed use discounts (CUDs) that provide deeply discounted prices in exchange for your commitment to continuously use database instances in a particular region for a one- or three-year term.
- Cloud SQL also offers committed use discounts (CUDs) that provide deeply discounted prices in exchange for your commitment to continuously use database instances in a particular region for a one- or three-year term.
- For more information about these commitments, see Committed use discounts .
- For more information about these commitments, see Committed use discounts .

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- JSON representation { "ipv4Enabled" : boolean , "privateNetwork" : string , "requireSsl" : boolean , "authorizedNetworks" : [ { object ( AclEntry ) } ] , "allocatedIpRange" : string , "enablePrivatePathForGoogleCloudServices" : boolean , "sslMode" : enum ( SslMode ) , "customSubjectAlternativeNames" : [ string ] , "pscConfig" : { object ( PscConfig ) } , "serverCaMode" : enum ( CaMode ) , "serverCaPool" : string , "serverCertificateRotationMode" : enum ( ServerCertificateRotationMode ) } Fields ipv4Enabled boolean Whether the instance is assigned a public IP address or not. privateNetwork string The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP.
- This property is read-only; use the tier property in the settings object to determine the database type. selfLink string The URI of this resource. suspensionReason[] enum ( SqlSuspensionReason ) If the instance state is SUSPENDED, the reason for the suspension. connectionName string Connection name of the Cloud SQL instance used in connection strings. name string Name of the Cloud SQL instance.


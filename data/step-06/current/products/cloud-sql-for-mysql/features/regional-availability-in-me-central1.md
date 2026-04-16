---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.942Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Regional availability in me-central1"
feature_slug: "regional-availability-in-me-central1"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/high-availability"
keywords:
  - "regional"
  - "availability"
  - "me"
  - "central1"
  - "sql"
  - "mysql"
  - "became"
  - "available"
---

# Regional availability in me-central1

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for MySQL became available in the me-central1 region.

## Extended Definition

Cloud SQL for MySQL became available in the me-central1 region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- REGIONAL : The instance can serve data from more than one zone in a region (it is highly available)./ For more information, see Overview of the High Availability Configuration . pricingPlan enum ( SqlPricingPlan ) The pricing plan for this instance.
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- The name doesn't include the project ID. failoverReplica.available boolean The availability status of the failover replica.

### About high availability \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/high-availability](https://docs.cloud.google.com/sql/docs/mysql/high-availability)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Starting on May 1, 2025, Cloud SQL will begin updating any instances that use the legacy high availability configuration to use the current regional persistent disk-based high availability configuration automatically.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback About high availability Stay organized with collections Save and categorize content based on your preferences.
- Legacy MySQL high availability option The legacy process for adding high availability to MySQL instances uses a failover replica.
- MySQL PostgreSQL SQL Server This page is an overview of the high availability (HA) configuration for Cloud SQL instances.

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-docs-reference-3`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Terraform To create an instance with Private Service Connect enabled for the instance, use the google sql database instance Terraform resource . resource "google sql database instance" "default" { name = "mysql-instance" region = "us-central1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" availability type = "REGIONAL" backup configuration { enabled = true binary log enabled = true } ip configuration { psc config { psc enabled = true allowed consumer projects = [] # Add consumer project IDs here. } ipv4 enabled = false } } } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0", "settings": { "authorizedGaeApplications": [], "tier": "db-custom-2-7680", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "pscConfig": { "allowedConsumerProjects": [ " ALLOWED PROJECTS " ], "pscAutoConnections": { consumerNetwork:"projects/ PARENT PROJECT /global/networks/ CONSUMER NETWORK ", consumerNetworkStatus:" CONSUMER NETWORK STATUS ", consumerProject:" CONSUMER PROJECT ", ipAddress:" IP ADDRESS ", status:" STATUS " }, "pscEnabled": true }, "ipv4Enabled": false }, } The following fields exist for instances that have Private Service Connect enabled for them: allowedConsumerProjects : a list of the allowed projects for the instance.
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE NAME ", "project": PROJECT ID ", "region": " REGION NAME ", "databaseVersion": "MYSQL 8 0", "kind": "sql#instance", "settings": { "availabilityType": " AVAILABILITY TYPE ", "backupConfiguration": { "binaryLogEnabled": true, "enabled": true, "kind": "sql#backupConfiguration", "startTime": "00:00" }, "ipConfiguration": { "ipv4Enabled": false, "pscConfig": { "allowedConsumerProjects": [ " ALLOWED PROJECTS " ], "pscAutoConnections": [ { "consumerProject":" CONSUMER PROJECT ", "consumerNetwork":"projects/ PARENT PROJECT /global/networks/ CONSUMER NETWORK " } ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE NAME ", "project": PROJECT ID ", "region": " REGION NAME ", "databaseVersion": "MYSQL 8 0", "kind": "sql#instance", "settings": { "availabilityType": " AVAILABILITY TYPE ", "backupConfiguration": { "binaryLogEnabled": true, "enabled": true, "kind": "sql#backupConfiguration", "startTime": "00:00" }, "ipConfiguration": { "ipv4Enabled": false, "pscConfig": { "allowedConsumerProjects": [ " ALLOWED PROJECTS " ], "pscEnabled": true } }, "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "tier": " MACHINE TYPE " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .


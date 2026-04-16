---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:52.004Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "GTID support"
feature_slug: "gtid-support"
latest_feature_date: "2016-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics"
keywords:
  - "gtid"
  - "sql"
  - "second"
  - "generation"
  - "supports"
  - "mysql"
  - "global"
  - "transaction"
---

# GTID support

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Second Generation supports MySQL Global Transaction Identifiers (GTID).

## Extended Definition

Cloud SQL Second Generation supports MySQL Global Transaction Identifiers (GTID).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "replicationCluster" : { object ( ReplicationCluster ) } , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- JSON representation { "startTime" : string , "enabled" : boolean , "kind" : string , "binaryLogEnabled" : boolean , "replicationLogArchivingEnabled" : boolean , "location" : string , "pointInTimeRecoveryEnabled" : boolean , "backupRetentionSettings" : { object ( BackupRetentionSettings ) } , "transactionLogRetentionDays" : integer , "transactionalLogStorageState" : enum ( TransactionalLogStorageState ) , "backupTier" : enum ( BackupTier ) } Fields startTime string Start time for the daily backup configuration in UTC timezone in the 24 hour format - HH:MM . enabled boolean Whether this configuration is enabled. kind string This is always sql#backupConfiguration . binaryLogEnabled boolean (MySQL only) Whether binary log is enabled.
- Target metrics for read pool auto scaling. enabled boolean Indicates whether read pool auto scaling is enabled. minNodeCount integer Minimum number of read pool nodes to be maintained. maxNodeCount integer Maximum number of read pool nodes to be maintained. disableScaleIn boolean Indicates whether read pool auto scaling supports scale in operations (removing nodes). scaleInCooldownSeconds integer The cooldown period for scale-in operations. scaleOutCooldownSeconds integer The cooldown period for scale-out operations.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Ensure that the dump file just created contains the SET @@GLOBAL.GTID PURGED='...' line.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "compute#forwardingRule", "id": " ENDPOINT ID ", "creationTimestamp": "2024-05-09T12:03:21.383-07:00", "name": " ENDPOINT NAME ", "region": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME ", "IPAddress": " IP ADDRESS ", "target": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /serviceAttachments/ SERVICE ATTACHMENT NAME ", "selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME ", "network": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/default", "serviceDirectoryRegistrations": [ { "namespace": "goog-psc-default" } ], "networkTier": "PREMIUM", "labelFingerprint": " LABEL FINGERPRINT ID ", "fingerprint": " FINGERPRINT ID ", "pscConnectionId": " CONNECTION ID ", "pscConnectionStatus": "ACCEPTED", "allowPscGlobalAccess": true } Verify that the status of the endpoint is ACCEPTED .
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Slow performance after restarting MySQL.
- On the primary instance that's displaying the error message, set the parallel replication flags: Modify the binlog transaction dependency tracking and transaction write set extraction flags: binlog transaction dependency tracking=COMMIT ORDER transaction write set extraction=OFF Add the slave pending jobs size max flag: slave pending jobs size max=33554432 Modify the transaction write set extraction flag: transaction write set extraction=XXHASH64 Modify the binlog transaction dependency tracking flag: binlog transaction dependency tracking=WRITESET Replica creation fails with timeout.

### Cloud SQL metrics \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. operation type : Kind of operation handler type, one of [delete, read first, read key, read last, read next, read prev, read rnd, read rnd next, update, write]. database/mysql/innodb/active transactions GA (project) InnoDB Active Transactions GAUGE , INT64 , 1 cloudsql database Number of active Transaction details(trx which are in progress), Values in bracket are meant for innodb transaction state (Total/running/lock wait/rolling back/committing).
- After sampling, data is not visible for up to 165 seconds. state : Values in bracket are meant for innodb transaction state, one of [Total, running, lock wait, rolling back, committing]. database/mysql/innodb/active trx longest time GA (project) InnoDB Active TRX Longest Time GAUGE , INT64 , 1 cloudsql database Largest transaction time from currently active innodb transactions.
- After sampling, data is not visible for up to 165 seconds. event type : Kind of Mysql event, one of [innodb hash0hash,innodb memory,innodb row0sel,sql table,sql thd main,sql dd,sql string,mysys iocache] database/mysql/memory/global GA (project) Global memory allocated GAUGE , DOUBLE , By cloudsql database The total allocated memory, reported by performance schema.
- After sampling, data is not visible for up to 165 seconds. operation type : Operation type. database/mysql/innodb/buffer flush sync waits count GA (project) Innodb sync flushing waits DELTA , INT64 , 1 cloudsql database Number of times InnoDB has performed synchronous buffer flush operations and blocking the user transactions since last sample.


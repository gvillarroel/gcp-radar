---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.762Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL 17 support"
feature_slug: "postgresql-17-support"
latest_feature_date: "2024-10-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
keywords:
  - "generally"
  - "instances"
  - "supports"
---

# PostgreSQL 17 support

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for PostgreSQL now generally supports PostgreSQL 17 for new instances.

## Extended Definition

Cloud SQL for PostgreSQL now generally supports PostgreSQL 17 for new instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)

## Supporting Pages

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "replicationCluster" : { object ( ReplicationCluster ) } , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance. deletionProtectionEnabled boolean Configuration to protect against accidental instance deletion. timeZone string Server timezone, relevant only for Cloud SQL for SQL Server. advancedMachineFeatures object ( AdvancedMachineFeatures ) Specifies advanced machine configuration for the instances relevant only for SQL Server. dataCacheConfig object ( DataCacheConfig ) Configuration for data cache. replicationLagMaxSeconds integer Optional.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the Instances resource supports methods such as get, insert, and list.
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- You are also using the Cloud SQL Admin API, indirectly, when you use any of the following ways of administering instances: gcloud CLI , which contains a command-line interface you can use to work with your instances.
- Before adding VPC Service Controls, it is recommended that you enable private IP and disable public IP on the Cloud SQL instances that you plan to add to the service perimeter.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- Source ID: `site-api-reference`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, the Instances resource supports methods such as get, insert, and list.
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- You are also using the Cloud SQL Admin API, indirectly, when you use any of the following ways of administering instances: gcloud CLI , which contains a command-line interface you can use to work with your instances.
- Before adding VPC Service Controls, it is recommended that you enable private IP and disable public IP on the Cloud SQL instances that you plan to add to the service perimeter.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.960Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Maintenance changelogs"
feature_slug: "maintenance-changelogs"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/introduction"
keywords:
  - "maintenance"
  - "changelogs"
  - "sql"
  - "provides"
  - "describe"
  - "updates"
  - "versions"
  - "including"
---

# Maintenance changelogs

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL provides maintenance changelogs that describe updates in new maintenance versions, including minor upgrades and security patches.

## Extended Definition

Cloud SQL provides maintenance changelogs that describe updates in new maintenance versions, including minor upgrades and security patches.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/introduction](https://docs.cloud.google.com/sql/docs/introduction)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- AUTOMATIC ROTATION DURING MAINTENANCE : With this option, automatic server certificate rotation is enabled during Cloud SQL scheduled maintenance or self-service maintenance updates.
- Maintenance timing --maintenance-release-channel Your preferred timing for instance updates, relative to other instances in the same project.
- This flag isn't available for MySQL 8.0.34 and earlier versions. gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --enable-auto-upgrade-minor-version For detailed information, see the documentation on creating an instance by using gcloud .
- For information about instance settings, including valid values for region, see Instance settings Don't include sensitive or personally identifiable information in your instance ID; it is externally visible.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "replicationCluster" : { object ( ReplicationCluster ) } , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . availableMaintenanceVersions[] string Output only. instances.list all maintenance versions applicable on the instance maintenanceVersion string The current software version on the instance. upgradableDatabaseVersions[] object ( AvailableDatabaseVersion ) Output only.
- When enabled, the server certificate will be automatically rotated during Cloud SQL scheduled maintenance or self-service maintenance updates up to six months before it expires.
- It provides a slight performance gain, but if an outage occurs while this option is set to asynchronous, you can lose up to a few seconds of updates to your data.

### Cloud SQL overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/introduction](https://docs.cloud.google.com/sql/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can focus on your data and let Cloud SQL handle the following operations: Backups High availability and failover Network connectivity Export and import Maintenance and updates Monitoring Logging What is a Cloud SQL instance?
- In general, Cloud SQL system updates are divided into three categories: hardware updates, online updates, and maintenance.
- Maintenance updates apply upgrades to the operating system and the database program.
- There are many database administration tools you can choose from, depending on your database engine, including the following: phpMyAdmin for MySQL MySQL Workbench for MySQL Toad Edge for MySQL and PostgreSQL pgAdmin.org for PostgreSQL SQL Server Management Studio for SQL Server Visual Studio Code for SQL Server Cloud SQL pricing Cloud SQL pricing varies with your configuration settings, and depends on: How much storage you provision, in GiB per month How many CPUs you select for your Cloud SQL instance How much memory you select for your Cloud SQL instance Where you choose to host your data How much network traffic leaves your instance How many IP addresses you assign and use For more information, see the pricing page or the pricing calculator .


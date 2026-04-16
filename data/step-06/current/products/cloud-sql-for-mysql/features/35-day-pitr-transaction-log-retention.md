---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.932Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "35-day PITR transaction log retention"
feature_slug: "35-day-pitr-transaction-log-retention"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr"
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
keywords:
  - "35"
  - "day"
  - "pitr"
  - "transaction"
  - "log"
  - "retention"
  - "sql"
  - "enterprise"
---

# 35-day PITR transaction log retention

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Enterprise Plus instances support retaining transaction logs for point-in-time recovery for up to 35 days.

## Extended Definition

Cloud SQL Enterprise Plus instances support retaining transaction logs for point-in-time recovery for up to 35 days.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)

## Supporting Pages

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- Source ID: `site-docs-reference-required-5`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform To enable PITR, use a Terraform resource . resource "google sql database instance" "default" { name = "mysql-instance-pitr" region = "asia-northeast1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" backup configuration { enabled = true binary log enabled = true start time = "20:55" transaction log retention days = "3" } } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- You can configure PITR for any existing instance by doing the following: Enable PITR Disable PITR Set transaction log retention Check storage location of transaction logs used in PITR Switch transaction log storage to Cloud storage Before you begin Before you begin, review the following: If you enable PITR on an existing instance, then the instance restarts.
- After the switch, since the binary logs that are used to perform PITR are now stored in Cloud Storage, ensure that the values of the flags reflect the retention of transaction logs on disk that you expect.
- Cloud SQL only retains logs on disk for the minimum value of one of the following: the transactionLogRetentionDays PITR configuration setting before the switch.

### "Restore an instance overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- Source ID: `site-docs-reference-3`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For PITR binary logs that are stored on disk , that are being switched to Cloud Storage, or that are already switched to Cloud Storage, Cloud SQL retains the logs for the minimum value set for one of the following configurations: The transactionLogRetentionDays backup configuration setting The expire logs days or the binlog expire logs seconds flag Cloud SQL doesn't set any values for these flags if the binary logs are stored on disk, are being switched to Cloud Storage, or have already been switched to Cloud Storage.
- If you upgrade a Cloud SQL Enterprise edition instance after August 11, 2023 that stores transaction logs for PITR on disk to Cloud SQL Enterprise Plus edition, then the upgrade process switches the storage location of the transaction logs used for PITR to Cloud Storage for you.
- For instances that store transaction logs used for PITR on disk, Cloud SQL purges data from the disk daily to meet the transactionLogRetentionDays PITR setting, as described in Automatic backup and transaction log retention .
- If a value for this parameter isn't set, then the default transaction log retention period is 14 days for Cloud SQL Enterprise Plus edition instances and 7 days for Cloud SQL Enterprise edition instances.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- JSON representation { "startTime" : string , "enabled" : boolean , "kind" : string , "binaryLogEnabled" : boolean , "replicationLogArchivingEnabled" : boolean , "location" : string , "pointInTimeRecoveryEnabled" : boolean , "backupRetentionSettings" : { object ( BackupRetentionSettings ) } , "transactionLogRetentionDays" : integer , "transactionalLogStorageState" : enum ( TransactionalLogStorageState ) , "backupTier" : enum ( BackupTier ) } Fields startTime string Start time for the daily backup configuration in UTC timezone in the 24 hour format - HH:MM . enabled boolean Whether this configuration is enabled. kind string This is always sql#backupConfiguration . binaryLogEnabled boolean (MySQL only) Whether binary log is enabled.
- If backup configuration is disabled, binarylog must be disabled as well. replicationLogArchivingEnabled boolean Reserved for future use. location string Location of the backup pointInTimeRecoveryEnabled boolean Whether point in time recovery is enabled. backupRetentionSettings object ( BackupRetentionSettings ) Backup retention settings. transactionLogRetentionDays integer The number of days of transaction logs we retain for point in time restore, from 1-7. transactionalLogStorageState enum ( TransactionalLogStorageState ) Output only.
- This value contains the storage location of transactional logs used to perform point-in-time recovery (PITR) for the database. backupTier enum ( BackupTier ) Output only.


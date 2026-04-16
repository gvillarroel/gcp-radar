---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.930Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "In-place edition upgrade"
feature_slug: "in-place-edition-upgrade"
latest_feature_date: "2023-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
keywords:
  - "place"
  - "edition"
  - "upgrade"
  - "sql"
  - "supports"
  - "switching"
  - "between"
  - "enterprise"
---

# In-place edition upgrade

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports in-place switching between Enterprise and Enterprise Plus editions with minimal disruption.

## Extended Definition

Cloud SQL supports in-place switching between Enterprise and Enterprise Plus editions with minimal disruption.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)

## Supporting Pages

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for MySQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/configure-pitr)
- Source ID: `site-docs-reference-required-5`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Upgrade an instance to Cloud SQL Enterprise Plus edition by using in-place upgrade .
- If you upgrade a Cloud SQL Enterprise edition instance to Cloud SQL Enterprise Plus edition, then the upgrade process switches the log storage location to Cloud Storage automatically.
- For Cloud SQL Enterprise Plus edition, the valid range is between 1 and 35 days, with a default of 14 days.
- For Cloud SQL Enterprise Plus edition, the valid range is between 1 and 35 days, with a default of 14 days.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud SQL Enterprise edition instances: gcloud sql instances create INSTANCE NAME \ --cpu = NUMBER CPUS \ --memory = MEMORY SIZE \ --region = REGION Or, alternatively, you can use the --tier flag if you choose db-f1-micro or db-g1-small as the machine type: gcloud sql instances create INSTANCE NAME \ --tier = API TIER STRING \ --region = REGION There are restrictions on the values for vCPUs and memory size: vCPUs must be either 1 or an even number between 2 and 96.
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you selected doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead. .
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead..
- If you specify MySQL 8.4 for the database version, but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "settingsVersion" : string , "authorizedGaeApplications" : [ string ] , "tier" : string , "kind" : string , "userLabels" : { string : string , ... } , "availabilityType" : enum ( SqlAvailabilityType ) , "pricingPlan" : enum ( SqlPricingPlan ) , "replicationType" : enum ( SqlReplicationType ) , "storageAutoResizeLimit" : string , "activationPolicy" : enum ( SqlActivationPolicy ) , "ipConfiguration" : { object ( IpConfiguration ) } , "storageAutoResize" : boolean , "locationPreference" : { object ( LocationPreference ) } , "databaseFlags" : [ { object ( DatabaseFlags ) } ] , "dataDiskType" : enum ( SqlDataDiskType ) , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "backupConfiguration" : { object ( BackupConfiguration ) } , "databaseReplicationEnabled" : boolean , "crashSafeReplicationEnabled" : boolean , "dataDiskSizeGb" : string , "activeDirectoryConfig" : { object ( SqlActiveDirectoryConfig ) } , "collation" : string , "denyMaintenancePeriods" : [ { object ( DenyMaintenancePeriod ) } ] , "insightsConfig" : { object ( InsightsConfig ) } , "passwordValidationPolicy" : { object ( PasswordValidationPolicy ) } , "sqlServerAuditConfig" : { object ( SqlServerAuditConfig ) } , "edition" : enum ( Edition ) , "connectorEnforcement" : enum ( ConnectorEnforcement ) , "deletionProtectionEnabled" : boolean , "timeZone" : string , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "dataCacheConfig" : { object ( DataCacheConfig ) } , "replicationLagMaxSeconds" : integer , "enableGoogleMlIntegration" : boolean , "enableDataplexIntegration" : boolean , "retainBackupsOnDelete" : boolean , "dataDiskProvisionedIops" : string , "dataDiskProvisionedThroughput" : string , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "finalBackupConfig" : { object ( FinalBackupConfig ) } , "readPoolAutoScaleConfig" : { object ( ReadPoolAutoScaleConfig ) } , "autoUpgradeEnabled" : boolean , "dataApiAccess" : enum ( DataApiAccess ) } Fields settingsVersion string ( Int64Value format) The version of instance settings.
- Determines whether an in-place major version upgrade of replicas happens when an in-place major version upgrade of a primary instance is initiated. nodeCount integer The number of read pool nodes in a read pool.
- A DR replica is an optional configuration for Enterprise Plus edition instances.
- Edition The edition of the instance, can be ENTERPRISE or ENTERPRISE PLUS.


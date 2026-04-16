---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.980Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Deny maintenance periods"
feature_slug: "deny-maintenance-periods"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
keywords:
  - "deny"
  - "maintenance"
  - "periods"
  - "sql"
  - "lets"
  - "you"
  - "define"
  - "block"
---

# Deny maintenance periods

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you define deny maintenance periods to block automatic maintenance during specified time windows.

## Extended Definition

Cloud SQL lets you define deny maintenance periods to block automatic maintenance during specified time windows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "settingsVersion" : string , "authorizedGaeApplications" : [ string ] , "tier" : string , "kind" : string , "userLabels" : { string : string , ... } , "availabilityType" : enum ( SqlAvailabilityType ) , "pricingPlan" : enum ( SqlPricingPlan ) , "replicationType" : enum ( SqlReplicationType ) , "storageAutoResizeLimit" : string , "activationPolicy" : enum ( SqlActivationPolicy ) , "ipConfiguration" : { object ( IpConfiguration ) } , "storageAutoResize" : boolean , "locationPreference" : { object ( LocationPreference ) } , "databaseFlags" : [ { object ( DatabaseFlags ) } ] , "dataDiskType" : enum ( SqlDataDiskType ) , "maintenanceWindow" : { object ( MaintenanceWindow ) } , "backupConfiguration" : { object ( BackupConfiguration ) } , "databaseReplicationEnabled" : boolean , "crashSafeReplicationEnabled" : boolean , "dataDiskSizeGb" : string , "activeDirectoryConfig" : { object ( SqlActiveDirectoryConfig ) } , "collation" : string , "denyMaintenancePeriods" : [ { object ( DenyMaintenancePeriod ) } ] , "insightsConfig" : { object ( InsightsConfig ) } , "passwordValidationPolicy" : { object ( PasswordValidationPolicy ) } , "sqlServerAuditConfig" : { object ( SqlServerAuditConfig ) } , "edition" : enum ( Edition ) , "connectorEnforcement" : enum ( ConnectorEnforcement ) , "deletionProtectionEnabled" : boolean , "timeZone" : string , "advancedMachineFeatures" : { object ( AdvancedMachineFeatures ) } , "dataCacheConfig" : { object ( DataCacheConfig ) } , "replicationLagMaxSeconds" : integer , "enableGoogleMlIntegration" : boolean , "enableDataplexIntegration" : boolean , "retainBackupsOnDelete" : boolean , "dataDiskProvisionedIops" : string , "dataDiskProvisionedThroughput" : string , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "finalBackupConfig" : { object ( FinalBackupConfig ) } , "readPoolAutoScaleConfig" : { object ( ReadPoolAutoScaleConfig ) } , "autoUpgradeEnabled" : boolean , "dataApiAccess" : enum ( DataApiAccess ) } Fields settingsVersion string ( Int64Value format) The version of instance settings.
- The data disk size minimum is 10GB. activeDirectoryConfig object ( SqlActiveDirectoryConfig ) Active Directory configuration, relevant only for Cloud SQL for SQL Server. collation string The name of server Instance collation. denyMaintenancePeriods[] object ( DenyMaintenancePeriod ) Deny maintenance periods insightsConfig object ( InsightsConfig ) Insights configuration, for now relevant only for Postgres. passwordValidationPolicy object ( PasswordValidationPolicy ) The local user password validation policy of the instance. sqlServerAuditConfig object ( SqlServerAuditConfig ) SQL Server specific audit configuration. edition enum ( Edition ) Optional.
- DenyMaintenancePeriod Deny maintenance Periods.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- The CSV format lets you define which elements of the database to include in the export.
- The following command lets you check the redo log size: SHOW VARIABLES LIKE 'innodb log file%'; You can check the size of general log , if it is enabled, with the help of this command: SELECT ROUND(SUM(LENGTH(argument)/POW(1024,2)),2) AS GB from mysql.general log; If needed, you can truncate your log tables by using the API.
- Export offloading has several advantages, including increased performance on the source instance and the unblocking of administrative operations while the export is running.
- If you leave the field empty, then Cloud SQL takes the final backup configuration set in instance settings to take a final backup and define its retention.

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-5`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the Cloud SQL remote MCP server: Make MCP tool calls: mcp.tools.call Clone a Cloud SQL instance: cloudsql.instances.clone Create a Cloud SQL instance: cloudsql.instances.create Create a Cloud SQL user: cloudsql.users.create Execute SQL queries on a Cloud SQL instance: cloudsql.instances.executeSql cloudsql.instances.login Get a Cloud SQL instance: cloudsql.instances.get Get a Cloud SQL instance operation: cloudsql.instances.get Import data to a Cloud SQL instance: cloudsql.instances.import List Cloud SQL instances in a project: cloudsql.instances.list List Cloud SQL users: cloudsql.users.list Update a Cloud SQL instance: cloudsql.instances.update Update a Cloud SQL user: cloudsql.users.update You might also be able to get these permissions with custom roles or other predefined roles .
- See the following example command: gcloud model-armor floorsettings update \ --full-uri = 'projects/ PROJECT ID /locations/global/floorSetting' \ --enable-floor-setting-enforcement = TRUE \ --add-integrated-services = GOOGLE MCP SERVER \ --google-mcp-server-enforcement-type = INSPECT AND BLOCK \ --enable-google-mcp-server-cloud-logging \ --malicious-uri-filter-settings-enforcement = ENABLED \ --add-rai-settings-filters = '[{"confidenceLevel": "MEDIUM AND ABOVE", "filterType": "DANGEROUS"}]' Replace PROJECT ID with your Google Cloud project ID.
- For example, you can deny or allow access based on: The principal Tool properties like read-only The application's OAuth client ID For more information, see Control MCP use with Identity and Access Management .
- The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to create, manage, and query Cloud SQL resources from your AI-enabled development environments and AI agent platforms. .


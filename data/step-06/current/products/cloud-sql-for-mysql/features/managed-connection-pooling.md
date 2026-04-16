---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.886Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Managed Connection Pooling"
feature_slug: "managed-connection-pooling"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-mcp"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
keywords:
  - "managed"
  - "connection"
  - "pooling"
  - "feature"
  - "uses"
  - "optimize"
  - "resource"
  - "utilization"
---

# Managed Connection Pooling

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature uses connection pooling to optimize resource utilization and scale workloads for Cloud SQL instances; Managed Connection Pooling helps scale workloads by optimizing resource utilization through connection pooling for Cloud SQL instances.

## Extended Definition

This feature uses connection pooling to optimize resource utilization and scale workloads for Cloud SQL instances; Managed Connection Pooling helps scale workloads by optimizing resource utilization through connection pooling for Cloud SQL instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-mcp](https://docs.cloud.google.com/sql/docs/mysql/configure-mcp)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)

## Supporting Pages

### "Configure Managed Connection Pooling \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-mcp](https://docs.cloud.google.com/sql/docs/mysql/configure-mcp)
- Source ID: `site-docs-reference-required-5`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform To modify Managed Connection Pooling Advanced configurations , use the following Terraform resource : This example shows modifying the flags of an existing Managed Connection Pooling configuration. resource "google sql database instance" "mysql managed connection pooling modify" { name = "mysql-instance-managed-connection-pooling-modify" region = "us-central1" database version = "MYSQL 8 0" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { connection pooling enabled = true flags { name = "max pool size" # Modify or add the name and value of an flag value = "10" } } } } Disable Managed Connection Pooling for an instance You can disable Managed Connection Pooling for an existing instance using the Google Cloud console, gcloud CLI , or the Cloud SQL API.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform Use the following Terraform resource : This example shows creating an instance with Managed Connection Pooling enabled and custom flags set. resource "google sql database instance" "mysql managed connection pooling enable" { name = "mysql-instance-managed-connection-pooling-enable" region = "us-central1" database version = "MYSQL 8 0" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { connection pooling enabled = true } } } Modify Managed Connection Pooling for an instance After you enable Managed Connection Pooling, you can customize Managed Connection Pooling to meet the needs of your instance using advanced configuration options.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-16T02:32:12.281Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Terraform To disable Managed Connection Pooling for an instance, use the following Terraform resource : This example shows disabling Managed Connection Pooling on an existing instance. resource "google sql database instance" "mysql managed connection pooling disable" { name = "mysql-instance-managed-connection-pooling-disable" region = "us-central1" database version = "MYSQL 8 0" deletion protection = false settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" connection pool config { Set to false to disable Managed Connection Pooling.
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization and connection latency for your instances using pooling.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed Connection Pooling lets you scale your workloads by optimizing resource utilization and connection latency Cloud SQL instances using pooling and multiplexing.
- Note: This feature is only available for Cloud SQL Enterprise Plus edition instances that are configured to meet Managed Connection Pooling requirements.
- Connectivity Managed Connection Pooling --enable-connection-pooling Enables Managed Connection Pooling in the new instance.
- Enable Managed Connection Pooling By selecting this checkbox, you enable Managed Connection Pooling for your instance.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- JSON representation { "flags" : [ { object ( ConnectionPoolFlags ) } ] , "connectionPoolingEnabled" : boolean } Fields flags[] object ( ConnectionPoolFlags ) Optional. instances.list of connection pool configuration flags. connectionPoolingEnabled boolean Whether managed connection pooling is enabled.
- The managed connection pooling configuration for the instance. finalBackupConfig object ( FinalBackupConfig ) Optional.
- ConnectionPoolConfig The managed connection pooling configuration.


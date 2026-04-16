---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.746Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "N4 machine series"
feature_slug: "n4-machine-series"
latest_feature_date: "2025-10-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/pricing"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
keywords:
  - "series"
  - "balanced"
  - "machine"
  - "enterprise"
  - "provides"
  - "instances"
---

# N4 machine series

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The N4 machine series provides Cloud SQL Enterprise instances with balanced price-performance and custom machine types on Hyperdisk Balanced storage.

## Extended Definition

The N4 machine series provides Cloud SQL Enterprise instances with balanced price-performance and custom machine types on Hyperdisk Balanced storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud SQL Enterprise edition instances, Cloud SQL offers the general purpose shared core , general purpose dedicated core , and the N4 machine series.
- For Cloud SQL Enterprise Plus edition instances, Cloud SQL offers predefined machine types for your instances in the N2 and C4A machine series.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "enableGoogleMlIntegration": " true " " false " "databaseFlags": [ { "name": "cloudsql.enable google ml integration", "value": " on " " off " } ] "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", "passwordChangeInterval": " PASSWORD CHANGE INTERVAL " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "enableGoogleMlIntegration": " true " " false " "databaseFlags": [ { "name": "cloudsql.enable google ml integration", "value": " on " " off " } ] "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "backupConfiguration": { "enabled": true }, "passwordValidationPolicy": { "enablePasswordPolicy": true "minLength": " MIN LENGTH ", "complexity": COMPLEXITY DEFAULT, "reuseInterval": " REUSE INTERVAL ", "disallowUsernameSubstring": " DISALLOW USERNAME SUBSTRING ", "passwordChangeInterval": " PASSWORD CHANGE INTERVAL " }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "enablePrivatePathForGoogleCloudServices": true, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " }, "dataApiAccess": "ALLOW DATA API" }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- In the following tables: Select your region from the dropdown menu to see the price for that region Use the slider to choose Monthly or Hourly pricing Compare pricing between per use, 1-year, and 3-year commitments Enterprise edition - General Purpose machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.0413 / 1 hour $0.030975 / 1 hour $0.019824 / 1 hour Memory $0.007 / 1 gibibyte hour $0.00525 / 1 gibibyte hour $0.00336 / 1 gibibyte hour HA vCPUs $0.0826 / 1 hour $0.06195 / 1 hour $0.039648 / 1 hour HA Memory $0.014 / 1 gibibyte hour $0.0105 / 1 gibibyte hour $0.00672 / 1 gibibyte hour Each consumption model has a unique ID.
- In the following tables: Select your region from the dropdown menu to see the price for that region Use the slider to choose Monthly or Hourly pricing Compare pricing between per use, 1-year, and 3-year commitments Enterprise edition General Purpose machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.0413 / 1 hour $0.030975 / 1 hour $0.019824 / 1 hour Memory $0.007 / 1 gibibyte hour $0.00525 / 1 gibibyte hour $0.00336 / 1 gibibyte hour HA vCPUs $0.0826 / 1 hour $0.06195 / 1 hour $0.039648 / 1 hour HA Memory $0.014 / 1 gibibyte hour $0.0105 / 1 gibibyte hour $0.00672 / 1 gibibyte hour Each consumption model has a unique ID.
- Enterprise Plus edition - Memory optimized N2 machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.0537 / 1 hour $0.040275 / 1 hour $0.025776 / 1 hour Memory $0.0161 / 1 gibibyte hour $0.012075 / 1 gibibyte hour $0.007728 / 1 gibibyte hour HA vCPUs $0.1074 / 1 hour $0.08055 / 1 hour $0.051552 / 1 hour HA Memory $0.0322 / 1 gibibyte hour $0.02415 / 1 gibibyte hour $0.015456 / 1 gibibyte hour Data Cache Storage $0.000219178 / 1 gibibyte hour - - HA Data Cache Storage $0.000438356 / 1 gibibyte hour - - Each consumption model has a unique ID.
- Enterprise Plus edition - N2 machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.0537 / 1 hour $0.040275 / 1 hour $0.025776 / 1 hour Memory $0.0091 / 1 gibibyte hour $0.006825 / 1 gibibyte hour $0.004368 / 1 gibibyte hour HA vCPUs $0.1074 / 1 hour $0.08055 / 1 hour $0.051552 / 1 hour HA Memory $0.0182 / 1 gibibyte hour $0.01365 / 1 gibibyte hour $0.008736 / 1 gibibyte hour Data Cache Storage $0.000219178 / 1 gibibyte hour - - HA Data Cache Storage $0.000438356 / 1 gibibyte hour - - Each consumption model has a unique ID.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance. deletionProtectionEnabled boolean Configuration to protect against accidental instance deletion. timeZone string Server timezone, relevant only for Cloud SQL for SQL Server. advancedMachineFeatures object ( AdvancedMachineFeatures ) Specifies advanced machine configuration for the instances relevant only for SQL Server. dataCacheConfig object ( DataCacheConfig ) Configuration for data cache. replicationLagMaxSeconds integer Optional.
- The App Engine app IDs that can access this instance. (Deprecated) Applied to First Generation instances only. tier string The tier (or machine type) for this instance, for example db-custom-1-3840 .
- A DR replica is an optional configuration for Enterprise Plus edition instances.


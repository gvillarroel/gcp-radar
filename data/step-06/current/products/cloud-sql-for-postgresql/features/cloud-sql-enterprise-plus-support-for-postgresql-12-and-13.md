---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.772Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Enterprise Plus support for PostgreSQL 12 and 13"
feature_slug: "cloud-sql-enterprise-plus-support-for-postgresql-12-and-13"
latest_feature_date: "2024-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/pricing"
keywords:
  - "versions"
  - "enterprise"
  - "supports"
  - "plus"
---

# Cloud SQL Enterprise Plus support for PostgreSQL 12 and 13

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Enterprise Plus supports PostgreSQL versions 12 and 13.

## Extended Definition

Cloud SQL Enterprise Plus supports PostgreSQL versions 12 and 13.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)

## Supporting Pages

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- A DR replica is an optional configuration for Enterprise Plus edition instances.
- Edition The edition of the instance, can be ENTERPRISE or ENTERPRISE PLUS.
- ENTERPRISE PLUS The instance is an Enterprise Plus edition.
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "replicationCluster" : { object ( ReplicationCluster ) } , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- A DR replica is an optional configuration for Enterprise Plus edition instances.
- ENTERPRISE PLUS The instance is an Enterprise Plus edition.
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "replicationCluster" : { object ( ReplicationCluster ) } , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- Target metrics for read pool auto scaling. enabled boolean Indicates whether read pool auto scaling is enabled. minNodeCount integer Minimum number of read pool nodes to be maintained. maxNodeCount integer Maximum number of read pool nodes to be maintained. disableScaleIn boolean Indicates whether read pool auto scaling supports scale in operations (removing nodes). scaleInCooldownSeconds integer The cooldown period for scale in operations. scaleOutCooldownSeconds integer The cooldown period for scale out operations.

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Enterprise Plus edition - Memory optimized N2 machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.0537 / 1 hour $0.040275 / 1 hour $0.025776 / 1 hour Memory $0.0161 / 1 gibibyte hour $0.012075 / 1 gibibyte hour $0.007728 / 1 gibibyte hour HA vCPUs $0.1074 / 1 hour $0.08055 / 1 hour $0.051552 / 1 hour HA Memory $0.0322 / 1 gibibyte hour $0.02415 / 1 gibibyte hour $0.015456 / 1 gibibyte hour Data Cache Storage $0.000219178 / 1 gibibyte hour - - HA Data Cache Storage $0.000438356 / 1 gibibyte hour - - Each consumption model has a unique ID.
- Enterprise Plus edition - N2 machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.0537 / 1 hour $0.040275 / 1 hour $0.025776 / 1 hour Memory $0.0091 / 1 gibibyte hour $0.006825 / 1 gibibyte hour $0.004368 / 1 gibibyte hour HA vCPUs $0.1074 / 1 hour $0.08055 / 1 hour $0.051552 / 1 hour HA Memory $0.0182 / 1 gibibyte hour $0.01365 / 1 gibibyte hour $0.008736 / 1 gibibyte hour Data Cache Storage $0.000219178 / 1 gibibyte hour - - HA Data Cache Storage $0.000438356 / 1 gibibyte hour - - Each consumption model has a unique ID.
- Enterprise Plus edition - N2 machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.0537 / 1 hour $0.040275 / 1 hour $0.025776 / 1 hour Memory $0.0091 / 1 gibibyte hour $0.006825 / 1 gibibyte hour $0.004368 / 1 gibibyte hour HA vCPUs $0.1074 / 1 hour $0.08055 / 1 hour $0.051552 / 1 hour HA Memory $0.0182 / 1 gibibyte hour $0.01365 / 1 gibibyte hour $0.008736 / 1 gibibyte hour Data Cache Storage $0.000219178 / 1 gibibyte hour - - HA Data Cache Storage $0.000438356 / 1 gibibyte hour - - Each consumption model has a unique ID.
- Enterprise Plus edition - C4A machine series Iowa (us-central1) Johannesburg (africa-south1) Taiwan (asia-east1) Hong Kong (asia-east2) Tokyo (asia-northeast1) Osaka (asia-northeast2) Seoul (asia-northeast3) Mumbai (asia-south1) Delhi (asia-south2) Singapore (asia-southeast1) Jakarta (asia-southeast2) Bangkok (asia-southeast3) Sydney (australia-southeast1) Melbourne (australia-southeast2) Warsaw (europe-central2) Finland (europe-north1) Stockholm (europe-north2) Madrid (europe-southwest1) Belgium (europe-west1) Berlin (europe-west10) Turin (europe-west12) London (europe-west2) Frankfurt (europe-west3) Netherlands (europe-west4) Zurich (europe-west6) Milan (europe-west8) Paris (europe-west9) Doha (me-central1) Dammam (me-central2) Tel Aviv (me-west1) Montreal (northamerica-northeast1) Toronto (northamerica-northeast2) Mexico (northamerica-south1) Sao Paulo (southamerica-east1) Santiago (southamerica-west1) Iowa (us-central1) Oklahoma (us-central2) South Carolina (us-east1) Northern Virginia (us-east4) Columbus (us-east5) Alabama (us-east7) Dallas (us-south1) Oregon (us-west1) Los Angeles (us-west2) Salt Lake City (us-west3) Las Vegas (us-west4) Phoenix (us-west8) Show discount options Hourly Hourly Monthly Monthly Default (USD) info Consumption model ID: 7754-699E-0EBF Cloud SQL CUD - 1 Year (USD) info Consumption model ID: 61F8-639B-D89C Cloud SQL CUD - 3 Year (USD) info Consumption model ID: 52FB-D69D-95BE vCPUs $0.054 / 1 hour $0.0405 / 1 hour $0.02592 / 1 hour Memory $0.009 / 1 gibibyte hour $0.00675 / 1 gibibyte hour $0.00432 / 1 gibibyte hour HA vCPUs $0.108 / 1 hour $0.081 / 1 hour $0.05184 / 1 hour HA Memory $0.018 / 1 gibibyte hour $0.0135 / 1 gibibyte hour $0.00864 / 1 gibibyte hour Data Cache Storage $0.000219178 / 1 gibibyte hour - - HA Data Cache Storage $0.000438356 / 1 gibibyte hour - - Each consumption model has a unique ID.


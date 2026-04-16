---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.994Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Upgrade to Second Generation"
feature_slug: "upgrade-to-second-generation"
latest_feature_date: "2018-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ip"
  - "https://docs.cloud.google.com/sql/docs/mysql/pricing"
keywords:
  - "upgrade"
  - "second"
  - "generation"
  - "eligible"
  - "sql"
  - "first"
  - "mysql"
  - "instances"
---

# Upgrade to Second Generation

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Eligible Cloud SQL First Generation MySQL instances can be upgraded to Second Generation, and this upgrade is generally available.

## Extended Definition

Eligible Cloud SQL First Generation MySQL instances can be upgraded to Second Generation, and this upgrade is generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)
- [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "replicationCluster" : { object ( ReplicationCluster ) } , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances. serviceAccountEmailAddress string The service account email address assigned to the instance.\This property is read-only. onPremisesConfiguration object ( OnPremisesConfiguration ) Configuration specific to on-premises instances. replicaConfiguration object ( ReplicaConfiguration ) Configuration specific to failover replicas and read replicas. backendType enum ( SqlBackendType ) The backend type.
- App Engine co-location was only applicable to First Generation instances. databaseFlags[] object ( DatabaseFlags ) The database flags passed to the instance at startup. dataDiskType enum ( SqlDataDiskType ) The type of data disk: PD SSD (default) or PD HDD .
- This can be either ASYNCHRONOUS or SYNCHRONOUS . (Deprecated) This property was only applicable to First Generation instances. storageAutoResizeLimit string ( Int64Value format) The maximum size to which storage capacity can be automatically increased.

### Configure public IP \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-ip)
- Source ID: `site-docs-reference-required-5`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type ", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [ { "value": " ip-address ", "name": " ip-address-name ", "kind": "sql#aclEntry" } ], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } REST v1beta4 Show all existing authorized addresses by describing the instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID ip-address1 : The CIDR form of the first IP address ip-address-name1 : The name of the first IP address ip-address2 : The CIDR form of the second IP address ip-address-name2 : The name of the second IP address machine-type The instance machine type zone The instance zone HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type ", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [], "ipv4Enabled": false }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } REST v1beta4 Show all existing authorized addresses by describing the instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID ip-address1 : The CIDR form of the first IP address ip-address-name1 : The name of the first IP address ip-address2 : The CIDR form of the second IP address ip-address-name2 : The name of the second IP address machine-type The instance machine type zone The instance zone HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "settings": { "authorizedGaeApplications": [], "tier": " machine-type ", "kind": "sql#settings", "availabilityType": "REGIONAL", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "privateNetwork": "projects/ project-id /global/networks/default", "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " zone ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "maintenanceWindow": { "kind": "sql#maintenanceWindow", "hour": 0, "day": 0 }, "backupConfiguration": { "startTime": "03:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "54", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" } } REST v1beta4 Show all existing authorized addresses by describing the instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID ip-address1 : The CIDR form of the first IP address ip-address-name1 : The name of the first IP address ip-address2 : The CIDR form of the second IP address ip-address-name2 : The name of the second IP address machine-type The instance machine type zone The instance zone HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ?fields=settings To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Click Save to update the instance. gcloud Clear the authorized address list: gcloud sql instances patch INSTANCE NAME \ --clear-authorized-networks Confirm your changes: gcloud sql instances describe INSTANCE NAME REST v1 Show all existing authorized addresses by describing the instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID ip-address1 : The CIDR form of the first IP address ip-address-name1 : The name of the first IP address ip-address2 : The CIDR form of the second IP address ip-address-name2 : The name of the second IP address machine-type The instance machine type zone The instance zone HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ?fields=settings To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/mysql/pricing](https://docs.cloud.google.com/sql/docs/mysql/pricing)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Pricing for Cloud SQL depends on your instance type: MySQL and PostgreSQL SQL Server MySQL and PostgreSQL pricing Cloud SQL pricing is composed of the following charges: CPU and memory pricing Storage and networking pricing Instance pricing Cloud DNS pricing Extended support pricing CPU and memory pricing For dedicated-core instances, you choose the number of CPUs and the amount of memory you want, up to 96 CPUs and 624 GiB of memory for Enterprise edition and up to 128 CPUs and 864 GiB of memory for Enterprise Plus edition.
- For shared-core instances, extended support is priced per instance per hour and charged for every second that the instance is running.
- For dedicated-core instances, extended support is priced per vCPU per hour and charged for every second that the instance is running.
- Destination Price (USD) Compute Engine instances and Cloud SQL cross-region replicas Within the same region: free Between regions within North America: $0.12/GiB Between regions outside of North America: $0.12/GiB Google Products (except Compute Engine and traffic to Cloud SQL cross-region replicas) Intra-continental: free Inter-continental: $0.12/GiB Internet egress using Cloud Interconnect $0.05/GiB Internet egress (not using Cloud Interconnect) $0.19/GiB If you pay in a currency other than USD, the prices listed in your currency on Cloud Platform SKUs apply.


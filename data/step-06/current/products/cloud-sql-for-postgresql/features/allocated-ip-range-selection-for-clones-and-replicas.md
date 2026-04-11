---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.396Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Allocated IP range selection for clones and replicas"
feature_slug: "allocated-ip-range-selection-for-clones-and-replicas"
latest_feature_date: "2022-02-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip"
  - "https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
keywords:
  - "allocated"
  - "ip"
  - "range"
  - "selection"
  - "for"
  - "clones"
  - "and"
  - "replicas"
---

# Allocated IP range selection for clones and replicas

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Private IP instances can specify an allocated IP range for clones and replicas created from the primary instance.

## Extended Definition

Private IP instances can specify an allocated IP range for clones and replicas created from the primary instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)

## Supporting Pages

### Configure private IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": "region", "databaseVersion": "database-version", "settings": { "tier": "machine-type", "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": "projects/ PROJECT ID /global/networks/ VPC NETWORK NAME ", "allocatedIpRange": " RANGE NAME " "authorizedNetworks": [ AUTHORIZED NETWORKS ], "enablePrivatePathForGoogleCloudServices": true } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": "region", "databaseVersion": "database-version", "settings": { "tier": "machine-type", "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": "projects/ PROJECT ID /global/networks/ VPC NETWORK NAME ", "allocatedIpRange": " RANGE NAME " "authorizedNetworks": [ AUTHORIZED NETWORKS ], "enablePrivatePathForGoogleCloudServices": true } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": "projects/ PROJECT ID /global/networks/ VPC NETWORK NAME ", "allocatedIpRange": " RANGE NAME " "authorizedNetworks": [ AUTHORIZED NETWORKS ], "enablePrivatePathForGoogleCloudServices": true } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "settings": { "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": "projects/ PROJECT ID /global/networks/ VPC NETWORK NAME ", "allocatedIpRange": " RANGE NAME " "authorizedNetworks": [ AUTHORIZED NETWORKS ], "enablePrivatePathForGoogleCloudServices": true } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Create read replicas \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica](https://docs.cloud.google.com/sql/docs/postgres/replication/create-replica)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances Request JSON body: { "masterInstanceName": " primary-instance-name ", "project": " project-id ", "databaseVersion": " database-version ", "name": " replica-name ", "region": " replica-region ", "settings": { "tier": " machine-type ", "settingsVersion": 0, "ipConfiguration": { object (IpConfiguration) }, { "ipv4Enabled": false, "privateNetwork": private-network , "requireSsl": boolean, "authorizedNetworks": [ { object (AclEntry) } ], "allocatedIpRange": string } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances Request JSON body: { "masterInstanceName": " primary-instance-name ", "project": " project-id ", "databaseVersion": " database-version ", "name": " replica-name ", "region": " replica-region ", "settings": { "tier": " machine-type ", "settingsVersion": 0, "ipConfiguration": { object (IpConfiguration) }, { "ipv4Enabled": false, "privateNetwork": private-network , "requireSsl": boolean, "authorizedNetworks": [ { object (AclEntry) } ], "allocatedIpRange": string } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- If the primary instance has a private IP connection and the instance accepts database connections from Cloud SQL Language Connectors only, then you can't create read replicas for the instance.
- For more details about the new network architecture and its implications, see Upgrade an instance to the new network architecture and Allocate an IP address range .

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "replicationCluster" : { object ( ReplicationCluster ) } , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- JSON representation { "ipv4Enabled" : boolean , "privateNetwork" : string , "requireSsl" : boolean , "authorizedNetworks" : [ { object ( AclEntry ) } ] , "allocatedIpRange" : string , "enablePrivatePathForGoogleCloudServices" : boolean , "sslMode" : enum ( SslMode ) , "customSubjectAlternativeNames" : [ string ] , "pscConfig" : { object ( PscConfig ) } , "serverCaMode" : enum ( CaMode ) , "serverCaPool" : string , "serverCertificateRotationMode" : enum ( ServerCertificateRotationMode ) } Fields ipv4Enabled boolean Whether the instance is assigned a public IP address or not. privateNetwork string The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP.
- In 'CIDR' notation, also known as 'slash' notation (for example: 157.197.200.0/24 ). allocatedIpRange string The name of the allocated ip range for the private ip Cloud SQL instance.
- The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances. serviceAccountEmailAddress string The service account email address assigned to the instance.\This property is read-only. onPremisesConfiguration object ( OnPremisesConfiguration ) Configuration specific to on-premises instances. replicaConfiguration object ( ReplicaConfiguration ) Configuration specific to failover replicas and read replicas. backendType enum ( SqlBackendType ) The backend type.


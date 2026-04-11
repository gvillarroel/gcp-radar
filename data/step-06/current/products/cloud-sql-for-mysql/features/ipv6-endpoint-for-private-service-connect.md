---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.814Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "IPv6 endpoint for Private Service Connect"
feature_slug: "ipv6-endpoint-for-private-service-connect"
latest_feature_date: "2025-08-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
keywords:
  - "ipv6"
  - "endpoint"
  - "for"
  - "private"
  - "connect"
  - "this"
  - "adds"
  - "endpoints"
---

# IPv6 endpoint for Private Service Connect

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature adds IPv6 endpoints for Private Service Connect connections to Cloud SQL instances.

## Extended Definition

This feature adds IPv6 endpoints for Private Service Connect connections to Cloud SQL instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)

## Supporting Pages

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Make the following replacements: INSTANCE NAME : the name of the Cloud SQL instance to which Private Service Connect endpoints in VPC networks can connect PROJECT ID : the ID or project number of the Google Cloud project that contains the instance The following example shows a sample output for this command: gcloud sql instances describe myinstance \ --project = 12345 ... pscServiceAttachmentLink: projects/45678/regions/myregion/serviceAttachments/myserviceattachment REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1/projects/ PROJECT ID /instances/ INSTANCE NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- If this instance has Private Service Connect enabled for it, then Private Service Connect endpoints in VPC networks can connect to it.
- If this instance has Private Service Connect enabled for it, then Private Service Connect endpoints in VPC networks can connect to it.
- Use the following sample to create an IPv4 Private Service Connect endpoint. resource "google compute address" "default" { name = "psc-compute-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = "default" # Replace value with the name of the subnet here. address = "10.128.0.43" # Replace value with the IP address to reserve. } data "google sql database instance" "default" { name = resource.google sql database instance.default.name } resource "google compute forwarding rule" "default" { name = "psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" network = "default" ip address = google compute address.default.self link load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link allow psc global access = true } Use the following sample to create an IPv6 Private Service Connect endpoint. resource "google compute network" "ipv6 default" { name = "net-ipv6" auto create subnetworks = false enable ula internal ipv6 = true } resource "google compute subnetwork" "ipv6 default" { name = "subnet-internal-ipv6" ip cidr range = "10.0.0.0/16" region = "us-central1" stack type = "IPV4 IPV6" ipv6 access type = "INTERNAL" network = google compute network.ipv6 default.id } resource "google compute address" "ipv6 default" { name = "psc-compute-ipv6-address-${google sql database instance.default.name}" region = "us-central1" address type = "INTERNAL" subnetwork = google compute subnetwork.ipv6 default.name ip version = "IPV6" } resource "google compute forwarding rule" "ipv6 ilb example" { name = "ipv6-psc-forwarding-rule-${google sql database instance.default.name}" region = "us-central1" load balancing scheme = "" target = data.google sql database instance.default.psc service attachment link network = google compute network.ipv6 default.name subnetwork = google compute subnetwork.ipv6 default.name ip address = google compute address.ipv6 default.id allow psc global access = true } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Private Service Connect overview \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.
- DNS names and records For instances with Private Service Connect enabled, we recommend that you use the DNS name because different networks can connect to the same instance and Private Service Connect endpoints in each network might have different IP addresses.
- The connection propagation feature in NCC benefits the following use case for Private Service Connect deployments: You can use a common services VPC network to create multiple Private Service Connect endpoints.
- For example, if you have three VPC networks that have to connect to your instance, then you must create three Private Service Connect endpoints—one endpoint for each VPC network.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- The list of settings for requested automatically-setup Private Service Connect (PSC) consumer endpoints that can be used to connect to this read pool node. name string Output only.
- The list of settings for requested Private Service Connect consumer endpoints that can be used to connect to this Cloud SQL instance. networkAttachmentUri string Optional.
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "replicationCluster" : { object ( ReplicationCluster ) } , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- JSON representation { "hostPort" : string , "kind" : string , "username" : string , "password" : string , "caCertificate" : string , "clientCertificate" : string , "clientKey" : string , "dumpFilePath" : string , "sourceInstance" : { object ( InstanceReference ) } , "selectedObjects" : [ { object ( SelectedObjects ) } ] , "sslOption" : enum ( SslOption ) } Fields hostPort string The host and port of the on-premises instance in host:port format kind string This is always sql#onPremisesConfiguration . username string The username for connecting to on-premises instance. password string The password for connecting to on-premises instance. caCertificate string PEM representation of the trusted CA's x509 certificate. clientCertificate string PEM representation of the replica's x509 certificate. clientKey string PEM representation of the replica's private key.


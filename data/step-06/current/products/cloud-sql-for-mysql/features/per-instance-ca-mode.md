---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.910Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Per-instance CA mode"
feature_slug: "per-instance-ca-mode"
latest_feature_date: "2024-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
keywords:
  - "per"
  - "instance"
  - "ca"
  - "mode"
  - "uses"
  - "dedicated"
  - "internal"
  - "certificate"
---

# Per-instance CA mode

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Per-instance CA mode uses a dedicated internal certificate authority for each Cloud SQL instance's server certificate.

## Extended Definition

Per-instance CA mode uses a dedicated internal certificate authority for each Cloud SQL instance's server certificate.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- By default, when you create an instance in Google Cloud console, the instance uses the Google managed internal certificate authority ( GOOGLE MANAGED INTERNAL CA ), which is the per-instance CA option.
- CA MODE : specify a certificate authority hierarchy for the instance, either GOOGLE MANAGED INTERNAL CA or GOOGLE MANAGED CAS CA .
- CA MODE : specify a certificate authority hierarchy for the instance, either GOOGLE MANAGED INTERNAL CA or GOOGLE MANAGED CAS CA .
- With this option, an internal CA dedicated to each Cloud SQL instance signs the server certificate for that instance.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- Source ID: `site-docs-reference-3`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .
- SSL certificate expiration For Cloud SQL instances that use per-instance CAs ( serverCaMode is set to GOOGLE MANAGED INTERNAL CA ), the SSL certificates come with an expiration period of 10 years.
- You have three options: Per-instance CA : with this option, an internal CA dedicated to each Cloud SQL instance signs the server certificate for that instance.
- Service connection limitations If your instance uses the shared CA ( GOOGLE MANAGED CAS CA ) or customer-managed CA ( CUSTOMER MANAGED CAS CA ) option for its serverCaMode configuration, then the instance can't support connections from the following Google Cloud services: App Engine standard environment App Engine flexible environment Cloud Run services that run in a first generation execution environment What's next Configure SSL/TLS on your Cloud SQL instance.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- JSON representation { "ipv4Enabled" : boolean , "privateNetwork" : string , "requireSsl" : boolean , "authorizedNetworks" : [ { object ( AclEntry ) } ] , "allocatedIpRange" : string , "enablePrivatePathForGoogleCloudServices" : boolean , "sslMode" : enum ( SslMode ) , "customSubjectAlternativeNames" : [ string ] , "pscConfig" : { object ( PscConfig ) } , "serverCaMode" : enum ( CaMode ) , "serverCaPool" : string , "serverCertificateRotationMode" : enum ( ServerCertificateRotationMode ) } Fields ipv4Enabled boolean Whether the instance is assigned a public IP address or not. privateNetwork string The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP.
- If you want to enforce SSL/TLS without enforcing the requirement for valid client certificates, then use the sslMode flag instead of the requireSsl flag. authorizedNetworks[] object ( AclEntry ) The list of external networks that are allowed to connect to the instance using the IP.
- Custom Subject Alternative Name(SAN)s for a Cloud SQL instance. pscConfig object ( PscConfig ) PSC settings for this instance. serverCaMode enum ( CaMode ) Specify what type of CA is used for the server certificate. serverCaPool string Optional.


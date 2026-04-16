---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.548Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Server certificate authority mode configuration"
feature_slug: "server-certificate-authority-mode-configuration"
latest_feature_date: "2024-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get"
keywords:
  - "server"
  - "certificate"
  - "authority"
  - "mode"
  - "configuration"
  - "sql"
  - "lets"
  - "you"
---

# Server certificate authority mode configuration

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you choose the server certificate authority mode when creating an instance.

## Extended Definition

Cloud SQL lets you choose the server certificate authority mode when creating an instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get)

## Supporting Pages

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl](https://docs.cloud.google.com/sql/docs/sqlserver/authorize-ssl)
- Source ID: `site-docs-reference-required-4`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can either leave the serverCaMode configuration setting unspecified using Cloud SQL Admin API or gcloud CLI , or select the Google internal Certificate Authority option in the Google Cloud console.
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .
- Service connection limitations If your instance uses the shared CA ( GOOGLE MANAGED CAS CA ) or customer-managed CA ( CUSTOMER MANAGED CAS CA ) option for its serverCaMode configuration, then the instance can't support connections from the following Google Cloud services: App Engine standard environment App Engine flexible environment Cloud Run services that run in a first generation execution environment What's next Configure SSL/TLS on your Cloud SQL instance.
- SSL certificate expiration For Cloud SQL instances that use per-instance CAs ( serverCaMode is set to GOOGLE MANAGED INTERNAL CA ), the SSL certificates come with an expiration period of 10 years.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Security Server certificate authority mode Choose the type of certificate authority (CA) that signs the server certificate for this Cloud SQL instance.
- Server CA mode --server-ca-mode The --server-ca-mode flag configures the type of server certificate authority (CA) for an instance.

### Method: connect.get \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/connect/get)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "kind" : string , "serverCaCert" : { object ( SslCert ) } , "ipAddresses" : [ { object ( IpMapping ) } ] , "region" : string , "databaseVersion" : enum ( SqlDatabaseVersion ) , "backendType" : enum ( SqlBackendType ) , "pscEnabled" : boolean , "dnsName" : string , "serverCaMode" : enum ( CaMode ) , "customSubjectAlternativeNames" : [ string ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "nodes" : [ { object ( ConnectPoolNodeConfig ) } ] , "mdxProtocolSupport" : [ enum ( MdxProtocolSupport ) ] , "nodeCount" : integer } Fields kind string This is always sql#connectSettings . serverCaCert object ( SslCert ) SSL configuration. ipAddresses[] object ( IpMapping ) The assigned IP addresses for the instance. region string The cloud region for the instance.
- This property is read-only; use the tier property in the settings object to determine the database type. pscEnabled boolean Whether PSC connectivity is enabled for this instance. dnsName string The dns name of the instance. serverCaMode enum ( CaMode ) Specify what type of CA is used for the server certificate. customSubjectAlternativeNames[] string Custom subject alternative names for the server certificate. dnsNames[] object ( DnsNameMapping ) Output only.
- CaMode Various Certificate Authority (CA) modes for certificate signing.
- GOOGLE MANAGED CAS CA Google-managed regional CA part of root CA hierarchy hosted on Google Cloud's Certificate Authority Service (CAS).


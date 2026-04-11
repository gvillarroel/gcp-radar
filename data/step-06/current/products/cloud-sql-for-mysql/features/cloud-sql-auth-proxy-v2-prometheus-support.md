---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.888Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Auth proxy v2 Prometheus support"
feature_slug: "cloud-sql-auth-proxy-v2-prometheus-support"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl"
  - "https://docs.cloud.google.com/sql/docs/mysql/authorize-networks"
  - "https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication"
keywords:
  - "sql"
  - "auth"
  - "proxy"
  - "v2"
  - "prometheus"
  - "adds"
  - "for"
---

# Cloud SQL Auth proxy v2 Prometheus support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL Auth proxy v2 adds support for Prometheus.

## Extended Definition

Cloud SQL Auth proxy v2 adds support for Prometheus.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)

## Supporting Pages

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl](https://docs.cloud.google.com/sql/docs/mysql/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- For connections that use Cloud SQL Auth Proxy or Cloud SQL Language Connectors, the connections are automatically encrypted with SSL/TLS along with client and server identity verification without requiring you to download a server CA certificate and client certificate.
- Connect using SSL/TLS When connecting to a Cloud SQL instance from clients, you can use SSL/TLS for direct connections as well as for connections that use Cloud SQL Auth Proxy or Cloud SQL Language Connectors .
- To choose per-instance CA, select Google managed internal certificate authority (Google Cloud console) or specify GOOGLE MANAGED INTERNAL CA for the serverCaMode setting (Cloud SQL Admin API) or the --server-ca-mode flag ( gcloud CLI ) when you create the instance .
- Certificate authority (CA) hierarchies This section describes the three types of server certificate authority (CA) that you can choose for your Cloud SQL instances.

### "Authorize with authorized networks \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 An authorized ip address or range network range 2 Another authorized ip address or range HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}, {"value": " network range 2 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID network range 1 An authorized ip address or range network range 2 Another authorized ip address or range HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "ipConfiguration": { "authorizedNetworks": [{"value": " network range 1 "}, {"value": " network range 2 "}] } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Terraform To configure authorized networks, use a Terraform resource . resource "google sql database instance" "instance" { name = "mysql-instance-with-authorized-network" region = "us-central1" database version = "MYSQL 8 0" settings { tier = "db-f1-micro" ip configuration { authorized networks { name = "Network Name" value = "192.0.2.0/24" expiration time = "3021-11-15T16:19:00.094Z" } } } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Configure authorized networks Your client application's IP address or address range must be configured as authorized networks for the following conditions: Your client application is connecting directly to a Cloud SQL instance on its public IP address.

### "Cloud SQL built-in database authentication \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)
- Source ID: `site-iam-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- MySQL PostgreSQL SQL Server This page describes how built-in authentication works on Cloud SQL instances and how database administrators can set password policies for local database users.
- Cloud SQL uses the following types of authentication for database users: The database's built-in authentication uses a username and a password to authenticate local database users.
- Cloud SQL built-in authentication for read replicas You manage password policies for replicas on the primary instance.
- For more information, see Overview of Cloud SQL IAM database authentication .


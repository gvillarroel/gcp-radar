---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.752Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Write endpoint"
feature_slug: "write-endpoint"
latest_feature_date: "2025-07-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
keywords:
  - "resolves"
  - "global"
  - "current"
  - "write"
  - "endpoint"
  - "name"
  - "provides"
---

# Write endpoint

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

A write endpoint provides a global DNS name that resolves to the current primary instance to simplify failover and switchover handling; The write endpoint provides a global DNS name that resolves to the current primary private IP instance to reduce application changes during failover or switchover.

## Extended Definition

A write endpoint provides a global DNS name that resolves to the current primary instance to simplify failover and switchover handling; The write endpoint provides a global DNS name that resolves to the current primary private IP instance to reduce application changes during failover or switchover.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)

## Supporting Pages

### Configure private IP \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A write endpoint is a global domain name service (DNS) name that resolves to the IP address of the current primary instance automatically.
- After you assign a range to an instance, you can't modify the range. gcloud beta sql instances create INSTANCE ID \ --project = PROJECT ID \ --network = projects/ NETWORK PROJECT ID /global/networks/ VPC NETWORK NAME \ --no-assign-ip \ --allocated-ip-range-name = RANGE NAME \ --enable-google-private-path \ --database-version = DATABASE VERSION \ --cpu = NUMBER OF CPU \ --memory = MEMORY IN GB \ --region = REGION NAME \ --enforce-new-sql-network-architecture Terraform To configure private IP for a new instance, use the following Terraform resources: google compute network google compute global address google service networking connection google sql database instance resource "google compute network" "peering network" { name = "private-network" auto create subnetworks = "false" } resource "google compute global address" "private ip address" { name = "private-ip-address" purpose = "VPC PEERING" address type = "INTERNAL" prefix length = 16 network = google compute network.peering network.id } resource "google service networking connection" "default" { network = google compute network.peering network.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip address.name] } resource "google sql database instance" "default" { name = "private-ip-sql-instance" region = "us-central1" database version = "POSTGRES 14" depends on = [google service networking connection.default] settings { tier = "db-custom-2-7680" ip configuration { ipv4 enabled = "false" private network = google compute network.peering network.id } } } resource "google compute network peering routes config" "peering routes" { peering = google service networking connection.default.peering network = google compute network.peering network.name import custom routes = true export custom routes = true } [START cloud sql postgres instance private ip dns] Uncomment this block after adding a valid DNS suffix resource "google service networking peered dns domain" "default" { name = "example-com" network = google compute network.peering network.id dns suffix = "example.com." service = "servicenetworking.googleapis.com" } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": "region", "databaseVersion": "database-version", "settings": { "tier": "machine-type", "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": "projects/ PROJECT ID /global/networks/ VPC NETWORK NAME ", "allocatedIpRange": " RANGE NAME " "authorizedNetworks": [ AUTHORIZED NETWORKS ], "enablePrivatePathForGoogleCloudServices": true } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": "region", "databaseVersion": "database-version", "settings": { "tier": "machine-type", "ipConfiguration": { "ipv4Enabled": false, "privateNetwork": "projects/ PROJECT ID /global/networks/ VPC NETWORK NAME ", "allocatedIpRange": " RANGE NAME " "authorizedNetworks": [ AUTHORIZED NETWORKS ], "enablePrivatePathForGoogleCloudServices": true } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A write endpoint is a global domain name service (DNS) name that you can use for connections instead of an IP address for advanced disaster recovery (DR) such as performing a replica failover or a switchover operation.
- TCP sockets docker run -d \ -v PATH TO KEY FILE :/path/to/service-account-key.json \ -p 127 .0.0.1:3306:3306 \ gcr.io/cloud-sql-connectors/cloud-sql-proxy:2.21.1 \ --address 0 .0.0.0 \ --credentials-file /path/to/service-account-key.json \ INSTANCE CONNECTION NAME Unix sockets docker run -d \ -v / PATH TO HOST TARGET :/ PATH TO GUEST TARGET \ -v PATH TO KEY FILE :/path/to/service-account-key.json \ gcr.io/cloud-sql-connectors/cloud-sql-proxy:2.21.1 --unix-socket /cloudsql \ --credentials-file /path/to/service-account-key.json/PATH TO KEY FILE \ INSTANCE CONNECTION NAME If you are using a container optimized image, use a writeable directory in place of /cloudsql , for example: v /mnt/stateful partition/cloudsql:/cloudsql If you are using the credentials provided by your Compute Engine instance, do not include the credential file parameter and the -v PATH TO KEY FILE :/path/to/service-account-key.json line.
- INSTANCE UNIX SOCKET , // e.g. '/cloudsql/project:region:instance' // Specify additional properties here. ... config , }); }; C# To see this snippet in the context of a web application, view the README on GitHub . using MySql.Data.MySqlClient ; using System ; namespace CloudSql { public class MySqlUnix { public static MySqlConnectionStringBuilder NewMysqlUnixSocketConnectionString () { // Equivalent connection string: // "Server=<INSTANCE UNIX SOCKET>;Uid=<DB USER>;Pwd=<DB PASS>;Database=<DB NAME>;Protocol=unix" var connectionString = new MySqlConnectionStringBuilder () { // The Cloud SQL proxy provides encryption between the proxy and instance.
- If your Cloud SQL instance has only private IP or the instance has both public and private IP configured, and you want the Cloud SQL Auth Proxy to use the private IP address, then you must provide the following option when you start the Cloud SQL Auth Proxy: --private-ip Use the Cloud SQL Auth Proxy to connect to a write endpoint You can use the Cloud SQL Auth Proxy to connect to a Cloud SQL primary instance that's configured with a write endpoint.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A write endpoint is a global domain name service (DNS) name that you can use for connections instead of an IP address for advanced disaster recovery (DR) such as performing a replica failover or a switchover operation.
- TCP sockets docker run -d \ -v PATH TO KEY FILE :/path/to/service-account-key.json \ -p 127 .0.0.1:5432:5432 \ gcr.io/cloud-sql-connectors/cloud-sql-proxy:2.21.1 \ --address 0 .0.0.0 \ --credentials-file /path/to/service-account-key.json \ INSTANCE CONNECTION NAME Unix sockets docker run -d \ -v / PATH TO HOST TARGET :/ PATH TO GUEST TARGET \ -v PATH TO KEY FILE :/path/to/service-account-key.json \ gcr.io/cloud-sql-connectors/cloud-sql-proxy:2.21.1 --unix-socket /cloudsql \ --credentials-file /path/to/service-account-key.json/PATH TO KEY FILE \ INSTANCE CONNECTION NAME If you are using a container optimized image, use a writeable directory in place of /cloudsql , for example: v /mnt/stateful partition/cloudsql:/cloudsql If you are using the credentials provided by your Compute Engine instance, do not include the credential file parameter and the -v PATH TO KEY FILE :/path/to/service-account-key.json line.
- Specify additional properties here. ... config , }); }; C# To see this snippet in the context of a web application, view the README on GitHub . using Npgsql ; using System ; namespace CloudSql { public class PostgreSqlUnix { public static NpgsqlConnectionStringBuilder NewPostgreSqlUnixSocketConnectionString () { // Equivalent connection string: // "Server=<INSTANCE UNIX SOCKET>;Uid=<DB USER>;Pwd=<DB PASS>;Database=<DB NAME>" var connectionString = new NpgsqlConnectionStringBuilder () { // The Cloud SQL proxy provides encryption between the proxy and instance.
- If your Cloud SQL instance has only private IP or the instance has both public and private IP configured, and you want the Cloud SQL Auth Proxy to use the private IP address, then you must provide the following option when you start the Cloud SQL Auth Proxy: --private-ip Use the Cloud SQL Auth Proxy to connect to a write endpoint You can use the Cloud SQL Auth Proxy to connect to a Cloud SQL primary instance that's configured with a write endpoint.


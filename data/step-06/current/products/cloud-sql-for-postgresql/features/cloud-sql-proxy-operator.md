---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.790Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Proxy Operator"
feature_slug: "cloud-sql-proxy-operator"
latest_feature_date: "2023-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "automating"
  - "public"
  - "operator"
  - "proxy"
  - "preview"
  - "generally"
  - "available"
---

# Cloud SQL Proxy Operator

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The Cloud SQL Proxy Operator is generally available; The Cloud SQL Proxy Operator is available in public preview for automating GKE workload connections to Cloud SQL.

## Extended Definition

The Cloud SQL Proxy Operator is generally available; The Cloud SQL Proxy Operator is available in public preview for automating GKE workload connections to Cloud SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- INSTANCE UNIX SOCKET , // e.g. '/cloudsql/project:region:instance' // Specify additional properties here. ... config , }); }; C# To see this snippet in the context of a web application, view the README on GitHub . using MySql.Data.MySqlClient ; using System ; namespace CloudSql { public class MySqlUnix { public static MySqlConnectionStringBuilder NewMysqlUnixSocketConnectionString () { // Equivalent connection string: // "Server=<INSTANCE UNIX SOCKET>;Uid=<DB USER>;Pwd=<DB PASS>;Database=<DB NAME>;Protocol=unix" var connectionString = new MySqlConnectionStringBuilder () { // The Cloud SQL proxy provides encryption between the proxy and instance.
- Linux On Linux or macOS, use a trailing & on the command line to launch the Cloud SQL Auth Proxy in a separate process: . / cloud - sql - proxy INSTANCE CONNECTION NAME --credentials-file PATH TO KEY FILE & Windows In Windows PowerShell, use the Start-Process command to launch the Cloud SQL Auth Proxy in a separate process: Start - Process --filepath "cloud-sql-proxy.exe" --ArgumentList " --credentials-file PATH TO KEY FILE INSTANCE CONNECTION NAME " Run the Cloud SQL Auth Proxy in a Docker container To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- The Cloud SQL Auth Proxy: Works with both public and private IP endpoints Validates connections using credentials for a user or service account Wraps the connection in a SSL/TLS layer that's authorized for a Cloud SQL instance Some Google Cloud services and applications use the Cloud SQL Auth Proxy to provide connections for public IP paths with encryption and authorization, including: App Engine standard environment App Engine flexible environment Cloud Run Applications running in Google Kubernetes Engine can connect using the Cloud SQL Auth Proxy .
- If your Cloud SQL instance has only private IP or the instance has both public and private IP configured, and you want the Cloud SQL Auth Proxy to use the private IP address, then you must provide the following option when you start the Cloud SQL Auth Proxy: --private-ip Use the Cloud SQL Auth Proxy to connect to a write endpoint You can use the Cloud SQL Auth Proxy to connect to a Cloud SQL primary instance that's configured with a write endpoint.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Linux On Linux or macOS, use a trailing & on the command line to launch the Cloud SQL Auth Proxy in a separate process: . / cloud - sql - proxy INSTANCE CONNECTION NAME --credentials-file PATH TO KEY FILE & Windows In Windows PowerShell, use the Start-Process command to launch the Cloud SQL Auth Proxy in a separate process: Start - Process --filepath "cloud-sql-proxy.exe" --ArgumentList " --credentials-file PATH TO KEY FILE INSTANCE CONNECTION NAME " Run the Cloud SQL Auth Proxy in a Docker container To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- Specify additional properties here. ... config , }); }; C# To see this snippet in the context of a web application, view the README on GitHub . using Npgsql ; using System ; namespace CloudSql { public class PostgreSqlUnix { public static NpgsqlConnectionStringBuilder NewPostgreSqlUnixSocketConnectionString () { // Equivalent connection string: // "Server=<INSTANCE UNIX SOCKET>;Uid=<DB USER>;Pwd=<DB PASS>;Database=<DB NAME>" var connectionString = new NpgsqlConnectionStringBuilder () { // The Cloud SQL proxy provides encryption between the proxy and instance.
- The Cloud SQL Auth Proxy: Works with both public and private IP endpoints Validates connections using credentials for a user or service account Wraps the connection in a SSL/TLS layer that's authorized for a Cloud SQL instance Some Google Cloud services and applications use the Cloud SQL Auth Proxy to provide connections for public IP paths with encryption and authorization, including: App Engine standard environment App Engine flexible environment Cloud Run Applications running in Google Kubernetes Engine can connect using the Cloud SQL Auth Proxy .
- If your Cloud SQL instance has only private IP or the instance has both public and private IP configured, and you want the Cloud SQL Auth Proxy to use the private IP address, then you must provide the following option when you start the Cloud SQL Auth Proxy: --private-ip Use the Cloud SQL Auth Proxy to connect to a write endpoint You can use the Cloud SQL Auth Proxy to connect to a Cloud SQL primary instance that's configured with a write endpoint.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- This feature is available in Preview and for CUSTOMER MANAGED CAS CA instances only.
- This feature is available in Preview and for CUSTOMER MANAGED CAS CA instances only.
- Available only for the beta command ( gcloud beta sql instances create ). --no-assign-ip : Instance will only have a private IP address. --allocated-ip-range-name : If specified, sets a range name for which an IP range is allocated.
- Note: For the ipv4Enabled parameter, set the value to true if you're using a public IP address for your instance or false if your instance has a private IP address.


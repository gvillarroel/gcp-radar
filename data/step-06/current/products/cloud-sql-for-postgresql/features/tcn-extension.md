---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.774Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "tcn extension"
feature_slug: "tcn-extension"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
keywords:
  - "listeners"
  - "notifies"
  - "trigger"
  - "provides"
  - "table"
  - "extension"
  - "when"
---

# tcn extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The tcn extension provides a trigger function that notifies listeners when table contents change.

## Extended Definition

The tcn extension provides a trigger function that notifies listeners when table contents change.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- The INSTANCE RISKY FLAG CONFIG warning is triggered whenever at least one beta flag is being used.
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- ERROR: (gcloud.compute.forwarding-rules.create) Could not fetch resource: The resource 'projects/PROJECT ID/regions/REGION/subnetworks/SUBNET NAME' was not found This error message can occur when reserving a static internal IP address for the Private Service Connect endpoint.
- ERROR: (gcloud.compute.forwarding-rules.create) Could not fetch resource: - The resource 'projects/PROJECT ID/global/networks/NETWORK NAME' was not found This error message can occur when you create a Private Service Connect endpoint manually.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy macOS 64-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.amd64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Mac M1 Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.arm64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Windows 64-bit Right-click https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.x64.exe and select Save Link As to download the Cloud SQL Auth Proxy.
- INSTANCE UNIX SOCKET , // e.g. '/cloudsql/project:region:instance' // Specify additional properties here. ... config , }); }; C# To see this snippet in the context of a web application, view the README on GitHub . using MySql.Data.MySqlClient ; using System ; namespace CloudSql { public class MySqlUnix { public static MySqlConnectionStringBuilder NewMysqlUnixSocketConnectionString () { // Equivalent connection string: // "Server=<INSTANCE UNIX SOCKET>;Uid=<DB USER>;Pwd=<DB PASS>;Database=<DB NAME>;Protocol=unix" var connectionString = new MySqlConnectionStringBuilder () { // The Cloud SQL proxy provides encryption between the proxy and instance.
- Download the Cloud SQL Auth Proxy Linux 64-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.linux.amd64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Linux 32-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.linux.386 If the curl command is not found, run sudo apt install curl and repeat the download command.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy macOS 64-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.amd64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Mac M1 Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.arm64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Windows 64-bit Right-click https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.x64.exe and select Save Link As to download the Cloud SQL Auth Proxy.
- Specify additional properties here. ... config , }); }; C# To see this snippet in the context of a web application, view the README on GitHub . using Npgsql ; using System ; namespace CloudSql { public class PostgreSqlUnix { public static NpgsqlConnectionStringBuilder NewPostgreSqlUnixSocketConnectionString () { // Equivalent connection string: // "Server=<INSTANCE UNIX SOCKET>;Uid=<DB USER>;Pwd=<DB PASS>;Database=<DB NAME>" var connectionString = new NpgsqlConnectionStringBuilder () { // The Cloud SQL proxy provides encryption between the proxy and instance.
- Download the Cloud SQL Auth Proxy Linux 64-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.linux.amd64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Linux 32-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.linux.386 If the curl command is not found, run sudo apt install curl and repeat the download command.


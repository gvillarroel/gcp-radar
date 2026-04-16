---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.792Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Auth proxy v2"
feature_slug: "cloud-sql-auth-proxy-v2"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl"
keywords:
  - "stability"
  - "telemetry"
  - "auth"
  - "improves"
  - "performance"
  - "proxy"
---

# Cloud SQL Auth proxy v2

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Auth proxy v2 improves performance, stability, telemetry, and configuration options for secure Cloud SQL connections.

## Extended Definition

Cloud SQL Auth proxy v2 improves performance, stability, telemetry, and configuration options for secure Cloud SQL connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)

## Supporting Pages

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy macOS 64-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.amd64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Mac M1 Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.arm64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Windows 64-bit Right-click https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.x64.exe and select Save Link As to download the Cloud SQL Auth Proxy.
- Linux On Linux or macOS, use a trailing & on the command line to launch the Cloud SQL Auth Proxy in a separate process: . / cloud - sql - proxy INSTANCE CONNECTION NAME --credentials-file PATH TO KEY FILE & Windows In Windows PowerShell, use the Start-Process command to launch the Cloud SQL Auth Proxy in a separate process: Start - Process --filepath "cloud-sql-proxy.exe" --ArgumentList " --credentials-file PATH TO KEY FILE INSTANCE CONNECTION NAME " Run the Cloud SQL Auth Proxy in a Docker container To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- Give the Cloud SQL Auth Proxy a unique port on your machine to use for each Cloud SQL instance. ./cloud-sql-proxy "myProject:us-central1:myInstance?port=3306" \ "myProject:us-central1:myInstance2?port=1234" Connect to "myInstance" using port 3306 on your machine: mysql -u myInstanceUser --host 127 .0.0.1 --port 3306 Connect to "myInstance2" using port 1234 on your machine: mysql -u myInstance2User --host 127 .0.0.1 --port 1234 Troubleshoot Cloud SQL Auth Proxy connections The Cloud SQL Auth Proxy Docker image is based on a specific version of the Cloud SQL Auth Proxy.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy macOS 64-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.amd64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Mac M1 Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.arm64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Windows 64-bit Right-click https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.x64.exe and select Save Link As to download the Cloud SQL Auth Proxy.
- Linux On Linux or macOS, use a trailing & on the command line to launch the Cloud SQL Auth Proxy in a separate process: . / cloud - sql - proxy INSTANCE CONNECTION NAME --credentials-file PATH TO KEY FILE & Windows In Windows PowerShell, use the Start-Process command to launch the Cloud SQL Auth Proxy in a separate process: Start - Process --filepath "cloud-sql-proxy.exe" --ArgumentList " --credentials-file PATH TO KEY FILE INSTANCE CONNECTION NAME " Run the Cloud SQL Auth Proxy in a Docker container To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- For example: Start the Cloud SQL Auth Proxy to connect to two different Cloud SQL instances Give the Cloud SQL Auth Proxy a unique port on your machine to use for each Cloud SQL instance. ./cloud-sql-proxy "myProject:us-central1:myInstance?port=5432" \ "myProject:us-central1:myInstance2?port=1234" Connect to "myInstance" using port 5432 on your machine: psql -U myUser -h 127 .0.0.1 --port 5432 Connect to "myInstance2" using port 1234 on your machine: psql -U myUser -h 127 .0.0.1 --port 1234 Troubleshoot Cloud SQL Auth Proxy connections The Cloud SQL Auth Proxy Docker image is based on a specific version of the Cloud SQL Auth Proxy.

### "Authorize with SSL/TLS certificates \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl](https://docs.cloud.google.com/sql/docs/postgres/authorize-ssl)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For connections that use Cloud SQL Auth Proxy or Cloud SQL Language Connectors, the connections are automatically encrypted with SSL/TLS along with client and server identity verification without requiring you to download a server CA certificate and client certificate.
- Connect using SSL/TLS When connecting to a Cloud SQL instance from clients, you can use SSL/TLS for direct connections as well as for connections that use Cloud SQL Auth Proxy or Cloud SQL Language Connectors .
- Cloud SQL Auth Proxy version support Supports all versions of the Cloud SQL Auth Proxy, v1 and later.
- Requires the Cloud SQL Auth Proxy version 2.13.0 or later.


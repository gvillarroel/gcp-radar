---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.377Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Auth proxy v2"
feature_slug: "cloud-sql-auth-proxy-v2"
latest_feature_date: "2023-02-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "sql"
  - "auth"
  - "proxy"
  - "v2"
  - "improves"
  - "performance"
  - "stability"
  - "telemetry"
---

# Cloud SQL Auth proxy v2

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL Auth proxy v2 improves performance, stability, telemetry, and configuration options for secure Cloud SQL connections.

## Extended Definition

Cloud SQL Auth proxy v2 improves performance, stability, telemetry, and configuration options for secure Cloud SQL connections.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy macOS 64-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.amd64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Mac M1 Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.arm64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Windows 64-bit Right-click https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.x64.exe and select Save Link As to download the Cloud SQL Auth Proxy.
- Download the Cloud SQL Auth Proxy Linux 64-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.linux.amd64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Linux 32-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.linux.386 If the curl command is not found, run sudo apt install curl and repeat the download command.
- Windows 32-bit Right-click https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.x86.exe and select Save Link As to download the Cloud SQL Auth Proxy.
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy macOS 64-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.amd64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Mac M1 Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.darwin.arm64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Windows 64-bit Right-click https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.x64.exe and select Save Link As to download the Cloud SQL Auth Proxy.
- Download the Cloud SQL Auth Proxy Linux 64-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.linux.amd64 Make the Cloud SQL Auth Proxy executable: chmod +x cloud-sql-proxy Linux 32-bit Download the Cloud SQL Auth Proxy: curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.linux.386 If the curl command is not found, run sudo apt install curl and repeat the download command.
- Windows 32-bit Right-click https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.21.1/cloud-sql-proxy.x86.exe and select Save Link As to download the Cloud SQL Auth Proxy.
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The v2 release offers improvements in performance, stability, and telemetry.
- The v2 release offers improvements in performance, stability, and telemetry.
- The v2 release offers improvements in performance, stability, and telemetry.
- For users of the Cloud SQL Auth Proxy : If the Cloud SQL instance to which you're connecting is using shared certificate authority (CA) for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.13.0 or later.


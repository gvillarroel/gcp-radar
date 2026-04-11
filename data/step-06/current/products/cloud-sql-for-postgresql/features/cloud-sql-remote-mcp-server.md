---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.272Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL remote MCP server"
feature_slug: "cloud-sql-remote-mcp-server"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
keywords:
  - "sql"
  - "remote"
  - "mcp"
  - "server"
  - "the"
  - "lets"
  - "llms"
  - "ai"
---

# Cloud SQL remote MCP server

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The Cloud SQL remote MCP server lets LLMs, AI applications, and AI-enabled development platforms interact with Cloud SQL instances.

## Extended Definition

The Cloud SQL remote MCP server lets LLMs, AI applications, and AI-enabled development platforms interact with Cloud SQL instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud SQL remote MCP server lets you interact easily with Cloud SQL instances from LLMs, AI applications, and AI-enabled development platforms.
- February 18, 2026 Change After March 17, 2026, when you enable the Cloud SQL Admin API ( sqladmin.googleapis.com )`, the Cloud SQL remote MCP server is enabled automatically.
- February 09, 2026 Feature You can now use the Cloud SQL remote MCP server .
- The Cloud SQL remote MCP server is in Preview .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud SQL remote MCP server lets you interact easily with Cloud SQL instances from LLMs, AI applications, and AI-enabled development platforms.
- The Cloud SQL remote MCP server lets you interact easily with Cloud SQL instances from LLMs, AI applications, and AI-enabled development platforms.
- The Cloud SQL remote MCP server lets you interact easily with Cloud SQL instances from LLMs, AI applications, and AI-enabled development platforms.
- February 18, 2026 Cloud SQL for MySQL Change After March 17, 2026, when you enable the Cloud SQL Admin API ( sqladmin.googleapis.com ), the Cloud SQL remote MCP server is enabled automatically.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- TCP sockets docker run -d \ -v PATH TO KEY FILE :/path/to/service-account-key.json \ -p 127 .0.0.1:3306:3306 \ gcr.io/cloud-sql-connectors/cloud-sql-proxy:2.21.1 \ --address 0 .0.0.0 \ --credentials-file /path/to/service-account-key.json \ INSTANCE CONNECTION NAME Unix sockets docker run -d \ -v / PATH TO HOST TARGET :/ PATH TO GUEST TARGET \ -v PATH TO KEY FILE :/path/to/service-account-key.json \ gcr.io/cloud-sql-connectors/cloud-sql-proxy:2.21.1 --unix-socket /cloudsql \ --credentials-file /path/to/service-account-key.json/PATH TO KEY FILE \ INSTANCE CONNECTION NAME If you are using a container optimized image, use a writeable directory in place of /cloudsql , for example: v /mnt/stateful partition/cloudsql:/cloudsql If you are using the credentials provided by your Compute Engine instance, do not include the credential file parameter and the -v PATH TO KEY FILE :/path/to/service-account-key.json line.
- Error: googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Once an application connects to the proxy, the proxy reports the following error: failed to refresh the ephemeral certificate for $INSTANCE CONNECTION NAME : googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Solution: Either identify the source of the quota problem, for example, an application is misusing the connector and unnecessarily creating new connections, or contact support to request an increase to the Cloud SQL Admin API quota.
- INSTANCE UNIX SOCKET , // e.g. '/cloudsql/project:region:instance' // Specify additional properties here. ... config , }); }; C# To see this snippet in the context of a web application, view the README on GitHub . using MySql.Data.MySqlClient ; using System ; namespace CloudSql { public class MySqlUnix { public static MySqlConnectionStringBuilder NewMysqlUnixSocketConnectionString () { // Equivalent connection string: // "Server=<INSTANCE UNIX SOCKET>;Uid=<DB USER>;Pwd=<DB PASS>;Database=<DB NAME>;Protocol=unix" var connectionString = new MySqlConnectionStringBuilder () { // The Cloud SQL proxy provides encryption between the proxy and instance.


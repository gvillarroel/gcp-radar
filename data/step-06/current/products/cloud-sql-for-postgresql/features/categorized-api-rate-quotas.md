---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.786Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Categorized API rate quotas"
feature_slug: "categorized-api-rate-quotas"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/quotas"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
keywords:
  - "categorized"
  - "categories"
  - "quotas"
  - "enforced"
  - "rate"
  - "multiple"
  - "supports"
---

# Categorized API rate quotas

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user.

## Extended Definition

Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)

## Supporting Pages

### Quotas and limits \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Rate quotas Cloud SQL supports rate quotas, which are also known as rate limits or API quotas.
- When you use the gcloud CLI or the Google Cloud console, you're making requests to the Cloud SQL Admin API and these requests count toward your rate quotas.
- Rate quotas reset after a time interval that's specific to Cloud SQL (for example, the number of API requests per minute).
- There are multiple quotas on each kind of forwarding rules, per project, per network and per peering group .

### "Connect to an instance using Private Service Connect \_|\_ Cloud SQL for\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- You can enter multiple subnets in a comma-separated list.
- You can enter multiple subnets in a comma-separated list.
- If you use Private Service Connect to connect to a Cloud SQL instance from multiple VPC networks, then each network has its own administrator. dns.admin Grants full control over Cloud DNS resources, including DNS zones and records. cloudsql.admin Provides full control of a Cloud SQL instance and controls the instance over its lifecycle. cloudsql.instanceUser Provides access to the Cloud SQL instance.
- You can use Private Service Connect to connect to either a primary Cloud SQL instance or any of its read replicas from multiple Virtual Private Cloud (VPC) networks that belong to different groups, teams, projects, or organizations.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Unix sockets To connect the Cloud SQL Auth Proxy to multiple instances, you provide each instance connection name as an argument to the Cloud SQL Auth Proxy, in a space-separated list.
- Error: googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Once an application connects to the proxy, the proxy reports the following error: failed to refresh the ephemeral certificate for $INSTANCE CONNECTION NAME : googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Solution: Either identify the source of the quota problem, for example, an application is misusing the connector and unnecessarily creating new connections, or contact support to request an increase to the Cloud SQL Admin API quota.
- When setting INSTANCE UNIX SOCKET, the connector will // call an external package that will enable Unix socket connections. // Note: For Java users, the Cloud SQL Java Connector can provide authenticated connections // which is usually preferable to using the Cloud SQL Proxy with Unix sockets. // See https://github.com/GoogleCloudPlatform/cloud-sql-jdbc-socket-factory for details. if ( INSTANCE UNIX SOCKET != null ) { config . addDataSourceProperty ( "unixSocketPath" , INSTANCE UNIX SOCKET ); } // cloudSqlRefreshStrategy set to "lazy" is used to perform a // refresh when needed, rather than on a scheduled interval. // This is recommended for serverless environments to // avoid background refreshes from throttling CPU. config . addDataSourceProperty ( "cloudSqlRefreshStrategy" , "lazy" ); // ...
- Linux On Linux or macOS, use a trailing & on the command line to launch the Cloud SQL Auth Proxy in a separate process: . / cloud - sql - proxy INSTANCE CONNECTION NAME --credentials-file PATH TO KEY FILE & Windows In Windows PowerShell, use the Start-Process command to launch the Cloud SQL Auth Proxy in a separate process: Start - Process --filepath "cloud-sql-proxy.exe" --ArgumentList " --credentials-file PATH TO KEY FILE INSTANCE CONNECTION NAME " Run the Cloud SQL Auth Proxy in a Docker container To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .


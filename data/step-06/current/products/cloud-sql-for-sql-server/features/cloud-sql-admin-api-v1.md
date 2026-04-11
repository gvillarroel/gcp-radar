---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.909Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL Admin API v1"
feature_slug: "cloud-sql-admin-api-v1"
latest_feature_date: "2021-08-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api"
keywords:
  - "sql"
  - "admin"
  - "api"
  - "v1"
  - "is"
  - "the"
  - "generally"
  - "available"
---

# Cloud SQL Admin API v1

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL Admin API v1 is the generally available API version and remains compatible with v1beta4.

## Extended Definition

Cloud SQL Admin API v1 is the generally available API version and remains compatible with v1beta4.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)

## Supporting Pages

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: The Cloud SQL Admin API v1 is now generally available.
- In the Discovery Service, Cloud SQL is represented as "sqladmin" (for example: https://www.googleapis.com/discovery/v1/apis/ sqladmin /v1beta4/sql.operation).
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Cloud SQL Admin API: gcloud services enable sqladmin.googleapis.com Authorize requests Your application needs to identify itself every time it sends a request to the Cloud SQL Admin API, by including an API key with each request.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api)
- Source ID: `site-api-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: The Cloud SQL Admin API v1 is now generally available.
- In the Discovery Service, Cloud SQL is represented as "sqladmin" (for example: https://www.googleapis.com/discovery/v1/apis/ sqladmin /v1beta4/sql.operation).
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Cloud SQL Admin API: gcloud services enable sqladmin.googleapis.com Authorize requests Your application needs to identify itself every time it sends a request to the Cloud SQL Admin API, by including an API key with each request.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: The Cloud SQL Admin API v1 is now generally available.
- In the Discovery Service, Cloud SQL is represented as "sqladmin" (for example: https://www.googleapis.com/discovery/v1/apis/ sqladmin /v1beta4/sql.operation).
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Cloud SQL Admin API: gcloud services enable sqladmin.googleapis.com Authorize requests Your application needs to identify itself every time it sends a request to the Cloud SQL Admin API, by including an API key with each request.


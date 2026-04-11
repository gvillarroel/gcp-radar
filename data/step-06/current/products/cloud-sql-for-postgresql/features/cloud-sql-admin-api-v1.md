---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.414Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Admin API v1"
feature_slug: "cloud-sql-admin-api-v1"
latest_feature_date: "2021-08-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest"
keywords:
  - "sql"
  - "admin"
  - "api"
  - "v1"
  - "provides"
  - "generally"
  - "available"
  - "that"
---

# Cloud SQL Admin API v1

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL provides a generally available v1 Admin API that remains compatible with v1beta4.

## Extended Definition

Cloud SQL provides a generally available v1 Admin API that remains compatible with v1beta4.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest)

## Supporting Pages

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: The Cloud SQL Admin API v1 is now generally available.
- This is different than the base path "sql" that you use in requests to the REST API (for example: https://www.googleapis.com/ sql /v1beta4/projects/example-id/instances).
- In the Discovery Service, Cloud SQL is represented as "sqladmin" (for example: https://www.googleapis.com/discovery/v1/apis/ sqladmin /v1beta4/sql.operation).
- MySQL PostgreSQL SQL Server Cloud SQL provides a REST API for administering your instances programmatically.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Important: The Cloud SQL Admin API v1 is now generally available.
- This is different than the base path "sql" that you use in requests to the REST API (for example: https://www.googleapis.com/ sql /v1beta4/projects/example-id/instances).
- In the Discovery Service, Cloud SQL is represented as "sqladmin" (for example: https://www.googleapis.com/discovery/v1/apis/ sqladmin /v1beta4/sql.operation).
- MySQL PostgreSQL SQL Server Cloud SQL provides a REST API for administering your instances programmatically.

### Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST Resource: v1beta4.backupRuns REST Resource: v1beta4.backups REST Resource: v1beta4.connect REST Resource: v1beta4.databases REST Resource: v1beta4.flags REST Resource: v1beta4.instances REST Resource: v1beta4.operations REST Resource: v1beta4.projects.instances REST Resource: v1beta4.sslCerts REST Resource: v1beta4.tiers REST Resource: v1beta4.users REST Resource: v1.Backups REST Resource: v1.backupRuns REST Resource: v1.connect REST Resource: v1.databases REST Resource: v1.flags REST Resource: v1.instances REST Resource: v1.operations REST Resource: v1.projects.instances REST Resource: v1.sslCerts REST Resource: v1.tiers REST Resource: v1.users Service: sqladmin.googleapis.com Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://sqladmin.googleapis.com REST Resource: v1beta4.backupRuns Methods delete DELETE /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id} Deletes the backup taken by a backup run. get GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id} Retrieves a resource containing information about a backup run. insert POST /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns Creates a new backup run on demand. list GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
- REST Resource: v1beta4.operations Methods cancel POST /sql/v1beta4/projects/{project}/operations/{operation}/cancel Cancels an instance operation that has been performed on an instance. get GET /sql/v1beta4/projects/{project}/operations/{operation} Retrieves an instance operation that has been performed on an instance. list GET /sql/v1beta4/projects/{project}/operations Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
- REST Resource: v1.operations Methods cancel POST /v1/projects/{project}/operations/{operation}/cancel Cancels an instance operation that has been performed on an instance. get GET /v1/projects/{project}/operations/{operation} Retrieves an instance operation that has been performed on an instance. list GET /v1/projects/{project}/operations Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.


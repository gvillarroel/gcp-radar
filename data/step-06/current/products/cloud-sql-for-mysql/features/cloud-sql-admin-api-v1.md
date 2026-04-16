---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.973Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Admin API v1"
feature_slug: "cloud-sql-admin-api-v1"
latest_feature_date: "2021-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages"
keywords:
  - "sql"
  - "admin"
  - "v1"
  - "provides"
  - "generally"
  - "available"
  - "compatible"
  - "v1beta4"
---

# Cloud SQL Admin API v1

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL provides the generally available Admin API v1, compatible with v1beta4.

## Extended Definition

Cloud SQL provides the generally available Admin API v1, compatible with v1beta4.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)

## Supporting Pages

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: The Cloud SQL Admin API v1 is now generally available.
- In the Discovery Service, Cloud SQL is represented as "sqladmin" (for example: https://www.googleapis.com/discovery/v1/apis/ sqladmin /v1beta4/sql.operation).
- MySQL PostgreSQL SQL Server Cloud SQL provides a REST API for administering your instances programmatically.
- There is no requirement to migrate from v1beta4 to the v1 Admin API.

### Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta4.backupRuns REST Resource: v1beta4.backups REST Resource: v1beta4.connect REST Resource: v1beta4.databases REST Resource: v1beta4.flags REST Resource: v1beta4.instances REST Resource: v1beta4.operations REST Resource: v1beta4.projects.instances REST Resource: v1beta4.sslCerts REST Resource: v1beta4.tiers REST Resource: v1beta4.users REST Resource: v1.Backups REST Resource: v1.backupRuns REST Resource: v1.connect REST Resource: v1.databases REST Resource: v1.flags REST Resource: v1.instances REST Resource: v1.operations REST Resource: v1.projects.instances REST Resource: v1.sslCerts REST Resource: v1.tiers REST Resource: v1.users Service: sqladmin.googleapis.com Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://sqladmin.googleapis.com REST Resource: v1beta4.backupRuns Methods delete DELETE /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id} Deletes the backup taken by a backup run. get GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id} Retrieves a resource containing information about a backup run. insert POST /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns Creates a new backup run on demand. list GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
- REST Resource: v1beta4.tiers Methods list GET /sql/v1beta4/projects/{project}/tiers Lists all available machine types (tiers) for Cloud SQL, for example, db-custom-1-3840 .
- REST Resource: v1beta4.flags Methods list GET /sql/v1beta4/flags Lists all available database flags for Cloud SQL instances.

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/mysql/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback Cloud SQL Admin API error messages Stay organized with collections Save and categorize content based on your preferences.
- ERROR READ REPLICA INCOMPATIBLE DATABASE TYPES The database versions for the source and target instances are incompatible for replication.
- Error class Error code Error message 500 - BACKEND ERROR SERVER EXCEPTION The service is temporarily unavailable.
- ERROR INSTANCES INCOMPATIBLE FOR REPLICATION The source and target instances are incompatible for replication.


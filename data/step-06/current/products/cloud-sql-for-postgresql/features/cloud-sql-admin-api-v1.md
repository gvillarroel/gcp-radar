---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.811Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Admin API v1"
feature_slug: "cloud-sql-admin-api-v1"
latest_feature_date: "2021-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages"
keywords:
  - "compatible"
  - "remains"
  - "generally"
  - "admin"
  - "provides"
  - "available"
---

# Cloud SQL Admin API v1

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL provides a generally available v1 Admin API that remains compatible with v1beta4.

## Extended Definition

Cloud SQL provides a generally available v1 Admin API that remains compatible with v1beta4.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages)

## Supporting Pages

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: The Cloud SQL Admin API v1 is now generally available.
- MySQL PostgreSQL SQL Server Cloud SQL provides a REST API for administering your instances programmatically.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Cloud SQL Admin API: gcloud services enable sqladmin.googleapis.com Authorize requests Your application needs to identify itself every time it sends a request to the Cloud SQL Admin API, by including an API key with each request.
- Enable the API To use the Cloud SQL Admin API, you need to enable it: Console Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important: The Cloud SQL Admin API v1 is now generally available.
- MySQL PostgreSQL SQL Server Cloud SQL provides a REST API for administering your instances programmatically.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Cloud SQL Admin API: gcloud services enable sqladmin.googleapis.com Authorize requests Your application needs to identify itself every time it sends a request to the Cloud SQL Admin API, by including an API key with each request.
- Enable the API To use the Cloud SQL Admin API, you need to enable it: Console Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/postgres/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback Cloud SQL Admin API error messages Stay organized with collections Save and categorize content based on your preferences.
- ERROR READ REPLICA INCOMPATIBLE DATABASE TYPES The database versions for the source and target instances are incompatible for replication.
- Error class Error code Error message 500 - BACKEND ERROR SERVER EXCEPTION The service is temporarily unavailable.
- ERROR INSTANCES INCOMPATIBLE FOR REPLICATION The source and target instances are incompatible for replication.


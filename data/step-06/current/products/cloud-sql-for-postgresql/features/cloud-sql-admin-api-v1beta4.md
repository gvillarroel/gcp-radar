---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.422Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Admin API v1beta4"
feature_slug: "cloud-sql-admin-api-v1beta4"
latest_feature_date: "2021-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "sql"
  - "admin"
  - "api"
  - "v1beta4"
  - "provides"
  - "the"
  - "as"
  - "generally"
---

# Cloud SQL Admin API v1beta4

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL provides the Admin API v1beta4 as a generally available management API.

## Extended Definition

Cloud SQL provides the Admin API v1beta4 as a generally available management API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Discovery Service, Cloud SQL is represented as "sqladmin" (for example: https://www.googleapis.com/discovery/v1/apis/ sqladmin /v1beta4/sql.operation).
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback Use the Cloud SQL Admin API Stay organized with collections Save and categorize content based on your preferences.
- This is different than the base path "sql" that you use in requests to the REST API (for example: https://www.googleapis.com/ sql /v1beta4/projects/example-id/instances).

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Discovery Service, Cloud SQL is represented as "sqladmin" (for example: https://www.googleapis.com/discovery/v1/apis/ sqladmin /v1beta4/sql.operation).
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback Use the Cloud SQL Admin API Stay organized with collections Save and categorize content based on your preferences.
- This is different than the base path "sql" that you use in requests to the REST API (for example: https://www.googleapis.com/ sql /v1beta4/projects/example-id/instances).

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- February 10, 2021 Feature The Cloud SQL Admin API v1beta4 is now generally available.
- April 28, 2022 Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- June 20, 2024 Feature You can now use the gcloud sql instances describe command or the SQL Admin API to retrieve a list of database versions that are available to your PostgreSQL instance for upgrade.
- February 26, 2025 Feature You can now include replicas when you perform an in-place major version upgrade using gcloud or the Cloud SQL Admin API.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.823Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Vector search"
feature_slug: "vector-search"
latest_feature_date: "2025-02-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig"
keywords:
  - "vector"
  - "search"
  - "sql"
  - "for"
  - "mysql"
  - "supports"
  - "nearest"
  - "neighbor"
---

# Vector search

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL vector search supports K-nearest neighbor and approximate nearest neighbor searches over stored vector embeddings.

## Extended Definition

Cloud SQL for MySQL vector search supports K-nearest neighbor and approximate nearest neighbor searches over stored vector embeddings.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud SQL for MySQL also supports the creation of vector search indexes for several different index types using approximate nearest neighbor (ANN) search.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- After you store vector embeddings in your database, you can then perform K-nearest neighbor (KNN) searches on the dataset along with the rest of your data.
- After you store vector embeddings in a table, you can perform K-nearest neighbor (KNN) searches against your vector dataset.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL for MySQL also supports the creation of vector search indexes for several different index types using approximate nearest neighbor (ANN) search.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Cloud SQL for MySQL Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- After you store vector embeddings in your database, you can then perform K-nearest neighbor (KNN) searches on the dataset along with the rest of your data.
- After you store vector embeddings in a table, you can perform K-nearest neighbor (KNN) searches against your vector dataset.

### MySqlSyncConfig \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Currently used for the MySQL external server initial dump.
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback MySqlSyncConfig Stay organized with collections Save and categorize content based on your preferences.
- JSON representation SyncFlags JSON representation MySQL-specific external server sync settings.
- SyncFlags Initial sync flags for certain Cloud SQL APIs.


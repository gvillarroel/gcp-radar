---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.847Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Vector embeddings and vector search"
feature_slug: "vector-embeddings-and-vector-search"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig"
keywords:
  - "vector"
  - "embeddings"
  - "and"
  - "search"
  - "sql"
  - "for"
  - "mysql"
  - "supports"
---

# Vector embeddings and vector search

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports storing vector embeddings, running K-nearest neighbor searches, and creating approximate nearest neighbor vector indexes.

## Extended Definition

Cloud SQL for MySQL supports storing vector embeddings, running K-nearest neighbor searches, and creating approximate nearest neighbor vector indexes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- Feature Cloud SQL for MySQL now supports the storage of vector embeddings in MySQL 8.0.36 and later databases.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- By integrating your Cloud SQL for MySQL instance with Vertex AI, you can invoke online predictions and generate vector embeddings from models hosted in Vertex AI directly from your Cloud SQL instance.
- Cloud SQL for MySQL also supports the creation of vector search indexes for several different index types using approximate nearest neighbor (ANN) search.

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable cloudsql vector flag. gcloud sql instances patch INSTANCE NAME --database-flags=cloudsql vector=on Enable enable-google-ml-integration flag to allow the Cloud SQL for MySQL instance to integrate with Vertex AI. gcloud sql instances patch INSTANCE NAME --enable-google-ml-integration Create a vector column to store city embeddings ALTER TABLE airports ADD COLUMN city embedding VECTOR ( 768 ); Generate and store vector embeddings for city names UPDATE airports SET city embedding = mysql . ml embedding ( 'text-embedding-005' , city ) WHERE city IS NOT NULL ; To enable the Cloud SQL for MySQL instance to perform trigram value searches, perform the following steps.
- Prepare the database for value searches To use semantic and trigram value searches, you must configure your Cloud SQL for MySQL instance to support vector embeddings and n-gram indexing.
- To generate a value index, perform the following steps: Run the /generate targeted value searches command: /generate targeted value searches Enter mysql to select MySQL as the database engine.
- MySQL PostgreSQL SQL Server Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms , and the Additional Terms for Generative AI Preview Products .

### MySqlSyncConfig \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/MySqlSyncConfig)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback MySqlSyncConfig Stay organized with collections Save and categorize content based on your preferences.
- Currently used for the MySQL external server initial dump.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-23 UTC."],[],[]]
- JSON representation SyncFlags JSON representation MySQL-specific external server sync settings.


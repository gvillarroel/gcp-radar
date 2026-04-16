---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.778Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "oracle_fdw extension"
feature_slug: "oracle-fdw-extension"
latest_feature_date: "2023-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases"
  - "https://docs.cloud.google.com/sql/docs/postgres/features"
  - "https://docs.cloud.google.com/sql/docs/postgres/ai-overview"
keywords:
  - "wrapper"
  - "foreign"
  - "oracle"
  - "accessing"
  - "databases"
  - "provides"
  - "extension"
---

# oracle_fdw extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The oracle_fdw extension provides a foreign data wrapper for accessing Oracle databases from PostgreSQL; The oracle_fdw extension provides a foreign data wrapper for accessing Oracle databases from PostgreSQL.

## Extended Definition

The oracle_fdw extension provides a foreign data wrapper for accessing Oracle databases from PostgreSQL; The oracle_fdw extension provides a foreign data wrapper for accessing Oracle databases from PostgreSQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases](https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)
- [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)

## Supporting Pages

### "Create and manage databases \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases](https://docs.cloud.google.com/sql/docs/postgres/create-manage-databases)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } psql Client For reference information, see CREATE DATABASE in the PostgreSQL documentation.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 Note: You can't use REST APIs to set values for the character set and collation.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/ database-name " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } psql Client For reference information, see DROP DATABASE in the PostgreSQL documentation.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases/ database-name " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 The following request uses the databases:delete method to delete the specified database.

### Cloud SQL for PostgreSQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/features](https://docs.cloud.google.com/sql/docs/postgres/features)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Unsupported features for Cloud SQL for PostgreSQL Any feature that requires SUPERUSER privileges with the following exceptions: You can use the CREATE EXTENSION statement only for supported extensions .
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Cloud SQL for PostgreSQL features Stay organized with collections Save and categorize content based on your preferences.
- Supports migration from source databases to Cloud SQL destination databases using Database Migration Service (DMS) .
- Supported PostgreSQL extensions for Cloud SQL Cloud SQL supports many PostgreSQL extensions.

### "Build generative AI applications using Cloud SQL \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Cloud SQL provides the following metrics in the Metrics Explorer in Cloud Monitoring: Metric Description Metric label Data cache used The data cache usage (in bytes) database/data cache/bytes used Data cache quota The maximum data cache size (in bytes) database/data cache/quota Data cache hit count The total number of data cache hit read operations for an instance database/postgresql/data cache/hit count Data cache miss count The total number of data cache miss read operations for an instance database/postgresql/data cache/miss count Data cache hit ratio The ratio of data cache hit read operations to data cache miss read operations for an instance database/postgresql/data cache/hit ratio System Insights : provide system metrics such as CPU utilization, disk utilization, and throughput to help you monitor the health of instances and troubleshoot issues that affect the performance of your generative AI applications.
- By using Cloud SQL, you gain the following benefits: A high availability SLA of 99.99% that's inclusive of maintenance A managed service that provides you with features such as automatic backups, replication, patches, encryption, and automatic storage capacity increases Security, governance, and compliance capabilities Combine with contextual operational data .
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Build generative AI applications using Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- Benefits of using Cloud SQL for generative AI applications Using Cloud SQL to build generative AI applications provides the following: Use PostgreSQL to build generative AI applications .


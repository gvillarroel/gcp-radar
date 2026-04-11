---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.800Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Vertex AI integration"
feature_slug: "vertex-ai-integration"
latest_feature_date: "2026-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql"
keywords:
  - "vertex"
  - "ai"
  - "integration"
  - "this"
  - "lets"
  - "sql"
  - "for"
  - "mysql"
---

# Vertex AI integration

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature lets Cloud SQL for MySQL invoke Vertex AI online predictions and generate vector embeddings directly from the database; Cloud SQL for MySQL can integrate with Vertex AI to invoke predictions and generate vector embeddings from hosted models.

## Extended Definition

This feature lets Cloud SQL for MySQL invoke Vertex AI online predictions and generate vector embeddings directly from the database; Cloud SQL for MySQL can integrate with Vertex AI to invoke predictions and generate vector embeddings from hosted models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- February 10, 2026 Feature Model endpoint management for Cloud SQL for MySQL and the integration of Cloud SQL for MySQL with Vertex AI are now generally available ( GA ).
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- By integrating your Cloud SQL for MySQL instance with Vertex AI, you can invoke online predictions and generate vector embeddings from models hosted in Vertex AI directly from your Cloud SQL instance.
- December 15, 2022 Feature You can now allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL for MySQL and make queries against this data over a private connection.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To enable the Vertex AI integration in Cloud SQL, you must have a Cloud SQL for MySQL database, version 8.0.36 or later.
- Integrate with Vertex AI Issue Troubleshooting Error message: Google ML integration API is supported only on MySQL version 8.0.36 or above.
- If you selected a shared core for the machine type of your instance, then you can't enable the Vertex AI integration in Cloud SQL.
- For more information on enabling this API, see Enable database integration with Vertex AI .

### "Export and import using SQL dump files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- Export from your local MySQL server using mysqldump If you are exporting data from an on-premises MySQL database for import into a Cloud SQL database, you must use the mysqldump utility with the following flags: --databases You must use the --databases option to specify an explicit list of databases to export, and this list must not contain the mysql system database. --hex-blob If your database contains any binary fields, you must use this flag to ensure that your binary fields are imported correctly. --set-gtid-purged=OFF GTID information must not be included in the SQL dump file, and binary logging must not be disabled by the SQL dump file. (Not required for MySQL 5.5 or external replication.) --single-transaction Starts a transaction before running.
- Rather than lock the entire database, this lets mysqldump read the database in the current state, making for a consistent data dump.
- Rather than lock the entire database, this lets mysqldump read the database in the current state, making for a consistent data dump.
- If your SQL dump file contains DEFINER clauses (views, triggers, stored procedures, and so on), then depending on the order these statements are executed, using this file for import could fail.


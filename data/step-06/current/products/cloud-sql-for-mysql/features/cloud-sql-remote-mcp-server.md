---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.800Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL remote MCP server"
feature_slug: "cloud-sql-remote-mcp-server"
latest_feature_date: "2026-02-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql"
keywords:
  - "sql"
  - "remote"
  - "mcp"
  - "server"
  - "this"
  - "provides"
  - "for"
  - "interacting"
---

# Cloud SQL remote MCP server

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature provides a remote MCP server for interacting with Cloud SQL instances from LLMs and AI-enabled tools.

## Extended Definition

This feature provides a remote MCP server for interacting with Cloud SQL instances from LLMs and AI-enabled tools.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud SQL remote MCP server lets you interact easily with Cloud SQL instances from LLMs, AI applications, and AI-enabled development platforms.
- February 18, 2026 Change After March 17, 2026, when you enable the Cloud SQL Admin API ( sqladmin.googleapis.com ), the Cloud SQL remote MCP server is enabled automatically.
- With this option, an internal CA dedicated to each Cloud SQL instance signs the server certificate for that instance.
- This API demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- February 18, 2026 Cloud SQL for MySQL Change After March 17, 2026, when you enable the Cloud SQL Admin API ( sqladmin.googleapis.com ), the Cloud SQL remote MCP server is enabled automatically.
- Cloud SQL for PostgreSQL Change After March 17, 2026, when you enable the Cloud SQL Admin API ( sqladmin.googleapis.com )`, the Cloud SQL remote MCP server is enabled automatically.
- Cloud SQL for SQL Server Change After March 17, 2026, when you enable the Cloud SQL Admin API ( sqladmin.googleapis.com ), the Cloud SQL remote MCP server is enabled automatically.
- This extension provides a foreign data wrapper ( fdw ) for accessing databases that use the Tabular Data Stream (TDS) protocol, such as Microsoft SQL Server or Sybase.

### "Export and import using SQL dump files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Export from your local MySQL server using mysqldump If you are exporting data from an on-premises MySQL database for import into a Cloud SQL database, you must use the mysqldump utility with the following flags: --databases You must use the --databases option to specify an explicit list of databases to export, and this list must not contain the mysql system database. --hex-blob If your database contains any binary fields, you must use this flag to ensure that your binary fields are imported correctly. --set-gtid-purged=OFF GTID information must not be included in the SQL dump file, and binary logging must not be disabled by the SQL dump file. (Not required for MySQL 5.5 or external replication.) --single-transaction Starts a transaction before running.
- Export your database: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID BUCKET NAME : the Cloud Storage bucket name PATH TO DUMP FILE : the path to the SQL dump file DATABASE NAME 1 : the name of a database inside the Cloud SQL instance DATABASE NAME 2 : the name of a database inside the Cloud SQL instance Note : To use serverless exports, set the value of the offload parameter to TRUE .
- Export your database: Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID BUCKET NAME : the Cloud Storage bucket name PATH TO DUMP FILE : the path to the SQL dump file DATABASE NAME 1 : the name of a database inside the Cloud SQL instance DATABASE NAME 2 : the name of a database inside the Cloud SQL instance Note : To use serverless exports, set the value of the offload parameter to TRUE .
- If your SQL dump file contains DEFINER clauses (views, triggers, stored procedures, and so on), then depending on the order these statements are executed, using this file for import could fail.


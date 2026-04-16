---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.968Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Custom CSV formatting controls"
feature_slug: "custom-csv-formatting-controls"
latest_feature_date: "2021-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv"
  - "https://docs.cloud.google.com/sql/docs/mysql"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls"
keywords:
  - "custom"
  - "csv"
  - "formatting"
  - "controls"
  - "sql"
  - "mysql"
  - "supports"
  - "import"
---

# Custom CSV formatting controls

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports custom CSV formatting controls for import and export, including delimiters, quotes, and escapes.

## Extended Definition

Cloud SQL for MySQL supports custom CSV formatting controls for import and export, including delimiters, quotes, and escapes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)

## Supporting Pages

### "Export and import using CSV files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)
- Source ID: `site-docs-root`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CHARACTER SET 'utf8mb4' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' ESCAPED BY '\\' LINES TERMINATED BY '\n' Import data to Cloud SQL for MySQL Required roles and permissions for importing to Cloud SQL for MySQL To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for importing files in parallel only) For help with IAM roles, see Identity and Access Management .
- Export data from your local MySQL server to a CSV file To export a MySQL table for import into Cloud SQL, we recommend that you format the file using the following command: mysql --host = INSTANCE IP --user = USER NAME --password DATABASE \ -e " SELECT FROM TABLE INTO OUTFILE ' FILE NAME ' CHARACTER SET 'utf8mb4' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' ESCAPED BY '\"' " You can customize the format of your CSV export file.
- Export data from Cloud SQL for MySQL Required roles and permissions for exporting from Cloud SQL for MySQL To export data from Cloud SQL into Cloud Storage, the user initiating the export must have one of the following roles: The Cloud SQL Editor role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.export Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin Identity and Access Management (IAM) role A custom role, including the following permissions: storage.objects.create storage.objects.list (for exporting files in parallel only) storage.objects.delete (for exporting files in parallel only) For help with IAM roles, see Identity and Access Management .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Export and import using CSV files Stay organized with collections Save and categorize content based on your preferences.

### Cloud SQL for MySQL documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql)
- Source ID: `site-api-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Create instances Connection overview Enable and disable high availability on an instance Create and manage MySQL databases Create and manage MySQL users Export and import using SQL dump file Export and import using CSV files Create backups Create read replicas find in page Reference gcloud sql command-line Use the Cloud SQL Admin API REST API Best practices Performance tips Authorize requests Configure VPC Service Controls Cloud SQL Admin API error messages info Resources Pricing Quotas and limits Troubleshoot Cloud SQL feature support by database engine Release notes Billing questions Get support Security bulletins Related resources Training and tutorials Use cases Code samples Explore self-paced training, use cases, reference architectures, and code samples with examples of how to use and connect Google Cloud services.
- Secret Manager secret Code sample Code Samples Python SQLAlchemy Use SQLAlchemy with your Cloud SQL for MySQL database Code sample Code Samples Node.js sample Connecting to your Cloud SQL for MySQL database in Node.js Code sample Code Samples PHP PDO Connecting your Cloud SQL for MySQL database using PHP PDO Code sample Code Samples Go web app sample Simple examples of connecting to Cloud SQL for MySQL using Go Code sample Code Samples .NET sample This sample application demonstrates how to store data in Google Cloud SQL with a MySQL database when running in Google App Engine Flexible Environment.
- Migration Use case Use cases Migrating Oracle users to Cloud SQL for MySQL: Terminology and functionality Part of a series that provides key information and guidance related to planning and performing Oracle 11g/12c database migrations to Cloud SQL for MySQL version 5.7, second-generation instances.
- Home Documentation Databases Cloud SQL MySQL Cloud SQL for MySQL documentation Read product documentation Cloud SQL for MySQL is a fully-managed database service that helps you set up, maintain, manage, and administer your MySQL relational databases on Google Cloud.

### "Configure VPC Service Controls \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Configure VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes how to enable VPC Service Controls on a Cloud SQL project.
- Add the Cloud SQL and Cloud Storage APIs to the service perimeter To mitigate the risk of your data being exfiltrated from Cloud SQL, for example, using Cloud SQL import or export APIs, you must restrict both the Google Cloud SQL Admin API and the Google Cloud Storage API .
- To add Cloud SQL and Cloud Storage APIs as restricted services: Console In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .


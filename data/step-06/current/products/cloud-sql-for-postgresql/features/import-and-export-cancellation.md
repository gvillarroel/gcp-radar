---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.367Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Import and export cancellation"
feature_slug: "import-and-export-cancellation"
latest_feature_date: "2023-07-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv"
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "import"
  - "and"
  - "export"
  - "cancellation"
  - "sql"
  - "for"
  - "postgresql"
  - "supports"
---

# Import and export cancellation

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports canceling running data import and export operations.

## Extended Definition

Cloud SQL for PostgreSQL supports canceling running data import and export operations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### "Export and import using CSV files \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need even more options than Cloud SQL provides, you can use the following statement in a psql client: \c opy [ table name ] TO '[csv file name].csv' WITH ( FORMAT csv, ESCAPE '[escape character]' , QUOTE '[quote character]' , DELIMITER '[delimiter character]' , ENCODING 'UTF8' , NULL '[null marker string]' ) ; Import data to Cloud SQL for PostgreSQL Required roles and permissions for importing to Cloud SQL for PostgreSQL To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for importing files in parallel only) For help with IAM roles, see Identity and Access Management .
- Export data from Cloud SQL for PostgreSQL Required roles and permissions for exporting from Cloud SQL for PostgreSQL To export data from Cloud SQL into Cloud Storage, the user initiating the export must have one of the following roles: The Cloud SQL Editor role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.export Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin Identity and Access Management (IAM) role A custom role, including the following permissions: storage.objects.create storage.objects.list (for exporting files in parallel only) storage.objects.delete (for exporting files in parallel only) For help with IAM roles, see Identity and Access Management .
- A sample gcloud command follows: gcloud sql import csv INSTANCE NAME gs:// BUCKET NAME / FILE NAME \ --database = DATABASE NAME \ --table = TABLE NAME \ --quote = "22" \ --escape = "5C" \ --fields-terminated-by = "2C" \ --lines-terminated-by = "0A" The equivalent REST API request body would look like this: { "importContext" : { "fileType" : "CSV" , "uri" : "gs://bucket name/path to csv file" , "database" : [ " DATABASE NAME " ] , "csvImportOptions" : { "table" : " TABLE NAME " , "escapeCharacter" : "5C" , "quoteCharacter" : "22" , "fieldsTerminatedBy" : "2C" , "linesTerminatedBy" : "0A" } } } Note: If you use custom format options in your import commands, make sure the exported file was created with the same options.
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Export and import using CSV files Stay organized with collections Save and categorize content based on your preferences.

### "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export data from an on-premises PostgreSQL server using pg dump To export a database that is not managed by Cloud SQL, for later import into Cloud SQL, use the pg dump utility with the following flags: --no-owner Ownership change commands must not be included in the dump file. --format The custom and directory formats are allowed if the dump file is intended for use with pg restore .
- Export data using the custom format from Cloud SQL for PostgreSQL To use the custom format, from a command line, run pg dump : pg dump \ -U USERNAME \ --format = custom \ --no-owner \ --no-acl \ DATABASE NAME > DATABASE NAME .dmp Export data from multiple files in parallel from Cloud SQL for PostgreSQL You can only use the directory output format to export data from multiple files in parallel .
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Export and import using pg dump, pg dumpall, and pg restore Stay organized with collections Save and categorize content based on your preferences.
- Import from a dump file created with the custom format to Cloud SQL for PostgreSQL If the dump file was created with custom format, run the following command: pg restore \ --list DATABASE NAME .dmp sed -E 's/(.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- July 11, 2023 Feature Cloud SQL now supports cancelling the import and export of data into Cloud SQL for PostgreSQL instances.
- November 06, 2018 Feature Support for CSV format for PostgreSQL instance imports and exports .
- July 17, 2024 Feature You can now use the following optional flags when you export and import files into Cloud SQL instances: --clean : if you export files, then this flag enables you to include the DROP <object> SQL statement that's required to drop (clean) database objects before you import them.
- October 05, 2022 Feature Cloud SQL for PostgreSQL now supports the log timezone and TimeZone flags.


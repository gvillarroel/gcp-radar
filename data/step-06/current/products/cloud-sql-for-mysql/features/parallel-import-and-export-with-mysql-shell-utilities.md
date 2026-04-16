---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.923Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Parallel import and export with MySQL Shell utilities"
feature_slug: "parallel-import-and-export-with-mysql-shell-utilities"
latest_feature_date: "2024-01-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv"
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/error-messages"
keywords:
  - "parallel"
  - "import"
  - "export"
  - "mysql"
  - "shell"
  - "utilities"
  - "sql"
  - "supports"
---

# Parallel import and export with MySQL Shell utilities

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports parallel multi-file data export and import using the MySQL Shell dumpInstance and loadDump utilities.

## Extended Definition

Cloud SQL supports parallel multi-file data export and import using the MySQL Shell dumpInstance and loadDump utilities.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)

## Supporting Pages

### "Export and import using CSV files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CHARACTER SET 'utf8mb4' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' ESCAPED BY '\\' LINES TERMINATED BY '\n' Import data to Cloud SQL for MySQL Required roles and permissions for importing to Cloud SQL for MySQL To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for importing files in parallel only) For help with IAM roles, see Identity and Access Management .
- Export data from Cloud SQL for MySQL Required roles and permissions for exporting from Cloud SQL for MySQL To export data from Cloud SQL into Cloud Storage, the user initiating the export must have one of the following roles: The Cloud SQL Editor role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.export Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin Identity and Access Management (IAM) role A custom role, including the following permissions: storage.objects.create storage.objects.list (for exporting files in parallel only) storage.objects.delete (for exporting files in parallel only) For help with IAM roles, see Identity and Access Management .
- Export data from your local MySQL server to a CSV file To export a MySQL table for import into Cloud SQL, we recommend that you format the file using the following command: mysql --host = INSTANCE IP --user = USER NAME --password DATABASE \ -e " SELECT FROM TABLE INTO OUTFILE ' FILE NAME ' CHARACTER SET 'utf8mb4' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' ESCAPED BY '\"' " You can customize the format of your CSV export file.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Export and import using CSV files Stay organized with collections Save and categorize content based on your preferences.

### "Export and import using SQL dump files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export data from Cloud SQL for MySQL Required roles and permissions for exporting from Cloud SQL for MySQL To export data from Cloud SQL into Cloud Storage, the user initiating the export must have one of the following roles: The Cloud SQL Editor role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.export Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin Identity and Access Management (IAM) role A custom role, including the following permissions: storage.objects.create storage.objects.list (for exporting files in parallel only) storage.objects.delete (for exporting files in parallel only) For help with IAM roles, see Identity and Access Management .
- Export from your local MySQL server using mysqldump If you are exporting data from an on-premises MySQL database for import into a Cloud SQL database, you must use the mysqldump utility with the following flags: --databases You must use the --databases option to specify an explicit list of databases to export, and this list must not contain the mysql system database. --hex-blob If your database contains any binary fields, you must use this flag to ensure that your binary fields are imported correctly. --set-gtid-purged=OFF GTID information must not be included in the SQL dump file, and binary logging must not be disabled by the SQL dump file. (Not required for MySQL 5.5 or external replication.) --single-transaction Starts a transaction before running.
- Import data to Cloud SQL for MySQL Required roles and permissions for importing to Cloud SQL for MySQL To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for importing files in parallel only) For help with IAM roles, see Identity and Access Management .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Export and import using SQL dump files Stay organized with collections Save and categorize content based on your preferences.

### Cloud SQL error messages \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The failover won't occur because it isn't needed.</td> </tr> <tr> <td>Import</td> <td>The import file may contain statements which require the superuser role.</td> <td>Edit the file to remove any statements which require the superuser role.</td> </tr> Cloud SQL also uses some third-party binaries (for example, mysqld ), which can generate unknown error messages.
- To learn more about using mysqldump flags for managed import migration, see Allowed and default initial sync flags Error message Troubleshooting InnoDB: Write to file ./ibtmp1 failed at offset XXXX, YYYY bytes should have been written, only 0 were written.
- This happens if you use the mysqldump binary from MySQL 8.0 to dump data from a MySQL 5.7 database and import to a MySQL 8.0 database.
- If you dump data from a MySQL 5.7 database and import to a MySQL 8.0 database, make sure to use the mysqldump binary from MySQL 5.7.


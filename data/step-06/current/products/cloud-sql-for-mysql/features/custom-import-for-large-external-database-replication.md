---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.971Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Custom import for large external database replication"
feature_slug: "custom-import-for-large-external-database-replication"
latest_feature_date: "2021-09-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/best-practices"
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases"
keywords:
  - "custom"
  - "import"
  - "large"
  - "external"
  - "database"
  - "replication"
  - "sql"
  - "mysql"
---

# Custom import for large external database replication

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports using a custom import to set up replication from large external databases.

## Extended Definition

Cloud SQL for MySQL supports using a custom import to set up replication from large external databases.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)

## Supporting Pages

### General best practices \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices)
- Source ID: `site-docs-reference-required-5`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- High write activity to the database can generate a large volume of transaction (binary) logs, which can consume significant disk space, and lead to disk growth for instances enabled to increase storage automatically.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback General best practices Stay organized with collections Save and categorize content based on your preferences.
- For small instances, you can temporarily increase the CPU and RAM of an instance to improve performance when importing large datasets.
- If a large database update is needed, do it in several smaller transactions rather than one large transaction.

### "Export and import using SQL dump files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Export from your local MySQL server using mysqldump If you are exporting data from an on-premises MySQL database for import into a Cloud SQL database, you must use the mysqldump utility with the following flags: --databases You must use the --databases option to specify an explicit list of databases to export, and this list must not contain the mysql system database. --hex-blob If your database contains any binary fields, you must use this flag to ensure that your binary fields are imported correctly. --set-gtid-purged=OFF GTID information must not be included in the SQL dump file, and binary logging must not be disabled by the SQL dump file. (Not required for MySQL 5.5 or external replication.) --single-transaction Starts a transaction before running.
- Note: If you intend to import the SQL dump file into a Cloud SQL database, do not export customer-created MySQL users.
- Import data to Cloud SQL for MySQL Required roles and permissions for importing to Cloud SQL for MySQL To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for importing files in parallel only) For help with IAM roles, see Identity and Access Management .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Export and import using SQL dump files Stay organized with collections Save and categorize content based on your preferences.

### "Create and manage databases \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)
- Source ID: `site-docs-reference-3`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- If you don't specify a custom character set and collation when you create your database, then the database has the following default values: MySQL 5.6, 5.7 : (created with Google Cloud console, Cloud SQL Admin API, gcloud CLI , Terraform, or mysql client) Character set: utf8 Collation: utf8 general ci MySQL 8.0.x and later (created with the Google Cloud console) Character set: utf8 Collation: utf8 general ci MySQL 8.0.x and later (created with the Cloud SQL Admin API, gcloud CLI , Terraform, or mysql client) Character set: utf8mb4 Collation: utf8mb4 0900 ai ci If you need to modify the character set or collation configuration of your database after creation, then see Update the character set and collation for a database .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } mysql Client For reference information, see CREATE DATABASE in the MySQL documentation.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/ database-name " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } mysql Client For reference information, see DROP DATABASE in the MySQL documentation.
- DROP DATABASE [ database name ]; Note: If the database's directory contains any files not directly used by the database, the DROP DATABASE command will generate errors indicating that the database directory couldn't be deleted, such as: Error dropping database (can't rmdir './ database name ', errno: 39) Error dropping database (can't rmdir './ database name ', errno: 17) Examples of such files are #sql- files created from interrupted ALTER TABLE operations in MySQL 5.6 and MySQL 5.7.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.756Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Parallel directory-format database export and import"
feature_slug: "parallel-directory-format-database-export-and-import"
latest_feature_date: "2025-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp"
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv"
  - "https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users"
keywords:
  - "directory"
  - "format"
  - "parallel"
  - "import"
  - "export"
  - "database"
---

# Parallel directory-format database export and import

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL can export or import all user databases in an instance using parallel directory-formatted operations.

## Extended Definition

Cloud SQL can export or import all user databases in an instance using parallel directory-formatted operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)

## Supporting Pages

### "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export data using the custom format from Cloud SQL for PostgreSQL To use the custom format, from a command line, run pg dump : pg dump \ -U USERNAME \ --format = custom \ --no-owner \ --no-acl \ DATABASE NAME > DATABASE NAME .dmp Export data from multiple files in parallel from Cloud SQL for PostgreSQL You can only use the directory output format to export data from multiple files in parallel .
- Export data from an on-premises PostgreSQL server using pg dump To export a database that is not managed by Cloud SQL, for later import into Cloud SQL, use the pg dump utility with the following flags: --no-owner Ownership change commands must not be included in the dump file. --format The custom and directory formats are allowed if the dump file is intended for use with pg restore .
- Import data from multiple files in parallel to Cloud SQL for PostgreSQL You can import data from multiple files in parallel only for archives created using the directory and custom output formats.
- Import Use the pg restore utility to import an archive into a Cloud SQL database. pg restore works only with archives created by pg dump in either the custom or directory formats.

### "Export and import using CSV files \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A sample gcloud command follows: gcloud sql import csv INSTANCE NAME gs:// BUCKET NAME / FILE NAME \ --database = DATABASE NAME \ --table = TABLE NAME \ --quote = "22" \ --escape = "5C" \ --fields-terminated-by = "2C" \ --lines-terminated-by = "0A" The equivalent REST API request body would look like this: { "importContext" : { "fileType" : "CSV" , "uri" : "gs://bucket name/path to csv file" , "database" : [ " DATABASE NAME " ] , "csvImportOptions" : { "table" : " TABLE NAME " , "escapeCharacter" : "5C" , "quoteCharacter" : "22" , "fieldsTerminatedBy" : "2C" , "linesTerminatedBy" : "0A" } } } Note: If you use custom format options in your import commands, make sure the exported file was created with the same options.
- If you need even more options than Cloud SQL provides, you can use the following statement in a psql client: \c opy [ table name ] TO '[csv file name].csv' WITH ( FORMAT csv, ESCAPE '[escape character]' , QUOTE '[quote character]' , DELIMITER '[delimiter character]' , ENCODING 'UTF8' , NULL '[null marker string]' ) ; Import data to Cloud SQL for PostgreSQL Required roles and permissions for importing to Cloud SQL for PostgreSQL To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for importing files in parallel only) For help with IAM roles, see Identity and Access Management .
- Otherwise, remove it from the following command. gcloud sql export csv INSTANCE NAME gs:// BUCKET NAME / FILE NAME \ --database= DATABASE NAME \ --offload \ --query= SELECT QUERY For information about using the export csv command, see the sql export csv command reference page.
- Import the file: gcloud sql import csv INSTANCE NAME gs:// BUCKET NAME / FILE NAME \ --database = DATABASE NAME \ --table = TABLE NAME For information about using the import csv command, see the sql import csv command reference page.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/postgres/add-manage-iam-users)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a log might have information similar to the following: { insertId: "..." logName: "projects/.../logs/cloudaudit.googleapis.com%2Fdata access" protoPayload: { @type: "type.googleapis.com/google.cloud.audit.AuditLog" authenticationInfo: { principalEmail: "..." } authorizationInfo: [ 0: { granted: true permission: "cloudsql.instances.login" resource: "instances/..." resourceAttributes: { } } ] methodName: "cloudsql.instances.login" request: { @type: "type.googleapis.com/google.cloud.sql.authorization.v1.InstancesLoginRequest" clientIpAddress: "..." database: "..." databaseSessionId: ... instance: "projects/.../locations/us-central1/instances/..." user: "..." } requestMetadata: { callerIp: "..." destinationAttributes: { } requestAttributes: { auth: { } time: "..." } } resourceName: "instances/..." serviceName: "cloudsql.googleapis.com" status: { } } receiveTimestamp: "..." resource: { labels: { database id: "...:..." project id: "..." region: "us-central" } type: "cloudsql database" } severity: "INFO" timestamp: "..." } Troubleshoot a login failure When an attempt to log in fails, PostgreSQL returns a minimal error message for security reasons.
- You only need to run this command once per project, and you can run it in any directory. export GOOGLE CLOUD PROJECT= PROJECT ID Environment variables are overridden if you set explicit values in the Terraform configuration file.
- You only need to run this command once per project, and you can run it in any directory. export GOOGLE CLOUD PROJECT= PROJECT ID Environment variables are overridden if you set explicit values in the Terraform configuration file.
- You only need to run this command once per project, and you can run it in any directory. export GOOGLE CLOUD PROJECT= PROJECT ID Environment variables are overridden if you set explicit values in the Terraform configuration file.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.986Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "User and database administration"
feature_slug: "user-and-database-administration"
latest_feature_date: "2016-12-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-tools"
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql"
keywords:
  - "user"
  - "and"
  - "database"
  - "administration"
  - "sql"
  - "for"
  - "mysql"
  - "supports"
---

# User and database administration

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports administration of users and databases for Second Generation instances through the Google Cloud Console and the Cloud SQL API.

## Extended Definition

Cloud SQL for MySQL supports administration of users and databases for Second Generation instances through the Google Cloud Console and the Cloud SQL API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)

## Supporting Pages

### "Create and manage databases \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } mysql Client For reference information, see CREATE DATABASE in the MySQL documentation.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method DELETE -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/ database-name " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "DELETE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } mysql Client For reference information, see DROP DATABASE in the MySQL documentation.
- Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID database-name : The name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases Request JSON body: { "project": " project-id ", "instance": " instance-id ", "name": " database-name " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- If you don't specify a custom character set and collation when you create your database, then the database has the following default values: MySQL 5.6, 5.7 : (created with Google Cloud console, Cloud SQL Admin API, gcloud CLI , Terraform, or mysql client) Character set: utf8 Collation: utf8 general ci MySQL 8.0.x and later (created with the Google Cloud console) Character set: utf8 Collation: utf8 general ci MySQL 8.0.x and later (created with the Cloud SQL Admin API, gcloud CLI , Terraform, or mysql client) Character set: utf8mb4 Collation: utf8mb4 0900 ai ci If you need to modify the character set or collation configuration of your database after creation, then see Update the character set and collation for a database .

### "Connect from other MySQL tools \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools)
- Source ID: `site-iam-reference`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Be sure to select the MySQL Driver and provide values for <instance-ip> , <database> , and <user-name> .
- One way to do this is to edit the script that launches the SQuirrel SQL application as follows: $JAVACMD -Djavax.net.ssl.keyStore= <path-to-keystore> \ -Djavax.net.ssl.keyStorePassword= <keystore-password> \ -Djavax.net.ssl.trustStore= <path-to-truststore> \ -Djavax.net.ssl.trustStorePassword= <truststore-password> \ [existing launch parameters] After you've started SQuirrel SQL with the valid keystore and truststore information, you can connect with: jdbc:mysql:// <instance-ip> :3306/ <database> ?verifyServerCertificate=true&useSSL=true&requireSSL=true Once connected, you can test if you're using SSL by executing the following SQL statement and verifying that the ssl cipher value is not empty: SHOW STATUS like 'ssl cipher' ; Back to top Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- MySQL PostgreSQL SQL Server This page describes several common database administration and reporting tools that you can use to connect to your Cloud SQL instances.
- In the New MySQL Connection form, fill in the following information: User : The name of a user in your MySQL database.

### "Export and import using SQL dump files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Import your dump file: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID bucket name : The Cloud Storage bucket name path to sql file : The path to the SQL file database name : The name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import Request JSON body: { "importContext": { "fileType": "SQL", "uri": "gs:// bucket name / path to sql file ", "database": " database name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Import your dump file: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID bucket name : The Cloud Storage bucket name path to sql file : The path to the SQL file database name : The name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /import Request JSON body: { "importContext": { "fileType": "SQL", "uri": "gs:// bucket name / path to sql file ", "database": " database name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Export data from Cloud SQL for MySQL Required roles and permissions for exporting from Cloud SQL for MySQL To export data from Cloud SQL into Cloud Storage, the user initiating the export must have one of the following roles: The Cloud SQL Editor role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.export Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin Identity and Access Management (IAM) role A custom role, including the following permissions: storage.objects.create storage.objects.list (for exporting files in parallel only) storage.objects.delete (for exporting files in parallel only) For help with IAM roles, see Identity and Access Management .
- Export from your local MySQL server using mysqldump If you are exporting data from an on-premises MySQL database for import into a Cloud SQL database, you must use the mysqldump utility with the following flags: --databases You must use the --databases option to specify an explicit list of databases to export, and this list must not contain the mysql system database. --hex-blob If your database contains any binary fields, you must use this flag to ensure that your binary fields are imported correctly. --set-gtid-purged=OFF GTID information must not be included in the SQL dump file, and binary logging must not be disabled by the SQL dump file. (Not required for MySQL 5.5 or external replication.) --single-transaction Starts a transaction before running.


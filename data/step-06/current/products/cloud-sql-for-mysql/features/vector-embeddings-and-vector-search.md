---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.919Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Vector embeddings and vector search"
feature_slug: "vector-embeddings-and-vector-search"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries"
keywords:
  - "vector"
  - "embeddings"
  - "search"
  - "sql"
  - "mysql"
  - "supports"
  - "storing"
  - "running"
---

# Vector embeddings and vector search

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports storing vector embeddings, running K-nearest neighbor searches, and creating approximate nearest neighbor vector indexes.

## Extended Definition

Cloud SQL for MySQL supports storing vector embeddings, running K-nearest neighbor searches, and creating approximate nearest neighbor vector indexes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries)

## Supporting Pages

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-docs-reference-required-5`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Enable cloudsql vector flag. gcloud sql instances patch INSTANCE NAME --database-flags=cloudsql vector=on Enable enable-google-ml-integration flag to allow the Cloud SQL for MySQL instance to integrate with Vertex AI. gcloud sql instances patch INSTANCE NAME --enable-google-ml-integration Create a vector column to store city embeddings ALTER TABLE airports ADD COLUMN city embedding VECTOR ( 768 ); Generate and store vector embeddings for city names UPDATE airports SET city embedding = mysql . ml embedding ( 'text-embedding-005' , city ) WHERE city IS NOT NULL ; To enable the Cloud SQL for MySQL instance to perform trigram value searches, perform the following steps.
- Prepare the database for value searches To use semantic and trigram value searches, you must configure your Cloud SQL for MySQL instance to support vector embeddings and n-gram indexing.
- To generate a value index, perform the following steps: Run the /generate targeted value searches command: /generate targeted value searches Enter mysql to select MySQL as the database engine.
- To enable the Cloud SQL for MySQL instance to perform semantic value searches, you must enable the following flags.

### "Client libraries and sample code for Cloud SQL \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Libraries and sample code Language Documentation C++ Google API Client Library Dart Google API Client Library Go Google API Client Library Sample code: Cloud SQL Auth Proxy Java Google API Client Library Google Client Developer's Guide Sample code: Cloud SQL Java Connector JavaScript Google API Client Library .NET Google API Client Library Google Client Developer's Guide Node.js Google API Client Library Objective-C Google API Client Library PHP Google API Client Library Python Google API Client Library Google Client Developer's Guide Cloud SQL Python Connector Sample code: MySQL, PostgreSQL, SQL Server Ruby Google API Client Library Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Databases Cloud SQL MySQL Reference Send feedback Client libraries and sample code for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server The Cloud SQL Admin API is built on HTTP and JSON, so any standard HTTP client can send requests to it and parse the responses.

### "Export and import using SQL dump files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Export from your local MySQL server using mysqldump If you are exporting data from an on-premises MySQL database for import into a Cloud SQL database, you must use the mysqldump utility with the following flags: --databases You must use the --databases option to specify an explicit list of databases to export, and this list must not contain the mysql system database. --hex-blob If your database contains any binary fields, you must use this flag to ensure that your binary fields are imported correctly. --set-gtid-purged=OFF GTID information must not be included in the SQL dump file, and binary logging must not be disabled by the SQL dump file. (Not required for MySQL 5.5 or external replication.) --single-transaction Starts a transaction before running.
- With the --single-transaction option, mysqldump starts a transaction before running.
- Import your dump file: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID bucket name : The Cloud Storage bucket name path to sql file : The path to the SQL file database name : The name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import Request JSON body: { "importContext": { "fileType": "SQL", "uri": "gs:// bucket name / path to sql file ", "database": " database name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Import your dump file: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID bucket name : The Cloud Storage bucket name path to sql file : The path to the SQL file database name : The name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /import Request JSON body: { "importContext": { "fileType": "SQL", "uri": "gs:// bucket name / path to sql file ", "database": " database name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.568Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Striped import and export"
feature_slug: "striped-import-and-export"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/best-practices"
keywords:
  - "striped"
  - "import"
  - "export"
  - "reduce"
  - "time"
  - "needed"
  - "bak"
  - "file"
---

# Striped import and export

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Striped import and export reduce the time needed for BAK file operations and related workflows.

## Extended Definition

Striped import and export reduce the time needed for BAK file operations and related workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)

## Supporting Pages

### "Export and import using BAK files and transaction log files \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- Source ID: `site-docs-root`
- Final score: 266
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use striped export The advantages of striped export are the following: Reductions in the time needed for operations to complete Databases larger than 5 TB can be exported A potential disadvantage of using striped export is that the backup, rather than consisting of one file, is split across a set of files.
- Use striped import The advantages of striped import are the following: Reductions in the time needed for operations to complete Databases larger than 5 TB can be imported Note: Striped import does not support the import of encrypted columns.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /export" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "EXPORT", "exportContext": { "uri": {uri}, "databases": [ database name ], "kind": "sql#exportContext", "fileType": "BAK", "bakExportOptions": { "bakType": FULL, "differentialBase": true, } }, "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Export a differential backup: Before using any of the request data, make the following replacements: project-id : the project ID instance-id : the instance ID bucket name : the Cloud Storage bucket name path to dump file : the path to the SQL dump fle database name 1 : the name of a database inside the Cloud SQL instance database name 2 : the name of a database inside the Cloud SQL instance offload : to enable and use serverless exports, set this value to true .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "IMPORT", "importContext": { "uri": {uri}, "database": database name , "kind": "sql#importContext", "fileType": "BAK", "bakImportOptions": { "noRecovery": false, "bakType": DIFF, "recoveryOnly": false } }, "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } After restoring all the backup files, use the recoveryOnly flag to bring the imported database online from a RESTORING state.

### "Export and import using SQL dump files \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-sql)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } For the complete list of parameters for the request, see the instances:import page.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /import" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } For the complete list of parameters for the request, see the instances:import page.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Export and import using SQL dump files Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This page describes exporting and importing data into Cloud SQL instances using SQL dump files.

### "General best practices \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/best-practices](https://docs.cloud.google.com/sql/docs/sqlserver/best-practices)
- Source ID: `site-docs-reference-required-4`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When using the export backup feature on an Enterprise or Standard SQL Server instance, avoid creating a GZ archive file because it tries to compress a backup that's already natively compressed by SQL Server.
- Exports take longer to create, because an external file is created in Cloud Storage that can be used to recreate your data.
- Data import and export Best practice More information Speed up imports for small instance sizes.
- If you are exporting data for import into Cloud SQL, be sure to use the proper procedure.


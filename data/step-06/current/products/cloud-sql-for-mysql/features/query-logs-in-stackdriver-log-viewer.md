---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:52.002Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Query logs in Stackdriver Log Viewer"
feature_slug: "query-logs-in-stackdriver-log-viewer"
latest_feature_date: "2017-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups"
  - "https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv"
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
keywords:
  - "query"
  - "logs"
  - "stackdriver"
  - "log"
  - "viewer"
  - "sql"
  - "mysql"
  - "makes"
---

# Query logs in Stackdriver Log Viewer

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for MySQL makes general and slow query logs available through the Stackdriver Log Viewer.

## Extended Definition

Cloud SQL for MySQL makes general and slow query logs available through the Stackdriver Log Viewer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)

## Supporting Pages

### "View audit logs for automated backups \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/view-audit-logs-for-automated-backups)
- Source ID: `site-docs-reference-3`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click the metadata field. gcloud To filter for audit logs for automated backups of Cloud SQL instances, run the following query: gcloud logging read \ "logName=projects/ PROJECT NAME /logs/cloudaudit.googleapis.com%2Fsystem event AND protoPayload.methodName=cloudsql.instances.automatedBackup AND resource.type=cloudsql database" \ --project = PROJECT NAME Replace PROJECT NAME with your Google Cloud project's name.
- Go to Logs Explorer To filter for audit logs for automated backups of Cloud SQL instances, run the following query: logName = "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event" protoPayload.methodName = "cloudsql.instances.automatedBackup" resource.type = "cloudsql database" Replace PROJECT ID with your Google Cloud project's ID.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback View audit logs for automated backups Stay organized with collections Save and categorize content based on your preferences.
- For more information about how to use the Google Cloud console to query for audit logs, see View logs .

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-5`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Required roles To get the permissions that you need to use the Cloud SQL remote MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the remote Cloud SQL MCP server: Make MCP tool calls in a project: MCP Tool User ( roles/mcp.toolUser ) Create an OAuth client ID: OAuth Config Editor ( roles/oauthconfig.editor ) Create, clone, or update a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Create or update a Cloud SQL user: Cloud SQL Admin ( roles/cloudsql.admin ) Execute SQL queries in Cloud SQL: Cloud SQL Admin ( roles/cloudsql.admin ) Cloud SQL Studio User ( roles/cloudsql.StudioUser ) Get a Cloud SQL instance or list all Cloud SQL instances in a project: Cloud SQL Viewer ( roles/cloudsql.viewer ) Import data into a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Storage Admin ( roles/storage.admin ) List Cloud SQL users: Cloud SQL Viewer ( roles/cloudsql.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Sample prompt: "Create a new MySQL development instance and set up a table called products." Workflow: The workflow for setting up a web application might look like the following: Provisioning : The agent calls the create instance tool to create a new Cloud SQL instance with development environment-sized specifications.
- MySQL PostgreSQL SQL Server Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms , and the Additional Terms for Generative AI Preview Products .
- This document shows you how to use the Cloud SQL for MySQL remote Model Context Protocol (MCP) server to connect with AI applications including Gemini CLI, ChatGPT, Claude, and custom applications you are developing.

### "Export and import using CSV files \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, "0A" represents a new line. (optional) HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /export Request JSON body: { "exportContext": { "fileType": "CSV", "uri": "gs:// bucket name / path to csv file ", "databases": " database name ", "offload": true false "csvExportOptions": { "selectQuery": " select query ", "escapeCharacter": " escape character ", "quoteCharacter": " quote character ", "fieldsTerminatedBy": " fields terminated by ", "linesTerminatedBy": " lines terminated by " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For example, "0A" represents a new line. (optional) HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /export Request JSON body: { "exportContext": { "fileType": "CSV", "uri": "gs:// bucket name / path to csv file ", "databases": " database name ", "offload": true false "csvExportOptions": { "selectQuery":" select query ", "escapeCharacter":" escape character ", "quoteCharacter":" quote character ", "fieldsTerminatedBy":" fields terminated by ", "linesTerminatedBy":" lines terminated by " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /export" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } If your select query specifies a database, it overrides the databases property.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /export" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } If your select query specifies a database, it overrides the databases property.


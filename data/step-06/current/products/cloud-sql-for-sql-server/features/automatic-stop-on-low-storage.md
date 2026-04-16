---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.580Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Automatic stop on low storage"
feature_slug: "automatic-stop-on-low-storage"
latest_feature_date: "2021-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/flags"
keywords:
  - "automatic"
  - "stop"
  - "low"
  - "storage"
  - "sql"
  - "automatically"
  - "stops"
  - "database"
---

# Automatic stop on low storage

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL automatically stops a database instance when it is nearly out of storage capacity to prevent data loss.

## Extended Definition

Cloud SQL automatically stops a database instance when it is nearly out of storage capacity to prevent data loss.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)

## Supporting Pages

### "Export and import using BAK files and transaction log files \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak](https://docs.cloud.google.com/sql/docs/sqlserver/import-export/import-export-bak)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Import the data from the file: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID bucket name : The Cloud Storage bucket name path to folder : The path to the folder (in the Cloud Storage bucket) where the stripe set is located database name : The name of a database to create in your Cloud SQL instance true false : Set to true to use striped import HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import Request JSON body: { "importContext": { "fileType": "BAK", "uri": "gs:// bucket name / path to folder ", "database": " database name ", "bakImportOptions": { "striped": true false } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Import the data from the file: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID bucket name : The Cloud Storage bucket name path to folder : The path to the folder (in the Cloud Storage bucket) where the stripe set is located database name : The name of a database to create in your Cloud SQL instance true false : Set to true to use striped import HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /import Request JSON body: { "importContext": { "fileType": "BAK", "uri": "gs:// bucket name / path to folder ", "database": " database name ", "bakImportOptions": { "striped": true false } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: project-id : the project ID instance-id : the instance ID bucket name : the Cloud Storage bucket name path to bak file : the path to the BAK file database name : the name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import Request JSON body: { "importContext": { "fileType": "BAK", "uri": "gs:// bucket name / path to bak file ", "database": " database name " "bakImportOptions": { "bakType": "DIFF", "noRecovery": true, } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Import the data from the file: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID bucket name : The Cloud Storage bucket name path to bak file : The path to the BAK file database name : The name of a database inside the Cloud SQL instance HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /import Request JSON body: { "importContext": { "fileType": "BAK", "uri": "gs:// bucket name / path to bak file ", "database": " database name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Troubleshoot \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Temporary storage increased automatic storage.
- Check the endpoint's status. gcloud To check the status, use the gcloud compute forwarding-rules describe command. gcloud compute forwarding-rules describe ENDPOINT NAME \ --project = PROJECT ID \ --region = REGION NAME \ grep pscConnectionStatus Make the following replacements: ENDPOINT NAME : the name of the endpoint PROJECT ID : the ID or project number of the Google Cloud project that contains the endpoint REGION NAME : the region name for the endpoint REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint REGION NAME : the name of the region ENDPOINT NAME : the name of the endpoint HTTP method and URL: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Network attachments need to be configured to either accept all connections automatically, or configured manually with a list of accepted connections.
- If your instance runs out of storage, and the automatic storage increase capability isn't enabled, your instance goes offline.

### "Configure database flags \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 To clear all flags for an existing instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "databaseFlags": [] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 To set a flag for an existing database: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "databaseFlags": [ { "name": " flag name ", "value": " flag value " } ] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST v1beta4 To set a flag for an existing database: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "databaseFlags": [ { "name": " flag name ", "value": " flag value " } ] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST v1 To clear all flags for an existing instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id Request JSON body: { "settings": { "databaseFlags": [] } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .


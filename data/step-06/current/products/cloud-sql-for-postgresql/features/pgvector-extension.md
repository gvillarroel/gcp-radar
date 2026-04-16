---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.760Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pgvector extension"
feature_slug: "pgvector-extension"
latest_feature_date: "2024-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/ai-overview"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/configure-ha"
keywords:
  - "pgvector"
  - "vector"
  - "updated"
  - "available"
  - "extension"
  - "version"
---

# pgvector extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The pgvector PostgreSQL extension is available in Cloud SQL with support updated to version 0.8.0 for vector storage and similarity search; The pgvector PostgreSQL extension is available in Cloud SQL with support updated to version 0.7.4 for vector storage and search.

## Extended Definition

The pgvector PostgreSQL extension is available in Cloud SQL with support updated to version 0.8.0 for vector storage and similarity search; The pgvector PostgreSQL extension is available in Cloud SQL with support updated to version 0.7.4 for vector storage and search.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha)

## Supporting Pages

### "Enable and disable high availability \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/configure-ha](https://docs.cloud.google.com/sql/docs/postgres/configure-ha)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- You are returned to the instance page for the primary instance while the instance is updated. gcloud Create the regional instance: gcloud sql instances create REGIONAL INSTANCE NAME \ --availability-type = REGIONAL \ --database-version = DATABASE VERSION \ --cpu = NUMBER CPUS \ --memory = MEMORY SIZE For a complete list of available parameters, see the gcloud sql instances create reference page.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "POSTGRES 13" } Initiate the failover: Before using any of the request data, make the following replacements: project-id : The project ID instance-name : The instance name settings-version : The settingsVersion from instanceInfo HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-name /failover Request JSON body: { "failoverContext": { "settingsVersion":" settings-version " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "POSTGRES 13" } Initiate the failover: Before using any of the request data, make the following replacements: project-id : The project ID instance-name : The instance name settings-version : The settingsVersion from instanceInfo HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-name /failover Request JSON body: { "failoverContext": { "settingsVersion":" settings-version " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-name /failover" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-name ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE", "name": " operation-id ", "targetId": " instance-name ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } The instance fails over and it isn't available to serve data for a few minutes.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- To specify the user, run the following command: gcloud sql import sql INSTANCE URI [--async] [--database=DATABASE, -d DATABASE] [--user=USER] [GCLOUD WIDE FLAG …] Integrate with Vertex AI Issue Troubleshooting Error message: Google ML integration API is supported only on Postgres version 12 or above.
- Relevant log files include: cloudsql.googleapis.com/postgres.log If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.

### "Build generative AI applications using Cloud SQL \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Store, index, and query vector embeddings with pgvector You can store, index, and query vector embeddings in Cloud SQL by using the pgvector PostgreSQL extension.
- You can use the app to build a basic chatbot API that: Integrates GKE or Cloud Run with Cloud SQL, Vertex AI, and pgvector Demonstrates connectivity to Cloud SQL using Private Service Connect in a Virtual Private Cloud (VPC) Uses Terraform to configure your infrastructure Uses Python with asyncpg and FastAPI Supports setting up Cloud SQL and an app that runs on either GKE or Cloud Run in separate Google Cloud projects The solution contains the following contents: Terraform templates to set up your infrastructure with best practices for security A sample app for an LLM-powered Chatbot that you can deploy to GKE or Cloud Run What's next Integrate Cloud SQL with Vertex AI Work with vector embeddings Invoke online predictions from Cloud SQL instances Understand an example of an embedding workflow Build LLM-powered applications using LangChain Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information about storing, indexing, and querying vector embeddings, see Store a generated embedding and Query and index embeddings using pgvector .
- You can use these vector embeddings as inputs to pgvector functions for similarity and semantic searches.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.772Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "bloom extension"
feature_slug: "bloom-extension"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex"
keywords:
  - "methods"
  - "filters"
  - "bloom"
  - "indexes"
  - "provides"
  - "extension"
  - "based"
  - "access"
---

# bloom extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The bloom extension provides access methods for indexes based on Bloom filters.

## Extended Definition

The bloom extension provides access methods for indexes based on Bloom filters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "compute#forwardingRule", "id": " ENDPOINT ID ", "creationTimestamp": "2024-05-09T12:03:21.383-07:00", "name": " ENDPOINT NAME ", "region": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME ", "IPAddress": " IP ADDRESS ", "target": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /serviceAttachments/ SERVICE ATTACHMENT NAME ", "selfLink": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME ", "network": "https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/default", "serviceDirectoryRegistrations": [ { "namespace": "goog-psc-default" } ], "networkTier": "PREMIUM", "labelFingerprint": " LABEL FINGERPRINT ID ", "fingerprint": " FINGERPRINT ID ", "pscConnectionId": " CONNECTION ID ", "pscConnectionStatus": "ACCEPTED", "allowPscGlobalAccess": true } Verify that the status of the endpoint is ACCEPTED .
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME " PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Data-Access logs are only written if the operation is an authenticated user-driven API call that creates, modifies, or reads user-created data, or if the operation accesses configuration files or metadata of resources.

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To auto-generate bulk templates, perform the following steps: Run the /generate bulk templates command: /generate bulk templates Based on your database schema, the template-based SQL generation takes you through a series of questions related to verifying the database information and granting permissions to access the database schema.
- Install the DB Context Enrichment MCP extension The DB Context Enrichment extension provides a guided, interactive workflow to generate structured NL2SQL context from your database schemas.
- If you skip adding additional value indexes, the template-based SQL generation moves to the next step.
- Grant executesql permission to Cloud SQL instance To grant the executesql permission to Cloud SQL instance and enable the Cloud SQL Data API, run the following command: gcloud config set project PROJECT ID gcloud components update gcloud beta sql instances patch INSTANCE ID --data-api-access=ALLOW DATA API Replace the following: PROJECT ID : The ID of your Google Cloud project.

### "Build LLM-powered applications using LlamaIndex \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex)
- Source ID: `site-iam-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Document Reader interface provides methods to load data from a source as Documents .
- Store documents and indexes The Cloud SQL for PostgreSQL notebook for Document Stores shows you how to use Cloud SQL for PostgreSQL to store documents and indexes using the PostgresDocumentStore and PostgresIndexStore classes.
- You can process personal data for this feature as outlined in the Cloud Data Processing Addendum , subject to the obligations and restrictions described in the agreement under which you access Google Cloud.
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Build LLM-powered applications using LlamaIndex Stay organized with collections Save and categorize content based on your preferences.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.881Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Storage Insights dataset refresh tracking fields"
feature_slug: "storage-insights-dataset-refresh-tracking-fields"
latest_feature_date: "2025-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/audit-logging"
  - "https://docs.cloud.google.com/storage/docs/insights/v1"
  - "https://docs.cloud.google.com/storage/docs/access-logs"
  - "https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist"
keywords:
  - "storage"
  - "insights"
  - "dataset"
  - "refresh"
  - "tracking"
  - "fields"
  - "events"
  - "view"
---

# Storage Insights dataset refresh tracking fields

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Storage Insights events_view includes snapshotTime and eventCode fields to track dataset refresh timing.

## Extended Definition

Storage Insights events_view includes snapshotTime and eventCode fields to track dataset refresh timing.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- [https://docs.cloud.google.com/storage/docs/insights/v1](https://docs.cloud.google.com/storage/docs/insights/v1)
- [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)

## Supporting Pages

### Cloud Audit Logs with Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/audit-logging](https://docs.cloud.google.com/storage/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Audit log type Sub-type Cloud Storage operations Admin Activity ADMIN WRITE Setting bucket or managed folder IAM policies Setting object ACLs 1 Creating buckets Deleting buckets Restoring soft-deleted buckets Relocating buckets Updating bucket metadata Creating tag bindings on buckets Deleting tag bindings on buckets Creating managed folders Deleting managed folders Updating Storage Intelligence configuration for a project, a folder, or an organization Creating Rapid Cache caches Pausing Rapid Cache caches Resuming Rapid Cache caches Disabling Rapid Cache caches Updating Rapid Cache caches Creating HMAC keys Deleting HMAC keys Updating HMAC keys Cancelling long-running operations Deleting long-running operations Creating Storage Insights inventory report configurations Updating Storage Insights inventory report configurations Deleting Storage Insights inventory report configurations Creating Storage Insights dataset configurations Updating Storage Insights dataset configurations Deleting Storage Insights dataset configurations Linking Storage Insights dataset configurations Unlinking Storage Insights dataset configurations Data Access ADMIN READ Getting bucket or managed folder IAM policies Getting object ACLs Getting bucket metadata Listing buckets Listing tag bindings on buckets Listing effective tags on buckets Getting managed folder metadata Listing managed folders Getting Storage Intelligence configuration for a project, a folder, or an organization Getting Rapid Cache caches Listing Rapid Cache caches Getting HMAC keys Listing HMAC keys Getting long-running operations Listing long-running operations Getting Storage Insights inventory report configurations Listing Storage Insights inventory report configurations Getting Storage Insights inventory reports Listing Storage Insights inventory reports Getting Storage Insights dataset configurations Listing Storage Insights dataset configurations Data Access DATA READ Getting object data Getting object metadata Listing objects Getting folder metadata Listing folders Copying objects 2 Composing objects 2 Listing ongoing XML API multipart uploads Listing XML API multipart upload parts Data Access DATA WRITE Creating objects Deleting objects Deleting multiple objects using the XML API Restoring soft-deleted objects Moving objects Updating non-ACL object metadata Setting retentions for objects Overriding unlocked retentions for objects Copying objects 2 Composing objects 2 Initiating XML API multipart uploads Creating parts in an XML API multipart upload Aborting XML API multipart uploads Completing XML API multipart uploads Creating folders Deleting folders Renaming folders System Event Start of bucket relocate process 3 End of bucket relocate process 1 Admin Activity audit logs are not generated if/when ACLs are initially set at object creation.
- Example header entries The following list shows examples of key-value pairs you can include in header entries: x-goog-custom-audit-job: test-job-id-here x-goog-custom-audit-user: user ID test 1 x-goog-custom-audit-internal-user-id: MATR2022-11 x-goog-custom-audit-tracking-ticket: TT/1516512851 x-goog-custom-audit-justification: Removed customer identity record at customer request x-goog-custom-audit-customer-id: USCU12315154 Example requests Command line gcloud storage hash gs://example bucket/example object.jpeg --additional-headers=x-goog-custom-audit-job="job name",x-goog-custom-audit-user="test user" Client libraries C++ To learn how to add custom headers to requests, see Add custom headers .
- For example: gcloud storage sign-url gs://example bucket/example object.jpeg --private-key-file=example-key.json --duration=10m --query-params=x-goog-custom-audit-job=job name,x-goog-custom-audit-user=test user Example log entry protoPayload: { @type: "type.googleapis.com/google.cloud.audit.Auditlog", ... metadata: { audit context: { app context: "EXTERNAL", audit info: { x-goog-custom-audit-job: "job name", x-goog-custom-audit-user: "test user" } } } } For more information on the fields included in the protoPayload object with the type type.googleapis.com/google.cloud.audit.Auditlog , see the AuditLog reference documentation .
- Within the protoPayload field, additional audit information specific to Cloud Storage is included in the request and response fields when Detailed audit logging mode is enforced.

### Storage Insights API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/insights/v1](https://docs.cloud.google.com/storage/docs/insights/v1)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://storageinsights.googleapis.com REST Resource: v1.projects.locations Methods get GET /v1/{name=projects/ /locations/ } Gets information about a location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service.
- Provides insights capability on Google Cloud Storage Service: storageinsights.googleapis.com Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- Home Documentation Storage Cloud Storage Reference Send feedback Storage Insights API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v1.projects.locations.datasetConfigs Methods create POST /v1/{parent=projects/ /locations/ }/datasetConfigs Creates a dataset configuration in a given project for a given location. delete DELETE /v1/{name=projects/ /locations/ /datasetConfigs/ } Deletes a dataset configuration in a given project for a given location. get GET /v1/{name=projects/ /locations/ /datasetConfigs/ } Gets the dataset configuration in a given project for a given location. linkDataset POST /v1/{name=projects/ /locations/ /datasetConfigs/ }:linkDataset Links a dataset to BigQuery in a given project for a given location. list GET /v1/{parent=projects/ /locations/ }/datasetConfigs Lists the dataset configurations in a given project for a given location. patch PATCH /v1/{datasetConfig.name=projects/ /locations/ /datasetConfigs/ } Updates a dataset configuration in a given project for a given location. unlinkDataset POST /v1/{name=projects/ /locations/ /datasetConfigs/ }:unlinkDataset Unlinks a dataset from BigQuery in a given project for a given location.

### Usage logs & storage logs \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-logs](https://docs.cloud.google.com/storage/docs/access-logs)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Load the usage logs into the dataset. $ bq load --skip leading rows=1 storageanalysis.usage \ gs://example-logs-bucket/example-bucket usage 2014 01 15 14 00 00 1702e6 v0 \ ./cloud storage usage schema v0.json $ bq load --skip leading rows=1 storageanalysis.storage \ gs://example-logs-bucket/example-bucket storage 2014 01 05 14 00 00 091c5f v0 \ ./cloud storage storage schema v0.json These commands do the following: Load usage and storage logs from the bucket example-logs-bucket .
- In most cases, Cloud Audit Logs is the recommended method for generating logs that track API operations performed in Cloud Storage: Cloud Audit Logs tracks access on a continuous basis, with delivery of events within seconds of their occurrence.
- List the datasets in the project: $ bq ls datasetId ----------------- storageanalysis Save the usage and storage schemas to your local computer for use in the load command.
- Storage log fields: Field Type Description bucket string The name of the bucket. storage byte hours integer Average size in byte-hours over a 24 hour period of the bucket.

### "Analyze your stored data with Gemini Cloud Assist \_|\_ Cloud Storage \_\

- URL: [https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist](https://docs.cloud.google.com/storage/docs/analyze-data-gemini-cloud-assist)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To get the permissions that you need to get insights on bucket and object metadata, ask your administrator to grant you the following IAM roles on the project, folder, or organization that contains the datasets you want to analyze: BigQuery Job User ( roles/bigquery.jobUser ) BigQuery Data Viewer ( roles/bigquery.dataViewer ) Storage Insights Viewer ( roles/storageinsights.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The following data is not available in Storage Insights datasets, meaning that Gemini Cloud Assist lacks the proper context to respond to prompts relating to that data: Specific cost data, for example: "how much does my bucket cost per month".
- If you want to enter prompts related to specific buckets and objects, you must also complete the following prerequisite steps: Enable Storage Intelligence, which gives you access to using Storage Insights datasets.
- Gemini Cloud Assist can use the metadata contained in Storage Insights datasets to generate insights , which are responses to prompts about your bucket and object metadata and usage.


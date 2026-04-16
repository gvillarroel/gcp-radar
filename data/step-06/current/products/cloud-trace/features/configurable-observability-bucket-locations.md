---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.995Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Configurable observability bucket locations"
feature_slug: "configurable-observability-bucket-locations"
latest_feature_date: "2026-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset"
  - "https://docs.cloud.google.com/trace/docs/storage-manage"
  - "https://docs.cloud.google.com/trace/docs/troubleshooting"
  - "https://docs.cloud.google.com/trace/docs/analytics-samples"
keywords:
  - "configurable"
  - "observability"
  - "bucket"
  - "locations"
  - "buckets"
  - "for"
  - "trace"
  - "can"
---

# Configurable observability bucket locations

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Observability buckets for trace data can be configured in specific multi-region and regional locations.

## Extended Definition

Observability buckets for trace data can be configured in specific multi-region and regional locations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- [https://docs.cloud.google.com/trace/docs/troubleshooting](https://docs.cloud.google.com/trace/docs/troubleshooting)
- [https://docs.cloud.google.com/trace/docs/analytics-samples](https://docs.cloud.google.com/trace/docs/analytics-samples)

## Supporting Pages

### Analyze trace data with BigQuery \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- Source ID: `site-docs-root-2`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the gcloud beta observability buckets datasets links create command: Linux, macOS, or Cloud Shell gcloud beta observability buckets datasets links create \ projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID \ --dataset = DATASET ID \ --bucket = BUCKET ID \ --location = LOCATION \ --project = PROJECT ID Windows (PowerShell) gcloud beta observability buckets datasets links create projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID --dataset = DATASET ID --bucket = BUCKET ID --location = LOCATION ` --project = PROJECT ID Windows (cmd.exe) gcloud beta observability buckets datasets links create ^ projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID ^ --dataset = DATASET ID ^ --bucket = BUCKET ID ^ --location = LOCATION ^ --project = PROJECT ID The create command initiates a long-running operation.
- The value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /dataset/ DATASET ID /links/ LINK ID The value you provide for the name field must match the linked BigQuery dataset referenced by the query parameter.
- You must specify the parent parameter, which has the following form: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID The fields in the previous expression have the following meaning: PROJECT ID : The identifier of the project.
- Queries that are run on the BigQuery engine can query observability views, views on log buckets, and analytics views.

### Manage trace storage \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- Source ID: `site-docs-root-2`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each object, the value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /dataset/ DATASET ID For example, when a command was issued to the buckets.datasets.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace , the response was: { "datasets": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans", "description": "Trace Spans", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } You can issue commands to other Observability API endpoints to get information about the dataset whose ID is DATASET ID .
- For each object, the value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID For example, when a command was issued to the buckets.list endpoint with the parent parameter set to projects/my-project/locations/us , the response was: { "buckets": [ { "name": "projects/my-project/locations/us/buckets/ Trace", "description": "Trace Bucket", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", "retentionDays": 30 } ] } You can issue commands to other Observability API endpoints to get more information about the bucket whose ID is BUCKET ID .
- For example, when a command was issued to the buckets.datasets.views.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views , the response was: { "views": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views/ AllSpans", "filter": "", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .
- For example, when a command was issued to the buckets.datasets.links.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links , the response was: { "links": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links/my link", "description": "My link for traces to BigQuery", "createTime": "2025-01-12T15:42:30.988919645Z" } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .

### Troubleshoot \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/troubleshooting](https://docs.cloud.google.com/trace/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To determine whether an observability bucket exists for your trace data, you can either list your observability buckets or you can open the Trace Explorer page.
- Error message stating a view does not exist You enter a SQL query in the query pane of the Observability Analytics page, but the SQL parser displays the following error: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /views/ OBS VIEW ID does not exist The previous error is reported when the view specified in the FROM statement can't be found.
- You can join views on those buckets when, for that organization, you've configured the default resource settings for Cloud Logging and for observability buckets with the same default Cloud KMS key for the storage location.
- To provision a observability bucket for your trace data, go to the banner and click Enable .

### Sample SQL queries for Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics-samples](https://docs.cloud.google.com/trace/docs/analytics-samples)
- Source ID: `site-docs-root-2`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can join views on those buckets when, for that organization, you've configured the default resource settings for Cloud Logging and for observability buckets with the same default Cloud KMS key for the storage location.
- Home Documentation Observability Cloud Trace Guides Send feedback Sample SQL queries for Trace Stay organized with collections Save and categorize content based on your preferences.
- For example, suppose that the resource hierarchy for a log bucket and observability bucket includes the same organization.
- Trace is the name of the observability bucket Spans is the name of the dataset.


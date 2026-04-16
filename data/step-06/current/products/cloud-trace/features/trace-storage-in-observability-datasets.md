---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:48.996Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace storage in observability datasets"
feature_slug: "trace-storage-in-observability-datasets"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/trace/docs/storage-manage"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
  - "https://docs.cloud.google.com/trace/docs/storage-overview"
  - "https://docs.cloud.google.com/trace/docs/analytics"
keywords:
  - "trace"
  - "storage"
  - "in"
  - "observability"
  - "datasets"
  - "stores"
  - "an"
  - "dataset"
---

# Trace storage in observability datasets

Product: Cloud Trace
Coverage: MEDIUM

## Step 02 Summary

Cloud Trace stores trace data in an observability dataset that can be linked for querying with services such as BigQuery.

## Extended Definition

Cloud Trace stores trace data in an observability dataset that can be linked for querying with services such as BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- [https://docs.cloud.google.com/trace/docs/storage-overview](https://docs.cloud.google.com/trace/docs/storage-overview)
- [https://docs.cloud.google.com/trace/docs/analytics](https://docs.cloud.google.com/trace/docs/analytics)

## Supporting Pages

### Manage trace storage \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- Source ID: `site-docs-root-2`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For each object, the value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /dataset/ DATASET ID For example, when a command was issued to the buckets.datasets.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace , the response was: { "datasets": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans", "description": "Trace Spans", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } You can issue commands to other Observability API endpoints to get information about the dataset whose ID is DATASET ID .
- For example, when a command was issued to the buckets.datasets.views.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views , the response was: { "views": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views/ AllSpans", "filter": "", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .
- For example, when a command was issued to the buckets.datasets.links.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links , the response was: { "links": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links/my link", "description": "My link for traces to BigQuery", "createTime": "2025-01-12T15:42:30.988919645Z" } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .
- The following is an example of a response when the command is successful: --- createTime: '2026-01-21T21:39:22.381083860Z' description: Dataset for storing spans from Cloud Trace. name: projects/my-project/locations/us/buckets/ Trace/datasets/Spans REST To list the datasets for an observability bucket, send a request to the projects.locations.buckets.datasets.list endpoint.

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a linked dataset on your log bucket To determine whether the log bucket that stores your log data is upgraded for Observability Analytics, run the following command: gcloud logging buckets describe LOG BUCKET ID --location = LOCATION Replace the following before you run the command: LOG BUCKET ID : The ID of the log bucket.
- Go to the section titled Load in Google Observability Gen AI datasets and enter values for the following sources: INPUT SOURCE OUTPUT SOURCE SYSTEM SOURCE You can find values for these fields by using the gen ai labels that are attached to your log entries.
- To run evaluations by using a Google Colaboratory notebook, do the following: To view an example notebook, click evaluating observability datasets.ipynb .
- Colaboratory opens and displays the evaluating observability datasets.ipynb file.

### Trace storage overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/storage-overview](https://docs.cloud.google.com/trace/docs/storage-overview)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Observability storage model The Observability API storage model relies on the following architecture: Observability buckets An observability bucket is the management entity for datasets, which store data.
- Storage configuration for trace data Your trace data is stored in an observability bucket named Trace .
- Data residency for observability buckets If you have compliance or regulatory requirements to store your data in specific locations or to use CMEK, then we recommend that you configure default settings for observability buckets: For organizations, folders, and projects, default settings for observability buckets let you configure the following: A default storage location.
- The system tries to create the observability bucket named Trace when the bucket doesn't exist and either of the following are true: An application sends trace data to your Google Cloud project by using the Cloud Trace API or the Telemetry API.

### Query and analyze traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics](https://docs.cloud.google.com/trace/docs/analytics)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About linked BigQuery datasets You don't need a linked BigQuery dataset to query your trace data, or to query your trace and log data.
- You do need a linked BigQuery dataset when you want to do any of the following: Join trace data with other BigQuery datasets.
- Enable the API To get the permissions that you need to load the Observability Analytics page, write, run, and save private queries on your trace data, ask your administrator to grant you the following IAM roles: Observability View Accessor ( roles/observability.viewAccessor ) on the observability views that you want to query.
- This document describes how to query and analyze your trace data by using Observability Analytics, which provides a SQL -based query interface.


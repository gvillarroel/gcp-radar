---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.824Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Configurable observability bucket locations"
feature_slug: "configurable-observability-bucket-locations"
latest_feature_date: "2026-02-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset"
  - "https://docs.cloud.google.com/trace/docs/storage-manage"
  - "https://docs.cloud.google.com/trace/docs/release-notes"
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
Coverage: LOW

## Step 02 Summary

Observability buckets for trace data can be configured in specific multi-region and regional locations.

## Extended Definition

Observability buckets for trace data can be configured in specific multi-region and regional locations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)

## Supporting Pages

### Analyze trace data with BigQuery \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the gcloud beta observability buckets datasets links create command: Linux, macOS, or Cloud Shell gcloud beta observability buckets datasets links create \ projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID \ --dataset = DATASET ID \ --bucket = BUCKET ID \ --location = LOCATION \ --project = PROJECT ID Windows (PowerShell) gcloud beta observability buckets datasets links create projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID --dataset = DATASET ID --bucket = BUCKET ID --location = LOCATION ` --project = PROJECT ID Windows (cmd.exe) gcloud beta observability buckets datasets links create ^ projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID ^ --dataset = DATASET ID ^ --bucket = BUCKET ID ^ --location = LOCATION ^ --project = PROJECT ID The create command initiates a long-running operation.
- The value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /dataset/ DATASET ID /links/ LINK ID The value you provide for the name field must match the linked BigQuery dataset referenced by the query parameter.
- You must specify the parent parameter, which has the following form: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID The fields in the previous expression have the following meaning: PROJECT ID : The identifier of the project.
- Queries that are run on the BigQuery engine can query observability views, views on log buckets, and analytics views.

### Manage trace storage \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For each object, the value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /dataset/ DATASET ID For example, when a command was issued to the buckets.datasets.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace , the response was: { "datasets": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans", "description": "Trace Spans", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } You can issue commands to other Observability API endpoints to get information about the dataset whose ID is DATASET ID .
- For each object, the value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID For example, when a command was issued to the buckets.list endpoint with the parent parameter set to projects/my-project/locations/us , the response was: { "buckets": [ { "name": "projects/my-project/locations/us/buckets/ Trace", "description": "Trace Bucket", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", "retentionDays": 30 } ] } You can issue commands to other Observability API endpoints to get more information about the bucket whose ID is BUCKET ID .
- For example, when a command was issued to the buckets.datasets.views.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views , the response was: { "views": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views/ AllSpans", "filter": "", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .
- For example, when a command was issued to the buckets.datasets.links.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links , the response was: { "links": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links/my link", "description": "My link for traces to BigQuery", "createTime": "2025-01-12T15:42:30.988919645Z" } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .

### Trace release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/release-notes](https://docs.cloud.google.com/trace/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- March 19, 2026 Feature Google Cloud Observability has expanded the supported locations for observability buckets, which store your trace data, to include the following: africa-south1 asia-east1 asia-east2 asia-northeast2 asia-northeast3 asia-south1 asia-south2 asia-southeast2 asia-southeast3 australia-southeast2 europe-north2 europe-west1 europe-west4 europe-west6 europe-west8 me-central1 northamerica-northeast2 northamerica-south1 southamerica-west1 us-east5 us-south1 us-west2 us-west3 For a list of supported locations, see Locations for observability buckets .
- Feature You can now configure observability buckets to be in the following locations : us eu us-central1 us-west1 Your trace data is stored in an observability bucket.
- February 26, 2026 Feature For organizations, folders, and projects, you can now configure default settings for observability buckets.
- April 08, 2026 Feature Google Cloud CLI lets you configure trace scopes, manage observability buckets, and set default observability settings.


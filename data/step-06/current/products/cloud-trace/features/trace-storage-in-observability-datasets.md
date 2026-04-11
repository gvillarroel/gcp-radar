---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:17:36.826Z"
product_name: "Cloud Trace"
product_slug: "cloud-trace"
feature_name: "Trace storage in observability datasets"
feature_slug: "trace-storage-in-observability-datasets"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/trace/docs/storage-manage"
  - "https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses"
  - "https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset"
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
Coverage: LOW

## Step 02 Summary

Cloud Trace stores trace data in an observability dataset that can be linked for querying with services such as BigQuery.

## Extended Definition

Cloud Trace stores trace data in an observability dataset that can be linked for querying with services such as BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)

## Supporting Pages

### Manage trace storage \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/storage-manage](https://docs.cloud.google.com/trace/docs/storage-manage)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For each object, the value of the name field has the following format: projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /dataset/ DATASET ID For example, when a command was issued to the buckets.datasets.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace , the response was: { "datasets": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans", "description": "Trace Spans", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } You can issue commands to other Observability API endpoints to get information about the dataset whose ID is DATASET ID .
- For example, when a command was issued to the buckets.datasets.views.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views , the response was: { "views": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/views/ AllSpans", "filter": "", "createTime": "2025-01-01T15:42:30.988919645Z", "updateTime": "2025-02-04T15:42:30.988919645Z", } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .
- For example, when a command was issued to the buckets.datasets.links.list endpoint with the parent parameter set to projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links , the response was: { "links": [ { "name": "projects/my-project/locations/us/buckets/ Trace/datasets/Spans/links/my link", "description": "My link for traces to BigQuery", "createTime": "2025-01-12T15:42:30.988919645Z" } ] } For a complete list of Observability API endpoints, see the Observability API reference documentation .
- The following is an example of a response when the command is successful: --- createTime: '2026-01-21T21:39:22.381083860Z' description: Dataset for storing spans from Cloud Trace. name: projects/my-project/locations/us/buckets/ Trace/datasets/Spans REST To list the datasets for an observability bucket, send a request to the projects.locations.buckets.datasets.list endpoint.

### "Collect and view multimodal prompts and responses \_|\_ Cloud Trace \_|\_\

- URL: [https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses](https://docs.cloud.google.com/trace/docs/collect-view-multimodal-prompts-responses)
- Source ID: `site-docs-root-2`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a linked dataset on your log bucket To determine whether the log bucket that stores your log data is upgraded for Observability Analytics, run the following command: gcloud logging buckets describe LOG BUCKET ID --location = LOCATION Replace the following before you run the command: LOG BUCKET ID : The ID of the log bucket.
- Go to the section titled Load in Google Observability Gen AI datasets and enter values for the following sources: INPUT SOURCE OUTPUT SOURCE SYSTEM SOURCE You can find values for these fields by using the gen ai labels that are attached to your log entries.
- To run evaluations by using a Google Colaboratory notebook, do the following: To view an example notebook, click evaluating observability datasets.ipynb .
- Colaboratory opens and displays the evaluating observability datasets.ipynb file.

### Analyze trace data with BigQuery \_|\_ Cloud Trace \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- Source ID: `site-docs-root-2`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the gcloud beta observability buckets datasets links create command: Linux, macOS, or Cloud Shell gcloud beta observability buckets datasets links create \ projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID \ --dataset = DATASET ID \ --bucket = BUCKET ID \ --location = LOCATION \ --project = PROJECT ID Windows (PowerShell) gcloud beta observability buckets datasets links create projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID --dataset = DATASET ID --bucket = BUCKET ID --location = LOCATION ` --project = PROJECT ID Windows (cmd.exe) gcloud beta observability buckets datasets links create ^ projects/ PROJECT ID /locations/ LOCATION /buckets/ BUCKET ID /datasets/ DATASET ID /links/ LINK ID ^ --dataset = DATASET ID ^ --bucket = BUCKET ID ^ --location = LOCATION ^ --project = PROJECT ID The create command initiates a long-running operation.
- You do need a linked BigQuery dataset when you want to do any of the following: Join trace data with other BigQuery datasets.
- To get the permissions that you need to create a link on an observability dataset, ask your administrator to grant you the following IAM roles on your project: Observability Editor ( roles/observability.editor ) BigQuery User ( roles/bigquery.user ) Logs Viewer ( roles/logging.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Use BigQuery Studio To open BigQuery from the Observability Analytics page and then query your trace data, do the following: In the Google Cloud console, go to the manage search Log Analytics page: Go to Log Analytics If you use the search bar to find this page, then select the result whose subheading is Logging .


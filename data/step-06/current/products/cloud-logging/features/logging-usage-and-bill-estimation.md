---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.571Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logging usage and bill estimation"
feature_slug: "logging-usage-and-bill-estimation"
latest_feature_date: "2018-05-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "logging"
  - "usage"
  - "and"
  - "bill"
  - "estimation"
  - "shows"
  - "estimated"
  - "billing"
---

# Logging usage and bill estimation

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging shows usage and estimated billing under the new Stackdriver pricing model.

## Extended Definition

Cloud Logging shows usage and estimated billing under the new Stackdriver pricing model.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)

## Supporting Pages

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/gcloud-logging](https://docs.cloud.google.com/logging/docs/api/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Examples Write a log entry to log my-test-log in the current project with a plain-text payload and a severity of ERROR : gcloud logging write my - test - log "A simple entry" -- severity = ERROR Write a log entry with a structured (JSON) payload: gcloud logging write my - test - log '{ "message": "My second entry", "weather": "partly cloudy"}' -- payload - type = json Write a log entry to a folder, billing account, or organization.
- Use the gcloud logging sinks command group, corresponding to the API methods projects.sinks , folders.sinks , billingAccounts.sinks , and organizations.sinks .
- Show only the metric name and its description: gcloud logging metrics list --filter="metricDescriptor.valueType=DISTRIBUTION" --format="table(name,description)" Result: NAME DESCRIPTION myapp/request latency Request latency for myapp bigquery billed bytes Billed Bytes food latency How long does it take to service all food requests healthz latencies /healthz latencies in microseconds latency on food Tracking latency on food requests lines written my latency metric no-match-dist-metric pizza latency How long does it take to service pizza requests?
- Examples Change the query in my-distribution-metric : gcloud logging metrics update my - distribution - metric --log-filter="[NEW LOG FILTER]" Listing and describing metrics Use gcloud logging metrics list , corresponding to the API method projects.metrics.list , and gcloud logging metrics describe , corresponding to the API method projects.metrics.get : gcloud logging metrics list ... gcloud logging metrics describe METRIC NAME The metrics list command by defaults shows the full description of every listed metric.

### Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging](https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Examples Write a log entry to log my-test-log in the current project with a plain-text payload and a severity of ERROR : gcloud logging write my - test - log "A simple entry" -- severity = ERROR Write a log entry with a structured (JSON) payload: gcloud logging write my - test - log '{ "message": "My second entry", "weather": "partly cloudy"}' -- payload - type = json Write a log entry to a folder, billing account, or organization.
- Use the gcloud logging sinks command group, corresponding to the API methods projects.sinks , folders.sinks , billingAccounts.sinks , and organizations.sinks .
- Show only the metric name and its description: gcloud logging metrics list --filter="metricDescriptor.valueType=DISTRIBUTION" --format="table(name,description)" Result: NAME DESCRIPTION myapp/request latency Request latency for myapp bigquery billed bytes Billed Bytes food latency How long does it take to service all food requests healthz latencies /healthz latencies in microseconds latency on food Tracking latency on food requests lines written my latency metric no-match-dist-metric pizza latency How long does it take to service pizza requests?
- Examples Change the query in my-distribution-metric : gcloud logging metrics update my - distribution - metric --log-filter="[NEW LOG FILTER]" Listing and describing metrics Use gcloud logging metrics list , corresponding to the API method projects.metrics.list , and gcloud logging metrics describe , corresponding to the API method projects.metrics.get : gcloud logging metrics list ... gcloud logging metrics describe METRIC NAME The metrics list command by defaults shows the full description of every listed metric.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- May 17, 2018 Feature You can now see your Logging usage and estimate your bill according to the new Stackdriver pricing and in advance of billing enforcement.
- Feature Exporting logs from organizations, folders, and billing accounts : The gcloud logging command-line tool now supports creating log sinks to export audit logs from organizations, folders, and billing accounts.
- March 29, 2023 Change When you create a log view and use the source() function in your filter, the argument to the function is now validated to ensure that it is a single string representing a project, folder, billing account or organization.
- Feature Aggregated exports of logs : You can now create log sinks in organizations, billing accounts, and folders.


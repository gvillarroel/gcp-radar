---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.423Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Event-driven BigQuery transfers from Cloud Storage"
feature_slug: "event-driven-bigquery-transfers-from-cloud-storage"
latest_feature_date: "2025-05-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "event-driven transfers"
  - "transfer runs on modified object"
  - "bucket change trigger"
  - "event-driven transfer"
  - "Cloud Storage transfer trigger"
  - "Cloud Storage trigger transfer"
  - "BigQuery transfer on object add"
  - "automatic transfer run"
---

# Event-driven BigQuery transfers from Cloud Storage

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports event-driven transfers from Cloud Storage that automatically trigger transfer runs when bucket data is modified or added.

## Extended Definition

Event-driven BigQuery transfers from Cloud Storage is a transfer mechanism in which Cloud Storage to BigQuery transfers can be configured to run automatically when source bucket data changes. According to the release notes, these transfers trigger transfer runs when objects in the Cloud Storage bucket are modified or added.

## Evidence Summary

The BigQuery release notes confirm the feature exists and that it supports automatic, event-driven transfer runs on Cloud Storage object add/modify events.

## Source Links

- [https://cloud.google.com/bigquery/docs/release-notes](https://cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Event-driven transfers can automatically trigger transfer runs when data in your Cloud Storage bucket has been modified or added.
- Feature You can now create event-driven transfers when transferring data from Cloud Storage to BigQuery.


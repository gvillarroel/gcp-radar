---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:41.822Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "bq load max_polling_interval_ms"
feature_slug: "bq-load-max-polling-interval-ms"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/release-notes"
keywords:
  - "bq"
  - "load"
  - "max"
  - "polling"
  - "interval"
  - "ms"
  - "the"
  - "command"
---

# bq load max_polling_interval_ms

Product: Mainframe Connector
Coverage: LOW

## Step 02 Summary

The bq load command can wait up to a configurable max_polling_interval_ms for BigQuery jobs.

## Extended Definition

The bq load command can wait up to a configurable max_polling_interval_ms for BigQuery jobs.

## Evidence Summary

Fast-mode lexical matching selected 1 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)

## Supporting Pages

### Mainframe Connector release notes | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Connector release notes Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/release-notes Supports configuring the maximum time you want Mainframe Connector to wait for a BigQuery job to complete using a new flag max polling interval ms with the bq load command.
- For more granular control over data transfer, you can now specify chunk sizes below 64MiB using the maxChunkSize flag with the gsutil cp command. ...
- The default value is 60000 milliseconds (1 minute).


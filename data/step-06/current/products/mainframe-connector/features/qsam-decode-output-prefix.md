---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:41.815Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "QSAM decode output prefix"
feature_slug: "qsam-decode-output-prefix"
latest_feature_date: "2025-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/release-notes"
  - "https://docs.cloud.google.com/mainframe-connector/docs/architecture"
keywords:
  - "qsam"
  - "decode"
  - "output"
  - "prefix"
  - "the"
  - "command"
  - "can"
  - "use"
---

# QSAM decode output prefix

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The QSAM decode command can use a configurable prefix for output and spillover files.

## Extended Definition

The QSAM decode command can use a configurable prefix for output and spillover files.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- [https://docs.cloud.google.com/mainframe-connector/docs/architecture](https://docs.cloud.google.com/mainframe-connector/docs/architecture)

## Supporting Pages

### Mainframe Connector release notes | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- For more granular control over data transfer, you can now specify chunk sizes below 64MiB using the maxChunkSize flag with the gsutil cp command. ...
- Mainframe Connector release notes Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/release-notes Supports configuring the maximum time you want Mainframe Connector to wait for a BigQuery job to complete using a new flag max polling interval ms with the bq load command.
- The default value is 60000 milliseconds (1 minute).

### Mainframe Connector architecture | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/architecture](https://docs.cloud.google.com/mainframe-connector/docs/architecture)
- Source ID: `site-docs-root`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- A job control language (JCL) procedure is the frontend that you can use to call Mainframe Connector.
- Mainframe Connector architecture Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/architecture As the application is self contained, you need to only install IBM JRE version 8 or IBM JRE version 17 to deploy Mainframe Connector.
- The following image gives an overview of Mainframe Connector ...


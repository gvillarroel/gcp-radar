---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:41.834Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "BigQuery DATE and TIMESTAMP types"
feature_slug: "bigquery-date-and-timestamp-types"
latest_feature_date: "2024-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/release-notes"
  - "https://docs.cloud.google.com/mainframe-connector/docs/get-started"
  - "https://docs.cloud.google.com/mainframe-connector/docs/reference"
keywords:
  - "date"
  - "and"
  - "timestamp"
  - "types"
  - "the"
  - "connector"
  - "supports"
  - "with"
---

# BigQuery DATE and TIMESTAMP types

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The connector supports BigQuery DATE and TIMESTAMP types with configurable field suffix and format patterns.

## Extended Definition

The connector supports BigQuery DATE and TIMESTAMP types with configurable field suffix and format patterns.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- [https://docs.cloud.google.com/mainframe-connector/docs/get-started](https://docs.cloud.google.com/mainframe-connector/docs/get-started)
- [https://docs.cloud.google.com/mainframe-connector/docs/reference](https://docs.cloud.google.com/mainframe-connector/docs/reference)

## Supporting Pages

### Mainframe Connector release notes | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mainframe Connector release notes Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/release-notes Supports configuring the maximum time you want Mainframe Connector to wait for a BigQuery job to complete using a new flag max polling interval ms with the bq load command.
- For more granular control over data transfer, you can now specify chunk sizes below 64MiB using the maxChunkSize flag with the gsutil cp command. ...
- The default value is 60000 milliseconds (1 minute).
- Fixed Mainframe file handling leaks.

### Get started with Mainframe Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/get-started](https://docs.cloud.google.com/mainframe-connector/docs/get-started)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get started with Mainframe Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/get-started Before you install Mainframe Connector, you must perform the initial setup, including granting the required roles to your service account, setting up security for your assets, and setting up network connectivity between your mainframe and Google Cloud.

### Mainframe Connector reference | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/reference](https://docs.cloud.google.com/mainframe-connector/docs/reference)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Mainframe Connector reference Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/reference To configure Mainframe Connector to write to Cloud Logging, set the LOG PROJECT and LOG ID environment variables in the JCL that launches the job.
- For example, LOG PROJECT=mainframe-connector-proj and LOG ID=my-mfc.


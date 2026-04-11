---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:41.828Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "gsutil cp input and copybook DSN parameters"
feature_slug: "gsutil-cp-input-and-copybook-dsn-parameters"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/release-notes"
  - "https://docs.cloud.google.com/mainframe-connector/docs/reference"
keywords:
  - "gsutil"
  - "cp"
  - "input"
  - "and"
  - "copybook"
  - "dsn"
  - "parameters"
  - "the"
---

# gsutil cp input and copybook DSN parameters

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The gsutil cp command accepts inDsn and cobDsn parameters.

## Extended Definition

The gsutil cp command accepts inDsn and cobDsn parameters.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- [https://docs.cloud.google.com/mainframe-connector/docs/reference](https://docs.cloud.google.com/mainframe-connector/docs/reference)

## Supporting Pages

### Mainframe Connector release notes | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- For more granular control over data transfer, you can now specify chunk sizes below 64MiB using the maxChunkSize flag with the gsutil cp command. ...
- Mainframe Connector release notes Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/release-notes Supports configuring the maximum time you want Mainframe Connector to wait for a BigQuery job to complete using a new flag max polling interval ms with the bq load command.
- The default value is 60000 milliseconds (1 minute).
- Fixed Mainframe file handling leaks.

### Mainframe Connector reference | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/reference](https://docs.cloud.google.com/mainframe-connector/docs/reference)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Connector reference Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/reference To configure Mainframe Connector to write to Cloud Logging, set the LOG PROJECT and LOG ID environment variables in the JCL that launches the job.
- For example, LOG PROJECT=mainframe-connector-proj and LOG ID=my-mfc.


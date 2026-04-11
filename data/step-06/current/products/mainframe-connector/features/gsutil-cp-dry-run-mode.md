---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:41.825Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "gsutil cp dry-run mode"
feature_slug: "gsutil-cp-dry-run-mode"
latest_feature_date: "2024-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/release-notes"
  - "https://docs.cloud.google.com/mainframe-connector/docs/configurations"
keywords:
  - "gsutil"
  - "cp"
  - "dry"
  - "run"
  - "mode"
  - "the"
  - "command"
  - "supports"
---

# gsutil cp dry-run mode

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The gsutil cp command supports dry-run mode when importing data to BigQuery.

## Extended Definition

The gsutil cp command supports dry-run mode when importing data to BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 2 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- [https://docs.cloud.google.com/mainframe-connector/docs/configurations](https://docs.cloud.google.com/mainframe-connector/docs/configurations)

## Supporting Pages

### Mainframe Connector release notes | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- For more granular control over data transfer, you can now specify chunk sizes below 64MiB using the maxChunkSize flag with the gsutil cp command. ...
- Mainframe Connector release notes Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/release-notes Supports configuring the maximum time you want Mainframe Connector to wait for a BigQuery job to complete using a new flag max polling interval ms with the bq load command.
- The default value is 60000 milliseconds (1 minute).

### Choose your data migration journey | Mainframe Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/configurations](https://docs.cloud.google.com/mainframe-connector/docs/configurations)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Choose your data migration journey Mainframe Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/configurations You can run Mainframe Connector in the following configurations based on your requirements: Transcode mainframe data locally on the mainframe, and then migrate it to Google Cloud.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:41.816Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "DecodeAsNull and EncodeNullAs field modifiers"
feature_slug: "decodeasnull-and-encodenullas-field-modifiers"
latest_feature_date: "2025-06-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/configurations"
  - "https://docs.cloud.google.com/mainframe-connector/docs/release-notes"
  - "https://docs.cloud.google.com/mainframe-connector/docs/reference"
keywords:
  - "decodeasnull"
  - "and"
  - "encodenullas"
  - "field"
  - "modifiers"
  - "the"
  - "transcoder"
  - "configuration"
---

# DecodeAsNull and EncodeNullAs field modifiers

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The transcoder configuration includes DecodeAsNull and EncodeNullAs modifiers for null handling.

## Extended Definition

The transcoder configuration includes DecodeAsNull and EncodeNullAs modifiers for null handling.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/configurations](https://docs.cloud.google.com/mainframe-connector/docs/configurations)
- [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- [https://docs.cloud.google.com/mainframe-connector/docs/reference](https://docs.cloud.google.com/mainframe-connector/docs/reference)

## Supporting Pages

### Choose your data migration journey | Mainframe Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/configurations](https://docs.cloud.google.com/mainframe-connector/docs/configurations)
- Source ID: `site-docs-root`
- Final score: 37
- Re-rank relevance: N/A

Evidence snippets:
- Choose your data migration journey Mainframe Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/configurations You can run Mainframe Connector in the following configurations based on your requirements: Transcode mainframe data locally on the mainframe, and then migrate it to Google Cloud.

### Mainframe Connector release notes | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Connector release notes Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/release-notes Supports configuring the maximum time you want Mainframe Connector to wait for a BigQuery job to complete using a new flag max polling interval ms with the bq load command.
- For more granular control over data transfer, you can now specify chunk sizes below 64MiB using the maxChunkSize flag with the gsutil cp command. ...
- The default value is 60000 milliseconds (1 minute).
- Fixed Mainframe file handling leaks.

### Mainframe Connector reference | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/reference](https://docs.cloud.google.com/mainframe-connector/docs/reference)
- Source ID: `site-docs-root`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Connector reference Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/reference To configure Mainframe Connector to write to Cloud Logging, set the LOG PROJECT and LOG ID environment variables in the JCL that launches the job.
- For example, LOG PROJECT=mainframe-connector-proj and LOG ID=my-mfc.


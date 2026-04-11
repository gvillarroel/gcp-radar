---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:41.827Z"
product_name: "Mainframe Connector"
product_slug: "mainframe-connector"
feature_name: "Empty values as null feature flag"
feature_slug: "empty-values-as-null-feature-flag"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/mainframe-connector/docs/release-notes"
  - "https://docs.cloud.google.com/mainframe-connector/docs/configurations"
  - "https://docs.cloud.google.com/mainframe-connector/docs/architecture"
keywords:
  - "empty"
  - "values"
  - "as"
  - "null"
  - "flag"
  - "the"
  - "bqsh"
  - "are"
---

# Empty values as null feature flag

Product: Mainframe Connector
Coverage: MEDIUM

## Step 02 Summary

The BQSH_FEATURE_EMPTY_VALUES_ARE_NULL flag treats empty values as null when BQSH_FEATURE_FAIL_ON_INVALID_DATA is enabled.

## Extended Definition

The BQSH_FEATURE_EMPTY_VALUES_ARE_NULL flag treats empty values as null when BQSH_FEATURE_FAIL_ON_INVALID_DATA is enabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- [https://docs.cloud.google.com/mainframe-connector/docs/configurations](https://docs.cloud.google.com/mainframe-connector/docs/configurations)
- [https://docs.cloud.google.com/mainframe-connector/docs/architecture](https://docs.cloud.google.com/mainframe-connector/docs/architecture)

## Supporting Pages

### Mainframe Connector release notes | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/release-notes](https://docs.cloud.google.com/mainframe-connector/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Connector release notes Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/release-notes Supports configuring the maximum time you want Mainframe Connector to wait for a BigQuery job to complete using a new flag max polling interval ms with the bq load command.
- For more granular control over data transfer, you can now specify chunk sizes below 64MiB using the maxChunkSize flag with the gsutil cp command. ...
- The default value is 60000 milliseconds (1 minute).

### Choose your data migration journey | Mainframe Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/configurations](https://docs.cloud.google.com/mainframe-connector/docs/configurations)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Choose your data migration journey Mainframe Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/configurations You can run Mainframe Connector in the following configurations based on your requirements: Transcode mainframe data locally on the mainframe, and then migrate it to Google Cloud.

### Mainframe Connector architecture | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/mainframe-connector/docs/architecture](https://docs.cloud.google.com/mainframe-connector/docs/architecture)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Mainframe Connector architecture Google Cloud Documentation Source URL: https://docs.cloud.google.com/mainframe-connector/docs/architecture As the application is self contained, you need to only install IBM JRE version 8 or IBM JRE version 17 to deploy Mainframe Connector.
- A job control language (JCL) procedure is the frontend that you can use to call Mainframe Connector.
- The following image gives an overview of Mainframe Connector ...


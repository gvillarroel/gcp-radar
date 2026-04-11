---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.513Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery notebook scheduling"
feature_slug: "bigquery-notebook-scheduling"
latest_feature_date: "2024-06-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "automatic notebook runs"
  - "schedule notebook execution"
  - "notebook scheduling"
  - "scheduled notebook"
  - "notebook schedule"
  - "scheduled notebooks"
  - "BigQuery Notebooks"
  - "notebook jobs"
---

# BigQuery notebook scheduling

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now allows users to schedule notebook execution.

## Extended Definition

BigQuery notebook scheduling is the feature in BigQuery Studio that lets users create and manage scheduled notebook runs for BigQuery Notebooks. The available evidence confirms scheduled notebooks are configured/managed through the Schedule details pane in BigQuery Studio, but does not detail specific scheduling options or execution behavior.

## Evidence Summary

The cited release notes page includes a direct feature entry stating that users can create and manage scheduled notebooks in BigQuery Studio, which supports the existence of notebook scheduling but provides limited operational detail.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- June 30, 2025 Libraries Java 2.52.0 (2025-06-25) Features bigquery: Integrate Otel in client lib ( #3747 ) ( 6e3e07a ) bigquery: Integrate Otel into retries, jobs, and more ( #3842 ) ( 4b28c47 ) Bug Fixes bigquery: Add MY VIEW DATASET NAME TEST to resource clean up sample ( #3838 ) ( b1962a7 ) Dependencies Remove version declaration of open-telemetry-bom ( #3855 ) ( 6f9f77d ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.66.0 ( #3835 ) ( 69be5e7 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.68.0 ( #3858 ) ( d4ca353 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.49.2 ( #3853 ) ( cf864df ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.0 ( #3861 ) ( eb26dee ) Update dependency io.opentelemetry:opentelemetry-bom to v1.51.0 ( #3840 ) ( 51321c2 ) Update ossf/scorecard-action action to v2.4.2 ( #3810 ) ( 414f61d ) Feature You can now create and manage scheduled notebooks using the Schedule details pane in BigQuery Studio.
- With this change, BigQuery Notebooks can intelligently pull relevant table names directly from your BigQuery project, resulting in personalized, executable Python code.
- January 19, 2026 Breaking Dataform workflows , BigQuery notebooks , pipelines , and data preparations are enforcing strict act-as mode at the project level.
- Change The Python code that you generate using Gemini in BigQuery Notebooks is now much more likely to leverage your data.


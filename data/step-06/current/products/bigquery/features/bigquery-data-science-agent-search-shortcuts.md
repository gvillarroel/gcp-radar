---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.396Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Science Agent search shortcuts"
feature_slug: "bigquery-data-science-agent-search-shortcuts"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "prompt symbol search"
  - "prompt search operators"
  - "search shortcuts"
  - "@ and + shortcuts"
  - "Data Science Agent"
  - "file search with +"
  - "table search with @"
---

# BigQuery Data Science Agent search shortcuts

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The BigQuery Data Science Agent now supports @ for searching BigQuery tables and + for searching files in prompts.

## Extended Definition

The BigQuery Data Science Agent now supports two prompt search shortcuts: the `@` symbol for searching BigQuery tables in your project and the `+` symbol for searching files to upload. This behavior is available when using the Data Science Agent in BigQuery.

## Evidence Summary

The BigQuery release notes (dated September 08, 2025) explicitly state that Data Science Agent prompts now support `@` to search BigQuery tables and `+` to search files.

## Source Links

- [https://cloud.google.com/bigquery/docs/release-notes](https://cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- August 04, 2025 Libraries Java 2.54.0 (2025-07-31) Features bigquery: Add OpenTelemetry Samples ( #3899 ) ( e3d9ed9 ) bigquery: Add otel metrics to request headers ( #3900 ) ( 4071e4c ) Dependencies update dependency com.google.cloud:google-cloud-bigquerystorage-bom to v3.16.1 (#3912) (https://github.com/googleapis/java-bigquery/commit/bb6f6dcb90b1ddf72e630c4dc64737cf2c2ebd2e) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.70.0 ( #3890 ) ( 84207e2 ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250706-2.0.0 ( #3910 ) ( ae5c971 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.50.2 ( #3901 ) ( 8205623 ) Update dependency io.opentelemetry:opentelemetry-api to v1.52.0 ( #3902 ) ( 772407b ) Update dependency io.opentelemetry:opentelemetry-bom to v1.52.0 ( #3903 ) ( 509a6fc ) Update dependency io.opentelemetry:opentelemetry-context to v1.52.0 ( #3904 ) ( 96c1bae ) Update dependency io.opentelemetry:opentelemetry-exporter-logging to v1.52.0 ( #3905 ) ( 28ee4c9 ) Feature You can now use the new Data Science Agent (DSA) for Colab Enterprise and BigQuery to automate exploratory data analysis, perform machine learning tasks, and deliver insights all within a Colab Enterprise notebook.
- September 08, 2025 Feature When you use the Data Science Agent in BigQuery, you can now use the @ symbol to search for BigQuery tables in your project, and you can use the + symbol to search for files to upload.
- Feature When you use the Data Science Agent in BigQuery, you can now use the table selector to choose one or more BigQuery tables to analyze.
- Feature You can now reference BigQuery ML and DataFrames in your prompts when you use the Data Science Agent in a BigQuery notebook.


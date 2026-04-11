---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.612Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery migration assessment for Apache Hive"
feature_slug: "bigquery-migration-assessment-for-apache-hive"
latest_feature_date: "2023-10-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "migration complexity report"
  - "BigQuery Hive migration preview"
  - "Hive to BigQuery assessment"
  - "assessment workflow"
  - "Hive migration assessment"
  - "BigQuery migration assessment"
  - "BigQuery Hive assessment"
  - "Apache Hive migration"
---

# BigQuery migration assessment for Apache Hive

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery migration assessment is available in preview to evaluate migration complexity from Apache Hive to BigQuery.

## Extended Definition

BigQuery migration assessment is a feature of BigQuery Migration Service that lets users run an assessment to evaluate and plan a data warehouse migration to BigQuery. Public Google Cloud documentation also describes migration assessment as a workflow that can be used to assess migration complexity across multiple source platforms, but the provided excerpts do not explicitly confirm Apache Hive coverage, so Hive-specific availability cannot be stated with confidence from this evidence alone.

## Evidence Summary

The migration intro page establishes the feature and its purpose, while release notes list concrete examples of complexity assessment targets (Oracle, Informatica, Snowflake, Cloudera/Apache Hadoop) without explicitly mentioning Apache Hive.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery Migration Service includes the following features: BigQuery migration assessment : Assess and plan your data warehouse migration by running a BigQuery migration assessment .
- For more information on BigQuery migration assessment, see BigQuery migration assessment .

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- January 16, 2025 Feature The BigQuery migration assessment for Oracle now includes a total cost of ownership (TCO) calculator that provides an estimation of compute and storage costs for migrating your Oracle data warehouse to BigQuery.
- Feature Use the BigQuery migration assessment for Informatica to assess the complexity of migrating data from your Informatica platform to BigQuery.
- Feature You can use the BigQuery migration assessment for Snowflake to assess the complexity of migrating from Snowflake to BigQuery.
- June 16, 2025 Feature The BigQuery migration assessment is now available for workflows that use Cloudera and Apache Hadoop .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.601Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Configuration YAML support for BigQuery SQL translators"
feature_slug: "configuration-yaml-support-for-bigquery-sql-translators"
latest_feature_date: "2023-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "SQL translator config file"
  - "YAML config"
  - "Python client SQL translator"
  - "SQL translator configuration"
  - "YAML SQL translator"
  - "interactive SQL translation"
  - "translator YAML"
  - "configuration YAML"
---

# Configuration YAML support for BigQuery SQL translators

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Configuration YAML files can now transform SQL during translation in batch, interactive, and Python client workflows.

## Extended Definition

In BigQuery SQL translation, configuration YAML files can be used to define translation rules that optimize and rewrite queries, including systematic rewrites to improve performance of translated GoogleSQL before deployment. The release notes specify Gemini-based YAML configurations that can generate AI-assisted suggestions and be applied to batch or interactive SQL translation flows.

## Evidence Summary

The cited release-notes entry documents SQL translation support for Gemini-based YAML configuration files in batch and interactive workflows, with examples of performance-oriented query rewrites, but does not explicitly mention Python client support.

## Source Links

- [https://cloud.google.com/bigquery/docs/release-notes](https://cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Feature BigQuery now offers the following Gemini-enhanced SQL translation features: Create Gemini-based configuration YAML files to generate AI suggestions for batch or interactive SQL translations.
- Feature When you translate SQL queries from your source database, you can use configuration YAML files to optimize and improve the performance of your translated SQL .
- For example, you can apply systematic query rewrites using YAML configurations to customize and optimize your GoogleSQL queries before deploying it.
- When making an interactive SQL translation, create and apply Gemini-enhanced translation rules to customize your SQL inputs.


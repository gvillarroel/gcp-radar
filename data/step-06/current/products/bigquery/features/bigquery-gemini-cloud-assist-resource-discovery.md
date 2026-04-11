---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.347Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Gemini Cloud Assist resource discovery"
feature_slug: "bigquery-gemini-cloud-assist-resource-discovery"
latest_feature_date: "2026-01-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/introduction"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
keywords:
  - "schema inspection"
  - "project resource discovery"
  - "Gemini Cloud Assist"
  - "resource discovery"
  - "table-level metadata"
  - "Gemini Assist"
  - "Cloud Assist"
  - "BigQuery resources"
---

# BigQuery Gemini Cloud Assist resource discovery

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery users can now use Gemini Cloud Assist to discover BigQuery resources across projects and inspect table-level metadata such as schemas.

## Extended Definition

According to the provided Google Cloud documentation excerpts, Gemini Cloud Assist (Preview) in BigQuery is an AI feature used to help with BigQuery SQL and Python work, including generating and completing SQL, explaining queries, and generating Python code. The same excerpts also indicate BigQuery provides resource visibility via documentation sections and INFORMATION SCHEMA queries, but they do not explicitly show that Gemini Cloud Assist itself performs project-wide resource discovery or table-level schema inspection.

## Evidence Summary

The pages confirm Gemini Cloud Assist’s query/code assistance capabilities and that BigQuery resource information can be obtained via BigQuery resource views, while offering no direct evidence that Cloud Assist itself does cross-project discovery of BigQuery resources.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/introduction](https://docs.cloud.google.com/bigquery/docs/introduction)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)

## Supporting Pages

### BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/introduction](https://docs.cloud.google.com/bigquery/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: The page notes built-in governance, metadata discovery, and semantic search, but it does not specifically describe Gemini Cloud Assist resource discovery behavior.

Evidence snippets:
- To learn how to generate, complete, and summarize code, see the following documentation: SQL code assist Use the SQL generation tool Prompt to generate SQL queries Generate SQL queries with Gemini Cloud Assist ( Preview ) Convert comments to SQL ( Preview ) Complete a SQL query ( Preview ) Explain a SQL query Python code assist Generate Python code with the code generation tool Generate Python code with Gemini Cloud Assist ( Preview ) Python code completion Generate BigQuery DataFrames Python code ( Preview ) Prepare data for analysis .
- Intro to data security and governance helps you understand data governance, and what controls you might need to secure BigQuery resources.
- BigQuery resources Explore BigQuery resources: Release notes provide change logs of features, changes, and deprecations.
- Learn about common patterns to organize BigQuery resources in the data warehouse and data marts.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Quotas Google Cloud sets limits on the use of resources, including BigQuery resources, both to ensure fair usage of shared resources, and to protect you from runaway costs.
- You can view your usage of BigQuery resources that have quotas , and request a higher quota , if needed, by using the Google Cloud console.
- Monitor resources Google Cloud provides the capability to monitor and audit your resources, including BigQuery resources.
- Get resource information You can get information about your BigQuery resources by querying the INFORMATION SCHEMA views.

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Add labels to resources This document describes how to add labels to BigQuery resources, including the following resources: datasets tables and views jobs job sessions reservations For more information about labels in BigQuery, see Introduction to labels .
- What's next Learn how to view labels on BigQuery resources.
- Learn how to update labels on BigQuery resources.
- Learn how to delete labels on BigQuery resources.


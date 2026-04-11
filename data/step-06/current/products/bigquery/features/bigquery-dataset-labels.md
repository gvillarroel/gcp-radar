---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.937Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery dataset labels"
feature_slug: "bigquery-dataset-labels"
latest_feature_date: "2016-07-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
keywords:
  - "dataset tagging"
  - "labels in bq command-line"
  - "dataset label"
  - "labeling datasets"
  - "dataset metadata labels"
  - "set dataset labels"
  - "resource labels"
  - "dataset labels"
---

# BigQuery dataset labels

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for labeling datasets through the BigQuery API or command-line tool.

## Extended Definition

BigQuery added support for labeling datasets through the BigQuery API or command-line tool.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)

## Supporting Pages

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-root-2`
- Final score: 46
- Re-rank relevance: STRONG
- Re-rank rationale: The document directly explains how to add and update dataset labels, including permissions and supported methods.

Evidence snippets:
- Client () TODO(developer): Set dataset id to the ID of the dataset to fetch. dataset id = "your-project.your dataset" dataset = client . get dataset ( dataset id ) # Make an API request. dataset . labels = { "color" : "green" } dataset = client . update dataset ( dataset , [ "labels" ]) # Make an API request. print ( "Labels added to {} " . format ( dataset id )) Add labels to tables and views This document describes how to add a label to an existing table or view.
- Tables or views do not inherit dataset labels.
- However, you can add a dataset label after creation.


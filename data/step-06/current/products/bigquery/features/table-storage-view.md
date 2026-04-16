---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.690Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "TABLE_STORAGE view"
feature_slug: "table-storage-view"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "table"
  - "storage"
  - "view"
  - "provides"
  - "snapshot"
  - "current"
  - "usage"
  - "tables"
---

# TABLE_STORAGE view

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The TABLE_STORAGE view provides a snapshot of current storage usage for tables and materialized views.

## Extended Definition

The TABLE_STORAGE view provides a snapshot of current storage usage for tables and materialized views.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### BigQuery APIs and libraries overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery API This is the main API that provides resources for creating, modifying, and deleting core resources such as datasets, tables, jobs, and routines.
- BigQuery APIs and libraries overview This page provides an overview of the various APIs associated with BigQuery.
- For more information about installation and usage, see BigQuery Storage client libraries .
- For links to the reference documentation and source code, select a language: C++ API Reference Documentation Source Code C# API Reference Documentation Source Code Go API Reference Documentation Source Code Java API Reference Documentation Source Code Node.js API Reference Documentation Source Code PHP API Reference Documentation Source Code Python API Reference Documentation Source Code Ruby API Reference Documentation Source Code BigQuery Reservation API This API provides the mechanisms by which enterprise users can provision and manage dedicated resources such as slots and BigQuery BI Engine memory allocations.

### "Use the BigQuery Storage Read API to read table data \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Use the BigQuery Storage Read API to read table data The BigQuery Storage Read API provides fast access to BigQuery-managed storage by using an rpc-based protocol.
- As a workaround, you can execute a BigQuery query over the view and use the Storage Read API to read from the resulting table.
- The Storage Read API does not provide functionality related to managing BigQuery resources such as datasets, jobs, or tables.
- To use the Storage Read API with external data sources, use BigLake tables .

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- To learn how to query the INFORMATION SCHEMA.JOBS view to get the total bytes processed value, see INFORMATION SCHEMA.JOBS schema View current quota usage You can view your current usage of query, load, extract, or copy jobs by running an INFORMATION SCHEMA query to view metadata about the jobs ran over a specified time period.
- Each of the following predefined IAM roles includes the bigquery.tables.export permission: roles/bigquery.dataViewer roles/bigquery.dataOwner roles/bigquery.dataEditor roles/bigquery.admin Permissions to run an extract job To run an extract job , you need the bigquery.jobs.create IAM permission.
- The job entry in the JOBS BY system tables for the extract job contains a total bytes processed value that can be used to monitor the aggregate usage to ensure that it stays under 50 TiB per-day.
- Export table data to Cloud Storage This page describes how to export or extract data from BigQuery tables to Cloud Storage.


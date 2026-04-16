---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.928Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Batch queries"
feature_slug: "batch-queries"
latest_feature_date: "2014-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction"
keywords:
  - "batch"
  - "queries"
  - "run"
  - "asynchronously"
  - "idle"
  - "resources"
  - "can"
  - "fall"
---

# Batch queries

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Batch queries run queries asynchronously using idle resources and can fall back to interactive priority after a delay; Batch queries let BigQuery execute queries later at lower cost than immediate interactive queries.

## Extended Definition

Batch queries run queries asynchronously using idle resources and can fall back to interactive priority after a delay; Batch queries let BigQuery execute queries later at lower cost than immediate interactive queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Sets the default queue timeout for interactive queries in the us region to 30 minutes. default batch query queue timeout ms INT64 The default amount of time that a batch query is queued.
- Sets the default queue timeout for interactive queries in the us region to 30 minutes. default batch query queue timeout ms INT64 The default amount of time that a batch query is queued.
- Sets the default queue timeout for batch queries in the us region to 30 minutes. default query optimizer options STRING The history-based query optimizations.
- Sets the default queue timeout for batch queries in the us region to 30 minutes. default query optimizer options STRING The history-based query optimizations.

### Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Idle slot sharing Continuous queries can use idle slot sharing to share unused slot resources with other reservations and job types .
- Writes from the results of a batch query to a permanent table Writes from the results of a BigQuery continuous query to a permanent table A Pub/Sub BigQuery subscription Writes from Dataflow to BigQuery Writes from Datastream to BigQuery using append-only write mode You can use continuous queries to perform time-sensitive tasks, such as creating and immediately acting on insights, applying real-time machine learning (ML) inference, and replicating data into other platforms.
- Continuous queries can process data that has been written to standard BigQuery tables by using one of the following methods: The BigQuery Storage Write API The tabledata.insertAll method Batch load The INSERT DML statement Mutating data manipulation language (DML) statements such as DELETE , UPDATE , and MERGE when exporting data to Pub/Sub .
- When exporting data to Bigtable, Spanner, or Pub/Sub locational endpoints you can only target Bigtable, Spanner, or Pub/Sub resources that fall within the same Google Cloud regional boundary as the BigQuery dataset that contains the table you are querying.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- All query results, including both interactive and batch queries, are cached in temporary tables for approximately 24 hours with some exceptions .
- Query queue limit errors You might encounter this error if a project queues more interactive or batch queries than its queue limit permits.
- Because you can queue more batch queries than interactive queries, use batch priority jobs instead of interactive queries.
- Reduce concurrency of queries or materializing intermediate results to reduce dependence on resources.


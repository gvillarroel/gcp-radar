---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.001Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable Studio query builder"
feature_slug: "bigtable-studio-query-builder"
latest_feature_date: "2024-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/data-boost-overview"
  - "https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
keywords:
  - "builder"
  - "running"
  - "studio"
  - "creating"
  - "query"
  - "generally"
  - "available"
---

# Bigtable Studio query builder

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Bigtable Studio query builder is generally available for creating and running queries in the Google Cloud console.

## Extended Definition

The Bigtable Studio query builder is generally available for creating and running queries in the Google Cloud console.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)

## Supporting Pages

### Bigtable Data Boost overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/data-boost-overview](https://docs.cloud.google.com/bigtable/docs/data-boost-overview)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Writes and deletes Traffic that is mostly point reads (single-row reads) More than 1,000 reads per second per cluster Reverse scans Change streams Request priorities Multi-cluster routing Single-row transactions Regional endpoints HDD instances GoogleSQL for Bigtable queries Bigtable Studio query builder queries Instances that use CMEK encryption Incompatible client libraries.
- The following are ideal use cases for Data Boost: Scheduled or triggered export or ETL pipeline jobs from Bigtable to Cloud Storage for data enrichment, analysis, archiving, offline ML model training, or ingestion by your customers' third-party partners ETL using a tool such as Dataflow for short scan or batch read processes that support in-place aggregations, rule-based transformations for MDM, or ML jobs Spark applications that use the Bigtable Spark connector to read Bigtable data Ad hoc queries and scheduled analytics jobs that use BigQuery external tables to read Bigtable data.
- You can make sure that the data from a specific write job or time period is readable by Data Boost, before you initiate a Data Boost workload, by creating and using a consistency token .
- For a list of metrics available by app profile, see System insights charts for Bigtable resources .

### Create and manage authorized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage](https://docs.cloud.google.com/bigtable/docs/authorized-views-create-manage)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information on using the query builder, see Build queries in the console .
- For more information on using the query builder, see Build queries in the console .
- Click Builder to open the query builder.
- For more information, see the reference documentation at gcloud bigtable authorized-views create . gcloud bigtable authorized-views create AUTHORIZED VIEW ID \ --instance = INSTANCE ID \ --table = TABLE ID \ --definition-file = DEFINITION FILE PATH Replace the following: AUTHORIZED VIEW ID : a permanent identifier for the authorized view that is not already in use for the table INSTANCE ID : the permanent identifier for the instance that contains the table TABLE ID : the permanent identifier of that table you are creating an authorized view of DEFINITION FILE PATH : the path to a valid JSON formatted representation of an authorized view.

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- This helps to ensure that enough compute capacity is available during the execution of the continuously running SQL query.
- You can read from a continuous materialized view by using the following: Bigtable Studio query editor The Bigtable client libraries that support SQL queries ReadRows API call using the Bigtable client libraries for Java and Go For more information, see Reading from a continuous materialized view .
- You can create a continuous materialized view using the Google Cloud CLI, the Bigtable Studio query editor in the Google Cloud console, or the Bigtable client libraries for Java and Go.
- During this time, the view is unavailable for querying.


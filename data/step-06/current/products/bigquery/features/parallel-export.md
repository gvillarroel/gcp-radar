---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.930Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Parallel export"
feature_slug: "parallel-export"
latest_feature_date: "2014-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction"
keywords:
  - "parallel"
  - "export"
  - "lets"
  - "bigquery"
  - "parallelized"
  - "output"
  - "processing"
---

# Parallel export

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Parallel export lets BigQuery export data using parallelized output processing.

## Extended Definition

Parallel export lets BigQuery export data using parallelized output processing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Partner references BigQuery Export Integration BigQuery Import Integration BigQuery Version 2 Export Partner Advantage page Direct link Union.ai Solution Union AI orchestrator Category BI, ML, & Advanced Analytics Description The Union platform empowers AI development teams to rapidly ship high-quality code to production by offering optimized performance, unparalleled resource efficiency, and a delightful workflow authoring experience.
- Partner references Behavioral data for BigQuery BigQuery Loader Measure the latency of your data in BigQuery Debugging bad data in Google Cloud with BigQuery Partner Advantage page Direct link Starburst Data Solution Starburst Galaxy Category BI, ML, & Advanced Analytics Description Starburst Galaxy is the cloud-born and fully-managed service of the Starburst massively parallel processing (MPP) and highly-performant query engine.
- Partner references SSIS BigQuery Export Data from SQL Server to BigQuery through SSIS Partner Advantage page Direct link Census Solution Census Reverse ETL Category ETL & Data Integration Description Census is a reverse ETL tool and operational analytics platform that lets you sync your trusted analytics data from your hub into operational tools that your business teams use on a daily basis.
- Partner references Import BigQuery Data into Amplitude Export data to BigQuery AskYourDatabase Solution AskYourDatabase Category BI, ML, & Advanced Analytics Description AskYourDatabase is an AI-powered tool that lets users ask questions in plain English and get instant answers from their database.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Cannot appear with main file uri in procedure option list . argument type : Any valid BigQuery type . procedure argument mode : Specifies whether an argument is an input, an output, or both. procedure option list The procedure option list lets you specify procedure options.
- Example: export function finalize ( finalState , initialSum ) Serialization functions for a JavaScript UDAF If you want to work with non-serializable aggregation states, the JavaScript UDAF must provide the serialize and deserialize functions: serialize function: Converts an aggregation state into a BigQuery-serializable object.
- Example: export function deserialize ( stateToDeserialize , initialSum ) Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.routines.create The dataset where you create the function.
- If RETURNS TABLE is absent, BigQuery infers the output schema from the query statement in the function body.

### Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- You can insert the output rows produced by a continuous query into a BigQuery table or export them to Pub/Sub, Bigtable, or Spanner.
- This lets you use BigQuery as an event-driven data processing engine for your application's decision logic.
- Continuous queries can process data that has been written to standard BigQuery tables by using one of the following methods: The BigQuery Storage Write API The tabledata.insertAll method Batch load The INSERT DML statement Mutating data manipulation language (DML) statements such as DELETE , UPDATE , and MERGE when exporting data to Pub/Sub .
- When exporting data to Bigtable, Spanner, or Pub/Sub locational endpoints you can only target Bigtable, Spanner, or Pub/Sub resources that fall within the same Google Cloud regional boundary as the BigQuery dataset that contains the table you are querying.


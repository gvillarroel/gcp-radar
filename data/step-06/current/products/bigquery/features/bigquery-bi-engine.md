---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.808Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery BI Engine"
feature_slug: "bigquery-bi-engine"
latest_feature_date: "2019-09-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "bigquery"
  - "bi"
  - "engine"
  - "accelerates"
  - "analytics"
  - "memory"
  - "query"
  - "processing"
---

# BigQuery BI Engine

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery BI Engine accelerates analytics with in-memory query processing for BI workloads; BigQuery BI Engine is an in-memory analysis service for accelerating BI queries in BigQuery.

## Extended Definition

BigQuery BI Engine accelerates analytics with in-memory query processing for BI workloads; BigQuery BI Engine is an in-memory analysis service for accelerating BI queries in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- You can add Spark properties using the following format: [("key1","value1"),("key2", "value2")] For example: bq query --nouse legacy sql --dry run 'CREATE PROCEDURE my bq project.my dataset.spark proc() WITH CONNECTION my-project-id.us.my-connection OPTIONS( engine="SPARK", main file uri="gs://my-bucket/my-pyspark-main.py", properties=[ ("spark.executor.instances", "3"), ("spark.yarn.am.memory", "3g") ]) LANGUAGE PYTHON' Error in query string: Invalid value: \ Invalid properties: \ Attempted to set unsupported properties: \ [ spark:spark.yarn.am.memory ] at [ 1 :1 ] Note: You can use the BigQuery dry run feature to validate your stored procedure without creating it. main file uri STRING The Cloud Storage URI of the main Python, Scala, or Java JAR file of the Spark application.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- Examples: region-us , region-us-central1 . bi capacity options list : The list of options to set. bi capacity options list The option list specifies a set of options for BigQuery BI Engine capacity.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Behavioral data for BigQuery BigQuery Loader Measure the latency of your data in BigQuery Debugging bad data in Google Cloud with BigQuery Partner Advantage page Direct link Starburst Data Solution Starburst Galaxy Category BI, ML, & Advanced Analytics Description Starburst Galaxy is the cloud-born and fully-managed service of the Starburst massively parallel processing (MPP) and highly-performant query engine.
- Partner references BigQuery and Tableau best practices Making Sense of Google BigQuery Data with Tableau Analyze BigQuery data by using BI Engine and Tableau Partner Advantage page Direct link Tecton Solution Feature Platform Category BI, ML, & Advanced Analytics Description Tecton's feature platform for ML enables data scientists to turn raw data into production-ready features, the predictive signals that feed ML models.
- Partner references Connect to a Google BigQuery database from Preset PuppyGraph Solution PuppyGraph Category BI, ML, & Advanced Analytics Description PuppyGraph is the first and only graph analytics engine in the market, empowering companies to transform existing relational data stores into a unified graph model in under 10 minutes, bypassing traditional graph database costs, latency, and maintenance hurdles.
- Partner references Use BigQuery directly in a notebook Getting started with BigQuery in Deepnote BigQuery with Google OAuth Partner Advantage page Direct link DinMo Solution DinMo Category BI, ML, & Advanced Analytics Description DinMo transforms all customer touch points into high-value audiences and helps users leverage them in all activation platforms without code or engineering in less than 5 minutes.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- If you have encountered this error while using a business intelligence (BI) tool to create dashboards that query data in BigQuery, then we recommend that you use BigQuery BI Engine .
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Shuffle size limit errors BigQuery returns this error when your project exceeds the maximum disk and memory size limit available for shuffle operations.
- Using BigQuery BI Engine is optimal for this use case.


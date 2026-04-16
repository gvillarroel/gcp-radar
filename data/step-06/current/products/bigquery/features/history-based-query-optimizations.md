---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.407Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "History-based query optimizations"
feature_slug: "history-based-query-optimizations"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/automatic-discovery"
keywords:
  - "history"
  - "based"
  - "query"
  - "optimizations"
  - "bigquery"
  - "supports"
  - "enabling"
  - "disabling"
---

# History-based query optimizations

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports enabling, disabling, and analyzing history-based optimizations for queries; BigQuery lets users enable, disable, and analyze history-based optimizations for queries.

## Extended Definition

BigQuery supports enabling, disabling, and analyzing history-based optimizations for queries; BigQuery lets users enable, disable, and analyze history-based optimizations for queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)

## Supporting Pages

### Introduction to continuous queries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction](https://docs.cloud.google.com/bigquery/docs/continuous-queries-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery automatically determines the number of continuous queries that can run concurrently, based on available reservation assignments that use the CONTINUOUS job type.
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You can't use the following SQL capabilities in a continuous query, unless they are listed as a supported stateful operation : The following query operators: PIVOT UNPIVOT TABLESAMPLE Query set operators The SELECT DISTINCT statement EXISTS or NOT EXISTS subqueries Recursive CTEs User-defined functions Window function calls BigQuery ML functions other than those listed in Supported functionality Data definition language (DDL) statements Data manipulation language (DML) statements except for INSERT .
- Writes from the results of a batch query to a permanent table Writes from the results of a BigQuery continuous query to a permanent table A Pub/Sub BigQuery subscription Writes from Dataflow to BigQuery Writes from Datastream to BigQuery using append-only write mode You can use continuous queries to perform time-sensitive tasks, such as creating and immediately acting on insights, applying real-time machine learning (ML) inference, and replicating data into other platforms.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Sets the default queue timeout for batch queries in the us region to 30 minutes. default query optimizer options STRING The history-based query optimizations.
- Sets the default queue timeout for batch queries in the us region to 30 minutes. default query optimizer options STRING The history-based query optimizations.
- This option can be one of the following: 'adaptive=on' : Use history-based query optimizations. 'adaptive=off' : Don't use history-based query optimizations.
- This option can be one of the following: 'adaptive=on' : Use history-based query optimizations. 'adaptive=off' : Don't use history-based query optimizations.

### "Discover and catalog Cloud Storage data \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)
- Source ID: `site-docs-reference-5`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- The discovery scan supports the following compression formats: Structured and semi-structured data Internal compression for the following formats: Compression File extension sample Supported format gzip .gz.parquet Parquet lz4 .lz4.parquet Parquet Snappy .snappy.parquet Parquet, ORC, Avro lzo .lzo.parquet Parquet, ORC External compression for JSON and CSV files: gzip bzip2 Unstructured data For object tables, compression is managed primarily through Cloud Storage object metadata , rather than BigQuery internal settings.
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Apache Spark To query BigLake tables using Spark SQL on a Managed Service for Apache Spark serverless job, follow these steps: Create a PySpark script similar to the following sample script: from pyspark.sql import SparkSession session = ( SparkSession . builder . appName ( "testing" ) . config ( "viewsEnabled" , "true" ) . config ( "materializationDataset" , " DATASET ID " ) . config ( "spark.hive.metastore.bigquery.project.id" , " PROJECT ID " ) . config ( "spark.hive.metastore.client.factory.class" , "com.google.cloud.bigquery.metastore.client.BigQueryMetastoreClientFactory" ) . enableHiveSupport () . getOrCreate () ) session . sql ( "show databases" ) . show () session . sql ( "use TABLE NAME " ) . show () session . sql ( "show tables" ) . show () sql = "SELECT FROM DATASET ID .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a discovery scan: bigquery.datasets.create on the data source project storage.buckets.get on the data source bucket storage.objects.get on the data source bucket storage.objects.list on the data source bucket bigquery.datasets.get on the data source project Provide a connection: bigquery.connections.delegate on the BigQuery connection bigquery.connections.use on the BigQuery connection Your administrator might also be able to give the BigQuery Connection Service account these permissions with custom roles or other predefined roles .


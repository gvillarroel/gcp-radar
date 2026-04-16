---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.598Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Querying Apache Iceberg tables created by open source engines"
feature_slug: "querying-apache-iceberg-tables-created-by-open-source-engines"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog"
  - "https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration"
keywords:
  - "querying"
  - "apache"
  - "iceberg"
  - "tables"
  - "created"
  - "open"
  - "source"
  - "engines"
---

# Querying Apache Iceberg tables created by open source engines

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports querying Apache Iceberg tables created by open source engines.

## Extended Definition

BigQuery supports querying Apache Iceberg tables created by open source engines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- [https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration](https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration)

## Supporting Pages

### Use open source Python libraries \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration](https://docs.cloud.google.com/bigquery/docs/pandas-gbq-migration)
- Source ID: `site-docs-reference`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the documentation and source code . google-cloud-bigquery BigQuery deployment, administration, and SQL-based querying Open source library maintained by Google Python package that wraps all the BigQuery APIs.
- SchemaField ( "my string" , "STRING" ), ] ) job = client . load table from dataframe ( df , table id , job config = job config ) Wait for the load job to complete. job . result () Features not supported by pandas-gbq While the pandas-gbq library provides a useful interface for querying data and writing data to tables, it does not cover many of the BigQuery API features, including but not limited to: Managing datasets , including creating new datasets , updating dataset properties , and deleting datasets Loading data into BigQuery from formats other than pandas DataFrames or from pandas DataFrames with JSON columns Managing tables , including listing tables in a dataset , copying table data , and deleting tables Exporting BigQuery data directly to Cloud Storage Troubleshooting connection pool errors Error string: Connection pool is full, discarding connection: bigquery.googleapis.com.
- For more information, see Introduction to BigQuery DataFrames . pandas-gbq Python based data processing using client side data copy Open source library maintained by PyData and volunteer contributors Lets you move data to and from Python DataFrames on the client side.
- Use open source Python libraries You can choose from among three Python libraries in BigQuery, based on your use case.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .
- BigLake tables support the following formats: Avro CSV Delta Lake Iceberg JSON ORC Parquet You can't use cached metadata with Apache Iceberg external tables ; BigQuery already uses the metadata that Iceberg captures in manifest files.
- For information about BigLake, the stand-alone Google Cloud product that includes BigLake metastore, the Apache Iceberg REST catalog, and BigLake tables for Apache Iceberg see BigLake overview .
- Cache-enabled tables with materialized views You can use materialized views over BigLake metadata cache-enabled tables to improve performance and efficiency when querying structured data stored in Cloud Storage or Amazon Simple Storage Service (Amazon S3).

### Use the BigLake metastore Iceberg REST catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog](https://docs.cloud.google.com/bigquery/docs/blms-rest-catalog)
- Source ID: `site-docs-reference-5`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Prior Iceberg releases For open source Iceberg releases prior to 1.10, you can configure standard OAuth authentication by configuring a session with the following: import pyspark from pyspark.context import SparkContext from pyspark.sql import SparkSession catalog name = " CATALOG NAME " spark = SparkSession . builder . appName ( " APP NAME " ) \ . config ( 'spark.jars.packages' , 'org.apache.iceberg:iceberg-spark-runtime-3.5 2.12:1.9.1,org.apache.iceberg:iceberg-gcp-bundle:1.9.1' ) \ . config ( f 'spark.sql.catalog. { catalog name } ' , 'org.apache.iceberg.spark.SparkCatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .type' , 'rest' ) \ . config ( f 'spark.sql.catalog. { catalog name } .uri' , 'https://biglake.googleapis.com/iceberg/v1/restcatalog' ) \ . config ( f 'spark.sql.catalog. { catalog name } .warehouse' , ' WAREHOUSE PATH ' ) \ . config ( f 'spark.sql.catalog. { catalog name } .header.x-goog-user-project' , ' PROJECT ID ' ) \ . config ( f "spark.sql.catalog. { catalog name } .token" , " TOKEN " ) \ . config ( f "spark.sql.catalog. { catalog name } .oauth2-server-uri" , "https://oauth2.googleapis.com/token" ) \ . config ( f 'spark.sql.catalog. { catalog name } .io-impl' , 'org.apache.iceberg.gcp.gcs.GCSFileIO' ) \ . config ( f 'spark.sql.catalog. { catalog name } .rest-metrics-reporting-enabled' , 'false' ) \ . config ( 'spark.sql.extensions' , 'org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions' ) \ . config ( 'spark.sql.defaultCatalog' , ' CATALOG NAME ' ) \ . getOrCreate () Replace the following: CATALOG NAME : the name of your Iceberg REST catalog.
- It lets query engines, such as Apache Spark, discover, read metadata from, and manage Iceberg tables in a consistent way.
- For managed BigLake tables for Apache Iceberg , this name often matches the Cloud Storage bucket ID used with the REST catalog—for example, if your bucket is gs://bucket-id , the catalog name might be bucket-id .
- This approach is a good choice if you use open source engines to access data in Cloud Storage and need interoperability with other engines, including BigQuery.


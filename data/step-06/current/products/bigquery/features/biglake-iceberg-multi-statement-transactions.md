---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.309Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigLake Iceberg multi-statement transactions"
feature_slug: "biglake-iceberg-multi-statement-transactions"
latest_feature_date: "2025-08-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/about-blms"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "biglake"
  - "iceberg"
  - "multi"
  - "statement"
  - "transactions"
  - "bigquery"
  - "supports"
  - "tables"
---

# BigLake Iceberg multi-statement transactions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports multi-statement transactions for BigLake Iceberg tables.

## Extended Definition

BigQuery supports multi-statement transactions for BigLake Iceberg tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.
- BigLake tables support the following formats: Avro CSV Delta Lake Iceberg JSON ORC Parquet You can't use cached metadata with Apache Iceberg external tables ; BigQuery already uses the metadata that Iceberg captures in manifest files.
- To learn more about multi-cloud analytic solutions using BigLake tables with Amazon S3 or Blob Storage data, see BigQuery Omni .
- You can use multiple BigLake tables from different clouds and BigQuery tables in the same query.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Column options for a view have the same syntax and requirements as for a table, but with a different list of NAME and VALUE fields: NAME VALUE Details description STRING Example: description="a unique id" Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.get The table to alter. bigquery.tables.update The table to alter.

### About BigLake metastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/about-blms](https://docs.cloud.google.com/bigquery/docs/about-blms)
- Source ID: `site-docs-reference-5`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- BigLake metastore limitations The following limitations apply to tables in BigLake metastore: Table management You can't create or modify BigLake Iceberg tables with BigQuery data definition language (DDL) or data manipulation language (DML) statements.
- You can modify BigLake Iceberg tables using the BigQuery API (with the bq command-line tool or client libraries), but doing so risks making changes that are incompatible with the external engine.
- Existing BigLake metastore users that have current tables with the custom Iceberg catalog for BigQuery.
- Tables in BigLake metastore are directly accessible from multiple open source engines and BigQuery.


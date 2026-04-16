---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.336Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Iceberg external tables in materialized views"
feature_slug: "iceberg-external-tables-in-materialized-views"
latest_feature_date: "2025-06-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "iceberg"
  - "external"
  - "tables"
  - "materialized"
  - "views"
  - "can"
  - "reference"
  - "without"
---

# Iceberg external tables in materialized views

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Materialized views can reference Iceberg external tables without migrating the data to BigQuery-managed storage.

## Extended Definition

Materialized views can reference Iceberg external tables without migrating the data to BigQuery-managed storage.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The default is false . --parquet enable list inference={true false} If the --source format flag is set to PARQUET , then this flag indicates whether to use schema inference for Parquet LIST logical types. --reference file schema uri= URI Specifies the path to a reference file with the expected table schema for creating external tables.
- If the file set spec type is NEW LINE DELIMITED MANIFEST , then each line in the file is interpreted as a URI that points to a data file. --reference file schema uri= URI Specifies the path to a reference file with the expected table schema for creating external tables.
- For example: --external table definition=myTable::/tmp/tabledef --external table definition=myTable::Region:STRING,Quarter:STRING,Total sales:INTEGER@CSV=gs://mybucket/sales.csv Repeat this flag to query multiple tables. --flatten results={true false} To disallow flattening nested and repeated fields in the results for legacy SQL queries, set to false .
- For example: --external table definition=/tmp/tabledef --external table definition=Region:STRING,Quarter:STRING,Total sales:INTEGER@CSV=gs://mybucket/sales.csv For Bigtable external tables , and BigLake tables based on AWS and Azure : --external table definition= PATH TO FILE The value must be a path to a file containing a table definition .

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- Cache-enabled tables with materialized views You can use materialized views over BigLake metadata cache-enabled tables to improve performance and efficiency when querying structured data stored in Cloud Storage or Amazon Simple Storage Service (Amazon S3).
- BigLake tables support the following formats: Avro CSV Delta Lake Iceberg JSON ORC Parquet You can't use cached metadata with Apache Iceberg external tables ; BigQuery already uses the metadata that Iceberg captures in manifest files.
- These materialized views function like materialized views over BigQuery-managed storage tables, including the benefits of automatic refresh and smart tuning .
- You can reference BigLake tables anywhere in a SELECT statement as if they were standard BigQuery tables, including in data manipulation language (DML) and data definition language (DDL) statements that use subqueries to retrieve data.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- Example The following example deletes the my cloud resource connection connection: DROP CONNECTION IF EXISTS us.my cloud resource connection ; Table path syntax Use the following syntax when specifying the path of a table resource , including standard tables, views, materialized views, external tables, and table snapshots. table path := [[ project name . ] dataset name . ] table name project name : The name of the project that contains the table resource.
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- Default project in materialized view body If the materialized view is created in the same project used to run the CREATE MATERIALIZED VIEW statement, the materialized view body query expression can reference entities without specifying the project; the default project is the project which owns the materialized view.
- If the project name is omitted from the materialized view name, or it is the same as the project that runs this DDL query, then the latter is also used as the default project for references to tables, functions, and other resources in query expression .


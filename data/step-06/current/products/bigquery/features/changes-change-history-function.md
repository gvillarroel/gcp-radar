---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.441Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CHANGES change history function"
feature_slug: "changes-change-history-function"
latest_feature_date: "2024-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/change-data-capture"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "changes"
  - "change"
  - "history"
  - "table"
  - "valued"
  - "returns"
  - "time"
  - "windowed"
---

# CHANGES change history function

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The CHANGES table-valued function returns a time-windowed history of table changes across DDL, DML, loads, streaming, and partition deletions.

## Extended Definition

The CHANGES table-valued function returns a time-windowed history of table changes across DDL, DML, loads, streaming, and partition deletions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "INFORMATION_SCHEMA.BI_CAPACITY_CHANGES view \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-bi-capacity-changes)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- BI CAPACITY CHANGES WHERE user email = "email@mycompanymail.com" The result looks similar to the following: +---------------------+---------------+----------------+------------------+--------------+---------------------+----------------------------------------------------------------------------------------+ change timestamp project id project number bi capacity name size user email preferred tables +---------------------+---------------+----------------+------------------+--------------+---------------------+----------------------------------------------------------------------------------------+ 2022-06-14 02:22:18 my-project-id 123456789000 default 268435456000 email@mycompany.com ["my-project-id.dataset1.table1","bigquery-public-data.chicago taxi trips.taxi trips"] 2022-06-08 20:25:51 my-project-id 123456789000 default 268435456000 email@mycompany.com ["bigquery-public-data.chicago taxi trips.taxi trips"] 2022-04-01 21:06:49 my-project-id 123456789000 default 161061273600 email@mycompany.com [""] +---------------------+---------------+----------------+------------------+--------------+---------------------+----------------------------------------------------------------------------------------+ The following example gets BI Engine capacity changes for the last seven days: SELECT change timestamp , size , user email , preferred tables FROM my-project-id.region-us .
- BI CAPACITY CHANGES WHERE change timestamp > TIMESTAMP SUB ( CURRENT DATE (), INTERVAL 7 DAY ) The result looks similar to the following: +---------------------+--------------+----------------------+-------------------+ change timestamp size user email preferred tables +---------------------+--------------+----------------------+-------------------+ 2023-07-08 18:25:09 268435456000 sundar@mycompany.com [""] 2023-07-09 17:47:26 161061273600 pichai@mycompany.com ["pr.dataset.t1"] +---------------------+--------------+----------------------+-------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The INFORMATION SCHEMA.BI CAPACITY CHANGES view has the following schema: Column name Data type Value change timestamp TIMESTAMP Timestamp when the current update to BI Engine capacity was made. project id STRING The project ID of the project that contains BI Engine capacity. project number INTEGER The project number of the project that contains BI Engine capacity. bi capacity name STRING The name of the object.
- INFORMATION SCHEMA.BI CAPACITY CHANGES view The INFORMATION SCHEMA.BI CAPACITY CHANGES view contains history of changes to the BI Engine capacity.

### "Stream table updates with change data capture ingestion \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/change-data-capture](https://docs.cloud.google.com/bigquery/docs/change-data-capture)
- Source ID: `site-docs-reference-5`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example with UPSERT and DELETE values Consider the following table in BigQuery: ID Name Salary 100 Charlie 2000 101 Tal 3000 102 Lee 5000 The following row modifications are streamed by the Storage Write API: ID Name Salary CHANGE TYPE 100 DELETE 101 Tal 8000 UPSERT 105 Izumi 6000 UPSERT The updated table is now the following: ID Name Salary 101 Tal 8000 102 Lee 5000 105 Izumi 6000 Manage table staleness By default, every time you run a query, BigQuery returns the most up-to-date results.
- To calculate the time it takes to apply upserted changes to an existing table, use the following SQL query to determine the 95th percentile duration of background apply jobs, plus a seven-minute buffer to allow for the BigQuery write-optimized storage (streaming buffer) conversion.
- Twice the maximum time it takes to apply upserted changes into your table, plus some additional buffer.
- The following example changes the max staleness limit of the employees table to 15 minutes: ALTER TABLE employees SET OPTIONS ( max staleness = INTERVAL 15 MINUTE ); Determine the current max staleness value of a table To determine the current max staleness value of a table, query the INFORMATION SCHEMA.TABLE OPTIONS view .

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Example: enable change history=TRUE Set this property to TRUE in order to capture change history on the table, which you can then view by using the CHANGES function .
- Example: enable change history=TRUE Set this property to TRUE in order to capture change history on the table, which you can then view by using the CHANGES function .
- Examples Changing the data type for a column The following example changes the data type of column c1 from an INT64 to NUMERIC : CREATE TABLE dataset . my table ( c1 INT64 ); ALTER TABLE dataset . my table ALTER COLUMN c1 SET DATA TYPE NUMERIC ; Changing the data type for a field The following example changes the data type of one of the fields in the s1 column: CREATE TABLE dataset . my table ( s1 STRUCT < a INT64 , b STRING > ); ALTER TABLE dataset . my table ALTER COLUMN s1 SET DATA TYPE STRUCT < a NUMERIC , b STRING > ; Changing precision The following example changes the precision of a parameterized data type column: CREATE TABLE dataset . my table ( pt NUMERIC ( 7 , 2 )); ALTER TABLE dataset . my table ALTER COLUMN pt SET DATA TYPE NUMERIC ( 8 , 2 ); ALTER COLUMN SET DEFAULT statement Sets the default value of a column.
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.


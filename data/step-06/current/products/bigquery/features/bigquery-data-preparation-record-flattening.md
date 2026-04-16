---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.301Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery data preparation record flattening"
feature_slug: "bigquery-data-preparation-record-flattening"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "bigquery"
  - "preparation"
  - "record"
  - "flattening"
  - "can"
  - "flatten"
  - "records"
  - "single"
---

# BigQuery data preparation record flattening

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery data preparation can flatten records in a single operation.

## Extended Definition

BigQuery data preparation can flatten records in a single operation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- SELECT FROM ( SELECT product , sales , quarter FROM Produce ) PIVOT ( SUM ( sales ) AS total sales , COUNT ( ) AS num records FOR quarter IN ( 'Q1' , 'Q2' )) / --------+----------------+----------------+----------------+----------------+ product total sales Q1 num records Q1 total sales Q2 num records Q2 +--------+----------------+----------------+----------------+----------------+ Kale 121 2 108 2 Apple 78 2 0 1 +--------+----------------+----------------+----------------+---------------- / UNPIVOT operator FROM from item [, ...] unpivot operator unpivot operator : UNPIVOT [ { INCLUDE NULLS EXCLUDE NULLS } ] ( { single column unpivot multi column unpivot } ) [ unpivot alias ] single column unpivot : values column FOR name column IN ( columns to unpivot ) multi column unpivot : values column set FOR name column IN ( column sets to unpivot ) values column set : ( values column [, ...]) columns to unpivot : unpivot column [ row value alias ][, ...] column sets to unpivot : ( unpivot column [ row value alias ][, ...]) unpivot alias and row value alias : [AS] alias The UNPIVOT operator rotates columns into rows.
- Sampling returns a variety of records while avoiding the costs associated with scanning and processing an entire table.
- For several ways to use UNNEST , including construction, flattening, and filtering, see Work with arrays .
- SELECT item , purchases , category , LAST VALUE ( item ) OVER ( item window ) AS most popular FROM Produce WINDOW item window AS ( PARTITION BY category ORDER BY purchases ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( d ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS ( b ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ), d AS ( c ) SELECT item , purchases , category , LAST VALUE ( item ) OVER ( c ROWS BETWEEN 2 PRECEDING AND 2 FOLLOWING ) AS most popular FROM Produce WINDOW a AS ( PARTITION BY category ), b AS ( a ORDER BY purchases ), c AS b Set operators query expr [ { INNER [ { FULL LEFT } [ OUTER ] ] } ] { UNION { ALL DISTINCT } INTERSECT DISTINCT EXCEPT DISTINCT } [ { BY NAME [ ON ( column list ) ] [ STRICT ] CORRESPONDING [ BY ( column list ) ] } ] query expr Set operators combine or filter results from two or more input queries into a single result set.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Example This example performs a scoped COUNT aggregation and then filters and sorts the records by the aggregated value. legacySQL SELECT repository . url , COUNT ( payload . pages . page name ) WITHIN RECORD AS page count FROM [ bigquery - public - data : samples . github nested ] HAVING page count > 80 ORDER BY page count DESC ; FROM clause FROM [project name:]datasetId.tableId [ [ AS ] alias ] ( subquery ) [ [ AS ] alias ] JOIN clause FLATTEN clause table wildcard function The FROM clause specifies the source data to be queried.
- If you use OMIT...IF to exclude a portion of a record in a repeating field, and the query also selects other independently repeating fields, BigQuery omits a portion of the other repeated records in the query.
- Given a record with one or more values for a repeated field, FLATTEN will create multiple records, one for each value in the repeated field.
- Because of this, BigQuery users sometimes need to write queries that manipulate the structure of repeated records.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- For example: --external table definition=myTable::/tmp/tabledef --external table definition=myTable::Region:STRING,Quarter:STRING,Total sales:INTEGER@CSV=gs://mybucket/sales.csv Repeat this flag to query multiple tables. --flatten results={true false} To disallow flattening nested and repeated fields in the results for legacy SQL queries, set to false .
- For more information, see Loading newline-delimited GeoJSON files . --max bad records= MAX An integer that specifies the maximum number of bad records allowed before the entire job fails.
- At most, five errors of any type are returned regardless of the --max bad records value.
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.


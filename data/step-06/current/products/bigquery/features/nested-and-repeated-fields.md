---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.937Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Nested and repeated fields"
feature_slug: "nested-and-repeated-fields"
latest_feature_date: "2012-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "nested"
  - "repeated"
  - "fields"
  - "let"
  - "bigquery"
  - "represent"
  - "hierarchical"
  - "structures"
---

# Nested and repeated fields

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Nested and repeated fields let BigQuery represent hierarchical and repeated data structures in tables.

## Extended Definition

Nested and repeated fields let BigQuery represent hierarchical and repeated data structures in tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated](https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Querying nested and repeated fields in legacy SQL \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated](https://docs.cloud.google.com/bigquery/docs/legacy-nested-repeated)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you try to run a legacy SQL query like the following: SELECT fullName, age FROM [dataset.tableId] WHERE (citiesLived.yearsLived > 1995 ) AND (children.age > 3) BigQuery returns an error similar to: Cannot query the cross product of repeated fields children.age and citiesLived.yearsLived To query across more than one repeated field, you need to flatten one of the fields: SELECT fullName, age, gender, citiesLived.place FROM (FLATTEN([dataset.tableId], children)) WHERE (citiesLived.yearsLived > 1995) AND (children.age > 3) GROUP BY fullName, age, gender, citiesLived.place Which returns: +------------+-----+--------+-------------------+ fullName age gender citiesLived place +------------+-----+--------+-------------------+ John Doe 22 Male Stockholm Mike Jones 35 Male Los Angeles Mike Jones 35 Male Washington DC Mike Jones 35 Male Portland Mike Jones 35 Male Austin +------------+-----+--------+-------------------+ WITHIN Clause The WITHIN keyword specifically works with aggregate functions to aggregate across children and repeated fields within records and nested fields.
- Using scoped aggregation over nested and repeated fields is one of BigQuery's most powerful features, which can often eliminate expensive joins in queries.
- Although BigQuery can automatically flatten nested fields, you may need to explicitly call FLATTEN when dealing with more than one repeated field.
- For example, let's take a look at a sample schema for person data: Last modified Schema Total Rows Total Bytes Expiration ----------------- ----------------------------------- ------------ ------------- ------------ 27 Sep 10:01:06 - kind: string 4 794 - fullName: string (required) - age: integer - gender: string +- phoneNumber: record - areaCode: integer - number: integer +- children: record (repeated) - name: string - gender: string - age: integer +- citiesLived: record (repeated) - place: string +- yearsLived: integer (repeated) Notice that there are several repeated and nested fields.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The STRUCT and ARRAY data types are used to create nested and repeated data in BigQuery.
- The STRUCT and ARRAY data types are used to create nested and repeated data in BigQuery.
- The STRUCT and ARRAY data types are used to create nested and repeated data in BigQuery.
- The STRUCT and ARRAY data types are used to create nested and repeated data in BigQuery.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- For example: --external table definition=myTable::/tmp/tabledef --external table definition=myTable::Region:STRING,Quarter:STRING,Total sales:INTEGER@CSV=gs://mybucket/sales.csv Repeat this flag to query multiple tables. --flatten results={true false} To disallow flattening nested and repeated fields in the results for legacy SQL queries, set to false .
- The default value is 100 . --selected fields= COLUMN NAMES or -c= COLUMN NAMES A comma-separated list that specifies a subset of fields (including nested and repeated fields) to return when showing table data.
- This flag applies for loading CSV, JSON, and Google Sheets data only. --null marker= STRING An optional custom string that represents a NULL value in CSV data. --projection fields= PROPERTY NAMES If you set --source format to DATASTORE BACKUP , then this flag indicates which entity properties to load from a Datastore export.
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.


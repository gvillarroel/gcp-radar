---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.579Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "LAX_STRING"
feature_slug: "lax-string"
latest_feature_date: "2023-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "lax"
  - "string"
  - "attempts"
  - "convert"
  - "json"
  - "value"
  - "sql"
---

# LAX_STRING

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

LAX_STRING attempts to convert a JSON value to a SQL STRING value.

## Extended Definition

LAX_STRING attempts to convert a JSON value to a SQL STRING value.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- LAX STRING Attempts to convert a JSON value to a SQL STRING value.
- STRING (JSON) Converts a JSON string to a SQL STRING value.
- The STRING is formatted as follows: Type %t %T NULL of any type NULL NULL INT64 123 123 NUMERIC 123.0 (always with .0) NUMERIC "123.0" FLOAT64 123.0 (always with .0) 123e+10 inf -inf NaN 123.0 (always with .0) 123e+10 CAST("inf" AS <type>) CAST("-inf" AS <type>) CAST("nan" AS <type>) STRING unquoted string value quoted string literal BYTES unquoted escaped bytes e.g., abc\x01\x02 quoted bytes literal e.g., b"abc\x01\x02" BOOL boolean value boolean value DATE 2011-02-03 DATE "2011-02-03" TIMESTAMP 2011-02-03 04:05:06+00 TIMESTAMP "2011-02-03 04:05:06+00" INTERVAL 1-2 3 4:5:6.789 INTERVAL "1-2 3 4:5:6.789" YEAR TO SECOND ARRAY [value, value, ...] where values are formatted with %t [value, value, ...] where values are formatted with %T STRUCT (value, value, ...) where fields are formatted with %t (value, value, ...) where fields are formatted with %T Special cases: Zero fields: STRUCT() One field: STRUCT(value) JSON one-line printable string representing JSON. { "name" : "apple" , "stock" : 3 } one-line printable string representing a JSON literal.
- Bar +--------------------- / SELECT CONCAT ( 'Summer' , ' ' , 1923 ) as release date ; / ---------------------+ release date +---------------------+ Summer 1923 +--------------------- / With Employees AS ( SELECT 'John' AS first name , 'Doe' AS last name UNION ALL SELECT 'Jane' AS first name , 'Smith' AS last name UNION ALL SELECT 'Joe' AS first name , 'Jackson' AS last name ) SELECT CONCAT ( first name , ' ' , last name ) AS full name FROM Employees ; / ---------------------+ full name +---------------------+ John Doe Jane Smith Joe Jackson +--------------------- / CONTAINS SUBSTR CONTAINS SUBSTR ( expression , search value literal [ , json scope = > json scope value ] ) Description Performs a normalized, case-insensitive search to see if a value exists as a substring in an expression.

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- JSON EXTRACT SCALAR( json , json path ) Selects a value in json according to the JSONPath expression json path . json path must be a string constant.
- JSON EXTRACT( json , json path ) Selects a value in json according to the JSONPath expression json path . json path must be a string constant.
- Syntax IP functions FORMAT IP() Converts 32 least significant bits of integer value to human-readable IPv4 address string.
- FORMAT IP( integer value ) Converts 32 least significant bits of integer value to human-readable IPv4 address string.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Use one of the following values: DAY HOUR MONTH YEAR --use avro logical types={true false} If the FORMAT part of the --external table definition flag is set to AVRO , then this flag specifies whether to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ). --parquet enable list inference={true false} If the FORMAT part of the --external table definition flag is set to PARQUET , then this flag specifies whether to use schema inference for Parquet LIST logical types. --parquet enum as string={true false} If the FORMAT part of the --external table definition flag is set to PARQUET , then this flag specifies whether to infer Parquet ENUM logical types as STRING values.
- Use one of the following values: AVRO CSV DATASTORE BACKUP (use this value for Filestore) GOOGLE SHEETS NEWLINE DELIMITED JSON ORC PARQUET The default value is CSV . --use avro logical types={true false} If the --source format flag is set to AVRO , then this flag specifies whether to convert logical types into their corresponding types (such as TIMESTAMP ) instead of only using their raw types (such as INTEGER ).
- This flag applies for loading CSV, JSON, and Google Sheets data only. --null marker= STRING An optional custom string that represents a NULL value in CSV data. --projection fields= PROPERTY NAMES If you set --source format to DATASTORE BACKUP , then this flag indicates which entity properties to load from a Datastore export.
- For example, consider files with the following structure: gs://bucket/path to table/dt=2019-06-01/country=USA/id=7/file.avro gs://bucket/path to table/dt=2019-05-31/country=CA/id=3/file.avro If you use AUTO or STRINGS modes, then the following values are acceptable: gs://bucket/path to table gs://bucket/path to table/ If you use CUSTOM mode, then the following values are acceptable: gs://bucket/path to table/{dt:DATE}/{country:STRING}/{id:INTEGER} gs://bucket/path to table/{dt:STRING}/{country:STRING}/{id:INTEGER} gs://bucket/path to table/{dt:DATE}/{country:STRING}/{id:STRING} For more information about using the bq mkdef command, see Creating a table definition file for an external data source . --ignore unknown values={true false} or -i={true false} Specifies whether to ignore any values in a row that are not present in the schema.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.792Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery BigNumeric data type"
feature_slug: "bigquery-bignumeric-data-type"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions"
keywords:
  - "supports high precision decimals"
  - "BigNumeric literal"
  - "BIGNUMERIC precision and scale"
  - "CREATE TABLE with BIGNUMERIC"
  - "Standard SQL BIGNUMERIC"
  - "BIGNUMERIC data type"
  - "BIGNUMERIC"
  - "BigNumeric"
---

# BigQuery BigNumeric data type

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigNumeric type support is now generally available in BigQuery standard SQL.

## Extended Definition

BigNumeric type support is now generally available in BigQuery standard SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: STRONG
- Re-rank rationale: The page lists BIGNUMERIC (SQL type name) in BigQuery data types and provides its numeric precision characteristics.

Evidence snippets:
- To learn more about the literal representation of a BIGNUMERIC type, see BIGNUMERIC literals .
- Name Precision, Scale, and Range NUMERIC DECIMAL Precision: 38 Scale: 9 Minimum value greater than 0 that can be handled: 1e-9 Min: -9.9999999999999999999999999999999999999E+28 Max: 9.9999999999999999999999999999999999999E+28 BIGNUMERIC BIGDECIMAL Precision: approximately 76.8 digits (the 77th digit is partial) Scale: 38 Minimum value greater than 0 that can be handled: 1e-38 Min: -5.7896044618658097711785492504343953926634992332820282019728792003956564819968E+38 Max: 5.7896044618658097711785492504343953926634992332820282019728792003956564819967E+38 DECIMAL is an alias for NUMERIC .
- Numeric types Numeric types include the following types: INT64 with alias INT , SMALLINT , INTEGER , BIGINT , TINYINT , BYTEINT NUMERIC with alias DECIMAL BIGNUMERIC with alias BIGDECIMAL FLOAT64 Integer type Integers are numeric values that don't have fractional components.
- BIGNUMERIC 32 logical bytes BOOL 1 logical byte BYTES 2 logical bytes + the number of logical bytes in the value DATE 8 logical bytes DATETIME 8 logical bytes FLOAT64 8 logical bytes GEOGRAPHY 16 logical bytes + 24 logical bytes the number of vertices in the geography type.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A parameterized string with a maximum length of 10 y: A STRUCT containing a (an array of parameterized bytes with a maximum length of 5), b (a parameterized NUMERIC with a maximum precision of 15, maximum scale of 2, and rounding mode set to 'ROUND HALF EVEN'), and c (a float) z: A parameterized BIGNUMERIC with a maximum precision of 35 and maximum scale of 0 Creating a partitioned table The following example creates a partitioned table named newtable in mydataset using a DATE column: CREATE TABLE mydataset . newtable ( transaction id INT64 , transaction date DATE ) PARTITION BY transaction date OPTIONS ( partition expiration days = 3 , description = "a table partitioned by transaction date" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details description STRING Example: description="a unique id" This property is equivalent to the schema.fields[].description table resource property. rounding mode STRING Example: rounding mode = "ROUND HALF EVEN" This specifies the rounding mode that's used for values written to a NUMERIC or BIGNUMERIC type column or STRUCT field.

### String functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- 7FA INT64 f Decimal notation, in -.(fractional part) for finite values, and in lowercase for non-finite values 392.650000 inf nan NUMERIC BIGNUMERIC FLOAT64 F Decimal notation, in -.(fractional part) for finite values, and in uppercase for non-finite values 392.650000 INF NAN NUMERIC BIGNUMERIC FLOAT64 e Scientific notation (mantissa/exponent), lowercase 3.926500e+02 inf nan NUMERIC BIGNUMERIC FLOAT64 E Scientific notation (mantissa/exponent), uppercase 3.926500E+02 INF NAN NUMERIC BIGNUMERIC FLOAT64 g Either decimal notation or scientific notation, depending on the input value's exponent and the specified precision.
- A column reference is evaluated as one the following data types: STRING INT64 BOOL NUMERIC BIGNUMERIC TIMESTAMP TIME DATE DATETIME ARRAY STRUCT When the expression is evaluated, the result is cast to a STRING , and then the function looks for the search value in the result.
- 392.65 3.9265e+07 inf nan NUMERIC BIGNUMERIC FLOAT64 G Either decimal notation or scientific notation, depending on the input value's exponent and the specified precision.
- 392.65 3.9265E+07 INF NAN NUMERIC BIGNUMERIC FLOAT64 p Produces a one-line printable string representing JSON.


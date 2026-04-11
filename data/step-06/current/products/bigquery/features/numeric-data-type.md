---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.871Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "NUMERIC data type"
feature_slug: "numeric-data-type"
latest_feature_date: "2018-08-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/data-types"
keywords:
  - "exact numeric values"
  - "CAST AS NUMERIC"
  - "NUMERIC precision"
  - "NUMERIC range"
  - "NUMERIC data type"
  - "NUMERIC"
---

# NUMERIC data type

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The NUMERIC data type is generally available in BigQuery.

## Extended Definition

The NUMERIC data type is generally available in BigQuery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- For example, a NUMERIC data type can be changed to a BIGNUMERIC type but not the reverse.
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A parameterized string with a maximum length of 10 y: A STRUCT containing a (an array of parameterized bytes with a maximum length of 5), b (a parameterized NUMERIC with a maximum precision of 15, maximum scale of 2, and rounding mode set to 'ROUND HALF EVEN'), and c (a float) z: A parameterized BIGNUMERIC with a maximum precision of 35 and maximum scale of 0 Creating a partitioned table The following example creates a partitioned table named newtable in mydataset using a DATE column: CREATE TABLE mydataset . newtable ( transaction id INT64 , transaction date DATE ) PARTITION BY transaction date OPTIONS ( partition expiration days = 3 , description = "a table partitioned by transaction date" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples Changing the data type for a column The following example changes the data type of column c1 from an INT64 to NUMERIC : CREATE TABLE dataset . my table ( c1 INT64 ); ALTER TABLE dataset . my table ALTER COLUMN c1 SET DATA TYPE NUMERIC ; Changing the data type for a field The following example changes the data type of one of the fields in the s1 column: CREATE TABLE dataset . my table ( s1 STRUCT < a INT64 , b STRING > ); ALTER TABLE dataset . my table ALTER COLUMN s1 SET DATA TYPE STRUCT < a NUMERIC , b STRING > ; Changing precision The following example changes the precision of a parameterized data type column: CREATE TABLE dataset . my table ( pt NUMERIC ( 7 , 2 )); ALTER TABLE dataset . my table ALTER COLUMN pt SET DATA TYPE NUMERIC ( 8 , 2 ); ALTER COLUMN SET DEFAULT statement Sets the default value of a column.
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Name Precision, Scale, and Range NUMERIC DECIMAL Precision: 38 Scale: 9 Minimum value greater than 0 that can be handled: 1e-9 Min: -9.9999999999999999999999999999999999999E+28 Max: 9.9999999999999999999999999999999999999E+28 BIGNUMERIC BIGDECIMAL Precision: approximately 76.8 digits (the 77th digit is partial) Scale: 38 Minimum value greater than 0 that can be handled: 1e-38 Min: -5.7896044618658097711785492504343953926634992332820282019728792003956564819968E+38 Max: 5.7896044618658097711785492504343953926634992332820282019728792003956564819967E+38 DECIMAL is an alias for NUMERIC .
- Floating point semantics When working with floating point numbers, there are special non-numeric values that need to be considered: NaN and +/-inf Arithmetic operators provide standard IEEE-754 behavior for all finite input values that produce finite output and for all operations for which at least one input is non-finite.
- Numeric types Numeric types include the following types: INT64 with alias INT , SMALLINT , INTEGER , BIGINT , TINYINT , BYTEINT NUMERIC with alias DECIMAL BIGNUMERIC with alias BIGDECIMAL FLOAT64 Integer type Integers are numeric values that don't have fractional components.
- BIGNUMERIC 32 logical bytes BOOL 1 logical byte BYTES 2 logical bytes + the number of logical bytes in the value DATE 8 logical bytes DATETIME 8 logical bytes FLOAT64 8 logical bytes GEOGRAPHY 16 logical bytes + 24 logical bytes the number of vertices in the geography type.

### Legacy SQL data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: The page provides a direct definition for NUMERIC in Legacy SQL, but only as part of legacy-type documentation rather than a full feature status definition.

Evidence snippets:
- The following cast and conversion functions are supported in legacy SQL: CAST(<numeric> AS STRING) CAST(<bignumeric> AS STRING) CAST(<string> AS NUMERIC) CAST(<string> AS BIGNUMERIC) Civil time in legacy SQL You can read civil time data types—DATE, TIME, and DATETIME—and process them with non-modifying operators such as SELECT list (with aliases) , GROUP BY keys , and pass-through fields in window functions, etc.
- Exact numeric in legacy SQL You can read NUMERIC or BIGNUMERIC values in non-modifying clauses such as SELECT list (with aliases) , GROUP BY keys , and pass-through fields in window functions, and so on.
- However, any computation over NUMERIC or BIGNUMERIC values, including comparisons, produces undefined results.
- BIGNUMERIC Legacy SQL has limited support for BIGNUMERIC.


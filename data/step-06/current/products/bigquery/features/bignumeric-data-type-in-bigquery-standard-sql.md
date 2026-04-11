---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.797Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigNumeric data type in BigQuery Standard SQL"
feature_slug: "bignumeric-data-type-in-bigquery-standard-sql"
latest_feature_date: "2020-12-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical"
keywords:
  - "extended decimal"
  - "high-precision numeric"
  - "CAST to BIGNUMERIC"
  - "BIGNUMERIC precision"
  - "BIGNUMERIC data type"
  - "Standard SQL data types"
  - "BigNumeric"
---

# BigNumeric data type in BigQuery Standard SQL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL added the BigNumeric data type for high-precision computations.

## Extended Definition

BigQuery Standard SQL added the BigNumeric data type for high-precision computations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: STRONG
- Re-rank rationale: This reference page is for BigQuery GoogleSQL/Standard SQL and explicitly documents BIGNUMERIC as a supported type with its precision details.

Evidence snippets:
- Name Precision, Scale, and Range NUMERIC DECIMAL Precision: 38 Scale: 9 Minimum value greater than 0 that can be handled: 1e-9 Min: -9.9999999999999999999999999999999999999E+28 Max: 9.9999999999999999999999999999999999999E+28 BIGNUMERIC BIGDECIMAL Precision: approximately 76.8 digits (the 77th digit is partial) Scale: 38 Minimum value greater than 0 that can be handled: 1e-38 Min: -5.7896044618658097711785492504343953926634992332820282019728792003956564819968E+38 Max: 5.7896044618658097711785492504343953926634992332820282019728792003956564819967E+38 DECIMAL is an alias for NUMERIC .
- Numeric types Numeric types include the following types: INT64 with alias INT , SMALLINT , INTEGER , BIGINT , TINYINT , BYTEINT NUMERIC with alias DECIMAL BIGNUMERIC with alias BIGDECIMAL FLOAT64 Integer type Integers are numeric values that don't have fractional components.
- BIGNUMERIC 32 logical bytes BOOL 1 logical byte BYTES 2 logical bytes + the number of logical bytes in the value DATE 8 logical bytes DATETIME 8 logical bytes FLOAT64 8 logical bytes GEOGRAPHY 16 logical bytes + 24 logical bytes the number of vertices in the geography type.
- Parameterized data types Syntax: DATA TYPE ( param [ , ... ] ) You can use parameters to specify constraints for the following data types: STRING BYTES NUMERIC BIGNUMERIC A data type that's declared with parameters is called a parameterized data type.

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

### Lexical structure and syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Examples: SELECT BIGNUMERIC '0' ; SELECT BIGNUMERIC '123456' ; SELECT BIGNUMERIC '-3.14' ; SELECT BIGNUMERIC '-0.54321' ; SELECT BIGNUMERIC '1.23456e05' ; SELECT BIGNUMERIC '-9.876e-3' ; A BIGNUMERIC literal represents a constant value of the BIGNUMERIC data type .
- Examples: Literals divided into chunks Equivalent literals SELECT r'\n' / Only the prev is raw! / '\n' "b" """c"d"e""" '''f'g'h''' "1" "2", br'\n'/ Only the prev is raw! / b'\n' b"b" b"""c"d"e""" b'''f'g'h''' b"1" b"2", NUMERIC "1" r'2', DECIMAL / whole: / '1' / fractional: / ".23" / exponent= / "e+6", BIGNUMERIC '1' r"2", BIGDECIMAL / sign / '-' / whole: / '1' / fractional: / ".23" / exponent= / "e+6", RANGE<DATE> '[2014-01-01,' / comment / "2015-01-01)", DATE '2014' "-01-01", DATETIME '2016-01-01 ' r"12:00:00", TIMESTAMP '2018-10-01 ' "12:00:00+08" SELECT "\\n\nbc\"d\"ef'g'h12", b"\\n\nbc\"d\"ef'g'h12", NUMERIC "12", DECIMAL '1.23e+6', BIGNUMERIC '12', BIGDECIMAL "-1.23e+6", RANGE<DATE> '[2014-01-01 2015-01-01)', DATE '2014-01-01', DATETIME '2016-01-01 12:00:00', TIMESTAMP "2018-10-01 12:00:00+08" Escape sequences for string and bytes literals The following table lists all valid escape sequences for representing non-alphanumeric characters in string and bytes literals.
- BIGNUMERIC literals You can construct BIGNUMERIC literals using the BIGNUMERIC keyword followed by a floating point value in quotes.


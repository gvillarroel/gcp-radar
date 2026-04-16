---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.853Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "NUMERIC data type"
feature_slug: "numeric-data-type"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
keywords:
  - "numeric"
  - "type"
  - "bigquery"
  - "supports"
---

# NUMERIC data type

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports the NUMERIC data type.

## Extended Definition

BigQuery supports the NUMERIC data type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)

## Supporting Pages

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.

### Legacy SQL data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- Source ID: `site-api-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following cast and conversion functions are supported in legacy SQL: CAST(<numeric> AS STRING) CAST(<bignumeric> AS STRING) CAST(<string> AS NUMERIC) CAST(<string> AS BIGNUMERIC) Civil time in legacy SQL You can read civil time data types—DATE, TIME, and DATETIME—and process them with non-modifying operators such as SELECT list (with aliases) , GROUP BY keys , and pass-through fields in window functions, etc.
- To compute values using civil time data types, consider GoogleSQL , which supports all SQL operations on the DATE , DATETIME , and TIME data types.
- BYTES data read from a BigQuery table are base64-encoded, unless you export to Avro format, in which case the Avro bytes data type applies.
- Legacy SQL data types This document details the data types supported by BigQuery's legacy SQL query syntax.

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Numeric types Numeric types include the following types: INT64 with alias INT , SMALLINT , INTEGER , BIGINT , TINYINT , BYTEINT NUMERIC with alias DECIMAL BIGNUMERIC with alias BIGDECIMAL FLOAT64 Integer type Integers are numeric values that don't have fractional components.
- BIGNUMERIC 32 logical bytes BOOL 1 logical byte BYTES 2 logical bytes + the number of logical bytes in the value DATE 8 logical bytes DATETIME 8 logical bytes FLOAT64 8 logical bytes GEOGRAPHY 16 logical bytes + 24 logical bytes the number of vertices in the geography type.
- NUMERIC 16 logical bytes RANGE 16 logical bytes STRING 2 logical bytes + the UTF-8 encoded string size STRUCT 0 logical bytes + the size of the contained fields TIME 8 logical bytes TIMESTAMP 8 logical bytes A NULL value for any data type is calculated as 0 logical bytes.
- Parameterized data types Syntax: DATA TYPE ( param [ , ... ] ) You can use parameters to specify constraints for the following data types: STRING BYTES NUMERIC BIGNUMERIC A data type that's declared with parameters is called a parameterized data type.


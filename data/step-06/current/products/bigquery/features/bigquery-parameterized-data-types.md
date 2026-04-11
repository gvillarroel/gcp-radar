---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.784Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery parameterized data types"
feature_slug: "bigquery-parameterized-data-types"
latest_feature_date: "2021-06-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical"
keywords:
  - "precision and scale"
  - "parameterized data type"
  - "parameterized types"
  - "BIGNUMERIC(P,S)"
  - "BIGNUMERIC(P)"
  - "NUMERIC(P,S)"
  - "NUMERIC(P)"
  - "STRING(L)"
---

# BigQuery parameterized data types

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery adds support for parameterized types including STRING(L), BYTES(L), NUMERIC(P)/NUMERIC(P,S), and BIGNUMERIC(P)/BIGNUMERIC(P,S).

## Extended Definition

BigQuery adds support for parameterized types including STRING(L), BYTES(L), NUMERIC(P)/NUMERIC(P,S), and BIGNUMERIC(P)/BIGNUMERIC(P,S).

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
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: The page enumerates data types including STRING, BYTES, NUMERIC, and BIGNUMERIC, but it does not document parameterized forms such as STRING(L) or precision/scale syntax.

Evidence snippets:
- Maximum scale range: 0 ≤ S ≤ 9 Maximum precision range: max(1, S ) ≤ P ≤ S + 29 BIGNUMERIC(P[, S]) BIGDECIMAL(P[, S]) A BIGNUMERIC or BIGDECIMAL type with a maximum precision of P and maximum scale of S , where P and S are INT64 types.
- Parameterized decimal type Parameterized Type Description NUMERIC(P[,S]) DECIMAL(P[,S]) A NUMERIC or DECIMAL type with a maximum precision of P and maximum scale of S , where P and S are INT64 types.
- See Parameterized Data Types for more information on parameterized types and where they can be used.
- See Parameterized Data Types for more information on parameterized types and where they can be used.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- See Parameterized Data Types for more information about parameterized types.
- Examples Changing the data type for a column The following example changes the data type of column c1 from an INT64 to NUMERIC : CREATE TABLE dataset . my table ( c1 INT64 ); ALTER TABLE dataset . my table ALTER COLUMN c1 SET DATA TYPE NUMERIC ; Changing the data type for a field The following example changes the data type of one of the fields in the s1 column: CREATE TABLE dataset . my table ( s1 STRUCT < a INT64 , b STRING > ); ALTER TABLE dataset . my table ALTER COLUMN s1 SET DATA TYPE STRUCT < a NUMERIC , b STRING > ; Changing precision The following example changes the precision of a parameterized data type column: CREATE TABLE dataset . my table ( pt NUMERIC ( 7 , 2 )); ALTER TABLE dataset . my table ALTER COLUMN pt SET DATA TYPE NUMERIC ( 8 , 2 ); ALTER COLUMN SET DEFAULT statement Sets the default value of a column.
- CREATE TABLE mydataset . myclusteredtable ( input timestamp TIMESTAMP , customer id STRING , transaction amount NUMERIC ) PARTITION BY DATE ( input timestamp ) CLUSTER BY customer id OPTIONS ( partition expiration days = 3 , description = "a table clustered by customer id" ) AS SELECT FROM mydataset . myothertable If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- CREATE TABLE mydataset . myclusteredtable ( input timestamp TIMESTAMP , customer id STRING , transaction amount NUMERIC ) PARTITION BY TIMESTAMP TRUNC ( input timestamp , HOUR ) CLUSTER BY customer id OPTIONS ( partition expiration days = 3 , description = "a table clustered by customer id" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .

### Lexical structure and syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Timestamp literals Syntax: TIMESTAMP 'timestamp canonical format' Timestamp literals contain the TIMESTAMP keyword and timestamp canonical format , a string literal that conforms to the canonical timestamp format, enclosed in single quotation marks.
- Datetime literals Syntax: DATETIME 'datetime canonical format' Datetime literals contain the DATETIME keyword and datetime canonical format , a string literal that conforms to the canonical datetime format, enclosed in single quotation marks.
- Date literals Syntax: DATE 'date canonical format' Date literals contain the DATE keyword followed by date canonical format , a string literal that conforms to the canonical date format, enclosed in single quotation marks.
- Raw string r"abc+" r'''abc+''' r"""abc+""" r'f\(abc,(. ),def\)' Quoted or triple-quoted literals that have the raw string literal prefix ( r or R ) are interpreted as raw strings (sometimes described as regex strings).


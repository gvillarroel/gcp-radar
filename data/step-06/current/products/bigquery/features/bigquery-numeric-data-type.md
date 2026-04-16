---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.848Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery NUMERIC data type"
feature_slug: "bigquery-numeric-data-type"
latest_feature_date: "2018-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/data-types"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical"
keywords:
  - "bigquery"
  - "numeric"
  - "type"
  - "provides"
  - "exact"
  - "decimal"
  - "values"
---

# BigQuery NUMERIC data type

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides the NUMERIC data type for exact decimal values.

## Extended Definition

BigQuery provides the NUMERIC data type for exact decimal values.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)

## Supporting Pages

### Data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-types)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Numeric types Numeric types include the following types: INT64 with alias INT , SMALLINT , INTEGER , BIGINT , TINYINT , BYTEINT NUMERIC with alias DECIMAL BIGNUMERIC with alias BIGDECIMAL FLOAT64 Integer type Integers are numeric values that don't have fractional components.
- Decimal types Decimal type values are numeric values with fixed decimal precision and scale.
- To learn more about how BigQuery rounds values stored as a DECIMAL type, see rounding mode .
- Maximum scale range: 0 ≤ S ≤ 9 Maximum precision range: max(1, S ) ≤ P ≤ S + 29 BIGNUMERIC(P[, S]) BIGDECIMAL(P[, S]) A BIGNUMERIC or BIGDECIMAL type with a maximum precision of P and maximum scale of S , where P and S are INT64 types.

### Legacy SQL data types \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/data-types](https://docs.cloud.google.com/bigquery/docs/data-types)
- Source ID: `site-api-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Exact numeric in legacy SQL You can read NUMERIC or BIGNUMERIC values in non-modifying clauses such as SELECT list (with aliases) , GROUP BY keys , and pass-through fields in window functions, and so on.
- The following cast and conversion functions are supported in legacy SQL: CAST(<numeric> AS STRING) CAST(<bignumeric> AS STRING) CAST(<string> AS NUMERIC) CAST(<string> AS BIGNUMERIC) Civil time in legacy SQL You can read civil time data types—DATE, TIME, and DATETIME—and process them with non-modifying operators such as SELECT list (with aliases) , GROUP BY keys , and pass-through fields in window functions, etc.
- To compute values using civil time data types, consider GoogleSQL , which supports all SQL operations on the DATE , DATETIME , and TIME data types.
- Legacy SQL data types Your data can include the following data types: Data type Possible values STRING Variable-length character (UTF-8) data.

### Lexical structure and syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 4e2 Numeric literals that contain either a decimal point or an exponent marker are presumed to be type double.
- Examples: Literals divided into chunks Equivalent literals SELECT r'\n' / Only the prev is raw! / '\n' "b" """c"d"e""" '''f'g'h''' "1" "2", br'\n'/ Only the prev is raw! / b'\n' b"b" b"""c"d"e""" b'''f'g'h''' b"1" b"2", NUMERIC "1" r'2', DECIMAL / whole: / '1' / fractional: / ".23" / exponent= / "e+6", BIGNUMERIC '1' r"2", BIGDECIMAL / sign / '-' / whole: / '1' / fractional: / ".23" / exponent= / "e+6", RANGE<DATE> '[2014-01-01,' / comment / "2015-01-01)", DATE '2014' "-01-01", DATETIME '2016-01-01 ' r"12:00:00", TIMESTAMP '2018-10-01 ' "12:00:00+08" SELECT "\\n\nbc\"d\"ef'g'h12", b"\\n\nbc\"d\"ef'g'h12", NUMERIC "12", DECIMAL '1.23e+6', BIGNUMERIC '12', BIGDECIMAL "-1.23e+6", RANGE<DATE> '[2014-01-01 2015-01-01)', DATE '2014-01-01', DATETIME '2016-01-01 12:00:00', TIMESTAMP "2018-10-01 12:00:00+08" Escape sequences for string and bytes literals The following table lists all valid escape sequences for representing non-alphanumeric characters in string and bytes literals.
- Examples: SELECT BIGNUMERIC '0' ; SELECT BIGNUMERIC '123456' ; SELECT BIGNUMERIC '-3.14' ; SELECT BIGNUMERIC '-0.54321' ; SELECT BIGNUMERIC '1.23456e05' ; SELECT BIGNUMERIC '-9.876e-3' ; A BIGNUMERIC literal represents a constant value of the BIGNUMERIC data type .
- Examples: SELECT NUMERIC '0' ; SELECT NUMERIC '123456' ; SELECT NUMERIC '-3.14' ; SELECT NUMERIC '-0.54321' ; SELECT NUMERIC '1.23456e05' ; SELECT NUMERIC '-9.876e-3' ; A NUMERIC literal represents a constant value of the NUMERIC data type .


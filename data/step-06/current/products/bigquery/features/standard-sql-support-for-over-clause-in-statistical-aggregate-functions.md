---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.899Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Standard SQL support for OVER clause in statistical aggregate functions"
feature_slug: "standard-sql-support-for-over-clause-in-statistical-aggregate-functions"
latest_feature_date: "2017-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax"
keywords:
  - "windowed aggregate functions"
  - "STDDEV_SAMP"
  - "STDDEV_POP"
  - "VAR_SAMP"
  - "VAR_POP"
  - "VARIANCE"
  - "STDDEV"
  - "OVER with statistical functions"
---

# Standard SQL support for OVER clause in statistical aggregate functions

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL now supports using the OVER clause with statistical aggregate functions including STDDEV, STDDEV_POP, STDDEV_SAMP, VAR_POP, VAR_SAMP, and VARIANCE.

## Extended Definition

BigQuery Standard SQL now supports using the OVER clause with statistical aggregate functions including STDDEV, STDDEV_POP, STDDEV_SAMP, VAR_POP, VAR_SAMP, and VARIANCE.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions window functions in general but is scoped to Legacy SQL, not the specific Standard SQL OVER support for statistical aggregates.

Evidence snippets:
- COVAR POP( numeric expr1 , numeric expr2 ) Computes the population covariance of the values computed by numeric expr1 and numeric expr2 .
- COVAR SAMP( numeric expr1 , numeric expr2 ) Computes the sample covariance of the values computed by numeric expr1 and numeric expr2 .
- Use STDDEV SAMP() to compute the standard deviation of an entire population based on a representative sample of the population.
- Use STDDEV POP() to compute the standard deviation of a dataset that encompasses the entire population of interest.

### Functions (alphabetical) \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/functions-all)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: The page lists supported functions, but it does not provide syntax or explicit coverage of OVER-clause behavior for statistical aggregates.

Evidence snippets:
- STDDEV POP Computes the population (biased) standard deviation of the values.
- STDDEV SAMP Computes the sample (unbiased) standard deviation of the values.
- COVAR POP Computes the population covariance of a set of number pairs.
- COVAR SAMP Computes the sample covariance of a set of number pairs.

### Query syntax \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Details The following functions can be used on any column in a query with the AGGREGATION THRESHOLD clause, including the commonly used COUNT , SUM , and AVG functions: APPROX COUNT DISTINCT AVG COUNT COUNTIF LOGICAL AND LOGICAL OR SUM COVAR POP COVAR SAMP STDDEV POP STDDEV SAMP VAR POP VAR SAMP Example In the following example, an aggregation threshold is enforced on a query.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.890Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "PERCENTILE_CONT"
feature_slug: "percentile-cont"
latest_feature_date: "2017-09-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "PERCENTILE_CONT analytic"
  - "continuous percentile function"
  - "PERCENTILE_CONT syntax"
  - "PERCENTILE_CONT function"
  - "PERCENTILE_CONT OVER"
  - "PERCENTILE_CONT()"
  - "PERCENTILE_CONT"
  - "percentile_cont"
---

# PERCENTILE_CONT

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL now supports the PERCENTILE_CONT analytic function.

## Extended Definition

BigQuery Standard SQL now supports the PERCENTILE_CONT analytic function.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , PERCENT RANK () OVER ( PARTITION BY corpus ORDER BY word count DESC ) p rank , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count p rank handkerchief 29 0.0 satisfaction 5 0.25 displeasure 4 0.5 instruments 4 0.5 circumstance 3 1.0 PERCENTILE CONT( <percentile> ) Returns an interpolated value that would map to the percentile argument with respect to the window, after ordering them per the ORDER BY clause. <percentile> must be between 0 and 1.
- PERCENTILE CONT() Returns an interpolated value that would map to the percentile argument with respect to the window ...
- PERCENTILE CONT() Returns an interpolated value that would map to the percentile argument with respect to the window ...
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , PERCENTILE CONT ( 0 .


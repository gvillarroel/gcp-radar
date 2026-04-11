---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.890Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "PERCENTILE_DISC"
feature_slug: "percentile-disc"
latest_feature_date: "2017-09-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "PERCENTILE_DISC analytic"
  - "discrete percentile function"
  - "PERCENTILE_DISC syntax"
  - "PERCENTILE_DISC function"
  - "PERCENTILE_DISC OVER"
  - "PERCENTILE_DISC()"
  - "PERCENTILE_DISC"
  - "percentile_disc"
---

# PERCENTILE_DISC

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery Standard SQL now supports the PERCENTILE_DISC analytic function.

## Extended Definition

BigQuery Standard SQL now supports the PERCENTILE_DISC analytic function.

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
- 5 ) OVER ( PARTITION BY corpus ORDER BY word count DESC ) p cont , FROM [ bigquery - public - data : samples . shakespeare ] WHERE corpus = 'othello' and length ( word ) > 10 LIMIT 5 Returns: word word count p cont handkerchief 29 4 satisfaction 5 4 displeasure 4 4 instruments 4 4 circumstance 3 4 PERCENTILE DISC( <percentile> ) Returns the value nearest the percentile of the argument over the window. <percentile> must be between 0 and 1.
- This window function requires ORDER BY in the OVER clause. legacySQL SELECT word , word count , PERCENTILE DISC ( 0 .
- PERCENTILE DISC() Returns the value nearest the percentile of the argument over the window.
- PERCENTILE DISC() Returns the value nearest the percentile of the argument over the window.


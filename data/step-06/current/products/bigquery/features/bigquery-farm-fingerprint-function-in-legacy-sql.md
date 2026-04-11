---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.885Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery FARM_FINGERPRINT function in Legacy SQL"
feature_slug: "bigquery-farm-fingerprint-function-in-legacy-sql"
latest_feature_date: "2017-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql"
keywords:
  - "FARM_FINGERPRINT in legacy mode"
  - "FARM_FINGERPRINT Legacy SQL"
  - "Legacy FARM_FINGERPRINT"
  - "FARM_FINGERPRINT()"
  - "legacy SQL hash functions"
  - "Legacy SQL functions"
  - "BigQuery scalar functions"
---

# BigQuery FARM_FINGERPRINT function in Legacy SQL

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports the FARM_FINGERPRINT function in Legacy SQL.

## Extended Definition

BigQuery now supports the FARM_FINGERPRINT function in Legacy SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)

## Supporting Pages

### "Legacy SQL Syntax, Functions and Operators \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql](https://docs.cloud.google.com/bigquery/docs/reference/legacy-sql)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- FARM FINGERPRINT( expr ) Computes and returns a 64-bit signed fingerprint value of the STRING or BYTES input using the Fingerprint64 function from the open-source FarmHash library .
- The output of this function for a particular input will never change and matches the output of the FARM FINGERPRINT function when using GoogleSQL .
- FARM FINGERPRINT() Computes and returns a 64-bit signed fingerprint value ...
- FARM FINGERPRINT() Computes and returns a 64-bit signed fingerprint value ...


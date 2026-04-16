---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.254Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner PostgreSQL spanner.timestamptz_add function"
feature_slug: "spanner-postgresql-spanner-timestamptz-add-function"
latest_feature_date: "2023-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.AddSplitPointsRequest"
keywords:
  - "timestamptz"
  - "postgresql"
  - "supports"
  - "dialect"
---

# Spanner PostgreSQL spanner.timestamptz_add function

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports the PostgreSQL spanner.timestamptz_add function in the PostgreSQL dialect.

## Extended Definition

Spanner supports the PostgreSQL spanner.timestamptz_add function in the PostgreSQL dialect.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.AddSplitPointsRequest](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.AddSplitPointsRequest)

## Supporting Pages

### "Class AddSplitPointsRequest (3.63.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.AddSplitPointsRequest](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.AddSplitPointsRequest)
- Source ID: `site-python-reference`
- Final score: 34
- Re-rank relevance: N/A

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Commit timestamps in PostgreSQL-dialect databases Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to write a commit timestamp for each insert and update operation that you perform with Spanner in PostgreSQL-dialect databases.

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- Home Documentation Databases Spanner Reference Send feedback Dialect parity between GoogleSQL and PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page describes the dialect differences between GoogleSQL and PostgreSQL and offers recommendations for using PostgreSQL approaches for specific GoogleSQL features.
- GoogleSQL dialect feature differences GoogleSQL feature PostgreSQL dialect recommendation Sample datasets No recommendation available.


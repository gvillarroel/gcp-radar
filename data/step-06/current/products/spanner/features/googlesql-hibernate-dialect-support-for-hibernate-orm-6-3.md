---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.257Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "GoogleSQL Hibernate dialect support for Hibernate ORM 6.3"
feature_slug: "googlesql-hibernate-dialect-support-for-hibernate-orm-6-3"
latest_feature_date: "2023-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "hibernate"
  - "googlesql"
  - "supports"
  - "dialect"
---

# GoogleSQL Hibernate dialect support for Hibernate ORM 6.3

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports Hibernate ORM 6.3 via the GoogleSQL Hibernate dialect.

## Extended Definition

Spanner now supports Hibernate ORM 6.3 via the GoogleSQL Hibernate dialect.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres](https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- Home Documentation Databases Spanner Reference Send feedback Dialect parity between GoogleSQL and PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page describes the dialect differences between GoogleSQL and PostgreSQL and offers recommendations for using PostgreSQL approaches for specific GoogleSQL features.
- GoogleSQL dialect feature differences GoogleSQL feature PostgreSQL dialect recommendation Sample datasets No recommendation available.

### "Choosing the Right Dialect for Your Spanner Database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres](https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner implementation of GoogleSQL and the PostgreSQL interface: Feature parity: Both GoogleSQL and PostgreSQL dialects provide equivalent support for Spanner's unique features, such as interleaved tables and query hints.
- Familiarity: if your team is already familiar with either PostgreSQL or GoogleSQL syntax and tools, choosing that dialect can streamline development and reduce the learning curve.
- This page lists the deciding factors between using GoogleSQL and PostgreSQL interface dialect databases.
- When creating a Spanner database, you can choose between two SQL dialects: GoogleSQL and PostgreSQL.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Spanner Reference Send feedback Information schema for GoogleSQL-dialect databases Stay organized with collections Save and categorize content based on your preferences.
- Tables in the INFORMATION SCHEMA The following sections describe the tables in the INFORMATION SCHEMA for GoogleSQL-dialect databases.
- If you are using a PostgreSQL-dialect database, see Information schema for PostgreSQL-dialect databases .


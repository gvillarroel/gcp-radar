---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.332Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "NUMERIC Data Type"
feature_slug: "numeric-data-type"
latest_feature_date: "2020-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "availability"
  - "numeric"
  - "introduced"
  - "type"
---

# NUMERIC Data Type

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner introduced general availability of the NUMERIC data type.

## Extended Definition

Spanner introduced general availability of the NUMERIC data type.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- WITH numbers AS ( SELECT 1::int8 AS a, 9223372036854775807::int8 AS b UNION ALL SELECT 10, 2 ) SELECT CASE WHEN b = 0 THEN NULL WHEN a::numeric / b::numeric > 9223372036854775807 THEN NULL WHEN a::numeric / b::numeric < -9223372036854775808 THEN NULL ELSE a / b END AS result FROM numbers; SAFE.MULTIPLY We recommend that you protect against an overflow explicitly leveraging the NUMERIC data type during a multiplication operation.
- WITH numbers AS ( SELECT 1::int8 AS a, 9223372036854775807::int8 AS b UNION ALL SELECT 1, 2 ) SELECT CASE WHEN a::numeric b::numeric > 9223372036854775807 THEN NULL WHEN a::numeric b::numeric < -9223372036854775808 THEN NULL ELSE a b END AS result FROM numbers; SAFE.NEGATE We recommend that you protect against an overflow explicitly leveraging the NUMERIC data type during a negation operation.
- NUMERIC column as a primary key, secondary index, or foreign key We recommend using an index over a TEXT generated column, as shown in the following example: CREATE TABLE singers( id numeric NOT NULL, pk text GENERATED ALWAYS AS (id::text) STORED, PRIMARY KEY(pk) ); Protocol buffer data type You can store serialized protocol buffers as the PostgreSQL BYTEA data type .
- WITH numbers AS ( SELECT 9223372036854775807 AS a UNION ALL SELECT -9223372036854775808 ) SELECT CASE WHEN a <= -9223372036854775808 THEN NULL WHEN a >= 9223372036854775809 THEN NULL ELSE -a END AS result FROM numbers; SAFE.SUBTRACT We recommend that you protect against an overflow explicitly leveraging the NUMERIC data type during a subtraction operation.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Only two values are supported: 2 for double precision float8 , and bigint 10 for numeric For all other data types the value is NULL . numeric scale BIGINT Contains the scale of the numeric column type, which is the number of precision base units after the radix point.
- The default is public for a PostgreSQL-dialect database. sequence name character varying The name of the sequence. data type character varying Sequence only supports int8 . numeric precision bigint Not used.
- For all other data types, the value is NULL . numeric precision radix BIGINT The base (unit) of the precision for numeric types.
- The value is always NULL . numeric precision BIGINT The precision of the numeric data type of the current column.

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- This type of availability makes it a good choice for the critical authentication path required at the beginning of every player session.
- Similar to other relational databases, an inventory table in Spanner has a primary key that is a globally unique identifier for the item, as illustrated in the following table. itemID type playerID 7c14887e-8d45 1 6f1ede3b-25e2 8ca83609-bb93 40 6f1ede3b-25e2 33fedada-3400 1 5fa0aa7d-16da e4714487-075e 23 5fa0aa7d-16da d4fbfb92-a8bd 14 5fa0aa7d-16da 31b7067b-42ec 3 26a38c2c-123a In the example inventory table, itemID and playerID are truncated for readability.
- Spanner has configurations offering either 99.99% ("four nines") or 99.999% ("five nines") of availability , with "five nines" corresponding to less than five and a half minutes of unavailability in a year.
- Additionally, the high availability and data resiliency for which games often cluster their databases are handled transparently by Spanner, requiring no additional setup or management.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.260Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "FULL JOIN with USING in Spanner PostgreSQL dialect"
feature_slug: "full-join-with-using-in-spanner-postgresql-dialect"
latest_feature_date: "2023-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "join"
  - "postgresql"
  - "clause"
  - "databases"
  - "dialect"
  - "full"
  - "adds"
---

# FULL JOIN with USING in Spanner PostgreSQL dialect

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner adds support for FULL JOIN with the USING clause in PostgreSQL-dialect databases.

## Extended Definition

Spanner adds support for FULL JOIN with the USING clause in PostgreSQL-dialect databases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .
- The default is public for PostgreSQL-dialect databases. table name character varying The name of the table or view that contains the column. column name character varying The name of the column. privilege type character varying The type of the privilege ( SELECT , INSERT , or UPDATE ). is grantable character varying Not used.
- The default is public for PostgreSQL-dialect databases. table name character varying The name of the table or view that contains the column. column name character varying The name of the column. privilege type character varying The type of the privilege ( SELECT , INSERT , or UPDATE ). is grantable character varying Not used.

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Spanner Reference Send feedback Dialect parity between GoogleSQL and PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- TO BASE64 TO CODE POINTS TO HEX VAR SAMP Use the formula of the function explicitly (unbiased variance), as shown in the following: -- Use formula directly (unbiased) WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT Avg(x)::float8 AS mean FROM numbers ) SELECT Sum(Power(numbers.x - mean.mean, 2)) / (Count(x) - 1) AS variance FROM numbers CROSS JOIN mean VARIANCE Use the formula of the function explicitly (unbiased variance), as shown in the following example: -- Use formula directly (unbiased VARIANCE like VAR SAMP) WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1) AS variance FROM numbers CROSS JOIN mean What's next Learn more about Spanner's PostgreSQL language support .
- This page describes the dialect differences between GoogleSQL and PostgreSQL and offers recommendations for using PostgreSQL approaches for specific GoogleSQL features.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- If you are using a PostgreSQL-dialect database, see Information schema for PostgreSQL-dialect databases .
- Home Documentation Databases Spanner Reference Send feedback Information schema for GoogleSQL-dialect databases Stay organized with collections Save and categorize content based on your preferences.
- Tables in the INFORMATION SCHEMA The following sections describe the tables in the INFORMATION SCHEMA for GoogleSQL-dialect databases.
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .


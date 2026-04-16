---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.320Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "NUMERIC key column support"
feature_slug: "numeric-key-column-support"
latest_feature_date: "2021-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/change-streams"
keywords:
  - "numeric"
  - "columns"
  - "column"
  - "supports"
  - "type"
---

# NUMERIC key column support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports using the NUMERIC data type in key columns, including primary keys, foreign keys, and secondary indexes.

## Extended Definition

Spanner now supports using the NUMERIC data type in key columns, including primary keys, foreign keys, and secondary indexes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- The value of this column is parsable as part of a query. option type character varying A data type name that is the type of this option value. column privileges This row-filtered view lists all fine-grained access control privileges granted on all columns to any database role, including public .
- Only two values are supported: 2 for double precision float8 , and bigint 10 for numeric For all other data types the value is NULL . numeric scale BIGINT Contains the scale of the numeric column type, which is the number of precision base units after the radix point.
- Column name Type Description catalog name character varying The database name. key column usage This view identifies all columns in the current database that are referenced by a unique, primary key, or foreign key constraint.

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- NUMERIC column as a primary key, secondary index, or foreign key We recommend using an index over a TEXT generated column, as shown in the following example: CREATE TABLE singers( id numeric NOT NULL, pk text GENERATED ALWAYS AS (id::text) STORED, PRIMARY KEY(pk) ); Protocol buffer data type You can store serialized protocol buffers as the PostgreSQL BYTEA data type .
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- Use a subquery with the ORDER BY or LIMIT clauses, as shown in the following example: SELECT FROM ( (expression) UNION ALL SELECT NULL, … -- as many columns as you have ) AS rows ORDER BY 1 NULLS LAST LIMIT 1; ARRAY CONCAT AGG You can use ARRAY AGG and UNNEST as shown in the following example: WITH albums AS ( SELECT ARRAY['Song A', NULL, 'Song B'] AS songs UNION ALL SELECT NULL UNION ALL SELECT ARRAY[]::TEXT[] ) SELECT ARRAY AGG(song) FROM albums, UNNEST(songs) song; ARRAY FIRST Use the array subscript operator, as shown in the following example: SELECT array expression[1]; Note that this will return NULL for empty arrays.
- The following columns in the SPANNER SYS statistics tables: Transaction statistics : TOTAL LATENCY DISTRIBUTION and OPERATIONS BY TABLE Query statistics : LATENCY DISTRIBUTION Lock Statistics : SAMPLE LOCK REQUESTS We recommend using the following JSON-compatible string representation columns instead: Transaction statistics : TOTAL LATENCY DISTRIBUTION JSON STRING and OPERATIONS BY TABLE JSON STRING Query statistics : LATENCY DISTRIBUTION JSON STRING Lock Statistics : SAMPLE LOCK REQUESTS JSON STRING TABLESAMPLE We recommend that you apply a custom function F , which converts a row to TEXT or BYTEA .

### Change streams overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams](https://docs.cloud.google.com/spanner/docs/change-streams)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Content of a data change record Every data change record written by a change stream includes the following information about the data change: The name of the affected table The names, values, and data types of the primary keys identifying the changed row The names and data types of the changed row's columns that were captured based on the change stream definition.
- The availability of the old values and the content they track, which can be either the modified columns only or the entire tracked row, depends on the user-configured value capture type .
- Types of data changes that change streams watch The data changes that a change stream watches include all inserts, updates, and deletes made to the tables and columns that it watches.
- You can use DDL to specify one of the following value capture types for a change stream: OLD AND NEW VALUES : Captures both old and new values of a row's modified columns.


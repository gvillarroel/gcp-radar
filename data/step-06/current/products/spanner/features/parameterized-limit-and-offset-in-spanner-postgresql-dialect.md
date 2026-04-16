---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.278Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Parameterized LIMIT and OFFSET in Spanner PostgreSQL dialect"
feature_slug: "parameterized-limit-and-offset-in-spanner-postgresql-dialect"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/psql-commands"
keywords:
  - "parameterized"
  - "offset"
  - "limit"
  - "postgresql"
  - "supports"
  - "dialect"
---

# Parameterized LIMIT and OFFSET in Spanner PostgreSQL dialect

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner PostgreSQL dialect now supports parameterized LIMIT and OFFSET operations in queries.

## Extended Definition

Spanner PostgreSQL dialect now supports parameterized LIMIT and OFFSET operations in queries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/psql-commands](https://docs.cloud.google.com/spanner/docs/psql-commands)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- Home Documentation Databases Spanner Reference Send feedback Dialect parity between GoogleSQL and PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page describes the dialect differences between GoogleSQL and PostgreSQL and offers recommendations for using PostgreSQL approaches for specific GoogleSQL features.
- GoogleSQL dialect feature differences GoogleSQL feature PostgreSQL dialect recommendation Sample datasets No recommendation available.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The default is public for a PostgreSQL-dialect database. sequence name character varying The name of the sequence. data type character varying Sequence only supports int8 . numeric precision bigint Not used.
- Note: Queries against the information schema for PostgreSQL-dialect databases that use select and reference columns by offset might not work the same as they do against open source PostgreSQL databases.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .

### psql command-line tool \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/psql-commands](https://docs.cloud.google.com/spanner/docs/psql-commands)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples DML The following example shows how to submit a batch of INSERT statements. psql - h localhost - p 5432 - c "INSERT INTO users (id, age, firstname) VALUES (1, 25, 'Alex'); \ INSERT INTO users (id, age, firstname) VALUES (2, 31, 'Dana'); \ INSERT INTO users (id, age, firstname) VALUES (3, 54, 'Izumi');" The next example shows how to execute the SQL statements in the file insert contacts.sql . psql - h localhost - c "$(cat contacts insert.sql)" DDL This example submits a batch of ALTER TABLE statements. psql - h localhost - p 5432 test - db - c "ALTER TABLE users ADD col1 integer; \ ALTER TABLE users ADD col2 text; ALTER TABLE users ADD col3 float8;" COPY command for importing data Use the COPY FROM STDIN command to import data from a text or CSV file into a PostgreSQL-dialect database.
- Meta-commands The PostgreSQL interface supports the following psql meta-commands categories: Note: Enter the \? command to see the commands under each category.
- This page describes the psql commands that the PostgreSQL interface for Spanner supports.
- To learn how to connect with psql see Connecting psql to a PostgreSQL-dialect database .


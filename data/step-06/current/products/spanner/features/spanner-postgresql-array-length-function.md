---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.251Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner PostgreSQL array_length function"
feature_slug: "spanner-postgresql-array-length-function"
latest_feature_date: "2023-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "length"
  - "postgresql"
  - "supports"
  - "dialect"
  - "array"
---

# Spanner PostgreSQL array_length function

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports the PostgreSQL array_length function in the PostgreSQL dialect.

## Extended Definition

Spanner supports the PostgreSQL array_length function in the PostgreSQL dialect.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- ARRAY INCLUDES Use the equality operator with the ANY function, as shown in the following example: SELECT search value = ANY(array to search); ARRAY INCLUDES ALL Use the array contains operator, as shown in the following example: SELECT array to search @> search values; ARRAY INCLUDES ANY Use the array overlap operator, as shown in the following example: SELECT array to search && search values; ARRAY IS DISTINCT Use a subquery to count distinct values and compare them to the original array length, as shown in the following example: SELECT ARRAY LENGTH(value, 1) = ( SELECT COUNT(DISTINCT e) FROM UNNEST(value) AS e); ARRAY LAST Use the array subscript operator, as shown in the following example SELECT (value)[ARRAY LENGTH(value, 1)]; This returns NULL for empty arrays.
- Home Documentation Databases Spanner Reference Send feedback Dialect parity between GoogleSQL and PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- This page describes the dialect differences between GoogleSQL and PostgreSQL and offers recommendations for using PostgreSQL approaches for specific GoogleSQL features.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- The default is public for a PostgreSQL-dialect database. sequence name character varying The name of the sequence. data type character varying Sequence only supports int8 . numeric precision bigint Not used.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .
- The default is public for PostgreSQL-dialect databases. table name character varying The name of the table or view that contains the column. column name character varying The name of the column. privilege type character varying The type of the privilege ( SELECT , INSERT , or UPDATE ). is grantable character varying Not used.

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- In a new tab in Spanner Studio , copy and paste the following DDL statement to re-create the productDescriptionEmbedding column: ALTER TABLE products DROP COLUMN productDescriptionEmbedding ; ALTER TABLE products ADD COLUMN productDescriptionEmbedding ARRAY<FLOAT32> ( vector length = > VECTOR LENGTH VALUE ); Replace VECTOR LENGTH VALUE with the maximum output dimensions of the embedding model you've chosen.
- PostgreSQL interface note: The examples in this topic are intended for GoogleSQL-dialect databases.
- Spanner vector search isn't available in the PostgreSQL dialect.
- CREATE TABLE products ( categoryId INT64 NOT NULL , productId INT64 NOT NULL , productName STRING ( MAX ) NOT NULL , productDescription STRING ( MAX ) NOT NULL , productDescriptionEmbedding ARRAY<FLOAT32> , createTime TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ), inventoryCount INT64 NOT NULL , priceInCents INT64 , ) PRIMARY KEY ( categoryId , productId ); Don't make any changes in Show encryption options .


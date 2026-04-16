---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.197Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner full-text search for PostgreSQL dialect"
feature_slug: "cloud-spanner-full-text-search-for-postgresql-dialect"
latest_feature_date: "2025-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/vector-search-tutorial"
keywords:
  - "postgresql"
  - "generally"
  - "available"
  - "dialect"
  - "search"
  - "full"
  - "text"
---

# Cloud Spanner full-text search for PostgreSQL dialect

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Full-text search is generally available for Cloud Spanner PostgreSQL-dialect databases.

## Extended Definition

Full-text search is generally available for Cloud Spanner PostgreSQL-dialect databases.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- GoogleSQL dialect feature differences GoogleSQL feature PostgreSQL dialect recommendation Sample datasets No recommendation available.
- NUMERIC column as a primary key, secondary index, or foreign key We recommend using an index over a TEXT generated column, as shown in the following example: CREATE TABLE singers( id numeric NOT NULL, pk text GENERATED ALWAYS AS (id::text) STORED, PRIMARY KEY(pk) ); Protocol buffer data type You can store serialized protocol buffers as the PostgreSQL BYTEA data type .
- SELECT to json(table) FROM table We recommend explicitly mapping each column with the jsonb build object function: WITH singers AS ( SELECT 1::int8 AS id, 'Singer First Name'::text AS first name ) SELECT jsonb build object('id', id, 'first name', first name) FROM singers; ORDER BY … COLLATE … No recommendation available.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- Other notable differences in the information schema for PostgreSQL-dialect databases are: Some of the table columns for open source PostgreSQL are available, but not populated in PostgreSQL-dialect databases.
- Tables related to open source PostgreSQL features that are not supported in PostgreSQL-dialect databases are not available.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .

### "Get started using Spanner for generative AI applications \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/vector-search-tutorial](https://docs.cloud.google.com/spanner/docs/vector-search-tutorial)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner vector search isn't available in the PostgreSQL dialect.
- PREDICT ( MODEL EmbeddingsModel , ( SELECT "I'd like to buy a starter bike for my 3 year old child" AS content )) )) AS distance FROM products WHERE inventoryCount > 0 ORDER BY distance LIMIT 5 ; Click Run to return the products that best match your search text.
- The following example demonstrates how to register a Vertex AI text embedding model , which is then used to perform similarity search to find similar products in a database.
- PostgreSQL interface note: The examples in this topic are intended for GoogleSQL-dialect databases.


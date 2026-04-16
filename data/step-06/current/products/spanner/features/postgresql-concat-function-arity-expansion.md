---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.231Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "PostgreSQL CONCAT Function Arity Expansion"
feature_slug: "postgresql-concat-function-arity-expansion"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function"
keywords:
  - "expansion"
  - "arity"
  - "concat"
  - "compatible"
  - "postgresql"
  - "supports"
---

# PostgreSQL CONCAT Function Arity Expansion

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner’s PostgreSQL-compatible CONCAT() function now supports more than four arguments.

## Extended Definition

Spanner’s PostgreSQL-compatible CONCAT() function now supports more than four arguments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- Home Documentation Databases Spanner Reference Send feedback Dialect parity between GoogleSQL and PostgreSQL Stay organized with collections Save and categorize content based on your preferences.
- TO BASE64 TO CODE POINTS TO HEX VAR SAMP Use the formula of the function explicitly (unbiased variance), as shown in the following: -- Use formula directly (unbiased) WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT Avg(x)::float8 AS mean FROM numbers ) SELECT Sum(Power(numbers.x - mean.mean, 2)) / (Count(x) - 1) AS variance FROM numbers CROSS JOIN mean VARIANCE Use the formula of the function explicitly (unbiased variance), as shown in the following example: -- Use formula directly (unbiased VARIANCE like VAR SAMP) WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1) AS variance FROM numbers CROSS JOIN mean What's next Learn more about Spanner's PostgreSQL language support .
- Use a subquery with the ORDER BY or LIMIT clauses, as shown in the following example: SELECT FROM ( (expression) UNION ALL SELECT NULL, … -- as many columns as you have ) AS rows ORDER BY 1 NULLS LAST LIMIT 1; ARRAY CONCAT AGG You can use ARRAY AGG and UNNEST as shown in the following example: WITH albums AS ( SELECT ARRAY['Song A', NULL, 'Song B'] AS songs UNION ALL SELECT NULL UNION ALL SELECT ARRAY[]::TEXT[] ) SELECT ARRAY AGG(song) FROM albums, UNNEST(songs) song; ARRAY FIRST Use the array subscript operator, as shown in the following example: SELECT array expression[1]; Note that this will return NULL for empty arrays.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- The default is public for a PostgreSQL-dialect database. sequence name character varying The name of the sequence. data type character varying Sequence only supports int8 . numeric precision bigint Not used.
- Tables in information schema for PostgreSQL-dialect databases The tables and views in the information schema are compatible with the tables and views in the information schema of open source PostgreSQL.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .

### "Choose among vector distance functions to measure vector embeddings similarity\

- URL: [https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function](https://docs.cloud.google.com/spanner/docs/choose-vector-distance-function)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- Function Description Formula Relationship to increasing similarity Dot product Calculates the cosine of angle \(\theta\) multiplied by the product of corresponding vector magnitudes. \(a 1b 1+a 2b 2+...+a nb n\) \(= a b cos(\theta)\) Increases Cosine distance The cosine distance function subtracts the cosine similarity from one ( cosine distance() = 1 - cosine similarity ).
- 1 - \(\frac{a^T b}{ a \cdot b }\) Decreases Euclidean distance Measures the straight line distance between two vectors. \(\sqrt{(a 1-b 1)^2+(a 2-b 2)^2+...+(a N-b N)^2}\) Decreases Choose a similarity measure Depending on whether or not all your vector embeddings are normalized, you can determine which similarity measure to use to find similarity.
- Home Documentation Databases Spanner Guides Send feedback Choose among vector distance functions to measure vector embeddings similarity Stay organized with collections Save and categorize content based on your preferences.
- In addition, if you know which distance function your model was trained with, use that distance function to measure similarity between your vector embeddings.


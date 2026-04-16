---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.218Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "GoogleSQL FLOAT32 function"
feature_slug: "googlesql-float32-function"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp"
keywords:
  - "float32"
  - "number"
  - "convert"
  - "googlesql"
  - "supports"
  - "json"
---

# GoogleSQL FLOAT32 function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports the GoogleSQL FLOAT32 function to convert a JSON number into a SQL FLOAT32 value.

## Extended Definition

Spanner now supports the GoogleSQL FLOAT32 function to convert a JSON number into a SQL FLOAT32 value.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)

## Supporting Pages

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) FROM Products LIMIT 10 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update the source table to include additional columns to store the embeddings Next, update the source table schema to include an additional column of the data type ARRAY<FLOAT32> to store the generated embeddings: GoogleSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME ARRAY<FLOAT32> ; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings PostgreSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME real []; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings For example, using the products table example, run: GoogleSQL ALTER TABLE Products ADD COLUMN desc embed ARRAY<FLOAT32> ; PostgreSQL ALTER TABLE Products ADD COLUMN desc embed real []; You can add another column to manage the version of the embedding model.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , DATA COLUMN NAME ))) ) / @ remote udf max rows per rpc= MAX ROWS / - > 'predictions' - > 0 - > 'embeddings' - > 'values' ), EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI embedding model MODEL VERSION : the version of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the text embedding model used to backfill your embeddings FILTER CONDITION : a partitionable filter condition that you want to apply An example backfill query for the products table: GoogleSQL UPDATE products SET products . desc embed = ( SELECT embeddings . values FROM SAFE .
- Register an embedding model GoogleSQL Register a text embedding model with the Vertex AI model endpoint in your Spanner database: CREATE MODEL MODEL NAME INPUT ( content STRING ( MAX ) ) OUTPUT ( embeddings STRUCT<values ARRAY<FLOAT32> > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , default batch size = 5 ) Replace the following: MODEL NAME : the name of the Vertex AI text embedding model PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint PostgreSQL In the PostgreSQL dialect, there is no need to register the model.
- You can also tune the parallelism using the statement-level hint @{pdml max parallelism=DESIRED NUMBER} while using GoogleSQL.

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The following columns in the SPANNER SYS statistics tables: Transaction statistics : TOTAL LATENCY DISTRIBUTION and OPERATIONS BY TABLE Query statistics : LATENCY DISTRIBUTION Lock Statistics : SAMPLE LOCK REQUESTS We recommend using the following JSON-compatible string representation columns instead: Transaction statistics : TOTAL LATENCY DISTRIBUTION JSON STRING and OPERATIONS BY TABLE JSON STRING Query statistics : LATENCY DISTRIBUTION JSON STRING Lock Statistics : SAMPLE LOCK REQUESTS JSON STRING TABLESAMPLE We recommend that you apply a custom function F , which converts a row to TEXT or BYTEA .
- WITH numbers AS ( SELECT 1::int8 AS a, 9223372036854775807::int8 AS b UNION ALL SELECT 1, 2 ) SELECT CASE WHEN a::numeric - b::numeric > 9223372036854775807 THEN NULL WHEN a::numeric - b::numeric < -9223372036854775808 THEN NULL ELSE a - b END AS result FROM numbers; SAFE.TO JSON No recommendation available.
- SINH Use the formula of the function explicitly, as shown in the following example: SELECT (EXP(x) - EXP(-x)) / 2; SPLIT Use the regexp split to array function, as shown in the following example: WITH letters AS ( SELECT '' as letter group UNION ALL SELECT 'a' as letter group UNION ALL SELECT 'b c d' as letter group ) SELECT regexp split to array(letter group, ' ') as example FROM letters; STDDEV Use the formula of the function explicitly (unbiased standard deviation), as shown in the following example: WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SQRT(SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1)) AS stddev FROM numbers CROSS JOIN mean STDDEV SAMP Use the formula of the function explicitly (unbiased standard deviation), as shown in the following example: WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SQRT(SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1)) AS stddev FROM numbers CROSS JOIN mean TANH Use the formula of the function explicitly.
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.

### "Commit timestamps in GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- ResultSet getters can only be used to retrieve // non null values. resultSet . isNull ( "MarketingBudget" ) ? "NULL" : resultSet . getLong ( "MarketingBudget" ), resultSet . isNull ( "LastUpdateTime" ) ? "NULL" : resultSet . getTimestamp ( "LastUpdateTime" )); } } } Node.js // ... // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); const query = { sql : SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime FROM Albums ORDER BY LastUpdateTime DESC , }; // Queries rows from the Albums table try { const [ rows ] = await database . run ( query ); rows . forEach ( row = > { const json = row . toJSON (); console . log ( SingerId: ${ json .
- For example to add a LastUpdateTime column to the Performances table, use the following statement: ALTER TABLE Performances ADD COLUMN LastUpdateTime TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ) Convert a timestamp column to a commit timestamp column You can convert an existing timestamp column into a commit timestamp column, but doing so requires Spanner to validate that the existing timestamp values are in the past.
- Create and delete a commit timestamp column Use the allow commit timestamp column option to add and remove support for commit timestamps: When creating a new table to specify that a column supports commit timestamps.
- Home Documentation Databases Spanner Guides Send feedback Commit timestamps in GoogleSQL-dialect databases Stay organized with collections Save and categorize content based on your preferences.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.282Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "ARRAY_FILTER function"
feature_slug: "array-filter-function"
latest_feature_date: "2023-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
keywords:
  - "filter"
  - "googlesql"
  - "supports"
  - "array"
---

# ARRAY_FILTER function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner GoogleSQL now supports the ARRAY_FILTER function.

## Extended Definition

Spanner GoogleSQL now supports the ARRAY_FILTER function.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)

## Supporting Pages

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , DATA COLUMN NAME ))) ) / @ remote udf max rows per rpc= MAX ROWS / - > 'predictions' - > 0 - > 'embeddings' - > 'values' ), EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI embedding model MODEL VERSION : the version of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the text embedding model used to backfill your embeddings FILTER CONDITION : a partitionable filter condition that you want to apply An example backfill query for the products table: GoogleSQL UPDATE products SET products . desc embed = ( SELECT embeddings . values FROM SAFE .
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) FROM Products LIMIT 10 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update the source table to include additional columns to store the embeddings Next, update the source table schema to include an additional column of the data type ARRAY<FLOAT32> to store the generated embeddings: GoogleSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME ARRAY<FLOAT32> ; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings PostgreSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME real []; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings For example, using the products table example, run: GoogleSQL ALTER TABLE Products ADD COLUMN desc embed ARRAY<FLOAT32> ; PostgreSQL ALTER TABLE Products ADD COLUMN desc embed real []; You can add another column to manage the version of the embedding model.
- Register an embedding model GoogleSQL Register a text embedding model with the Vertex AI model endpoint in your Spanner database: CREATE MODEL MODEL NAME INPUT ( content STRING ( MAX ) ) OUTPUT ( embeddings STRUCT<values ARRAY<FLOAT32> > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , default batch size = 5 ) Replace the following: MODEL NAME : the name of the Vertex AI text embedding model PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint PostgreSQL In the PostgreSQL dialect, there is no need to register the model.
- EMBEDDING VERSION COLUMN = MODEL VERSION WHERE FILTER CONDITION ; Replace the following: TABLE NAME : the name of the table with the textual data EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings DATA COLUMN NAME : the name of the column with the textual data MODEL NAME : the name of the Vertex AI embedding model MAX ROWS : the maximum number of rows per RPC EMBEDDING VERSION COLUMN : the column that manages the version of the embedding model used to backfill your embeddings MODEL VERSION : the version of the text embedding model FILTER CONDITION : a partitionable filter condition that you want to apply Using SAFE.ML.PREDICT returns NULL for failed requests.

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- SINH Use the formula of the function explicitly, as shown in the following example: SELECT (EXP(x) - EXP(-x)) / 2; SPLIT Use the regexp split to array function, as shown in the following example: WITH letters AS ( SELECT '' as letter group UNION ALL SELECT 'a' as letter group UNION ALL SELECT 'b c d' as letter group ) SELECT regexp split to array(letter group, ' ') as example FROM letters; STDDEV Use the formula of the function explicitly (unbiased standard deviation), as shown in the following example: WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SQRT(SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1)) AS stddev FROM numbers CROSS JOIN mean STDDEV SAMP Use the formula of the function explicitly (unbiased standard deviation), as shown in the following example: WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SQRT(SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1)) AS stddev FROM numbers CROSS JOIN mean TANH Use the formula of the function explicitly.
- ARRAY INCLUDES Use the equality operator with the ANY function, as shown in the following example: SELECT search value = ANY(array to search); ARRAY INCLUDES ALL Use the array contains operator, as shown in the following example: SELECT array to search @> search values; ARRAY INCLUDES ANY Use the array overlap operator, as shown in the following example: SELECT array to search && search values; ARRAY IS DISTINCT Use a subquery to count distinct values and compare them to the original array length, as shown in the following example: SELECT ARRAY LENGTH(value, 1) = ( SELECT COUNT(DISTINCT e) FROM UNNEST(value) AS e); ARRAY LAST Use the array subscript operator, as shown in the following example SELECT (value)[ARRAY LENGTH(value, 1)]; This returns NULL for empty arrays.
- Use a subquery with the ORDER BY or LIMIT clauses, as shown in the following example: SELECT FROM ( (expression) UNION ALL SELECT NULL, … -- as many columns as you have ) AS rows ORDER BY 1 NULLS LAST LIMIT 1; ARRAY CONCAT AGG You can use ARRAY AGG and UNNEST as shown in the following example: WITH albums AS ( SELECT ARRAY['Song A', NULL, 'Song B'] AS songs UNION ALL SELECT NULL UNION ALL SELECT ARRAY[]::TEXT[] ) SELECT ARRAY AGG(song) FROM albums, UNNEST(songs) song; ARRAY FIRST Use the array subscript operator, as shown in the following example: SELECT array expression[1]; Note that this will return NULL for empty arrays.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Fine-grained access control users see filtered results for some INFORMATION SCHEMA tables depending on their database role.
- An empty string if unnamed. name string The name of the property graph. nodeTables array<object> A list of GraphElementTable objects for nodes. edgeTables array<object> A list of GraphElementTable objects for edges. labels array<object> A list of GraphElementLabel objects. propertyDeclarations array<object> A list of GraphPropertyDeclaration objects.
- GraphNodeTableReference nodeTableName string The name of the graph element table. edgeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the edges. nodeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the nodes.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.189Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "JSON search indexes"
feature_slug: "json-search-indexes"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "accelerate"
  - "makes"
  - "indexes"
  - "generally"
  - "available"
  - "search"
  - "json"
---

# JSON search indexes

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner makes JSON search indexes generally available to accelerate JSON document queries over JSON and JSONB data across both GoogleSQL and PostgreSQL dialects.

## Extended Definition

Spanner makes JSON search indexes generally available to accelerate JSON document queries over JSON and JSONB data across both GoogleSQL and PostgreSQL dialects.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- SELECT to json(table) FROM table We recommend explicitly mapping each column with the jsonb build object function: WITH singers AS ( SELECT 1::int8 AS id, 'Singer First Name'::text AS first name ) SELECT jsonb build object('id', id, 'first name', first name) FROM singers; ORDER BY … COLLATE … No recommendation available.
- WITH numbers AS ( SELECT 1::int8 AS a, 9223372036854775807::int8 AS b UNION ALL SELECT 1, 2 ) SELECT CASE WHEN a::numeric - b::numeric > 9223372036854775807 THEN NULL WHEN a::numeric - b::numeric < -9223372036854775808 THEN NULL ELSE a - b END AS result FROM numbers; SAFE.TO JSON No recommendation available.
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- ARRAY INCLUDES Use the equality operator with the ANY function, as shown in the following example: SELECT search value = ANY(array to search); ARRAY INCLUDES ALL Use the array contains operator, as shown in the following example: SELECT array to search @> search values; ARRAY INCLUDES ANY Use the array overlap operator, as shown in the following example: SELECT array to search && search values; ARRAY IS DISTINCT Use a subquery to count distinct values and compare them to the original array length, as shown in the following example: SELECT ARRAY LENGTH(value, 1) = ( SELECT COUNT(DISTINCT e) FROM UNNEST(value) AS e); ARRAY LAST Use the array subscript operator, as shown in the following example SELECT (value)[ARRAY LENGTH(value, 1)]; This returns NULL for empty arrays.

### Build context sets using Gemini CLI \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli](https://docs.cloud.google.com/spanner/docs/build-context-gemini-cli)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the context set file and facets, see Context sets overview Generate value search queries If you want to generate value searches that specify how the system should search for and match specific values within a concept type, then you can use the /generate targeted value searches command.
- Enter the value search configuration as follows: Table name: TABLE NAME Column name: COLUMN NAME Concept type: CONCEPT TYPE Match function: MATCH FUNCTION Description: DESCRIPTION Replace the following: TABLE NAME : The table where the column associated with the concept type exists.
- Enable required services Enable the following services for your project: Data Analytics API with Gemini Gemini for Google Cloud API Dataplex Universal Catalog API Prepare a Spanner instance Make sure that a Spanner instance is available.
- To generate a value index, perform the following steps: Run the /generate targeted value searches command: /generate targeted value searches Enter spanner to select Spanner as the database engine.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- All other principals can see only indexes that meet either of the following requirements: Any of the SELECT , INSERT , or UPDATE fine-grained access control privileges are granted at the column level on all columns in the index to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only indexes that meet either of the following requirements: Any of the SELECT , INSERT , or UPDATE fine-grained access control privileges are granted at the column level on all columns in the index to the current database role, to roles of which the current database role is a member, or to public .
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .


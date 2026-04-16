---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.230Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner PostgreSQL array support"
feature_slug: "cloud-spanner-postgresql-array-support"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
keywords:
  - "unnest"
  - "features"
  - "including"
  - "postgresql"
  - "supports"
  - "array"
---

# Cloud Spanner PostgreSQL array support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner now supports PostgreSQL array features including UNNEST, array slicing, ANY/SOME/ALL comparisons, and array overlap/containment functions and operators.

## Extended Definition

Cloud Spanner now supports PostgreSQL array features including UNNEST, array slicing, ANY/SOME/ALL comparisons, and array overlap/containment functions and operators.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .
- For arrays, the value ARRAY . option value character varying The value of the option. routine privileges This row-filtered view lists all fine-grained access control privileges granted on all change stream read functions to any database role, including public .
- The default is public for a PostgreSQL-dialect database. sequence name character varying The name of the sequence. data type character varying Sequence only supports int8 . numeric precision bigint Not used.
- Tables related to open source PostgreSQL features that are not supported in PostgreSQL-dialect databases are not available.

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- ARRAY INCLUDES Use the equality operator with the ANY function, as shown in the following example: SELECT search value = ANY(array to search); ARRAY INCLUDES ALL Use the array contains operator, as shown in the following example: SELECT array to search @> search values; ARRAY INCLUDES ANY Use the array overlap operator, as shown in the following example: SELECT array to search && search values; ARRAY IS DISTINCT Use a subquery to count distinct values and compare them to the original array length, as shown in the following example: SELECT ARRAY LENGTH(value, 1) = ( SELECT COUNT(DISTINCT e) FROM UNNEST(value) AS e); ARRAY LAST Use the array subscript operator, as shown in the following example SELECT (value)[ARRAY LENGTH(value, 1)]; This returns NULL for empty arrays.
- Use a subquery with the ORDER BY or LIMIT clauses, as shown in the following example: SELECT FROM ( (expression) UNION ALL SELECT NULL, … -- as many columns as you have ) AS rows ORDER BY 1 NULLS LAST LIMIT 1; ARRAY CONCAT AGG You can use ARRAY AGG and UNNEST as shown in the following example: WITH albums AS ( SELECT ARRAY['Song A', NULL, 'Song B'] AS songs UNION ALL SELECT NULL UNION ALL SELECT ARRAY[]::TEXT[] ) SELECT ARRAY AGG(song) FROM albums, UNNEST(songs) song; ARRAY FIRST Use the array subscript operator, as shown in the following example: SELECT array expression[1]; Note that this will return NULL for empty arrays.
- ARRAY MAX Use a subquery with UNNEST and the MAX function, as shown in the following example: SELECT MAX(e) FROM UNNEST(value) AS e; ARRAY MIN Use a subquery with UNNEST and the MIN function, as shown in the following example: SELECT MIN(e) FROM UNNEST(value) AS e; ARRAY REVERSE No recommendation available.

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Apply ( ctx , m ) return err } Java static final List<Performance> PERFORMANCES = Arrays . asList ( new Performance ( 1 , 4 , "2017-10-05" , 11000 ), new Performance ( 1 , 19 , "2017-11-02" , 15000 ), new Performance ( 2 , 42 , "2017-12-23" , 7000 )); static void writeExampleDataWithTimestamp ( DatabaseClient dbClient ) { List<Mutation> mutations = new ArrayList <> (); for ( Performance performance : PERFORMANCES ) { mutations . add ( Mutation . newInsertBuilder ( "Performances" ) . set ( "SingerId" ) . to ( performance . singerId ) . set ( "VenueId" ) . to ( performance . venueId ) . set ( "EventDate" ) . to ( performance . eventDate ) . set ( "Revenue" ) . to ( performance . revenue ) . set ( "LastUpdateTime" ) . to ( Value .
- List<Mutation> mutations = Arrays . asList ( Mutation . newUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( 1 ) . set ( "AlbumId" ) . to ( 1 ) . set ( "MarketingBudget" ) . to ( 1000000 ) . set ( "LastUpdateTime" ) . to ( Value .
- Home Documentation Databases Spanner Guides Send feedback Commit timestamps in PostgreSQL-dialect databases Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to write a commit timestamp for each insert and update operation that you perform with Spanner in PostgreSQL-dialect databases.


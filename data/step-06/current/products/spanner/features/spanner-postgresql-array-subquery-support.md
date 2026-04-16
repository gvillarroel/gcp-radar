---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.251Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner PostgreSQL array(subquery) support"
feature_slug: "spanner-postgresql-array-subquery-support"
latest_feature_date: "2023-12-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
keywords:
  - "construct"
  - "subquery"
  - "postgresql"
  - "supports"
  - "dialect"
  - "array"
---

# Spanner PostgreSQL array(subquery) support

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports the PostgreSQL array(subquery) construct in the PostgreSQL dialect.

## Extended Definition

Spanner supports the PostgreSQL array(subquery) construct in the PostgreSQL dialect.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- ARRAY INCLUDES Use the equality operator with the ANY function, as shown in the following example: SELECT search value = ANY(array to search); ARRAY INCLUDES ALL Use the array contains operator, as shown in the following example: SELECT array to search @> search values; ARRAY INCLUDES ANY Use the array overlap operator, as shown in the following example: SELECT array to search && search values; ARRAY IS DISTINCT Use a subquery to count distinct values and compare them to the original array length, as shown in the following example: SELECT ARRAY LENGTH(value, 1) = ( SELECT COUNT(DISTINCT e) FROM UNNEST(value) AS e); ARRAY LAST Use the array subscript operator, as shown in the following example SELECT (value)[ARRAY LENGTH(value, 1)]; This returns NULL for empty arrays.
- Use a subquery with the ORDER BY or LIMIT clauses, as shown in the following example: SELECT FROM ( (expression) UNION ALL SELECT NULL, … -- as many columns as you have ) AS rows ORDER BY 1 NULLS LAST LIMIT 1; ARRAY CONCAT AGG You can use ARRAY AGG and UNNEST as shown in the following example: WITH albums AS ( SELECT ARRAY['Song A', NULL, 'Song B'] AS songs UNION ALL SELECT NULL UNION ALL SELECT ARRAY[]::TEXT[] ) SELECT ARRAY AGG(song) FROM albums, UNNEST(songs) song; ARRAY FIRST Use the array subscript operator, as shown in the following example: SELECT array expression[1]; Note that this will return NULL for empty arrays.
- ARRAY MAX Use a subquery with UNNEST and the MAX function, as shown in the following example: SELECT MAX(e) FROM UNNEST(value) AS e; ARRAY MIN Use a subquery with UNNEST and the MIN function, as shown in the following example: SELECT MIN(e) FROM UNNEST(value) AS e; ARRAY REVERSE No recommendation available.

### Generate ML predictions using SQL \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- Source ID: `site-docs-root`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- ML predictions work with both GoogleSQL-dialect databases and PostgreSQL-dialect databases.
- PREDICT ( MODEL GeminiPro , ( SELECT "Is 7 a prime number?" AS prompt ), STRUCT ( 256 AS maxOutputTokens , 0.2 AS temperature , 40 as topK , 0.95 AS topP ) ); Expected output The expected out is as follows: + --------------------+ content + --------------------+ "Yes" + --------------------+ PostgreSQL Run the model select spanner . ml predict row ( '{ "endpoint": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-pro", "default batch size": 1 }' :: jsonb , '{ "instances":[{"prompt": "Is 7 a prime number?"}], "parameters":{"maxOutputTokens":256, "topK": 40, "topP":0.96, "temperature":0.2} }' ); Expected output The expected out is the following: +--------------------+ content +--------------------+ "Yes" +--------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following is an example schema from Classification and regression Overview CREATE MODEL MyClassificationModel INPUT ( length FLOAT64 , material STRING ( MAX ), tag array ARRAY<STRING ( MAX ) > ) OUTPUT ( scores ARRAY<FLOAT64> , classes ARRAY<STRING ( MAX ) > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /endpoints/ ENDPOINT ID ' ) Replace the following: PROJECT ID : the ID of your Google Cloud project LOCATION : the ID of the Google Cloud region that the model is located in—for example, us-central1 ENDPOINT ID : the ID of the ML model you want to use—for example, gemini-pro For more information about models, see Model API reference for Generative AI .
- Spanner Vertex AI integration gives you the ability to generate predictions using your SQL code by calling the ML.PREDICT function for GoogleSQL or the spanner.ML PREDICT ROW function for PostgreSQL.

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Commit timestamps in PostgreSQL-dialect databases Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to write a commit timestamp for each insert and update operation that you perform with Spanner in PostgreSQL-dialect databases.
- Apply ( ctx , m ) return err } Java static final List<Performance> PERFORMANCES = Arrays . asList ( new Performance ( 1 , 4 , "2017-10-05" , 11000 ), new Performance ( 1 , 19 , "2017-11-02" , 15000 ), new Performance ( 2 , 42 , "2017-12-23" , 7000 )); static void writeExampleDataWithTimestamp ( DatabaseClient dbClient ) { List<Mutation> mutations = new ArrayList <> (); for ( Performance performance : PERFORMANCES ) { mutations . add ( Mutation . newInsertBuilder ( "Performances" ) . set ( "SingerId" ) . to ( performance . singerId ) . set ( "VenueId" ) . to ( performance . venueId ) . set ( "EventDate" ) . to ( performance . eventDate ) . set ( "Revenue" ) . to ( performance . revenue ) . set ( "LastUpdateTime" ) . to ( Value .
- List<Mutation> mutations = Arrays . asList ( Mutation . newUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( 1 ) . set ( "AlbumId" ) . to ( 1 ) . set ( "MarketingBudget" ) . to ( 1000000 ) . set ( "LastUpdateTime" ) . to ( Value .


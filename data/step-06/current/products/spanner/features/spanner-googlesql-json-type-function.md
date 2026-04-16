---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.242Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner GoogleSQL JSON_TYPE function"
feature_slug: "spanner-googlesql-json-type-function"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
keywords:
  - "returns"
  - "generally"
  - "available"
  - "googlesql"
  - "type"
  - "json"
---

# Spanner GoogleSQL JSON_TYPE function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner GoogleSQL JSON_TYPE function is now generally available and returns the JSON type of the outermost JSON value as a SQL STRING.

## Extended Definition

The Spanner GoogleSQL JSON_TYPE function is now generally available and returns the JSON type of the outermost JSON value as a SQL STRING.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- SELECT to json(table) FROM table We recommend explicitly mapping each column with the jsonb build object function: WITH singers AS ( SELECT 1::int8 AS id, 'Singer First Name'::text AS first name ) SELECT jsonb build object('id', id, 'first name', first name) FROM singers; ORDER BY … COLLATE … No recommendation available.
- WITH numbers AS ( SELECT 1::int8 AS a, 9223372036854775807::int8 AS b UNION ALL SELECT 1, 2 ) SELECT CASE WHEN a::numeric - b::numeric > 9223372036854775807 THEN NULL WHEN a::numeric - b::numeric < -9223372036854775808 THEN NULL ELSE a - b END AS result FROM numbers; SAFE.TO JSON No recommendation available.
- CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, type TEXT NOT NULL CHECK (type IN ('C', 'B', 'A')) ); GROUP METHOD hint No recommendation available.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- The PROPERTY GRAPH METADATA JSON column contains a PropertyGraph JSON object defined as the following: JSON object name Field name JSON type Description PropertyGraph catalog string The name of the catalog.
- Always FUNCTION DATA TYPE STRING The data type that the routine returns ROUTINE BODY STRING The type of the routine body ( SQL or EXTERNAL ).
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables in the INFORMATION SCHEMA: SELECT t . table name FROM information schema . tables AS t WHERE t . table schema = "SPANNER SYS" Return information about the columns in the user table MyTable in default schema: SELECT t . column name , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table catalog = '' AND t . table schema = '' AND t . table name = 'MyTable' ORDER BY t . table catalog , t . table schema , t . table name , t . ordinal position Return information on what the default leader region for the database is.

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Java private static final String SINGERS NAME STREAM QUERY TEMPLATE = "SELECT FROM \"spanner\".\"read json SingersNameStream\"" + "($1, $2, $3, $4, null)" ; // Helper method to conveniently create change stream query texts and // bind parameters. public static Statement getChangeStreamQuery ( String partitionToken , Timestamp startTimestamp , Timestamp endTimestamp , long heartbeatMillis ) { return Statement . newBuilder ( SINGERS NAME STREAM QUERY TEMPLATE ) . bind ( "p1" ) . to ( startTimestamp ) . bind ( "p2" ) . to ( endTimestamp ) . bind ( "p3" ) . to ( partitionToken ) . bind ( "p4" ) . to ( heartbeatMillis ) . build (); } Change streams record format GoogleSQL The change streams read function returns a single ChangeRecord column of type ARRAY<STRUCT<...>> .
- The query workflow design should appoint one parent to wait and schedule the query on child token 4 . child par t i t io ns record : { "record type" : "child partitions" , "start timestamp" : "2022-05-01T09:30:15Z" , "record sequence" : "1000012389" , "child partitions" : [ { "token" : "child token 4" , "parent partition tokens" : [ "child token 2" , "child token 3" ], } ], } GoogleSQL SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:30:15Z" , end timestamp = > NULL , partition token = > "child token 4" , heartbeat milliseconds = > 10000 ); PostgreSQL SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:30:15Z' , NULL , 'child token 4' , 10000 , NULL ); Find examples of handling and parsing change stream records in the Apache Beam SpannerIO Dataflow connector on GitHub .
- PostgreSQL The change streams read function returns a single ChangeRecord column of type JSON with the following structure: { "data change record" : {}, "heartbeat record" : {}, "child partitions record" : {} } There are three possible keys in this object: data change record , heartbeat record and child partitions record , the corresponding value type is JSON .
- GoogleSQL SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 1" , heartbeat milliseconds = > 10000 ); SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 2" , heartbeat milliseconds = > 10000 ); SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 3" , heartbeat milliseconds = > 10000 ); PostgreSQL SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 1' , 10000 , NULL ); SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 2' , 10000 , NULL ); SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 3' , 10000 , NULL ); The query on child token 2 finishes after returning another child partition record.


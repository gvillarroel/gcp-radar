---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.180Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner GoogleSQL SPLIT_SUBSTR() function"
feature_slug: "spanner-googlesql-split-substr-function"
latest_feature_date: "2025-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
keywords:
  - "extracting"
  - "substr"
  - "substring"
  - "split"
  - "googlesql"
  - "supports"
---

# Spanner GoogleSQL SPLIT_SUBSTR() function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports the SPLIT_SUBSTR() GoogleSQL function for extracting a substring from a string based on delimiter-separated segment count and index.

## Extended Definition

Spanner now supports the SPLIT_SUBSTR() GoogleSQL function for extracting a substring from a string based on delimiter-separated segment count and index.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- FROM BASE32 FROM BASE64 FROM HEX GENERATE ARRAY GENERATE DATE ARRAY NET.HOST Use a regular expression and the substring function, as shown in the following example: / Use modified regular expression from https://tools.ietf.org/html/rfc3986#appendix-A. / SELECT Substring('http://www.google.com/test' FROM '^(?:[^:/?#]+:)?(?://)?([^/?#] )?[^?#] (?:\\?[^#] )?(?:#. )?') NET.IP FROM STRING No recommendation available.
- SINH Use the formula of the function explicitly, as shown in the following example: SELECT (EXP(x) - EXP(-x)) / 2; SPLIT Use the regexp split to array function, as shown in the following example: WITH letters AS ( SELECT '' as letter group UNION ALL SELECT 'a' as letter group UNION ALL SELECT 'b c d' as letter group ) SELECT regexp split to array(letter group, ' ') as example FROM letters; STDDEV Use the formula of the function explicitly (unbiased standard deviation), as shown in the following example: WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SQRT(SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1)) AS stddev FROM numbers CROSS JOIN mean STDDEV SAMP Use the formula of the function explicitly (unbiased standard deviation), as shown in the following example: WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SQRT(SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1)) AS stddev FROM numbers CROSS JOIN mean TANH Use the formula of the function explicitly.
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- Home Documentation Databases Spanner Reference Send feedback Dialect parity between GoogleSQL and PostgreSQL Stay organized with collections Save and categorize content based on your preferences.

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- This page describes change streams in Spanner for GoogleSQL-dialect databases and PostgreSQL-dialect databases, including: The split-based partitioning model The format and content of change stream records The low-level syntax used to query those records An example of the query workflow You use the Spanner API to query change streams directly .
- GoogleSQL SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 1" , heartbeat milliseconds = > 10000 ); SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 2" , heartbeat milliseconds = > 10000 ); SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:00:01Z" , end timestamp = > NULL , partition token = > "child token 3" , heartbeat milliseconds = > 10000 ); PostgreSQL SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 1' , 10000 , NULL ); SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 2' , 10000 , NULL ); SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:00:01Z' , NULL , 'child token 3' , 10000 , NULL ); The query on child token 2 finishes after returning another child partition record.
- The query workflow design should appoint one parent to wait and schedule the query on child token 4 . child par t i t io ns record : { "record type" : "child partitions" , "start timestamp" : "2022-05-01T09:30:15Z" , "record sequence" : "1000012389" , "child partitions" : [ { "token" : "child token 4" , "parent partition tokens" : [ "child token 2" , "child token 3" ], } ], } GoogleSQL SELECT ChangeRecord FROM READ SingersNameStream ( start timestamp = > "2022-05-01T09:30:15Z" , end timestamp = > NULL , partition token = > "child token 4" , heartbeat milliseconds = > 10000 ); PostgreSQL SELECT FROM "spanner" . "read json SingersNameStream" ( '2022-05-01T09:30:15Z' , NULL , 'child token 4' , 10000 , NULL ); Find examples of handling and parsing change stream records in the Apache Beam SpannerIO Dataflow connector on GitHub .
- Java private static final String SINGERS NAME STREAM QUERY TEMPLATE = "SELECT FROM \"spanner\".\"read json SingersNameStream\"" + "($1, $2, $3, $4, null)" ; // Helper method to conveniently create change stream query texts and // bind parameters. public static Statement getChangeStreamQuery ( String partitionToken , Timestamp startTimestamp , Timestamp endTimestamp , long heartbeatMillis ) { return Statement . newBuilder ( SINGERS NAME STREAM QUERY TEMPLATE ) . bind ( "p1" ) . to ( startTimestamp ) . bind ( "p2" ) . to ( endTimestamp ) . bind ( "p3" ) . to ( partitionToken ) . bind ( "p4" ) . to ( heartbeatMillis ) . build (); } Change streams record format GoogleSQL The change streams read function returns a single ChangeRecord column of type ARRAY<STRUCT<...>> .

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Example: Savepoint support (Click to expand) The following example shows how to enable and disable savepoints support in the Spanner JDBC driver. try ( Connection connection = DriverManager . getConnection ( String . format ( "jdbc:cloudspanner:/projects/%s/instances/%s/databases/%s" , "my-project" , "my-instance" , "my-database" ))) { // Savepoints can only be used when AutoCommit=false. connection . setAutoCommit ( false ); // Disables setting a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='DISABLED'" ); // The following statement fails because savepoints have been disabled. connection . setSavepoint ( "my savepoint1" ); // Enables setting a savepoint and releasing a savepoint. // Rolling back to a savepoint is disabled. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='FAIL AFTER ROLLBACK'" ); Savepoint mySavepoint2 = connection . setSavepoint ( "my savepoint2" ); connection . createStatement (). execute ( "insert into my table (id, value) values (1, 'One')" ); connection . releaseSavepoint ( mySavepoint2 ); connection . commit (); // Enables setting, releasing and rolling back to a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='ENABLED'" ); Savepoint mySavepoint3 = connection . setSavepoint ( "my savepoint3" ); connection . createStatement (). execute ( "insert into my table (id, value) values (2, 'Two')" ); connection . rollback ( mySavepoint3 ); } What's next Learn how to connect JDBC to a GoogleSQL-dialect database .
- The Spanner JDBC driver supports three alternatives for executing partitioned queries: SET AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- The Spanner JDBC driver (Java Database Connectivity) supports session management statements, which let you modify the state of your connection, execute transactions, and efficiently execute batches of statements.
- Home Documentation Databases Spanner Reference Send feedback JDBC session management commands (GoogleSQL) Stay organized with collections Save and categorize content based on your preferences.


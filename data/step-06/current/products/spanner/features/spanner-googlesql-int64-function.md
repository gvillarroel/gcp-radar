---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.241Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner GoogleSQL INT64 function"
feature_slug: "spanner-googlesql-int64-function"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp"
keywords:
  - "int64"
  - "converts"
  - "generally"
  - "available"
  - "googlesql"
  - "json"
---

# Spanner GoogleSQL INT64 function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner GoogleSQL INT64 JSON function is now generally available and converts a JSON number to a SQL INT64.

## Extended Definition

The Spanner GoogleSQL INT64 JSON function is now generally available and converts a JSON number to a SQL INT64.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- The following columns in the SPANNER SYS statistics tables: Transaction statistics : TOTAL LATENCY DISTRIBUTION and OPERATIONS BY TABLE Query statistics : LATENCY DISTRIBUTION Lock Statistics : SAMPLE LOCK REQUESTS We recommend using the following JSON-compatible string representation columns instead: Transaction statistics : TOTAL LATENCY DISTRIBUTION JSON STRING and OPERATIONS BY TABLE JSON STRING Query statistics : LATENCY DISTRIBUTION JSON STRING Lock Statistics : SAMPLE LOCK REQUESTS JSON STRING TABLESAMPLE We recommend that you apply a custom function F , which converts a row to TEXT or BYTEA .
- SELECT to json(table) FROM table We recommend explicitly mapping each column with the jsonb build object function: WITH singers AS ( SELECT 1::int8 AS id, 'Singer First Name'::text AS first name ) SELECT jsonb build object('id', id, 'first name', first name) FROM singers; ORDER BY … COLLATE … No recommendation available.
- WITH numbers AS ( SELECT 1::int8 AS a, 9223372036854775807::int8 AS b UNION ALL SELECT 1, 2 ) SELECT CASE WHEN a::numeric - b::numeric > 9223372036854775807 THEN NULL WHEN a::numeric - b::numeric < -9223372036854775808 THEN NULL ELSE a - b END AS result FROM numbers; SAFE.TO JSON No recommendation available.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .
- The PROPERTY GRAPH METADATA JSON column contains a PropertyGraph JSON object defined as the following: JSON object name Field name JSON type Description PropertyGraph catalog string The name of the catalog.
- Home Documentation Databases Spanner Reference Send feedback Information schema for GoogleSQL-dialect databases Stay organized with collections Save and categorize content based on your preferences.

### "Commit timestamps in GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- ResultSet getters can only be used to retrieve // non null values. resultSet . isNull ( "MarketingBudget" ) ? "NULL" : resultSet . getLong ( "MarketingBudget" ), resultSet . isNull ( "LastUpdateTime" ) ? "NULL" : resultSet . getTimestamp ( "LastUpdateTime" )); } } } Node.js // ... // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); const query = { sql : SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime FROM Albums ORDER BY LastUpdateTime DESC , }; // Queries rows from the Albums table try { const [ rows ] = await database . run ( query ); rows . forEach ( row = > { const json = row . toJSON (); console . log ( SingerId: ${ json .
- For example, consider the following Performances table, which includes a commit timestamp column: CREATE TABLE Performances ( SingerId INT64 NOT NULL , VenueId INT64 NOT NULL , EventDate DATE , Revenue INT64 , LastUpdateTime TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ) ) PRIMARY KEY ( SingerId , VenueId , EventDate ); This query benefits from the commit-timestamp optimization described earlier, because it has a greater-than-or-equal-to comparison between the table's commit timestamp column and a constant expression—in this case, a literal: SELECT FROM Performances WHERE LastUpdateTime > = "2022-05-01" ; The following query also qualifies for the optimization, since it has a greater-than comparison between the commit timestamp and a function whose arguments all evaluate to constants during the query's execution: SELECT FROM Performances WHERE LastUpdateTime > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 DAY ); What's next Use commit timestamps to create a change log with Go .
- You could build a changelog that stores the history of changes to a given document using a schema like the following example: CREATE TABLE Documents ( UserId INT64 NOT NULL , DocumentId INT64 NOT NULL , Contents STRING ( MAX ) NOT NULL , ) PRIMARY KEY ( UserId , DocumentId ); CREATE TABLE DocumentHistory ( UserId INT64 NOT NULL , DocumentId INT64 NOT NULL , Ts TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ), Delta STRING ( MAX ), ) PRIMARY KEY ( UserId , DocumentId , Ts ), INTERLEAVE IN PARENT Documents ON DELETE NO ACTION ; To create a changelog, insert a new row in DocumentHistory in the same transaction in which you insert or update a row in Document .
- Using commit timestamps under the following scenarios creates hotspots which reduce data performance: Commit timestamp column as the first part of the primary key of a table: CREATE TABLE Users ( LastAccess TIMESTAMP NOT NULL , UserId INT64 NOT NULL , ... ) PRIMARY KEY ( LastAccess , UserId ); The first part of the primary key of a secondary index: CREATE INDEX UsersByLastAccess ON Users ( LastAccess ) or CREATE INDEX UsersByLastAccessAndName ON Users ( LastAccess , FirstName ) Hotspots reduce data performance, even with low write rates.


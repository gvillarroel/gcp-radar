---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.227Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Protocol Buffer Data Type Support in GoogleSQL"
feature_slug: "protocol-buffer-data-type-support-in-googlesql"
latest_feature_date: "2024-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
keywords:
  - "protocol"
  - "buffer"
  - "googlesql"
  - "type"
  - "added"
---

# Protocol Buffer Data Type Support in GoogleSQL

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for the protocol buffer data type in GoogleSQL.

## Extended Definition

Spanner added support for the protocol buffer data type in GoogleSQL.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)

## Supporting Pages

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- NUMERIC column as a primary key, secondary index, or foreign key We recommend using an index over a TEXT generated column, as shown in the following example: CREATE TABLE singers( id numeric NOT NULL, pk text GENERATED ALWAYS AS (id::text) STORED, PRIMARY KEY(pk) ); Protocol buffer data type You can store serialized protocol buffers as the PostgreSQL BYTEA data type .
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- WITH numbers AS ( SELECT 1::int8 AS a, 9223372036854775807::int8 AS b UNION ALL SELECT 10, 2 ) SELECT CASE WHEN b = 0 THEN NULL WHEN a::numeric / b::numeric > 9223372036854775807 THEN NULL WHEN a::numeric / b::numeric < -9223372036854775808 THEN NULL ELSE a / b END AS result FROM numbers; SAFE.MULTIPLY We recommend that you protect against an overflow explicitly leveraging the NUMERIC data type during a multiplication operation.
- WITH numbers AS ( SELECT 1::int8 AS a, 9223372036854775807::int8 AS b UNION ALL SELECT 1, 2 ) SELECT CASE WHEN a::numeric b::numeric > 9223372036854775807 THEN NULL WHEN a::numeric b::numeric < -9223372036854775808 THEN NULL ELSE a b END AS result FROM numbers; SAFE.NEGATE We recommend that you protect against an overflow explicitly leveraging the NUMERIC data type during a negation operation.

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Example: Savepoint support (Click to expand) The following example shows how to enable and disable savepoints support in the Spanner JDBC driver. try ( Connection connection = DriverManager . getConnection ( String . format ( "jdbc:cloudspanner:/projects/%s/instances/%s/databases/%s" , "my-project" , "my-instance" , "my-database" ))) { // Savepoints can only be used when AutoCommit=false. connection . setAutoCommit ( false ); // Disables setting a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='DISABLED'" ); // The following statement fails because savepoints have been disabled. connection . setSavepoint ( "my savepoint1" ); // Enables setting a savepoint and releasing a savepoint. // Rolling back to a savepoint is disabled. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='FAIL AFTER ROLLBACK'" ); Savepoint mySavepoint2 = connection . setSavepoint ( "my savepoint2" ); connection . createStatement (). execute ( "insert into my table (id, value) values (1, 'One')" ); connection . releaseSavepoint ( mySavepoint2 ); connection . commit (); // Enables setting, releasing and rolling back to a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='ENABLED'" ); Savepoint mySavepoint3 = connection . setSavepoint ( "my savepoint3" ); connection . createStatement (). execute ( "insert into my table (id, value) values (2, 'Two')" ); connection . rollback ( mySavepoint3 ); } What's next Learn how to connect JDBC to a GoogleSQL-dialect database .
- CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( MAX ), LastName STRING ( MAX ) ) PRIMARY KEY ( SingerId ); CREATE TABLE Albums ( AlbumId INT64 NOT NULL , Title STRING ( MAX ), SingerId INT64 , CONSTRAINT fk albums singers FOREIGN KEY ( SingerId ) REFERENCES Singers ( SingerId ) ) PRIMARY KEY ( AlbumId ); -- This aborts the DDL batch and removes the DDL statements from the buffer.
- SHOW VARIABLE READ ONLY STALENESS SET READ ONLY STALENESS = staleness type staleness type : { 'STRONG' 'MIN READ TIMESTAMP timestamp ' 'READ TIMESTAMP timestamp ' 'MAX STALENESS <INT64>{ s ms us ns }' 'EXACT STALENESS <INT64>{ s ms us ns }' } The read-only staleness value applies to all subsequent read-only transactions and for all queries in AUTOCOMMIT mode.
- SET STATEMENT TAG = 'tag2' ; SELECT Title FROM Albums ORDER BY Title ; -- Set a statement tag with a query hint. @ { STATEMENT TAG = 'tag3' } SELECT TrackNumber , Title FROM Tracks WHERE AlbumId = 1 AND SingerId = 1 ORDER BY TrackNumber ; TRANSACTION TAG A property of type STRING that contains the transaction tag for the next transaction.

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, the exclude delete filter is added to an existing change stream called NewFilterChangeStream : ALTER CHANGE STREAM NewFilterChangeStream SET ( exclude delete = true ) Remove a table modification type filter from an existing change stream GoogleSQL To remove one or more existing table modification type filters in change stream, run the following to set the filter to false : ALTER CHANGE STREAM CHANGE STREAM NAME SET OPTIONS ( MOD TYPE FILTER NAME = false ) Replace the following: CHANGE STREAM NAME : replace with the name of your existing change stream MOD TYPE FILTER NAME : replace with the filter you want to remove: exclude insert , exclude update , or exclude delete .
- Two examples: GoogleSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL OPTIONS ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL OPTIONS ( retention period = '7d' ); PostgreSQL CREATE CHANGE STREAM LongerDataRetention FOR ALL WITH ( retention period = '36h' ); CREATE CHANGE STREAM MaximumDataRetention FOR ALL WITH ( retention period = '7d' ); Specify a different value capture type To specify a change stream value capture type other than OLD AND NEW VALUES , set the value capture type to either NEW VALUES or NEW ROW , as shown in the following examples: GoogleSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL OPTIONS ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL OPTIONS ( value capture type = 'NEW VALUES' ); PostgreSQL CREATE CHANGE STREAM NewRowChangeStream FOR ALL WITH ( value capture type = 'NEW ROW' ); CREATE CHANGE STREAM NewValuesChangeStream FOR ALL WITH ( value capture type = 'NEW VALUES' ); Filter TTL-based deletes You can filter TTL-based deletes from your change stream's scope using the exclude ttl deletes filter.
- GoogleSQL The DDL syntax for creating a change stream using GoogleSQL looks like this: CREATE CHANGE STREAM CHANGE STREAM NAME [ FOR column or table watching definition [ , ... ] ] [ OPTIONS ( retention period = timespan , value capture type = type , exclude ttl deletes = boolean , exclude insert = boolean , exclude update = boolean , exclude delete = boolean , allow txn exclusion = boolean ) ] PostgreSQL The DDL syntax for creating a change stream using PostgreSQL looks like this: CREATE CHANGE STREAM CHANGE STREAM NAME [ FOR column or table watching definition [, ... ] ] [ WITH ( retention period = timespan , value capture type = type , exclude ttl deletes = boolean , exclude insert = boolean , exclude update = boolean , exclude delete = boolean , allow txn exclusion = boolean ) ] A new change stream begins to watch its assigned schema objects as soon as the long-running operation that created it completes.
- Add the TTL-based deletes filter to an existing change stream GoogleSQL To add the TTL-based deletes filter to an existing change stream, run the following to set the filter to true : ALTER CHANGE STREAM CHANGE STREAM NAME FOR ALL SET OPTIONS ( exclude ttl deletes = true ) Replace the following: CHANGE STREAM NAME : the name of your existing change stream In the following example, the exclude ttl deletes filter is added to an existing change stream called NewFilterChangeStream that excludes all TTL-based deletes: ALTER CHANGE STREAM NewFilterChangeStream FOR ALL SET OPTIONS ( exclude ttl deletes = true ) This excludes all future TTL-based deletes from the change stream.


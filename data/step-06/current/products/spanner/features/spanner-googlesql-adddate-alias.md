---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.179Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner GoogleSQL ADDDATE() alias"
feature_slug: "spanner-googlesql-adddate-alias"
latest_feature_date: "2025-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
keywords:
  - "adddate"
  - "alias"
  - "date"
  - "googlesql"
  - "supports"
---

# Spanner GoogleSQL ADDDATE() alias

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports ADDDATE() as an alias for the DATE_ADD() function in GoogleSQL.

## Extended Definition

Spanner now supports ADDDATE() as an alias for the DATE_ADD() function in GoogleSQL.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)

## Supporting Pages

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Example: Savepoint support (Click to expand) The following example shows how to enable and disable savepoints support in the Spanner JDBC driver. try ( Connection connection = DriverManager . getConnection ( String . format ( "jdbc:cloudspanner:/projects/%s/instances/%s/databases/%s" , "my-project" , "my-instance" , "my-database" ))) { // Savepoints can only be used when AutoCommit=false. connection . setAutoCommit ( false ); // Disables setting a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='DISABLED'" ); // The following statement fails because savepoints have been disabled. connection . setSavepoint ( "my savepoint1" ); // Enables setting a savepoint and releasing a savepoint. // Rolling back to a savepoint is disabled. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='FAIL AFTER ROLLBACK'" ); Savepoint mySavepoint2 = connection . setSavepoint ( "my savepoint2" ); connection . createStatement (). execute ( "insert into my table (id, value) values (1, 'One')" ); connection . releaseSavepoint ( mySavepoint2 ); connection . commit (); // Enables setting, releasing and rolling back to a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='ENABLED'" ); Savepoint mySavepoint3 = connection . setSavepoint ( "my savepoint3" ); connection . createStatement (). execute ( "insert into my table (id, value) values (2, 'Two')" ); connection . rollback ( mySavepoint3 ); } What's next Learn how to connect JDBC to a GoogleSQL-dialect database .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The Spanner JDBC driver supports three alternatives for executing partitioned queries: SET AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- A statement timeout during a transaction invalidates the transaction, all subsequent statements in the invalidated transaction (except ROLLBACK ) fail, and the Spanner JDBC driver throws a java.sql.SQLTimeoutException .

### "Commit timestamps in GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Fprintf ( w , "%d record(s) updated.\n" , rowCount ) return nil }) return err } Java static void updateUsingDmlWithTimestamp ( DatabaseClient dbClient ) { dbClient . readWriteTransaction () . run ( transaction - > { String sql = "UPDATE Albums " + "SET LastUpdateTime = PENDING COMMIT TIMESTAMP() WHERE SingerId = 1" ; long rowCount = transaction . executeUpdate ( Statement . of ( sql )); System . out . printf ( "%d records updated.\n" , rowCount ); return null ; }); } Node.js // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); database . runTransaction ( async ( err , transaction ) = > { if ( err ) { console . error ( err ); return ; } try { const [ rowCount ] = await transaction . runUpdate ({ sql : UPDATE Albums SET LastUpdateTime = PENDING COMMIT TIMESTAMP() WHERE SingerId = 1 , }); console . log ( Successfully updated ${ rowCount } records. ); await transaction . commit (); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished. database . close (); } }); PHP use Google\Cloud\Spanner\SpannerClient; use Google\Cloud\Spanner\Transaction; / Update data with a DML statement using timestamps.
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id ) def update albums ( transaction ): row ct = transaction . execute update ( "UPDATE Albums " "SET LastUpdateTime = PENDING COMMIT TIMESTAMP() " "WHERE SingerId = 1" ) print ( " {} record(s) updated." . format ( row ct )) database . run in transaction ( update albums ) Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id row count = 0 client . transaction do transaction row count = transaction . execute update ( "UPDATE Albums SET LastUpdateTime = PENDING COMMIT TIMESTAMP() WHERE SingerId = 1" ) end puts " #{ row count } records updated." Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id commit timestamp = client . commit timestamp client . commit do c c . update "Albums" , [ { SingerId : 1 , AlbumId : 1 , MarketingBudget : 100 000 , LastUpdateTime : commit timestamp }, { SingerId : 2 , AlbumId : 2 , MarketingBudget : 750 000 , LastUpdateTime : commit timestamp } ] end puts "Updated data" Commit timestamps can only be written to columns annotated with the allow commit timestamp=true option.
- ResultSet getters can only be used to retrieve // non null values. resultSet . isNull ( "MarketingBudget" ) ? "NULL" : resultSet . getLong ( "MarketingBudget" ), resultSet . isNull ( "LastUpdateTime" ) ? "NULL" : resultSet . getTimestamp ( "LastUpdateTime" )); } } } Node.js // ... // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); const query = { sql : SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime FROM Albums ORDER BY LastUpdateTime DESC , }; // Queries rows from the Albums table try { const [ rows ] = await database . run ( query ); rows . forEach ( row = > { const json = row . toJSON (); console . log ( SingerId: ${ json .
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id ) with database . snapshot () as snapshot : results = snapshot . execute sql ( "SELECT SingerId, AlbumId, MarketingBudget FROM Albums " "ORDER BY LastUpdateTime DESC" ) for row in results : print ( "SingerId: {} , AlbumId: {} , MarketingBudget: {} " . format ( row )) Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id client . execute ( "SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime FROM Albums ORDER BY LastUpdateTime DESC" ) . rows . each do row puts " #{ row [ :SingerId ] } #{ row [ :AlbumId ] } #{ row [ :MarketingBudget ] } #{ row [ :LastUpdateTime ] } " end Provide your own value for the commit timestamp column You can provide your own value for the commit timestamp column, instead of passing spanner.commit timestamp() (or client library constant) as the column value.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Enter: GoogleSQL CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ), SingerInfo BYTES ( MAX ), BirthDate DATE ) PRIMARY KEY ( SingerId ); PostgreSQL CREATE TABLE Singers ( BirthDate TIMESTAMPTZ , SingerId BIGINT PRIMARY KEY , FirstName VARCHAR ( 1024 ), LastName VARCHAR ( 1024 ), SingerInfo BYTEA ); Click play circle Run .
- UPDATE singers SET birthdate = NULL , firstname = 'Kena' , lastname = '' , singerinfo = NULL WHERE singerid = '3' ; SELECT FROM singers WHERE singerid = '3' ; Edit the UPDATE statement's SET clause to update only the birth date: GoogleSQL -- Change values in the SET clause to update the row where the WHERE condition is true.
- When the update is complete, the page looks like this: GoogleSQL PostgreSQL Notice that PostgreSQL converts the table name to lowercase.
- GoogleSQL -- Change values in the SET clause to update the row where the WHERE condition is true.


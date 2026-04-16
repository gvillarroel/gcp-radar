---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.155Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Pending commit timestamp default and ON UPDATE support for column definitions"
feature_slug: "pending-commit-timestamp-default-and-on-update-support-for-column-definitions"
latest_feature_date: "2026-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "pending"
  - "definitions"
  - "timestamp"
  - "commit"
  - "update"
  - "default"
  - "column"
---

# Pending commit timestamp default and ON UPDATE support for column definitions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports using the pending commit timestamp function as a column default value and as an ON UPDATE expression.

## Extended Definition

Spanner now supports using the pending commit timestamp function as a column default value and as an ON UPDATE expression.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Commit timestamps in GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id ) def update albums ( transaction ): row ct = transaction . execute update ( "UPDATE Albums " "SET LastUpdateTime = PENDING COMMIT TIMESTAMP() " "WHERE SingerId = 1" ) print ( " {} record(s) updated." . format ( row ct )) database . run in transaction ( update albums ) Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id row count = 0 client . transaction do transaction row count = transaction . execute update ( "UPDATE Albums SET LastUpdateTime = PENDING COMMIT TIMESTAMP() WHERE SingerId = 1" ) end puts " #{ row count } records updated." Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id commit timestamp = client . commit timestamp client . commit do c c . update "Albums" , [ { SingerId : 1 , AlbumId : 1 , MarketingBudget : 100 000 , LastUpdateTime : commit timestamp }, { SingerId : 2 , AlbumId : 2 , MarketingBudget : 750 000 , LastUpdateTime : commit timestamp } ] end puts "Updated data" Commit timestamps can only be written to columns annotated with the allow commit timestamp=true option.
- The following DML statement updates the LastUpdateTime column in the Performances table with the commit timestamp: UPDATE Performances SET LastUpdateTime = PENDING COMMIT TIMESTAMP () WHERE SingerId = 1 AND VenueId = 2 AND EventDate = "2015-10-21" The following code example uses the PENDING COMMIT TIMESTAMP function to write the commit timestamp in the LastUpdateTime column.
- For example: ALTER TABLE Performances ALTER COLUMN LastUpdateTime SET OPTIONS ( allow commit timestamp = null ) Write a commit timestamp using a DML statement You use the PENDING COMMIT TIMESTAMP function to write the commit timestamp in a DML statement.
- Fprintf ( w , "%d record(s) updated.\n" , rowCount ) return nil }) return err } Java static void updateUsingDmlWithTimestamp ( DatabaseClient dbClient ) { dbClient . readWriteTransaction () . run ( transaction - > { String sql = "UPDATE Albums " + "SET LastUpdateTime = PENDING COMMIT TIMESTAMP() WHERE SingerId = 1" ; long rowCount = transaction . executeUpdate ( Statement . of ( sql )); System . out . printf ( "%d records updated.\n" , rowCount ); return null ; }); } Node.js // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); database . runTransaction ( async ( err , transaction ) = > { if ( err ) { console . error ( err ); return ; } try { const [ rowCount ] = await transaction . runUpdate ({ sql : UPDATE Albums SET LastUpdateTime = PENDING COMMIT TIMESTAMP() WHERE SingerId = 1 , }); console . log ( Successfully updated ${ rowCount } records. ); await transaction . commit (); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished. database . close (); } }); PHP use Google\Cloud\Spanner\SpannerClient; use Google\Cloud\Spanner\Transaction; / Update data with a DML statement using timestamps.

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- COMMIT TIMESTAMP ) . build ()); } dbClient . write ( mutations ); } Node.js // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Instantiate Spanner table objects const performancesTable = database . table ( 'Performances' ); const data = [ { SingerId : '1' , VenueId : '4' , EventDate : '2017-10-05' , Revenue : '11000' , LastUpdateTime : 'spanner.commit timestamp()' , }, { SingerId : '1' , VenueId : '19' , EventDate : '2017-11-02' , Revenue : '15000' , LastUpdateTime : 'spanner.commit timestamp()' , }, { SingerId : '2' , VenueId : '42' , EventDate : '2017-12-23' , Revenue : '7000' , LastUpdateTime : 'spanner.commit timestamp()' , }, ]; // Inserts rows into the Singers table // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so // they must be converted to strings before being inserted as INT64s try { await performancesTable . insert ( data ); console . log ( 'Inserted data.' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; / Inserts sample data into a table with a commit timestamp column.
- COMMIT TIMESTAMP ) . build ()); // This writes all the mutations to Cloud Spanner atomically. dbClient . write ( mutations ); } Node.js // ... // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Update a row in the Albums table // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so they // must be converted to strings before being inserted as INT64s const albumsTable = database . table ( 'Albums' ); const data = [ { SingerId : '1' , AlbumId : '1' , MarketingBudget : '1000000' , LastUpdateTime : 'spanner.commit timestamp()' , }, { SingerId : '2' , AlbumId : '2' , MarketingBudget : '750000' , LastUpdateTime : 'spanner.commit timestamp()' , }, ]; try { await albumsTable . update ( data ); console . log ( 'Updated data.' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; / Updates sample data in a table with a commit timestamp column.
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id ) with database . snapshot () as snapshot : results = snapshot . execute sql ( "SELECT SingerId, AlbumId, MarketingBudget FROM Albums " "ORDER BY LastUpdateTime DESC" ) for row in results : print ( "SingerId: {} , AlbumId: {} , MarketingBudget: {} " . format ( row )) Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id client . execute ( "SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime FROM Albums ORDER BY LastUpdateTime DESC" ) . rows . each do row puts " #{ row [ :SingerId ] } #{ row [ :AlbumId ] } #{ row [ :MarketingBudget ] } #{ row [ :LastUpdateTime ] } " end Provide your own value for the commit timestamp column In your code, you can provide your own value for the commit timestamp column instead of passing spanner.commit timestamp() (or the available client library constant) as the column value.
- COMMIT TIMESTAMP ), ], ) print ( "Inserted data." ) Ruby project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id Get commit timestamp commit timestamp = client . commit timestamp client . commit do c c . insert "Performances" , [ { SingerId : 1 , VenueId : 4 , EventDate : "2017-10-05" , Revenue : 11 000 , LastUpdateTime : commit timestamp }, { SingerId : 1 , VenueId : 19 , EventDate : "2017-11-02" , Revenue : 15 000 , LastUpdateTime : commit timestamp }, { SingerId : 2 , VenueId : 42 , EventDate : "2017-12-23" , Revenue : 7000 , LastUpdateTime : commit timestamp } ] end puts "Inserted data" If you have mutations on rows in multiple tables, you must specify spanner.commit timestamp() (or client library constant) for the commit timestamp column in each table.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables in the INFORMATION SCHEMA: SELECT t . table name FROM information schema . tables AS t WHERE t . table schema = "SPANNER SYS" Return information about the columns in the user table MyTable in default schema: SELECT t . column name , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table catalog = '' AND t . table schema = '' AND t . table name = 'MyTable' ORDER BY t . table catalog , t . table schema , t . table name , t . ordinal position Return information on what the default leader region for the database is.
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- All other principals can see only indexes that meet either of the following requirements: Any of the SELECT , INSERT , or UPDATE fine-grained access control privileges are granted at the column level on all columns in the index to the current database role, to roles of which the current database role is a member, or to public .


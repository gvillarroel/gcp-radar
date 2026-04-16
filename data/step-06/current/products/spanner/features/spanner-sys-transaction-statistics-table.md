---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.296Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "SPANNER_SYS Transaction statistics table"
feature_slug: "spanner-sys-transaction-statistics-table"
latest_feature_date: "2022-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "enhanced"
  - "transaction"
  - "statistics"
  - "columns"
  - "table"
---

# SPANNER_SYS Transaction statistics table

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The SPANNER_SYS Transaction statistics table was enhanced with new columns including TOTAL_LATENCY_DISTRIBUTION, OPERATIONS_BY_TABLE, and ATTEMPT_COUNT.

## Extended Definition

The SPANNER_SYS Transaction statistics table was enhanced with new columns including TOTAL_LATENCY_DISTRIBUTION, OPERATIONS_BY_TABLE, and ATTEMPT_COUNT.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Retrieve commit statistics for a transaction \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SpannerOptions ; import java.util.Arrays ; public class GetCommitStatsSample { static void getCommitStats () { // TODO(developer): Replace these variables before running the sample. final String projectId = "my-project" ; final String instanceId = "my-instance" ; final String databaseId = "my-database" ; try ( Spanner spanner = SpannerOptions . newBuilder (). setProjectId ( projectId ). build (). getService ()) { final DatabaseClient databaseClient = spanner . getDatabaseClient ( DatabaseId . of ( projectId , instanceId , databaseId )); getCommitStats ( databaseClient ); } } static void getCommitStats ( DatabaseClient databaseClient ) { final CommitResponse commitResponse = databaseClient . writeWithOptions ( Arrays . asList ( Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( "1" ) . set ( "AlbumId" ) . to ( "1" ) . set ( "MarketingBudget" ) . to ( "200000" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( "2" ) . set ( "AlbumId" ) . to ( "2" ) . set ( "MarketingBudget" ) . to ( "400000" ) . build () ), Options . commitStats ()); System . out . println ( "Updated data with " + commitResponse . getCommitStats (). getMutationCount () + " mutations." ); } } Node.js The following code sets the returnCommitStats flag and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. // Imports the Google Cloud client library. const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client. const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database. const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Instantiate Spanner table objects. const albumsTable = database . table ( 'Albums' ); // Updates rows in the Venues table. try { const [ response ] = await albumsTable . upsert ( [ { SingerId : '1' , AlbumId : '1' , MarketingBudget : '200000' }, { SingerId : '2' , AlbumId : '2' , MarketingBudget : '400000' }, ], { returnCommitStats : true }, ); console . log ( Updated data with ${ response . commitStats . mutationCount } mutations. , ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished. database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; use Google\Cloud\Spanner\Transaction; / Creates a database and tables for sample data.
- Client () instance = spanner client . instance ( instance id ) database = instance . database ( database id , logger = CommitStatsSampleLogger ()) database . log commit stats = True def insert singers ( transaction ): row ct = transaction . execute update ( "INSERT Singers (SingerId, FirstName, LastName) " " VALUES (110, 'Virginia', 'Watson')" ) print ( " {} record(s) inserted." . format ( row ct )) database . run in transaction ( insert singers ) commit stats = database . logger . last commit stats print ( " {} mutation(s) in transaction." . format ( commit stats . mutation count )) Ruby The following code sets the return commit stats flag and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. project id = "Your Google Cloud project ID" instance id = "Your Spanner instance ID" database id = "Your Spanner database ID" require "google/cloud/spanner" spanner = Google :: Cloud :: Spanner . new project : project id client = spanner . client instance id , database id records = [ { SingerId : 1 , AlbumId : 1 , MarketingBudget : 200 000 }, { SingerId : 2 , AlbumId : 2 , MarketingBudget : 400 000 } ] commit options = { return commit stats : true } resp = client . upsert "Albums" , records , commit options : commit options puts "Updated data with #{ resp . stats . mutation count } mutations." What's next CommitStats REST reference .
- Create ( options , logger ); var connectionStringBuilder = new SpannerConnectionStringBuilder { ConnectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" , // Set LogCommitStats to true to enable logging commit statistics for all transactions on the connection. // LogCommitStats can also be enabled/disabled for individual Spanner transactions.
- C++ The following code calls set return stats() on CommitOptions and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. void GetCommitStatistics ( google :: cloud :: spanner :: Client client ) { namespace spanner = :: google :: cloud :: spanner ; auto commit = client .

### "Interface BatchReadOnlyTransaction (6.111.1) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction)
- Source ID: `site-java-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Regardless of ordering in keys , rows are returned in their natural key order. columns Iterable < String > the columns to read options ReadOption [] the options to configure the read, supported values are Options#prefetchChunks() final BatchReadOnlyTransaction txn = batchClient . batchReadOnlyTransaction ( TimestampBound . strong ()); List<Partition> partitions = txn . partitionRead ( PartitionOptions . getDefaultInstance (), "Singers" , KeySet . all (), Arrays . asList ( "SingerId" , "FirstName" , "LastName" )); for ( final Partition p : partitions ) { try ( ResultSet results = txn . execute ( p )) { while ( results . next ()) { long singerId = results . getLong ( 0 ); String firstName = results . getString ( 1 ); String lastName = results . getString ( 2 ); System . out . println ( "[" + singerId + "] " + firstName + " " + lastName ); } } } <!--SNIPPET partition read--> Returns Type Description List < Partition > Exceptions Type Description SpannerException partitionReadUsingIndex(PartitionOptions partitionOptions, String table, String index, KeySet keys, Iterable<String> columns, Options.ReadOption[] options) public abstract List<Partition> partitionReadUsingIndex ( PartitionOptions partitionOptions , String table , String index , KeySet keys , Iterable<String> columns , Options .
- Parameters Name Description partitionOptions PartitionOptions configuration for size and count of partitions returned statement Statement the query statement to execute options QueryOption [] the options to configure the query final BatchReadOnlyTransaction txn = batchClient . batchReadOnlyTransaction ( TimestampBound . strong ()); List<Partition> partitions = txn . partitionQuery ( PartitionOptions . getDefaultInstance (), Statement . of ( "SELECT SingerId, FirstName, LastName FROM Singers" )); for ( final Partition p : partitions ) { try ( ResultSet results = txn . execute ( p )) { while ( results . next ()) { long singerId = results . getLong ( 0 ); String firstName = results . getString ( 1 ); String lastName = results . getString ( 2 ); System . out . println ( "[" + singerId + "] " + firstName + " " + lastName ); } } } <!--SNIPPET partition query--> Returns Type Description List < Partition > Exceptions Type Description SpannerException partitionRead(PartitionOptions partitionOptions, String table, KeySet keys, Iterable<String> columns, Options.ReadOption[] options) public abstract List<Partition> partitionRead ( PartitionOptions partitionOptions , String table , KeySet keys , Iterable<String> columns , Options .
- Regardless of ordering in keys , rows are returned in the natural key order of the index. columns Iterable < String > the columns to read options ReadOption [] the options to configure the read final BatchReadOnlyTransaction txn = batchClient . batchReadOnlyTransaction ( TimestampBound . strong ()); List<Partition> partitions = txn . partitionReadUsingIndex ( PartitionOptions . getDefaultInstance (), "Singers" , "SingerId" , KeySet . all (), Arrays . asList ( "SingerId" , "FirstName" , "LastName" )); for ( Partition p : partitions ) { try ( ResultSet results = txn . execute ( p )) { while ( results . next ()) { long singerId = results . getLong ( 0 ); String firstName = results . getString ( 1 ); String lastName = results . getString ( 2 ); System . out . println ( "[" + singerId + "] " + firstName + " " + lastName ); } } } <!--SNIPPET partition read using index--> Returns Type Description List < Partition > Exceptions Type Description SpannerException Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The row metadata may be absent if no rows are returned. final BatchReadOnlyTransaction txn = batchClient . batchReadOnlyTransaction ( TimestampBound . strong ()); List<Partition> partitions = txn . partitionQuery ( PartitionOptions . getDefaultInstance (), Statement . of ( "SELECT SingerId, FirstName, LastName FROM Singers" )); for ( final Partition p : partitions ) { try ( ResultSet results = txn . execute ( p )) { while ( results . next ()) { long singerId = results . getLong ( 0 ); String firstName = results . getString ( 1 ); String lastName = results . getString ( 2 ); System . out . println ( "[" + singerId + "] " + firstName + " " + lastName ); } } } Parameter Name Description partition Partition Returns Type Description ResultSet Exceptions Type Description SpannerException getBatchTransactionId() public abstract BatchTransactionId getBatchTransactionId () Returns a BatchTransactionId to be re-used across several machines/processes.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables in the INFORMATION SCHEMA: SELECT t . table name FROM information schema . tables AS t WHERE t . table schema = "SPANNER SYS" Return information about the columns in the user table MyTable in default schema: SELECT t . column name , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table catalog = '' AND t . table schema = '' AND t . table name = 'MyTable' ORDER BY t . table catalog , t . table schema , t . table name , t . ordinal position Return information on what the default leader region for the database is.
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- GraphNodeTableReference nodeTableName string The name of the graph element table. edgeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the edges. nodeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the nodes.


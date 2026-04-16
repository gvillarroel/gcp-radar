---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.296Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "SPANNER_SYS Read statistics table"
feature_slug: "spanner-sys-read-statistics-table"
latest_feature_date: "2022-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "enhanced"
  - "statistics"
  - "read"
  - "table"
---

# SPANNER_SYS Read statistics table

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The SPANNER_SYS Read statistics table was enhanced with a new RUN_IN_RW_TRANSACTION_EXECUTION_COUNT column.

## Extended Definition

The SPANNER_SYS Read statistics table was enhanced with a new RUN_IN_RW_TRANSACTION_EXECUTION_COUNT column.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### "Retrieve commit statistics for a transaction \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The MutationCount is then retrieved from this response and displayed. using Google.Cloud.Spanner.Data ; using Google.Cloud.Spanner.V1 ; using Google.Cloud.Spanner.V1.Internal.Logging ; using System ; using System.Collections.Generic ; using System.Diagnostics ; using System.Threading.Tasks ; public class LogCommitStatsAsyncSample { public async Task<long> LogCommitStatsAsync ( string projectId , string instanceId , string databaseId ) { // Commit statistics are logged at level Info by the default logger. // This sample uses a custom logger to access the commit statistics. // See https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Spanner.Data/logging.html // for more information on how to use loggers. var logger = new CommitStatsSampleLogger (); var options = new SessionPoolOptions (); var poolManager = SessionPoolManager .
- SpannerOptions ; import java.util.Arrays ; public class GetCommitStatsSample { static void getCommitStats () { // TODO(developer): Replace these variables before running the sample. final String projectId = "my-project" ; final String instanceId = "my-instance" ; final String databaseId = "my-database" ; try ( Spanner spanner = SpannerOptions . newBuilder (). setProjectId ( projectId ). build (). getService ()) { final DatabaseClient databaseClient = spanner . getDatabaseClient ( DatabaseId . of ( projectId , instanceId , databaseId )); getCommitStats ( databaseClient ); } } static void getCommitStats ( DatabaseClient databaseClient ) { final CommitResponse commitResponse = databaseClient . writeWithOptions ( Arrays . asList ( Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( "1" ) . set ( "AlbumId" ) . to ( "1" ) . set ( "MarketingBudget" ) . to ( "200000" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( "2" ) . set ( "AlbumId" ) . to ( "2" ) . set ( "MarketingBudget" ) . to ( "400000" ) . build () ), Options . commitStats ()); System . out . println ( "Updated data with " + commitResponse . getCommitStats (). getMutationCount () + " mutations." ); } } Node.js The following code sets the returnCommitStats flag and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. // Imports the Google Cloud client library. const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client. const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database. const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Instantiate Spanner table objects. const albumsTable = database . table ( 'Albums' ); // Updates rows in the Venues table. try { const [ response ] = await albumsTable . upsert ( [ { SingerId : '1' , AlbumId : '1' , MarketingBudget : '200000' }, { SingerId : '2' , AlbumId : '2' , MarketingBudget : '400000' }, ], { returnCommitStats : true }, ); console . log ( Updated data with ${ response . commitStats . mutationCount } mutations. , ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished. database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; use Google\Cloud\Spanner\Transaction; / Creates a database and tables for sample data.
- Build ()}, google :: cloud :: Options {}. set<spanner :: CommitReturnStatsOption > ( true )); if ( ! commit ) throw std :: move ( commit ). status (); if ( commit - > commit stats ) { std :: cout << "Updated data with " << commit - > commit stats - > mutation count << " mutations. \n " ; } std :: cout << "Update was successful [spanner get commit stats] \n " ; } C# In C#, commit statistics are not returned directly through the API.
- Create ( options , logger ); var connectionStringBuilder = new SpannerConnectionStringBuilder { ConnectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" , // Set LogCommitStats to true to enable logging commit statistics for all transactions on the connection. // LogCommitStats can also be enabled/disabled for individual Spanner transactions.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .
- Row filtering in information schema tables Principals with database-level IAM permissions and principals who have been granted access to the spanner info reader system role (or to members of that role) can see all rows in all information schema tables.
- ROUTINE PRIVILEGES This row-filtered table lists all fine-grained access control privileges granted on all change stream read functions to any database role, including public .

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Possible values and the states they represent are: NULL : the index type is PRIMARY KEY PREPARE : creating empty tables for a new index WRITE ONLY : backfilling data for a new index WRITE ONLY CLEANUP : cleaning up a new index WRITE ONLY VALIDATE UNIQUE : checking uniqueness of data in a new index READ WRITE : normal index operation spanner is managed character varying Whether the index is managed by Spanner.
- Row filtering in information schema tables and views Principals that have database-level IAM permissions and principals who have been granted access to the spanner info reader system role (or to members of that role) can see all rows in all information schema tables and views.
- This attribute must be set to NO before you can reference the statistics package in a hint or through the client API. table constraints This view contains all constraints belonging to tables that the current user has access to (other than SELECT ).
- Principals that have database-level IAM permissions and principals who have been granted access to the spanner info reader system role or to members of that role can see all tables and views.


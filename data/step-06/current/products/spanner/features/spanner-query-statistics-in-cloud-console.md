---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.352Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner query statistics in Cloud Console"
feature_slug: "spanner-query-statistics-in-cloud-console"
latest_feature_date: "2018-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-distributed"
keywords:
  - "measured"
  - "shows"
  - "statistics"
  - "console"
  - "query"
---

# Spanner query statistics in Cloud Console

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now shows query statistics measured by CPU usage in the Google Cloud console for multiple recent time windows.

## Extended Definition

Spanner now shows query statistics measured by CPU usage in the Google Cloud console for multiple recent time windows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- This quickstart shows you how to use the Google Cloud console to create a database in Spanner, insert data, and run a SQL query.
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- Home Documentation Databases Spanner Guides Send feedback Create and query a database in the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.

### "Retrieve commit statistics for a transaction \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Retrieve commit statistics The following sample shows how to get commit statistics using the Spanner client libraries.
- SpannerOptions ; import java.util.Arrays ; public class GetCommitStatsSample { static void getCommitStats () { // TODO(developer): Replace these variables before running the sample. final String projectId = "my-project" ; final String instanceId = "my-instance" ; final String databaseId = "my-database" ; try ( Spanner spanner = SpannerOptions . newBuilder (). setProjectId ( projectId ). build (). getService ()) { final DatabaseClient databaseClient = spanner . getDatabaseClient ( DatabaseId . of ( projectId , instanceId , databaseId )); getCommitStats ( databaseClient ); } } static void getCommitStats ( DatabaseClient databaseClient ) { final CommitResponse commitResponse = databaseClient . writeWithOptions ( Arrays . asList ( Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( "1" ) . set ( "AlbumId" ) . to ( "1" ) . set ( "MarketingBudget" ) . to ( "200000" ) . build (), Mutation . newInsertOrUpdateBuilder ( "Albums" ) . set ( "SingerId" ) . to ( "2" ) . set ( "AlbumId" ) . to ( "2" ) . set ( "MarketingBudget" ) . to ( "400000" ) . build () ), Options . commitStats ()); System . out . println ( "Updated data with " + commitResponse . getCommitStats (). getMutationCount () + " mutations." ); } } Node.js The following code sets the returnCommitStats flag and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. // Imports the Google Cloud client library. const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client. const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database. const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Instantiate Spanner table objects. const albumsTable = database . table ( 'Albums' ); // Updates rows in the Venues table. try { const [ response ] = await albumsTable . upsert ( [ { SingerId : '1' , AlbumId : '1' , MarketingBudget : '200000' }, { SingerId : '2' , AlbumId : '2' , MarketingBudget : '400000' }, ], { returnCommitStats : true }, ); console . log ( Updated data with ${ response . commitStats . mutationCount } mutations. , ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished. database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; use Google\Cloud\Spanner\Transaction; / Creates a database and tables for sample data.
- The MutationCount is then retrieved from this response and displayed. using Google.Cloud.Spanner.Data ; using Google.Cloud.Spanner.V1 ; using Google.Cloud.Spanner.V1.Internal.Logging ; using System ; using System.Collections.Generic ; using System.Diagnostics ; using System.Threading.Tasks ; public class LogCommitStatsAsyncSample { public async Task<long> LogCommitStatsAsync ( string projectId , string instanceId , string databaseId ) { // Commit statistics are logged at level Info by the default logger. // This sample uses a custom logger to access the commit statistics. // See https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Spanner.Data/logging.html // for more information on how to use loggers. var logger = new CommitStatsSampleLogger (); var options = new SessionPoolOptions (); var poolManager = SessionPoolManager .
- Build ()}, google :: cloud :: Options {}. set<spanner :: CommitReturnStatsOption > ( true )); if ( ! commit ) throw std :: move ( commit ). status (); if ( commit - > commit stats ) { std :: cout << "Updated data with " << commit - > commit stats - > mutation count << " mutations. \n " ; } std :: cout << "Update was successful [spanner get commit stats] \n " ; } C# In C#, commit statistics are not returned directly through the API.

### Distributed operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- To use this operator, set the join method to PUSH BROADCAST HASH JOIN on the query hint, as shown in the following example: SELECT a . albumtitle , s . songname FROM albums AS a join @{ join method = push broadcast hash join } songs AS s ON a . singerid = s . singerid AND a . albumid = s . albumid ; / -----------------------+--------------------------+ AlbumTitle SongName +-----------------------+--------------------------+ Green The Second Time Green Starting Again Green Nothing Is The Same Green Let's Get Back Together Green I Knew You Were Magic Green Blue Green 42 Terrified Fight Story Nothing To Do With Me Not About The Guitar +-----------------------+-------------------------- / The execution plan appears as follows: The input to the Push broadcast hash join is the AlbumsByAlbumTitle index.
- The following query demonstrates this operator: SELECT s . songname , s . songgenre FROM songs AS s WHERE s . singerid = 2 AND s . songgenre = 'ROCK' ; / -----------------+-----------+ SongName SongGenre +-----------------+-----------+ Starting Again ROCK The Second Time ROCK Fight Story ROCK +-----------------+----------- / The execution plan appears as follows: The distributed union operator sends subplans to remote servers, which perform a table scan across splits that satisfy the query's predicate WHERE s.SingerId = 2 AND s.SongGenre = 'ROCK' .
- The following query demonstrates this operator: SELECT lastname , concertdate FROM singers LEFT OUTER join @{ JOIN TYPE = APPLY JOIN } concerts ON singers . singerid = concerts . singerid ; / ----------+-------------+ LastName ConcertDate +----------+-------------+ Trentor 2014-02-18 Smith 2011-09-03 Smith 2010-06-06 Lomond 2005-04-30 Martin 2015-11-04 Richards +----------+------------- / The execution plan appears as follows: Distributed semi apply A Distributed semi apply is a DA with semi join semantics.
- Distributed cross apply The following query demonstrates this operator: SELECT albumtitle FROM songs JOIN albums ON albums . albumid = songs . albumid ; / -----------------------+ AlbumTitle +-----------------------+ Green Nothing To Do With Me Play Total Junk Green +----------------------- / The execution plan appears as follows: The DCA input contains an index scan on the SongsBySingerAlbumSongNameDesc index that batches rows of AlbumId .


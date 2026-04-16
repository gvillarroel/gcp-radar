---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.360Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner parallel read/query with Node.js and Ruby clients"
feature_slug: "spanner-parallel-read-query-with-node-js-and-ruby-clients"
latest_feature_date: "2018-03-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/reference/libraries"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-binary"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
keywords:
  - "ruby"
  - "parallel"
  - "clients"
  - "node"
  - "read"
  - "query"
---

# Spanner parallel read/query with Node.js and Ruby clients

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner introduced parallel reading and querying with multiple workers in the Node.js and Ruby client libraries.

## Extended Definition

Spanner introduced parallel reading and querying with multiple workers in the Node.js and Ruby client libraries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/reference/libraries](https://docs.cloud.google.com/spanner/docs/reference/libraries)
- [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)

## Supporting Pages

### Binary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE Collaborations ( SingerId INT64 NOT NULL , FeaturingSingerId INT64 NOT NULL , AlbumTitle STRING ( MAX ) NOT NULL , ) PRIMARY KEY ( SingerId , FeaturingSingerId , AlbumTitle ); CREATE OR REPLACE PROPERTY GRAPH MusicGraph NODE TABLES ( Singers KEY ( SingerId ) LABEL Singers PROPERTIES ( BirthDate , FirstName , LastName , SingerId , SingerInfo ) ) EDGE TABLES ( Collaborations AS CollabWith KEY ( SingerId , FeaturingSingerId , AlbumTitle ) SOURCE KEY ( SingerId ) REFERENCES Singers ( SingerId ) DESTINATION KEY ( FeaturingSingerId ) REFERENCES Singers ( SingerId ) LABEL CollabWith PROPERTIES ( AlbumTitle , FeaturingSingerId , SingerId ), ); The following graph query finds singers who have collaborated with a given singer or collaborated with those collaborators.
- The query engine supports a Distributed Merge algorithm, which lets the sort occur locally instead of globally, distributing and parallelizing the CPU cost.
- Consider another merge join example using the following query: SELECT a . albumtitle , s . songname FROM albums AS a join @{ join method = merge join } songs AS s ON a . albumid = s . albumid ; / -----------------------+--------------------------+ AlbumTitle SongName +-----------------------+--------------------------+ Total Junk The Second Time Total Junk Starting Again Total Junk Nothing Is The Same Total Junk Let's Get Back Together Total Junk I Knew You Were Magic Total Junk Blue Total Junk 42 Total Junk Not About The Guitar Green The Second Time Green Starting Again Green Nothing Is The Same Green Let's Get Back Together Green I Knew You Were Magic Green Blue Green 42 Green Not About The Guitar Nothing To Do With Me The Second Time Nothing To Do With Me Starting Again Nothing To Do With Me Nothing Is The Same Nothing To Do With Me Let's Get Back Together Nothing To Do With Me I Knew You Were Magic Nothing To Do With Me Blue Nothing To Do With Me 42 Nothing To Do With Me Not About The Guitar Play The Second Time Play Starting Again Play Nothing Is The Same Play Let's Get Back Together Play I Knew You Were Magic Play Blue Play 42 Play Not About The Guitar Terrified Fight Story +-----------------------+-------------------------- / The execution plan appears as follows: In the preceding execution plan, the query optimizer introduced additional sort operators to execute the merge join.
- To use this operator, set the join method to MERGE JOIN on the query hint, as shown in the following example: SELECT a . albumtitle , s . songname FROM albums AS a join @{ join method = merge join } songs AS s ON a . singerid = s . singerid AND a . albumid = s . albumid ; / -----------------------+--------------------------+ AlbumTitle SongName +-----------------------+--------------------------+ Green The Second Time Green Starting Again Green Nothing Is The Same Green Let's Get Back Together Green I Knew You Were Magic Green Blue Green 42 Terrified Fight Story Nothing To Do With Me Not About The Guitar +-----------------------+-------------------------- / The execution plan appears as follows: In this execution plan, the merge join is distributed so that the join executes where the data resides.

### Spanner client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/reference/libraries](https://docs.cloud.google.com/spanner/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following list contains links to learn about and get started with Spanner Graph using client libraries: Learn about Spanner Graph Set up and query Spanner Graph Insert, update, or delete Spanner Graph data Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-cloud-spanner on Stack Overflow Source code Getting started in C++ C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-spanner on Stack Overflow Source code Getting started in C# Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-spanner on Stack Overflow Source code Getting started in Go Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-spanner on Stack Overflow Source code Getting started in Java Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-spanner on Stack Overflow Source code Getting started in Node.js PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-spanner on Stack Overflow Source code Getting started in PHP Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-spanner on Stack Overflow Source code Getting started in Python Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-spanner on Stack Overflow Source code Getting started in Ruby Additional client libraries In addition to the libraries shown above, a Spring Data module is available for Java applications.
- String instanceId = args [ 0 ] ; String databaseId = args [ 1 ] ; try { // Creates a database client DatabaseClient dbClient = spanner . getDatabaseClient ( DatabaseId . of ( options . getProjectId (), instanceId , databaseId )); // Queries the database ResultSet resultSet = dbClient . singleUse (). executeQuery ( Statement . of ( "SELECT 1" )); System . out . println ( "\n\nResults:" ); // Prints the results while ( resultSet . next ()) { System . out . printf ( "%d\n\n" , resultSet . getLong ( 0 )); } } finally { // Closes the client which will free up the resources used spanner . close (); } } } Node.js // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); // Creates a client const spanner = new Spanner ({ projectId }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // The query to execute const query = { sql : 'SELECT 1' , }; // Execute a simple SQL statement const [ rows ] = await database . run ( query ); console . log ( Query: ${ rows . length } found. ); rows . forEach ( row = > console . log ( row )); PHP Includes the autoloader for libraries installed with composer require DIR . '/vendor/autoload.php'; Imports the Google Cloud client library use Google\Cloud\Spanner\SpannerClient; Your Google Cloud Platform project ID $projectId = 'YOUR PROJECT ID'; Instantiates a client $spanner = new SpannerClient([ 'projectId' => $projectId ]); Your Cloud Spanner instance ID. $instanceId = 'your-instance-id'; Get a Cloud Spanner instance by ID. $instance = $spanner->instance($instanceId); Your Cloud Spanner database ID. $databaseId = 'your-database-id'; Get a Cloud Spanner database by ID. $database = $instance->database($databaseId); Execute a simple SQL statement. $results = $database->execute('SELECT "Hello World" as test'); foreach ($results as $row) { print($row['test'] .
- Client () Get a Cloud Spanner instance by ID. instance = spanner client . instance ( instance id ) Get a Cloud Spanner database by ID. database = instance . database ( database id ) Execute a simple SQL statement. with database . snapshot () as snapshot : results = snapshot . execute sql ( "SELECT 1" ) for row in results : print ( row ) Ruby Imports the Google Cloud client library require "google/cloud/spanner" Your Google Cloud Platform project ID project id = "YOUR PROJECT ID" Instantiates a client spanner = Google :: Cloud :: Spanner . new project : project id Your Cloud Spanner instance ID instance id = "my-instance" Your Cloud Spanner database ID database id = "my-database" Gets a reference to a Cloud Spanner instance database database client = spanner . client instance id , database id Execute a simple SQL statement results = database client . execute query "SELECT 1" results . rows . each do row puts row end Use the client library for administrator operations The following list contains links to all the administrator operations you can use in the Spanner client library: Create and manage instance configuration Create and manage instances Create and manage databases Secure a database with customer-managed encryption keys (CMEK) Configure fine-grained access control Backup and restore databases using client libraries Recover data using point-in-time recovery (PITR) Prevent accidental database deletion Create and manage sequences Modify the leader region of a database Work with NUMERIC , JSON , and JSONB data types Use Spanner Graph with client libraries You can use client libraries to setup, modify, and query property graphs in Spanner Graph.
- ExecuteQuery ( spanner :: SqlStatement ( "SELECT 'Hello World'" )); using RowType = std :: tuple<std :: string > ; for ( auto & row : spanner :: StreamOf<RowType> ( rows )) { if ( ! row ) throw std :: move ( row ). status (); std :: cout << std :: get<0> ( row ) << " \n " ; } } C# using Google.Cloud.Spanner.Data ; using System ; using System.Threading.Tasks ; namespace GoogleCloudSamples.Spanner { public class QuickStart { static async Task MainAsync () { string projectId = "YOUR-PROJECT-ID" ; string instanceId = "my-instance" ; string databaseId = "my-database" ; string connectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/" + $"databases/{databaseId}" ; // Create connection to Cloud Spanner. using ( var connection = new SpannerConnection ( connectionString )) { // Execute a simple SQL statement. var cmd = connection .

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- ResultSet getters can only be used to retrieve // non null values. resultSet . isNull ( "MarketingBudget" ) ? "NULL" : resultSet . getLong ( "MarketingBudget" ), resultSet . isNull ( "LastUpdateTime" ) ? "NULL" : resultSet . getTimestamp ( "LastUpdateTime" )); } } } Node.js // ... // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); const query = { sql : SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime FROM Albums ORDER BY LastUpdateTime DESC , }; // Queries rows from the Albums table try { const [ rows ] = await database . run ( query ); rows . forEach ( row = > { const json = row . toJSON (); console . log ( SingerId: ${ json .
- ExecuteQuery ( std :: move ( select )); for ( auto & row : spanner :: StreamOf<RowType> ( rows )) { if ( ! row ) throw std :: move ( row ). status (); std :: cout << std :: get<0> ( row ) << " " << std :: get<1> ( row ); auto marketing budget = std :: get<2> ( row ); if ( ! marketing budget ) { std :: cout << " NULL" ; } else { std :: cout << ' ' << marketing budget ; } auto last update time = std :: get<3> ( row ); if ( ! last update time ) { std :: cout << " NULL" ; } else { std :: cout << ' ' << last update time ; } std :: cout << " \n " ; } } C# using Google.Cloud.Spanner.Data ; using System ; using System.Collections.Generic ; using System.Threading.Tasks ; public class QueryDataWithTimestampColumnAsyncSample { public class Album { public int SingerId { get ; set ; } public int AlbumId { get ; set ; } public DateTime ?
- COMMIT TIMESTAMP ) . build ()); } dbClient . write ( mutations ); } Node.js // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Instantiate Spanner table objects const performancesTable = database . table ( 'Performances' ); const data = [ { SingerId : '1' , VenueId : '4' , EventDate : '2017-10-05' , Revenue : '11000' , LastUpdateTime : 'spanner.commit timestamp()' , }, { SingerId : '1' , VenueId : '19' , EventDate : '2017-11-02' , Revenue : '15000' , LastUpdateTime : 'spanner.commit timestamp()' , }, { SingerId : '2' , VenueId : '42' , EventDate : '2017-12-23' , Revenue : '7000' , LastUpdateTime : 'spanner.commit timestamp()' , }, ]; // Inserts rows into the Singers table // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so // they must be converted to strings before being inserted as INT64s try { await performancesTable . insert ( data ); console . log ( 'Inserted data.' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; / Inserts sample data into a table with a commit timestamp column.
- COMMIT TIMESTAMP ) . build ()); // This writes all the mutations to Cloud Spanner atomically. dbClient . write ( mutations ); } Node.js // ... // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); // Update a row in the Albums table // Note: Cloud Spanner interprets Node.js numbers as FLOAT64s, so they // must be converted to strings before being inserted as INT64s const albumsTable = database . table ( 'Albums' ); const data = [ { SingerId : '1' , AlbumId : '1' , MarketingBudget : '1000000' , LastUpdateTime : 'spanner.commit timestamp()' , }, { SingerId : '2' , AlbumId : '2' , MarketingBudget : '750000' , LastUpdateTime : 'spanner.commit timestamp()' , }, ]; try { await albumsTable . update ( data ); console . log ( 'Updated data.' ); } catch ( err ) { console . error ( 'ERROR:' , err ); } finally { // Close the database when finished database . close (); } PHP use Google\Cloud\Spanner\SpannerClient; / Updates sample data in a table with a commit timestamp column.


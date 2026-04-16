---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.151Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Conversational analytics for Spanner"
feature_slug: "conversational-analytics-for-spanner"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
  - "https://docs.cloud.google.com/spanner/docs/columnar-engine"
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
keywords:
  - "conversational"
  - "operational"
  - "analytics"
  - "allowing"
  - "users"
  - "query"
  - "added"
---

# Conversational analytics for Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added conversational analytics, allowing users to query operational data with natural language via the Conversational Analytics API.

## Extended Definition

Spanner added conversational analytics, allowing users to query operational data with natural language via the Conversational Analytics API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- [https://docs.cloud.google.com/spanner/docs/columnar-engine](https://docs.cloud.google.com/spanner/docs/columnar-engine)
- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)

## Supporting Pages

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- This is a good fit for analytics and point-in-time archival, which is independent from Spanner's retention period. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( MapElements . into ( TypeDescriptors . strings ()). via ( Object :: toString )) . apply ( Window . into ( FixedWindows . of ( Duration . standardMinutes ( 1 )))) . apply ( TextIO . write () . to ( "gs://my-bucket/change-stream-results-" ) . withSuffix ( ".txt" ) . withWindowedWrites () . withNumShards ( 1 )); Note that the Cloud Storage sink provides at-least-once semantics by default.
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.
- SpannerConfig spannerConfig = SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" ); // Needed for fine-grained access control only pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( spannerConfig ) . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( ParDo . of ( new ToFullRowJsonFn ( spannerConfig ))) . apply ( BigQueryIO . < String>write () . to ( "my-bigquery-table" ) . withCreateDisposition ( CreateDisposition .
- To be able to use the SpannerIO connector, the dependency needs to be added to your pom.xml file: <dependency> <groupId>org.apache.beam</groupId> <artifactId>beam-sdks-java-io-google-cloud-platform</artifactId> <version>${beam-version}</version> <!-- available from version 2.38.0 --> </dependency> Create a metadata database The connector needs to keep track of each partition when running the Apache Beam pipeline.

### Spanner columnar engine overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/columnar-engine](https://docs.cloud.google.com/spanner/docs/columnar-engine)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner columnar engine lets you run analytics with significantly improved performance on the latest operational data.
- Operational databases commonly extract, transform, and load (ETL) data into an OLAP system for analytics.
- Federated analytics seamlessly combine data from Spanner and other sources in BigQuery.
- Spanner builds the columnar representation in the background (as part of compactions), and automatically merges the representation with the latest updates at query time to provide strong consistency.

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- ResultSet getters can only be used to retrieve // non null values. resultSet . isNull ( "MarketingBudget" ) ? "NULL" : resultSet . getLong ( "MarketingBudget" ), resultSet . isNull ( "LastUpdateTime" ) ? "NULL" : resultSet . getTimestamp ( "LastUpdateTime" )); } } } Node.js // ... // Imports the Google Cloud client library const { Spanner } = require ( ' @google-cloud/spanner ' ); / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = 'my-project-id'; // const instanceId = 'my-instance'; // const databaseId = 'my-database'; // Creates a client const spanner = new Spanner ({ projectId : projectId , }); // Gets a reference to a Cloud Spanner instance and database const instance = spanner . instance ( instanceId ); const database = instance . database ( databaseId ); const query = { sql : SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime FROM Albums ORDER BY LastUpdateTime DESC , }; // Queries rows from the Albums table try { const [ rows ] = await database . run ( query ); rows . forEach ( row = > { const json = row . toJSON (); console . log ( SingerId: ${ json .
- You can add the column by running the add timestamp column sample or by running this DDL statement against your database: ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS (allow commit timestamp=true) Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function query data with timestamp column(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $results = $database->execute( 'SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime ' . ' FROM Albums ORDER BY LastUpdateTime DESC' ); foreach ($results as $row) { if ($row['MarketingBudget'] == null) { $row['MarketingBudget'] = 'NULL'; } if ($row['LastUpdateTime'] == null) { $row['LastUpdateTime'] = 'NULL'; } printf('SingerId: %s, AlbumId: %s, MarketingBudget: %s, LastUpdateTime: %s' .
- In addition this update expects the LastUpdateTime column added by applying the DDL statement "ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS (allow commit timestamp=true)" Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function update data with timestamp column(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $operation = $database->transaction(['singleUse' => true]) ->updateBatch('Albums', [ ['SingerId' => 1, 'AlbumId' => 1, 'MarketingBudget' => 1000000, 'LastUpdateTime' => $spanner->commitTimestamp()], ['SingerId' => 2, 'AlbumId' => 2, 'MarketingBudget' => 750000, 'LastUpdateTime' => $spanner->commitTimestamp()], ]) ->commit(); print('Updated data.' .
- ExecuteQuery ( std :: move ( select )); for ( auto & row : spanner :: StreamOf<RowType> ( rows )) { if ( ! row ) throw std :: move ( row ). status (); std :: cout << std :: get<0> ( row ) << " " << std :: get<1> ( row ); auto marketing budget = std :: get<2> ( row ); if ( ! marketing budget ) { std :: cout << " NULL" ; } else { std :: cout << ' ' << marketing budget ; } auto last update time = std :: get<3> ( row ); if ( ! last update time ) { std :: cout << " NULL" ; } else { std :: cout << ' ' << last update time ; } std :: cout << " \n " ; } } C# using Google.Cloud.Spanner.Data ; using System ; using System.Collections.Generic ; using System.Threading.Tasks ; public class QueryDataWithTimestampColumnAsyncSample { public class Album { public int SingerId { get ; set ; } public int AlbumId { get ; set ; } public DateTime ?


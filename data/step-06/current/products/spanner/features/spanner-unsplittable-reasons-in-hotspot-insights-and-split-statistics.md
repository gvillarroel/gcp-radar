---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.158Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner UNSPLITTABLE_REASONS in hotspot insights and split statistics"
feature_slug: "spanner-unsplittable-reasons-in-hotspot-insights-and-split-statistics"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-distributed"
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
keywords:
  - "unsplittable"
  - "reasons"
  - "hotspot"
  - "split"
  - "insights"
  - "statistics"
---

# Spanner UNSPLITTABLE_REASONS in hotspot insights and split statistics

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now exposes UNSPLITTABLE_REASONS in hotspot insights and split statistics views to identify when splits cannot be split further and help detect schema anti-patterns.

## Extended Definition

Spanner now exposes UNSPLITTABLE_REASONS in hotspot insights and split statistics views to identify when splits cannot be split further and help detect schema anti-patterns.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed)
- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- In the following diagram, adding an IndexPartition column to the schema after the launch resolves the hotspot issue, and players are evenly distributed across the available Spanner splits.
- Hotspot When a single split in a distributed database like Spanner contains records receiving a large portion of all the queries going to the database.
- This means updates are routed to the same Spanner split, causing a hotspot during the game's launch window.
- The updated command for creating the table and index looks like this: CREATE TABLE Player ( PlayerID STRING ( 36 ) NOT NULL , IndexPartition INT64 NOT NULL Attribute INT64 NOT NULL ) PRIMARY KEY ( PlayerID ) CREATE INDEX idx attribute ON Player ( IndexPartition , Attribute ) The IndexPartition value needs to have a limited range for efficient querying, but it should also have range that is at least double the number of splits for efficient distribution.

### "Retrieve commit statistics for a transaction \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- Source ID: `site-docs-root`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- The MutationCount is then retrieved from this response and displayed. using Google.Cloud.Spanner.Data ; using Google.Cloud.Spanner.V1 ; using Google.Cloud.Spanner.V1.Internal.Logging ; using System ; using System.Collections.Generic ; using System.Diagnostics ; using System.Threading.Tasks ; public class LogCommitStatsAsyncSample { public async Task<long> LogCommitStatsAsync ( string projectId , string instanceId , string databaseId ) { // Commit statistics are logged at level Info by the default logger. // This sample uses a custom logger to access the commit statistics. // See https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Spanner.Data/logging.html // for more information on how to use loggers. var logger = new CommitStatsSampleLogger (); var options = new SessionPoolOptions (); var poolManager = SessionPoolManager .
- Build ()}, google :: cloud :: Options {}. set<spanner :: CommitReturnStatsOption > ( true )); if ( ! commit ) throw std :: move ( commit ). status (); if ( commit - > commit stats ) { std :: cout << "Updated data with " << commit - > commit stats - > mutation count << " mutations. \n " ; } std :: cout << "Update was successful [spanner get commit stats] \n " ; } C# In C#, commit statistics are not returned directly through the API.
- Create ( options , logger ); var connectionStringBuilder = new SpannerConnectionStringBuilder { ConnectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" , // Set LogCommitStats to true to enable logging commit statistics for all transactions on the connection. // LogCommitStats can also be enabled/disabled for individual Spanner transactions.
- C++ The following code calls set return stats() on CommitOptions and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. void GetCommitStatistics ( google :: cloud :: spanner :: Client client ) { namespace spanner = :: google :: cloud :: spanner ; auto commit = client .

### Distributed operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-distributed](https://docs.cloud.google.com/spanner/docs/query-operators-distributed)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- The following query demonstrates this operator: SELECT s . songname , s . songgenre FROM songs AS s WHERE s . singerid = 2 AND s . songgenre = 'ROCK' ; / -----------------+-----------+ SongName SongGenre +-----------------+-----------+ Starting Again ROCK The Second Time ROCK Fight Story ROCK +-----------------+----------- / The execution plan appears as follows: The distributed union operator sends subplans to remote servers, which perform a table scan across splits that satisfy the query's predicate WHERE s.SingerId = 2 AND s.SongGenre = 'ROCK' .
- The number of executions under a distributed union is based on the table's split boundaries, which in turn depend on data size and load, and potentially include the use additional parallelism statement hint.
- Distributed union A distributed union operator conceptually divides one or more tables into multiple splits , remotely evaluates a subquery independently on each split, and then unions all results.
- The operator sends that batch to all the local splits of the index SongsBySingerAlbumSongNameDesc , where the operator deserializes the batch and builds it into a hash table.


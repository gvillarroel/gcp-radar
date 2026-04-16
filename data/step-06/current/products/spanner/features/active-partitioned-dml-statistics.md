---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.239Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Active partitioned DML statistics"
feature_slug: "active-partitioned-dml-statistics"
latest_feature_date: "2024-03-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
keywords:
  - "partitioned"
  - "active"
  - "statistics"
  - "provides"
  - "queries"
---

# Active partitioned DML statistics

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now provides statistics for active partitioned DML queries, including query progress, in statistics tables.

## Extended Definition

Spanner now provides statistics for active partitioned DML queries, including query progress, in statistics tables.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)

## Supporting Pages

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The Spanner JDBC driver supports three alternatives for executing partitioned queries: SET AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- Example: Optimizer statistics package (Click to expand) The following example shows how to execute queries using a specific optimizer statistics package with the Spanner JDBC driver. -- Show the available optimizer statistics packages in this database.
- SHOW VARIABLE AUTO PARTITION MODE SET AUTO PARTITION MODE = { true false } Set this variable to true if you want the connection to use partitioned query for all queries that are executed.
- SET AUTOCOMMIT DML MODE = 'PARTITIONED NON ATOMIC' ; -- Delete all singers that have been marked as inactive. -- This statement is executed using Partitioned DML.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The JDBC driver supports three alternatives for executing partitioned queries: SET SPANNER.AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- Example: Optimizer statistics package (Click to expand) The following example shows how to execute queries using a specific optimizer statistics package with the Spanner JDBC driver. -- Show the available optimizer statistics packages in this database.
- SPANNER.AUTO PARTITION MODE A property of type BOOL indicating whether the connection automatically uses partitioned queries for all queries that are executed.
- AUTOCOMMIT DML MODE = 'PARTITIONED NON ATOMIC' ; -- Delete all singers that have been marked as inactive. -- This statement is executed using Partitioned DML.

### "Retrieve commit statistics for a transaction \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- The MutationCount is then retrieved from this response and displayed. using Google.Cloud.Spanner.Data ; using Google.Cloud.Spanner.V1 ; using Google.Cloud.Spanner.V1.Internal.Logging ; using System ; using System.Collections.Generic ; using System.Diagnostics ; using System.Threading.Tasks ; public class LogCommitStatsAsyncSample { public async Task<long> LogCommitStatsAsync ( string projectId , string instanceId , string databaseId ) { // Commit statistics are logged at level Info by the default logger. // This sample uses a custom logger to access the commit statistics. // See https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Spanner.Data/logging.html // for more information on how to use loggers. var logger = new CommitStatsSampleLogger (); var options = new SessionPoolOptions (); var poolManager = SessionPoolManager .
- Build ()}, google :: cloud :: Options {}. set<spanner :: CommitReturnStatsOption > ( true )); if ( ! commit ) throw std :: move ( commit ). status (); if ( commit - > commit stats ) { std :: cout << "Updated data with " << commit - > commit stats - > mutation count << " mutations. \n " ; } std :: cout << "Update was successful [spanner get commit stats] \n " ; } C# In C#, commit statistics are not returned directly through the API.
- Create ( options , logger ); var connectionStringBuilder = new SpannerConnectionStringBuilder { ConnectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" , // Set LogCommitStats to true to enable logging commit statistics for all transactions on the connection. // LogCommitStats can also be enabled/disabled for individual Spanner transactions.
- C++ The following code calls set return stats() on CommitOptions and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. void GetCommitStatistics ( google :: cloud :: spanner :: Client client ) { namespace spanner = :: google :: cloud :: spanner ; auto commit = client .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.299Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Monitoring Spanner aggregated statistics"
feature_slug: "cloud-monitoring-spanner-aggregated-statistics"
latest_feature_date: "2022-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "aggregated"
  - "viewing"
  - "monitoring"
  - "statistics"
  - "including"
  - "adds"
---

# Cloud Monitoring Spanner aggregated statistics

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Adds GA support for viewing aggregated Spanner statistics in Cloud Monitoring, including transactions, reads, queries, and lock contentions.

## Extended Definition

Adds GA support for viewing aggregated Spanner statistics in Cloud Monitoring, including transactions, reads, queries, and lock contentions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .
- The value of this column is parsable as part of a query. option type character varying A data type name that is the type of this option value. column privileges This row-filtered view lists all fine-grained access control privileges granted on all columns to any database role, including public .
- For arrays, the value ARRAY . option value character varying The value of the option. routine privileges This row-filtered view lists all fine-grained access control privileges granted on all change stream read functions to any database role, including public .
- In accordance with the SQL standard, the string is either YES or NO , rather than a Boolean value. table privileges This row-filtered view lists all fine-grained access control privileges granted on all tables and views to any database role, including public .

### "Retrieve commit statistics for a transaction \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- The MutationCount is then retrieved from this response and displayed. using Google.Cloud.Spanner.Data ; using Google.Cloud.Spanner.V1 ; using Google.Cloud.Spanner.V1.Internal.Logging ; using System ; using System.Collections.Generic ; using System.Diagnostics ; using System.Threading.Tasks ; public class LogCommitStatsAsyncSample { public async Task<long> LogCommitStatsAsync ( string projectId , string instanceId , string databaseId ) { // Commit statistics are logged at level Info by the default logger. // This sample uses a custom logger to access the commit statistics. // See https://googleapis.github.io/google-cloud-dotnet/docs/Google.Cloud.Spanner.Data/logging.html // for more information on how to use loggers. var logger = new CommitStatsSampleLogger (); var options = new SessionPoolOptions (); var poolManager = SessionPoolManager .
- Build ()}, google :: cloud :: Options {}. set<spanner :: CommitReturnStatsOption > ( true )); if ( ! commit ) throw std :: move ( commit ). status (); if ( commit - > commit stats ) { std :: cout << "Updated data with " << commit - > commit stats - > mutation count << " mutations. \n " ; } std :: cout << "Update was successful [spanner get commit stats] \n " ; } C# In C#, commit statistics are not returned directly through the API.
- Create ( options , logger ); var connectionStringBuilder = new SpannerConnectionStringBuilder { ConnectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" , // Set LogCommitStats to true to enable logging commit statistics for all transactions on the connection. // LogCommitStats can also be enabled/disabled for individual Spanner transactions.
- C++ The following code calls set return stats() on CommitOptions and returns a mutation count of 6, because we are inserting or updating 2 rows and 3 columns in each row. void GetCommitStatistics ( google :: cloud :: spanner :: Client client ) { namespace spanner = :: google :: cloud :: spanner ; auto commit = client .

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- All other principals can see only privileges granted on change stream read functions to the current database role and to roles of which the current database role is a member, not including public .
- All other principals can see only privileges granted on tables and views to the current database role and to roles of which the current database role is a member, not including public .
- All other principals can see only privileges granted on tables and views to the current database role and to roles of which the current database role is a member, not including public .


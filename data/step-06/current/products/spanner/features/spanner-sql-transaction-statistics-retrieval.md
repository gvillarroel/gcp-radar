---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.337Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner SQL transaction statistics retrieval"
feature_slug: "spanner-sql-transaction-statistics-retrieval"
latest_feature_date: "2020-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-statistics"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "retrieval"
  - "retrieving"
  - "transaction"
  - "statistics"
  - "query"
  - "added"
---

# Spanner SQL transaction statistics retrieval

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added SQL query support for retrieving recent transaction statistics over 1-minute, 10-minute, and 1-hour windows.

## Extended Definition

Spanner added SQL query support for retrieving recent transaction statistics over 1-minute, 10-minute, and 1-hour windows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Retrieve commit statistics for a transaction \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-statistics](https://docs.cloud.google.com/spanner/docs/commit-statistics)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Create ( options , logger ); var connectionStringBuilder = new SpannerConnectionStringBuilder { ConnectionString = $"Data Source=projects/{projectId}/instances/{instanceId}/databases/{databaseId}" , // Set LogCommitStats to true to enable logging commit statistics for all transactions on the connection. // LogCommitStats can also be enabled/disabled for individual Spanner transactions.
- Home Documentation Databases Spanner Guides Send feedback Retrieve commit statistics for a transaction Stay organized with collections Save and categorize content based on your preferences.
- The following code enables commit statistics logging for all transactions by setting the LogCommitStats property on SpannerConnectionStringBuilder to true.
- To help you better understand, optimize, and diagnose transaction issues, Spanner gives you access to transaction commit statistics.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- SPANNER STATISTICS This table lists the available query optimizer statistics packages.
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Fine-grained access control users see filtered results for some INFORMATION SCHEMA tables depending on their database role.
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- SET STATEMENT TAG = 'tag2' ; SELECT Title FROM Albums ORDER BY Title ; -- Set a statement tag with a query hint. @ { STATEMENT TAG = 'tag3' } SELECT TrackNumber , Title FROM Tracks WHERE AlbumId = 1 AND SingerId = 1 ORDER BY TrackNumber ; TRANSACTION TAG A property of type STRING that contains the transaction tag for the next transaction.
- SET OPTIMIZER STATISTICS PACKAGE = '' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; RETURN COMMIT STATS A property of type BOOL indicating whether statistics should be returned for transactions on this connection.
- This statement returns a timestamp only when either a read-only transaction is still active and has executed at least one query, or immediately after a read-only transaction is committed and before a new transaction starts.
- BEGIN ; INSERT INTO T ( id , col a , col b ) VALUES ( 1 , 100 , 1 ), ( 2 , 200 , 2 ), ( 3 , 300 , 3 ); COMMIT ; -- View the commit response with the transaction statistics for the last -- transaction that was committed.


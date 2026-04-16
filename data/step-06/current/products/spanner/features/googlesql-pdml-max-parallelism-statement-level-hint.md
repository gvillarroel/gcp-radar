---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.220Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "GoogleSQL PDML_MAX_PARALLELISM statement-level hint"
feature_slug: "googlesql-pdml-max-parallelism-statement-level-hint"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/backfill-embeddings"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
keywords:
  - "pdml"
  - "parallelism"
  - "level"
  - "hint"
  - "statement"
  - "googlesql"
---

# GoogleSQL PDML_MAX_PARALLELISM statement-level hint

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner added support for the GoogleSQL PDML_MAX_PARALLELISM statement-level hint in query statements.

## Extended Definition

Cloud Spanner added support for the GoogleSQL PDML_MAX_PARALLELISM statement-level hint in query statements.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)

## Supporting Pages

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Example: Savepoint support (Click to expand) The following example shows how to enable and disable savepoints support in the Spanner JDBC driver. try ( Connection connection = DriverManager . getConnection ( String . format ( "jdbc:cloudspanner:/projects/%s/instances/%s/databases/%s" , "my-project" , "my-instance" , "my-database" ))) { // Savepoints can only be used when AutoCommit=false. connection . setAutoCommit ( false ); // Disables setting a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='DISABLED'" ); // The following statement fails because savepoints have been disabled. connection . setSavepoint ( "my savepoint1" ); // Enables setting a savepoint and releasing a savepoint. // Rolling back to a savepoint is disabled. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='FAIL AFTER ROLLBACK'" ); Savepoint mySavepoint2 = connection . setSavepoint ( "my savepoint2" ); connection . createStatement (). execute ( "insert into my table (id, value) values (1, 'One')" ); connection . releaseSavepoint ( mySavepoint2 ); connection . commit (); // Enables setting, releasing and rolling back to a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='ENABLED'" ); Savepoint mySavepoint3 = connection . setSavepoint ( "my savepoint3" ); connection . createStatement (). execute ( "insert into my table (id, value) values (2, 'Two')" ); connection . rollback ( mySavepoint3 ); } What's next Learn how to connect JDBC to a GoogleSQL-dialect database .
- SET STATEMENT TAG = 'tag2' ; SELECT Title FROM Albums ORDER BY Title ; -- Set a statement tag with a query hint. @ { STATEMENT TAG = 'tag3' } SELECT TrackNumber , Title FROM Tracks WHERE AlbumId = 1 AND SingerId = 1 ORDER BY TrackNumber ; TRANSACTION TAG A property of type STRING that contains the transaction tag for the next transaction.
- You can also use a statement hint to add a statement tag: @ { STATEMENT TAG = 'my-tag' } SELECT FROM Albums For more information, see Troubleshoot with request tags and transaction tags .
- You can also use a statement hint to specify the RPC priority: @ { RPC PRIORITY = PRIORITY LOW } SELECT FROM Albums For more information, see Priority .

### "Generate vector embeddings for textual data in bulk using partitioned DML\

- URL: [https://docs.cloud.google.com/spanner/docs/backfill-embeddings](https://docs.cloud.google.com/spanner/docs/backfill-embeddings)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can also tune the parallelism using the statement-level hint @{pdml max parallelism=DESIRED NUMBER} while using GoogleSQL.
- The following example sets the parallelism to '5': GoogleSQL @{ pdml max parallelism = 5 } UPDATE products SET products . desc embed = ( SELECT embeddings . values FROM SAFE .
- For GoogleSQL databases, using this query hint overrides the default batch size configured for your model.
- ML PREDICT ROW ( 'projects/ PROJECT /locations/ LOCATION /publishers/google/models/ $MODEL NAME ' , JSONB BUILD OBJECT ( 'instances' , JSONB BUILD ARRAY ( JSONB BUILD OBJECT ( 'content' , description )))) FROM Products LIMIT 10 ; Replace the following: PROJECT : the project hosting the Vertex AI endpoint LOCATION : the location of the Vertex AI endpoint MODEL NAME : the name of the Vertex AI text embedding model Update the source table to include additional columns to store the embeddings Next, update the source table schema to include an additional column of the data type ARRAY<FLOAT32> to store the generated embeddings: GoogleSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME ARRAY<FLOAT32> ; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings PostgreSQL ALTER TABLE TABLE NAME ADD COLUMN EMBEDDING COLUMN NAME real []; Replace the following: TABLE NAME : the name of the source table EMBEDDING COLUMN NAME : the name of the column in which you want to add generated embeddings For example, using the products table example, run: GoogleSQL ALTER TABLE Products ADD COLUMN desc embed ARRAY<FLOAT32> ; PostgreSQL ALTER TABLE Products ADD COLUMN desc embed real []; You can add another column to manage the version of the embedding model.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- STATEMENT TAG = 'tag2' ; SELECT Title FROM Albums ORDER BY Title ; -- Set a statement tag with a query hint. / @STATEMENT TAG='tag3' / SELECT TrackNumber , Title FROM Tracks WHERE AlbumId = 1 AND SingerId = 1 ORDER BY TrackNumber ; SPANNER.TRANSACTION TAG A property of type STRING that contains the transaction tag for the next transaction.
- You can also use a statement hint to add a statement tag: / @STATEMENT TAG='my-tag' / SELECT FROM Albums For more information, see Troubleshoot with request tags and transaction tags .
- You can also use a statement hint to specify the RPC priority: / @RPC PRIORITY=PRIORITY LOW / SELECT FROM Albums For more information, see Priority .
- Example: Savepoint support (Click to expand) The following example shows how to enable and disable savepoints support in the Spanner JDBC driver. try ( Connection connection = DriverManager . getConnection ( String . format ( "jdbc:cloudspanner:/projects/%s/instances/%s/databases/%s" , "my-project" , "my-instance" , "my-database" ))) { // Savepoints can only be used when AutoCommit=false. connection . setAutoCommit ( false ); // Disables setting a savepoint. connection . createStatement (). execute ( "SET SPANNER.SAVEPOINT SUPPORT='DISABLED'" ); // The following statement fails because savepoints have been disabled. connection . setSavepoint ( "my savepoint1" ); // Enables setting a savepoint and releasing a savepoint. // Rolling back to a savepoint is disabled. connection . createStatement (). execute ( "SET SPANNER.SAVEPOINT SUPPORT='FAIL AFTER ROLLBACK'" ); Savepoint mySavepoint2 = connection . setSavepoint ( "my savepoint2" ); connection . createStatement (). execute ( "insert into my table (id, value) values (1, 'One')" ); connection . releaseSavepoint ( mySavepoint2 ); connection . commit (); // Enables setting, releasing and rolling back to a savepoint. connection . createStatement (). execute ( "SET SPANNER.SAVEPOINT SUPPORT='ENABLED'" ); Savepoint mySavepoint3 = connection . setSavepoint ( "my savepoint3" ); connection . createStatement (). execute ( "insert into my table (id, value) values (2, 'Two')" ); connection . rollback ( mySavepoint3 ); } What's next Learn how to connect JDBC to a PostgreSQL-dialect database .


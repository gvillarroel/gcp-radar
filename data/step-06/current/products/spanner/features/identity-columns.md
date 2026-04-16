---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.203Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Identity columns"
feature_slug: "identity-columns"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "compliant"
  - "ansi"
  - "identity"
  - "generate"
  - "columns"
  - "supports"
---

# Identity columns

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports ANSI-compliant IDENTITY columns to generate unique integer values for both key and non-key columns.

## Extended Definition

Spanner now supports ANSI-compliant IDENTITY columns to generate unique integer values for both key and non-key columns.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- This column is never null. table name character varying The name of the table that contains the generated columns. column name character varying The name of the base column that the generated column depends on. dependent column character varying The name of the generated column. column options This view lists all the options defined for the referenced table columns of a foreign key constraint.
- COMMITTED : There is no active schema change for this constraint. column column usage This view lists all the generated columns that depend on another base column in the same table.
- The string is always YES or NO for generated columns, and NULL for non-generated columns. spanner state character varying The current state of the column.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- IDENTITY GENERATION STRING A string that specifies whether the column permits only generated, and not custom user-inserted, values.
- IS IDENTITY STRING A string that is set to YES if the generated column is an identity column, and NO otherwise.
- The string is always YES for generated columns, and NULL for non-generated columns.
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- These examples demonstrate how to filter change stream records based on user-defined transaction tags as well as system tags: User-defined tag filtering for my-tx-tag : pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > ! record . isSystemTransaction () && record . getTransactionTag (). equalsIgnoreCase ( "my-tx-tag" ))) // Subsequent processing goes here System tag filtering/ TTL auditing: pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( Filter . by ( record - > record . isSystemTransaction () && record . getTransactionTag (). equals ( "RowDeletionPolicy" ))) // Subsequent processing goes here Sample: Fetch full row This example works with a Spanner table named Singer that has the following definition: CREATE TABLE Singers ( SingerId INT64 NOT NULL , FirstName STRING ( 1024 ), LastName STRING ( 1024 ) ) PRIMARY KEY ( SingerId ); Under the default OLD AND NEW VALUES value capture mode of change streams, when there is an update to a Spanner row, the data change record received will contain only the columns that were changed.
- This way, we avoid wasting resources. private static final int MIN SESSIONS = 1 ; private static final int MAX SESSIONS = 5 ; private final String projectId ; private final String instanceId ; private final String databaseId ; private transient DatabaseClient client ; private transient Spanner spanner ; public ToFullRowJsonFn ( SpannerConfig spannerConfig ) { this . projectId = spannerConfig . getProjectId (). get (); this . instanceId = spannerConfig . getInstanceId (). get (); this . databaseId = spannerConfig . getDatabaseId (). get (); } @Setup public void setup () { SessionPoolOptions sessionPoolOptions = SessionPoolOptions . newBuilder () . setMinSessions ( MIN SESSIONS ) . setMaxSessions ( MAX SESSIONS ) . build (); SpannerOptions options = SpannerOptions . newBuilder () . setProjectId ( projectId ) . setSessionPoolOption ( sessionPoolOptions ) . build (); DatabaseId id = DatabaseId . of ( projectId , instanceId , databaseId ); spanner = options . getService (); client = spanner . getDatabaseClient ( id ); } @Teardown public void teardown () { spanner . close (); } @ProcessElement public void process ( @Element DataChangeRecord element , OutputReceiver<String> output ) { com . google . cloud .
- Set IAM Permissions for Dataflow templates Before creating a Dataflow job with the three flex templates listed, ensure that you have the required Identity and Access Management (IAM) permissions for the following service accounts: the Dataflow service account the worker service account If you don't have the required IAM permissions, then you must specify a user-managed worker service account to create the Dataflow job.
- UPDATE ) { // For UPDATE mod, get non-primary key columns by doing a snapshot read using the primary key column from mod. try ( ResultSet resultSet = client . singleUse ( TimestampBound . ofReadTimestamp ( commitTimestamp )) . read ( "Singers" , KeySet . singleKey ( com . google . cloud . spanner .


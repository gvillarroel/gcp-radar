---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.297Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "ARRAY_SLICE SQL function"
feature_slug: "array-slice-sql-function"
latest_feature_date: "2022-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "slice"
  - "standard"
  - "which"
  - "supports"
  - "array"
---

# ARRAY_SLICE SQL function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Google Standard SQL for Spanner now supports the ARRAY_SLICE function, which returns a contiguous subset of elements from an input array.

## Extended Definition

Google Standard SQL for Spanner now supports the ARRAY_SLICE function, which returns a contiguous subset of elements from an input array.

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
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- In accordance with the SQL standard, the string is either YES or NO , rather than a Boolean value. change streams This row-filtered view lists all of a database's change streams, and notes which ones track the entire database versus specific tables or columns.
- This is set to public for the default schema and non-empty for named schemas. schema owner character varying The name of the owner of the schema. default character set catalog character varying Not used. default character set schema character varying Not used. default character set name character varying Not used. sql path character varying Not used. effective timestamp timestamp with timezone The timestamp at which all the data in this schema became effective.
- All other principals can see only tables that meet either of the following requirements: The SELECT , INSERT , UPDATE , or DELETE fine-grained access control privileges are granted on the table to the current database role, to roles of which the current database role is a member, or to public .
- All other principals can see only columns that have any fine-grained access control privileges granted on them (or the SELECT , INSERT or UPDATE privileges granted on their containing tables) to the current database role, to roles of which the current database role is a member, or to public .

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- An empty string if unnamed. name string The name of the property graph. nodeTables array<object> A list of GraphElementTable objects for nodes. edgeTables array<object> A list of GraphElementTable objects for edges. labels array<object> A list of GraphElementLabel objects. propertyDeclarations array<object> A list of GraphPropertyDeclaration objects.
- GraphNodeTableReference nodeTableName string The name of the graph element table. edgeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the edges. nodeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the nodes.
- All other principals can see only indexes that meet either of the following requirements: Any of the SELECT , INSERT , or UPDATE fine-grained access control privileges are granted at the column level on all columns in the index to the current database role, to roles of which the current database role is a member, or to public .

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- String elementKey = keyString . read (); if ( elementKey == null ) { Instant commitTimestamp = new Instant ( element . getValue (). getCommitTimestamp (). toSqlTimestamp ()); Instant outputTimestamp = commitTimestamp . plus ( Duration . standardSeconds ( incrementIntervalInSeconds )); timer . set ( outputTimestamp ); keyString . write ( element . getKey ()); } } @OnTimer ( "timer" ) public void onExpiry ( OnTimerContext context , @StateId ( "buffer" ) BagState<DataChangeRecord> buffer , @TimerId ( "timer" ) Timer timer , @StateId ( "keyString" ) ValueState<String> keyString ) { if ( ! buffer . isEmpty (). read ()) { String elementKey = keyString . read (); final List<DataChangeRecord> records = StreamSupport . stream ( buffer . read (). spliterator (), false ) . collect ( Collectors . toList ()); buffer . clear (); List<DataChangeRecord> recordsToOutput = new ArrayList <> (); for ( DataChangeRecord record : records ) { Instant recordCommitTimestamp = new Instant ( record . getCommitTimestamp (). toSqlTimestamp ()); final String recordString = record . getMods (). get ( 0 ). getNewValuesJson (). isEmpty () ? "Deleted record" : record . getMods (). get ( 0 ). getNewValuesJson (); // When the watermark passes time T, this means that all records with // event time < T have been processed and successfully committed.
- This is a good fit for analytics and point-in-time archival, which is independent from Spanner's retention period. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( MapElements . into ( TypeDescriptors . strings ()). via ( Object :: toString )) . apply ( Window . into ( FixedWindows . of ( Duration . standardMinutes ( 1 )))) . apply ( TextIO . write () . to ( "gs://my-bucket/change-stream-results-" ) . withSuffix ( ".txt" ) . withWindowedWrites () . withNumShards ( 1 )); Note that the Cloud Storage sink provides at-least-once semantics by default.
- It buffers the data change records belonging to that transaction until the number of buffered records matches numberOfRecordsInTransaction , upon which it outputs the bundled data change records. pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" )) // Needed for fine-grained access control only . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( ParDo . of ( new KeyByTransactionIdFn ())) . apply ( ParDo . of ( new TransactionBoundaryFn ())) // Subsequent processing goes here KeyByTransactionIdFn This function takes in a DataChangeRecord and outputs a DataChangeRecord keyed by the transaction ID. private static class KeyByTransactionIdFn extends DoFn<DataChangeRecord , KV<String , DataChangeRecord >> { @ProcessElement public void processElement ( @Element DataChangeRecord record , OutputReceiver<KV<String , DataChangeRecord >> outputReceiver ) { outputReceiver . output ( KV . of ( record . getServerTransactionId (), record )); } } TransactionBoundaryFn TransactionBoundaryFn buffers received key-value pairs of {TransactionId, DataChangeRecord} from KeyByTransactionIdFn and buffers them in groups based on TransactionId .
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.


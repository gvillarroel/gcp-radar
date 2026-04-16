---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.283Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "ARRAY_TRANSFORM function"
feature_slug: "array-transform-function"
latest_feature_date: "2023-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/reference/dialect-differences"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow"
keywords:
  - "transform"
  - "googlesql"
  - "supports"
  - "array"
---

# ARRAY_TRANSFORM function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner GoogleSQL now supports the ARRAY_TRANSFORM function.

## Extended Definition

Spanner GoogleSQL now supports the ARRAY_TRANSFORM function.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)

## Supporting Pages

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- An empty string if unnamed. name string The name of the property graph. nodeTables array<object> A list of GraphElementTable objects for nodes. edgeTables array<object> A list of GraphElementTable objects for edges. labels array<object> A list of GraphElementLabel objects. propertyDeclarations array<object> A list of GraphPropertyDeclaration objects.
- GraphNodeTableReference nodeTableName string The name of the graph element table. edgeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the edges. nodeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the nodes.
- Home Documentation Databases Spanner Reference Send feedback Information schema for GoogleSQL-dialect databases Stay organized with collections Save and categorize content based on your preferences.

### "Dialect parity between GoogleSQL and PostgreSQL \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/reference/dialect-differences](https://docs.cloud.google.com/spanner/docs/reference/dialect-differences)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, we use CONCAT as our function F : -- Given the following schema CREATE TABLE singers ( singer id BIGINT PRIMARY KEY, first name VARCHAR(1024), last name VARCHAR(1024), singer info BYTEA ); -- Create a hash for each row (using all columns) WITH hashed rows AS ( SELECT , ABS(MOD(spanner.farm fingerprint( CONCAT( singer id::text, first name, last name, singer info::text ) ), 100)) AS hash value FROM singers ) -- Sample data SELECT FROM hashed rows WHERE hash value < 10 -- sample roughly 10% LIMIT 10; / Optional: LIMIT to a max of 10 rows to be returned / VALUE IN UNNEST(ARRAY(...)) Use the equality operator with the ANY function, as shown in the following example: SELECT value = any(array[...]) GoogleSQL dialect function differences GoogleSQL function PostgreSQL dialect recommendation ACOSH Use the formula of the function explicitly, as shown in the following example: SELECT LN(x + SQRT(x x - 1)); APPROX COSINE DISTANCE No recommendation available.
- SINH Use the formula of the function explicitly, as shown in the following example: SELECT (EXP(x) - EXP(-x)) / 2; SPLIT Use the regexp split to array function, as shown in the following example: WITH letters AS ( SELECT '' as letter group UNION ALL SELECT 'a' as letter group UNION ALL SELECT 'b c d' as letter group ) SELECT regexp split to array(letter group, ' ') as example FROM letters; STDDEV Use the formula of the function explicitly (unbiased standard deviation), as shown in the following example: WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SQRT(SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1)) AS stddev FROM numbers CROSS JOIN mean STDDEV SAMP Use the formula of the function explicitly (unbiased standard deviation), as shown in the following example: WITH numbers AS ( SELECT 1 AS x UNION ALL SELECT 2 UNION ALL SELECT 3 ), mean AS ( SELECT AVG(x)::float8 AS mean FROM numbers ) SELECT SQRT(SUM(POWER(numbers.x - mean.mean, 2)) / (COUNT(x) - 1)) AS stddev FROM numbers CROSS JOIN mean TANH Use the formula of the function explicitly.
- ARRAY INCLUDES Use the equality operator with the ANY function, as shown in the following example: SELECT search value = ANY(array to search); ARRAY INCLUDES ALL Use the array contains operator, as shown in the following example: SELECT array to search @> search values; ARRAY INCLUDES ANY Use the array overlap operator, as shown in the following example: SELECT array to search && search values; ARRAY IS DISTINCT Use a subquery to count distinct values and compare them to the original array length, as shown in the following example: SELECT ARRAY LENGTH(value, 1) = ( SELECT COUNT(DISTINCT e) FROM UNNEST(value) AS e); ARRAY LAST Use the array subscript operator, as shown in the following example SELECT (value)[ARRAY LENGTH(value, 1)]; This returns NULL for empty arrays.
- Use a subquery with the ORDER BY or LIMIT clauses, as shown in the following example: SELECT FROM ( (expression) UNION ALL SELECT NULL, … -- as many columns as you have ) AS rows ORDER BY 1 NULLS LAST LIMIT 1; ARRAY CONCAT AGG You can use ARRAY AGG and UNNEST as shown in the following example: WITH albums AS ( SELECT ARRAY['Song A', NULL, 'Song B'] AS songs UNION ALL SELECT NULL UNION ALL SELECT ARRAY[]::TEXT[] ) SELECT ARRAY AGG(song) FROM albums, UNNEST(songs) song; ARRAY FIRST Use the array subscript operator, as shown in the following example: SELECT array expression[1]; Note that this will return NULL for empty arrays.

### "Build change streams connections using Dataflow \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow](https://docs.cloud.google.com/spanner/docs/change-streams/use-dataflow)
- Source ID: `site-docs-root`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- String elementKey = keyString . read (); if ( elementKey == null ) { Instant commitTimestamp = new Instant ( element . getValue (). getCommitTimestamp (). toSqlTimestamp ()); Instant outputTimestamp = commitTimestamp . plus ( Duration . standardSeconds ( incrementIntervalInSeconds )); timer . set ( outputTimestamp ); keyString . write ( element . getKey ()); } } @OnTimer ( "timer" ) public void onExpiry ( OnTimerContext context , @StateId ( "buffer" ) BagState<DataChangeRecord> buffer , @TimerId ( "timer" ) Timer timer , @StateId ( "keyString" ) ValueState<String> keyString ) { if ( ! buffer . isEmpty (). read ()) { String elementKey = keyString . read (); final List<DataChangeRecord> records = StreamSupport . stream ( buffer . read (). spliterator (), false ) . collect ( Collectors . toList ()); buffer . clear (); List<DataChangeRecord> recordsToOutput = new ArrayList <> (); for ( DataChangeRecord record : records ) { Instant recordCommitTimestamp = new Instant ( record . getCommitTimestamp (). toSqlTimestamp ()); final String recordString = record . getMods (). get ( 0 ). getNewValuesJson (). isEmpty () ? "Deleted record" : record . getMods (). get ( 0 ). getNewValuesJson (); // When the watermark passes time T, this means that all records with // event time < T have been processed and successfully committed.
- SpannerConfig spannerConfig = SpannerConfig . create () . withProjectId ( "my-project-id" ) . withInstanceId ( "my-instance-id" ) . withDatabaseId ( "my-database-id" ) . withDatabaseRole ( "my-database-role" ); // Needed for fine-grained access control only pipeline . apply ( SpannerIO . readChangeStream () . withSpannerConfig ( spannerConfig ) // Assume we have a change stream "my-change-stream" that watches Singers table. . withChangeStreamName ( "my-change-stream" ) . withMetadataInstance ( "my-metadata-instance-id" ) . withMetadataDatabase ( "my-metadata-database-id" ) . withInclusiveStartAt ( Timestamp . now ())) . apply ( ParDo . of ( new ToFullRowJsonFn ( spannerConfig ))) // Subsequent processing goes here ToFullRowJsonFn This transformation will perform a stale read at the commit timestamp of each record received, and map the full row to JSON. public class ToFullRowJsonFn extends DoFn<DataChangeRecord , String > { // Since each instance of this DoFn will create its own session pool and will // perform calls to Spanner sequentially, we keep the number of sessions in // the pool small.
- WRITE APPEND ) . withSchema ( new TableSchema (). setFields ( Arrays . asList ( new TableFieldSchema () . setName ( "SingerId" ) . setType ( "INT64" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "FirstName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ), new TableFieldSchema () . setName ( "LastName" ) . setType ( "STRING" ) . setMode ( "REQUIRED" ) ))) . withAutoSharding () . optimizedWrites () . withFormatFunction (( String element ) - > { ObjectMapper objectMapper = new ObjectMapper (); JsonNode jsonNode = null ; try { jsonNode = objectMapper . readTree ( element ); } catch ( IOException e ) { e . printStackTrace (); } return new TableRow () . set ( "SingerId" , jsonNode . get ( "SingerId" ). asInt ()) . set ( "FirstName" , jsonNode . get ( "FirstName" ). asText ()) . set ( "LastName" , jsonNode . get ( "LastName" ). asText ()); } ) ); Note that the BigQuery sink provides at-least-once semantics by default.
- Dataflow pipeline A Spanner change streams Dataflow pipeline is composed of four main parts: A Spanner database with a change stream The SpannerIO connector User-defined transforms and sinks An Apache Beam sink I/O writer Spanner change stream For details on how to create a change stream, see Create a change stream .


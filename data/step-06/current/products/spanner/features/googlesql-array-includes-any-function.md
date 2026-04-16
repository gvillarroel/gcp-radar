---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.284Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "GoogleSQL ARRAY_INCLUDES_ANY function"
feature_slug: "googlesql-array-includes-any-function"
latest_feature_date: "2023-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
keywords:
  - "checking"
  - "whether"
  - "element"
  - "specified"
  - "includes"
  - "googlesql"
  - "array"
  - "added"
---

# GoogleSQL ARRAY_INCLUDES_ANY function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

GoogleSQL added the ARRAY_INCLUDES_ANY function to support checking whether any specified element is present in an array.

## Extended Definition

GoogleSQL added the ARRAY_INCLUDES_ANY function to support checking whether any specified element is present in an array.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)

## Supporting Pages

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- An empty string if unnamed. name string The name of the property graph. nodeTables array<object> A list of GraphElementTable objects for nodes. edgeTables array<object> A list of GraphElementTable objects for edges. labels array<object> A list of GraphElementLabel objects. propertyDeclarations array<object> A list of GraphPropertyDeclaration objects.
- GraphNodeTableReference nodeTableName string The name of the graph element table. edgeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the edges. nodeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the nodes.
- GraphElementLabel name string The name of the label. propertyDeclarationNames array<string> The names of the properties associated with this label.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Includes the subtype if an ARRAY is returned. spanner determinism character varying The user specified determinism of the function ( DETERMINISTIC , NOT DETERMINISTIC STABLE , or NOT DETERMINISTIC VOLATILE ).
- Possible values and the states they represent are: NULL : the index type is PRIMARY KEY PREPARE : creating empty tables for a new index WRITE ONLY : backfilling data for a new index WRITE ONLY CLEANUP : cleaning up a new index WRITE ONLY VALIDATE UNIQUE : checking uniqueness of data in a new index READ WRITE : normal index operation spanner is managed character varying Whether the index is managed by Spanner.
- The value is ASC or DESC for key columns, and NULL for non-key columns (for example, columns specified in the STORING clause of an index). is nullable character varying A string that indicates whether the column is nullable.
- In accordance with the SQL standard, the string is either YES or NO , rather than a Boolean value. is null filtered character varying Whether the index includes entries with NULL values.

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Java private static final String SINGERS NAME STREAM QUERY TEMPLATE = "SELECT FROM \"spanner\".\"read json SingersNameStream\"" + "($1, $2, $3, $4, null)" ; // Helper method to conveniently create change stream query texts and // bind parameters. public static Statement getChangeStreamQuery ( String partitionToken , Timestamp startTimestamp , Timestamp endTimestamp , long heartbeatMillis ) { return Statement . newBuilder ( SINGERS NAME STREAM QUERY TEMPLATE ) . bind ( "p1" ) . to ( startTimestamp ) . bind ( "p2" ) . to ( endTimestamp ) . bind ( "p3" ) . to ( partitionToken ) . bind ( "p4" ) . to ( heartbeatMillis ) . build (); } Change streams record format GoogleSQL The change streams read function returns a single ChangeRecord column of type ARRAY<STRUCT<...>> .
- The value should only be used in the context of processing change stream records and is not correlated with the transaction id in Spanner's API is last record in transaction in partition BOOLEAN Indicates whether this is the last record for a transaction in the current partition. table name STRING Indicates the name of the table affected by the change. value capture type STRING Describes the value capture type that was specified in the change stream configuration when this change was captured.
- The value should only be used in the context of processing change stream records and is not correlated with the transaction id in Spanner's API. is last record in transaction in partition BOOL Indicates whether this is the last record for a transaction in the current partition. table name STRING Name of the table affected by the change. value capture type STRING Describes the value capture type that was specified in the change stream configuration when this change was captured.
- The array elements have the following type: STRUCT < data change record ARRAY<STRUCT<...>>, heartbeat record ARRAY<STRUCT<...>>, child partitions record ARRAY<STRUCT<...>> There are three fields in this STRUCT : data change record , heartbeat record and child partitions record , each of type ARRAY<STRUCT<...>> .


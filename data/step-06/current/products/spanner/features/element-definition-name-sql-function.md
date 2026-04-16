---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.164Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "ELEMENT_DEFINITION_NAME SQL function"
feature_slug: "element-definition-name-sql-function"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "definition"
  - "name"
  - "element"
  - "googlesql"
  - "which"
  - "added"
---

# ELEMENT_DEFINITION_NAME SQL function

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added the GoogleSQL function ELEMENT_DEFINITION_NAME, which returns the underlying graph element table name for a graph element.

## Extended Definition

Spanner added the GoogleSQL function ELEMENT_DEFINITION_NAME, which returns the underlying graph element table name for a graph element.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- An empty string if unnamed. name string The name of the property graph. nodeTables array<object> A list of GraphElementTable objects for nodes. edgeTables array<object> A list of GraphElementTable objects for edges. labels array<object> A list of GraphElementLabel objects. propertyDeclarations array<object> A list of GraphPropertyDeclaration objects.
- GraphNodeTableReference nodeTableName string The name of the graph element table. edgeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the edges. nodeTableColumns array<string> The name of the columns that are associated with the source and destination keys for the nodes.

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- GoogleSQL The DDL syntax for creating a change stream using GoogleSQL looks like this: CREATE CHANGE STREAM CHANGE STREAM NAME [ FOR column or table watching definition [ , ... ] ] [ OPTIONS ( retention period = timespan , value capture type = type , exclude ttl deletes = boolean , exclude insert = boolean , exclude update = boolean , exclude delete = boolean , allow txn exclusion = boolean ) ] PostgreSQL The DDL syntax for creating a change stream using PostgreSQL looks like this: CREATE CHANGE STREAM CHANGE STREAM NAME [ FOR column or table watching definition [, ... ] ] [ WITH ( retention period = timespan , value capture type = type , exclude ttl deletes = boolean , exclude insert = boolean , exclude update = boolean , exclude delete = boolean , allow txn exclusion = boolean ) ] A new change stream begins to watch its assigned schema objects as soon as the long-running operation that created it completes.
- In the following example, the exclude delete filter is added to an existing change stream called NewFilterChangeStream : ALTER CHANGE STREAM NewFilterChangeStream SET ( exclude delete = true ) Remove a table modification type filter from an existing change stream GoogleSQL To remove one or more existing table modification type filters in change stream, run the following to set the filter to false : ALTER CHANGE STREAM CHANGE STREAM NAME SET OPTIONS ( MOD TYPE FILTER NAME = false ) Replace the following: CHANGE STREAM NAME : replace with the name of your existing change stream MOD TYPE FILTER NAME : replace with the filter you want to remove: exclude insert , exclude update , or exclude delete .
- Add the TTL-based deletes filter to an existing change stream GoogleSQL To add the TTL-based deletes filter to an existing change stream, run the following to set the filter to true : ALTER CHANGE STREAM CHANGE STREAM NAME FOR ALL SET OPTIONS ( exclude ttl deletes = true ) Replace the following: CHANGE STREAM NAME : the name of your existing change stream In the following example, the exclude ttl deletes filter is added to an existing change stream called NewFilterChangeStream that excludes all TTL-based deletes: ALTER CHANGE STREAM NewFilterChangeStream FOR ALL SET OPTIONS ( exclude ttl deletes = true ) This excludes all future TTL-based deletes from the change stream.
- GoogleSQL To create a change stream that can exclude records from specified write transactions, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL OPTIONS ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of the new change stream The following example creates a change stream named NewChangeStream that can exclude records from specified write transactions: CREATE CHANGE STREAM NewChangeStream FOR ALL OPTIONS ( allow txn exclusion = true ) PostgreSQL To create a change stream that can exclude records from specified write transactions, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL WITH ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of the new change stream The following example creates a change stream named NewChangeStream that can exclude records from specified write transactions,: CREATE CHANGE STREAM NewChangeStream FOR ALL WITH ( allow txn exclusion = true ) To enable or disable the transaction-level records exclusion from an existing change stream, see Modify transaction-level records exclusion .

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The default value is public . table name character varying The name of the view. view definition character varying The SQL text of the query that defines the view. check option character varying Not used. is updatable character varying Not used. is insertable into character varying Not used. is trigger updatable character varying Not used. is trigger deletable character varying Not used. is trigger insertable into character varying Not used. security type character varying The security type of the view.
- This is set to public for the default schema and non-empty for named schemas. schema owner character varying The name of the owner of the schema. default character set catalog character varying Not used. default character set schema character varying Not used. default character set name character varying Not used. sql path character varying Not used. effective timestamp timestamp with timezone The timestamp at which all the data in this schema became effective.
- Column name Type Description grantee character varying The name of the database role to which membership is granted. role name character varying The name of the parent database role in which this membership is granted. is grantable character varying Not used.
- Always NULL . grantee character varying The name of the database role to which this privilege is granted. change stream catalog character varying The database name. change stream schema character varying The name of the schema that contains the change stream.


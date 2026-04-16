---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.210Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner support for pg_system_catalog"
feature_slug: "spanner-support-for-pg-system-catalog"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
keywords:
  - "catalog"
  - "subset"
  - "system"
  - "postgresql"
  - "supports"
---

# Spanner support for pg_system_catalog

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner now supports a subset of PostgreSQL pg_system_catalog tables and views.

## Extended Definition

Spanner now supports a subset of PostgreSQL pg_system_catalog tables and views.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream that this row refers to. table catalog character varying The database name. table schema character varying The name of the table's schema.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. table catalog character varying The database name. table schema character varying The name of the table's schema.
- The default is public for a PostgreSQL-dialect database. sequence name character varying The name of the sequence. data type character varying Sequence only supports int8 . numeric precision bigint Not used.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables in the INFORMATION SCHEMA: SELECT t . table name FROM information schema . tables AS t WHERE t . table schema = "SPANNER SYS" Return information about the columns in the user table MyTable in default schema: SELECT t . column name , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table catalog = '' AND t . table schema = '' AND t . table name = 'MyTable' ORDER BY t . table catalog , t . table schema , t . table name , t . ordinal position Return information on what the default leader region for the database is.
- GraphElementTable name string The name of the graph element table. kind string Either NODE or EDGE . baseCatalogName string The name of the catalog containing the base table. baseSchemaName string The name of the schema containing the base table. baseTableName string The name of the input table from which elements are created. keyColumns array<string> The column names that constitute the element key. labelNames array<string> The label names attached to this element table. propertyDefinitions array<object> A list of GraphPropertyDefinition objects. dynamicLabelExpr string The name of the column that contains the DYNAMIC LABEL definition. dynamicPropertyExpr string The name of the column that contains the DYNAMIC PROPERTIES definition. sourceNodeTable object A GraphNodeTableReference object.
- Row filtering in information schema tables Principals with database-level IAM permissions and principals who have been granted access to the spanner info reader system role (or to members of that role) can see all rows in all information schema tables.

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A


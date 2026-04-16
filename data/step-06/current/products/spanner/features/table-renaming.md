---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.239Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Table renaming"
feature_slug: "table-renaming"
latest_feature_date: "2024-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "renaming"
  - "renamed"
  - "safely"
  - "place"
  - "allows"
  - "tables"
  - "table"
---

# Table renaming

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Allows Spanner tables to be renamed in place and to safely swap table names using synonyms.

## Extended Definition

Allows Spanner tables to be renamed in place and to safely swap table names using synonyms.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, the exclude delete filter is added to an existing change stream called NewFilterChangeStream : ALTER CHANGE STREAM NewFilterChangeStream SET ( exclude delete = true ) Remove a table modification type filter from an existing change stream GoogleSQL To remove one or more existing table modification type filters in change stream, run the following to set the filter to false : ALTER CHANGE STREAM CHANGE STREAM NAME SET OPTIONS ( MOD TYPE FILTER NAME = false ) Replace the following: CHANGE STREAM NAME : replace with the name of your existing change stream MOD TYPE FILTER NAME : replace with the filter you want to remove: exclude insert , exclude update , or exclude delete .
- Enable transaction-level records exclusion for an existing change stream GoogleSQL To enable transaction-level records exclusion for an existing change stream, run the following: ALTER CHANGE STREAM CHANGE STREAM NAME FOR ALL SET OPTIONS ( allow txn exclusion = true ) Replace the following: CHANGE STREAM NAME : the name of your existing change stream In the following example, the allow txn exclusion option is enabled on an existing change stream, NewAllowedChangeStream : ALTER CHANGE STREAM NewAllowedChangeStream FOR ALL SET OPTIONS ( allow txn exclusion = true ) This allows the change stream to exclude records from specified write transactions.
- In the following example, the exclude delete filter is added to an existing change stream called NewFilterChangeStream : ALTER CHANGE STREAM NewFilterChangeStream SET OPTIONS ( exclude delete = true ) PostgreSQL To add one or more new table modification type filters to an existing change stream, run the following to set the filter to true : ALTER CHANGE STREAM CHANGE STREAM NAME SET ( MOD TYPE FILTER NAME = true ) Replace the following: CHANGE STREAM NAME : replace with the name of your existing change stream MOD TYPE FILTER NAME : replace with the filter you want to add: exclude insert , exclude update , or exclude delete .
- The following example creates a change stream called NewFilterChangeStream that excludes the INSERT and UPDATE table modification types: CREATE CHANGE STREAM NewFilterChangeStream FOR ALL OPTIONS ( exclude insert = true , exclude update = true ) PostgreSQL To create a change stream with one or more table modification type filters, run the following: CREATE CHANGE STREAM CHANGE STREAM NAME FOR ALL WITH ( MOD TYPE FILTER NAME = true ) Replace the following: CHANGE STREAM NAME : the name of your new change stream MOD TYPE FILTER NAME : the filter you want to add: exclude insert , exclude update , or exclude delete .

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Tables with a PRIMARY KEY specification have a pseudo-index entry generated with the name PRIMARY KEY , which allows the fields of the primary key to be determined.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables in the INFORMATION SCHEMA: SELECT t . table name FROM information schema . tables AS t WHERE t . table schema = "SPANNER SYS" Return information about the columns in the user table MyTable in default schema: SELECT t . column name , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table catalog = '' AND t . table schema = '' AND t . table name = 'MyTable' ORDER BY t . table catalog , t . table schema , t . table name , t . ordinal position Return information on what the default leader region for the database is.
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Fine-grained access control users see filtered results for some INFORMATION SCHEMA tables depending on their database role.
- An empty string if unnamed. name string The name of the property graph. nodeTables array<object> A list of GraphElementTable objects for nodes. edgeTables array<object> A list of GraphElementTable objects for edges. labels array<object> A list of GraphElementLabel objects. propertyDeclarations array<object> A list of GraphPropertyDeclaration objects.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Tables created with a PRIMARY KEY clause have a pseudo-index entry generated with the name PRIMARY KEY , which allows the fields of the primary key to be identified. index type character varying The type of the index.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- Possible values include 'BASE TABLE', 'VIEW', or 'SYNONYM'. self referencing column name character varying Not used. reference generation character varying Not used. user defined type catalog character varying Not used. user defined type schema character varying Not used. user defined type name character varying Not used. is insertable into character varying Not used. is typed character varying Not used. commit action character varying Not used. parent table name character varying The name of the parent table if this table is interleaved, or NULL . on delete action character varying This is set to CASCADE or NO ACTION for interleaved tables, and NULL otherwise.
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Usage information schema tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Query page of a database in the Google Cloud console.


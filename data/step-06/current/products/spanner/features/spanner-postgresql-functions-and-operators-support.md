---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.269Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner PostgreSQL functions and operators support"
feature_slug: "spanner-postgresql-functions-and-operators-support"
latest_feature_date: "2023-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-unary"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-binary"
keywords:
  - "expanding"
  - "operators"
  - "compatible"
  - "functions"
  - "postgresql"
  - "added"
---

# Spanner PostgreSQL functions and operators support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for 13 PostgreSQL-compatible functions and operators, expanding SQL compatibility for PostgreSQL syntax.

## Extended Definition

Spanner added support for 13 PostgreSQL-compatible functions and operators, expanding SQL compatibility for PostgreSQL syntax.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)
- [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)

## Supporting Pages

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Tables in information schema for PostgreSQL-dialect databases The tables and views in the information schema are compatible with the tables and views in the information schema of open source PostgreSQL.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .
- This column is never null. table name character varying The name of the table column name character varying The name of the column ordinal position BIGINT The ordinal position of the column in the table, starting with a value of 1 column default character varying A string representation of the open source PostgreSQL expression of the default value of the column, for example, '9'::bigint . is nullable character varying A string that indicates whether the column is nullable.

### Unary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- The following operators are unary operators: Aggregate Apply mutations Create batch Compute Compute struct DataBlockToRowAdapter Filter Limit Local split union Random Id Assign RowToDataBlockAdapter Serialize result Sort TVF Union input PostgreSQL interface note: The examples in this topic are intended for GoogleSQL-dialect databases.
- DataBlockToRowAdapter The Spanner query optimizer automatically inserts a DataBlockToRowAdapter operator between a pair of operators that operate using different execution methods.
- RowToDataBlockAdapter The Spanner query optimizer automatically inserts a RowToDataBlockAdapter operator between a pair of operators that operate using different execution methods.
- Home Documentation Databases Spanner Reference Send feedback Unary operators Stay organized with collections Save and categorize content based on your preferences.

### Binary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- The following operators are binary operators: Apply join Cross apply Outer apply Semi apply Anti-Semi apply Hash join Merge join Recursive union PostgreSQL interface note: The examples in this topic are intended for GoogleSQL-dialect databases.
- Consider another merge join example using the following query: SELECT a . albumtitle , s . songname FROM albums AS a join @{ join method = merge join } songs AS s ON a . albumid = s . albumid ; / -----------------------+--------------------------+ AlbumTitle SongName +-----------------------+--------------------------+ Total Junk The Second Time Total Junk Starting Again Total Junk Nothing Is The Same Total Junk Let's Get Back Together Total Junk I Knew You Were Magic Total Junk Blue Total Junk 42 Total Junk Not About The Guitar Green The Second Time Green Starting Again Green Nothing Is The Same Green Let's Get Back Together Green I Knew You Were Magic Green Blue Green 42 Green Not About The Guitar Nothing To Do With Me The Second Time Nothing To Do With Me Starting Again Nothing To Do With Me Nothing Is The Same Nothing To Do With Me Let's Get Back Together Nothing To Do With Me I Knew You Were Magic Nothing To Do With Me Blue Nothing To Do With Me 42 Nothing To Do With Me Not About The Guitar Play The Second Time Play Starting Again Play Nothing Is The Same Play Let's Get Back Together Play I Knew You Were Magic Play Blue Play 42 Play Not About The Guitar Terrified Fight Story +-----------------------+-------------------------- / The execution plan appears as follows: In the preceding execution plan, the query optimizer introduced additional sort operators to execute the merge join.
- This also lets the merge join in this example operate without additional sort operators, because both table scans are already sorted by SingerId , AlbumId , which is the join condition.
- Home Documentation Databases Spanner Reference Send feedback Binary operators Stay organized with collections Save and categorize content based on your preferences.


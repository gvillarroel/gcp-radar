---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.343Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Automatic secondary index usage for Spanner SQL queries"
feature_slug: "automatic-secondary-index-usage-for-spanner-sql-queries"
latest_feature_date: "2019-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "secondary"
  - "automatic"
  - "index"
  - "queries"
  - "usage"
---

# Automatic secondary index usage for Spanner SQL queries

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner can automatically choose and use secondary indexes when executing SQL queries to improve query efficiency.

## Extended Definition

Spanner can automatically choose and use secondary indexes when executing SQL queries to improve query efficiency.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- In load tests, this model does an acceptable job of distributing the secondary index read and write load across multiple Spanner splits, as illustrated in the following diagram: Although the synthetic data used in the load test is similar to the eventual steady state of the game where Attribute values are well distributed, the game design dictates that all players start with Attribute=50 .
- In order to speed up queries that filter for the game mode, consider the following index: CREATE INDEX idx score ranking ON Ranking ( GameMode , Score DESC ) If everyone plays the same game mode called 1 , this index creates a hotspot where GameMode=1 .
- Because each new player starts with Attribute=50 , when new players join they are inserted in the same part of the idx attribute secondary index.
- Based on this data, the studio created the following Spanner table, with a primary key using the PlayerID and a secondary index on Attribute .

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- The values include PRIMARY KEY , LOCAL , or GLOBAL . parent table name character varying Secondary indexes can be interleaved in a parent table, as discussed in Creating a secondary index .
- For example, secondary backing indexes for foreign keys are managed by Spanner.
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- Column name Type Description table catalog character varying The database name. table schema character varying The name of the schema that contains the table that contains the column that is used by the constraint. table name character varying The name of the table that contains the column that is used by the constraint. column name character varying The name of the column that is used by the constraint. constraint catalog character varying The database name. constraint schema character varying The name of the constraint's schema. constraint name character varying The name of the constraint. constraint table usage This view contains one row for each table used by a constraint.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Some additional INFORMATION SCHEMA usage notes: Queries against the INFORMATION SCHEMA can be used in a read-only transaction , but not in a read-write transaction .
- PARENT TABLE NAME STRING Secondary indexes can be interleaved in a parent table, as discussed in Creating a secondary index .
- Secondary backing indexes for foreign keys are managed by Spanner.
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.


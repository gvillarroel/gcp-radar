---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.301Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner PostgreSQL interface"
feature_slug: "spanner-postgresql-interface"
latest_feature_date: "2022-06-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql"
  - "https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "core"
  - "compatibility"
  - "interface"
  - "postgresql"
  - "dialect"
  - "adds"
---

# Spanner PostgreSQL interface

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

The Spanner PostgreSQL interface adds PostgreSQL compatibility to Spanner with support for a core PostgreSQL SQL dialect, psql, native language clients, and Google tooling integration; Spanner adds a PostgreSQL-compatible interface in preview with support for a subset of PostgreSQL SQL features and connectivity through updated drivers and PGAdapter.

## Extended Definition

The Spanner PostgreSQL interface adds PostgreSQL compatibility to Spanner with support for a core PostgreSQL SQL dialect, psql, native language clients, and Google tooling integration; Spanner adds a PostgreSQL-compatible interface in preview with support for a subset of PostgreSQL SQL features and connectivity through updated drivers and PGAdapter.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- [https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres](https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### "Commit timestamps in PostgreSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql](https://docs.cloud.google.com/spanner/docs/commit-timestamp-postgresql)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Commit timestamps in PostgreSQL-dialect databases Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to write a commit timestamp for each insert and update operation that you perform with Spanner in PostgreSQL-dialect databases.
- InsertOrUpdate ( "Performances" , performanceColumns , [] interface {}{ 1 , 19 , "2017-11-02" , 15000 , spanner .
- InsertOrUpdate ( "Performances" , performanceColumns , [] interface {}{ 1 , 4 , "2017-10-05" , 11000 , spanner .

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .
- The default is public for PostgreSQL-dialect databases. table name character varying The name of the table or view that contains the column. column name character varying The name of the column. privilege type character varying The type of the privilege ( SELECT , INSERT , or UPDATE ). is grantable character varying Not used.
- The default is public for PostgreSQL-dialect databases. table name character varying The name of the table or view that contains the column. column name character varying The name of the column. privilege type character varying The type of the privilege ( SELECT , INSERT , or UPDATE ). is grantable character varying Not used.

### "Choosing the Right Dialect for Your Spanner Database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres](https://docs.cloud.google.com/spanner/docs/choose-googlesql-or-postgres)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner implementation of GoogleSQL and the PostgreSQL interface: Feature parity: Both GoogleSQL and PostgreSQL dialects provide equivalent support for Spanner's unique features, such as interleaved tables and query hints.
- This page lists the deciding factors between using GoogleSQL and PostgreSQL interface dialect databases.
- Familiarity: if your team is already familiar with either PostgreSQL or GoogleSQL syntax and tools, choosing that dialect can streamline development and reduce the learning curve.
- When creating a Spanner database, you can choose between two SQL dialects: GoogleSQL and PostgreSQL.


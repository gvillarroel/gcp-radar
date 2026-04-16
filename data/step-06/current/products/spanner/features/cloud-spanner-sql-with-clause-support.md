---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.340Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner SQL WITH clause support"
feature_slug: "cloud-spanner-sql-with-clause-support"
latest_feature_date: "2019-11-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/iso-standards"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "language"
  - "allowing"
  - "clause"
  - "supports"
  - "query"
---

# Cloud Spanner SQL WITH clause support

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner SQL query language now supports the WITH clause, allowing subquery results to be bound to temporary tables for cleaner and faster complex queries.

## Extended Definition

Cloud Spanner SQL query language now supports the WITH clause, allowing subquery results to be bound to temporary tables for cleaner and faster complex queries.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- Create a schema for your database Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.
- INSERT INTO Singers ( SingerId , FirstName , LastName , SingerInfo , BirthDate ) VALUES ( < SingerId > , -- type: INT64 < FirstName > , -- type: STRING(1024) < LastName > , -- type: STRING(1024) < SingerInfo > , -- type: BYTES(MAX) < BirthDate > -- type: DATE ) THEN RETURN SingerId , FirstName , LastName , SingerInfo , BirthDate ; PostgreSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- INSERT INTO Singers ( SingerId , BirthDate , FirstName , LastName , SingerInfo ) VALUES ( 1 , -- type: INT64 NULL , -- type: DATE 'Marc' , -- type: STRING(1024) 'Richards' , -- type: STRING(1024) NULL -- type: BYTES(MAX) ) THEN RETURN SingerId , FirstName , LastName , SingerInfo , BirthDate ; PostgreSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.

### Spanner Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The page describes how Spanner Graph supports the ISO international standard query language for graph databases.
- Spanner Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how Spanner Graph supports these standards.
- Standard SQL/PGQ GQL Spanner Graph Query Graph pattern matching capabilities Shares the core Graph Pattern Matching Language (GPML) functionalities with GQL.
- Query Other query language features (for example, LIMIT , ORDER , aggregation) SQL-based.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- The default value is public . table name character varying The name of the view. view definition character varying The SQL text of the query that defines the view. check option character varying Not used. is updatable character varying Not used. is insertable into character varying Not used. is trigger updatable character varying Not used. is trigger deletable character varying Not used. is trigger insertable into character varying Not used. security type character varying The security type of the view.
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Usage information schema tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Query page of a database in the Google Cloud console.
- The value of this column is parsable as part of a query. option type character varying A data type name that is the type of this option value. column privileges This row-filtered view lists all fine-grained access control privileges granted on all columns to any database role, including public .
- This is the value of key in the OPTIONS clause in DDL. option type character varying The data type of the database option. option value character varying The value of the database option. enabled roles This row-filtered view lists the defined database roles.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.330Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner CHECK constraints"
feature_slug: "spanner-check-constraints"
latest_feature_date: "2020-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/check-constraint/how-to"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "check"
  - "constraints"
  - "allowing"
  - "generally"
  - "available"
  - "table"
  - "added"
---

# Spanner CHECK constraints

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added generally available CHECK constraints, allowing table rows to be validated against a boolean expression.

## Extended Definition

Spanner added generally available CHECK constraints, allowing table rows to be validated against a boolean expression.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/check-constraint/how-to](https://docs.cloud.google.com/spanner/docs/check-constraint/how-to)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### Create and manage check constraints \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/check-constraint/how-to](https://docs.cloud.google.com/spanner/docs/check-constraint/how-to)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you have added a check constraint to an existing table, you might want to view its current state to determine, for example, whether all existing data has been validated against the constraint.
- GoogleSQL CREATE TABLE Concerts ( ConcertId INT64 , StartTime Timestamp , EndTime Timestamp , CONSTRAINT start before end CHECK ( StartTime < EndTime ), ) PRIMARY KEY ( ConcertId ); PostgreSQL CREATE TABLE Concerts ( ConcertId BIGINT , StartTime TIMESTAMPTZ , EndTime TIMESTAMPTZ , CONSTRAINT start before end CHECK ( StartTime < EndTime ), PRIMARY KEY ( ConcertId ) ); The constraint definition begins with the CONSTRAINT keyword.
- Adding a CHECK constraint to an existing table starts the enforcement of the constraint immediately for new data and starts a long-running operation to validate that existing data conforms to the new constraint.
- Home Documentation Databases Spanner Guides Send feedback Create and manage check constraints Stay organized with collections Save and categorize content based on your preferences.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Examples Return information about each table in the user's schema: SELECT t . table schema , t . table catalog , t . table name , t . parent table name FROM information schema . tables AS t WHERE t . table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND t . table type = 'BASE TABLE' ORDER BY t . table catalog , t . table schema , t . table name Return the name of all tables and views in the information schema for PostgreSQL-dialect databases: SELECT table name FROM information schema . tables WHERE table schema = "information schema" Return information about columns in the user table my table in the default schema: SELECT t . ordinal position , t . column name , t . data type , t . spanner type , t . is nullable FROM information schema . columns AS t WHERE t . table schema = 'public' AND t . table name = 'my table' ORDER BY t . ordinal position Return information about each index in the default schema in the current database: ## What's next {: #whats-next} + Learn about available Introspection tools to help you investigate database issues.
- The default value is public . table name character varying The name of the view. view definition character varying The SQL text of the query that defines the view. check option character varying Not used. is updatable character varying Not used. is insertable into character varying Not used. is trigger updatable character varying Not used. is trigger deletable character varying Not used. is trigger insertable into character varying Not used. security type character varying The security type of the view.
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Usage information schema tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Query page of a database in the Google Cloud console.
- Possible values and the states they represent are: NULL : the index type is PRIMARY KEY PREPARE : creating empty tables for a new index WRITE ONLY : backfilling data for a new index WRITE ONLY CLEANUP : cleaning up a new index WRITE ONLY VALIDATE UNIQUE : checking uniqueness of data in a new index READ WRITE : normal index operation spanner is managed character varying Whether the index is managed by Spanner.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- CHECK CONSTRAINTS The information schema.CHECK CONSTRAINTS table contains one row about each CHECK constraint defined by either the CHECK or the NOT NULL keyword.
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .
- KEY COLUMN USAGE This row-filtered table contains one row about each column of the tables from TABLE CONSTRAINTS that are constrained as keys by a PRIMARY KEY , FOREIGN KEY or UNIQUE constraint.


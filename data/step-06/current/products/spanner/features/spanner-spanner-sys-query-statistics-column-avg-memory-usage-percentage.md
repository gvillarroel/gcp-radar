---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.228Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner SPANNER_SYS query statistics column AVG_MEMORY_USAGE_PERCENTAGE"
feature_slug: "spanner-spanner-sys-query-statistics-column-avg-memory-usage-percentage"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-unary"
keywords:
  - "memory"
  - "statistics"
  - "column"
  - "usage"
  - "query"
---

# Spanner SPANNER_SYS query statistics column AVG_MEMORY_USAGE_PERCENTAGE

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added support for the AVG_MEMORY_USAGE_PERCENTAGE column in the SPANNER_SYS query statistics table.

## Extended Definition

Spanner added support for the AVG_MEMORY_USAGE_PERCENTAGE column in the SPANNER_SYS query statistics table.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)

## Supporting Pages

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .
- KEY COLUMN USAGE This row-filtered table contains one row about each column of the tables from TABLE CONSTRAINTS that are constrained as keys by a PRIMARY KEY , FOREIGN KEY or UNIQUE constraint.
- IS HIDDEN STRING A string that is set to TRUE if the column doesn't appear in a SELECT query, and is set to FALSE otherwise.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Column name Type Description table catalog character varying The database name. table schema character varying The name of the schema that contains the table that contains the column that is used by the constraint. table name character varying The name of the table that contains the column that is used by the constraint. column name character varying The name of the column that is used by the constraint. constraint catalog character varying The database name. constraint schema character varying The name of the constraint's schema. constraint name character varying The name of the constraint. constraint table usage This view contains one row for each table used by a constraint.
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'pg catalog' , 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Usage information schema tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Query page of a database in the Google Cloud console.
- The value of this column is parsable as part of a query. option type character varying A data type name that is the type of this option value. column privileges This row-filtered view lists all fine-grained access control privileges granted on all columns to any database role, including public .
- Column name Type Description catalog name character varying The database name. key column usage This view identifies all columns in the current database that are referenced by a unique, primary key, or foreign key constraint.

### Unary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-unary](https://docs.cloud.google.com/spanner/docs/query-operators-unary)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- The following query demonstrates this operator: SELECT genre , songname FROM ml . predict ( model genreclassifier , TABLE songs ) / -----------------------+--------------------------+ Genre SongName +-----------------------+--------------------------+ Country Not About The Guitar Rock The Second Time Pop Starting Again Pop Nothing Is The Same Country Let's Get Back Together Pop I Knew You Were Magic Electronic Blue Rock 42 Rock Fight Story +-----------------------+-------------------------- / Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.
- The following query demonstrates this operator: DELETE FROM singers WHERE firstname = 'Alice' ; / 4 rows deleted This statement deleted 4 rows and did not return any rows. / The execution plan appears as follows: Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.
- Stream-based aggregates are faster and use less memory than hash-based aggregates, but require the input to be sorted (either by key columns or secondary indexes ).
- The following query demonstrates this operator: SELECT array ( select as struct so . songname , so . songgenre FROM songs AS so WHERE so . singerid = s . singerid ) FROM singers AS s ; / ------------------------------------------------------------------+ Unspecified +------------------------------------------------------------------+ [] [[Let's Get Back Together, COUNTRY], [Starting Again, ROCK]] [["Not About The Guitar", "BLUES"]] [] [] +------------------------------------------------------------------ / The execution plan appears as follows: The serialize result operator creates a result that contains, for each row of the Singers table, an array of SongName and SongGenre pairs for the songs by the singer.


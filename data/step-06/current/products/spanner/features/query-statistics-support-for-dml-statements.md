---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.311Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Query statistics support for DML statements"
feature_slug: "query-statistics-support-for-dml-statements"
latest_feature_date: "2022-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
keywords:
  - "extends"
  - "cover"
  - "statements"
  - "statistics"
  - "including"
  - "query"
---

# Query statistics support for DML statements

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner extends query statistics to cover DML statements, including INSERT, UPDATE, and DELETE operations.

## Extended Definition

Spanner extends query statistics to cover DML statements, including INSERT, UPDATE, and DELETE operations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)

## Supporting Pages

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- SPANNER STATISTICS This table lists the available query optimizer statistics packages.
- Returns empty if the default leader is not set: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . option name = 'default leader' Return information about each index in the user's schema: SELECT t . table schema , t . table name , t . index name , t . parent table name FROM information schema . indexes AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND t . index type != 'PRIMARY KEY' ORDER BY t . table catalog , t . table schema , t . table name , t . index name Returns all the columns that use options other than the default: SELECT t . table schema , t . table name , t . column name , t . option type , t . option value , t . option name FROM information schema . column options AS t WHERE t . table catalog = '' AND t . table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) Returns the current optimizer related database options: SELECT s . option name , s . option value FROM information schema . database options s WHERE s . schema name = '' AND s . option name IN ( 'optimizer version' , 'optimizer statistics package' ) Returns all available statistics packages: SELECT FROM information schema . spanner statistics ; Return all sequences: SELECT FROM information schema . sequences ; Return all sequence options for the sequence named "MySequence" SELECT FROM information schema . sequence options WHERE name = "MySequence" ; Return the names of all property graphs and their definitions: SELECT property graph name , property graph metadata json FROM information schema . property graphs Return the names of all property graphs together with their labels and properties: SELECT property graph name , property graph metadata json . labels , property graph metadata json . propertyDeclarations FROM information schema . property graphs What's next Learn about available Introspection tools to help you investigate database issues.
- For example, the following query fetches the names of all user-defined tables in a database: SELECT table schema , table name FROM information schema . tables WHERE table schema NOT IN ( 'information schema' , 'SPANNER SYS' ) AND table type = 'BASE TABLE' Fine-grained access control users see filtered results for some INFORMATION SCHEMA tables depending on their database role.
- Usage INFORMATION SCHEMA tables are available only through SQL interfaces, for example: The executeQuery API The gcloud spanner databases execute-sql command The Spanner Studio page of a database in the Google Cloud console) Other single read methods don't support INFORMATION SCHEMA .

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- SHOW VARIABLE OPTIMIZER STATISTICS PACKAGE SET OPTIMIZER STATISTICS PACKAGE = { 'package' '' } Sets the optimizer statistics package to use for all following statements on the connection. <package> must be a valid package name.
- SET OPTIMIZER STATISTICS PACKAGE = 'auto 20240124 06 47 29UTC' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the default optimizer statistics package.
- ROLLBACK ; Data Boost and partitioned query statements The partitionQuery API divides a query into smaller pieces, or partitions, and uses multiple machines to fetch the partitions in parallel.
- SPANNER STATISTICS ; -- Set the optimizer statistics package and execute a query.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- OPTIMIZER STATISTICS PACKAGE = 'auto 20240124 06 47 29UTC' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the default optimizer statistics package.
- ROLLBACK ; Data Boost and partitioned query statements The partitionQuery API divides a query into smaller pieces, or partitions, and uses multiple machines to fetch the partitions in parallel.
- OPTIMIZER STATISTICS PACKAGE { TO = } { 'package' '' } Sets the optimizer statistics package to use for all following statements on the connection. <package> must be a valid package name.
- SPANNER STATISTICS ; -- Set the optimizer statistics package and execute a query.


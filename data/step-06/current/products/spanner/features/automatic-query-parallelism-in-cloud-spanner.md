---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.276Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Automatic query parallelism in Cloud Spanner"
feature_slug: "automatic-query-parallelism-in-cloud-spanner"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
keywords:
  - "increase"
  - "degree"
  - "parallelism"
  - "automatically"
  - "automatic"
  - "query"
---

# Automatic query parallelism in Cloud Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner can automatically increase the degree of parallelism used to execute a query when the instance size permits it.

## Extended Definition

Cloud Spanner can automatically increase the degree of parallelism used to execute a query when the instance size permits it.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)

## Supporting Pages

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- This value is used for: AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql SHOW VARIABLE MAX PARTITIONED PARALLELISM SET MAX PARTITIONED PARALLELISM = < INT64 > Sets the maximum number of worker threads that the Spanner JDBC driver can use to execute partitions.
- BEGIN ; INSERT INTO T ( id , col a , col b ) VALUES ( 4 , 400 , 4 ); INSERT INTO T ( id , col a , col b ) VALUES ( 5 , 500 , 5 ); COMMIT ; RETRY ABORTS INTERNALLY A boolean indicating whether the connection automatically retries aborted transactions.
- INSERT INTO T ( id , col a , col b ) VALUES ( 1 , 100 , 1 ); -- Turning off autocommit means that a new transaction is automatically started -- when the next statement is executed.
- AUTO PARTITION MODE A property of type BOOL indicating whether the connection automatically uses partitioned queries for all queries that are executed.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- BEGIN ; INSERT INTO T ( id , col a , col b ) VALUES ( 4 , 400 , 4 ); INSERT INTO T ( id , col a , col b ) VALUES ( 5 , 500 , 5 ); COMMIT ; SPANNER.RETRY ABORTS INTERNALLY A boolean indicating whether the connection automatically retries aborted transactions.
- INSERT INTO T ( id , col a , col b ) VALUES ( 1 , 100 , 1 ); -- Turning off autocommit means that a new transaction is automatically started -- when the next statement is executed.
- SPANNER.AUTO PARTITION MODE A property of type BOOL indicating whether the connection automatically uses partitioned queries for all queries that are executed.
- SHOW AUTOCOMMIT ; -- This insert statement is automatically committed after it is executed, as -- the connection is in autocommit mode.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- The instance ID is automatically entered based on the instance name, for example, as test-instance .
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- Home Documentation Databases Spanner Guides Send feedback Create and query a database in the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.
- The Singers table now has two rows: GoogleSQL PostgreSQL Run a query in the Google Cloud console On the database Overview page, click Spanner Studio in the navigation menu.


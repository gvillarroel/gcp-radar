---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.341Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner JDBC driver"
feature_slug: "spanner-jdbc-driver"
latest_feature_date: "2019-08-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/open-source-jdbc"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-drivers"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
keywords:
  - "jdbc"
  - "driver"
  - "open"
  - "source"
  - "introduced"
  - "enables"
  - "java"
---

# Spanner JDBC driver

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner introduced an open-source JDBC driver that enables Java applications to access Spanner via the JDBC API.

## Extended Definition

Spanner introduced an open-source JDBC driver that enables Java applications to access Spanner via the JDBC API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/open-source-jdbc](https://docs.cloud.google.com/spanner/docs/open-source-jdbc)
- [https://docs.cloud.google.com/spanner/docs/jdbc-drivers](https://docs.cloud.google.com/spanner/docs/jdbc-drivers)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)

## Supporting Pages

### Spanner JDBC driver \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/open-source-jdbc](https://docs.cloud.google.com/spanner/docs/open-source-jdbc)
- Source ID: `site-docs-reference`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The open-source driver enables applications to access Spanner through the Java Database Connectivity (JDBC) API.
- Google offers an open-source JDBC driver for Spanner.
- Connection pools The Spanner JDBC driver handles pooling internally by keeping track of all connections that have been opened, as well as the connection properties that were used to open those connections.
- The open-source driver can also create and modify indexes as DDL statements.

### JDBC drivers \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-drivers](https://docs.cloud.google.com/spanner/docs/jdbc-drivers)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Spanner JDBC driver PostgreSQL JDBC driver Download Maven Central Maven Central Written by Google PostgreSQL Support Google Google Open source Yes; Apache license Yes; BSD 2-Clause Note: Spanner previously supported the Simba JDBC driver.
- Spanner supports the following JDBC drivers: The Spanner JDBC driver, which is an open-source JDBC driver that is written, provided, and supported by Google, similar to the Cloud Client Libraries .
- Home Documentation Databases Spanner Reference Send feedback JDBC drivers Stay organized with collections Save and categorize content based on your preferences.
- This page describes the JDBC drivers that Spanner supports for GoogleSQL-dialect databases and PostgreSQL-dialect databases.

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: Savepoint support (Click to expand) The following example shows how to enable and disable savepoints support in the Spanner JDBC driver. try ( Connection connection = DriverManager . getConnection ( String . format ( "jdbc:cloudspanner:/projects/%s/instances/%s/databases/%s" , "my-project" , "my-instance" , "my-database" ))) { // Savepoints can only be used when AutoCommit=false. connection . setAutoCommit ( false ); // Disables setting a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='DISABLED'" ); // The following statement fails because savepoints have been disabled. connection . setSavepoint ( "my savepoint1" ); // Enables setting a savepoint and releasing a savepoint. // Rolling back to a savepoint is disabled. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='FAIL AFTER ROLLBACK'" ); Savepoint mySavepoint2 = connection . setSavepoint ( "my savepoint2" ); connection . createStatement (). execute ( "insert into my table (id, value) values (1, 'One')" ); connection . releaseSavepoint ( mySavepoint2 ); connection . commit (); // Enables setting, releasing and rolling back to a savepoint. connection . createStatement (). execute ( "SET SAVEPOINT SUPPORT='ENABLED'" ); Savepoint mySavepoint3 = connection . setSavepoint ( "my savepoint3" ); connection . createStatement (). execute ( "insert into my table (id, value) values (2, 'Two')" ); connection . rollback ( mySavepoint3 ); } What's next Learn how to connect JDBC to a GoogleSQL-dialect database .
- A statement timeout during a transaction invalidates the transaction, all subsequent statements in the invalidated transaction (except ROLLBACK ) fail, and the Spanner JDBC driver throws a java.sql.SQLTimeoutException .
- The Spanner JDBC driver (Java Database Connectivity) supports session management statements, which let you modify the state of your connection, execute transactions, and efficiently execute batches of statements.
- Example: BEGIN TRANSACTION (Click to expand) The following example shows how to start different types of transactions with the Spanner JDBC driver. -- This starts a transaction using the current defaults of this connection. -- The value of READONLY determines whether the transaction is a -- read-write or a read-only transaction.


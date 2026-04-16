---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.256Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Automatic cleanup of long-running transactions"
feature_slug: "automatic-cleanup-of-long-running-transactions"
latest_feature_date: "2023-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
keywords:
  - "cleanup"
  - "transactions"
  - "automatic"
  - "long"
  - "running"
  - "supports"
---

# Automatic cleanup of long-running transactions

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports automatic cleanup of long-running transactions in Java and Go clients to prevent session leaks and emit warning logs for problematic transactions.

## Extended Definition

Spanner now supports automatic cleanup of long-running transactions in Java and Go clients to prevent session leaks and emit warning logs for problematic transactions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- If you are planning to repopulate a table with the same kind of data (for example, when running consecutive performance tests), you can instead run a DELETE query on the rows containing data you no longer need.
- In the following example, there is a table for long-term player high-score records: CREATE TABLE Ranking ( PlayerID STRING ( 36 ) NOT NULL , GameMode INT64 NOT NULL , Score INT64 NOT NULL ) PRIMARY KEY ( PlayerID , GameMode ) This table contains the player ID (UUIDv4), a number representing a game mode, stage, or season, and the player's score.
- This document is intended for game backend engineers working on long-term state storage, and game infrastructure operators and admins who support those systems and are interested in hosting their backend database on Google Cloud.
- Even when using Spanner to hold all of your game data worldwide, it offers read-write transactions with even stronger than conventional atomicity, consistency, isolation, and durability (ACID) properties.

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- BEGIN ; INSERT INTO T ( id , col a , col b ) VALUES ( 4 , 400 , 4 ); INSERT INTO T ( id , col a , col b ) VALUES ( 5 , 500 , 5 ); COMMIT ; RETRY ABORTS INTERNALLY A boolean indicating whether the connection automatically retries aborted transactions.
- The Spanner JDBC driver (Java Database Connectivity) supports session management statements, which let you modify the state of your connection, execute transactions, and efficiently execute batches of statements.
- SHOW VARIABLE READ ONLY STALENESS SET READ ONLY STALENESS = staleness type staleness type : { 'STRONG' 'MIN READ TIMESTAMP timestamp ' 'READ TIMESTAMP timestamp ' 'MAX STALENESS <INT64>{ s ms us ns }' 'EXACT STALENESS <INT64>{ s ms us ns }' } The read-only staleness value applies to all subsequent read-only transactions and for all queries in AUTOCOMMIT mode.
- Example: BEGIN TRANSACTION (Click to expand) The following example shows how to start different types of transactions with the Spanner JDBC driver. -- This starts a transaction using the current defaults of this connection. -- The value of READONLY determines whether the transaction is a -- read-write or a read-only transaction.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- BEGIN ; INSERT INTO T ( id , col a , col b ) VALUES ( 4 , 400 , 4 ); INSERT INTO T ( id , col a , col b ) VALUES ( 5 , 500 , 5 ); COMMIT ; SPANNER.RETRY ABORTS INTERNALLY A boolean indicating whether the connection automatically retries aborted transactions.
- The Spanner JDBC driver (Java Database Connectivity) supports session management statements, which let you modify the state of your connection, execute transactions, and efficiently execute batches of statements.
- SHOW [VARIABLE] SPANNER.READ ONLY STALENESS SET SPANNER.READ ONLY STALENESS {TO =} staleness type staleness type : { 'STRONG' 'MIN READ TIMESTAMP timestamp ' 'READ TIMESTAMP timestamp ' 'MAX STALENESS <int8>{ s ms us ns }' 'EXACT STALENESS <int8>{ s ms us ns }' } The read-only staleness value applies to all subsequent read-only transactions and for all queries in AUTOCOMMIT mode.
- Example: BEGIN TRANSACTION (Click to expand) The following example shows how to start different types of transactions with the Spanner JDBC driver. -- This starts a transaction using the current defaults of this connection. -- The value of READONLY determines whether the transaction is a -- read-write or a read-only transaction.


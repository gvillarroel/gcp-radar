---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.290Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "ALTER INDEX column management"
feature_slug: "alter-index-column-management"
latest_feature_date: "2022-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/commit-timestamp"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
keywords:
  - "alter"
  - "management"
  - "statement"
  - "column"
  - "index"
  - "supports"
---

# ALTER INDEX column management

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner ALTER INDEX statement now supports adding columns to an index and dropping non-key columns.

## Extended Definition

Spanner ALTER INDEX statement now supports adding columns to an index and dropping non-key columns.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)

## Supporting Pages

### "Commit timestamps in GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/commit-timestamp](https://docs.cloud.google.com/spanner/docs/commit-timestamp)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- You can add the column by running the add timestamp column sample or by running this DDL statement against your database: ALTER TABLE Albums ADD COLUMN LastUpdateTime TIMESTAMP OPTIONS (allow commit timestamp=true) Example: @param string $instanceId The Spanner instance ID. @param string $databaseId The Spanner database ID. / function query data with timestamp column(string $instanceId, string $databaseId): void { $spanner = new SpannerClient(); $instance = $spanner->instance($instanceId); $database = $instance->database($databaseId); $results = $database->execute( 'SELECT SingerId, AlbumId, MarketingBudget, LastUpdateTime ' . ' FROM Albums ORDER BY LastUpdateTime DESC' ); foreach ($results as $row) { if ($row['MarketingBudget'] == null) { $row['MarketingBudget'] = 'NULL'; } if ($row['LastUpdateTime'] == null) { $row['LastUpdateTime'] = 'NULL'; } printf('SingerId: %s, AlbumId: %s, MarketingBudget: %s, LastUpdateTime: %s' .
- For example to add a LastUpdateTime column to the Performances table, use the following statement: ALTER TABLE Performances ADD COLUMN LastUpdateTime TIMESTAMP NOT NULL OPTIONS ( allow commit timestamp = true ) Convert a timestamp column to a commit timestamp column You can convert an existing timestamp column into a commit timestamp column, but doing so requires Spanner to validate that the existing timestamp values are in the past.
- When altering an existing table : to add a new column supporting commit timestamps, to alter an existing TIMESTAMP column to support commit timestamps, to alter an existing TIMESTAMP column to remove commit timestamp support Keys and indexes You can use a commit timestamp column as a primary key column or as a non-key column.
- For example: ALTER TABLE Performances ALTER COLUMN LastUpdateTime SET OPTIONS ( allow commit timestamp = null ) Write a commit timestamp using a DML statement You use the PENDING COMMIT TIMESTAMP function to write the commit timestamp in a DML statement.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- The Spanner JDBC driver (Java Database Connectivity) supports session management statements, which let you modify the state of your connection, execute transactions, and efficiently execute batches of statements.
- The JDBC driver supports three alternatives for executing partitioned queries: SET SPANNER.AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- Session management statements don't work in the client libraries, the Google Cloud CLI, or the JDBC driver created by Simba.
- Note: You can use session management statements only with the Spanner JDBC driver.

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- The Spanner JDBC driver (Java Database Connectivity) supports session management statements, which let you modify the state of your connection, execute transactions, and efficiently execute batches of statements.
- The Spanner JDBC driver supports three alternatives for executing partitioned queries: SET AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- Session management statements don't work in the client libraries, the Google Cloud CLI, or the JDBC driver created by Simba.
- Note: You can use session management statements only with the Spanner JDBC driver.


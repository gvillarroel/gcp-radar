---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.299Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "ANALYZE DDL command"
feature_slug: "analyze-ddl-command"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
keywords:
  - "administrators"
  - "manually"
  - "analyze"
  - "command"
  - "introduces"
---

# ANALYZE DDL command

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Introduces the ANALYZE DDL command so administrators can manually refresh the optimizer's query statistics package for faster adaptation to frequent changes in data, queries, or indexes.

## Extended Definition

Introduces the ANALYZE DDL command so administrators can manually refresh the optimizer's query statistics package for faster adaptation to frequent changes in data, queries, or indexes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions](https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)

## Supporting Pages

### List query optimizer versions \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions](https://docs.cloud.google.com/spanner/docs/query-optimizer/query-optimizer-versions)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Spanner Reference Send feedback JDBC session management commands (GoogleSQL) Stay organized with collections Save and categorize content based on your preferences.
- RUN PARTITION 'partition-token' RUN PARTITION 'partition-token' Executes a query partition that has previously been returned by the PARTITION command.
- Each partition token can be executed on a separate connection on the same or another client using the RUN PARTITION 'partition-token' command.
- The command can be executed on any connection that is connected to the same database as the database that created the partition tokens.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Spanner Reference Send feedback JDBC session management commands (PostgreSQL) Stay organized with collections Save and categorize content based on your preferences.
- BEGIN ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; COMMIT ; -- Add 'READ WRITE' or 'READ ONLY' to the 'BEGIN' command to -- override the current default of the connection.
- RUN PARTITION 'partition-token' RUN PARTITION 'partition-token' Executes a query partition that has previously been returned by the PARTITION command.
- Each partition token can be executed on a separate JDBC connection on the same or another host using the RUN PARTITION 'partition-token' command.


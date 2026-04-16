---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.333Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Query Introspection Tool"
feature_slug: "spanner-query-introspection-tool"
latest_feature_date: "2020-09-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
keywords:
  - "introspection"
  - "oldest"
  - "shows"
  - "active"
  - "tool"
  - "query"
  - "added"
---

# Spanner Query Introspection Tool

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner added an introspection tool that shows oldest active queries to help analyze running query performance impact.

## Extended Definition

Spanner added an introspection tool that shows oldest active queries to help analyze running query performance impact.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)

## Supporting Pages

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Custom thresholds The Autoscaler tool determines the number of nodes or processing units to be added or subtracted to an instance using the recommended Spanner thresholds for the following load metrics: High priority CPU 24-hour rolling average CPU Storage utilization We recommend that you use the default thresholds as described in Creating alerts for Spanner metrics .
- So, when the Autoscaler tool adds or removes nodes or processing units, it needs to allow the Spanner backend sufficient time to reassign and reorganize the splits as new capacity is added or removed from instances.
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .
- Custom metrics While the default metrics in the Autoscaler tool address most performance and scaling scenarios, there are some instances when you might need to specify your own metrics used for determining when to scale in and out.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- This quickstart shows you how to use the Google Cloud console to create a database in Spanner, insert data, and run a SQL query.
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- Home Documentation Databases Spanner Guides Send feedback Create and query a database in the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.
- When finished, the Results tab shows that the statement inserted one row: GoogleSQL PostgreSQL In the Explorer, click more vert View actions next to the Singers table, and then click Insert data .

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- SHOW VARIABLE DATA BOOST ENABLED SET DATA BOOST ENABLED = { true false } Example: Execute a query using Data Boost (Click to expand) The following example shows how to a query using Data Boost with the Spanner JDBC driver. -- Enable Data Boost on this connection.
- Example: Read timestamp (Click to expand) The following example shows how to view the last read timestamp for a read-only operation with the Spanner JDBC driver. -- Execute a query in autocommit mode using the default read-only staleness -- (strong).
- This statement returns a timestamp only when either a read-only transaction is still active and has executed at least one query, or immediately after a read-only transaction is committed and before a new transaction starts.
- Example: Optimizer version (Click to expand) The following example shows how to execute queries using a specific optimizer version with the Spanner JDBC driver. -- Set the optimizer version to 5 and execute a query.


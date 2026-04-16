---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.203Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner partitioned DML query statistics"
feature_slug: "spanner-partitioned-dml-query-statistics"
latest_feature_date: "2025-01-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-binary"
keywords:
  - "previously"
  - "executed"
  - "partitioned"
  - "statistics"
  - "provides"
  - "query"
---

# Spanner partitioned DML query statistics

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Provides query statistics for previously executed partitioned DML statements in Spanner.

## Extended Definition

Provides query statistics for previously executed partitioned DML statements in Spanner.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)

## Supporting Pages

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- SHOW VARIABLE AUTO PARTITION MODE SET AUTO PARTITION MODE = { true false } Set this variable to true if you want the connection to use partitioned query for all queries that are executed.
- The Spanner JDBC driver supports three alternatives for executing partitioned queries: SET AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- Ensure that DATA BOOST ENABLED is set to true to execute the query with Data Boost : SET DATA BOOST ENABLED = true RUN PARTITIONED QUERY SELECT FirstName , LastName FROM Singers The Spanner JDBC driver internally partitions the query and executes partitions in parallel.
- This value is used for: AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql SHOW VARIABLE MAX PARTITIONED PARALLELISM SET MAX PARTITIONED PARALLELISM = < INT64 > Sets the maximum number of worker threads that the Spanner JDBC driver can use to execute partitions.

### "JDBC session management commands (PostgreSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands-pgcompat)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- AUTO PARTITION MODE { TO = } { true false } Set this variable to true if you want the connection to use partitioned query for all queries that are executed.
- The JDBC driver supports three alternatives for executing partitioned queries: SET SPANNER.AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- This statement returns a timestamp only when either a read-only transaction is still active and has executed at least one query, or immediately after a read-only transaction is committed and before a new transaction starts.
- OPTIMIZER STATISTICS PACKAGE = 'auto 20240124 06 47 29UTC' ; SELECT FirstName , LastName FROM Singers ORDER BY LastName ; -- Execute the same query with the default optimizer statistics package.

### Binary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.
- Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.
- Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.
- Properties and execution statistics A property of an operator describes a trait that is used when the operator is executed.


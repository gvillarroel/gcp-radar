---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.314Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "CSV export spannerSnapshotTime option"
feature_slug: "csv-export-spannersnapshottime-option"
latest_feature_date: "2021-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner"
  - "https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
keywords:
  - "spannersnapshottime"
  - "existed"
  - "specific"
  - "option"
  - "export"
  - "supports"
---

# CSV export spannerSnapshotTime option

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

CSV export now supports the spannerSnapshotTime option to export data as it existed at a specific past point in time.

## Extended Definition

CSV export now supports the spannerSnapshotTime option to export data as it existed at a specific past point in time.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)

## Supporting Pages

### "Package com.google.cloud.spanner (6.111.1) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner)
- Source ID: `site-java-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Commit Stats Commit statistics are returned by a read/write transaction if specifically requested by passing in Options#commitStats() to the transaction. com. google. cloud. spanner.
- Partition Options Defines the configuration for the number and size of partitions returned from BatchReadOnlyTransaction#partitionRead , BatchReadOnlyTransaction#partitionReadUsingIndex and BatchReadOnlyTransaction#partitionQuery Note: these options may not be honored based on the other parameters in the request. com. google. cloud. spanner.
- Internally, Spanner supports Interval value with the following range of individual fields: months: [-120000, 120000] days: [-3660000, 3660000] nanoseconds: [-316224000000000000000, com. google. cloud. spanner.
- Batch Read Only Transaction BatchReadOnlyTransaction can be configured to read at timestamps in the past and allows for exporting arbitrarily large amounts of data from Cloud Spanner databases.

### "JDBC session management commands (GoogleSQL) \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands](https://docs.cloud.google.com/spanner/docs/jdbc-session-mgmt-commands)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- The Spanner JDBC driver supports three alternatives for executing partitioned queries: SET AUTO PARTITION MODE = true RUN PARTITIONED QUERY sql PARTITION sql followed by multiple RUN PARTITION 'partition-token' Each of these methods are described in the following sections.
- Example: Optimizer statistics package (Click to expand) The following example shows how to execute queries using a specific optimizer statistics package with the Spanner JDBC driver. -- Show the available optimizer statistics packages in this database.
- Example: Optimizer version (Click to expand) The following example shows how to execute queries using a specific optimizer version with the Spanner JDBC driver. -- Set the optimizer version to 5 and execute a query.
- The Spanner JDBC driver (Java Database Connectivity) supports session management statements, which let you modify the state of your connection, execute transactions, and efficiently execute batches of statements.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- The default value is public . constraint name character varying The name of the foreign key constraint. unique constraint catalog character varying The database name. unique constraint schema character varying The name of the schema that contains the unique or primary key constraint that the foreign key constraint references. unique constraint name character varying The name of the unique or primary key constraint that the foreign key constraint references. match option character varying The match method used by the foreign key constraint.
- Column name Type Description table catalog character varying The database name. table schema character varying The name of the constrained table's schema. table name character varying The name of the table that is used by some constraint. constraint catalog character varying The database name. constraint schema character varying The name of the schema that contains the constraint. constraint name character varying The name of the constraint. database options This table lists the options that are set on the database.
- The default value is public . table name character varying The name of the view. view definition character varying The SQL text of the query that defines the view. check option character varying Not used. is updatable character varying Not used. is insertable into character varying Not used. is trigger updatable character varying Not used. is trigger deletable character varying Not used. is trigger insertable into character varying Not used. security type character varying The security type of the view.
- For PostgreSQL-dialect databases, the default is public . change stream name character varying The name of the change stream. option name character varying The name of the change stream option. option type character varying The data type of the change stream option. option value character varying The value of the change stream option. change stream privileges This row-filtered view lists all fine-grained access control privileges granted on all change streams to any database role, including public .


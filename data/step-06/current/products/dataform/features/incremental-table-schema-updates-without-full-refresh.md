---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.735Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Incremental table schema updates without full refresh"
feature_slug: "incremental-table-schema-updates-without-full-refresh"
latest_feature_date: "2025-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/create-tables"
  - "https://docs.cloud.google.com/dataform/docs/trigger-execution"
  - "https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference"
  - "https://docs.cloud.google.com/dataform/docs/configure-compilation"
keywords:
  - "incremental"
  - "table"
  - "schema"
  - "updates"
  - "without"
  - "full"
  - "refresh"
  - "this"
---

# Incremental table schema updates without full refresh

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

This feature lets Dataform update an incremental table schema without performing a full table refresh.

## Extended Definition

This feature lets Dataform update an incremental table schema without performing a full table refresh.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/create-tables](https://docs.cloud.google.com/dataform/docs/create-tables)
- [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution)
- [https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference](https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference)
- [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)

## Supporting Pages

### Create tables \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-tables](https://docs.cloud.google.com/dataform/docs/create-tables)
- Source ID: `site-docs-root-2`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Change an incremental table schema without a full refresh Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- You can modify an incremental table schema in the SELECT query without a full refresh of the table by using the onSchemaChange configuration property.
- For other options, see Change an incremental table schema without a full refresh .
- With this configuration, Dataform updates the incremental table based on the most recent partitions of the referenced partitioned table, without scanning the entire table.

### Manually trigger runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/trigger-execution](https://docs.cloud.google.com/dataform/docs/trigger-execution)
- Source ID: `site-docs-root-2`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Without this option, Dataform updates incremental tables without rebuilding them from scratch.
- Without this option, Dataform updates incremental tables without rebuilding them from scratch.
- Optional: To rebuild all tables from scratch, select the Run with full refresh option.
- Optional: To rebuild all tables from scratch, select the Run with full refresh option.

### Dataform core reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference](https://docs.cloud.google.com/dataform/docs/reference/dataform-core-reference)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ITableContext Context methods are available when evaluating contextable SQL code, such as within SQLX files, or when using a Contextable argument with Dataform core. incremental () => boolean Returns true when the current context indicates that the table will be built incrementally. name () => string Returns the fully qualified name of this table. ref (ref: Resolvable string[], rest: string[]) => string References another action, adding it as a dependency to this action, returning valid SQL to be used in a from expression.
- This is useful for tables which are built from transient data, to verify that historical data is never lost. schema string The schema (BigQuery dataset) in which to create the output of this action. tags string[] A list of user-defined tags applied to this action. type TableType The type of the table. uniqueKey string[] Unique keys for merge criteria for incremental tables.
- The setting applies to all partitions in a table, but is calculated independently for each partition based on the partition time. requirePartitionFilter boolean Declares whether the partitioned table requires a WHERE clause predicate filter that filters the partitioning column. updatePartitionFilter string SQL-based filter for when incremental updates are applied. iceberg IIcebergOptions Apache Iceberg-specific options for BigLake Iceberg tables in BigQuery.
- ITarget A reference to a table within BigQuery. database string name string schema string ITargetableConfig Defines the target database and schema of a workflow action. database string The database in which the output of this action should be created.

### Configure compilations \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Without this option, Dataform updates incremental tables without rebuilding them from scratch.
- Optional: To rebuild all tables from scratch, select the Run with full refresh option.
- The following default settings are set in workflow settings.yaml : defaultProject : analytics defaultDataset : dataform The following workspace compilation overrides create a dynamic table prefix and schema suffix for each workspace in the repository: Google Cloud Project ID : analytics dev Table prefix : ${workspaceName} Schema suffix : ${workspaceName} When Sasha manually triggers execution in the Sasha workspace, Dataform runs its content with the following settings: Google Cloud project: analytics dev Schema: dataform sasha Table names: sasha name , for example, sasha orders When Kai manually triggers execution in the Kai workspace, Dataform runs its content with the following settings: Google Cloud project: analytics dev Schema: dataform kai Tables names: kai name , for example, kai orders Create workspace compilation overrides To create Dataform workspace compilation overrides, follow these steps: In your repository, go to Settings .
- You can configure the following workspace compilation overrides: Google Cloud project in which Dataform runs the contents of the workspace Table prefix Schema suffix You can use workspace compilation overrides to create isolated development environments by isolating workspace compilation results in BigQuery with dynamic compilation overrides.


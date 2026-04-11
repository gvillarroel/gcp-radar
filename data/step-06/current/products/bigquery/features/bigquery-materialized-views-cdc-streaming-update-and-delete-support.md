---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.573Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery materialized views CDC streaming update and delete support"
feature_slug: "bigquery-materialized-views-cdc-streaming-update-and-delete-support"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "streaming CDC for materialized views"
  - "streaming deletes"
  - "change data capture"
  - "materialized view refresh"
  - "streaming updates"
  - "CDC tables"
  - "materialized views"
  - "CDC"
---

# BigQuery materialized views CDC streaming update and delete support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery materialized views can now be configured to use tables enabled for CDC with streaming updates and deletes.

## Extended Definition

BigQuery allows materialized views to be configured through table DDL options, and CDC-related table options are documented (including CDC-oriented controls such as `max staleness` for CDC upserts and `enable fine grained mutations` in preview), indicating CDC behavior can be configured on these objects. Official release notes also add that BigQuery CDC supports defining a `CHANGE SEQUENCE NUMBER` to manage streaming UPSERT ordering, while table metadata documentation exposes CDC-specific fields such as the upsert stream apply watermark.

## Evidence Summary

These pages together show CDC-related materialized-view/table configuration and metadata concepts in BigQuery, plus a separate CDC streaming UPSERT sequencing feature, but they do not explicitly and fully state full "streaming updates and deletes" behavior for materialized views in this excerpt set.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Feature You can now define a CHANGE SEQUENCE NUMBER for BigQuery change data capture (CDC) to manage streaming UPSERT ordering for BigQuery.
- November 03, 2025 Libraries Go 1.72.0 (2025-10-28) Features bigquery/reservation: Add new BACKGROUND CHANGE DATA CAPTURE , BACKGROUND COLUMN METADATA INDEX , and BACKGROUND SEARCH INDEX REFRESH reservation assignment types ( 182df61 ) bigquery/reservation: Add new reservation IAM policy get/set/test methods ( 182df61 ) bigquery/reservation: Add support for creation and modification of new reservation groups ( 182df61 ) bigquery: Expose continuous query in config ( #13130 ) ( 2f0942b ) Bug Fixes bigquery/v2: Upgrade gRPC service registration func ( 8fffca2 ) bigquery: Upgrade gRPC service registration func ( 8fffca2 ) October 31, 2025 Feature We have increased the row capacity for pivot tables backed by BigQuery in Connected Sheets from 100,000 to 200,000 rows.
- This pricing update applies to the following third-party connectors when they are generally available (GA) : Facebook Ads MySQL Oracle PostgreSQL Salesforce Salesforce Marketing Cloud ServiceNow Other third-party connectors planned for future releases August 18, 2025 Libraries Java 2.54.1 (2025-08-13) Bug Fixes Adapt graalvm config to arrow update ( #3928 ) ( ecfabc4 ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.51.0 ( #3924 ) ( cb66be5 ) Feature In the BigQuery console, you can now use the Reference panel to do the following: In the query editor, you can use the Reference panel to preview the schema details of tables, snapshots, views, and materialized views, or open these resources in a new tab.
- June 09, 2025 Libraries Java 2.51.0 (2025-06-06) Features bigquery: Job creation mode GA ( #3804 ) ( a21cde8 ) bigquery: Support Fine Grained ACLs for Datasets ( #3803 ) ( bebf1c6 ) Dependencies Rollback netty.version to v4.1.119.Final ( #3827 ) ( 94c71a0 ) Update dependency com.google.api.grpc:proto-google-cloud-bigqueryconnection-v1 to v2.65.0 ( #3787 ) ( 0574ecc ) Update dependency com.google.apis:google-api-services-bigquery to v2-rev20250511-2.0.0 ( #3794 ) ( d3bf724 ) Update dependency com.google.cloud:sdk-platform-java-config to v3.49.0 ( #3811 ) ( 2c5ede4 ) Feature You can reference Iceberg external tables in materialized views instead of migrating that data to BigQuery-managed storage.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- Example The following example deletes the my cloud resource connection connection: DROP CONNECTION IF EXISTS us.my cloud resource connection ; Table path syntax Use the following syntax when specifying the path of a table resource , including standard tables, views, materialized views, external tables, and table snapshots. table path := [[ project name . ] dataset name . ] table name project name : The name of the project that contains the table resource.
- For example, with change data capture , when this option is set, the table copy operation is denied if data is more stale than the max staleness value. max staleness is disabled by default. enable fine grained mutations BOOL In preview .

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- The INFORMATION SCHEMA.TABLE OPTIONS view has the following schema: Column name Data type Value table catalog STRING The project ID of the project that contains the dataset table schema STRING The name of the dataset that contains the table or view also referred to as the datasetId table name STRING The name of the table or view also referred to as the tableId option name STRING One of the name values in the options table option type STRING One of the data type values in the options table option value STRING One of the value options in the options table Options table OPTION NAME OPTION TYPE OPTION VALUE description STRING A description of the table enable refresh BOOL Whether automatic refresh is enabled for a materialized view expiration timestamp TIMESTAMP The time when this table expires friendly name STRING The table's descriptive name kms key name STRING The name of the Cloud KMS key used to encrypt the table labels ARRAY<STRUCT<STRING, STRING>> An array of STRUCT 's that represent the labels on the table max staleness INTERVAL The configured table's maximum staleness for BigQuery change data capture (CDC) upserts partition expiration days FLOAT64 The default lifetime, in days, of all partitions in a partitioned table refresh interval minutes FLOAT64 How frequently a materialized view is refreshed require partition filter BOOL Whether queries over the table require a partition filter tags ARRAY<STRUCT<STRING, STRING>> Tags attached to a table in a namespaced <key, value> syntax.
- Returns NULL if the replica is a primary replica or the dataset doesn't use replication. upsert stream apply watermark TIMESTAMP For tables that use change data capture (CDC), the time when row modifications were last applied.


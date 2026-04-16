---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.504Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Partition deletion optimization for DML"
feature_slug: "partition-deletion-optimization-for-dml"
latest_feature_date: "2024-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "partition"
  - "deletion"
  - "optimization"
  - "dml"
  - "bigquery"
  - "can"
  - "delete"
  - "entire"
---

# Partition deletion optimization for DML

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery DML can delete entire partitions efficiently when a DELETE statement targets all rows in a partition.

## Extended Definition

BigQuery DML can delete entire partitions efficiently when a DELETE statement targets all rows in a partition.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- When you run a query that filters by the clustered column, BigQuery only scans the relevant blocks based on the clustered columns instead of the entire table or table partition.
- You want any of the following partition-level management features: Set a partition expiration time to automatically delete entire partitions after a specified period of time.
- Delete specific partitions without scanning the entire table.
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- The table schema contains 2 columns: transaction id: An integer transaction date: A date The table option list specifies the: Partition expiration: Three days Description: A table partitioned by transaction date Creating a partitioned table from the result of a query The following example creates a partitioned table named days with rain in mydataset using a DATE column: CREATE TABLE mydataset . days with rain PARTITION BY date OPTIONS ( partition expiration days = 365 , description = "weather stations with precipitation, partitioned by day" ) AS SELECT DATE ( CAST ( year AS INT64 ), CAST ( mo AS INT64 ), CAST ( da AS INT64 )) AS date , ( SELECT ANY VALUE ( name ) FROM bigquery-public-data.noaa gsod.stations AS stations WHERE stations . usaf = stn ) AS station name , -- Stations can have multiple names prcp FROM bigquery-public-data.noaa gsod.gsod2017 AS weather WHERE prcp != 99.9 -- Filter unknown values AND prcp > 0 -- Filter stations/days with no precipitation If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- The table option list specifies the: Table expiration time: January 1, 2025 at 00:00:00 UTC Partition expiration time: 1 day Description: A table that expires in 2025 Label: org unit = development Creating a new table from an existing table The following example creates a table named top words in mydataset from a query: CREATE TABLE mydataset . top words OPTIONS ( description = "Top ten words per Shakespeare corpus" ) AS SELECT corpus , ARRAY AGG ( STRUCT ( word , word count ) ORDER BY word count DESC LIMIT 10 ) AS top words FROM bigquery - public - data . samples . shakespeare GROUP BY corpus ; If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- Examples Setting the expiration timestamp and description on a table The following example sets the expiration timestamp on a table to seven days from the execution time of the ALTER TABLE statement, and sets the description as well: ALTER TABLE mydataset . mytable SET OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 7 DAY ), description = "Table that expires seven days from now" ) Setting the require partition filter attribute on a partitioned table The following example sets the timePartitioning.requirePartitionFilter attribute on a partitioned table : ALTER TABLE mydataset . mypartitionedtable SET OPTIONS ( require partition filter = true ) Queries that reference this table must use a filter on the partitioning column, or else BigQuery returns an error.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.
- To learn about billing, alerts, and visualizing data, see the following topics: Create, edit, or delete budgets and budget alerts Export Cloud Billing data to BigQuery Visualize your costs with Data Studio Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Storage cost increased with no significant data increase Storage costs can increase if data in long-term storage moves to active BigQuery storage as a result of certain actions on table data, metadata, or partitions.
- Be aware that, once tables and table partitions are in long-term storage, any modifications to data, metadata, or partitioning, can cause these resources to move back to active BigQuery storage.


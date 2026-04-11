---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.583Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery materialized view replica metadata access"
feature_slug: "bigquery-materialized-view-replica-metadata-access"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "MV replica metadata"
  - "bq CLI replica metadata"
  - "materialized view replica details"
  - "SQL access to replica metadata"
  - "replica metadata lookup"
  - "BigQuery API replica metadata"
  - "materialized view replica"
  - "materialized_view_replica"
---

# BigQuery materialized view replica metadata access

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now allows users to retrieve information about materialized view replicas via SQL, the bq CLI, or the BigQuery API.

## Extended Definition

BigQuery materialized view replica metadata access refers to reading replica-specific metadata for a materialized view replica, such as the source materialized view identifiers (`replica source catalog`, `replica source schema`, `replica source name`) and replication state fields (`replication status`, `replication error`). The referenced documentation shows these fields in BigQuery table metadata and identifies the replica as a materialized view construct that can be created with `CREATE MATERIALIZED VIEW ... AS REPLICA OF ...`, including replica options. The provided excerpts do not explicitly confirm all retrieval mechanisms (SQL, `bq` CLI, and API) from the same snippets, only that the metadata exists in documented schemas.

## Evidence Summary

The DDL reference defines how to create materialized view replicas and the table reference enumerates replica metadata fields and replication status/error properties.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- The materialized view replica name must be unique for each dataset. materialized view replica option list : Allows you to specify options such as the replication interval. source materialized view name : The name of the materialized view you are replicating, in table path syntax.
- Syntax CREATE MATERIALIZED VIEW replica name [ OPTIONS ( materialized view replica option list ) ] AS REPLICA OF source materialized view name Arguments replica name : The name of the materialized view replica you're creating, in table path syntax .
- The source materialized view must be over an Amazon S3 BigLake table, and must be authorized on the dataset that contains that table. materialized view replica option list The option list lets you set materialized view replica options.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Applicable only to tables with table type set to CLONE or SNAPSHOT . replica source catalog STRING For materialized view replicas , the base materialized view's project. replica source schema STRING For materialized view replicas , the base materialized view's dataset. replica source name STRING For materialized view replicas , the base materialized view's name. replication status STRING For materialized view replicas , the status of the replication from the base materialized view to the materialized view replica; one of the following: REPLICATION STATUS UNSPECIFIED ACTIVE : Replication is active with no errors SOURCE DELETED : The source materialized view has been deleted PERMISSION DENIED : The source materialized view hasn't been authorized on the dataset that contains the source Amazon S3 BigLake tables used in the query that created the materialized view.
- UNSUPPORTED CONFIGURATION : There is an issue with the replica's prerequisites other than source materialized view authorization. replication error STRING If replication status indicates a replication issue for a materialized view replica , replication error provides further details about the issue. ddl STRING The DDL statement that can be used to recreate the table, such as CREATE TABLE or CREATE VIEW default collation name STRING The name of the default collation specification if it exists; otherwise, NULL . sync status JSON The status of the sync between the primary and secondary replicas for cross-region replication and disaster recovery datasets.
- Also referred to as the tableId . table type STRING The table type; one of the following: BASE TABLE : A standard table CLONE : A table clone SNAPSHOT : A table snapshot VIEW : A view MATERIALIZED VIEW : A materialized view or materialized view replica EXTERNAL : A table that references an external data source managed table type STRING This column is in Preview.


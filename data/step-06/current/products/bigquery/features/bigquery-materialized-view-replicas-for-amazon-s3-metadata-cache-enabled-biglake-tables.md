---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.599Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery materialized view replicas for Amazon S3 metadata cache-enabled BigLake tables"
feature_slug: "bigquery-materialized-view-replicas-for-amazon-s3-metadata-cache-enabled-biglake-tables"
latest_feature_date: "2023-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart"
keywords:
  - "BigLake MV replica"
  - "MV replica"
  - "materialized view replica creation"
  - "CREATE MATERIALIZED VIEW replica"
  - "Amazon S3 metadata cache-enabled BigLake"
  - "materialized view replica"
  - "replica materialized view"
---

# BigQuery materialized view replicas for Amazon S3 metadata cache-enabled BigLake tables

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now allows creating replicas of materialized views that are built over Amazon S3 metadata cache-enabled BigLake tables.

## Extended Definition

BigQuery supports creating a materialized view replica with `CREATE MATERIALIZED VIEW <replica> OPTIONS (...) AS REPLICA OF <source materialized view>`, including a configurable `replication interval seconds` option. A materialized view replica is identifiable in metadata by its replica source catalog/schema/name and includes replication status fields (such as ACTIVE, SOURCE DELETED, and PERMISSION DENIED) plus replication error details. The referenced usage examples show replica materialized views can be queried like other views, and the docs describe this in contexts where the source materialized view is built from queries on Amazon S3 BigLake tables.

## Evidence Summary

The DDL reference defines replica syntax and permissions, the tables reference documents replica-specific metadata and replication status semantics, and the Salesforce guide provides a concrete `CREATE MATERIALIZED VIEW ... AS REPLICA OF` example plus query usage.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- Syntax CREATE MATERIALIZED VIEW replica name [ OPTIONS ( materialized view replica option list ) ] AS REPLICA OF source materialized view name Arguments replica name : The name of the materialized view replica you're creating, in table path syntax .
- For more information, see Create materialized view replicas .
- The materialized view replica name must be unique for each dataset. materialized view replica option list : Allows you to specify options such as the replication interval. source materialized view name : The name of the materialized view you are replicating, in table path syntax.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Applicable only to tables with table type set to CLONE or SNAPSHOT . replica source catalog STRING For materialized view replicas , the base materialized view's project. replica source schema STRING For materialized view replicas , the base materialized view's dataset. replica source name STRING For materialized view replicas , the base materialized view's name. replication status STRING For materialized view replicas , the status of the replication from the base materialized view to the materialized view replica; one of the following: REPLICATION STATUS UNSPECIFIED ACTIVE : Replication is active with no errors SOURCE DELETED : The source materialized view has been deleted PERMISSION DENIED : The source materialized view hasn't been authorized on the dataset that contains the source Amazon S3 BigLake tables used in the query that created the materialized view.
- UNSUPPORTED CONFIGURATION : There is an issue with the replica's prerequisites other than source materialized view authorization. replication error STRING If replication status indicates a replication issue for a materialized view replica , replication error provides further details about the issue. ddl STRING The DDL statement that can be used to recreate the table, such as CREATE TABLE or CREATE VIEW default collation name STRING The name of the default collation specification if it exists; otherwise, NULL . sync status JSON The status of the sync between the primary and secondary replicas for cross-region replication and disaster recovery datasets.
- Also referred to as the tableId . table type STRING The table type; one of the following: BASE TABLE : A standard table CLONE : A table clone SNAPSHOT : A table snapshot VIEW : A view MATERIALIZED VIEW : A materialized view or materialized view replica EXTERNAL : A table that references an external data source managed table type STRING This column is in Preview.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-root-2`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MATERIALIZED VIEW us data.total sales replica AS REPLICA OF aws data.total sales ; Run a query on a replica materialized view The following example runs a query on a replica materialized view: -- Find total sales for the current month for the dashboard SELECT EXTRACT ( MONTH FROM CURRENT DATE ()) as month , SUM ( sales ) FROM us data . total sales replica WHERE month = EXTRACT ( MONTH FROM date ) GROUP BY 1 Using Data Cloud data with INFORMATION SCHEMA Data Cloud datasets support BigQuery INFORMATION SCHEMA views.
- Create a replica materialized view Create a new replica materialized view in the US region.


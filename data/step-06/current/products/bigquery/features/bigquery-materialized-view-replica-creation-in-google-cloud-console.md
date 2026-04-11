---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.476Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery materialized view replica creation in Google Cloud Console"
feature_slug: "bigquery-materialized-view-replica-creation-in-google-cloud-console"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
keywords:
  - "MV replica"
  - "create materialized view replica"
  - "BigQuery console create replica"
  - "materialized view replica"
  - "replica destination"
  - "materialized view replication"
  - "materialized view copy"
  - "Google Cloud Console"
---

# BigQuery materialized view replica creation in Google Cloud Console

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Users can create a materialized view replica directly from the Google Cloud Console.

## Extended Definition

BigQuery materialized view replicas are created with SQL using `CREATE MATERIALIZED VIEW ... AS REPLICA OF ...`, optionally including replica options such as `replication interval seconds`, and this command defines the replica as a materialized view object with replication behavior tied to a source materialized view. The reference also links replica metadata fields (such as replica source project/dataset/name and replication status), confirming how replicas are represented and monitored after creation; however, the provided excerpts do not explicitly document a dedicated Google Cloud Console creation flow for replicas, only that tables can be created manually in the console.

## Evidence Summary

The DDL page defines the exact `CREATE MATERIALIZED VIEW ... AS REPLICA OF ...` syntax and requirements, while the tables page documents replica metadata/status and notes manual console creation for tables in general.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- Syntax CREATE MATERIALIZED VIEW replica name [ OPTIONS ( materialized view replica option list ) ] AS REPLICA OF source materialized view name Arguments replica name : The name of the materialized view replica you're creating, in table path syntax .
- For more information, see Create materialized view replicas .
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 2 columns: corpus: Name of a Shakespeare corpus top words: An ARRAY of STRUCT s containing 2 fields: word (a STRING ) and word count (an INT64 with the word count) Note: When you examine the table schema in the Google Cloud console, a STRUCT is displayed as a RECORD column, and an ARRAY is displayed as a REPEATED column.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Applicable only to tables with table type set to CLONE or SNAPSHOT . replica source catalog STRING For materialized view replicas , the base materialized view's project. replica source schema STRING For materialized view replicas , the base materialized view's dataset. replica source name STRING For materialized view replicas , the base materialized view's name. replication status STRING For materialized view replicas , the status of the replication from the base materialized view to the materialized view replica; one of the following: REPLICATION STATUS UNSPECIFIED ACTIVE : Replication is active with no errors SOURCE DELETED : The source materialized view has been deleted PERMISSION DENIED : The source materialized view hasn't been authorized on the dataset that contains the source Amazon S3 BigLake tables used in the query that created the materialized view.
- UNSUPPORTED CONFIGURATION : There is an issue with the replica's prerequisites other than source materialized view authorization. replication error STRING If replication status indicates a replication issue for a materialized view replica , replication error provides further details about the issue. ddl STRING The DDL statement that can be used to recreate the table, such as CREATE TABLE or CREATE VIEW default collation name STRING The name of the default collation specification if it exists; otherwise, NULL . sync status JSON The status of the sync between the primary and secondary replicas for cross-region replication and disaster recovery datasets.
- Also referred to as the tableId . table type STRING The table type; one of the following: BASE TABLE : A standard table CLONE : A table clone SNAPSHOT : A table snapshot VIEW : A view MATERIALIZED VIEW : A materialized view or materialized view replica EXTERNAL : A table that references an external data source managed table type STRING This column is in Preview.
- For example, this: project name....dataset name..table name Becomes this: project name.dataset name.table name Create tables You can create a table in BigQuery in the following ways: Manually by using the Google Cloud console or the bq command-line tool bq mk command.

### "Create a k-means model to cluster London bicycle hires dataset \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial](https://docs.cloud.google.com/bigquery/docs/kmeans-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- If you prefer to reuse the project, you can delete the dataset you created in this tutorial: If necessary, open the BigQuery page in the Google Cloud console.
- Follow these steps to predict the cluster of every station that has the string Kennington in its name: In the Google Cloud console, go to the BigQuery page.
- Create a dataset Create a BigQuery dataset to store your k-means model: In the Google Cloud console, go to the BigQuery page.
- Follow these steps to view the model's evaluation information: In the Google Cloud console, go to the BigQuery page.


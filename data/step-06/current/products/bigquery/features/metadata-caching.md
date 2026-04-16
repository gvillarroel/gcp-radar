---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.598Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Metadata caching"
feature_slug: "metadata-caching"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "metadata"
  - "caching"
  - "improves"
  - "query"
  - "performance"
  - "biglake"
  - "tables"
  - "object"
---

# Metadata caching

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Metadata caching improves query performance for BigLake tables and object tables that reference large numbers of objects; Metadata caching can improve query performance for BigLake tables and object tables by avoiding repeated Cloud Storage object listing.

## Extended Definition

Metadata caching improves query performance for BigLake tables and object tables that reference large numbers of objects; Metadata caching can improve query performance for BigLake tables and object tables by avoiding repeated Cloud Storage object listing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Metadata caching for performance You can use cached metadata to improve query performance on some types of BigLake tables.
- When you enable metadata caching for BigLake or object tables, BigQuery triggers metadata generation refresh jobs.
- Cache-enabled tables with materialized views You can use materialized views over BigLake metadata cache-enabled tables to improve performance and efficiency when querying structured data stored in Cloud Storage or Amazon Simple Storage Service (Amazon S3).
- The following types of BigLake tables support metadata caching: Amazon S3 BigLake tables Cloud Storage BigLake tables BigQuery uses CMETA as a distributed metadata system to handle large tables efficiently.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- Applicable only to tables with table type set to CLONE or SNAPSHOT . replica source catalog STRING For materialized view replicas , the base materialized view's project. replica source schema STRING For materialized view replicas , the base materialized view's dataset. replica source name STRING For materialized view replicas , the base materialized view's name. replication status STRING For materialized view replicas , the status of the replication from the base materialized view to the materialized view replica; one of the following: REPLICATION STATUS UNSPECIFIED ACTIVE : Replication is active with no errors SOURCE DELETED : The source materialized view has been deleted PERMISSION DENIED : The source materialized view hasn't been authorized on the dataset that contains the source Amazon S3 BigLake tables used in the query that created the materialized view.
- Go to Logging Use the following query to access the audit data: logName = "projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity" AND resource.type = "bigquery dataset" AND timestamp >= " STARTING TIMESTAMP " AND protoPayload.@type = "type.googleapis.com/google.cloud.audit.AuditLog" AND ( protoPayload.metadata.tableCreation : OR protoPayload.metadata.tableChange : OR protoPayload.metadata.tableDeletion : ) AND protoPayload.resourceName : "projects/ PROJECT ID /datasets/ DATASET ID /tables/" Replace the following: PROJECT ID : the project that contains datasets and tables you are interested in.
- The metadata that's returned is for all types of tables in mydataset in your default project. mydataset contains the following tables: mytable1 : a standard BigQuery table myview1 : a BigQuery view To run the query against a project other than your default project, add the project ID to the dataset in the following format: project id . dataset .INFORMATION SCHEMA. view ; for example, myproject.mydataset.INFORMATION SCHEMA.TABLES .
- The following predefined IAM roles include bigquery.tables.get permissions: bigquery.metadataViewer bigquery.dataViewer bigquery.dataOwner bigquery.dataEditor bigquery.admin In addition, if a user has bigquery.datasets.create permissions, when that user creates a dataset, they are granted bigquery.dataOwner access to it. bigquery.dataOwner access gives the user the ability to retrieve table metadata.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Applies to: CSV, JSON, and Google Sheets data. max staleness INTERVAL Applicable for BigLake tables and object tables .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.362Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Smart-tuning for materialized views across project placement"
feature_slug: "smart-tuning-for-materialized-views-across-project-placement"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/authorized-views"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "smart"
  - "tuning"
  - "materialized"
  - "views"
  - "across"
  - "project"
  - "placement"
  - "bigquery"
---

# Smart-tuning for materialized views across project placement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery smart-tuning for materialized views now works when views share a project with a base table or with the querying project.

## Extended Definition

BigQuery smart-tuning for materialized views now works when views share a project with a base table or with the querying project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- Source ID: `site-docs-reference-5`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Use BigQuery sharing with authorized views BigQuery sharing (formerly Analytics Hub) is a data exchange platform with the following capabilities: Lets you share data and insights at scale across organizational boundaries.
- For details about how row-level security interacts with materialized views, see Use row-level security with other BigQuery features .
- Authorized views This document describes how to create authorized views and authorized materialized views in BigQuery.
- Create a dataset to contain the view. resource "google bigquery dataset" "view dataset" { dataset id = "view dataset" description = "Dataset that contains the view" location = "us-west1" } Create the view to authorize. resource "google bigquery table" "movie view" { project = google bigquery dataset.view dataset.project dataset id = google bigquery dataset.view dataset.dataset id table id = "movie view" description = "View to authorize" view { query = "SELECT item id, avg(rating) FROM movie project.movie dataset.movie ratings GROUP BY item id ORDER BY item id;" use legacy sql = false } } Authorize the view to access the dataset that the query data originates from. resource "google bigquery dataset access" "view authorization" { project = "movie project" dataset id = "movie dataset" view { project id = google bigquery table.movie view.project dataset id = google bigquery table.movie view.dataset id table id = google bigquery table.movie view.table id } } Specify the IAM policy for principals that can access the authorized view.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- These materialized views function like materialized views over BigQuery-managed storage tables, including the benefits of automatic refresh and smart tuning .
- Cross-cloud join required permissions To get the permissions that you need to run a cross-cloud join, ask your administrator to grant you the following IAM roles on the project where the join is executed: BigQuery Data Viewer ( roles/bigquery.dataViewer ) BigQuery Job User ( roles/bigquery.jobUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Cache-enabled tables with materialized views You can use materialized views over BigLake metadata cache-enabled tables to improve performance and efficiency when querying structured data stored in Cloud Storage or Amazon Simple Storage Service (Amazon S3).
- Network usage costs for data that you read across different regions, such as when your BigQuery dataset and Cloud Storage bucket are in different regions.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Example: replication interval seconds=900 Required permissions This statement requires the following IAM permissions : bigquery.tables.create bigquery.tables.get bigquery.tables.getData bigquery.tables.replicateData bigquery.jobs.create Example The following example creates a materialized view replica named mv replica in bq dataset : CREATE MATERIALIZED VIEW myproject . bq dataset . mv replica OPTIONS ( replication interval seconds = 600 ) AS REPLICA OF myproject.s3 dataset.my s3 mv CREATE EXTERNAL SCHEMA statement Creates a new federated dataset.
- Example The following example deletes the my cloud resource connection connection: DROP CONNECTION IF EXISTS us.my cloud resource connection ; Table path syntax Use the following syntax when specifying the path of a table resource , including standard tables, views, materialized views, external tables, and table snapshots. table path := [[ project name . ] dataset name . ] table name project name : The name of the project that contains the table resource.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- CREATE MATERIALIZED VIEW IF NOT EXISTS myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = false ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The materialized view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The materialized view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: new mv Description: A view that expires in 2 days Label: org unit = development Refresh enabled: false Creating a materialized view with partitioning and clustering The following example creates a materialized view named new mv in mydataset , partitioned by the col datetime column and clustered by the col int column: CREATE MATERIALIZED VIEW myproject . mydataset . new mv PARTITION BY DATE ( col datetime ) CLUSTER BY col int AS SELECT col int , col datetime , COUNT ( 1 ) as cnt FROM myproject . mydataset . mv base table GROUP BY col int , col datetime The base table, mv base table , must also be partitioned by the col datetime column.


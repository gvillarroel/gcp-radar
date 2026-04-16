---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.728Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE RESERVATION"
feature_slug: "create-reservation"
latest_feature_date: "2021-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
keywords:
  - "create"
  - "reservation"
  - "workload"
  - "management"
  - "dcl"
  - "statement"
  - "creating"
  - "resources"
---

# CREATE RESERVATION

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

CREATE RESERVATION is a workload management DCL statement for creating reservation resources in BigQuery.

## Extended Definition

CREATE RESERVATION is a workload management DCL statement for creating reservation resources in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Examples Creating a new materialized view The following example creates a materialized view named new mv in mydataset : CREATE MATERIALIZED VIEW myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a materialized view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = true , refresh interval minutes = 20 ) AS SELECT column 1 , SUM ( column 2 ) AS sum 2 , AVG ( column 3 ) AS avg 3 FROM myproject.mydataset.mytable GROUP BY column 1 If the materialized view name exists in the dataset, the following error is returned: Already Exists: project id:dataset.materialized view When you use a DDL statement to create a materialized view, you must specify the project, dataset, and materialized view in the following format: project id.dataset.materialized view (including the backticks if project id contains special characters); for example, myproject.mydataset.new mv .
- When new data is available, append the data of the 1993 year to the destination table using the INSERT INTO SELECT statement: INSERT INTO myotherdataset . orders SELECT FROM myawsdataset . orders WHERE EXTRACT ( YEAR FROM l commitdate ) = 1993 ; Example 2 The following example inserts data into an ingestion-time partitioned table: CREATE TABLE mydataset . orders ( id String , numeric id INT64 ) PARTITION BY PARTITIONDATE ; After creating a partitioned table, you can insert data into the ingestion-time partitioned table: INSERT INTO mydataset . orders ( PARTITIONTIME , id , numeric id ) SELECT TIMESTAMP ( "2023-01-01" ), id , numeric id , FROM mydataset . ordersof23 WHERE numeric id > 4000000 ; CREATE TABLE LIKE statement Creates a new table with all of the same metadata of another table.
- Example The following example assigns the project my project to the prod reservation for query jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'projects/my project' , job type = 'QUERY' ); The following example assigns an organization to the prod reservation for pipeline jobs, such as load and extract jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'organizations/1234' , job type = 'PIPELINE' ); CREATE SEARCH INDEX statement Creates a new search index on one or more columns of a table.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When a user initiates one of these tasks by using the Google Cloud console , the bq command-line tool , a SQL statement , or an API call , BigQuery automatically creates a job to execute the task.
- Administration charts and alerts You can use Cloud Monitoring to create custom charts based on the resources, metrics, and any aggregation that you specify.
- For example, you can create a table by using the Explorer pane in the Google Cloud console, a bq mk --table command, or a CREATE TABLE SQL statement.
- Monitor reservations You can monitor your slot usage on the Capacity management page of the Google Cloud console.

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add labels to resources This document describes how to add labels to BigQuery resources, including the following resources: datasets tables and views jobs job sessions reservations For more information about labels in BigQuery, see Introduction to labels .
- Go to BigQuery In the query editor, enter the following statement: ALTER RESERVATION myreservation SET OPTIONS ( labels = [ ( 'sensitivity' , 'high' ) ] ); Click play circle Run .
- For more information about adding a label when you create a table or view, see Creating a table or Creating a view .
- SQL To add a label to a reservation, use the ALTER RESERVATION SET OPTIONS DDL statement .


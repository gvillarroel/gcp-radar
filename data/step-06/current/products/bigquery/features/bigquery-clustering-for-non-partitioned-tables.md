---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.824Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery clustering for non-partitioned tables"
feature_slug: "bigquery-clustering-for-non-partitioned-tables"
latest_feature_date: "2020-06-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
keywords:
  - "table clustering without partitions"
  - "clustering on unpartitioned tables"
  - "unpartitioned clustering"
  - "CLUSTER BY"
  - "non-partitioned table clustering"
  - "clustered tables"
  - "clustering keys"
---

# BigQuery clustering for non-partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports clustering on non-partitioned tables.

## Extended Definition

BigQuery now supports clustering on non-partitioned tables.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- CREATE MATERIALIZED VIEW IF NOT EXISTS myproject . mydataset . new mv OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "new mv" , description = "a view that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] , enable refresh = false ) AS SELECT column 1 , column 2 , column 3 FROM myproject.mydataset.mytable The materialized view is defined using the following GoogleSQL query: SELECT column 1, column 2, column 3 FROM myproject.mydataset.mytable The materialized view option list specifies the: Expiration time: 48 hours from the time the view is created Friendly name: new mv Description: A view that expires in 2 days Label: org unit = development Refresh enabled: false Creating a materialized view with partitioning and clustering The following example creates a materialized view named new mv in mydataset , partitioned by the col datetime column and clustered by the col int column: CREATE MATERIALIZED VIEW myproject . mydataset . new mv PARTITION BY DATE ( col datetime ) CLUSTER BY col int AS SELECT col int , col datetime , COUNT ( 1 ) as cnt FROM myproject . mydataset . mv base table GROUP BY col int , col datetime The base table, mv base table , must also be partitioned by the col datetime column.
- Syntax CREATE [ OR REPLACE ] [ TEMP TEMPORARY ] TABLE [ IF NOT EXISTS ] table name [ ( column constraint definition [ , ... ] ) ] [ DEFAULT COLLATE collate specification ] [ PARTITION BY partition expression ] [ CLUSTER BY clustering column list ] [ WITH CONNECTION connection name ] [ OPTIONS ( table option list ) ] [ AS query statement ] column := column definition constraint definition := [ primary key ] [[ CONSTRAINT constraint name ] foreign key , ... ] primary key := PRIMARY KEY ( column name [ , ... ] ) NOT ENFORCED foreign key := FOREIGN KEY ( column name [ , ... ] ) foreign reference foreign reference := REFERENCES primary key table ( column name [ , ... ] ) NOT ENFORCED Arguments OR REPLACE : Replaces any table with the same name if it exists.
- CREATE TABLE mydataset . myclusteredtable ( input timestamp TIMESTAMP , customer id STRING , transaction amount NUMERIC ) PARTITION BY DATE ( input timestamp ) CLUSTER BY customer id OPTIONS ( partition expiration days = 3 , description = "a table clustered by customer id" ) AS SELECT FROM mydataset . myothertable If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .
- CREATE TABLE mydataset . myclusteredtable ( input timestamp TIMESTAMP , customer id STRING , transaction amount NUMERIC ) PARTITION BY TIMESTAMP TRUNC ( input timestamp , HOUR ) CLUSTER BY customer id OPTIONS ( partition expiration days = 3 , description = "a table clustered by customer id" ) If you haven't configured a default project, prepend a project ID to the dataset name in the example SQL, and enclose the name in backticks if project id contains special characters: project id.dataset.table .

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- On-demand query size calculation To calculate the number of bytes processed by the various types of queries, see the following sections: DML statements DDL statements Clustered tables Note: The selected dataset storage billing model does not affect the on-demand query cost calculation.
- For clustered tables, the estimation of the number of bytes billed for a query is an upper bound, and can be higher than the actual number of bytes billed after running the query.
- Avoid using LIMIT in non-clustered tables Best practice: For non-clustered tables, don't use a LIMIT clause as a method of cost control.
- For non-clustered tables, applying a LIMIT clause to a query doesn't affect the amount of data that is read.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For more information on the bq load command, see: Command-line reference For more information on partitioned tables, see: Creating partitioned tables For more information on clustered tables, see: Creating and using clustered tables For more information on table encryption, see: Protecting data with Cloud KMS keys To load CSV data into BigQuery, enter the following command: bq --location = location load \ --source format = format \ dataset.table \ path to source \ schema Where: location is your location.
- The Google Cloud console does not support appending to or overwriting partitioned or clustered tables in a load job.
- For more information, see Creating partitioned tables and Creating and using clustered tables .
- For more information, see Creating partitioned tables and Creating and using clustered tables .


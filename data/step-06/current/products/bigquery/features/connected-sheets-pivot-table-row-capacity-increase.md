---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.260Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Connected Sheets pivot table row capacity increase"
feature_slug: "connected-sheets-pivot-table-row-capacity-increase"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/connected-sheets"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "connected"
  - "sheets"
  - "pivot"
  - "table"
  - "row"
  - "capacity"
  - "increase"
  - "tables"
---

# Connected Sheets pivot table row capacity increase

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Pivot tables backed by BigQuery in Connected Sheets now support up to 200,000 rows instead of 100,000.

## Extended Definition

Pivot tables backed by BigQuery in Connected Sheets now support up to 200,000 rows instead of 100,000.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/connected-sheets](https://docs.cloud.google.com/bigquery/docs/connected-sheets)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Using Connected Sheets \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/connected-sheets](https://docs.cloud.google.com/bigquery/docs/connected-sheets)
- Source ID: `site-docs-reference-5`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With Connected Sheets, you can preview your BigQuery data and use it in pivot tables, formulas, and charts built from the entire set of data.
- When you use Connected Sheets to create a chart, pivot table, formula, or other computed cell from your data, Connected Sheets runs a query in BigQuery on your behalf.
- Open tables in Connected Sheets To open a table in Connected Sheets, follow these steps: In the Google Cloud console, go to the BigQuery page.
- Click Overview > Tables , and next to your table name, click more vert View actions , and then select Open in > Connected Sheets .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Sigma curates datasets, iteratively analyzes data, and makes calculations against billions of rows of live data using spreadsheet skills, pivot tables, and formulas to find answers in seconds.
- Partner references Prophecy BigQuery Integration Read and write to catalog tables in BigQuery Partner Advantage page Direct link Qlik Solution Qlik Replicate Category ETL & Data Integration Description Qlik Replicate (formerly Attunity Replicate) is a high-performance data-replication tool offering optimized data ingestion from a broad array of data sources and platforms and seamless integration with all major big data analytics platforms.
- Partner references How to read from and write to BigQuery tables in Databricks Databricks on Google Cloud Partner Advantage page Direct link DataChat Solution DataChat Category BI, ML, & Advanced Analytics Description DataChat is a no-code, generative AI analytics platform that enables business users and domain experts to unlock the power of data without any technical expertise.
- Sigma transforms the data modeling process into a collaborative one; users can edit tables and create visualizations together, enabling better communication and decision making by forging a bridge between data teams and business users.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Applies to: CSV, JSON, and Google Sheets data. max staleness INTERVAL Applicable for BigLake tables and object tables .
- The table snapshot is created in the dataset mydataset and is named mytablesnapshot : CREATE SNAPSHOT TABLE myproject . mydataset . mytablesnapshot CLONE myproject.mydataset.mytable OPTIONS ( expiration timestamp = TIMESTAMP ADD ( CURRENT TIMESTAMP (), INTERVAL 48 HOUR ), friendly name = "my table snapshot" , description = "A table snapshot that expires in 2 days" , labels =[ ( "org unit" , "development" ) ] ) If the table snapshot name already exists in the dataset, then the following error is returned: Already Exists: myproject.mydataset.mytablesnapshot The table snapshot option list specifies the following: Expiration time: 48 hours after the time the table snapshot is created Friendly name: my table snapshot Description: A table snapshot that expires in 2 days Label: org unit = development Create a table snapshot: ignore if it already exists The following example creates a table snapshot of the table myproject.mydataset.mytable .


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.776Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "On-demand pricing assignment with Reservations"
feature_slug: "on-demand-pricing-assignment-with-reservations"
latest_feature_date: "2020-08-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
keywords:
  - "demand"
  - "pricing"
  - "assignment"
  - "reservations"
  - "bigquery"
  - "lets"
  - "you"
  - "explicitly"
---

# On-demand pricing assignment with Reservations

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Reservations lets you explicitly assign projects to use on-demand pricing.

## Extended Definition

BigQuery Reservations lets you explicitly assign projects to use on-demand pricing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- To remove a project from any reservations and use on-demand billing instead, set reservation id to none . assignment option list The option list specifies options for the dataset.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- While using a shared slot pool incurs no extra cost, using BACKGROUND reservations instead provides more consistent performance by allocating a dedicated resource pool, and improves the reliability of refresh jobs and overall query efficiency in BigQuery.
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .
- Use BACKGROUND reservations If you choose to use automatic refreshes, we recommend that you create a reservation , and then create an assignment with a BACKGROUND job type for the project that runs the metadata cache refresh jobs.
- The following table shows how your pricing model affects how these costs are applied: On-demand pricing Standard, Enterprise, and Enterprise Plus editions Queries You are billed for the bytes processed by user queries.

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Projects that perform fine-grained DML operations by using on-demand pricing , or without a BACKGROUND assignment, process offloaded garbage collection tasks using internal BigQuery resources and are charged at on-demand pricing rates.
- Projects that perform fine-grained DML operations without a BACKGROUND assignment use on-demand pricing to process the offloaded deleted data jobs.
- Transform data with data manipulation language (DML) The BigQuery data manipulation language (DML) lets you update, insert, and delete data from your BigQuery tables.
- Operation On-demand pricing Capacity-based pricing Mutating DML statements Use standard DML sizing to determine on-demand bytes scanned calculations.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.599Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Table statistics for metadata caching"
feature_slug: "table-statistics-for-metadata-caching"
latest_feature_date: "2023-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "table"
  - "statistics"
  - "metadata"
  - "caching"
  - "includes"
  - "improve"
  - "query"
  - "plan"
---

# Table statistics for metadata caching

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Metadata caching includes table statistics to improve query plan performance.

## Extended Definition

Metadata caching includes table statistics to improve query plan performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To find information about metadata refresh jobs, query the INFORMATION SCHEMA.JOBS view , as shown in the following example: SELECT FROM region-us.INFORMATION SCHEMA.JOBS BY PROJECT WHERE job id LIKE '%metadata cache refresh%' AND creation time > TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 6 HOUR ) ORDER BY start time DESC LIMIT 10 ; For Cloud Storage BigLake tables that are based on Parquet files, table statistics are collected during the metadata cache refresh and used to improve query plans.
- Metadata caching for performance You can use cached metadata to improve query performance on some types of BigLake tables.
- Cache-enabled tables with materialized views You can use materialized views over BigLake metadata cache-enabled tables to improve performance and efficiency when querying structured data stored in Cloud Storage or Amazon Simple Storage Service (Amazon S3).
- The following types of BigLake tables support metadata caching: Amazon S3 BigLake tables Cloud Storage BigLake tables BigQuery uses CMETA as a distributed metadata system to handle large tables efficiently.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The BigQuery connector for Datahub lets it ingest metadata from your BigQuery environment, providing a centralized and searchable catalog for all your tables, views, and data.
- The solution involves the following steps: Get the data Connect Analyze Automate Partner references Move your marketing data into BigQuery The easiest way to move data from your Google BigQuery warehouse Supermetrics for BigQuery: Overview Supermetrics for BigQuery (video tutorial) Partner Advantage page Direct link Tableau Solution Tableau Prep Builder Category ETL & Data Integration Description Tableau Prep Builder is a tool in the Tableau product suite designed to make preparing your data easy and intuitive.
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.
- Partner references Google BigQuery resources Connect to BigQuery Understanding BigQuery costs Unravel for BigQuery datasheet Partner Advantage page Direct link Validio Solution Validio Platform Category Data Quality, Observability, & FinOps Description Validio is the next generation data quality and reliability platform and offers the only data quality solution on the market monitoring and validating both data in motion and data at rest on datapoint and pipeline metadata level.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- DDL functionality extends the information returned by a Jobs resource . statistics.query.statementType includes the following additional values: CREATE TABLE CREATE TABLE AS SELECT DROP TABLE CREATE VIEW DROP VIEW statistics.query has 2 additional fields: ddlOperationPerformed : The DDL operation performed, possibly dependent on the existence of the DDL target.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- If the OPTIONS clause includes any expiration options, then the bigquery.tables.delete permission is also required.
- If the OPTIONS clause includes any expiration options, then the bigquery.tables.delete permission is also required.


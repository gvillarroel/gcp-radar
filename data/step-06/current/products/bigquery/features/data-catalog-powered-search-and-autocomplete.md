---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.768Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Data Catalog-powered search and autocomplete"
feature_slug: "data-catalog-powered-search-and-autocomplete"
latest_feature_date: "2020-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/automatic-discovery"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "catalog"
  - "powered"
  - "search"
  - "autocomplete"
  - "console"
  - "can"
  - "use"
  - "bigquery"
---

# Data Catalog-powered search and autocomplete

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Cloud console can use Data Catalog-powered search and autocomplete for BigQuery resources.

## Extended Definition

The Cloud console can use Data Catalog-powered search and autocomplete for BigQuery resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Discover and catalog Cloud Storage data \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)
- Source ID: `site-docs-reference-5`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Discover and catalog Cloud Storage data This document explains how to use Knowledge Catalog automatic discovery, a feature in BigQuery that lets you scan data in Cloud Storage buckets to extract and then catalog metadata.
- To update a published BigLake table, follow these steps: In the Google Cloud console, go to the BigQuery page.
- All the BigLake tables are automatically ingested into Knowledge Catalog for search and discovery.
- Console In the Google Cloud console, go to the BigQuery page.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery connector for Datahub lets it ingest metadata from your BigQuery environment, providing a centralized and searchable catalog for all your tables, views, and data.
- Partner references Open-source ETL to BigQuery Getting started with BigQuery S3 to BigQuery in minutes Redshift to BigQuery in minutes Partner Advantage page Direct link Aiven Solution Aiven Data Platform Category ETL & Data Integration Description Aiven offers popular & proven open source database and messaging software as easy-to-adopt, fully managed, highly available, secure & compliant SaaS solutions like Kafka, Kafka Connect, Kafka MirrorMaker, PostgreSQL, MySQL, Elasticsearch, Cassandra, Redis and M3DB.
- Partner references Prophecy BigQuery Integration Read and write to catalog tables in BigQuery Partner Advantage page Direct link Qlik Solution Qlik Replicate Category ETL & Data Integration Description Qlik Replicate (formerly Attunity Replicate) is a high-performance data-replication tool offering optimized data ingestion from a broad array of data sources and platforms and seamless integration with all major big data analytics platforms.
- Partner references WisdomAI and Google Cloud Join Forces to Turn Enterprise Data into Instant Insights How to connect to BigQuery from Wisdom Partner Advantage page Direct link Zenlytic Solution Zenlytic Category BI, ML, & Advanced Analytics Description Zenlytic is an LLM-powered business intelligence platform that makes self-serve analytics possible through a conversational interface to your data.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- Run DDL statements You can run DDL statements by using the Google Cloud console, by using the bq command-line tool, by calling the jobs.query REST API, or programmatically using the BigQuery API client libraries .
- BigQuery returns an error if any column name is not a STRING or does not contain a STRING field, or if you call CREATE SEARCH INDEX on ALL COLUMNS of a table which contains no STRING fields.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.tables.deleteIndex The table with the search index to delete.


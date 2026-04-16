---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.937Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "JSON import support"
feature_slug: "json-import-support"
latest_feature_date: "2012-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/biglake-intro"
keywords:
  - "json"
  - "import"
  - "lets"
  - "bigquery"
  - "files"
  - "through"
---

# JSON import support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

JSON import support lets BigQuery import JSON files through the API.

## Extended Definition

JSON import support lets BigQuery import JSON files through the API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- Cannot appear with main file uri in procedure option list . argument type : Any valid BigQuery type . procedure argument mode : Specifies whether an argument is an input, an output, or both. procedure option list The procedure option list lets you specify procedure options.
- Applies to CSV and JSON data. timestamp format STRING Format elements that define how the TIMESTAMP values are formatted in the input files (for example, MM/DD/YYYY HH24:MI:SS.FF3 ).

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Partner references SSIS BigQuery Export Data from SQL Server to BigQuery through SSIS Partner Advantage page Direct link Census Solution Census Reverse ETL Category ETL & Data Integration Description Census is a reverse ETL tool and operational analytics platform that lets you sync your trusted analytics data from your hub into operational tools that your business teams use on a daily basis.
- Partner references Import BigQuery Data into Amplitude Export data to BigQuery AskYourDatabase Solution AskYourDatabase Category BI, ML, & Advanced Analytics Description AskYourDatabase is an AI-powered tool that lets users ask questions in plain English and get instant answers from their database.
- It can help Google customers in consolidating data from various sources to Google BigQuery or loading data from it to other sources, import and export CSV files to/from file storages, creating refreshable Google Sheets reports with data from various sources and more.
- Partner references Google BigQuery Integration View data in BigQuery Product & Behavioral Analytics on Google BigQuery Optimizely's partnership with Google Cloud Partner Advantage page Direct link Numberstation Solution Numbersstation.ai Category BI, ML, & Advanced Analytics Description Numbers Station leverages a multi-agent architecture built with specialized agents to reason through complex questions, building end-to-end analytics solutions and democratizing data by delivering insights where and when you need them.

### "Introduction to BigLake external tables \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/biglake-intro](https://docs.cloud.google.com/bigquery/docs/biglake-intro)
- Source ID: `site-docs-reference-5`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- BigLake tables support the following formats: Avro CSV Delta Lake Iceberg JSON ORC Parquet You can't use cached metadata with Apache Iceberg external tables ; BigQuery already uses the metadata that Iceberg captures in manifest files.
- For example, the following diagram demonstrates how the BigQuery Storage API lets users access authorized data using open source query engines such as Apache Spark: For more information about connectors supported by BigQuery, see BigQuery connectors .
- BigLake tables on object stores For data lake administrators, BigLake lets you set access controls on tables rather than files, which gives you finer-grained options when setting user access to data in the data lake.
- To optimize performance, consider creating a view in the BigQuery Omni region that filters STRUCT and JSON columns and returns only the necessary fields as individual columns.


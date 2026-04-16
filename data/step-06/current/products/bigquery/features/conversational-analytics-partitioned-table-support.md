---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.209Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Conversational analytics partitioned table support"
feature_slug: "conversational-analytics-partitioned-table-support"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/partitioned-tables"
  - "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned"
keywords:
  - "conversational"
  - "analytics"
  - "partitioned"
  - "table"
  - "bigquery"
  - "can"
  - "use"
  - "tables"
---

# Conversational analytics partitioned table support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery conversational analytics can use partitioned tables and partition columns to optimize generated queries.

## Extended Definition

BigQuery conversational analytics can use partitioned tables and partition columns to optimize generated queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned)

## Supporting Pages

### Introduction to partitioned tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/partitioned-tables](https://docs.cloud.google.com/bigquery/docs/partitioned-tables)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Quotas and limits for jobs against partitioned tables Quotas and limits also apply to the different types of jobs you can run against partitioned tables, including: Loading data (load jobs) Exporting data (extract jobs) Querying data (query jobs) Copying tables (copy jobs) Number of partition modifications for column-partitioned tables quota errors BigQuery returns this error when your column-partitioned table reaches the quota of the number of partition modifications permitted per day.
- Table pricing When you create and use partitioned tables in BigQuery, your charges are based on how much data is stored in the partitions and on the queries you run against the data: For information on storage pricing, see Storage pricing .
- For best practices for controlling costs in BigQuery, see Controlling costs in BigQuery Table security Access control for partitioned tables is the same as access control for standard tables.
- Quotas and limits Partitioned tables have defined limits in BigQuery.

### Conversational analytics overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- Source ID: `site-docs-reference-5`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows examples of one-shot prompts that activate the use of BigQuery ML: Use case Sample usage Public dataset Forecasting "Predict the number of trips for the next month." bigquery-public-data.san francisco bikeshare.bikeshare trips Anomaly detection "Find outliers in trips per day for 2018 using 2017 as a baseline." bigquery-public-data.san francisco bikeshare.bikeshare trips LLM text generation "For each article in the 'sports' category, summarize the body column in 1-2 sentences." bigquery-public-data.bbc news.fulltext Security You can manage access to conversational analytics in BigQuery using Conversational Analytics API IAM roles and permissions .
- BigQuery ML support Conversational analytics supports the following BigQuery ML functions in response to chats with data agents and data sources, and in verified SQL queries that you create.
- Other services in the project that support data agents, such as the Conversational Analytics API and Looker Studio Pro, can access data agents that you create in BigQuery.
- Conversational analytics is powered by Gemini for Google Cloud and supports some BigQuery ML functions.

### "Create an integer-range partitioned table \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-table-range-partitioned)
- Source ID: `site-docs-reference-required-15`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Explore further For detailed documentation that includes this code sample, see the following: Creating partitioned tables Code sample C# Before trying this sample, follow the C# setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Create an integer-range partitioned table Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for client libraries . require "google/cloud/bigquery" Creates a table with range partitioning. @param dataset id [String] The ID of the dataset to create the table in. @param table id [String] The ID of the table to create. def create range partitioned table dataset id , table id bigquery = Google :: Cloud :: Bigquery . new dataset = bigquery . dataset dataset id table = dataset . create table table id do t t . schema do s s . integer "integerField" , mode : :required s . string "stringField" , mode : :nullable s . boolean "booleanField" , mode : :nullable s . date "dateField" , mode : :nullable end t . range partitioning field = "integerField" t . range partitioning start = 1 t . range partitioning interval = 2 t . range partitioning end = 10 end puts "Created range-partitioned table: #{ table . table id } " end Terraform To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function createTableRangePartitioned () { // Creates a new integer range partitioned table named "my table" // in "my dataset". / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = "my dataset"; // const tableId = "my table"; const schema = [ { name : 'fullName' , type : 'STRING' }, { name : 'city' , type : 'STRING' }, { name : 'zipcode' , type : ' INTEGER ' }, ]; // To use integer range partitioning, select a top-level REQUIRED or // NULLABLE column with INTEGER / INT64 data type.


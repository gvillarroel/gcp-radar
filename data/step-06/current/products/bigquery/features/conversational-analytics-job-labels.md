---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.208Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Conversational analytics job labels"
feature_slug: "conversational-analytics-job-labels"
latest_feature_date: "2026-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/conversational-analytics"
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings"
keywords:
  - "conversational"
  - "analytics"
  - "job"
  - "labels"
  - "jobs"
  - "initiated"
  - "bigquery"
  - "labeled"
---

# Conversational analytics job labels

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Jobs initiated by BigQuery conversational analytics are labeled in Job History for filtering, auditing, and cost analysis.

## Extended Definition

Jobs initiated by BigQuery conversational analytics are labeled in Job History for filtering, auditing, and cost analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)

## Supporting Pages

### Conversational analytics overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/conversational-analytics](https://docs.cloud.google.com/bigquery/docs/conversational-analytics)
- Source ID: `site-docs-reference-5`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows examples of one-shot prompts that activate the use of BigQuery ML: Use case Sample usage Public dataset Forecasting "Predict the number of trips for the next month." bigquery-public-data.san francisco bikeshare.bikeshare trips Anomaly detection "Find outliers in trips per day for 2018 using 2017 as a baseline." bigquery-public-data.san francisco bikeshare.bikeshare trips LLM text generation "For each article in the 'sports' category, summarize the body column in 1-2 sentences." bigquery-public-data.bbc news.fulltext Security You can manage access to conversational analytics in BigQuery using Conversational Analytics API IAM roles and permissions .
- BigQuery ML support Conversational analytics supports the following BigQuery ML functions in response to chats with data agents and data sources, and in verified SQL queries that you create.
- Other services in the project that support data agents, such as the Conversational Analytics API and Looker Studio Pro, can access data agents that you create in BigQuery.
- Conversational analytics is powered by Gemini for Google Cloud and supports some BigQuery ML functions.

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- QueryJobConfig () config . labels = labels location = "us" job = client . query ( sql , location = location , job config = config ) job id = job . job id print ( f "Added { job . labels } to { job id } ." ) Associate jobs in a session with a label If you run queries in a session , you can assign a label to all future query jobs in that session using BigQuery multi-statement queries.
- Add labels to resources This document describes how to add labels to BigQuery resources, including the following resources: datasets tables and views jobs job sessions reservations For more information about labels in BigQuery, see Introduction to labels .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function labelTable () { // Adds a label to an existing table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; const dataset = bigquery . dataset ( datasetId ); const [ table ] = await dataset . table ( tableId ). get (); // Retrieve current table metadata const [ metadata ] = await table . getMetadata (); // Add label to table metadata metadata . labels = { color : 'green' }; const [ apiResponse ] = await table . setMetadata ( metadata ); console . log ( ${ tableId } labels: ); console . log ( apiResponse . labels ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function labelDataset () { // Updates a label on a dataset. / TODO(developer): Uncomment the following lines before running the sample / // const datasetId = "my dataset"; // Retrieve current dataset metadata. const dataset = bigquery . dataset ( datasetId ); const [ metadata ] = await dataset . getMetadata (); // Add label to dataset metadata metadata . labels = { color : 'green' }; const [ apiResponse ] = await dataset . setMetadata ( metadata ); console . log ( ${ datasetId } labels: ); console . log ( apiResponse . labels ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

### "View and subscribe to listings and data exchanges \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-view-subscribe-listings)
- Source ID: `site-docs-root-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to use listings, ask your BigQuery sharing administrator to grant you the following Identity and Access Management (IAM) roles on the BigQuery sharing subscriber project: Discover listings : Analytics Hub Viewer ( roles/analyticshub.viewer ) Discover data exchanges : Analytics Hub Viewer ( roles/analyticshub.viewer ) Subscribe to listings : BigQuery User ( roles/bigquery.user ) To subscribe to listings, you must also ask the BigQuery sharing listing publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on their listing, exchange, or project, depending on the scope that's most appropriate for your use case.
- Subscribe to data exchanges : BigQuery User ( roles/bigquery.user ) To subscribe to data exchanges in the context of data clean room exchanges, you must also ask the BigQuery sharing exchange publisher to grant you the Analytics Hub Subscriber role ( roles/analyticshub.subscriber ) on the specific data clean room.
- Additionally, you must ask the destination project owners in the BigQuery sharing subscriber organization to grant you the Analytics Hub Subscription Owner role ( roles/analyticshub.subscriptionOwner ) on the destination project.
- View and subscribe to listings and data exchanges This document describes how to view and subscribe to listings and data exchanges in BigQuery sharing (formerly Analytics Hub).


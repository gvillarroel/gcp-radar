---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.611Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Add data demo guide"
feature_slug: "add-data-demo-guide"
latest_feature_date: "2023-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
  - "https://docs.cloud.google.com/bigquery/docs/column-data-masking"
keywords:
  - "add"
  - "demo"
  - "guide"
  - "walks"
  - "users"
  - "through"
  - "adding"
  - "bigquery"
---

# Add data demo guide

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The add data demo guide walks users through adding data to BigQuery from common sources.

## Extended Definition

The add data demo guide walks users through adding data to BigQuery from common sources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Google BigQuery Integration View data in BigQuery Product & Behavioral Analytics on Google BigQuery Optimizely's partnership with Google Cloud Partner Advantage page Direct link Numberstation Solution Numbersstation.ai Category BI, ML, & Advanced Analytics Description Numbers Station leverages a multi-agent architecture built with specialized agents to reason through complex questions, building end-to-end analytics solutions and democratizing data by delivering insights where and when you need them.
- Partner references Creating a dataset using BigQuery Adding a new QuickSight dataset for BigQuery Unlock the power of unified business intelligence with BigQuery and Amazon QuickSight Amplitude Solution Amplitude Analytics Category BI, ML, & Advanced Analytics Description Amplitude is an event-based analytics tool that tracks the behaviors of users based on in-product interactions and analyzes user behavior in real-time.
- Partner references Numbers station BigQuery Quickstart BigQuery integration OWOX Solution Owox BI Category BI, ML, & Advanced Analytics Description OWOX BI is a leading data democratization platform, designed for collaboration between data teams and business users, giving the right tools to empower everyone to explore and act upon business data.
- Partner references Use BigQuery directly in a notebook Getting started with BigQuery in Deepnote BigQuery with Google OAuth Partner Advantage page Direct link DinMo Solution DinMo Category BI, ML, & Advanced Analytics Description DinMo transforms all customer touch points into high-value audiences and helps users leverage them in all activation platforms without code or engineering in less than 5 minutes.

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-reference-2`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // addTableLabel demonstrates adding Label metadata to a BigQuery table. func addTableLabel ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // addDatasetLabel demonstrates adding label metadata to an existing dataset. func addDatasetLabel ( projectID , datasetID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" ctx := context .
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function labelTable () { // Adds a label to an existing table. / TODO(developer): Uncomment the following lines before running the sample. / // const datasetId = 'my dataset'; // const tableId = 'my table'; const dataset = bigquery . dataset ( datasetId ); const [ table ] = await dataset . table ( tableId ). get (); // Retrieve current table metadata const [ metadata ] = await table . getMetadata (); // Add label to table metadata metadata . labels = { color : 'green' }; const [ apiResponse ] = await table . setMetadata ( metadata ); console . log ( ${ tableId } labels: ); console . log ( apiResponse . labels ); } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

### Mask column data \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/column-data-masking](https://docs.cloud.google.com/bigquery/docs/column-data-masking)
- Source ID: `site-docs-reference-5`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- In case of custom masking, grant users the BigQuery Admin or BigQuery Data Owner roles to ensure they have the necessary permissions for both routines and data policies.
- Home Documentation Data analytics BigQuery Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- If you use custom masking, grant users the BigQuery Data Owner role to ensure they have the necessary permissions for both routines and data policies.
- Note that all users and groups you enter here are granted the BigQuery Masked Reader role.


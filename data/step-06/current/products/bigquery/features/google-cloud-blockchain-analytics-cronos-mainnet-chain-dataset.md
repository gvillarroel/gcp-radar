---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.550Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Cloud Blockchain Analytics Cronos Mainnet Chain dataset"
feature_slug: "google-cloud-blockchain-analytics-cronos-mainnet-chain-dataset"
latest_feature_date: "2023-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "blockchain"
  - "analytics"
  - "cronos"
  - "mainnet"
  - "chain"
  - "dataset"
  - "bigquery"
  - "provides"
---

# Google Cloud Blockchain Analytics Cronos Mainnet Chain dataset

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery provides the Google Cloud Blockchain Analytics Cronos Mainnet Chain dataset through Public Datasets Program and Analytics Hub.

## Extended Definition

BigQuery provides the Google Cloud Blockchain Analytics Cronos Mainnet Chain dataset through Public Datasets Program and Analytics Hub.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Create a data exchange and listing using Analytics Hub \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/analyticshub-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Listing BigqueryDataset { BigqueryDataset : & analyticshubpb .
- Leverage the page tokens to iterate through the entire collection. / // const pageSize = 1234 / Page token, returned by a previous call, to request the next page of results. / // const pageToken = 'abc123' // Imports the Dataexchange library const { AnalyticsHubServiceClient } = require ( ' @google-cloud/bigquery-data-exchange ' ). v1beta1 ; // Instantiates a client const dataexchangeClient = new AnalyticsHubServiceClient (); async function callListDataExchanges () { // Construct request const request = { parent , }; // Run request const iterable = await dataexchangeClient . listDataExchangesAsync ( request ); for await ( const response of iterable ) { console . log ( response ); } } callListDataExchanges (); What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- For more information, see Set up authentication for client libraries . // The analyticshub quickstart application demonstrates usage of the // Analytics hub API by creating an example data exchange and listing. package main import ( "context" "flag" "fmt" "log" analyticshub "cloud.google.com/go/bigquery/analyticshub/apiv1" "cloud.google.com/go/bigquery/analyticshub/apiv1/analyticshubpb" "google.golang.org/grpc/codes" "google.golang.org/grpc/status" ) func main () { // Define the command line flags for controlling the behavior of this quickstart. var ( projectID = flag .
- Home Documentation Data analytics BigQuery Samples Create a data exchange and listing using Analytics Hub Stay organized with collections Save and categorize content based on your preferences.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Integrate with BigQuery Accessing Google BigQuery dataset using Xplenty Partner Advantage page Direct link Keboola Solution Keboola Platform Category ETL & Data Integration Description Keboola's Data Stack as a Service provides the first complete solution for gathering, combining and enhancing data for analytics and is deployed by, and partners with, some of the world's leading brands.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.
- Partner references Configuring BigQuery Data Transformation in BigQuery Partner Advantage page Direct link Databricks Solution Databricks Lakehouse Category BI, ML, & Advanced Analytics Description Databricks SQL provides an easy-to-use platform for analysts who want to run SQL queries on their data lake, create multiple visualization types to explore query results from different perspectives, and build and share dashboards.
- Partner references Creating a dataset using BigQuery Adding a new QuickSight dataset for BigQuery Unlock the power of unified business intelligence with BigQuery and Amazon QuickSight Amplitude Solution Amplitude Analytics Category BI, ML, & Advanced Analytics Description Amplitude is an event-based analytics tool that tracks the behaviors of users based on in-product interactions and analyzes user behavior in real-time.

### "Using geospatial analytics to plot a hurricane's path \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane](https://docs.cloud.google.com/bigquery/docs/geospatial-tutorial-hurricane)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Objectives In this tutorial, you: Use a geospatial analytics function to convert latitude and longitude columns into geographical points Run a query that plots the path of a hurricane Visualize your results in BigQuery Visualize your results in BigQuery Geo Viz Costs BigQuery is a paid product and you will incur BigQuery usage in this tutorial.
- Home Documentation Data analytics BigQuery Guides Send feedback Using geospatial analytics to plot a hurricane's path Stay organized with collections Save and categorize content based on your preferences.
- The public datasets are datasets that BigQuery hosts for you to access and integrate into your applications.
- Google pays for the storage of these datasets and provides public access to the data by using a project .


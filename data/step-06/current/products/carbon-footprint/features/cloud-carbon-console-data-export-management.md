---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:44.244Z"
product_name: "Carbon Footprint"
product_slug: "carbon-footprint"
feature_name: "Cloud Carbon console data export management"
feature_slug: "cloud-carbon-console-data-export-management"
latest_feature_date: "2026-02-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/carbon-footprint/docs/export"
  - "https://docs.cloud.google.com/carbon-footprint/docs/api"
  - "https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data"
keywords:
  - "carbon"
  - "console"
  - "export"
  - "management"
  - "can"
  - "display"
  - "accessible"
  - "footprint"
---

# Cloud Carbon console data export management

Product: Carbon Footprint
Coverage: MEDIUM

## Step 02 Summary

The Cloud Carbon console can display accessible Carbon Footprint exports for a billing account and help manage those exports in BigQuery; The Cloud Carbon console can display accessible Carbon Footprint exports for a billing account and help manage those exports in BigQuery.

## Extended Definition

The Cloud Carbon console can display accessible Carbon Footprint exports for a billing account and help manage those exports in BigQuery; The Cloud Carbon console can display accessible Carbon Footprint exports for a billing account and help manage those exports in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/carbon-footprint/docs/export](https://docs.cloud.google.com/carbon-footprint/docs/export)
- [https://docs.cloud.google.com/carbon-footprint/docs/api](https://docs.cloud.google.com/carbon-footprint/docs/api)
- [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)

## Supporting Pages

### Export your carbon footprint \_|\_ Carbon Footprint \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/export](https://docs.cloud.google.com/carbon-footprint/docs/export)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console Take the following steps to initiate the export: Go to Carbon Footprint Select the Cloud Billing account you want to export from the Billing account menu.
- The following query lets you save the entire contents of the exported table: SELECT usage month , billing account id , project . number AS project number , project . id AS project id , service . id AS service id , service . description AS service description , location . location AS location , location . region AS region , carbon model version , carbon footprint kgCO2e . scope1 AS carbon footprint scope1 , carbon footprint kgCO2e . scope2 . location based AS carbon footprint scope2 location based , carbon footprint kgCO2e . scope3 AS carbon footprint scope3 , carbon footprint total kgCO2e . location based AS carbon footprint total location based FROM PROJECT .
- Exporting to Google Sheets or CSV After you've configured your carbon footprint export to BigQuery and the scheduled export has completed, you can export that data from BigQuery to Google Sheets or CSV.
- You can then manage each Carbon Footprint export by clicking on the transfer name to visit the BigQuery Data Transfer Service or dataset name to see the destination dataset.

### "Export and read your carbon footprint using an API \_|\_ Carbon Footprint\

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/api](https://docs.cloud.google.com/carbon-footprint/docs/api)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Costs and usage management Carbon Footprint Send feedback Stay organized with collections Save and categorize content based on your preferences.
- However, you can export your carbon footprint via the BigQuery Data Transfer Service API and then query the data using the BigQuery API.
- Export and read your carbon footprint using an API Carbon Footprint does not have a dedicated public API.
- Create an export via REST API Call the transferConfigs.create endpoint of the BigQuery Data Transfer Service API to create a transfer, using the following payload: { "dataSourceId" : "61cede5a-0000-2440-ad42-883d24f8f7b8" , "displayName" : " NAME " , "params" : { "billing accounts" : " BILLING ACCOUNT IDS " }, "destinationDatasetId" : " DATASET " } Replace: NAME with your transfer config name.

### View Carbon Footprint data \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View Carbon Footprint data The Carbon Footprint dashboard displays estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account.
- Home Documentation Costs and usage management Carbon Footprint Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Carbon footprint data is given in metric tons of CO 2 equivalent (tCO 2 e) in the UI dashboard and in kilograms of CO 2 equivalent (kgCO 2 e) in the data export.
- Accessing the Carbon Footprint dashboard The Carbon Footprint dashboard is located in the Tools section within Google Cloud console.


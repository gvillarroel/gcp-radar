---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:11:36.357Z"
product_name: "Carbon Footprint"
product_slug: "carbon-footprint"
feature_name: "Cloud Carbon console data export experience"
feature_slug: "cloud-carbon-console-data-export-experience"
latest_feature_date: "2026-02-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/carbon-footprint/docs/api"
  - "https://docs.cloud.google.com/carbon-footprint/docs/export"
  - "https://docs.cloud.google.com/carbon-footprint/docs/release-notes"
keywords:
  - "experience"
  - "export"
  - "offers"
  - "now"
  - "an"
  - "console"
  - "carbon"
  - "the"
---

# Cloud Carbon console data export experience

Product: Carbon Footprint
Coverage: LOW

## Step 02 Summary

The Cloud Carbon console now offers an improved data export experience in Public Preview, letting users with permissions view billing-account-specific Carbon Footprint exports directly in the console; The Cloud Carbon console introduced an improved data export experience in Experimental Preview, adding billing-account-specific export visibility and in-console export creation to better manage Carbon Footprint BigQuery exports.

## Extended Definition

The Cloud Carbon console now offers an improved data export experience in Public Preview, letting users with permissions view billing-account-specific Carbon Footprint exports directly in the console; The Cloud Carbon console introduced an improved data export experience in Experimental Preview, adding billing-account-specific export visibility and in-console export creation to better manage Carbon Footprint BigQuery exports.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/carbon-footprint/docs/api](https://docs.cloud.google.com/carbon-footprint/docs/api)
- [https://docs.cloud.google.com/carbon-footprint/docs/export](https://docs.cloud.google.com/carbon-footprint/docs/export)
- [https://docs.cloud.google.com/carbon-footprint/docs/release-notes](https://docs.cloud.google.com/carbon-footprint/docs/release-notes)

## Supporting Pages

### "Export and read your carbon footprint using an API \_|\_ Carbon Footprint\

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/api](https://docs.cloud.google.com/carbon-footprint/docs/api)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: company carbon report Once the transfer config is created, carbon data will automatically be exported on the 15th of the month for all future months.
- However, you can export your carbon footprint via the BigQuery Data Transfer Service API and then query the data using the BigQuery API.
- Create an export via REST API Call the transferConfigs.create endpoint of the BigQuery Data Transfer Service API to create a transfer, using the following payload: { "dataSourceId" : "61cede5a-0000-2440-ad42-883d24f8f7b8" , "displayName" : " NAME " , "params" : { "billing accounts" : " BILLING ACCOUNT IDS " }, "destinationDatasetId" : " DATASET " } Replace: NAME with your transfer config name.
- Run a backfill of historical data via REST API To export historical carbon data for an existing transfer config (see above), you must request a backfill on your transfer config.

### Export your carbon footprint \_|\_ Carbon Footprint \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/export](https://docs.cloud.google.com/carbon-footprint/docs/export)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Console Take the following steps to initiate the export: Go to Carbon Footprint Select the Cloud Billing account you want to export from the Billing account menu.
- Exporting to Google Sheets or CSV After you've configured your carbon footprint export to BigQuery and the scheduled export has completed, you can export that data from BigQuery to Google Sheets or CSV.
- You can then manage each Carbon Footprint export by clicking on the transfer name to visit the BigQuery Data Transfer Service or dataset name to see the destination dataset.
- For example: XXXXXX-XXXXXX-XXXXXX,XXXXXX-XXXXXX-XXXXXX The transfer config has now been created and will export data on the 15th of every future month.

### Carbon Footprint release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/release-notes](https://docs.cloud.google.com/carbon-footprint/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- October 01, 2025 Feature Cloud Carbon Footprint launched an improved data export experience in the Cloud Carbon console, now available in Experimental Preview.
- When you click Data export on the Cloud Carbon console Ul for a given billing account, you can now see Carbon Footprint exports that you have access to for that billing account, in addition to the ability to create a new data export.
- February 27, 2026 Feature The improved data export experience in the Cloud Carbon console is now available in Public Preview .
- Scope 2 market-based emissions data is available only from January 2023 onwards and can be accessed in: The console Dashboard on the Market-based emissions tab , and The BigQuery export as field carbon footprint kgCO2e.scope2.market based in the export data schema .


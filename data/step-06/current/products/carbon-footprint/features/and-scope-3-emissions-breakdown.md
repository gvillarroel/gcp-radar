---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:11:36.369Z"
product_name: "Carbon Footprint"
product_slug: "carbon-footprint"
feature_name: "and Scope 3 emissions breakdown"
feature_slug: "and-scope-3-emissions-breakdown"
latest_feature_date: "2022-07-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/carbon-footprint/docs/methodology"
  - "https://docs.cloud.google.com/carbon-footprint/docs/release-notes"
  - "https://docs.cloud.google.com/carbon-footprint/docs/export"
keywords:
  - "breakdown"
  - "introduced"
  - "reporting"
  - "emissions"
  - "scope"
  - "footprint"
  - "carbon"
  - "and"
---

# and Scope 3 emissions breakdown

Product: Carbon Footprint
Coverage: LOW

## Step 02 Summary

Carbon Footprint introduced reporting of emissions broken down by scope 1, scope 2, and scope 3 categories following the GHG Protocol.

## Extended Definition

Carbon Footprint introduced reporting of emissions broken down by scope 1, scope 2, and scope 3 categories following the GHG Protocol.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- [https://docs.cloud.google.com/carbon-footprint/docs/release-notes](https://docs.cloud.google.com/carbon-footprint/docs/release-notes)
- [https://docs.cloud.google.com/carbon-footprint/docs/export](https://docs.cloud.google.com/carbon-footprint/docs/export)

## Supporting Pages

### Carbon Footprint reporting methodology \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To allocate company-wide emissions from non-electricity sources to the customer-specific breakdowns in Carbon Footprint reports, we establish an allocation factor – a ratio of the customer's Google Cloud electricity use to the total Google Cloud electricity use – and multiply that factor by the worldwide Google Cloud emissions from each source, determined as described here.
- Boundaries The Carbon Footprint report encompasses emissions arising from the following activities: Scope 1 Fossil fuels combusted on-site, such as diesel for backup power, natural gas for heating, and fuels used in fleet vehicles.
- Carbon Footprint reporting methodology This page explains the background, high-level methodology, and technical details behind the customer-specific greenhouse gas emissions reports provided by Carbon Footprint.
- In addition to the different ways that location-based and market-based emissions data account for Google's carbon-free electricity purchases, Carbon Footprint also uses different granularity levels of the emission factors when estimating location-based and market-based emissions: Hourly greenhouse gas emission factors are used to calculate location-based emissions.

### Carbon Footprint release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/release-notes](https://docs.cloud.google.com/carbon-footprint/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature Carbon Footprint now reports carbon emissions broken down by scope 1, scope 2, and scope 3 categories, following the Greenhouse Gas (GHG) Protocol carbon reporting standards .
- August 14, 2025 Change For the July 2025 semi-annual methodology refresh (released in mid-August 2025), we implemented the following improvements and updated the carbon model to version 14: Updating Scope 1 & 3 emissions from Google's corporate footprint : Updated Scope 1 & 3 allocation factors using latest Google company-wide data from 2025 Google Environmental Report .
- For the July 2024 data release (in mid-August 2024), we have upgraded the carbon model to version 11 and implemented the following updates: Updating Scope 1 & 3 emissions from Google's corporate footprint : Updated Scope 1 & 3 allocation factors using latest Google company-wide data from 2024 Google Environmental Report .
- Scope 2 market-based emissions data is available only from January 2023 onwards and can be accessed in: The console Dashboard on the Market-based emissions tab , and The BigQuery export as field carbon footprint kgCO2e.scope2.market based in the export data schema .

### Export your carbon footprint \_|\_ Carbon Footprint \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/export](https://docs.cloud.google.com/carbon-footprint/docs/export)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following query lets you save the entire contents of the exported table: SELECT usage month , billing account id , project . number AS project number , project . id AS project id , service . id AS service id , service . description AS service description , location . location AS location , location . region AS region , carbon model version , carbon footprint kgCO2e . scope1 AS carbon footprint scope1 , carbon footprint kgCO2e . scope2 . location based AS carbon footprint scope2 location based , carbon footprint kgCO2e . scope3 AS carbon footprint scope3 , carbon footprint total kgCO2e . location based AS carbon footprint total location based FROM PROJECT .
- Exporting to Google Sheets or CSV After you've configured your carbon footprint export to BigQuery and the scheduled export has completed, you can export that data from BigQuery to Google Sheets or CSV.
- The Carbon Footprint export captures estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account.
- Home Documentation Costs and usage management Carbon Footprint Send feedback Stay organized with collections Save and categorize content based on your preferences.


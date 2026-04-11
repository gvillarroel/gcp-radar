---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:11:36.368Z"
product_name: "Carbon Footprint"
product_slug: "carbon-footprint"
feature_name: "Scope 2 market-based emissions metric"
feature_slug: "scope-2-market-based-emissions-metric"
latest_feature_date: "2024-04-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/carbon-footprint/docs/release-notes"
  - "https://docs.cloud.google.com/carbon-footprint/docs/methodology"
  - "https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data"
keywords:
  - "market"
  - "metric"
  - "based"
  - "added"
  - "emissions"
  - "scope"
  - "footprint"
  - "carbon"
---

# Scope 2 market-based emissions metric

Product: Carbon Footprint
Coverage: LOW

## Step 02 Summary

Carbon Footprint added Scope 2 market-based emissions data in Preview, exposing it in the console Market-based emissions tab and as the BigQuery field carbon_footprint_kgCO2e.scope2.market_based.

## Extended Definition

Carbon Footprint added Scope 2 market-based emissions data in Preview, exposing it in the console Market-based emissions tab and as the BigQuery field carbon_footprint_kgCO2e.scope2.market_based.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/carbon-footprint/docs/release-notes](https://docs.cloud.google.com/carbon-footprint/docs/release-notes)
- [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)

## Supporting Pages

### Carbon Footprint release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/release-notes](https://docs.cloud.google.com/carbon-footprint/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scope 2 market-based emissions data is available only from January 2023 onwards and can be accessed in: The console Dashboard on the Market-based emissions tab , and The BigQuery export as field carbon footprint kgCO2e.scope2.market based in the export data schema .
- Scope 2 market-based emissions data is available only from January 2023 onwards and can be accessed in: The console Dashboard on the Market-based emissions tab , and The BigQuery export as field carbon footprint kgCO2e.scope2.market based in the export data schema .
- September 12, 2025 Fixed We have corrected an issue affecting the market-based Scope 2 emissions for the europe-west2 (London) region in the July 2025 Carbon Footprint data.
- Notably, expanded the Scope 1 & 3 inventory boundary to include the following for a more comprehensive emissions inventory: HVAC fugitive emissions Additional emissions categories of transmission & distribution (T&D) loss Extraction and transportation of fuels used to generate grid electricity Updating renewable electricity percentage for Scope 2 market-based emissions from Google's corporate footprint : Updated annual renewable electricity percentage from Google's clean energy procurement, in accordance with 2024 Google Environmental Report , as an input for Scope 2 market-based emissions.

### Carbon Footprint reporting methodology \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition to the different ways that location-based and market-based emissions data account for Google's carbon-free electricity purchases, Carbon Footprint also uses different granularity levels of the emission factors when estimating location-based and market-based emissions: Hourly greenhouse gas emission factors are used to calculate location-based emissions.
- Then, Carbon Footprint calculates location-based and market-based carbon emissions from electricity use, and allocates those emissions across customers and further across each customer's purchased products.
- Market-based scope 2 emissions data includes the impact of Google's carbon-free electricity purchases to the appropriate data centers according to the GHGP's market-based method and standards.
- Google Cloud customers seeking to compile annual Scope 3 emissions inventories for their own products and services will likely find the market-based footprint most useful.

### View Carbon Footprint data \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Charts To dig deeper into the specifics of your carbon emissions, the dashboard includes four charts: Monthly carbon emissions (in both market-based emissions tab and location-based emissions tab) : Displays the total estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account over all available months, broken down by month.
- Carbon emissions by region (in both market-based emissions tab and location-based emissions tab) : Displays the estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account for the past complete month broken down by Google Cloud region.
- In summary: Market-based emissions : This tab displays emissions data broken down by scope 1, scope 2 market-based, and scope 3 GHG emissions.
- Learn more about scope 2 market-based emissions methodology .


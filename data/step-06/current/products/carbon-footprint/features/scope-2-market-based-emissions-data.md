---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:44.245Z"
product_name: "Carbon Footprint"
product_slug: "carbon-footprint"
feature_name: "Scope 2 market-based emissions data"
feature_slug: "scope-2-market-based-emissions-data"
latest_feature_date: "2024-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data"
  - "https://docs.cloud.google.com/carbon-footprint/docs/methodology"
  - "https://docs.cloud.google.com/carbon-footprint/docs/export"
keywords:
  - "scope"
  - "market"
  - "based"
  - "emissions"
  - "carbon"
  - "footprint"
  - "provides"
  - "console"
---

# Scope 2 market-based emissions data

Product: Carbon Footprint
Coverage: MEDIUM

## Step 02 Summary

Carbon Footprint provides Scope 2 market-based emissions data in the console and BigQuery export using Google's renewable energy purchasing methodology.

## Extended Definition

Carbon Footprint provides Scope 2 market-based emissions data in the console and BigQuery export using Google's renewable energy purchasing methodology.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)
- [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- [https://docs.cloud.google.com/carbon-footprint/docs/export](https://docs.cloud.google.com/carbon-footprint/docs/export)

## Supporting Pages

### View Carbon Footprint data \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Charts To dig deeper into the specifics of your carbon emissions, the dashboard includes four charts: Monthly carbon emissions (in both market-based emissions tab and location-based emissions tab) : Displays the total estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account over all available months, broken down by month.
- Carbon emissions by region (in both market-based emissions tab and location-based emissions tab) : Displays the estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account for the past complete month broken down by Google Cloud region.
- Recommendations Carbon Footprint has integrated with Google Cloud Active Assist Unattended Project Recommender, which analyzes usage activity across all projects, provides you with the recommendations to reclaim or shut down unattended projects, and helps you reduce both cost and carbon emissions.
- In summary: Market-based emissions : This tab displays emissions data broken down by scope 1, scope 2 market-based, and scope 3 GHG emissions.

### Carbon Footprint reporting methodology \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition to the different ways that location-based and market-based emissions data account for Google's carbon-free electricity purchases, Carbon Footprint also uses different granularity levels of the emission factors when estimating location-based and market-based emissions: Hourly greenhouse gas emission factors are used to calculate location-based emissions.
- Then, Carbon Footprint calculates location-based and market-based carbon emissions from electricity use, and allocates those emissions across customers and further across each customer's purchased products.
- Market-based scope 2 emissions data includes the impact of Google's carbon-free electricity purchases to the appropriate data centers according to the GHGP's market-based method and standards.
- Google Cloud customers seeking to compile annual Scope 3 emissions inventories for their own products and services will likely find the market-based footprint most useful.

### Export your carbon footprint \_|\_ Carbon Footprint \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/export](https://docs.cloud.google.com/carbon-footprint/docs/export)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following query lets you save the entire contents of the exported table: SELECT usage month , billing account id , project . number AS project number , project . id AS project id , service . id AS service id , service . description AS service description , location . location AS location , location . region AS region , carbon model version , carbon footprint kgCO2e . scope1 AS carbon footprint scope1 , carbon footprint kgCO2e . scope2 . location based AS carbon footprint scope2 location based , carbon footprint kgCO2e . scope3 AS carbon footprint scope3 , carbon footprint total kgCO2e . location based AS carbon footprint total location based FROM PROJECT .
- The Carbon Footprint export captures estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account.
- Home Documentation Costs and usage management Carbon Footprint Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Console Take the following steps to initiate the export: Go to Carbon Footprint Select the Cloud Billing account you want to export from the Billing account menu.


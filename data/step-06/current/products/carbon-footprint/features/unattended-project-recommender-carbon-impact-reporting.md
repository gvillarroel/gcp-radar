---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:11:36.374Z"
product_name: "Carbon Footprint"
product_slug: "carbon-footprint"
feature_name: "Unattended project recommender carbon impact reporting"
feature_slug: "unattended-project-recommender-carbon-impact-reporting"
latest_feature_date: "2022-01-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/carbon-footprint/docs/release-notes"
  - "https://docs.cloud.google.com/carbon-footprint/docs/methodology"
  - "https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data"
keywords:
  - "recommender"
  - "unattended"
  - "project"
  - "started"
  - "impact"
  - "reporting"
  - "carbon"
  - "the"
---

# Unattended project recommender carbon impact reporting

Product: Carbon Footprint
Coverage: LOW

## Step 02 Summary

The Unattended project recommender started showing associated gross carbon footprint reduction directly in the Carbon Footprint dashboard when recommendations are available.

## Extended Definition

The Unattended project recommender started showing associated gross carbon footprint reduction directly in the Carbon Footprint dashboard when recommendations are available.

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
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- January 11, 2022 Feature Unattended project recommender now reports the reduction in gross carbon footprint associated with your workloads.
- In our BigQuery data exports , there were instances where the project id field contained a NULL value, and in some of these cases, carbon for a particular project was split between two rows where the project ID was listed as NULL and non-NULL. (Note that the project number field is always populated, and the total carbon when summed across all rows is correct for a given project number.) We have updated our reports for all prior months in order to populate the project id field consistently, with a non-NULL value wherever possible.
- Deprecating carbon offsets fields from schema : The carbon offsets kgCO2e and carbon footprint total kgCO2e.after offsets fields have been deprecated in the Carbon Footprint schema due to Google's strategic shift from traditional carbon offsets to a direct focus on carbon removal technologies and projects.
- According to our methodology ( Technical details - Electricity use ), these internal costs are used to apportion electricity consumption and carbon emissions to services, so changes in cost apportionment result in corresponding changes to carbon apportionment and reporting for that service.

### Carbon Footprint reporting methodology \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Behind the methodology Carbon Footprint reports are prepared according to the widely recognized Greenhouse Gas Protocol carbon reporting and accounting standards (GHGP), which provide detailed guidance for emission reports.
- The resulting report includes a customer specific location-based electricity carbon footprint that is totalized overall per month, with breakdowns per Google Cloud product, per customer-defined project, and per region.
- Carbon Footprint reporting methodology This page explains the background, high-level methodology, and technical details behind the customer-specific greenhouse gas emissions reports provided by Carbon Footprint.
- On an annual basis, Google collects all relevant records and sums its total data center fuels use and calculates the resulting carbon footprint as part of its annual emission reporting process.

### View Carbon Footprint data \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Recommendations Carbon Footprint has integrated with Google Cloud Active Assist Unattended Project Recommender, which analyzes usage activity across all projects, provides you with the recommendations to reclaim or shut down unattended projects, and helps you reduce both cost and carbon emissions.
- Carbon emissions by project (only in the location-based emissions tab) : Displays the estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account for the past complete month broken down by Google Cloud project.
- If your billing account has associated projects that are deemed "unattended", you will see the "Recommendations to reduce emissions" card next to your annual and monthly summary cards.
- Charts To dig deeper into the specifics of your carbon emissions, the dashboard includes four charts: Monthly carbon emissions (in both market-based emissions tab and location-based emissions tab) : Displays the total estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account over all available months, broken down by month.


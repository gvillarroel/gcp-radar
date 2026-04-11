---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:11:36.372Z"
product_name: "Carbon Footprint"
product_slug: "carbon-footprint"
feature_name: "Carbon Footprint Looker block"
feature_slug: "carbon-footprint-looker-block"
latest_feature_date: "2022-01-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/carbon-footprint/docs/custom-dashboard"
  - "https://docs.cloud.google.com/carbon-footprint/docs/release-notes"
  - "https://docs.cloud.google.com/carbon-footprint/docs/methodology"
keywords:
  - "looker"
  - "became"
  - "block"
  - "build"
  - "available"
  - "to"
  - "footprint"
  - "carbon"
---

# Carbon Footprint Looker block

Product: Carbon Footprint
Coverage: LOW

## Step 02 Summary

A Carbon Footprint Looker block became available to build custom dashboards for Carbon Footprint analytics in Looker.

## Extended Definition

A Carbon Footprint Looker block became available to build custom dashboards for Carbon Footprint analytics in Looker.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/carbon-footprint/docs/custom-dashboard](https://docs.cloud.google.com/carbon-footprint/docs/custom-dashboard)
- [https://docs.cloud.google.com/carbon-footprint/docs/release-notes](https://docs.cloud.google.com/carbon-footprint/docs/release-notes)
- [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)

## Supporting Pages

### "Create a custom dashboard or analysis for your Carbon Footprint data \_\

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/custom-dashboard](https://docs.cloud.google.com/carbon-footprint/docs/custom-dashboard)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export your carbon footprint to BigQuery Install the Carbon Footprint block Estimate emissions data at different granularity by joining Carbon Footprint data with Cloud Billing data You can combine your Carbon Footprint export data with your Cloud Billing export data to view your carbon You can combine your Carbon Footprint export data with your Cloud Billing export data to view your carbon emissions at different levels of granularity.
- Export your carbon footprint to BigQuery Create a new Looker Studio report Connect to BigQuery by selecting the dataset you previously chose when configuring the Carbon Footprint export.
- Use Looker Studio Follow these steps to create a custom Looker Studio report for your Carbon Footprint data.
- Use Looker Follow these steps to create a custom Looker dashboard for your Carbon Footprint data.

### Carbon Footprint release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/release-notes](https://docs.cloud.google.com/carbon-footprint/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Change Updated carbon model to version 4 Fixed Improved carbon accounting for many AI services (these services aren't covered in 2021) January 20, 2022 Feature A Carbon Footprint Looker block is available to create custom dashboards using Looker .
- October 01, 2025 Feature Cloud Carbon Footprint launched an improved data export experience in the Cloud Carbon console, now available in Experimental Preview.
- Remove Looker, Apigee, Chronicle, and AppSheet from covered services of Carbon Footprint, due to potential mis-attribution of carbon to these services.
- October 11, 2022 Announcement Google Cloud Carbon Footprint is now Generally Available.

### Carbon Footprint reporting methodology \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Carbon Footprint builds its calculations from bottom-to-top, relying heavily on machine-level power and activity monitoring inside Google data centers.
- This allocation is solved as a series of equations that satisfy the following principles: SKUs for a given internal service deployed in the same location have carbon footprints that are proportional to their list price A specific SKU for a specific internal service, deployed in multiple locations, has different carbon footprints in each location, proportional to the grid carbon intensity in each location The aggregated footprint of all the SKUs within each internal service is equal to the total carbon footprint of the internal service, plus some overhead for certain activities that are not accounted for in the internal service allocations described above.
- To allocate company-wide emissions from non-electricity sources to the customer-specific breakdowns in Carbon Footprint reports, we establish an allocation factor – a ratio of the customer's Google Cloud electricity use to the total Google Cloud electricity use – and multiply that factor by the worldwide Google Cloud emissions from each source, determined as described here.
- In addition to the different ways that location-based and market-based emissions data account for Google's carbon-free electricity purchases, Carbon Footprint also uses different granularity levels of the emission factors when estimating location-based and market-based emissions: Hourly greenhouse gas emission factors are used to calculate location-based emissions.


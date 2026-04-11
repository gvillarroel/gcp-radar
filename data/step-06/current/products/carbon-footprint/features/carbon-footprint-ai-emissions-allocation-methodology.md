---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:11:36.358Z"
product_name: "Carbon Footprint"
product_slug: "carbon-footprint"
feature_name: "Carbon Footprint AI emissions allocation methodology"
feature_slug: "carbon-footprint-ai-emissions-allocation-methodology"
latest_feature_date: "2026-02-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/carbon-footprint/docs/methodology"
  - "https://docs.cloud.google.com/carbon-footprint/docs/release-notes"
  - "https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data"
keywords:
  - "methodology"
  - "allocation"
  - "updated"
  - "its"
  - "ai"
  - "emissions"
  - "footprint"
  - "carbon"
---

# Carbon Footprint AI emissions allocation methodology

Product: Carbon Footprint
Coverage: LOW

## Step 02 Summary

Carbon Footprint updated its emissions calculation model in January 2026 data to allocate AI inference model emissions to associated Google Cloud services using SKU-level allocation for more transparent AI-related emissions accounting.

## Extended Definition

Carbon Footprint updated its emissions calculation model in January 2026 data to allocate AI inference model emissions to associated Google Cloud services using SKU-level allocation for more transparent AI-related emissions accounting.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- [https://docs.cloud.google.com/carbon-footprint/docs/release-notes](https://docs.cloud.google.com/carbon-footprint/docs/release-notes)
- [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)

## Supporting Pages

### Carbon Footprint reporting methodology \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/methodology](https://docs.cloud.google.com/carbon-footprint/docs/methodology)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Allocation to SKUs and customers Each internal service's location-based emissions are allocated to Google Cloud product units available for customer purchase (SKUs), and then the SKU location-based footprints are aggregated to Google Cloud product for the purpose of customer reports.
- Carbon Footprint reporting methodology This page explains the background, high-level methodology, and technical details behind the customer-specific greenhouse gas emissions reports provided by Carbon Footprint.
- To give customers a report tailored to their specific carbon footprint, Google looks at the carbon emissions produced by the computing infrastructure supporting its internal services.
- This allocation is solved as a series of equations that satisfy the following principles: SKUs for a given internal service deployed in the same location have carbon footprints that are proportional to their list price A specific SKU for a specific internal service, deployed in multiple locations, has different carbon footprints in each location, proportional to the grid carbon intensity in each location The aggregated footprint of all the SKUs within each internal service is equal to the total carbon footprint of the internal service, plus some overhead for certain activities that are not accounted for in the internal service allocations described above.

### Carbon Footprint release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/release-notes](https://docs.cloud.google.com/carbon-footprint/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- August 14, 2025 Change For the July 2025 semi-annual methodology refresh (released in mid-August 2025), we implemented the following improvements and updated the carbon model to version 14: Updating Scope 1 & 3 emissions from Google's corporate footprint : Updated Scope 1 & 3 allocation factors using latest Google company-wide data from 2025 Google Environmental Report .
- This update allocates previously unallocated AI inference model emissions to the associated Google Cloud services, following the SKU-level allocation described in the Carbon Footprint reporting methodology .
- For the July 2024 data release (in mid-August 2024), we have upgraded the carbon model to version 11 and implemented the following updates: Updating Scope 1 & 3 emissions from Google's corporate footprint : Updated Scope 1 & 3 allocation factors using latest Google company-wide data from 2024 Google Environmental Report .
- According to our methodology ( Technical details - Electricity use ), these internal costs are used to apportion electricity consumption and carbon emissions to services, so changes in cost apportionment result in corresponding changes to carbon apportionment and reporting for that service.

### View Carbon Footprint data \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data](https://docs.cloud.google.com/carbon-footprint/docs/view-carbon-data)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Recommendations Carbon Footprint has integrated with Google Cloud Active Assist Unattended Project Recommender, which analyzes usage activity across all projects, provides you with the recommendations to reclaim or shut down unattended projects, and helps you reduce both cost and carbon emissions.
- Charts To dig deeper into the specifics of your carbon emissions, the dashboard includes four charts: Monthly carbon emissions (in both market-based emissions tab and location-based emissions tab) : Displays the total estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account over all available months, broken down by month.
- Carbon footprint for the past month : The total estimated greenhouse gas emissions associated with the usage of covered Google Cloud services for the selected billing account for the most recent completed month, compared to the previous month.
- Understand the methodology behind Carbon Footprint Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .


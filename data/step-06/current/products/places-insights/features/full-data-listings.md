---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.198Z"
product_name: "Places Insights"
product_slug: "places-insights"
feature_name: "Full data listings"
feature_slug: "full-data-listings"
latest_feature_date: "2025-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/placesinsights/migration-guide"
  - "https://developers.google.com/maps/documentation/placesinsights/about-data"
  - "https://developers.google.com/maps/documentation/placesinsights/support"
  - "https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview"
keywords:
  - "full"
  - "listings"
  - "are"
  - "available"
  - "for"
  - "all"
  - "supported"
  - "countries"
---

# Full data listings

Product: Places Insights
Coverage: MEDIUM

## Step 02 Summary

Full data listings are available for all supported countries.

## Extended Definition

Full data listings are available for all supported countries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/placesinsights/migration-guide](https://developers.google.com/maps/documentation/placesinsights/migration-guide)
- [https://developers.google.com/maps/documentation/placesinsights/about-data](https://developers.google.com/maps/documentation/placesinsights/about-data)
- [https://developers.google.com/maps/documentation/placesinsights/support](https://developers.google.com/maps/documentation/placesinsights/support)
- [https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview](https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview)

## Supporting Pages

### Migration guide \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/migration-guide](https://developers.google.com/maps/documentation/placesinsights/migration-guide)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Non-array fields In this release, the id and name fields are now top-level STRING fields for non-array address fields: administrative area level 1 id STRING administrative area level 1 name STRING This new format applies to all fields in the form administrative area level N , where N is 1 through 7.
- New users: If you are a new user of Places Insights, follow the steps in Set up Places Insights to configure your development environment for access to the listings.
- Note: Not all administrative area level N fields are available in every country.
- Note: Not all fields are available in every country.

### About Places Insights data and queries \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/about-data](https://developers.google.com/maps/documentation/placesinsights/about-data)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The sample listing includes data for a top city for each of the supported countries: Amsterdam (NL) Helsinki (FI) Plovdiv (BG) Ankara (TR) Hong Kong (HK) Riffa (BH) Arequipa (PE) Jakarta (ID) Rome (IT) Athens (GR) Jeddah (SA) Santiago (CL) Bad Gastein (AT) Johannesburg (ZA) Sao Paulo (BR) Berlin (DE) Kuala Lumpur (MY) Sharjah (AE) Brno (CZ) Lisbon (PT) Singapore (SG) Brussels (BE) London (GB) Stockholm (SE) Bucharest (RO) Lusail (QA) Sydney (AU) Buenos Aires (AR) Madrid (ES) Taipei (TW) Busan (KR) Manila (PH) Tel Aviv-Yafo (IL) Cairo (EG) Medellín (CO) Tokyo (JP) Chiang Mai (TH) Mexico City (MX) Toronto (CA) Copenhagen (DK) Mumbai (IN) Warsaw (PL) Cork (IE) New York City (US) Wellington (NZ) Debrecen (HU) Oslo (NO) Zurich (CH) Hanoi (VN) Paris (FR) The full datasets include data for each supported country and must be purchased.
- The sample datasets are intended to allow you to try out Places Insights so that you can assess the usability and value of the product before making a decision to purchase the full dataset.
- Supported attribute filters Places Count function filter parameters support the same as the direct query attribute filters except for: Place id Address components Opening hours EV charge options Brands Full schema supported.
- Dataset schemas The places dataset schema for each country is comprised of two parts: The core schema that is common to the datasets for all countries.

### Support options for Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/support](https://developers.google.com/maps/documentation/placesinsights/support)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Support response times Support response times are indicated in the table below (resolution times may vary): Priority level Example situations Standard Support response time Enhanced Support response time Critical Impact - Service Unusable in Production Applies only to Google Maps Platform services marked as General Availability Your situation matches all the following criteria: Your product or service is unusable in production, or business impact is critical (for example, revenue loss).
- You are automatically assigned the Project Owner role for this project.
- Report an issue or feature request If you think you may have found a bug, or if you have a feature request that you would like to share with the Google Maps Platform team, please file a bug or feature request in our issue tracker .
- Since you are the Project Owner for this new project, you have access to Google Maps Platform API support case creation from that new project and can make inquiries about the billing account attached to it.

### Historical data overview \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview](https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT WITH AGGREGATION THRESHOLD snapshot date , COUNT ( ) AS count FROM PROJECT NAME .places insights historical us.places historical WHERE 'restaurant' IN UNNEST ( types ) AND business status = "OPERATIONAL" GROUP BY snapshot date ORDER BY snapshot date ASC ; Available listings The following table lists the supported cities and provides links to subscribe.
- This data is useful for performing trends analysis to understand how the places in an area have changed from month to month.
- Setup Note: Historical data is only available to a select number of testers for experimental testing purposes only.
- Historical Places Insights data is available for the cities listed in the table below .


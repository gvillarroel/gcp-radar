---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.196Z"
product_name: "Places Insights"
product_slug: "places-insights"
feature_name: "Places Insights supported countries"
feature_slug: "places-insights-supported-countries"
latest_feature_date: "2026-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview"
  - "https://developers.google.com/maps/documentation/placesinsights/reference/supported-locations"
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries"
  - "https://developers.google.com/maps/documentation/placesinsights/about-data"
keywords:
  - "places"
  - "insights"
  - "supported"
  - "countries"
  - "is"
  - "available"
  - "for"
  - "36"
---

# Places Insights supported countries

Product: Places Insights
Coverage: MEDIUM

## Step 02 Summary

Places Insights data is available for 36 additional countries.

## Extended Definition

Places Insights data is available for 36 additional countries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview](https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview)
- [https://developers.google.com/maps/documentation/placesinsights/reference/supported-locations](https://developers.google.com/maps/documentation/placesinsights/reference/supported-locations)
- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries)
- [https://developers.google.com/maps/documentation/placesinsights/about-data](https://developers.google.com/maps/documentation/placesinsights/about-data)

## Supporting Pages

### Historical data overview \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview](https://developers.google.com/maps/documentation/placesinsights/experimental/historical-data-overview)
- Source ID: `site-api-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT WITH AGGREGATION THRESHOLD snapshot date , COUNT ( ) AS count FROM PROJECT NAME .places insights historical us.places historical WHERE 'restaurant' IN UNNEST ( types ) AND business status = "OPERATIONAL" GROUP BY snapshot date ORDER BY snapshot date ASC ; Available listings The following table lists the supported cities and provides links to subscribe.
- Historical Places Insights data is available for the cities listed in the table below .
- Home Products Google Maps Platform Documentation Places Insights Experimental Send feedback Historical data overview Stay organized with collections Save and categorize content based on your preferences.
- Schema The schema for historical Places Insights data is the same as for the latest data (see Places Insights reference ), with the following exceptions.

### "Supported locations and table names \_|\_ Places Insights \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/placesinsights/reference/supported-locations](https://developers.google.com/maps/documentation/placesinsights/reference/supported-locations)
- Source ID: `site-api-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation Web Services Places Insights Reference Send feedback Supported locations and table names Stay organized with collections Save and categorize content based on your preferences.
- FUNCTION NAME places insights vn.places Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following tables list the cities available as sample data, the countries available as full data, and their corresponding table names.
- FUNCTION NAME places insights ca sample.places sample Paris, France places insights fr sample.

### "Query the dataset using Places Count functions \_|\_ Places Insights \_\

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information and example on visualizing Places Insights results, see Visualize query results .
- Supported Places Count functions and countries This product or feature is in Preview (pre-GA).
- Home Products Google Maps Platform Documentation Web Services Places Insights Send feedback Query the dataset using Places Count functions Stay organized with collections Save and categorize content based on your preferences.
- Places Count functions only provide counts, so if you need to perform more complex queries such as data joins, or get additional insights such as the average rating of a group of places, then query the dataset directly .

### About Places Insights data and queries \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/about-data](https://developers.google.com/maps/documentation/placesinsights/about-data)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The sample listing includes data for a top city for each of the supported countries: Amsterdam (NL) Helsinki (FI) Plovdiv (BG) Ankara (TR) Hong Kong (HK) Riffa (BH) Arequipa (PE) Jakarta (ID) Rome (IT) Athens (GR) Jeddah (SA) Santiago (CL) Bad Gastein (AT) Johannesburg (ZA) Sao Paulo (BR) Berlin (DE) Kuala Lumpur (MY) Sharjah (AE) Brno (CZ) Lisbon (PT) Singapore (SG) Brussels (BE) London (GB) Stockholm (SE) Bucharest (RO) Lusail (QA) Sydney (AU) Buenos Aires (AR) Madrid (ES) Taipei (TW) Busan (KR) Manila (PH) Tel Aviv-Yafo (IL) Cairo (EG) Medellín (CO) Tokyo (JP) Chiang Mai (TH) Mexico City (MX) Toronto (CA) Copenhagen (DK) Mumbai (IN) Warsaw (PL) Cork (IE) New York City (US) Wellington (NZ) Debrecen (HU) Oslo (NO) Zurich (CH) Hanoi (VN) Paris (FR) The full datasets include data for each supported country and must be purchased.
- The sample datasets are intended to allow you to try out Places Insights so that you can assess the usability and value of the product before making a decision to purchase the full dataset.
- Dataset schemas The places dataset schema for each country is comprised of two parts: The core schema that is common to the datasets for all countries.
- For more information on subscribing to a listing, see Set up Places Insights .


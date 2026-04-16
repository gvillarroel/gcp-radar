---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.197Z"
product_name: "Places Insights"
product_slug: "places-insights"
feature_name: "PLACES_COUNT_PER_H3 function"
feature_slug: "places-count-per-h3-function"
latest_feature_date: "2026-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3"
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo"
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type"
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2"
keywords:
  - "places"
  - "count"
  - "per"
  - "h3"
  - "function"
  - "place"
  - "that"
  - "now"
---

# PLACES_COUNT_PER_H3 function

Product: Places Insights
Coverage: MEDIUM

## Step 02 Summary

A Place Count function that now supports H3 resolutions up to 11.

## Extended Definition

A Place Count function that now supports H3 resolutions up to 11.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3)
- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo)
- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type)
- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2)

## Supporting Pages

### PLACES_COUNT_PER_H3 function \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3)
- Source ID: `site-docs-reference`
- Final score: 455
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SET geo = ( SELECT geometry FROM bigquery-public-data.overture maps.division area WHERE country = 'US' AND subtype = 'locality' AND names . primary = 'New York' LIMIT 1 ); SELECT FROM PROJECT NAME .places insights us.PLACES COUNT PER H3 ( JSON OBJECT ( 'geography' , geo , 'types' , [ "convenience store" , "grocery store" ] , 'wheelchair accessible entrance' , true , 'business status' , [ 'OPERATIONAL' ] , 'h3 resolution' , 8 ) ); The response for the function: Visualize results The following images show this data displayed in Looker Studio as a filled map.
- Home Products Google Maps Platform Documentation Web Services Places Insights Send feedback PLACES COUNT PER H3 function Stay organized with collections Save and categorize content based on your preferences.
- The PLACES COUNT PER H3 function takes a geographic area to search and returns a table of places counts per H3 cell in the search area.
- Because the PLACES COUNT PER H3 function returns a table, call it using a FROM clause.

### PLACES_COUNT_PER_GEO function \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo)
- Source ID: `site-docs-reference`
- Final score: 360
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DECLARE geos ARRAY<GEOGRAPHY> ; SET geos = ( SELECT ARRAY AGG ( ST SIMPLIFY ( county geom , 100 )) FROM bigquery-public-data.geo us boundaries.counties WHERE county name IN ( "Queens" , "Kings" , "New York" ) AND state fips code = "36" ); SELECT FROM PROJECT NAME .places insights us.PLACES COUNT PER GEO ( JSON OBJECT ( 'geographies' , geos , 'types' , [ "restaurant" ] , 'business status' , [ "OPERATIONAL" ] ) ); The response for the function: Visualize results The following images show this data displayed in Looker Studio as a filled map, including the outline of each county: To import your data into Looker Studio: Run the function above to generate the results.
- Home Products Google Maps Platform Documentation Web Services Places Insights Send feedback PLACES COUNT PER GEO function Stay organized with collections Save and categorize content based on your preferences.
- The PLACES COUNT PER GEO function takes an array of geographic areas to search and returns a table of places counts per area.
- Because the PLACES COUNT PER GEO function returns a table, call it using a FROM clause.

### PLACES_COUNT_PER_TYPE function \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type)
- Source ID: `site-docs-reference`
- Final score: 360
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DECLARE geo GEOGRAPHY ; SET geo = ST GEOGFROMTEXT ( ' '' POLYGON((-73.985708 40.75773,-73.993324 40.750298, -73.9857 40.7484,-73.9785 40.7575, -73.985708 40.75773)) '' ' ); -- NYC viewport SELECT FROM PROJECT NAME .places insights us.PLACES COUNT PER TYPE ( JSON OBJECT ( 'types' , [ "restaurant" , "cafe" , "bar" ] , 'geography' , geo , 'business status' , [ 'OPERATIONAL' ] ) ); This function returns a table with three rows, one per type: Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Google Maps Platform Documentation Web Services Places Insights Send feedback PLACES COUNT PER TYPE function Stay organized with collections Save and categorize content based on your preferences.
- The PLACES COUNT PER TYPE function returns a table of counts for each place type specified to the function.
- Because the PLACES COUNT PER TYPE function returns a table, call it using a FROM clause.

### "PLACES_COUNT_PER_TYPE_V2 function \_|\_ Places Insights \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2)
- Source ID: `site-docs-reference`
- Final score: 346
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Output Table Schema The PLACES COUNT PER TYPE V2 function returns a table with the following columns: Column Name Data Type Description geo id STRING The unique identifier for the input geography, from the input geographies table. input geography GEOGRAPHY The original GEOGRAPHY object from the input geographies table. place type STRING The place type from the target types array this row represents. place count INTEGER The number of places matching the place type and other filters within or near the geography. sample place ids ARRAY<STRING> An array of up to 250 Place IDs that match the criteria for this type and geography.
- Benefits of Using PLACES COUNT PER TYPE V2 PLACES COUNT PER TYPE V2 offers several key advantages, particularly when compared to the older PLACES COUNT PER TYPE function: Batch Processing of Geographies: Unlike PLACES COUNT PER TYPE which processes one geography at a time, PLACES COUNT PER TYPE V2 accepts a TABLE of input geographies.
- Home Products Google Maps Platform Documentation Web Services Places Insights Send feedback PLACES COUNT PER TYPE V2 function Stay organized with collections Save and categorize content based on your preferences.
- The PLACES COUNT PER TYPE V2 function returns a BigQuery table containing place counts and sample Place IDs, broken down by place type, for multiple input geographies.


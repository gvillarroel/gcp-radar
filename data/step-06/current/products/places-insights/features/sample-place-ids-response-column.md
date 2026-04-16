---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.199Z"
product_name: "Places Insights"
product_slug: "places-insights"
feature_name: "sample_place_ids response column"
feature_slug: "sample-place-ids-response-column"
latest_feature_date: "2025-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-v2"
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2"
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo"
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3"
keywords:
  - "sample"
  - "place"
  - "ids"
  - "response"
  - "column"
  - "the"
  - "places"
  - "count"
---

# sample_place_ids response column

Product: Places Insights
Coverage: MEDIUM

## Step 02 Summary

The PLACES_COUNT_PER_TYPE, PLACES_COUNT_PER_GEO, and PLACES_COUNT_PER_H3 functions now return a sample_place_ids column with up to 250 place IDs per response element.

## Extended Definition

The PLACES_COUNT_PER_TYPE, PLACES_COUNT_PER_GEO, and PLACES_COUNT_PER_H3 functions now return a sample_place_ids column with up to 250 place IDs per response element.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-v2](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-v2)
- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2)
- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo)
- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3)

## Supporting Pages

### PLACES_COUNT_V2 function \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-v2](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-v2)
- Source ID: `site-docs-reference`
- Final score: 315
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SELECT FROM PROJECT NAME .places insights us.PLACES COUNT V2 ( ( SELECT county name AS geo id , ST SIMPLIFY ( county geom , 100 ) AS geo FROM bigquery-public-data.geo us boundaries.counties WHERE state fips code = "36" -- New York State AND county name IN ( "Queens" , "Kings" , "New York" ) ), JSON OBJECT ( 'types' , [ "restaurant" ] , 'business status' , [ 'OPERATIONAL' ] ) ); The response table will have three rows, one for each county, showing the geo id , input geography , place count , and sample place ids of operational restaurants.
- Output Table Schema The PLACES COUNT V2 function returns a table with the following columns: Column Name Data Type Description geo id STRING The unique identifier for the input geography, from the input geographies table. input geography GEOGRAPHY The original GEOGRAPHY object from the input geographies table. place count INTEGER The total number of places matching the filters. sample place ids ARRAY<STRING> An array of up to 250 Place IDs that match the criteria.
- The PLACES COUNT V2 function returns a BigQuery table containing place counts and sample Place IDs for multiple input geographies based on specified filters.
- For each geo object, it counts the number of places that fall within the geography (or within the geography radius if the geo is a point and the radius is specified in the filters ).

### "PLACES_COUNT_PER_TYPE_V2 function \_|\_ Places Insights \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2)
- Source ID: `site-docs-reference`
- Final score: 302
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Output Table Schema The PLACES COUNT PER TYPE V2 function returns a table with the following columns: Column Name Data Type Description geo id STRING The unique identifier for the input geography, from the input geographies table. input geography GEOGRAPHY The original GEOGRAPHY object from the input geographies table. place type STRING The place type from the target types array this row represents. place count INTEGER The number of places matching the place type and other filters within or near the geography. sample place ids ARRAY<STRING> An array of up to 250 Place IDs that match the criteria for this type and geography.
- The PLACES COUNT PER TYPE V2 function returns a BigQuery table containing place counts and sample Place IDs, broken down by place type, for multiple input geographies.
- SELECT geo id , input geography , place type , place count FROM PROJECT NAME .places insights us.PLACES COUNT PER TYPE V2 ( ( SELECT county name AS geo id , ST SIMPLIFY ( county geom , 100 ) AS geo FROM bigquery-public-data.geo us boundaries.counties WHERE state fips code = "36" -- New York State AND county name IN ( "Queens" , "Kings" , "New York" ) ), [ 'restaurant' , 'cafe' , 'bar' ] , -- target types JSON OBJECT ( 'business status' , [ 'OPERATIONAL' ] ) ); The result will be a table with 9 rows (3 counties 3 types).
- Benefits of Using PLACES COUNT PER TYPE V2 PLACES COUNT PER TYPE V2 offers several key advantages, particularly when compared to the older PLACES COUNT PER TYPE function: Batch Processing of Geographies: Unlike PLACES COUNT PER TYPE which processes one geography at a time, PLACES COUNT PER TYPE V2 accepts a TABLE of input geographies.

### PLACES_COUNT_PER_GEO function \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo)
- Source ID: `site-docs-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DECLARE geos ARRAY<GEOGRAPHY> ; SET geos = ( SELECT ARRAY AGG ( ST SIMPLIFY ( county geom , 100 )) FROM bigquery-public-data.geo us boundaries.counties WHERE county name IN ( "Queens" , "Kings" , "New York" ) AND state fips code = "36" ); SELECT FROM PROJECT NAME .places insights us.PLACES COUNT PER GEO ( JSON OBJECT ( 'geographies' , geos , 'types' , [ "restaurant" ] , 'business status' , [ "OPERATIONAL" ] ) ); The response for the function: Visualize results The following images show this data displayed in Looker Studio as a filled map, including the outline of each county: To import your data into Looker Studio: Run the function above to generate the results.
- The table contains the columns geography ( GEOGRAPHY ), count ( INT64 ), and place ids ( ARRAY<STRING> ) where place ids contains up to 250 place IDs for each geographic area.
- The PLACES COUNT PER GEO function takes an array of geographic areas to search and returns a table of places counts per area.
- Because the PLACES COUNT PER GEO function returns a table, call it using a FROM clause.

### PLACES_COUNT_PER_H3 function \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3)
- Source ID: `site-docs-reference`
- Final score: 291
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SET geo = ( SELECT geometry FROM bigquery-public-data.overture maps.division area WHERE country = 'US' AND subtype = 'locality' AND names . primary = 'New York' LIMIT 1 ); SELECT FROM PROJECT NAME .places insights us.PLACES COUNT PER H3 ( JSON OBJECT ( 'geography' , geo , 'types' , [ "convenience store" , "grocery store" ] , 'wheelchair accessible entrance' , true , 'business status' , [ 'OPERATIONAL' ] , 'h3 resolution' , 8 ) ); The response for the function: Visualize results The following images show this data displayed in Looker Studio as a filled map.
- The table contains the columns h3 cell index ( STRING ), geography ( GEOGRAPHY ) which defines the polygon representing the H3 cell, count ( INT64 ), and place ids ( ARRAY<STRING> ) where place ids contains up to 250 place IDs for each H3 cell.
- The PLACES COUNT PER H3 function takes a geographic area to search and returns a table of places counts per H3 cell in the search area.
- Required : The h3 resolution filter parameter that specifies the H3 resolution used to aggregate the count of places in each H3 cell.


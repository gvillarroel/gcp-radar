---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.196Z"
product_name: "Places Insights"
product_slug: "places-insights"
feature_name: "PLACES_COUNT_V2 function"
feature_slug: "places-count-v2-function"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-v2"
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2"
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries"
  - "https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count"
keywords:
  - "places"
  - "count"
  - "v2"
  - "function"
  - "newer"
  - "place"
  - "that"
  - "improves"
---

# PLACES_COUNT_V2 function

Product: Places Insights
Coverage: MEDIUM

## Step 02 Summary

A newer Place Count function that improves performance and supports batch processing of geographies.

## Extended Definition

A newer Place Count function that improves performance and supports batch processing of geographies.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-v2](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-v2)
- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2)
- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries)
- [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count)

## Supporting Pages

### PLACES_COUNT_V2 function \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-v2](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-v2)
- Source ID: `site-docs-reference`
- Final score: 382
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Output Table Schema The PLACES COUNT V2 function returns a table with the following columns: Column Name Data Type Description geo id STRING The unique identifier for the input geography, from the input geographies table. input geography GEOGRAPHY The original GEOGRAPHY object from the input geographies table. place count INTEGER The total number of places matching the filters. sample place ids ARRAY<STRING> An array of up to 250 Place IDs that match the criteria.
- Home Products Google Maps Platform Documentation Web Services Places Insights Send feedback PLACES COUNT V2 function Stay organized with collections Save and categorize content based on your preferences.
- The PLACES COUNT V2 function returns a BigQuery table containing place counts and sample Place IDs for multiple input geographies based on specified filters.
- SELECT FROM PROJECT NAME .places insights us.PLACES COUNT V2 ( ( SELECT county name AS geo id , ST SIMPLIFY ( county geom , 100 ) AS geo FROM bigquery-public-data.geo us boundaries.counties WHERE state fips code = "36" -- New York State AND county name IN ( "Queens" , "Kings" , "New York" ) ), JSON OBJECT ( 'types' , [ "restaurant" ] , 'business status' , [ 'OPERATIONAL' ] ) ); The response table will have three rows, one for each county, showing the geo id , input geography , place count , and sample place ids of operational restaurants.

### "PLACES_COUNT_PER_TYPE_V2 function \_|\_ Places Insights \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type-v2)
- Source ID: `site-docs-reference`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Output Table Schema The PLACES COUNT PER TYPE V2 function returns a table with the following columns: Column Name Data Type Description geo id STRING The unique identifier for the input geography, from the input geographies table. input geography GEOGRAPHY The original GEOGRAPHY object from the input geographies table. place type STRING The place type from the target types array this row represents. place count INTEGER The number of places matching the place type and other filters within or near the geography. sample place ids ARRAY<STRING> An array of up to 250 Place IDs that match the criteria for this type and geography.
- Benefits of Using PLACES COUNT PER TYPE V2 PLACES COUNT PER TYPE V2 offers several key advantages, particularly when compared to the older PLACES COUNT PER TYPE function: Batch Processing of Geographies: Unlike PLACES COUNT PER TYPE which processes one geography at a time, PLACES COUNT PER TYPE V2 accepts a TABLE of input geographies.
- Home Products Google Maps Platform Documentation Web Services Places Insights Send feedback PLACES COUNT PER TYPE V2 function Stay organized with collections Save and categorize content based on your preferences.
- The PLACES COUNT PER TYPE V2 function returns a BigQuery table containing place counts and sample Place IDs, broken down by place type, for multiple input geographies.

### "Query the dataset using Places Count functions \_|\_ Places Insights \_\

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/function-queries)
- Source ID: `site-docs-reference`
- Final score: 326
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Places Count function example The following example uses the PLACES COUNT V2 function with the custom input geography table my search area to return the number of operational restaurants within 1000 meters of the Empire State Building and Times Square in New York City: SELECT FROM PROJECT NAME .places insights us.PLACES COUNT V2 ( TABLE PROJECT NAME .
- It is highly optimized for geospatial joins compared to PLACES COUNT and PLACES COUNT PER GEO functions. science PLACES COUNT PER TYPE V2 : Returns a table of place counts and sample Place IDs, categorized by place type.
- In the next example, you apply filters to limit the search by minimum user rating, price level, business status, and whether the restaurant allows dogs, using the PLACES COUNT V2 function.
- The impact of this limit depends on the function version: For V2 functions ( PLACES COUNT V2 , PLACES COUNT PER TYPE V2 ), this limit applies only to the filters JSON object.

### PLACES_COUNT function \_|\_ Places Insights \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count](https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count)
- Source ID: `site-docs-reference`
- Final score: 293
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The route might be for a vehicle, a bicycle, or for a pedestrian: DECLARE geo GEOGRAPHY ; SET geo = ST GEOGFROMTEXT ( 'LINESTRING(-73.98903537033028 40.73655649223003,-73.93580216278471 40.80955538843361)' ); -- NYC line SELECT PROJECT NAME .places insights us.PLACES COUNT ( JSON OBJECT ( 'geography' , geo , -- line 'geography radius' , 100 , -- Radius around line 'types' , [ "restaurant" ] , 'min rating' , 1.0 , 'max rating' , 4.5 , 'min user rating count' , 1 , 'max user rating count' , 10000 , 'price level' , [ 'PRICE LEVEL INEXPENSIVE' , 'PRICE LEVEL MODERATE' ] , 'business status' , [ 'OPERATIONAL' ] , 'allows dogs' , TRUE ) ) as count ; The response for the line: Example: Combine the results of multiple calls You can combine the results of multiple calls to the PLACES COUNT function.
- The next example uses filters to limit the search to only return a count of: Places of type restaurant with the minimum rating of 3 A price level of inexpensive or medium Currently operational Allows dogs SELECT PROJECT NAME .places insights us.PLACES COUNT ( JSON OBJECT ( 'geography' , ST GEOGPOINT ( - 73.9857 , 40.7484 ), -- Empire State Building 'geography radius' , 1000 , -- Radius in meters 'types' , [ "restaurant" ] , 'min rating' , 3 , 'price level' , [ 'PRICE LEVEL INEXPENSIVE' , 'PRICE LEVEL MODERATE' ] , 'business status' , [ 'OPERATIONAL' ] , 'allows dogs' , TRUE ) ) as count ; The filtered response: Remember that place dataset queries enforce a minimum count threshold of 5.
- For example, you want a single result showing the number of restaurants for the following price levels within a specific area: PRICE LEVEL INEXPENSIVE PRICE LEVEL MODERATE PRICE LEVEL EXPENSIVE PRICE LEVEL VERY EXPENSIVE" In this example, you create a loop to call the PLACES COUNT function for each price level, and insert the results of each call to a temporary table.
- Home Products Google Maps Platform Documentation Web Services Places Insights Send feedback PLACES COUNT function Stay organized with collections Save and categorize content based on your preferences.


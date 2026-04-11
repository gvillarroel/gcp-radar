---
title: "PLACES_COUNT_PER_GEO function \_|\_ Places Insights \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights/about-data
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-geo
  title: "PLACES_COUNT_PER_GEO function \_|\_ Places Insights \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places Insights
Send feedback
PLACES_COUNT_PER_GEO function
Stay organized with collections
Save and categorize content based on your preferences.
The PLACES_COUNT_PER_GEO function takes an array of geographic areas to search
and returns a table of places counts per area. For example, if you specify an
array of zip codes as the search area, the response contains a table with a
separate row for each zip code.
Because the PLACES_COUNT_PER_GEO function returns a table, call it using
a FROM clause.
Input parameters:
Required : The geographies
filter parameter that specifies the search area. The
geographies parameter takes an array of values defined by the BigQuery
GEOGRAPHY
data type, which supports points, linestrings, and polygons.
Optional : Additional filter parameters to refine your
search.
Returns:
A table with one row per geographic area. The table contains the columns
geography ( GEOGRAPHY ), count ( INT64 ), and place_ids
( ARRAY<STRING> ) where place_ids contains up to 250 place IDs
for each geographic area.
Example: Calculate the number of restaurants in each county of New York City
This example generates a table of counts of operational restaurants per county
in New York City.
Note: Because the response table contains a geographies field, you can
visualize it using tools that support BigQuery GEOGRAPHY types. For an example
of visualizing the results of a function, see Visualize
results .
For more information and example on visualizing Places Insights results, see
Visualize query results .
This example uses the United States Census Bureau
Data
BigQuery public dataset to get
the boundaries for the three counties in New York City: "Queens","Kings", "New
York". The boundaries of each county are contained in the county_geom column.
This example then uses the BigQuery
ST_SIMPLIFY
function to return a simplified version of county_geom . The ST_SIMPLIFY
function replaces nearly straight chains of edges with a single long edge.
DECLARE geos ARRAY<GEOGRAPHY> ;
SET geos = ( SELECT ARRAY_AGG ( ST_SIMPLIFY ( county_geom , 100 ))
FROM `bigquery-public-data.geo_us_boundaries.counties`
WHERE county_name IN ( "Queens" , "Kings" , "New York" ) AND state_fips_code = "36" );
SELECT * FROM ` PROJECT_NAME .places_insights___us.PLACES_COUNT_PER_GEO` (
JSON_OBJECT (
'geographies' , geos ,
'types' , [ "restaurant" ] ,
'business_status' , [ "OPERATIONAL" ]
)
);
The response for the function:
Visualize results
The following images show this data displayed in Looker Studio as a filled map,
including the outline of each county:
To import your data into Looker Studio:
Run the function above to generate the results.
In the BigQuery results, click Open in -> Looker Studio . Your results
are automatically imported into Looker Studio.
Looker Studio creates a default report page and initializes it with a title,
table, and bar graph of the results.
Select everything on the page and delete it.
Click Insert -> Filled map to add a filled map to your report.
Under Chart types -> Setup configure the fields as shown below::
The filled map appears as above. You can optionally select Chart types ->
Styles to further configure the appearance of the map.
For more information and example on visualizing Places Insights results, see
Visualize query results .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

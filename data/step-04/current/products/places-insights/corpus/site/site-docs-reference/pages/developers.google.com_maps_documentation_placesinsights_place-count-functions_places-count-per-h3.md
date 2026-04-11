---
title: "PLACES_COUNT_PER_H3 function \_|\_ Places Insights \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights/about-data
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-h3
  title: "PLACES_COUNT_PER_H3 function \_|\_ Places Insights \_|\_ Google for Developers"
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
PLACES_COUNT_PER_H3 function
Stay organized with collections
Save and categorize content based on your preferences.
The PLACES_COUNT_PER_H3 function takes a geographic area to search
and returns a table of places counts per H3 cell in
the search area.
Because the PLACES_COUNT_PER_H3 function returns a table, call it using
a FROM clause.
Input parameters:
Required : The geography filter parameter that
specifies the search area. The geography parameter a value defined by
the BigQuery
GEOGRAPHY
data type, which supports points, linestrings, and polygons.
For examples of using different types of search geographies, such as
viewports and lines, see
PLACES_COUNT function .
Required : The h3_resolution filter parameter that
specifies the H3 resolution used to aggregate
the count of places in each H3 cell. Supported value are from 0 to 11.
Optional : Additional filter parameters to refine
your search.
Returns:
A table with one row per H3 cell. The table contains the columns
h3_cell_index ( STRING ), geography ( GEOGRAPHY ) which defines the
polygon representing the H3 cell, count ( INT64 ), and
place_ids ( ARRAY<STRING> ) where place_ids contains up
to 250 place IDs for each H3 cell.
Example: Count wheelchair accessible convenience and grocery stores per H3 cell
The example below computes the number of operational, wheelchair accessible
convenience and grocery stores per H3 cell in New York City. The H3 cells use a
resolution level of 8.
This example uses the Overture Maps
Data
BigQuery public dataset to get
the geography for New York City.
Note: Because the response table contains a geography field, you can
visualize it using tools that support BigQuery GEOGRAPHY types. For an example
of visualizing the results of a function, see Visualize
results .
For more information and example on visualizing Places Insights results, see
Visualize query results .
DECLARE geo GEOGRAPHY ;
-- Get the geography for New York City.
SET geo = ( SELECT geometry FROM `bigquery-public-data.overture_maps.division_area`
WHERE country = 'US' AND subtype = 'locality' AND names . primary = 'New York' LIMIT 1 );
SELECT * FROM ` PROJECT_NAME .places_insights___us.PLACES_COUNT_PER_H3` (
JSON_OBJECT (
'geography' , geo ,
'types' , [ "convenience_store" , "grocery_store" ] ,
'wheelchair_accessible_entrance' , true ,
'business_status' , [ 'OPERATIONAL' ] ,
'h3_resolution' , 8
)
);
The response for the function:
Visualize results
The following images show this data displayed in Looker Studio as a filled map.
The darker the H3 cell the higher the concentration of results:
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

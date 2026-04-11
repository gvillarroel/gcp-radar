---
title: "PLACES_COUNT_PER_TYPE function \_|\_ Places Insights \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights/about-data
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/place-count-functions/places-count-per-type
  title: "PLACES_COUNT_PER_TYPE function \_|\_ Places Insights \_|\_ Google for Developers"
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
PLACES_COUNT_PER_TYPE function
Stay organized with collections
Save and categorize content based on your preferences.
The PLACES_COUNT_PER_TYPE function returns a table of counts for each place
type specified to the function. For example, if you search for the types
doctor , hospital , and pharmacy the response contains a table with a
separate row for each type.
Note: If you specify these same three types to the PLACES_COUNT function,
PLACES_COUNT returns a single value containing the combined count for all
three types.
Because the PLACES_COUNT_PER_TYPE function returns a table, call it using a
FROM clause.
Input parameters:
Required : The geography filter parameter that
specifies the search area. The geography parameter takes a value
defined by the BigQuery
GEOGRAPHY
data type, which supports points, linestrings, and polygons.
For examples of using different types of search geographies, such as
viewports and lines, see PLACES_COUNT
function .
Required : The types filter parameter that
specifies the place types to search for.
Optional : Additional filter parameters to refine
your search.
Returns:
A table with one row per types value. The table contains the columns
type ( STRING ), count ( INT64 ), and place_ids
( ARRAY<STRING> ) where place_ids contains up to 250 place IDs
for each type .
Note: The returned table contains one row per types value. While you
can use primary_types as a filter, the results are only grouped by
types .
Example: Return count of restaurant, cafes, and bars
In this example, you search for all operational restaurant, cafe, and bars in
the specified search area defined as a polygon in New York City.
The types parameter takes an array of STRING values specifying the place
types to search for. For the complete list of possible values, see
Place types .
This example also uses the BigQuery
ST_GEOGFROMTEXT
function to return a GEOGRAPHY value from a polygon.
DECLARE geo GEOGRAPHY ;
SET geo = ST_GEOGFROMTEXT ( ' '' POLYGON((-73.985708 40.75773,-73.993324 40.750298,
-73.9857 40.7484,-73.9785 40.7575,
-73.985708 40.75773)) '' ' ); -- NYC viewport
SELECT * FROM ` PROJECT_NAME .places_insights___us.PLACES_COUNT_PER_TYPE` (
JSON_OBJECT (
'types' , [ "restaurant" , "cafe" , "bar" ] ,
'geography' , geo ,
'business_status' , [ 'OPERATIONAL' ]
)
);
This function returns a table with three rows, one per type:
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

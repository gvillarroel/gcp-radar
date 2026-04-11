---
title: "Write a query using brands data \_|\_ Places Insights \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/brands
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights/about-data
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/brands
  title: "Write a query using brands data \_|\_ Places Insights \_|\_ Google for Developers"
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
Write a query using brands data
Stay organized with collections
Save and categorize content based on your preferences.
Note: In the current release, the brands dataset is only available the United
States.
Places Insights provides brand information for many categories of places. For
example:
For the category of "ATMs, Banks, and Credit Unions", the brands data
contains an entry for each of the brands PNC, UBS, and Chase banks.
For the category "Automotive Rentals", the data contains an entry for each
of the brands Budget, Hertz, and Thrifty.
A typical use case for querying the brands dataset is to join it with a query on
the place data to answer questions such as:
What is the count of all stores by brand in an area?
What is the count of my top three competitor brands in the area?
What is the count of brands of a specific category, such as "Fitness" or
"Gas Station", in the area?
About the brands dataset
The brands dataset for the US is named places_insights___us.brands .
Brands dataset schema
The schema for the brands dataset defines three fields:
id : The brand ID.
name : The brand name, such as "Hertz" or "Chase".
category : The brand type, such as "Gas Station", "Food and Drink", or
"Lodging". For a list of possible values, see Category
values .
Use brands dataset in a query
The places dataset schema
defines the brand_ids field. If a place in the places dataset is associated
with a brand, then the brand_ids field for the place contains the
corresponding brand ID.
A typical query that references the brands dataset performs a JOIN with
the places dataset based on the brand_ids field.
For example, to find the count of the number of McDonald's restaurants within
2000 meters of the Empire State Building in New York City:
SELECT WITH AGGREGATION_THRESHOLD
COUNT ( * )
FROM PROJECT_NAME . places_insights___us . places places , UNNEST ( brand_ids ) AS brand_id
LEFT JOIN PROJECT_NAME . places_insights___us . brands ON brand_id = brands . id
WHERE
ST_DWITHIN ( ST_GEOGPOINT ( - 73.9857 , 40.7484 ), point , 2000 )
AND brands . name = "McDonald's"
AND business_status = "OPERATIONAL"
The next query returns the count of the number of banks in New York City that
belong to a brand, grouped by brand name:
SELECT WITH AGGREGATION_THRESHOLD
brands . name ,
COUNT ( * ) AS store_count
FROM PROJECT_NAME . places_insights___us . places places , UNNEST ( brand_ids ) AS brand_id
LEFT JOIN PROJECT_NAME . places_insights___us . brands ON brand_id = brands . id
WHERE brands . category = "ATMs, Banks and Credit Unions"
AND "bank" IN UNNEST ( places . types )
AND business_status = "OPERATIONAL"
GROUP BY brands . name
ORDER BY store_count DESC ;
The following image shows the counts by brand:
Category values
The category field for a brand can contain the following values:
Category type value
ATMs, Banks and Credit Unions
Automotive and Parts Dealers
Automotive Rentals
Automotive Services
Dental
Electric Vehicle Charging Stations
Electronics Retailers
Fitness
Food and Drink
Gas Station
Grocery and Liquor
Health and Personal Care Retailers
Hospital
Lodging
Merchandise Retail
Movie Theater
Parking
Telecommunications
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

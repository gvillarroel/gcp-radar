---
title: "Filter parameters \_|\_ Places Insights \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/reference/filter-params
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/reference/filter-params
  title: "Filter parameters \_|\_ Places Insights \_|\_ Google for Developers"
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
Reference
Send feedback
Filter parameters
Stay organized with collections
Save and categorize content based on your preferences.
You can apply filters to Places Count
functions
using the parameters described in the table below. Note that the required
parameters differ for each function:
PLACES_COUNT : requires geography
PLACES_COUNT_PER_TYPE : requires geography
and type
PLACES_COUNT_PER_GEO : requires geographies
PLACES_COUNT_PER_H3 : requires geography and
h3_resolution
The filter name and its value are case-sensitive. You must specify them exactly
as they appear in the table. Otherwise, the query will return an invalid
argument error.
Filter Name
Description
Type
Supported Values
geography
For PLACES_COUNT , PLACES_COUNT_PER_TYPE , and PLACES_COUNT_PER_H3
Specifies an area to search. Any type of GEOGRAPHY is supported such as Point , LineString , and Polygon .
You can use the geography parameter in combination with geography_radius to add a buffer to your search area.
A minimum search area of 40.0 meters by 40.0 meters (1600 m 2 ) is enforced. If you specify a search area under this limit the function returns an invalid argument error.
GEOGRAPHY
Any type of GEOGRAPHY .
geographies
For PLACES_COUNT_PER_GEO only
Specifies a list of areas to search. Any type of GEOGRAPHY is supported such as Point , LineString , and Polygon .
You can use the geographies parameter in combination with geography_radius to add a buffer to your search area. The buffer is added to all geographies specified.
A minimum search area of 40.0 meters by 40.0 meters (1600 m 2 ) is enforced. If you specify a search area under this limit the function returns an invalid argument error.
ARRAY<GEOGRAPHY>
Any type of GEOGRAPHY .
geography_radius
Adds a radius or buffer, in meters, to the specified geography.
The default value is 0.
The specified value must define a minimum search
area of 40.0 meters by 40.0 meters (1600 m 2 ). For example, for a Point geography,
the minimum radius is therefore 23 meters.
INT64
Minimum is 0.
h3_resolution
For PLACES_COUNT_PER_H3 only
The H3 resolution used to aggregate the count of places into H3 cells.
INT64
Between 0 and 11.
types
Specifies the places types to consider.
Each place contains a set of places types, for example "restaurant" and "cafe" . If no types are specified, all place types are considered in the result.
ARRAY<STRING>
For the complete list of possible values,
see Place types .
Example:
["restaurant", "cafe", "bar"]
primary_type
Specifies the primary types to consider.
A place can only have a single primary type which is the type that best describes the location.
If no primary types are specified, all place primary types are considered in the result.
ARRAY<STRING>
For the complete list of possible values, see
Place types .
Example:
["restaurant", "cafe", "bar"]
min_rating
Specifies the minimum place rating to consider.
A Places rating is based on user reviews of the place and has a range between 1.0 and 5.0
If you specify a rating outside this range, the function returns an invalid argument error.
FLOAT
Between 1.0 and 5.0.
max_rating
Specifies the maximum place rating to consider.
A Places rating is based on user reviews of the place and has a range between 1.0 and 5.0
If you specify a rating outside this range, the function returns an invalid argument error.
FLOAT
Between 1.0 and 5.0.
min_user_rating_count
Specifies the minimum user rating count to consider.
User rating count is the total number of reviews a place has.
The minimum value is 0. If you specify a value below 0 the function returns an invalid argument error.
INT64
Minimum value is 0.
max_user_rating_count
Specifies the maximum user rating count to consider.
User rating count is the total number of reviews a place has.
The minimum value is 0. If you specify a value below 0 the function returns an invalid argument error.
INT64
Minimum value is 0.
price_level
Specifies the price levels to consider.
You can specify multiple price levels.
ARRAY<STRING>
Supported values:
"PRICE_LEVEL_FREE"
"PRICE_LEVEL_INEXPENSIVE"
"PRICE_LEVEL_MODERATE"
"PRICE_LEVEL_EXPENSIVE"
"PRICE_LEVEL_VERY_EXPENSIVE"
Example:
["PRICE_LEVEL_MODERATE","PRICE_LEVEL_EXPENSIVE"]
business_status
Specifies the business status to consider. You can specify multiple business status.
ARRAY<STRING>
Supported values:
"OPERATIONAL"
"CLOSED_TEMPORARILY"
"CLOSED_PERMANENTLY"
"FUTURE_OPENING"
Example:
["OPERATIONAL","CLOSED_TEMPORARILY"]
takeout
Considers places that offer takeout.
BOOLEAN
TRUE , FALSE
delivery
Considers places that offer delivery.
BOOLEAN
TRUE , FALSE
dine_in
Considers places that offer dine-in.
BOOLEAN
TRUE , FALSE
curbside_pickup
Considers places that offer curbside pickup.
BOOLEAN
TRUE , FALSE
reservable
Consider places that are reservable.
BOOLEAN
TRUE , FALSE
outdoor_seating
Considers places that offer outdoor seating.
BOOLEAN
TRUE , FALSE
live_music
Considers places that offer live music.
BOOLEAN
TRUE , FALSE
allows_dogs
Consider places that allow dogs.
BOOLEAN
TRUE , FALSE
restroom
Considers places that offer restrooms.
BOOLEAN
TRUE , FALSE
serves_breakfast
Considers places that serve breakfast.
BOOLEAN
TRUE , FALSE
serves_lunch
Considers places that serve lunch.
BOOLEAN
TRUE , FALSE
serves_dinner
Considers places that serve dinner.
BOOLEAN
TRUE , FALSE
serves_beer
Considers places that serve beer.
BOOLEAN
TRUE , FALSE
serves_wine
Considers places that serve wine.
BOOLEAN
TRUE , FALSE
serves_brunch
Considers places that serve brunch.
BOOLEAN
TRUE , FALSE
serves_vegetarian_food
Considers places that serve vegetarian food.
BOOLEAN
TRUE , FALSE
serves_cocktails
Considers places that serve cocktails.
BOOLEAN
TRUE , FALSE
serves_dessert
Considers places that serve dessert.
BOOLEAN
TRUE , FALSE
serves_coffee
Considers places that serve coffee.
BOOLEAN
TRUE , FALSE
menu_for_children
Considers places that offer menus for children.
BOOLEAN
TRUE , FALSE
good_for_children
Consider places that are good for children.
BOOLEAN
TRUE , FALSE
good_for_groups
Consider places that are good for groups.
BOOLEAN
TRUE , FALSE
good_for_watching_sports
Consider places that are good for watching sports.
BOOLEAN
TRUE , FALSE
accepts_credit_cards
Consider places that accept credit cards.
BOOLEAN
TRUE , FALSE
accepts_debit_cards
Consider places that accept debit cards.
BOOLEAN
TRUE , FALSE
accepts_cash_only
Consider places that accept only cash.
BOOLEAN
TRUE , FALSE
accepts_nfc
Consider places that accept NFC payments.
BOOLEAN
TRUE , FALSE
free_parking_lot
Considers places that have free parking lot.
BOOLEAN
TRUE , FALSE
paid_parking_lot
Considers places that have paid parking lot.
BOOLEAN
TRUE , FALSE
free_street_parking
Considers places that have free street parking.
BOOLEAN
TRUE , FALSE
paid_street_parking
Considers places that have paid street parking.
BOOLEAN
TRUE , FALSE
valet_parking
Considers places that have valet parking.
BOOLEAN
TRUE , FALSE
free_garage_parking
Considers places that have free garage parking.
BOOLEAN
TRUE , FALSE
paid_garage_parking
Considers places that have paid garage parking.
BOOLEAN
TRUE , FALSE
wheelchair_accessible_parking
Considers places that have wheelchair accessible parking.
BOOLEAN
TRUE , FALSE
wheelchair_accessible_entrance
Considers places that have wheelchair accessible entrance.
BOOLEAN
TRUE , FALSE
wheelchair_accessible_restroom
Considers places that have wheelchair accessible restroom.
BOOLEAN
TRUE , FALSE
wheelchair_accessible_seating
Considers places that have wheelchair accessible seating.
BOOLEAN
TRUE , FALSE
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

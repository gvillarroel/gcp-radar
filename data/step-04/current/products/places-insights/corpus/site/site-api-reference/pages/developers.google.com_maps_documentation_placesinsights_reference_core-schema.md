---
title: "Core schema reference \_|\_ Places Insights \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/placesinsights/reference/core-schema
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/placesinsights/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/placesinsights/reference/core-schema
  title: "Core schema reference \_|\_ Places Insights \_|\_ Google for Developers"
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
Core schema reference
Stay organized with collections
Save and categorize content based on your preferences.
All countries support the core schema, and then each country has additional
schema items .
Field Name
Type
Mode
Description
Example
point
GEOGRAPHY
NULLABLE
The location of the place as a Point geography type object.
POINT(-122.08532 37.42205)
id
STRING
NULLABLE
The unique place id. See Place IDs .
ChIJj61dQgK6j4AR4GeTYWZsKWw
types
STRING
REPEATED
A set of type tags for the place. For example, "restaurant" and "cafe". For the complete list of possible values, see Place Types .
restaurant,point_of_interest,establishment
primary_type
STRING
NULLABLE
The primary type of the place. For example, "restaurant", "cafe", "airport", etc. A place can only have a single primary type. For the complete list of possible values, see Place Types .
restaurant
country_code
STRING
NULLABLE
The country code in the Unicode CLDR format.
US
location
RECORD
NULLABLE
The position of the place.
location.latitude
FLOAT
NULLABLE
The latitude in degrees. Ranges from -90.0 to 90.0.
37.42205
location.longitude
FLOAT
NULLABLE
The longitude in degrees. Ranges from -180.0 to 180.0.
-122.08532
rating
FLOAT
NULLABLE
A rating between 1.0 and 5.0, based on user reviews of the place.
4.5
user_rating_count
INTEGER
NULLABLE
The total number of reviews for the place.
100
price_level
STRING
NULLABLE
Price level of the place. Possible values are "PRICE_LEVEL_FREE", "PRICE_LEVEL_INEXPENSIVE", "PRICE_LEVEL_MODERATE", "PRICE_LEVEL_EXPENSIVE", and "PRICE_LEVEL_VERY_EXPENSIVE".
PRICE_LEVEL_MODERATE
business_status
STRING
NULLABLE
The business status for the place. Possible values are "OPERATIONAL", "CLOSED_TEMPORARILY", "CLOSED_PERMANENTLY", and "FUTURE_OPENING".
OPERATIONAL
takeout
BOOLEAN
NULLABLE
Place supports takeout.
true
delivery
BOOLEAN
NULLABLE
Place supports delivery.
true
dine_in
BOOLEAN
NULLABLE
Place supports indoor or outdoor seating options.
true
curbside_pickup
BOOLEAN
NULLABLE
Place supports curbside pickup.
true
reservable
BOOLEAN
NULLABLE
Place supports reservations.
true
serves_breakfast
BOOLEAN
NULLABLE
Place serves breakfast.
true
serves_lunch
BOOLEAN
NULLABLE
Place serves lunch.
true
serves_dinner
BOOLEAN
NULLABLE
Place serves dinner.
true
serves_beer
BOOLEAN
NULLABLE
Place serves beer.
true
serves_wine
BOOLEAN
NULLABLE
Place serves wine.
true
serves_brunch
BOOLEAN
NULLABLE
Place serves brunch.
true
serves_vegetarian_food
BOOLEAN
NULLABLE
Place serves vegetarian food.
true
outdoor_seating
BOOLEAN
NULLABLE
Place provides outdoor seating.
true
live_music
BOOLEAN
NULLABLE
Place provides live music.
true
menu_for_children
BOOLEAN
NULLABLE
Place has a children's menu.
true
serves_cocktails
BOOLEAN
NULLABLE
Place serves cocktails.
true
serves_dessert
BOOLEAN
NULLABLE
Place serves dessert.
true
serves_coffee
BOOLEAN
NULLABLE
Place serves coffee.
true
good_for_children
BOOLEAN
NULLABLE
Place is good for children.
true
allows_dogs
BOOLEAN
NULLABLE
Place allows dogs.
true
restroom
BOOLEAN
NULLABLE
Place has a restroom.
true
good_for_groups
BOOLEAN
NULLABLE
Place accommodates groups.
true
good_for_watching_sports
BOOLEAN
NULLABLE
Place is suitable for watching sports.
true
accepts_credit_cards
BOOLEAN
NULLABLE
Place accepts credit cards as payment.
true
accepts_debit_cards
BOOLEAN
NULLABLE
Place accepts debit cards as payment.
true
accepts_cash_only
BOOLEAN
NULLABLE
Place accepts cash only as payment. Places with this attribute may still accept other payment methods.
true
accepts_nfc
BOOLEAN
NULLABLE
Place accepts NFC payments.
true
free_parking_lot
BOOLEAN
NULLABLE
Place offers free parking lots.
true
paid_parking_lot
BOOLEAN
NULLABLE
Place offers paid parking lots.
true
free_street_parking
BOOLEAN
NULLABLE
Place offers free street parking.
true
paid_street_parking
BOOLEAN
NULLABLE
Place offers paid street parking.
true
valet_parking
BOOLEAN
NULLABLE
Place offers valet parking.
true
free_garage_parking
BOOLEAN
NULLABLE
Place offers free garage parking.
true
paid_garage_parking
BOOLEAN
NULLABLE
Place offers paid garage parking.
true
wheelchair_accessible_parking
BOOLEAN
NULLABLE
Place offers wheelchair accessible parking.
true
wheelchair_accessible_entrance
BOOLEAN
NULLABLE
Place has a wheelchair accessible entrance.
true
wheelchair_accessible_restroom
BOOLEAN
NULLABLE
Place has a wheelchair accessible restroom.
true
wheelchair_accessible_seating
BOOLEAN
NULLABLE
Place has wheelchair accessible seating.
true
regular_opening_hours
RECORD
NULLABLE
The regular hours of operation. See the opening hours reference .
regular_opening_hours_happy_hour
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "HAPPY_HOUR". See the opening hours reference .
regular_opening_hours_drive_through
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "DRIVE_THROUGH". See the opening hours reference .
regular_opening_hours_delivery
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "DELIVERY". See the opening hours reference .
regular_opening_hours_takeout
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "TAKEOUT". See the opening hours reference .
regular_opening_hours_kitchen
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "KITCHEN". See the opening hours reference .
regular_opening_hours_breakfast
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "BREAKFAST". See the opening hours reference .
regular_opening_hours_lunch
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "LUNCH". See the opening hours reference .
regular_opening_hours_dinner
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "DINNER". See the opening hours reference .
regular_opening_hours_brunch
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "BRUNCH". See the opening hours reference .
regular_opening_hours_pickup
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "PICKUP". See the opening hours reference .
regular_opening_hours_access
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "ACCESS". See the opening hours reference .
regular_opening_hours_senior_hours
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "SENIOR_HOURS". See the opening hours reference .
regular_opening_hours_online_service_hours
RECORD
NULLABLE
The regular hours of operation for the secondary hours type "ONLINE_SERVICE_HOURS". See the opening hours reference .
ev_charge_options
RECORD
NULLABLE
Information about the EV Charge Station hosted at the place. Terminology follows https://afdc.energy.gov/fuels/electricity_infrastructure.html . One port could charge one car at a time. One port has one or more connectors. One station has one or more ports.
ev_charge_options.connector_count
INTEGER
NULLABLE
Number of connectors at this station. However, because some ports can have multiple connectors but only be able to charge one car at a time (e.g.) the number of connectors may be greater than the total number of cars which can charge simultaneously.
3
ev_charge_options.connector_aggregation
RECORD
REPEATED
A list of EV charging connector aggregations that contain connectors of the same type and same charge rate.
ev_charge_options.connector_aggregation.type
STRING
NULLABLE
The connector type of this aggregation. See EVConnectorType for the list of possible connector types.
EV_CONNECTOR_TYPE_J1772
ev_charge_options.connector_aggregation.max_charge_rate_kw
FLOAT
NULLABLE
The static max charging rate in kw of each connector in the aggregation.
16.0
ev_charge_options.connector_aggregation.count
INTEGER
NULLABLE
Number of connectors in this aggregation.
3
brand_ids
STRING
REPEATED
The unique identifiers for brands.
13992718219781496405
Opening hours reference
The regular hours of operation for a given opening hours type. Hours are
separated by the day of the week. For periods that extend past midnight, the end
time is truncated to 23:59:59.999999 and the following day contains an
interval starting at 00:00:00.000000 . For example, if a place is open on
Fridays from 8 AM to 12 PM and then from 8 PM to 2 AM, the periods for friday
would be: [{start_time: "08:00:00", end_time: "12:00:00"}, {start_time:
"20:00:00", end_time: "23:59:59.999999"}] .
To query for places open on Friday at 5 pm you could run the following query:
SELECT WITH AGGREGATION_THRESHOLD
COUNT ( * ) AS count
FROM
` PROJECT_NAME .places_insights___us___sample.places_sample`
WHERE
EXISTS ( SELECT * FROM UNNEST ( regular_opening_hours . friday ) WHERE '17:00:00' BETWEEN start_time AND end_time )
The full schema for opening hours fields is as follows:
Field Name
Type
Mode
Description
Example
monday
RECORD
REPEATED
The list of periods on Monday during which the place is open.
monday.start_time
TIME
NULLABLE
Start of the period.
08:00:00
monday.end_time
TIME
NULLABLE
End of the period.
18:00:00
tuesday
RECORD
REPEATED
The list of periods on Tuesday during which the place is open.
tuesday.start_time
TIME
NULLABLE
Start of the period.
08:00:00
tuesday.end_time
TIME
NULLABLE
End of the period.
18:00:00
wednesday
RECORD
REPEATED
The list of periods on Wednesday during which the place is open.
wednesday.start_time
TIME
NULLABLE
Start of the period.
08:00:00
wednesday.end_time
TIME
NULLABLE
End of the period.
18:00:00
thursday
RECORD
REPEATED
The list of periods on Thursday during which the place is open.
thursday.start_time
TIME
NULLABLE
Start of the period.
08:00:00
thursday.end_time
TIME
NULLABLE
End of the period.
18:00:00
friday
RECORD
REPEATED
The list of periods on Friday during which the place is open.
friday.start_time
TIME
NULLABLE
Start of the period.
08:00:00
friday.end_time
TIME
NULLABLE
End of the period.
18:00:00
saturday
RECORD
REPEATED
The list of periods on Saturday during which the place is open.
saturday.start_time
TIME
NULLABLE
Start of the period.
08:00:00
saturday.end_time
TIME
NULLABLE
End of the period.
18:00:00
sunday
RECORD
REPEATED
The list of periods on Sunday during which the place is open.
sunday.start_time
TIME
NULLABLE
Start of the period.
08:00:00
sunday.end_time
TIME
NULLABLE
End of the period.
18:00:00
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

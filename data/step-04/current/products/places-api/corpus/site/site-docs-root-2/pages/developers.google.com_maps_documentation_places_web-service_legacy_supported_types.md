---
title: "Place Types \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/supported_types
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/supported_types
  title: "Place Types \_|\_ Places API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

This product or feature is in Legacy status. For more information about the Legacy status see Legacy products and features . To migrate to the Places API (New), see the Migration guide .
Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Legacy
Send feedback
Place Types
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the supported values for the types property.
Table 1 lists the types that are supported for
place searches, and can be returned with Place details results, and as part
of autocomplete place predictions.
Table 2 lists additional types that can be returned
with Place details results, and as part of autocomplete place predictions.
Table 3 lists types you can use in place
autocomplete requests.
Table 1: Place types
The Place type values in Table 1 are used in the following ways:
As part of a Place details response. The request must specify the appropriate "types"
data field .
As part of an Place Autocomplete (Legacy) place prediction. For more information on the rules for using these
values, see
Place Autocomplete (Legacy) .
In the type parameter for
place searches (Places API only),
to restrict the results to places matching the specified type.
accounting
airport
amusement_park
aquarium
art_gallery
atm
bakery
bank
bar
beauty_salon
bicycle_store
book_store
bowling_alley
bus_station
cafe
campground
car_dealer
car_rental
car_repair
car_wash
casino
cemetery
church
city_hall
clothing_store
convenience_store
courthouse
dentist
department_store
doctor
drugstore
electrician
electronics_store
embassy
fire_station
florist
funeral_home
furniture_store
gas_station
gym
hair_care
hardware_store
hindu_temple
home_goods_store
hospital
insurance_agency
jewelry_store
laundry
lawyer
library
light_rail_station
liquor_store
local_government_office
locksmith
lodging
meal_delivery
meal_takeaway
mosque
movie_rental
movie_theater
moving_company
museum
night_club
painter
park
parking
pet_store
pharmacy
physiotherapist
plumber
police
post_office
primary_school
real_estate_agency
restaurant
roofing_contractor
rv_park
school
secondary_school
shoe_store
shopping_mall
spa
stadium
storage
store
subway_station
supermarket
synagogue
taxi_stand
tourist_attraction
train_station
transit_station
travel_agency
university
veterinary_care
zoo
Table 2: Additional types returned by the Places service
The Place type values in Table 2 are used in the following ways:
As part of the result of a Place details request (for example, a call to
fetchPlace() ), or anywhere a Place result is returned. The
request must specify the appropriate "types"
data field .
Note: Although geocode and establishment are part of
Table 2, they cannot be combined with any other type in Tables 1, 2, or 3 in Place Autocomplete (Legacy) request filters.
As part of an Place Autocomplete (Legacy) place prediction. For more information on the rules for using these
values, see
Place Autocomplete (Legacy) .
To denote address components.
For more details on these types, refer to
Address Types .
Note: The types below are
not supported in the type filter of a
place search.
administrative_area_level_1
administrative_area_level_2
administrative_area_level_3
administrative_area_level_4
administrative_area_level_5
administrative_area_level_6
administrative_area_level_7
archipelago
colloquial_area
continent
country
establishment
finance
floor
food
general_contractor
geocode
health
intersection
landmark
locality
natural_feature
neighborhood
place_of_worship
plus_code
point_of_interest
political
post_box
postal_code
postal_code_prefix
postal_code_suffix
postal_town
premise
room
route
street_address
street_number
sublocality
sublocality_level_1
sublocality_level_2
sublocality_level_3
sublocality_level_4
sublocality_level_5
subpremise
town_square
Table 3: Type collections supported in Place Autocomplete (Legacy) requests
Use the Place type values in Table 3, or the values in Table 1 and Table 2, as part
of a Place Autocomplete (Legacy) request to restrict the results to a specific type.
Only a single type from Table 3 is allowed in the request. If you do specify a value from Table 3,
you cannot specify a value from Table 1 or Table 2.
For more information on the rules for using these values, see
Place Autocomplete (Legacy) .
The supported types are:
geocode instructs the Place Autocomplete (Legacy) service to
return only geocoding results, rather than business results. Generally,
you use this request to disambiguate results where the location
specified may be indeterminate.
address instructs the Place Autocomplete (Legacy) service to
return only geocoding results with a precise address. Generally, you use
this request when you know the user will be looking for a fully specified
address.
establishment instructs the Place Autocomplete (Legacy) service to
return only business results.
The (regions) type collection instructs the Places service
to return any result matching the following types:
locality
sublocality
postal_code
country
administrative_area_level_1
administrative_area_level_2
The (cities) type collection instructs the Places service
to return results that match locality or
administrative_area_level_3 .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

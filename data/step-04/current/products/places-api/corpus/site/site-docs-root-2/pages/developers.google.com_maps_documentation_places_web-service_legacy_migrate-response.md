---
title: "Migrate the Places API response \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/migrate-response
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/migrate-response
  title: "Migrate the Places API response \_|\_ Google for Developers"
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
Places API
Legacy
Send feedback
Migrate the Places API response
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
The response format for
Place Details (New) ,
Nearby Search (New) ,
and
Text Search (New)
APIs has changed from the format of the legacy APIs. The main difference is in
the format of the Place object returned by each method, as described in
Changes to the response Place object .
In addition, the top level fields of the response object have also
changed for each API. See:
Text Search response changes
Nearby Search response changes
Place Details response changes
Changes to the response Place object
This table shows the changes to the new
Place object
in the response for Place Details (New),
Nearby Search (New), and
Text Search (New) in comparison to the legacy
Place object .
The new response object uses camel-casing for field names, contains new fields,
and renames some of the legacy fields.
Field
Places API (Legacy) object
Places API (New) object
Notes
Address component
address_components
addressComponents
Place microformat address
adr_address
adrFormatAddress
Business status
business_status
businessStatus
Opening hours for next week
current_opening_hours
currentOpeningHours
Editorial summary
editorial_summary
editorialSummary
Formatted address
formatted_address
formattedAddress
National phone number
formatted_phone_number
nationalPhoneNumber
Location
geometry.location
location
Viewport
geometry.viewport
viewport
Place attributions
html_attributions
attributions
Top-level field of the response in the legacy APIs
Icon URL
icon
Removed. Use iconMaskBaseUri and
iconBackgroundColor . See
Place icons for
more information.
Icon background color
icon_background_color
iconBackgroundColor
Icon mask URL
icon_mask_base_uri
iconMaskBaseUri
International phone number
international_phone_number
internationalPhoneNumber
Text place name
name
displayName
Text place name is now accessible as displayName.text and
language as displayName.languageCode
Opening hours
opening_hours
regularOpeningHours
Photos
photos
photos
The format of photos has changed in the new
Place object. For more information, see
Change to photo references .
Place ID
place_id
id
Plus code
plus_code
plusCode
Price level
price_level
priceLevel
Rating
rating
rating
Reviews
reviews
reviews
Secondary opening hours for next week from today, with exceptions and
all other data
secondary_opening_hours
currentSecondaryOpeningHours
Place types
types
types
Google Maps URL of the place
url
googleMapsUri
Number of user ratings
user_ratings_total
userRatingCount
UTC offset
utc_offset
utcOffsetMinutes
Short form of the address including the street name and town
vicinity
shortFormattedAddress
Place website
website
websiteUri
Wheelchair-accessibility information
wheelchair_accessible_entrance
accessibilityOptions
wheelchair_accessible_entrance is now at
accessibilityOptions.wheelchairAccessibleEntrance
Places attributes
takeout, delivery, dine_in, curbside_pickup, reservable,
serves_breakfast, serves_lunch, serves_dinner, serves_beer, serves_wine,
serves_brunch, serves_vegetarian_food
takeout, delivery, dineIn, curbsidePickup, reservable,
servesBreakfast, servesLunch, servesDinner, servesBeer, servesWine,
servesBrunch, servesVegetarianFood
Resource name
name field in the form places/ PLACE_ID
In the legacy API, the name field contained the
place name as a text string. In the new API, that information is in
displayName .
Place primary type
primaryTypeName
New
Place primary type as a text string
primaryTypeDisplayName
New
Regular weekly secondary opening hours, with exceptions and all other
data
regularSecondaryOpeningHours
New
Payment options the place accepts
paymentOptions
New
Place parking options
parkingOptions
New
List of sub-destinations related to the place
subDestinations
New
Most recent information about fuel options in a gas station
fuelOptions
New
EV charging Information for a place
evChargeOptions
New
Places attributes
outdoorSeating, liveMusic, menuForChildren, servesCocktails,
servesDessert, servesCoffee, goodForChildren, allowsDogs, restroom,
goodForGroups, goodForWatchingSports
New
Text Search response changes
The following table shows the changes to the top-level fields of the
response object
for Text Search (Legacy) and the
response object
for Text Search (New). For the new API, the only top-level field in the
response is the places array.
Field
Text Search (Legacy)
Text Search (New)
Notes
Place attributions
html_attributions
Moved into the new Place object for each place as place.attributions
Array of places
results array of the legacy Place object
places array of the new Place object
Status of the request
status
Moved to the standard HTTP response (HTTP response code and message)
Any error messages
error_message
Moved to the standard HTTP response (HTTP response code and message)
Any info messages
info_messages
Removed
Page token
next_page_token
Removed
Nearby Search response changes
The following table shows the changes to the top-level fields of the response
object
for the Nearby Search (Legacy) and the response
object
for Nearby Search (New). For the new API, the only top-level field in the
response is the places array.
Field
Nearby Search (Legacy)
Nearby Search (New)
Notes
Place attributions
html_attributions
Moved into the new Place
object for each place as place.attributions
Array of places
results array of the legacy Place object
places array of the new
Place object
Status of the request
status
Moved to the standard HTTP response (HTTP response code and message)
Any error messages
error_message
Moved to the standard HTTP response (HTTP response code and message)
Any info messages
info_messages
Removed
Page token
next_page_token
Removed
Place Details (New) response changes
The following table shows the changes to the top-level fields of the response
object
for Place Details (Legacy) and the response
object
for Place Details (New). For the new API, the only top-level field in the
response is the places array.
Field
Place Details (Legacy)
Place Details (New)
Notes
Place attributions
html_attributions
Moved into the new Place
object as attributions
Place Details (New)
result containing the legacy Place object
The new Place object
Status of the request
status
Moved to the standard HTTP response (HTTP response code and message)
Any info messages
info_messages
Moved to the standard HTTP response (HTTP response code and message)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

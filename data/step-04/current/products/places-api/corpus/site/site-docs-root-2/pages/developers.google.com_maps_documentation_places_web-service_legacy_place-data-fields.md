---
title: "Place Data Fields \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/place-data-fields
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/place-data-fields
  title: "Place Data Fields \_|\_ Places API \_|\_ Google for Developers"
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
Place Data Fields
Stay organized with collections
Save and categorize content based on your preferences.
Place data fields define the types of Place data to return when
requesting Place Details (Legacy). This page lists all place data fields, and explains
how they are supported for each API/SDK (support for place fields varies by
platform and/or feature).
For more information about how Place Details (Legacy) requests are billed, see
Usage and Billing .
The following table lists all supported place data field values by pricing
tier, and platform.
Important: Because place data results cannot be
empty, only place results with data are returned. For example, if a requested
place has no photos, the photos field won't be present in the
result.
Basic Data
Field
Places API (Legacy)
Places Library, Maps JavaScript API
Places SDK for Android (Legacy)
Places SDK for iOS (Legacy)
Address Components
address_components
address_components
Place.Field.ADDRESS_COMPONENTS
GMSPlaceFieldAddressComponents
Address
adr_address
adr_address
---
---
Business Status
business_status
business_status
Place.Field.BUSINESS_STATUS
GMSPlaceFieldBusinessStatus
Formatted Address
formatted_address
formatted_address
Place.Field.FORMATTED_ADDRESS
GMSPlaceFieldFormattedAddress
Viewport
geometry/viewport
geometry.viewport
Place.Field.VIEWPORT
GMSPlaceFieldViewport
Location
geometry/location
geometry.location
Place.Field.LOCATION
GMSPlaceFieldCoordinate
Icon
icon
icon
---
---
Icon Mask Base URI
icon_mask_base_uri
icon_mask_base_uri
Place.Field.ICON_MASK_URL
GMSPlaceFieldIconImageURL
Icon Background Color
icon_background_color
icon_background_color
Place.Field.ICON_BACKGROUND_COLOR
GMSPlaceFieldIconBackgroundColor
Name
name
name
Place.Field.DISPLAY_NAME
GMSPlaceFieldName
Permanently Closed ( deprecated )
permanently_closed
permanently_closed
---
---
Photo
photos
photos
Place.Field.PHOTO_METADATAS
GMSPlaceFieldPhotos
Place ID
place_id
place_id
Place.Field.ID
GMSPlaceFieldPlaceID
Plus Code
plus_code
plus_code
Place.Field.PLUS_CODE
GMSPlaceFieldPlusCode
Type
type
type
Place.Field.TYPES
GMSPlaceFieldTypes
URL
url
url
---
---
UTC Offset
utc_offset
utc_offset_minutes
Place.Field.UTC_OFFSET
GMSPlaceFieldUTCOffsetMinutes
Vicinity
vicinity
vicinity
---
---
Wheelchair Accessible Entrance
wheelchair_accessible_entrance
---
Place.Field.ACCESSIBILITY_OPTIONS
GMSPlaceFieldWheelchairAccessibleEntrance
Contact Data Fields
Field
Places API (Legacy)
Places Library, Maps JavaScript API
Places SDK for Android (Legacy)
Places SDK for iOS (Legacy)
Phone Number
formatted_phone_number
formatted_phone_number
---
---
International Phone Number
international_phone_number
international_phone_number
Place.Field.INTERNATIONAL_PHONE_NUMBER
GMSPlaceFieldPhoneNumber
Opening Hours
opening_hours
opening_hours
Place.Field.OPENING_HOURS
GMSPlaceFieldOpeningHours
Current Opening Hours
current_opening_hours
---
Place.Field.CURRENT_OPENING_HOURS
GMSPlaceFieldCurrentOpeningHours
Secondary Opening Hours
secondary_opening_hours
---
Place.Field.SECONDARY_OPENING_HOURS
GMSPlaceFieldSecondaryOpeningHours
Website
website
website
Place.Field.WEBSITE_URI
GMSPlaceFieldWebsite
Atmosphere Data Fields
Field
Places API (Legacy)
Places Library, Maps JavaScript API
Places SDK for Android (Legacy)
Places SDK for iOS (Legacy)
Curbside Pickup
curbside_pickup
---
Place.Field.CURBSIDE_PICKUP
GMSPlaceFieldCurbsidePickup
Delivery
delivery
---
Place.Field.DELIVERY
GMSPlaceFieldDelivery
Dine-in
dine_in
---
Place.Field.DINE_IN
GMSPlaceFieldDineIn
Editorial Summary
editorial_summary
---
Place.Field.EDITORIAL_SUMMARY
GMSPlaceFieldEditorialSummary
Price Level
price_level
price_level
Place.Field.PRICE_LEVEL
GMSPlaceFieldPriceLevel
Rating
rating
rating
Place.Field.RATING
GMSPlaceFieldRating
Reservable
reservable
---
Place.Field.RESERVABLE
GMSPlaceFieldReservable
Reviews
reviews
reviews
Place.Field.REVIEWS
---
Serves Beer
serves_beer
---
Place.Field.SERVES_BEER
GMSPlaceFieldServesBeer
Serves Breakfast
serves_breakfast
---
Place.Field.SERVES_BREAKFAST
GMSPlaceFieldServesBreakfast
Serves Brunch
serves_brunch
---
Place.Field.SERVES_BRUNCH
GMSPlaceFieldServesBrunch
Serves Dinner
serves_dinner
---
Place.Field.SERVES_DINNER
GMSPlaceFieldServesDinner
Serves Lunch
serves_lunch
---
Place.Field.SERVES_LUNCH
GMSPlaceFieldServesLunch
Serves Vegetarian Food
serves_vegetarian_food
---
Place.Field.SERVES_VEGETARIAN_FOOD
GMSPlaceFieldServesVegetarianFood
Serves Wine
serves_wine
---
Place.Field.SERVES_WINE
GMSPlaceFieldServesWine
Takeout
takeout
---
Place.Field.TAKEOUT
GMSPlaceFieldTakeout
User Ratings Total
user_ratings_total
user_ratings_total
Place.Field.USER_RATINGS_COUNT
GMSPlaceFieldUserRatingsTotal
Places API (Legacy) fields support
Find Place (Legacy) ,
Nearby Search (Legacy) , and
Text Search (Legacy)
requests all return a subset of the fields that are returned by Place Details (Legacy)
requests. These methods do NOT return the following fields:
address_component
adr_address
curbside_pickup
current_opening_hours
delivery
dine_in
editorial_summary
formatted_phone_number
international_phone_number
opening_hours.periods
opening_hours.special_days
opening_hours.type
opening_hours.weekday_text
reservable
secondary_opening_hours
reviews
serves_beer
serves_breakfast
serves_brunch
serves_dinner
serves_lunch
serves_vegetarian_food
serves_wine
takeout
type
url
user_ratings_total
utc_offset_minutes
vicinity
website
wheelchair_accessible_entrance
To return one or more of these data fields for a place, make a
Place Details (Legacy) request, pass a
place ID, and specify which fields to return.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

---
title: "Place Data Fields (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/data-fields
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/data-fields
  title: "Place Data Fields (New) \_|\_ Places SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Places SDK for Android
Guides
Send feedback
Place Data Fields (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Place data fields determine the information returned in Place objects for Place Details, Text Search, and Nearby Search requests.
You must specify at least one field in the field mask when making a request, otherwise, the call returns an error.
Place data fields are organized by pricing tiers (SKUs) which affect billing; review the Usage and Billing page for details.
The RESOURCE_NAME field provides the place's resource name, while DISPLAY_NAME gives the place's textual name.
Only place results containing data for the requested fields are returned, ensuring no empty results.
Select platform:
Android
iOS
JavaScript
Web Service
Place data fields define the place data to return in the response
Place
object for
Place Details (New) ,
Text Search (New) ,
and Nearby Search (New) .
In the request, you specify the list of fields to return, called the field mask or field list , from
Place.Field .
If you don't specify at least one field in the field mask, or if you omit the field mask, then the
call returns an error.
This page lists all the place data fields by pricing tier (SKU). For more information about how
requests are billed, see
Usage and Billing .
Important: Because place data results cannot be
empty, only place results with data are returned. For example, if a requested
place has no photos, the photos field won't be present in the
result.
Note: The RESOURCE_NAME field contains the place resource name in the form: places/PLACE_ID . Use DISPLAY_NAME to access the text name of the place.
Place data fields and SKUs
Field description
Property field
Place Details SKU
Text Search SKU
Nearby Search SKU
Accessibility options
ACCESSIBILITY_OPTIONS
Place Details Pro
Text Search Pro
Nearby Search Pro
Address ( ADR microformat )
ADR_FORMAT_ADDRESS
Place Details Essentials
Text Search Pro
Nearby Search Pro
Address components
ADDRESS_COMPONENTS
Place Details Essentials
Text Search Pro
Nearby Search Pro
Address descriptor
ADDRESS_DESCRIPTOR
Place Details Essentials
Text Search Pro
Nearby Search Pro
Allows dogs
ALLOWS_DOGS
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Business status
BUSINESS_STATUS
Place Details Pro
Text Search Pro
Nearby Search Pro
Containing places
CONTAINING_PLACES
Place Details Pro
Text Search Pro
Nearby Search Pro
Curbside pickup
CURBSIDE_PICKUP
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Current opening hours
CURRENT_OPENING_HOURS
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Current secondary opening hours
CURRENT_SECONDARY_OPENING_HOURS
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Delivery
DELIVERY
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Dine in
DINE_IN
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Display name
DISPLAY_NAME
Place Details Pro
Text Search Pro
Nearby Search Pro
Editorial summary
EDITORIAL_SUMMARY
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
EV charging options
EV_CHARGE_OPTIONS
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
AI-powered EVCS amenity summary
EV_CHARGE_AMENITY_SUMMARY
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Formatted address
FORMATTED_ADDRESS
Place Details Essentials
Text Search Pro
Nearby Search Pro
Fuel options
FUEL_OPTIONS
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
AI-powered place summary
GENERATIVE_SUMMARY
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Good for children
GOOD_FOR_CHILDREN
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Good for groups
GOOD_FOR_GROUPS
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Good for watching sports
GOOD_FOR_WATCHING_SPORTS
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Google Maps URI
GOOGLE_MAPS_URI
Place Details Pro
Text Search Pro
Nearby Search Pro
Icon background color
ICON_BACKGROUND_COLOR
Place Details Pro
Text Search Pro
Nearby Search Pro
Icon mask base URI
ICON_MASK_URL
Place Details Pro
Text Search Pro
Nearby Search Pro
International phone number
INTERNATIONAL_PHONE_NUMBER
Place Details Enterprise
Text Search Enterprise
Nearby Search Enterprise
Live music
LIVE_MUSIC
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Location
LOCATION
Place Details Essentials
Text Search Pro
Nearby Search Pro
Menu for children
MENU_FOR_CHILDREN
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Name
RESOURCE_NAME
Place Details Essentials (IDs Only)
Text Search Essentials (IDs Only)
Nearby Search Pro
National phone number
NATIONAL_PHONE_NUMBER
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
AI-powered neighborhood summary
NEIGHBORHOOD_SUMMARY
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Outdoor seating
OUTDOOR_SEATING
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Parking options
PARKING_OPTIONS
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Payment options
PAYMENT_OPTIONS
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Photos
PHOTO_METADATAS
Place Details Essentials (IDs Only)
Text Search Pro
Nearby Search Pro
Place ID
ID
Place Details Essentials (IDs Only)
Text Search Essentials (IDs Only)
Nearby Search Pro
Plus code
PLUS_CODE
Place Details Essentials
Text Search Pro
Nearby Search Pro
Postal address
POSTAL_ADDRESS
Place Details Essentials
Text Search Pro
Nearby Search Pro
Price level
PRICE_LEVEL
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Price range
PRICE_RANGE
Place Details Enterprise
Text Search Enterprise + Atmosphere
Nearby Search Enterprise
Primary type
PRIMARY_TYPE
Place Details Pro
Text Search Pro
Nearby Search Pro
Primary type display name
PRIMARY_TYPE_DISPLAY_NAME
Place Details Pro
Text Search Pro
Nearby Search Pro
Rating
RATING
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Regular opening hours
OPENING_HOURS
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Regular secondary opening hours
SECONDARY_OPENING_HOURS
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Reservable
RESERVABLE
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Restroom
RESTROOM
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Reviews
REVIEWS
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
AI-powered review summary
REVIEW_SUMMARY
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves beer
SERVES_BEER
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves breakfast
SERVES_BREAKFAST
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves brunch
SERVES_BRUNCH
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves cocktails
SERVES_COCKTAILS
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves coffee
SERVES_COFFEE
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves dessert
SERVES_DESSERT
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves dinner
SERVES_DINNER
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves lunch
SERVES_LUNCH
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves vegetarian food
SERVES_VEGETARIAN_FOOD
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves wine
SERVES_WINE
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Short formatted address
SHORT_FORMATTED_ADDRESS
Place Details Essentials
Text Search Pro
Nearby Search Pro
Sub-destinations
SUB_DESTINATIONS
Place Details Pro
Text Search Pro
Nearby Search Pro
Takeout
TAKEOUT
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Time zone
TIME_ZONE
Place Details Pro
Text Search Pro
Nearby Search Pro
Types
TYPES
Place Details Essentials
Text Search Pro
Nearby Search Pro
User rating count
USER_RATINGS_COUNT
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
UTC offset (minutes)
UTC_OFFSET
Place Details Pro
Text Search Pro
Nearby Search Pro
Viewport
VIEWPORT
Place Details Essentials
Text Search Pro
Nearby Search Pro
Website URI
WEBSITE_URI
Place Details Enterprise
Text Search Enterprise
Nearby Search Enterprise
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Place data fields determine the data returned in responses for Place Details, Text Search, and Nearby Search. You must specify the desired fields in the request using a *field mask* from `Place.Field`; omitting this will cause an error. The document outlines each place data field, like `ACCESSIBILITY_OPTIONS`, `ADDRESS_COMPONENTS` or `BUSINESS_STATUS`, and their respective pricing tier (SKU) for each search type. Place data is only returned if data is present.\n"]]

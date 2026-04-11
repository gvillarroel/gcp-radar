---
title: "Place Data Fields (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/data-fields
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/data-fields
  title: "Place Data Fields (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Places SDK for iOS
Send feedback
Place Data Fields (New)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This documentation details the data fields available when requesting place data using the Places SDK for iOS.
You must specify at least one field in the field mask ( GMSPlaceProperty ) to avoid errors when requesting data.
The cost of accessing specific fields is determined by the Place Details, Text Search, and Nearby Search SKUs.
Place data results are non-empty; if a field is requested but no data is available, it will not be included in the result.
The Places SDK for iOS offers a comprehensive GMSPlacePropertyAll type for retrieving all data fields.
Select platform:
Android
iOS
JavaScript
Web Service
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Place data fields define the place data to return in the response
GMSPlace
object for
Place Details (New) ,
Text Search (New) ,
and Nearby Search (New) .
In the request, you specify the list of fields to return, called the field mask , using
GMSPlaceProperty .
If you don't specify at least one field in the field mask, or if you omit the field mask, then the
call returns an error.
This page lists all the place data fields by pricing tier (SKU). For more information about how
requests are billed, see
Usage and Billing .
Important: Because place data results cannot be
empty, only place results with data are returned. For example, if a requested
place has no photos, the photos field won't be present in the
result.
Place data fields and SKUs
Field description
GMSPlaceProperty field
Place Details SKU
Text Search SKU
Nearby Search SKU
Accessibility Options
GMSPlacePropertyAccessibilityOptions
Place Details Pro
Text Search Pro
Nearby Search Pro
Address Components
GMSPlacePropertyAddressComponents
Place Details Essentials
Text Search Pro
Nearby Search Pro
Address Descriptor
GMSPlacePropertyAddressDescriptor
Place Details Essentials
Text Search Pro
Nearby Search Pro
Allows Dogs
GMSPlacePropertyAllowsDogs
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Business Status
GMSPlacePropertyBusinessStatus
Place Details Pro
Text Search Pro
Nearby Search Pro
Containing Places
GMSPlacePropertyContainingPlaces
Place Details Pro
Text Search Pro
Nearby Search Pro
Curbside Pickup
GMSPlacePropertyCurbsidePickup
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Current Opening Hours
GMSPlacePropertyCurrentOpeningHours
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Delivery
GMSPlacePropertyDelivery
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Dine-in
GMSPlacePropertyDineIn
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Editorial Summary
GMSPlacePropertyEditorialSummary
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
EV Charging options
GMSPlacePropertyEVChargeOptions
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Formatted Address
GMSPlacePropertyFormattedAddress
Place Details Essentials
Text Search Pro
Nearby Search Pro
Fuel Options
GMSPlacePropertyFuelOptions
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Good for Children
GMSPlacePropertyGoodForChildren
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Good for Groups
GMSPlacePropertyGoodForGroups
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Good for Watching Sports
GMSPlacePropertyGoodForWatchingSports
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Google Maps Links
GMSPlacePropertyGoogleMapsLinks
Place Details Pro
Text Search Pro
Nearby Search Pro
Icon Background Color
GMSPlacePropertyIconBackgroundColor
Place Details Pro
Text Search Pro
Nearby Search Pro
Image URL
GMSPlacePropertyIconImageURL
Place Details Pro
Text Search Pro
Nearby Search Pro
International Phone Number
GMSPlacePropertyPhoneNumber
Place Details Enterprise
Text Search Enterprise
Nearby Search Enterprise
Live Music
GMSPlacePropertyLiveMusic
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Location
GMSPlacePropertyCoordinate
Place Details Essentials
Text Search Pro
Nearby Search Pro
Menu for Children
GMSPlacePropertyMenuForChildren
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Name
GMSPlacePropertyName
Place Details Pro
Text Search Pro
Nearby Search Pro
Opening Hours
GMSPlacePropertyOpeningHours
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Outdoor Seating
GMSPlacePropertyOutdoorSeating
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Payment Options
GMSPlacePropertyPaymentOptions
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Photo
GMSPlacePropertyPhotos
Place Details Essentials (IDs Only)
Text Search Pro
Nearby Search Pro
Place ID
GMSPlacePropertyPlaceID
Place Details Essentials (IDs Only)
Text Search Essentials (IDs Only)
Nearby Search Pro
Plus Code
GMSPlacePropertyPlusCode
Place Details Essentials
Text Search Pro
Nearby Search Pro
Postal Address
GMSPlacePropertyPostalAddress
Place Details Essentials
Text Search Pro
Nearby Search Pro
Price Level
GMSPlacePropertyPriceLevel
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Price Range
GMSPlacePropertyPriceRange
Place Details Enterprise
Text Search Enterprise + Atmosphere
Nearby Search Enterprise
Rating
GMSPlacePropertyRating
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Reservable
GMSPlacePropertyReservable
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Restroom
GMSPlacePropertyRestroom
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Reviews
GMSPlacePropertyReviews
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Secondary Opening Hours
GMSPlacePropertySecondaryOpeningHours
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
Serves Beer
GMSPlacePropertyServesBeer
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves Breakfast
GMSPlacePropertyServesBreakfast
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves Brunch
GMSPlacePropertyServesBrunch
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves Cocktails
GMSPlacePropertyServesCocktails
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves Coffee
GMSPlacePropertyServesCoffee
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves Dessert
GMSPlacePropertyServesDessert
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves Dinner
GMSPlacePropertyServesDinner
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves Lunch
GMSPlacePropertyServesLunch
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves Vegetarian Food
GMSPlacePropertyServesVegetarianFood
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Serves Wine
GMSPlacePropertyServesWine
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Takeout
GMSPlacePropertyTakeout
Place Details Enterprise + Atmosphere
Text Search Enterprise + Atmosphere
Nearby Search Enterprise + Atmosphere
Time Zone
GMSPlacePropertyTimeZone
Place Details Pro
Text Search Pro
Nearby Search Pro
Type
GMSPlacePropertyTypes
Place Details Essentials
Text Search Pro
Nearby Search Pro
User Ratings Total
GMSPlacePropertyUserRatingsTotal
Place Details Enterprise
Text Search Pro
Nearby Search Enterprise
UTC Offset
GMSPlacePropertyUTCOffsetMinutes
Place Details Pro
Text Search Pro
Nearby Search Pro
Viewport
GMSPlacePropertyViewport
Place Details Essentials
Text Search Pro
Nearby Search Pro
Website
GMSPlacePropertyWebsite
Place Details Enterprise
Text Search Enterprise
Nearby Search Enterprise
Wheelchair Accessible Entrance
GMSPlacePropertyWheelchairAccessibleEntrance
Place Details Pro
Text Search Pro
Nearby Search Pro
Places SDK for iOS all fields
In addition to the fields listed previously, the Places SDK for iOS includes
the GMSPlacePropertyAll data type, which has the effect of returning
all available data fields.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

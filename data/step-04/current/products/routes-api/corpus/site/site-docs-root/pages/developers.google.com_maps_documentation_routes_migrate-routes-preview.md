---
title: "Migrate from the Preview release \_|\_ Routes API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/migrate-routes-preview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/migrate-routes-preview
  title: "Migrate from the Preview release \_|\_ Routes API \_|\_ Google for Developers"
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
Routes API
Send feedback
Migrate from the Preview release
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Routes API has transitioned from Preview to General Availability (GA), introducing new features and changes to existing ones.
You can now specify locations using address strings and Plus Codes in addition to place IDs and coordinates.
Toll info, fuel consumption, and traffic on a polyline now require explicit enablement using the extraComputations field in requests.
The geocodingResults array has been added to the response, providing place IDs and metadata for locations specified as address strings or Plus Codes.
Existing implementations relying on implicit inclusion of toll info, fuel consumption, or traffic on a polyline data need to be updated to utilize the extraComputations field.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
The Routes API was released as a public Preview (pre-GA) in September of
2022. Pre-GA Offerings are covered by the Google Maps Platform Service Specific
Terms .
For more information, see the launch stage descriptions .
This section describes how to migrate an app from the Preview release to the GA
release.
New features added to the GA release
The GA release adds the following new features that were not included in the
Preview:
Along with place IDs and latitude/longitude coordinates, you can now
specify a location in the GA release by using:
Address strings ("Chicago, IL" or
"Darwin, NT, Australia")
Address strings are often how a user inputs an address. However,
{product_name} must first geocode the address string internally to convert
it to latitude/longitude coordinates before it can calculate a route.
In addition, support for the regionCode request parameter has been
added, which lets you specify to return geocoded results for a specific
geographic region.
Plus Codes
Plus Codes are like street addresses for people or places that don't
have an actual address. Instead of addresses with street names and
numbers, Plus Codes are based on latitude and longitude, and are
displayed as numbers and letters.
The compute routes response now contains the
geocodingResults array. For every location in the request (origin,
destination, or intermediate waypoint) that was specified as an address
string or as a Plus code , the API performs a place ID lookup. Each
element of this array contains the place ID corresponding to a location
along with additional metadata about the location. Locations in the request
specified as a place ID or as latitude/longiiture coordinates are ignored.
Changes to existing Preview features
You must now explicitly enable the following features in the GA by
adding the new array extraComputations field to the request:
Toll info
Fuel consumption
Traffic on a polyline
In the Preview release, you used a field mask to specify to
return information for these features in the response. Now, you must both:
Set the new extraComputations array request parameter to enable these
features.
Set a field mask to specify to return the information in the response.
What do I need to know?
The following fields will no longer be included in
computeRouteMatrix responses
unless explicitly enabled by setting extraComputations :
travelAdvisory.tollInfo (Toll info)
The following fields will no longer be included in
computeRoutes responses
unless explicitly enabled by setting extraComputations :
routes.legs.travelAdvisory.tollInfo (Toll info)
routes.travelAdvisory.tollInfo (Toll info)
routes.travelAdvisory.fuelConsumptionMicroliters (Fuel consumption)
routes.travelAdvisory.speedReadingIntervals (Traffic on a polyline)
routes.legs.travelAdvisory.speedReadingIntervals (Traffic on a polyline)
What do I need to do?
To receive the response fields for toll info, fuel consumption, or traffic on a
polyline, you must set the new request array field, extraComputations , to
include one or more of the following values:
To receive toll info , set the new
extraComputations array field to "TOLLS" .
To receive fuel consumption , set the new extraComputations
array field to "FUEL_CONSUMPTION" .
To receive traffic information on polylines , set the
new extraComputations array field to "TRAFFIC_ON_POLYLINE" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API's GA release introduces new location specification options, including address strings and Plus Codes, and includes a `geocodingResults` array in the response. To enable toll info, fuel consumption, and traffic on a polyline, users must now set the `extraComputations` array in their requests. `extraComputations` values are \"TOLLS\", \"FUEL_CONSUMPTION\", and \"TRAFFIC_ON_POLYLINE\". The field mask must still be used. Certain fields will be omitted in the response unless enabled by `extraComputations`.\n"]]

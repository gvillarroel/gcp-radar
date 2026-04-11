---
title: "Autocomplete (New) and session pricing \_|\_ Places SDK for iOS \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing
  title: "Autocomplete (New) and session pricing \_|\_ Places SDK for iOS \_|\_ Google\
    \ for Developers"
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
Autocomplete (New) and session pricing
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google recommends using sessions with Autocomplete (New) for simplified pricing and a consistent pricing model.
Sessions are initiated with the first Autocomplete (New) request containing a session token and conclude with a Place Details (New) or Address Validation request using the same token.
Three common pricing scenarios exist: Autocomplete for location data, place discovery, and checkout and delivery, each with specific billing SKUs and rates.
If sessions are not used, each Autocomplete (New) request is billed individually.
Incomplete or abandoned sessions revert to per-request pricing for Autocomplete (New) requests.
Select platform:
Android
iOS
JavaScript
Web Service
This feature requires that you enable
Places API (New), the next generation of the Places API. For more information, see
Enable APIs .
Google recommends that you use sessions with Autocomplete (New) .
Sessions help simplify pricing and provide a consistent pricing model for use with Autocomplete (New).
A session starts with the first Autocomplete (New) request that includes a session token,
continues through each subsequent Autocomplete (New) request, and is then terminated by a request
to Place Details (New) or Address Validation that uses the session token.
After the session terminates, any call to Autocomplete (New), Place Details (New), or Address
Validation that uses the expired session token is billed as if there was no session token.
Incomplete sessions, meaning sessions that are not terminated by a request to Place Details (New)
or Address Validation, are billed only for the Autocomplete (New) requests using the
SKU: Autocomplete Requests .
Session billing
Sessions terminating in a Place Details (New) Essentials request
For Autocomplete (New) sessions that terminate in a request using fields from
SKU: Places API Place Details Essentials :
First 12 Autocomplete (New) requests : You are billed for each Autocomplete
(New) request, up to a maximum of 12 requests, using the
SKU: Autocomplete Requests .
For Autocomplete (New) requests 13 and higher in the same session : You are
billed at the
SKU: Autocomplete Session Usage , meaning there is no charge for those requests.
Place Details (New) Essentials: You are also billed for the terminating request at SKU: Places API Place Details Essentials .
Note: If you terminate the session by making a request to Place Details (New) using the
SKU: Places API Place Details Essentials (IDs Only) , then all requests
to Autocomplete (New) are billed using the
SKU: Autocomplete Requests , as if
you did not use sessions. This is because the request using the
SKU: Places API Place Details Essentials (IDs Only) is not charged, so
all Autocomplete (New) requests revert to per-request pricing.
Sessions terminating in Address Validation or Place Details (New) (non-Essentials) requests
For Autocomplete (New) sessions that terminate in an Address Validation request or a Place
Details (New) request using fields from Place Details
Pro ,
Enterprise ,
or Enterprise + Atmosphere :
Autocomplete (New) requests: All Autocomplete (New) requests are billed at the
SKU: Autocomplete Session Usage ,
meaning there is no charge for those requests.
Place Details (New) or Address Validation request: You are also billed for the
terminating request at the appropriate SKU:
Place Details (New) terminating requests are billed at SKU: Place Details Enterprise + Atmosphere , regardless of the fields requested.
Address Validation terminating requests are billed at SKU: Address Validation Enterprise .
Session pricing scenarios
The three most common session pricing scenarios are:
Autocomplete for location data
Autocomplete for place discovery
Autocomplete for checkout and delivery
The following sections describe the individual billing charges for each scenario.
Autocomplete for location data
In the Autocomplete for location data scenario, you are interested in using Autocomplete (New) and
Place Details (New) to obtain location information about a place. For example, you select a
suggestion from Autocomplete (New), then use Place Details (New) to get the place's latitude and
longitude coordinates to show that place on a map.
Location information can include the following:
Address
Location as latitude and longitude coordinates
Plus Code
Types
Viewport
This session is terminated by a single request to Place Details (New) that requests fields
defined by the
SKU: Place Details Essentials .
You are then billed as follows:
The first 12 Autocomplete (New) requests are billed at the SKU: Autocomplete Requests .
Any remaining Autocomplete (New) requests are billed at the
SKU: Autocomplete Session Usage ,
meaning there is no charge for those requests.
The terminating Place Details (New) request is charged at the
SKU: Places API Place Details Essentials .
Autocomplete for place discovery
In the Autocomplete for place discovery scenario, you are interested in obtaining more than just
location data about a place. For example, you might request any of the following:
Accessibility options
Current opening hours
Parking options
Reviews
Ratings
For this scenario, your session is terminated by a single request to Place Details (New) that
requests any fields included in the Place Details (New)
Pro ,
Enterprise , or
Enterprise + Atmosphere SKUs.
You are then billed as follows:
All Autocomplete (New) requests are billed at the
SKU: Autocomplete Session Usage ,
meaning there is no charge for those requests.
The terminating Place Details (New) request is billed at SKU: Places API Place Details Enterprise + Atmosphere .
Autocomplete for checkout and delivery
The Address Validation API is a
service that accepts an address. It identifies address components and validates them. It also
standardizes the address for mailing and finds the best known latitude and longitude coordinates
for it.
In the Autocomplete for checkout and delivery scenario, you terminate the session with a request
to the
Address Validation API
to validate the selected address.
You are then billed as follows:
All Autocomplete (New) requests are billed at the
SKU: Autocomplete Session Usage ,
meaning there is no charge for those requests.
An optional Place Details Essentials request is billed at no charge, if requested before the terminating Address Validation request.
The terminating Address Validation request is billed at the
SKU: Address Validation Enterprise .
Pricing without sessions
If you don't use sessions, you are billed per request to Autocomplete (New) using the
SKU: Autocomplete Requests .
Pricing for incomplete or abandoned sessions
If a session is abandoned, meaning not terminated by a call to Place Details (New) or Address
Validation, Autocomplete (New) requests revert to the per-request pricing model and are billed
per the
SKU: Autocomplete Requests .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Sessions are recommended with Autocomplete (New) for simplified pricing. A session begins with an Autocomplete (New) request containing a session token and continues through subsequent requests, ending with a Place Details (New) or Address Validation request. Terminated sessions are billed based on the terminating request type: Location Only, Place Discovery, or Checkout/Delivery, each with specific pricing. Incomplete sessions or using Place Details(ID only) fall back to per-request pricing for Autocomplete Requests at 2.83 USD per 1000 requests.\n"]]

---
title: "Overview \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/overview
  title: "Overview \_|\_ Places API \_|\_ Google for Developers"
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
Guides
Send feedback
Overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places API provides location data and imagery for establishments, geographic locations, and points of interest through various methods.
You can use the Places API to create location-aware features, such as place search, autocomplete, details retrieval, and photo integration.
The Places API offers two versions: Places API and Places API (New), with differences outlined in a guide for choosing the best fit for your project.
You can access places data through requests to specific service endpoints using an API key or OAuth token, receiving responses in JSON or XML format.
Detailed steps for using the API include setup, text search, place details retrieval using place IDs, and accessing place photos.
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
Introduction
The Places API is a service that accepts HTTP requests for location
data through a variety of methods. It returns formatted location data
and imagery about establishments, geographic locations, or prominent
points of interest.
Note: Google Maps Platform provides separate
versions of the Places library for Android , iOS , and JavaScript . We recommend that
you use the version of the Places library specific to your platform. That is,
if you are developing an Android app, you should use the Android version of
Places.
Why use the Places API (New)
Create location-aware features to make detailed location data
available to your users. The data available through the
Places API (New) is built on one of the most accurate, up-to-date,
and comprehensive place models of the real world. Here are example use
cases for applications:
Display condo rentals within major metropolitan areas with results
targeted specifically to cities.
Include place details in a pickup or delivery status update.
Display a list of parks in an area along with user-submitted
photos and reviews.
Provide people planning trips with contact information, reviews,
and price levels for establishments along the way.
Note: Places API (New) is the current version.
Places API is now Legacy and can no longer be enabled. Legacy
documentation and migration guides are available on the Legacy
tab.
What can you do with the Places API (New)
You can use the Places API (New) to include the following features
in your applications:
Provide place search results from different types of users queries,
such as text input, nearby locations, and ambiguous or categorical
user queries.
Enable autocomplete features for different search types, either
specific text queries or categorical queries.
Refine the type of details returned about a place, such as
operating hours, a summary, user reviews, and a photo.
Add high-quality photos to locations served by your application.
Many Google Maps Platform APIs support place IDs , where
the place ID uniquely identifies a place in the Google Places database and
on Google Maps. There are many ways to obtain a place ID, including from
the Places API (New), but also from the Geocoding API , Routes API , and Address Validation API .
Once you have a place ID, you can use the Places API (New) to
request more details about a particular establishment or point of
interest, such as its complete address, phone number, user rating, and
reviews.
How the Places API (New) works
Places API (New) accepts requests as a standard URL with a
specific service endpoint, such as /places or
places:searchText and returns a JSON response.
Places API (New) supports authorization by API key and OAuth token.
The following example makes a Place Details (New) request to return
the address components for a place ID using an API key:
https://places.googleapis.com/v1/places/GyuEmsRBfy61i59si0 ?fields=addressComponents & key= YOUR_API_KEY
How to use the Places API (New)
The steps below cover a typical use case scenario for using the Places
API service. As you build out your solution, you can use additional
endpoints, such as Nearby Search (New) and Place Photos (New).
1
Get set up
Set up billing, enable
Places API (New), and make your first request.
2
Try a basic text search
Issue a text search by using Text Search (New) .
3
Use the place ID for more details
Many Google Maps Platform APIs return a place ID as part of a
response. Use place IDs to get Place Details (New) .
4
Get a photo for a place
Place Photos (New) gives you access to the millions of
photos stored in the Places database. Use Place Photos (New) to
access photos for a place.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

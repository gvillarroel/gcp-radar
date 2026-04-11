---
title: "Geocoding API overview \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/guides-v3/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/guides-v3/overview
  title: "Geocoding API overview \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Version 4 of the Geocoding API is generally available. To migrate to v4, see the v3 to v4 Migration guide .
Home
Products
Google Maps Platform
Documentation
Web Services
Geocoding API
Developer Guides v3
Send feedback
Geocoding API overview
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
The Geocoding API is a service that accepts a place as an
address, latitude and longitude coordinates, or Place ID. It converts the
address into latitude and longitude coordinates and a Place ID, or converts
latitude and longitude coordinates or a Place ID into an address.
What you can do with the Geocoding API
You can use the Geocoding API to obtain geocoding data for one or more addresses or
places, including the following:
Geographic coordinates for addresses.
Addresses for sets of latitude and longitude coordinates.
Addresses for place IDs.
You can control where the results appear and constrain the results to a particular region,
county, or postal code.
How the Geocoding API works
The Geocoding API does both geocoding and reverse geocoding:
Geocoding : Converts addresses such as
"1600 Amphitheatre Parkway, Mountain View, CA" into latitude and longitude coordinates or Place
IDs. You can use these coordinates to place markers on a map, or to center or reposition the map
within the view frame.
Reverse geocoding : Converts
latitude/longitude coordinates or a Place ID into a human-readable address. You can use
addresses for a variety of scenarios, including deliveries or pickups.
The following demo uses the Geocoding Service through the Maps JavaScript API
to demonstrate how the Geocoding API works. Open the map in a separate tab
to see more options and details.
Resources
The following table summarizes the resources available through the
Geocoding API along with the data each method returns.
Data resources
Data returned
Return format
Geocoding
Returns address, address components, and address types. See
Results
in the Geocoding request and response guide.
JSON
XML
Reverse geocoding
Returns address, address components, and address types. See
Reverse geocoding responses
in the Reverse geocoding request and response guide.
Place geocoding
Returns address, address components, and address types. See
Reverse geocoding responses
in the Place geocoding request and response guide.
How to use the Geocoding API
1
Get set up.
Start with Set up your
Google Cloud project
and complete the setup
instructions that follow.
2
Try a geocoding request
Once you have an API key, you can start testing out the Geocoding API directly from
curl or a browser. You'll need to supply the correct lookup parameters
for address or component lookups. See
Geocoding parameters
for details.
3
Try a reverse geocoding request
Supply latitude/longitude coordinates along with your API key to obtain
address components for the closest human-readable address for that location.
See Reverse geocoding requests
for details.
4
Understand response basics
All methods in the Geocoding API return the same data in either JSON or XML.
See
Geocoding responses
for an explanation of the data, status codes, and error messages.
5
Incorporate geocoding data into your own app!
You can use geocoding data to obtain addresses from map markers
or to supply markers on a map based on a known address.
Available client libraries
Call this API in the language of
your choice through one of the following client libraries:
Java
Client for Google Maps Services
Python
Client for Google Maps Services
Go Client
for Google Maps Services
Node.js
Client for Google Maps Services
The Java Client, Python Client, Go Client and Node.js Client for Google Maps
Services are community-supported client libraries, open sourced under the
Apache 2.0 License .
Download them from GitHub, where you can also find installation instructions and sample code.
What's next
Start using the Geocoding API : Go to
Set up your
Google Cloud project .
Get started with sample requests and responses : Go to
Geocoding requests and responses
Follow best practices : Go to Geocoding Addresses Best
Practices .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

---
title: "Geocoding API v4 overview \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/geocoding-v4-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/geocoding-v4-overview
  title: "Geocoding API v4 overview \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Geocoding API v4 methods have a default quota of 25 queries per second (QPS). For information on requesting a higher quota, see View and manage quotas and select Geocoding API as the service.
Home
Products
Google Maps Platform
Documentation
Web Services
Geocoding API
Send feedback
Geocoding API v4 overview
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
You can use the Geocoding API to obtain geocoding data for one or more
addresses or places, including the following:
This release of Geocoding API v4 includes the release of the following
endpoints:
Geocode an address
— Geographic coordinates for addresses. Also called forward
geocoding .
Geocode a location
— Addresses for sets of latitude and longitude coordinates. Also
called reverse geocoding .
Place geocoding
— Retrieve an address from a place ID.
Search for destinations
— Search for a destination from an address, place ID, or location.
You can control where the results appear and constrain the results to a
particular region, county, or postal code.
Try the demo
How the Geocoding API works
The Geocoding API does both geocoding and reverse geocoding:
Geocoding : Converts addresses
such as "1600 Amphitheatre Parkway, Mountain View, CA" into latitude and
longitude coordinates or Place IDs. You can use these coordinates to place
markers on a map, or to center or reposition the map within the view frame.
Reverse geocoding :
Converts latitude and longitude coordinates or a Place ID into a
human-readable address. You can use addresses for a variety of scenarios,
including deliveries or pickups.
The following table summarizes the resources available through the
Geocoding API along with the data each method returns.
Data resources
Data returned
Return format
Geocoding
Returns address, address components, and address types. See the
Geocode response documentation.
JSON
Reverse geocoding
Returns address, address components, and address types. See the
Reverse geocoding response
documentation.
Place geocoding
Returns address, address components, and address types. See the
Place geocoding response
documentation.
Destination search
Returns detailed information about various destinations based on different input criteria, such as an address, place ID, or latitude and longitude coordinates. See the
Destination search documentation.
Features in Geocoding API v4
Version 4 of the Geocoding API offers these new features.
Destination search method
v4 introduces a Destination search
method that lets you
retrieve detailed information about various destinations based on different
input criteria, such as an address, place ID, or latitude and longitude
coordinates. The response includes AI-powered
summaries and navigation
point tokens that
contain contextual information that can be passed to the Navigation
SDK for precise routing.
Important: If you've previously been using Geocoding v3, see the instructions
on migrating from v3 features to the SearchDestinations
method .
Implemented on the Google Cloud standard platform
Geocoding API v4 is implemented on the service
infrastructure
on Google Cloud. This implementation brings with it a more secure and trusted
platform with enhanced security options like
OAuth . This
standard API design brings a level of consistency across the APIs that improve
the efficiency of development with Geocoding API v4.
OAuth support added
Geocoding API v4 supports the use of OAuth
2.0 for authentication. Google
supports common OAuth 2.0 scenarios such as those for a web server.
Field mask support added
Use field masks to specify what
information the response should return. For the Geocode an
address , Geocode a
location , and Place
geocoding methods, all fields
in the response object are returned by default. For the Search for
destinations method,
you must specify a field mask in the API request.
API security
The Geocoding API v4 is designed as a server-to-server API. Direct client-side
calls from a browser expose API keys to significant risk of theft and misuse, as
HTTP referrer restrictions are not sufficient protection for web service
endpoints.
We strongly recommend that you call the Geocoding API v4 from your own backend
server. For more details on secure implementation patterns and alternatives for
client-side needs, see Security
considerations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

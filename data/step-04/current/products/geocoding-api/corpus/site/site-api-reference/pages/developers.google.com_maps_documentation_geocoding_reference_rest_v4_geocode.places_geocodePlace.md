---
title: "Method: geocode.places.geocodePlace \_|\_ Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.places/geocodePlace
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.places/geocodePlace
  title: "Method: geocode.places.geocodePlace \_|\_ Geocoding API \_|\_ Google for\
    \ Developers"
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
Reference
Send feedback
Method: geocode.places.geocodePlace
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
This method performs a geocode lookup using a place ID.
HTTP request
GET https://geocode.googleapis.com/v4/geocode/{place=places/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
place
string
Required. Place identifier to geocode in the format of places/{place}.
Query parameters
Parameters
languageCode
string
Optional. Language in which the results should be returned.
regionCode
string
Optional. Region code. The region code, specified as a ccTLD ("top-level domain") two-character value. The parameter affects results based on applicable law.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of GeocodeResult .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/maps-platform.geocode
https://www.googleapis.com/auth/maps-platform.geocode.place
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

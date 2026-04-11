---
title: "Method: geocode.location.geocodeLocation \_|\_ Geocoding API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.location/geocodeLocation
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.location/geocodeLocation
  title: "Method: geocode.location.geocodeLocation \_|\_ Geocoding API \_|\_ Google\
    \ for Developers"
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
Method: geocode.location.geocodeLocation
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Query parameters
Request body
Response body
Authorization scopes
This method performs a location geocode, which maps a LatLng to an address. It also provides structured information about the address.
HTTP request
GET https://geocode.googleapis.com/v4/geocode/location
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
languageCode
string
Optional. Language in which the results should be returned.
regionCode
string
Optional. Region code. The region code, specified as a ccTLD ("top-level domain") two-character value. The parameter affects results based on applicable law.
types[]
string
Optional. A set of type tags to restrict the results. Results that do not have any of the specified types are removed.
For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types .
granularity[]
enum ( GeocodeResult.Granularity )
Optional. A filter of one or more location granularity enums.
Union parameter location_input . The location to geocode. location_input can be only one of the following:
locationQuery
string
The location in the format of "lat,lng" string. For example, "64.7611872,-18.4705364".
location
object ( LatLng )
The location in the structured format.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of GeocodeLocationResponse .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/maps-platform.geocode
https://www.googleapis.com/auth/maps-platform.geocode.location
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

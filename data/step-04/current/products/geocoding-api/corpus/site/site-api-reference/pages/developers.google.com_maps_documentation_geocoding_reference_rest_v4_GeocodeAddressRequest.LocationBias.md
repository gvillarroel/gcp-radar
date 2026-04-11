---
title: "GeocodeAddressRequest.LocationBias \_|\_ Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/GeocodeAddressRequest.LocationBias
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/GeocodeAddressRequest.LocationBias
  title: "GeocodeAddressRequest.LocationBias \_|\_ Geocoding API \_|\_ Google for\
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
GeocodeAddressRequest.LocationBias
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The region to search. This location serves as a bias which means results around the given location are preferred.
JSON representation
{
// Union field type can be only one of the following:
"rectangle" : {
object ( Viewport )
}
// End of list of possible types for union field type .
}
Fields
Union field type . Types of location bias. type can be only one of the following:
rectangle
object ( Viewport )
A rectangular box defined by northeast and southwest corner. rectangle.high() must be the northeast point of the rectangle viewport. rectangle.low() must be the southwest point of the rectangle viewport. rectangle.low().latitude() cannot be greater than rectangle.high().latitude() . This will result in an empty latitude range. A rectangle viewport cannot be wider than 180 degrees.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

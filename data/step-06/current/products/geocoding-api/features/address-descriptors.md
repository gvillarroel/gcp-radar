---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:37.281Z"
product_name: "Geocoding API"
product_slug: "geocoding-api"
feature_name: "Address descriptors"
feature_slug: "address-descriptors"
latest_feature_date: "2024-10-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddress"
  - "https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddressQuery"
  - "https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.location/geocodeLocation"
keywords:
  - "address"
  - "descriptors"
  - "is"
  - "preview"
  - "that"
  - "adds"
  - "extra"
  - "location"
---

# Address descriptors

Product: Geocoding API
Coverage: LOW

## Step 02 Summary

Address descriptors is a preview feature that adds extra location context using landmarks and areas.

## Extended Definition

Address descriptors is a preview feature that adds extra location context using landmarks and areas.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddress](https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddress)
- [https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddressQuery](https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddressQuery)
- [https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.location/geocodeLocation](https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.location/geocodeLocation)

## Supporting Pages

### "Method: geocode.address.geocodeAddress \_|\_ Geocoding API \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddress](https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddress)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/maps-platform.geocode https://www.googleapis.com/auth/maps-platform.geocode.address Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP request Query parameters Request body Response body Authorization scopes This method performs an address geocode, which maps an address to a LatLng.
- This location serves as a bias which means results around the given location are preferred. languageCode string Optional.
- HTTP request GET https://geocode.googleapis.com/v4/geocode/address The URL uses gRPC Transcoding syntax.

### "Method: geocode.address.geocodeAddressQuery \_|\_ Geocoding API \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddressQuery](https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddressQuery)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/maps-platform.geocode https://www.googleapis.com/auth/maps-platform.geocode.address Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP request Path parameters Query parameters Request body Response body Authorization scopes This method performs an address geocode, which maps an address to a LatLng.
- This location serves as a bias which means results around the given location are preferred. languageCode string Optional.
- HTTP request GET https://geocode.googleapis.com/v4/geocode/address/{addressQuery} The URL uses gRPC Transcoding syntax.

### "Method: geocode.location.geocodeLocation \_|\_ Geocoding API \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.location/geocodeLocation](https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.location/geocodeLocation)
- Source ID: `site-api-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- HTTP request Query parameters Request body Response body Authorization scopes This method performs a location geocode, which maps a LatLng to an address.
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/maps-platform.geocode https://www.googleapis.com/auth/maps-platform.geocode.location Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP request GET https://geocode.googleapis.com/v4/geocode/location The URL uses gRPC Transcoding syntax.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]


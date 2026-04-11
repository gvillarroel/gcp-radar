---
title: "Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/reference/rest
  title: "Geocoding API \_|\_ Google for Developers"
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
Geocoding API
Stay organized with collections
Save and categorize content based on your preferences.
Convert addresses into geographic coordinates (geocoding), which you can use to place markers or position the map. This API also allows you to convert geographic coordinates into an address (reverse geocoding).
REST Resource: v4.geocode.address
REST Resource: v4.geocode.destinations
REST Resource: v4.geocode.location
REST Resource: v4.geocode.places
REST Resource: v4beta.geocode.address
REST Resource: v4beta.geocode.destinations
REST Resource: v4beta.geocode.location
REST Resource: v4beta.geocode.places
REST Resource: v4alpha.geocode.address
REST Resource: v4alpha.geocode.destinations
REST Resource: v4alpha.geocode.location
REST Resource: v4alpha.geocode.places
Service: geocoding-backend.googleapis.com
If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://geocoding-backend.googleapis.com/$discovery/rest?version=v4
https://geocoding-backend.googleapis.com/$discovery/rest?version=v4beta
https://geocoding-backend.googleapis.com/$discovery/rest?version=v4alpha
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://geocode.googleapis.com
REST Resource: v4.geocode.address
Methods
geocodeAddress
GET /v4/geocode/address
This method performs an address geocode, which maps an address to a LatLng.
geocodeAddressQuery
GET /v4/geocode/address/{addressQuery}
This method performs an address geocode, which maps an address to a LatLng.
REST Resource: v4.geocode.destinations
Methods
searchDestinations
POST /v4/geocode/destinations
This method performs a destination lookup and returns a list of destinations.
REST Resource: v4.geocode.location
Methods
geocodeLocation
GET /v4/geocode/location
This method performs a location geocode, which maps a LatLng to an address.
geocodeLocationQuery
GET /v4/geocode/location/{locationQuery}
This method performs a location geocode, which maps a LatLng to an address.
REST Resource: v4.geocode.places
Methods
geocodePlace
GET /v4/geocode/{place=places/*}
This method performs a geocode lookup using a place ID.
REST Resource: v4beta.geocode.address
Methods
geocodeAddress
GET /v4beta/geocode/address
This method performs an address geocode, which maps an address to a LatLng.
geocodeAddressQuery
GET /v4beta/geocode/address/{addressQuery}
This method performs an address geocode, which maps an address to a LatLng.
REST Resource: v4beta.geocode.destinations
Methods
searchDestinations
POST /v4beta/geocode/destinations
This method performs a destination lookup and returns a list of destinations.
REST Resource: v4beta.geocode.location
Methods
geocodeLocation
GET /v4beta/geocode/location
This method performs a location geocode, which maps a LatLng to an address.
geocodeLocationQuery
GET /v4beta/geocode/location/{locationQuery}
This method performs a location geocode, which maps a LatLng to an address.
REST Resource: v4beta.geocode.places
Methods
geocodePlace
GET /v4beta/geocode/{place=places/*}
This method performs a geocode lookup using a place ID.
REST Resource: v4alpha.geocode.address
Methods
geocodeAddress
GET /v4alpha/geocode/address
This method performs an address geocode, which maps an address to a LatLng.
geocodeAddressQuery
GET /v4alpha/geocode/address/{addressQuery}
This method performs an address geocode, which maps an address to a LatLng.
REST Resource: v4alpha.geocode.destinations
Methods
searchDestinations
POST /v4alpha/geocode/destinations
This method performs a destination lookup and returns a list of destinations.
REST Resource: v4alpha.geocode.location
Methods
geocodeLocation
GET /v4alpha/geocode/location
This method performs a location geocode, which maps a LatLng to an address.
geocodeLocationQuery
GET /v4alpha/geocode/location/{locationQuery}
This method performs a location geocode, which maps a LatLng to an address.
REST Resource: v4alpha.geocode.places
Methods
geocodePlace
GET /v4alpha/geocode/{place=places/*}
This method performs a geocode lookup using a place ID.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

---
title: "Migrate from Geocoding v3 to v4 \_|\_ Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/geocoding-v4-migrate
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/geocoding-v4-migrate
  title: "Migrate from Geocoding v3 to v4 \_|\_ Geocoding API \_|\_ Google for Developers"
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
Migrate from Geocoding v3 to v4
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
The Geocoding API v4 introduces several new methods that replace functionality
in v3 of the API. This guide shows you how to migrate your app to use the new v4
methods.
You can use your existing API keys with the new v4 methods. However, if you
have requested a quota uplift on v3 of the API, you must request an uplift on
the new v4 APIs.
Warning: Due to the security risks, you shouldn't call Geocoding API v4 methods
directly from client-side JavaScript. If you are doing so against
recommendations, be aware that requesting higher quotas increases the potential
impact of API key abuse. All calls to Geocoding API v4 using API keys exposed on
the client-side are at high risk. For more details, see Security
considerations .
Migrate from v3 Forward Geocoding
If you use v3
Geocoding to
geocode addresses, you should migrate to the v4 Geocode an
address method, which accepts a GET
request.
The v4 API changes names, structure, and support for several parameters. We
strongly recommend that you use a field
mask to specify the fields you
want returned in the response.
Warning: In all v4 methods, field names are formatted using lower camel case
(e.g., addressComponents), in contrast to v3 methods, which used snake case
(e.g., address_components). RPC responses continue to use snake case in v4, as
they did in v3.
Request parameter changes
v3 Parameter
v4 Parameter
Notes
address , components
address
Unstructured address (v3 address ) is now passed in URL path. Component filters (v3 components ) are now passed as address.* query parameters.
bounds
locationBias.rectangle
Renamed; structure changed to object.
language
languageCode
Renamed.
region
regionCode
Renamed.
extra_computations
Removed
Response field changes
v3 Field
v4 Field
Notes
status , error_message
Removed
v4 uses HTTP status codes and error bodies .
results.address_components.long_name / results.address_components.short_name
results.addressComponents.longText / results.addressComponents.shortText
Renamed.
results.geometry.location_type
results.granularity
Renamed.
results.geometry.location
results.location
Field names: lat / lng -> latitude / longitude .
results.geometry.viewport
results.viewport
Field names: northeast / southwest -> high / low .
results.postcode_localities
results.postalCodeLocalities
Renamed. Now returned for one or more localities (v3 required >1).
results.partial_match
Removed
New
results.addressComponents.languageCode
Language of the specific address component.
New
results.bounds
Explicit bounds using high / low .
New
results.place
Resource name for the place.
New
results.postalAddress
Structured PostalAddress object.
Migrate from v3 Reverse Geocoding
If you use v3 Reverse
Geocoding
to turn coordinates into addresses, you should migrate to the v4 Reverse
geocode a location method,
which accepts a GET request.
The v4 API changes names, structure, and support for several parameters. We
strongly recommend that you use a field
mask to specify the fields you
want returned in the response.
Warning: In all v4 methods, field names are formatted using lower camel case
(e.g., addressComponents), in contrast to v3 methods, which used snake case
(e.g., address_components). RPC responses continue to use snake case in v4, as
they did in v3.
Request parameter changes
v3 Parameter
v4 Parameter
Notes
language
languageCode
Renamed.
region
regionCode
Renamed.
result_type
types
Renamed; uses repeated query parameters.
location_type
granularity
Renamed; uses repeated query parameters.
extra_computations
Removed
Response field changes
v3 Field
v4 Field
Notes
status , error_message
Removed
v4 uses HTTP status codes and error bodies .
results.address_components.long_name / results.address_components.short_name
results.addressComponents.longText / results.addressComponents.shortText
Renamed.
results.geometry.location_type
results.granularity
Renamed.
results.geometry.location
results.location
Field names: lat / lng -> latitude / longitude .
results.geometry.viewport
results.viewport
Field names: northeast / southwest -> high / low .
New
results.addressComponents.languageCode
Language of the specific address component.
New
results.bounds
Explicit bounds using high / low .
New
results.place
Resource name for the place.
New
results.postalAddress
Structured PostalAddress object.
Migrate from v3 Place Geocoding
If you use place_id to get the address for a specific Place ID with Geocoding
v3, you must migrate to the v4 Place
Geocoding method, which
accepts a GET request.
The v4 API changes names, structure, and support for several parameters. We
strongly recommend that you use a field
mask to specify the fields you
want returned in the response.
Warning: In all v4 methods, field names are formatted using lower camel case
(e.g., addressComponents), in contrast to v3 methods, which used snake case
(e.g., address_components). RPC responses continue to use snake case in v4, as
they did in v3.
Request parameter changes
v3 Parameter
v4 Parameter
Notes
place_id
place field in request proto
The Place ID is now provided as a path parameter places/{place} , for example: https://geocode.googleapis.com/v4/geocode/places/ChIJj61dQgK6j4AR4GeTYWZsKWw . This maps to the place field in the underlying request.
language
languageCode
Renamed.
region
regionCode
Renamed.
Response field changes
v3 Field
v4 Field
Notes
status , error_message
Removed
v4 uses HTTP status codes and error bodies .
results
(root)
v4 returns a single result object, not a results array.
results.address_components.long_name / results.address_components.short_name
addressComponents.longText / addressComponents.shortText
Renamed.
results.geometry.location_type
granularity
Renamed.
results.geometry.location
location
Field names: lat / lng -> latitude / longitude .
results.geometry.viewport
viewport
Field names: northeast / southwest -> high / low .
results.postcode_localities
postalCodeLocalities
Renamed. Now returned for one or more localities (v3 required >1).
New
addressComponents.languageCode
Language of the specific address component.
New
bounds
Explicit bounds using high / low .
New
place
Resource name for the place.
New
postalAddress
Structured PostalAddress object.
Migrate from Geocoding Hyperlocal Data to Destinations
The following features in the Geocoding API v3 are being replaced by the
SearchDestinations
method of the Geocoding API v4:
Entrances
Navigation points
Building outlines
Grounds
If you were using the Geocoding API v3 for the above features, use this document
to help you use the SearchDestinations method instead to get these features.
This document explains where in the SearchDestinations response to find
these features, and differences in how these features are represented in the API
responses between the Geocoding API v3 and the SearchDestinations method of
the Geocoding API v4.
Warning: Unlike Geocoding API v3 and other Geocoding API v4 methods, the
SearchDestinations method may return results that don't have a precise primary
address. If you require only results with precise primary addresses, set
placeFilter.addressability to PRIMARY in your request.
Entrances
To get the entrances associated with a
destination ,
use the field destination.entrances .
Note that the format of an
entrance
is slightly different from the entrance format in the Geocoding API
v3 . Each entrance
in destination.entrances has the following fields:
displayName - this is a new optional field that will have a human readable
name for the entrance, for example "Gate B".
location - this is a location of type
LatLng ,
which is different from the format used in the Geocoding API v3.
tags - this is the same as the tags field of the entrances from the
Geocoding API v3.
place - analogous to the buildingPlaceId field of the entrances from the
Geocoding API v3. However, the Place ID in this field could be for a Place
of any type, not necessarily just a building.
Navigation points
To get the navigation points associated with a destination , use the field
destination.navigationPoints .
Note that the format of a
navigationPoint
is slightly different from the navigation point format in the Geocoding API
v3 . Each navigation
point in destination.navigationPoints has the following fields:
displayName - this is a new optional field that will have a human readable
name for the navigation point, for example "5th Ave".
location - this is a location of type
LatLng ,
which is different from the format used in the Geocoding API v3.
travelModes - this is similar to the restrictedTravelModes field of the
navigation points from the Geocoding API v3. The possible enum values are the
same, the only difference is that this field now represents the acceptable
travel modes for the navigation point, rather than the restricted travel
modes.
usage - this is a new field which contains the use cases supported by the
navigation point. Note that most navigation points will have an UNKNOWN usage,
but that does not necessarily mean the navigation point's usage is
restricted in any way.
Building outlines
To get the building outlines associated with a destination , you should use the
displayPolygon field of the
placeView
objects in the destination that represent buildings. For each placeView , you
can check if it is a building with the
placeView.structureType
field. If the structure type is BUILDING , you can get the outline from the
placeView.displayPolygon field. The placeView will also have additional
fields for the building that were not in the Geocoding API v3.
Note: Just looking for the building polygon at a certain location? You can use
the placeFilter parameter in your request to narrow results. To return only
building results, set structureType to "BUILDING" within placeFilter . If
getting a polygon is your priority (even for locations without precise
addresses), set addressability to "ANY" in placeFilter to return the most
precise polygon available.
Example
{
"locationQuery" : {
"location" : {
"latitude" : 37.4224 ,
"longitude" : -122.0841
},
"placeFilter" : {
"structureType" : "BUILDING" ,
"addressability" : "ANY"
}
}
}
A destination can have a placeView object that represents a building in the
following fields:
destination.primary - this is the primary place for the destination.
destination.containingPlaces - this is a repeated field that can hold
larger places that "contain" the primary place. For example, if the primary
place is a subpremise , containingPlaces will usually hold the placeView
representing the building.
destination.subDestinations - this is a repeated field that can hold
sub-destinations of the primary place. For example, individual apartment
units of a building. This field won't typically have a placeView
representing a building.
Note that the format of placeView.displayPolygon matches the building outline
format in the Geocoding API
v3 , which is the
GeoJSON format, using the RFC 7946
format .
Grounds
Similar to building outlines, to get the grounds associated with a
destination , you should use the displayPolygon field of the placeView
objects in the destination that represent grounds. For each placeView , you
can check if it is a grounds with the placeView.structureType field. If the
structure type is GROUNDS , you can get the outline from the
placeView.displayPolygon field. The placeView will also have additional
fields for the grounds that were not in the Geocoding API v3.
A destination can have a placeView object that represents a grounds in the
following fields:
destination.primary
destination.containingPlaces
destination.subDestinations
Note that the format of placeView.displayPolygon matches the grounds outline
format in the Geocoding API v3 ,
which is the GeoJSON format, using the RFC 7946
format .
Use a field mask to request these features
The SearchDestinations
method requires a field mask, as explained in Choose fields to
return . The field mask can be set
to * in order to return all fields, or you can set it to the specific fields
you want to receive. For example, the following API request sets the field mask
to receive all fields required to get the entrances, navigation points, building
outlines, and grounds of a destination:
curl -X POST -d '{"place": "places/ChIJG3kh4hq6j4AR_XuFQnV0_t8"}' \
-H "X-Goog-Api-Key: API_KEY " \
-H "Content-Type: application/json" \
-H "X-Goog-FieldMask: destinations.entrances,destinations.navigationPoints,destinations.primary,destinations.containingPlaces,destinations.subDestinations" \
https://geocode.googleapis.com/v4/geocode/destinations
Security considerations
The Geocoding API v4 is designed as a server-to-server API. There is no direct
migration path for JavaScript users from v3 to v4. Calling the v4 methods
directly from client-side JavaScript (for example, in a browser) using an API
key exposes your API key to a high risk of theft and misuse.
HTTP referrer restrictions, while useful, are not sufficient protection for web
service endpoints as they can be trivially bypassed by attackers who forge the
Referer header in their requests.
Recommended approach
The recommended way to use the Geocoding API v4 is from your own backend server.
Your client application should make requests to this intermediary server, which
then securely calls the Google API using a protected API key (for example, a key
stored in an environment variable or a secret manager). This ensures that your
API key is never exposed in the frontend code.
Alternates for client-side needs
If you have client-side needs that require geocoding, consider using one of the
existing client-side solutions:
Geocoding Service in the Maps JavaScript API: The Geocoding
Service continues to use the v3
backend and is designed for use in a browser environment.
Places UI Kit: Use the Places UI
Kit , including
Place Autocomplete
elements ,
for address-related user interface elements.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

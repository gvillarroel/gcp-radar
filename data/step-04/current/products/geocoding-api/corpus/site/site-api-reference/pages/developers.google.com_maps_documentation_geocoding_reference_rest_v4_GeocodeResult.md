---
title: "GeocodeResult \_|\_ Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/GeocodeResult
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding/reference/rest
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/GeocodeResult
  title: "GeocodeResult \_|\_ Geocoding API \_|\_ Google for Developers"
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
GeocodeResult
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
GeocodeResult.AddressComponent
JSON representation
A geocode result contains geographic information about a place.
JSON representation
{
"place" : string ,
"placeId" : string ,
"location" : {
object ( LatLng )
} ,
"granularity" : enum ( GeocodeResult.Granularity ) ,
"viewport" : {
object ( Viewport )
} ,
"bounds" : {
object ( Viewport )
} ,
"formattedAddress" : string ,
"postalAddress" : {
object ( PostalAddress )
} ,
"addressComponents" : [
{
object ( GeocodeResult.AddressComponent )
}
] ,
"postalCodeLocalities" : [
{
object ( LocalizedText )
}
] ,
"types" : [
string
] ,
"plusCode" : {
object ( PlusCode )
}
}
Fields
place
string
This Place's resource name, in places/{placeId} format. Can be used to look up the Place.
placeId
string
The unique identifier of a place.
location
object ( LatLng )
The latlng of this address.
granularity
enum ( GeocodeResult.Granularity )
The granularity of the location.
viewport
object ( Viewport )
A viewport suitable for displaying the geocode result.
bounds
object ( Viewport )
A bounding box for the address.
formattedAddress
string
The one line formatted address.
postalAddress
object ( PostalAddress )
The address in postal address format.
addressComponents[]
object ( GeocodeResult.AddressComponent )
Repeated components for each locality level.
postalCodeLocalities[]
object ( LocalizedText )
Complete list of localities contained in the postal code.
This is only populated when the result is of type "postal_code".
types[]
string
A set of type tags for this result. For example, "political" and "administrative_area".
For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types .
plusCode
object ( PlusCode )
Plus code of the location in this geocode.
GeocodeResult.AddressComponent
The structured components that form the formatted address, if this information is available.
JSON representation
{
"longText" : string ,
"shortText" : string ,
"types" : [
string
] ,
"languageCode" : string
}
Fields
longText
string
The full text description or name of the address component. For example, an address component for the country Australia may have a long name of "Australia".
shortText
string
An abbreviated textual name for the address component, if available. For example, an address component for the country of Australia may have a short name of "AU".
types[]
string
An array indicating the type(s) of the address component.
See https://developers.google.com/maps/documentation/geocoding/requests-geocoding#Types for more details.
languageCode
string
The language used to format this component, in CLDR notation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]

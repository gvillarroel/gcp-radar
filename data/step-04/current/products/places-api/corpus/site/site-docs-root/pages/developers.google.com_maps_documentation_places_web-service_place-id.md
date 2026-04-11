---
title: "Place IDs \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/place-id
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/place-id
  title: "Place IDs \_|\_ Places API \_|\_ Google for Developers"
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
Place IDs
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Place IDs are unique identifiers for places in the Google Places database and are used across various Google Maps Platform APIs.
You can find Place IDs using the Place ID finder or by searching for places using the Places API.
Place IDs can be stored and reused, but it's recommended to refresh them if they are over 12 months old.
INVALID_REQUEST or NOT_FOUND error codes may indicate an invalid or obsolete Place ID.
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
Place IDs uniquely identify a place in the Google Places database and on Google Maps. Place IDs
are accepted in requests to the following Maps APIs:
Retrieving an address for a Place ID in the Geocoding API and
Geocoding Service, Maps JavaScript API.
Specifying origin, destination and intermediate waypoints in the
Routes API and Directions API (Legacy)
and Directions Service, Maps JavaScript API (Legacy).
Specifying origins and destinations in the Routes API and
Distance Matrix API (Legacy) and
Distance Matrix Service, Maps JavaScript API (Legacy).
Retrieving Place Details in Places API (New),
Places SDK for Android (New), Places SDK for iOS (New), and
Places Library.
Using Place ID parameters in Maps Embed API.
Retrieving search queries in Maps URLs.
Displaying speed limits in Roads API.
Finding and styling boundary polygons in data-driven styling for boundaries.
Find the ID of a particular place
Are you looking for the place ID of a specific place? Use the place ID
finder below to search for a place and get its ID:
Alternatively, you can
view
the place ID finder with its code in the Maps JavaScript API
documentation.
Overview
A place ID is a textual identifier that uniquely identifies a place. The
length of the identifier may vary (there is no maximum length for place IDs).
Examples:
ChIJgUbEo8cfqokR5lP9_Wh_DaM
GhIJQWDl0CIeQUARxks3icF8U8A
EicxMyBNYXJrZXQgU3QsIFdpbG1pbmd0b24sIE5DIDI4NDAxLCBVU0EiGhIYChQKEgnRTo6ixx-qiRHo_bbmkCm7ZRAN
EicxMyBNYXJrZXQgU3QsIFdpbG1pbmd0b24sIE5DIDI4NDAxLCBVU0E
IhoSGAoUChIJ0U6OoscfqokR6P225pApu2UQDQ
Place IDs are available for most locations, including businesses, landmarks,
parks, and intersections. It is possible for the same place or location to
have multiple different place IDs. Place IDs may change over time.
You can use the same place ID across the Places API and a
number of Google Maps Platform APIs. For example, you can use the same place ID to
reference a place in the
Places API , the
Maps JavaScript API ,
the Geocoding API ,
the Maps Embed API
and the Roads API .
Retrieve place details using the place ID
A common way of using place IDs is to search for a place
(using the Places API
or the Places
library in the Maps JavaScript API, for example) then use the
returned place ID to retrieve place details. You can store the place ID and
use it to retrieve the same place details later. Read about
saving place IDs below.
The following examples show how to request an icon URL for Places API (New) and
Places API (Legacy).
Places API (New)
Using the Places API, you can find a place ID by doing a
Text Search (New)
request.
curl -X POST -d '{
"textQuery" : "Spicy Vegetarian Food in Sydney, Australia"
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: places.id,places.displayName,places.formattedAddress' \
'https://places.googleapis.com/v1/places:searchText'
The response includes a place ID in the id field, as shown below:
{
"places": [
{
"id": "ChIJs5ydyTiuEmsR0fRSlU0C7k0",
"formattedAddress": "29 King St, Sydney NSW 2000, Australia",
"displayName": {
"text": "Peace Harmony",
"languageCode": "en"
}
},
...
}
Now you can now make a
Place Details (New)
request by including the place ID in the request URL:
https://places.googleapis.com/v1/places/ChIJs5ydyTiuEmsR0fRSlU0C7k0?fields=id,displayName&key= API_KEY
Places API (Legacy)
Using the Places API, you can find a place ID by doing a
Place Search request.
The following example is a search request for places of type 'restaurant'
within a 1500m radius of a point in Sydney, Australia, containing the word
'cruise':
https : //maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key= YOUR_API_KEY
The response includes a place ID in the place_id field, as
shown in this snippet:
{
"html_attributions" : [],
"results" : [
{
"geometry" : {
"location" : {
"lat" : -33.870775,
"lng" : 151.199025
}
},
...
"place_id" : "ChIJrTLr-GyuEmsRBfy61i59si0",
...
}
],
"status" : "OK"
}
Now you can send a
Place Details (Legacy) request ,
putting the place ID in the place_id parameter:
https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJrTLr-GyuEmsRBfy61i59si0&key= YOUR_API_KEY
Save place IDs for later use
Place IDs are exempt from the caching restrictions stated in
Section 3.2.3(b)
of the Google Maps Platform Terms of Service. You can therefore store place ID values for later
use.
Refresh stored place IDs
Because Place IDs may change due to updates on the Google Maps database, Google recommends
refreshing place IDs if they are more than 12 months old. You can refresh Place IDs at no
charge by making a
Place Details request , specifying only the place ID
field in the fields parameter.
Places API (New)
For example, using Place Details (New) :
https://places.googleapis.com/v1/places/ChIJ05IRjKHxEQ0RJLV_5NLdK2w?fields=id&key= API_KEY
Places API (Legacy)
For example, using Places API (Legacy) :
https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ05IRjKHxEQ0RJLV_5NLdK2w&fields=place_id&key= API_KEY
This call triggers the
Place Detail New Essentials IDs Only or
Places Details - ID Refresh
SKU.
Error codes when using place IDs
INVALID_REQUEST
The INVALID_REQUEST status code indicates that the specified
place ID is not valid. INVALID_REQUEST may be returned when the
place ID has been truncated or otherwise modified, and is no longer correct.
NOT_FOUND
The NOT_FOUND status code indicates that the specified place ID
is obsolete. A place ID may become obsolete if a business closes or moves to
a new location. Place IDs may also change due to updates on the Google
Maps database. In such cases, a place may receive a new place ID, and the old
ID returns a NOT_FOUND response.
Note: Place IDs that are obsolete may continue to be returned in
Place Autocomplete (Legacy), Query Autocomplete (Legacy), or Autocomplete (New) responses for a few
days after the place ID has been removed from the Google Maps database.
To refresh results in the event of an obsolete place ID, store the original request that
returned each place ID and re-issue the request as needed. Note that the re-issued request is
billed at the appropriate SKU.
Some types of place IDs may sometimes cause a
NOT_FOUND response, or the API may return a different place ID in
the response. These place ID types include:
Street addresses that don't exist in Google Maps as precise addresses,
but are inferred from a range of addresses.
Segments of a long route, where the request also specifies a city or
locality.
Intersections.
Places with an address component of type subpremise .
These IDs often take the form of a long string (there is no maximum length
for Place IDs). For example:
EpID4LC14LC_4LCo4LCv4LGN4LCo4LCX4LCw4LGNIC0g4LC44LGI4LCm4LGN4LCs4LC-4LCm4LGNIOCwsOCxi-CwoeCxjeCwoeCxgSAmIOCwteCwv-CwqOCwr-CxjSDgsKjgsJfgsLDgsY0g4LCu4LGG4LCv4LC_4LCo4LGNIOCwsOCxi-CwoeCxjeCwoeCxgSwg4LC14LC_4LCo4LCv4LGNIOCwqOCwl-CwsOCxjSDgsJXgsL7gsLLgsKjgsYAsIOCwsuCwleCxjeCwt-CxjeCwruCwv-CwqOCwl-CwsOCxjSDgsJXgsL7gsLLgsKjgsYAsIOCwuOCwsOCxguCwsOCxjSDgsKjgsJfgsLDgsY0g4LC14LGG4LC44LGN4LCf4LGNLCDgsLjgsK_gsYDgsKbgsL7gsKzgsL7gsKbgsY0sIOCwueCxiOCwpuCwsOCwvuCwrOCwvuCwpuCxjSwg4LCk4LGG4LCy4LCC4LCX4LC-4LCjIDUwMDA1OSwg4LCt4LC-4LCw4LCk4LCm4LGH4LC24LCCImYiZAoUChIJ31l5uGWYyzsR9zY2qk9lDiASFAoSCd9ZebhlmMs7Efc2NqpPZQ4gGhQKEglDz61OZpjLOxHgDJCFY-o1qBoUChIJi37TW2-YyzsRr_uv50r7tdEiCg1MwFcKFS_dyy4
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

---
title: "Route to navigation points \_|\_ Navigation SDK for Android \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points
  title: "Route to navigation points \_|\_ Navigation SDK for Android \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Navigation SDK for Android
Send feedback
Route to navigation points
Stay organized with collections
Save and categorize content based on your preferences.
The Navigation SDK for Android offers enhanced ways to specify waypoints,
providing more accurate routing and a better arrival experience, especially for
destinations with multiple entrances or specific navigation points. You can
route to precise locations using a navigationPointToken or by combining
latitude and longitude coordinates with a Place ID for added context. The
destination highlighting feature will continue to be performed if applicable.
Background
Prior to v7.4, you could define a Waypoint using either latitude and longitude
coordinates or a Place ID. While sometimes effective, routing
solely to a latitude and longitude can sometimes lead to suboptimal drop-off or
pick-up points, particularly for large venues, parks, or buildings with multiple
entrances. The result might snap to the nearest road segment, which may not be
the most convenient or correct navigation point.
The enhanced waypoint options address this by allowing more context to be
provided.
Use a navigation point token
For the most precise routing to specific navigation points like entrances,
loading docks, or designated pick-up areas, you can use a
navigationPointToken . This token is obtained by calling the destinations
method of the Geocoding
API . It represents a
specific, routable navigation point associated with a place.
To specify a Navigation Point token:
Obtain a navigationPointToken from the Destinations method of the
Geocoding API
response.
Create a Waypoint using the setNavigationPointToken() method in the
builder.
Note: When using setNavigationPointToken() , you cannot simultaneously use
setLatLng() or setPlaceIdString() . These methods are mutually exclusive with
setNavigationPointToken() .
// Assuming 'navPointToken' is a String obtained from the destinations method of the Geocoding API
// Assuming 'destinationName' is a String title for the waypoint
Waypoint waypointWithToken = Waypoint . builder ()
. setTitle ( destinationName )
. setNavigationPointToken ( navPointToken )
. build ();
// Use this waypoint in navigator.setDestinations()
Combine Place ID and latitude and longitude
Starting with v7.4, you can provide both a Place ID and latitude and longitude
coordinates when creating a Waypoint . This method is useful when you want to
specify a precise point (the lat/lng) while still providing the context of the
overall place (the Place ID). This allows the Navigation SDK to provide a richer
arrival experience by highlighting the destination building or showing nearby
points of interest related to the Place ID.
// Assuming 'placeId' is the Place ID String
// Assuming 'lat' and 'lng' are the double values for latitude and longitude
// Assuming 'destinationName' is a String title for the waypoint
Waypoint waypointWithPlaceIdAndLatLng = Waypoint . builder ()
. setTitle ( destinationName )
. setPlaceIdString ( placeId )
. setLatLng ( lat , lng )
. build ();
// Use this waypoint in navigator.setDestinations()
Considerations
When you provide both placeId and latlng :
The route primarily targets the specified latlng .
The placeId is used as context to enhance the arrival experience.
Fallback: If the SDK determines that the provided placeId corresponds
to a feature that is too far from the given latlng , the placeId will be
ignored. In this scenario, routing will proceed to the latlng only, and
the place-specific arrival experience enhancements won't be available.
Summary of valid waypoint configurations
Method
setLatLng()
setPlaceIdString()
setNavigationPointToken()
Routing behavior
Destination highlighting
Latitude/longitude coordinates only
set
absent
absent
Routes to road segment nearest to the defined coordinates
Shown if destination can be inferred with high confidence
Place ID only
absent
set
absent
Routes to the default navigation point for the Place ID
From Place ID
Navigation point token only
absent
absent
set
Routes to the precise navigation point represented by the token
From destination defined in original destinations method of the Geocoding API request
Latitude/longitude coordinates and Place ID combined
set
set
absent
Routes to road segment nearest to the defined coordinates
From Place ID, though not shown if Place ID is too far from the latitude/longitude coordinates
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-23 UTC."],[],[]]

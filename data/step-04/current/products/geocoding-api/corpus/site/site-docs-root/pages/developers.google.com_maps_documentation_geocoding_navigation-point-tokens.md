---
title: "Route using navigation point tokens \_|\_ Geocoding API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geocoding/navigation-point-tokens
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/geocoding
source_metadata:
  url: https://developers.google.com/maps/documentation/geocoding/navigation-point-tokens
  title: "Route using navigation point tokens \_|\_ Geocoding API \_|\_ Google for\
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
Send feedback
Route using navigation point tokens
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Navigation point tokens allow you to send key contextual information about a
destination to the Navigation SDK for
Android or the Navigation SDK for
iOS for improved routing and driver
experience. This is useful in cases like food delivery or rideshare, where the
pickup or dropoff point may be ambiguous without user input.
Important: Version 7.4 and later of the Navigation SDK for
Android and version
10.10 and later of the Navigation SDK for
iOS support navigation
point tokens.
This image shows examples of a consumer rideshare app where the navigation point
is selected, and a driver app using the Navigation SDK for Android to precisely
route the driver.
To create and pass a navigation point token, use the Destinations method of
the Geocoding API to
allow your users to select a preferred location from a list of navigation
points .
The user's selection becomes a navigation point returned by the Destinations
method of the Geocoding API. You can then pass the navigation point token,
which contains both the destination coordinates as well as contextual
information, to the Navigation SDK for
Android or the
Navigation SDK for
iOS , where a waypoint
is created for precise routing. The destination will be highlighted for the
driver by the Navigation SDK based on the Place the token is associated with.
For example, imagine a rideshare use case, where there is an app for the
consumer to book the ride, and a second app for the driver to receive
notification of the ride and routing information to the destination.
When a consumer opens the consumer app, the app calls the Destinations method
of the Geocoding API and
provides the consumer with a selection of potential navigation points:
The user chooses their preferred point, which is one in the array of
navigationPoints in the response body of a SearchDestinations request:
"navigationPoints" : [
{
"navigationPointToken" : < e n coded na viga t io n poi nt t oke n > ,
"displayName" : "South Entrance" ,
"travelModes" : [ "DRIVE" ],
"usages" : [ "PICKUP" , "DROPOFF" ],
"location" : {
"lat" : 37.3940894 ,
"lng" : -122.0788389
}
}
]
The navigation point token from the response is passed to a mobile driver app
that uses the Navigation SDK for Android or iOS to create a waypoint to route
the driver to the correct pickup point.
See the Navigation SDK for Android navigation point documentation .
See the Navigation SDK for iOS navigation point documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

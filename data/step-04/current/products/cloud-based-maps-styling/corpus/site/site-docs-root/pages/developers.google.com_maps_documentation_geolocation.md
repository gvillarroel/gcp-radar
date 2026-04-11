---
title: "Geolocation API overview \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/geolocation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/geolocation
  title: "Geolocation API overview \_|\_ Google for Developers"
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
Geolocation API
Guides
Send feedback
Geolocation API overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Geolocation API determines the latitude and longitude of a device using cell tower and WiFi access point data, returning results with an accuracy radius.
This API is primarily for devices lacking native geolocation features; devices with such features should leverage HTML5 geolocation or the Geocoding API.
By sending an HTTPS POST request with device data to the API endpoint, developers can retrieve location information for mobile devices.
Developers can utilize various data resources like cell device fields, cell tower data, and WiFi access point data to pinpoint device locations.
Client libraries are available in Java, Python, Go, and Node.js for seamless integration with the Geolocation API.
The Geolocation API is a service that accepts an HTTPS request with the
cell tower and Wi-Fi access points that a mobile client can detect. It returns
latitude/longitude coordinates and a radius indicating the accuracy of the
result for each valid input.
Note : To get device location information
using latitude and longitude coordinates, addresses, or Place IDs, go to the
Geocoding API .
Why use the Geolocation API
Use the Geolocation API to locate mobile devices that do not provide built-in geolocation
features.
For web browsers and mobile devices that
already provide geolocation capabilities , use the following instead:
Browsers with HTML5 geolocation : Use the Maps Javascript API.
For more information, go to
Geolocation:
Displaying User or Device Position on Maps .
Mobile devices geolocation : Use the built-in location
services offered by the platform, such as the
LocationManager or
Fused Location Provider API for Android, and the
Core Location framework for iOS.
For more information on the W3C Geolocation standard, see
W3C Geolocation standard .
What you can do with the Geolocation API
With the Geolocation API, you can use geospatial data from cell towers
and WiFi nodes to get the location of a device that does not have built-in geolocation or GPS.
How the Geolocation API works
The Geolocation API uses cellular device data fields, cell tower
data, and WiFi access point array data to return latitude/longitude coordinates and an accuracy
radius. It accepts an HTTPS POST request to its endpoint along with a JSON structured request
body. The following example shows the request URL and an example request body:
curl - X POST "https://www.googleapis.com/geolocation/v1/geolocate?key= YOUR_API_KEY " \
- H "Content-Type: application/json" \
- d \
' { "homeMobileCountryCode" : 310 ,
"homeMobileNetworkCode" : 410 ,
"radioType" : "gsm" ,
"carrier" : "Vodafone" ,
"considerIp" : true
} '
The API can return data for a number of common cellular data fields as indicated below.
Resources
The following table summarizes the fields in the request body of the geolocation endpoint
call, along with the type of data provided from such queries.
Data resources
Data returned
Return format
Cell device data fields
such as carrier, device, and network information.
Latitude/longitude coordinates and an accuracy radius
JSON
Cell tower data ,
such as location area code and mobile country codes.
WiFi access points data ,
such as MAC address and signal strength.
How to use the Geolocation API
1
Get set up
Start with
Set up your Google Cloud project
and complete the setup instructions that follow.
2
Try a geolocation request
Once you have an API key, you can start testing out the Geolocation API using cURL or
Postman. See Sample requests
in the Geolocation requests and response guide for details.
3
Get the cellID from different radio towers
See Calculating cellID
and Calculating newRadioCellID
to get access to older and newer towers, respectively.
4
Understand response basics
Explore the geolocation data responses to prepare to use elevation data for your app. See
Geolocation responses
for details.
Available client libraries
Call this API in the language of
your choice through one of the following client libraries:
Java
Client for Google Maps Services
Python
Client for Google Maps Services
Go Client
for Google Maps Services
Node.js
Client for Google Maps Services
The Java Client, Python Client, Go Client and Node.js Client for Google Maps
Services are community-supported client libraries, open sourced under the
Apache 2.0 License .
Download them from GitHub, where you can also find installation instructions and sample code.
What's next
Get started with sample requests and responses : Go to
Geolocation request and response
Follow best practices : Go to
Web Service Best Practices .
Understand billing : Go to Usage and Billing .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

---
title: "Why migrate to Routes API? \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/routes/migrate-routes-why
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/routes/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/routes/migrate-routes-why
  title: "Why migrate to Routes API? \_|\_ Google for Developers"
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
Routes API
Send feedback
Why migrate to Routes API?
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Routes API offers better performance for route calculations and replaces Directions and Distance Matrix APIs while maintaining backward compatibility.
It provides faster responses, enhanced route options like toll info and 2-wheel routes, and allows customization of response data with field masks to reduce costs.
Unlike previous APIs, Routes API uses a single service, requires HTTPS POST requests, and handles ETA responses differently.
It simplifies waypoint handling by eliminating the need for polyline conversion, but relies on the Geocoding API for formatted addresses.
While supporting various travel modes, Routes API does not return alternative travel mode options in the response and offers only JSON format.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
The Routes API provides improved performance for calculating directions,
distance, and travel time, making it worthwhile to replace apps that
use Directions API and Distance Matrix API. Most
of the functionality of Routes API
is backward compatible with both Directions API and
Distance Matrix API.
Use this guide to understand key differences in Routes API
compared to the products it replaces, along with how to handle necessary
changes. For more details on other Routes API
features, see the product overview .
Key improvements
This section covers some of the enhancements you can expect when using
Routes API in your apps.
Increased request limits
Routes API Compute Route Matrix
Maximum of 625 elements, unless you specify TRAFFIC_AWARE_OPTIMAL .
Maximum of 100 elements with TRAFFIC_AWARE_OPTIMAL . See
Enhanced routing preferences .
Maximum of 50 waypoints (origins + destinations) using a Place ID.
Distance Matrix API
Maximum of 25 origins or 25 destinations per request.
Maximum 100 elements (number of origins × number of destinations) per
server-side request.
Faster request responses
The Compute Route Matrix feature offers the following latency
improvements:
Receive streaming elements of the response before the entire matrix has
been calculated.
Use field masks to customize the response details , requesting only the
data you need, a best-practice that also helps reduce your cost.
Enhanced route calculations for traffic , so you can make the tradeoff
between data quality and response time.
Routing enhancements
The compute route feature offers these routing enhancements:
Toll information in addition to distance and ETA.
2-wheel vehicle routes .
Qualify your stopover waypoints for safety.
Increased ETA accuracy by setting direction of travel and side of
road for waypoints.
Request only the data that you need
You now specify which fields to return, reducing processing time and billing
charges.
Routes API
Compute Routes
Compute Route Matrix
Your requests must use a field mask to specify which fields you want
returned in the response. Field masking ensures that you don't request
unnecessary data, which avoids unnecessary processing time and billing
charges.
For more information, see
Choose fields to return .
Directions API
Distance Matrix API
Returns a default list of fields, even if your app does not
strictly need them. This can result in unnecessary processing time and
billing charges.
Enhanced route computations for traffic
The Routes API supports three routing preferences that you can use
to balance between response latency and data quality when requesting traffic
information.
For more information, see
Configure quality versus latency .
Note: The Directions API and
Distance Matrix API only provide the equivalent of the
TRAFFIC_AWARE_OPTIMAL and TRAFFIC_UNAWARE options. These options are
implicitly set based on whether you specify departure_time in your request.
TRAFFIC_UNAWARE
(default)
Uses average time-independent traffic
data, not live traffic data, to calculate the route, resulting in lowest
response latency. This setting is equivalent to when traffic is not used
in the Directions API and
Distance Matrix API.
TRAFFIC_AWARE
(new)
Performance-optimized live traffic quality for reduced
latency. In contrast to TRAFFIC_AWARE_OPTIMAL , this setting
applies optimizations to significantly reduce latency.
This setting is also new for the Routes API with no
equivalent in the Directions API or the
Distance Matrix API.
TRAFFIC_AWARE_OPTIMAL
High quality, comprehensive traffic data. This setting produces
the highest latency and is equivalent to the departure_time
setting in the Directions API and
Distance Matrix API.
This preference is equivalent to the mode used by
maps.google.com
and by the Google Maps mobile app.
Route computation comparison
The following table compares routing options between the Routes API
and the Directions API and
Distance Matrix API services.
Traffic option
Routes API
Directions API
Distance Matrix API
Latency
No real-time traffic
TRAFFIC_UNAWARE
departure_time property not set
Fastest latency of the three modes.
Live traffic conditions applied
TRAFFIC_AWARE
No equivalent
New mode added by the Routes API. It provides a
slightly greater latency than TRAFFIC_UNAWARE with a
small cost of ETA quality.
It has a much lower latency than TRAFFIC_AWARE_OPTIMAL .
High quality, comprehensive live traffic data applied
TRAFFIC_AWARE_OPTIMAL
departure_time property set
Equivalent to the mode used by
maps.google.com
and by the Google Maps mobile app.
For Compute Route Matrix, the number
of elements in a request (number of origins × number of destinations)
cannot exceed 100.
Key differences
This section covers key differences between Routes API and the services it
replaces, along with ways you can address these differences when migrating from
these services in your existing apps.
Call one service instead of two
Routes API
Enable only one service in the API Console for your app
to use Compute Routes and Compute Route Matrix.
For more information, see Set Up in the
Google API Console .
Directions API
Distance Matrix API
Enable two services: Directions API and
Distance Matrix API as separate services in the API Console.
Uses HTTPS POST requests
Routes API
Pass parameters in the request body or in
headers as part of an HTTP POST request.
For examples, see:
- Compute a route
- Compute a route matrix
Directions API
Distance Matrix API
Pass URL parameters using an HTTP GET request.
ETA response differences
The Routes API returns ETA and uses the duration response property
differently than the Directions API and
Distance Matrix API services as shown in the table below.
Type of ETA
Routes API
Directions API
Distance Matrix API
Traffic unaware, time-independent ETA.
Set using TRAFFIC_UNAWARE .
ETA contained in the duration response property.
The duration and staticDuration
response properties contain the same value.
Corresponds to departure_time not being set
in the request.
ETA contained in the duration response property.
The duration_in_traffic response property is
not returned.
ETA that takes real-time traffic into consideration.
Set using TRAFFIC_AWARE or
TRAFFIC_AWARE_OPTIMAL .
ETA taking real-time traffic into consideration is contained
in the duration response property.
The staticDuration response property contains
the duration of traveling through the route without taking
traffic conditions into consideration.
The duration_in_traffic property is no longer
returned.
Set using departure_time in the request.
ETA taking real-time traffic into consideration is contained
in the duration_in_traffic response property.
Polyline waypoints
You no longer need to convert your latitude/longitude coordinates to polyline
waypoints with this service, which supports a POST request body and is therefore
no longer impacted by URL string limits. Some users of
Distance Matrix API addressed the request limits issue by converting
latitude/longitude points to polyline waypoints.
Formatted addresses (reverse geocode)
The Routes API does not provide formatted addresses in the response. To
obtain formatted addresses, use the Geocoding API which is built for
this use case and provides higher quality results.
Available travel modes
As is the case with Directions API, the Routes API
uses DRIVE as the default mode when a route request does
not specify a travel mode. However, when a request does specify a travel mode
for a route, the Routes API does not return an array of available travel
modes as alternative choices for the request. If your use case relies on this
feature, file an issue
describing how you use the feature, so we can follow up.
XML as a response format
The Routes API does not provide XML as a response format. You can find
a number of JSON to XML converters online that should suit your purposes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Routes API replaces the Directions API and Distance Matrix API, offering improved performance and new features. Key actions include utilizing `HTTP POST` requests with field masks to specify data needs, which reduces processing and billing. It enhances routing by adding toll information, 2-wheel vehicle routes, and improved ETA accuracy. The API supports three traffic routing preferences: `TRAFFIC_UNAWARE`, `TRAFFIC_AWARE`, and `TRAFFIC_AWARE_OPTIMAL`, and requires enabling a single service instead of two. The `duration` response property now carries the ETA data and a `staticDuration` will be provided with out traffic conditions.\n"]]

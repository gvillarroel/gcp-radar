---
title: "Place Photos (Legacy) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/photos
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/photos
  title: "Place Photos (Legacy) \_|\_ Places API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

This product or feature is in Legacy status. For more information about the Legacy status see Legacy products and features . To migrate to the Places API (New), see the Migration guide .
Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Legacy
Send feedback
Place Photos (Legacy)
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Note: Server-side
and client-side libraries
The Places API is also available with the
Java Client,
Python Client, Go Client and Node.js Client for Google Maps Services .
The Places API and the client libraries are for
use in server applications.
Looking to use this service in a JavaScript application? Take
a look at the
Places Library, Maps JavaScript API .
Place Photos (Legacy), part of the Places API, is a read-
only API that lets you add high quality photographic content to your
application. Place Photos (Legacy) gives you access to the millions of photos
stored in the Places database. When you get place information using a Place
Details request, photo references will be returned for relevant photographic
content. Find Place (Legacy), Nearby Search (Legacy), and Text Search (Legacy)
requests also return a single photo reference per place, when relevant. Using
Place Photos (Legacy) you can then access the referenced photos and resize the
image to the optimal size for your application.
Place Photos (Legacy) requests
A Place Photos (Legacy) request is an HTTP URL of the following form:
https://maps.googleapis.com/maps/api/place/photo? parameters
Certain parameters are required to initiate a search request. As is standard
in URLs, all parameters are separated using the ampersand ( & ) character. The
list of parameters and their possible values are enumerated below.
Required parameters
photo_reference
A string identifier that uniquely identifies a photo. Photo references are
returned from either a Place Search or Place Details request.
maxheight or maxwidth
maxheight specifies the maximum preferred height, in pixels, of the image. If the
image is smaller than the values specified, the original image will be
returned. If the image is larger in either dimension, it will be scaled to
match the smaller of the two dimensions, restricted to its original aspect
ratio.
maxwidth specifies the maximum preferred width, in pixels, of the image. If the
image is smaller than the values specified, the original image will be returned.
If the image is larger in either dimension, it will be scaled to match the
smaller of the two dimensions, restricted to its original aspect ratio.
Both the maxheight and maxwidth properties
accept an integer between 1 and 1600 .
You must specify either maxheight , or maxwidth , or both.
Photo references
All requests to Place Photos (Legacy) must include a photo_reference ,
returned in the response to a Find Place (Legacy), Nearby Search (Legacy),
Text Search (Legacy), or Place Details (Legacy) request. The response to these
requests will contain a photos[] field if the place has related photographic
content.
Note: The number of photos returned varies by request.
A Find Place (Legacy), Nearby Search (Legacy), or Text Search (Legacy) request
returns at most one photo element in the array.
A Place Details (Legacy) request returns up to ten photo elements.
Each photo element contains the following fields:
photo_reference — a string used to identify the photo when you
perform a Place Photos (Legacy) request.
height — the maximum height of the image.
width — the maximum width of the image.
html_attributions[] — contains any required attributions. This
field will always be present, but may be empty.
Photos returned by Place Photos (Legacy) are sourced from a variety of locations,
including business owners and user contributed photos. In most cases, these
photos can be used without attribution, or will have the required attribution
included as a part of the image. However, if the returned photo element
includes a value in the html_attributions field, you must include the
additional attribution in your application wherever you display the image.
Caution: You cannot cache a photo_reference . Also, a photo_reference can
expire. Ensure that you always get the photo_reference from the response to a
request to Place Details (Legacy) ,
Find Place (Legacy) ,
Nearby Search (Legacy) ,
or Text Search (Legacy) .
For more information, see the caching restrictions stated in Section 5.4 of the
Google Maps Platform Service Specific
Terms
The following example shows a Place Details (Legacy) request:
curl "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJcUElzOzMQQwRLuV30nMUEUM&key= YOUR_API_KEY "
An example of the photos[] array in the response is shown below.
...
"photos" : [
{
"html_attributions" : [],
"height" : 853 ,
"width" : 1280 ,
"photo_reference" : "ATJ83zhSSAtkh5LTozXMhBghqubeOxnZWUV2m7Hv2tQaIzKQJgvZk9yCaEjBW0r0Zx1oJ9RF1G7oeM34sQQMOv8s2zA0sgGBiyBgvdyMxeVByRgHUXmv-rkJ2wyvNv17jyTSySm_-_6R2B0v4eKX257HOxvXlx_TSwp2NrICKrZM2d5d2P4q"
}]
...
Place Photos (Legacy) example
An example request is shown below. This request returns the referenced
image, resizing it so that it is at most 400 pixels wide.
https://maps.googleapis.com/maps/api/place/photo?maxwidth=400 & photo_reference=ATJ83zhSSAtkh5LTozXMhBghqubeOxnZWUV2m7Hv2tQaIzKQJgvZk9yCaEjBW0r0Zx1oJ9RF1G7oeM34sQQMOv8s2zA0sgGBiyBgvdyMxeVByRgHUXmv-rkJ2wyvNv17jyTSySm_-_6R2B0v4eKX257HOxvXlx_TSwp2NrICKrZM2d5d2P4q & key= YOUR_API_KEY
Note: Replace the API key in this example with your own API key for the
request to work in your application.
Place Photos (Legacy) response
The response of a successful Place Photos (Legacy) request is an image. The type
of the image depends upon the type of the originally submitted photo.
If your request exceeds your available quota, the server returns an
HTTP 403 status and displays the below image to indicate that the quota has
been exceeded:
If the server is unable to understand your request, then it returns HTTP 400
status, which indicates an invalid request. The most common reasons for an
invalid request include:
The submitted photo reference was not correctly specified.
The request did not include either the maxwidth or the maxheight
parameters.
The value for either the maxwidth or the maxheight parameter was set
to null .
The photo_reference has expired. If photo_reference expires, make a
request to Place Details (Legacy) ,
Find Place (Legacy) ,
Nearby Search (Legacy) ,
or Text Search (Legacy)
to get the updated photo_reference value.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

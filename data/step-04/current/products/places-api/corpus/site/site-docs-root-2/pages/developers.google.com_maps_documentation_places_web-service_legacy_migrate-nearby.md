---
title: "Migrate to Nearby Search (New) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/migrate-nearby
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/migrate-nearby
  title: "Migrate to Nearby Search (New) \_|\_ Places API \_|\_ Google for Developers"
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
Legacy
Send feedback
Migrate to Nearby Search (New)
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
Places API supports
Nearby Search (Legacy) .
If you are familiar with Nearby Search (Legacy), the
Nearby Search (New) makes the following
changes:
Nearby Search (New) uses HTTP POST requests.
Pass parameters in the request body or in headers as part of an HTTP POST
request. In contrast, with Nearby Search (Legacy),
you pass URL parameters using an HTTP GET request.
Field masking is required. You must specify which fields you want returned
in the response. There is no default list of returned fields. If you omit
this list, the methods return an error. For more information, see
FieldMask .
Nearby Search (New) supports both
API keys
and OAuth
tokens as the authentication mechanism.
Only JSON is supported as a response format in
Nearby Search (New).
All requests that include a text query should now use
Text Search (New)
because Nearby Search (New) does not support text input.
The JSON response format for Nearby Search (New)
has changed from the format of the legacy APIs. For more details, see
Migrate the Places API response .
The following table lists parameters in Nearby Search (Legacy) that have been
renamed or modified for Nearby Search (New), or parameters that are no
longer supported.
Current parameter
New parameter
Notes
keyword
Not supported. Use
Text Search (New)
instead.
language
languageCode
location
locationRestriction
Required.
maxprice/minprice
Not supported.
maxResultCount
New parameter.
opennow
Not supported.
pagetoken
Not supported.
radius
Use locationRestriction now.
rankby
rankPreference
regionCode
New parameter.
type
includedTypes excludedTypes
includedPrimaryTypes excludedPrimaryTypes
The new parameters also accept multiple type values. The legacy API
only accepts a single value.
Example request
The following example GET request uses the Nearby Search (Legacy). In this
example, you request a JSON response containing information about places of type
restaurant and pass all parameters as URL parameters:
curl -L -X GET \
'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.7937%2C-122.3965&radius=500&type=restaurant&key= API_KEY '
With Nearby Search (New), you make a POST request and pass all
parameters in the JSON request body or in headers as part of the POST request.
This example also uses a field mask so the response only includes the display
name and formatted address of the place:
curl -X POST -d '{
"includedTypes": ["restaurant"],
"locationRestriction": {
"circle": {
"center": {
"latitude": 37.7937,
"longitude": -122.3965},
"radius": 500.0
}
}
}' \
-H 'Content-Type: application/json' -H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: places.displayName,places.formattedAddress" \
https://places.googleapis.com/v1/places:searchNearby
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

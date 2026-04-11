---
title: "Migrate to Autocomplete (New) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/migrate-autocomplete
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/migrate-autocomplete
  title: "Migrate to Autocomplete (New) \_|\_ Places API \_|\_ Google for Developers"
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
Migrate to Autocomplete (New)
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
Places API supports the
Place Autocomplete (Legacy)
and Query Autocomplete (Legacy) APIs.
If you are familiar with these APIs, Autocomplete (New) makes the following changes:
Autocomplete (New) uses HTTP POST requests. Pass parameters in
the request body or in headers as part of an HTTP POST request. In contrast,
with the legacy APIs, you pass URL parameters using an
HTTP GET request.
Autocomplete (New) supports both API keys
and OAuth tokens as the authentication mechanism.
Only JSON is supported as a response format in Autocomplete (New).
The following table lists parameters in Place Autocomplete (Legacy) and Query Autocomplete (Legacy) that have been renamed or modified for Autocomplete (New), or parameters that are no longer supported.
Current parameter
New parameter
Notes
components
includedRegionCodes
language
languageCode
location
locationBias
ipbias
If you omit both locationBias and locationRestriction , then the
API uses IP biasing by default.
offset
inputOffset
radius
locationBias or locationRestriction
region
regionCode
stricbounds
locationRestriction
sessiontoken
sessionToken
types
includedPrimaryTypes
Example request
The following example GET request uses Place Autocomplete (Legacy). In this
example, you request a JSON response containing information about places called
"Amoeba" that are of type establishment and pass all parameters as URL
parameters:
curl -L -X GET 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&key= YOUR_API_KEY '
With Autocomplete (New), you make a POST request and pass all parameters
in the JSON request body or in headers as part of the POST request.
Field masks are not required for Autocomplete (New) requests, but they can
be used to filter for specific results in the response. For example, the
following request uses a field mask so the response only includes the
suggestions.placePrediction.text of the suggestion:
curl -X POST -d '{
"input": "Amoeba",
"locationBias": {
"circle": {
"center": {
"latitude": 37.76999,
"longitude": -122.44696
},
"radius": 500.0
}
}
}' \
-H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API_KEY ' \
-H 'X-Goog-FieldMask: suggestions.placePrediction.text' \
https://places.googleapis.com/v1/places:autocomplete
To learn more about using field masks, see
Place Details (New) .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

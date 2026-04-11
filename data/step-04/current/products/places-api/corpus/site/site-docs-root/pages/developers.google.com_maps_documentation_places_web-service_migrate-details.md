---
title: "Migrate to Place Details (New) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/migrate-details
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/op-overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/migrate-details
  title: "Migrate to Place Details (New) \_|\_ Places API \_|\_ Google for Developers"
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
Migrate to Place Details (New)
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
Places API supports
Place Details (Legacy) .
If you are familiar with Places API (Legacy), Place Details (New)
makes the following changes:
Field masking is required. You must specify which fields you want returned
in the response. There is no default list of returned fields. If you omit
this list, the methods return an error. For more information, see
FieldMask .
Place Details (New) supports both
API keys
and OAuth
tokens as the authentication mechanism.
Only JSON is supported as a response format in Place Details (New).
The JSON response format for Places API (New)
has changed from the format of the legacy APIs. For more details, see
Migrate the Places API response .
The following table lists parameters in Place Details (Legacy) that have been
renamed or modified for Place Details (New), or parameters that are no
longer supported.
Current parameter
New parameter
Notes
place_id
places/ PLACE_ID
The string places/ PLACE_ID is also called the
place resource name . In the response from a Place Details (New),
Nearby Search (New), and Text Search (New)
request, this string is contained in the name field of the response.
The standalone place ID is contained in the id field of the response.
language
languageCode
region
regionCode
Example request
The following example GET request uses the Place Details (Legacy). In this
example, you request a JSON response containing information about a place ID and
pass all parameters as URL parameters. This example also uses fields so the
response only includes the display name and formatted address of the place:
curl -L -X GET \
'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJj61dQgK6j4AR4GeTYWZsKWw&fields=name%2Cformatted_address&key= API_KEY '
With Place Details (New), you make a GET request and pass all parameters
in URL parameters and headers as part of the request. This example also uses a
field mask so the response only includes the display name and formatted address
of the place:
curl -X GET -H 'Content-Type: application/json' \
-H "X-Goog-Api-Key: API_KEY " \
-H "X-Goog-FieldMask: displayName,formattedAddress" \
https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw
The string places/ PLACE_ID is also called the place
resource name . In the response from a Place Details (New),
Nearby Search (New), and Text Search (New) request, this string
is contained in the name field of the response. The standalone place ID is
contained in the id field of the response.
Note: In the Place Details (Legacy) , the name
field of the response contained the human-readable name for the place. In the
new API, that field is now called displayName .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

---
title: "Migrate to Place Photos (New) \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/migrate-photo
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/migrate-photo
  title: "Migrate to Place Photos (New) \_|\_ Places API \_|\_ Google for Developers"
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
Migrate to Place Photos (New)
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
The Places API supports
Place Photos (Legacy) .
If you are familiar with Place Photos (Legacy),
Place Photos (New)
makes the following changes:
Place Photos (New) requires that you
pass the resource name of the photo, which includes the place ID in the
request URL, instead of just the photo reference. For more information, see
Change to photo references .
Place Photos (New) supports both
API keys
and OAuth
tokens as the authentication mechanism.
The following table lists parameters in
Place Photos (Legacy) that have been renamed or
modified for Place Photos (New), or parameters
that are no longer supported.
Current parameter
New parameter
Notes
maxheight
maxHeightPx
You must specify either maxHeightPx ,
maxWidthPx , or both.
maxwidth
maxWidthPx
You must specify either maxHeightPx ,
maxWidthPx , or both.
Increased photo size
Place Photos (Legacy) supported a maximum photo
size of 1600 by 1600 pixels. Place Photos (New)
supports sizes up to 4800 by 4800 pixels.
Change to photo references
Place Photos (New)
API requires that you pass the resource name of the requested photo, which
includes a place ID and the photo reference , in the form:
h tt ps : //places.googleapis.com/v1/places/ PLACE_ID /photos/ PHOTO_REFERENCE /media ?maxWidthPx=400&key= API_KEY
Nearby Search (New),
Text Search (New), and
Place Details (New)
all return a photos[] array in the response that supports this format. Each
element of photos[] in the new response contains the following fields:
name — A string containing the resource name of the
photo. This string is in the form:
places/ PLACE_ID /photos/ PHOTO_REFERENCE
heightPx — The maximum height of the image, in pixels.
widthPx — The maximum width of the image, in pixels.
authorAttributions[] — Any required attributions. This
field is always present, but might be empty.
With the legacy API, you only have to pass the photo reference , in the
form:
h tt ps : //maps.googleapis.com/maps/api/place/photo?photo_reference= PHOTO_REFERENCE maxwidth=400&key= API_KEY
Find Place (Legacy),
Nearby Search (Legacy),
Text Search (Legacy), and
Place Details (Legacy) all return a photos[] array in
the response that supports this format. Each photo element in the legacy
response contains the following fields:
photo_reference — A string used to identify the photo when you
perform a Photo request.
height — The maximum height of the image.
width — The maximum width of the image.
html_attributions[] — Any required attributions. This
field is always present, but might be empty.
Note: The photo_reference field does not include the place ID. If you want to
use Place Photos (New) with these legacy APIs, you
must add the place ID to construct the full resource name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

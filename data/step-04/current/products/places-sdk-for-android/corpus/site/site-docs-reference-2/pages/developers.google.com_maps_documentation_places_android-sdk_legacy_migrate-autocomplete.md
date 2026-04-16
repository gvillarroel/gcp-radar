---
title: "Migrate from Place Autocomplete (Legacy) to Place Autocomplete (New) \_|\_\
  \ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/legacy/migrate-autocomplete
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/legacy/migrate-autocomplete
  title: "Migrate from Place Autocomplete (Legacy) to Place Autocomplete (New) \_\
    |\_ Places SDK for Android \_|\_ Google for Developers"
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
Places SDK for Android
Legacy
Send feedback
Migrate from Place Autocomplete (Legacy) to Place Autocomplete (New)
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
This feature requires that you enable
Places API (New), the next generation of the Places API. For more information, see
Enable APIs .
Places SDK for Android supports
Place Autocomplete (Legacy) .
If you are familiar with
Place Autocomplete (Legacy),
Place Autocomplete (New)
makes the following changes:
Uses a new pricing model. For pricing information for all APIs, see
Places SDK for Android
(New) .
You must initialize your app by calling the
Places.initializeWithNewPlacesApiEnabled()
method. For more information on selecting the Places API service, see
Set up your Google Cloud project .
The FindAutocompletePredictionsRequest
class contains new methods that let you:
Set the region code used to determine formatting of the results.
Set the prediction offset, a zero-based Unicode character offset of the
query.
For more information, see
Autocomplete (New) .
The session now concludes with a call to either
Place Details (New) or
Address Validation . For
more information, see
Autocomplete (New) and session pricing .
Example request
For a complete example, see
Autocomplete (New) .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

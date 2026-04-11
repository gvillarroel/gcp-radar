---
title: "PlacesAppCheckTokenProvider \_|\_ Places SDK for Android \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/auth/PlacesAppCheckTokenProvider
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/auth/PlacesAppCheckTokenProvider
  title: "PlacesAppCheckTokenProvider \_|\_ Places SDK for Android \_|\_ Google for\
    \ Developers"
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
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
PlacesAppCheckTokenProvider
public interface PlacesAppCheckTokenProvider
An interface for fetching the App Check token.
Note: The App Check integration will only work on new Places API.
The App Check token is used to authenticate the client device and application to the Places API.
Summary
Public methods
abstract ListenableFuture < String >
fetchAppCheckToken ()
Fetches the App Check token of current device and application.
Public methods
fetchAppCheckToken
abstract ListenableFuture < String > fetchAppCheckToken ()
Fetches the App Check token of current device and application. And this method will be called as part of every API request.
Returns
ListenableFuture < String >
A ListenableFuture of the App Check token.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

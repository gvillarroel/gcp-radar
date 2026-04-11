---
title: "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/overview-legacy
  title: "Places SDK (Legacy) overview \_|\_ Places SDK for Android \_|\_ Google for\
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
Legacy
Send feedback
Places SDK (Legacy) overview
Stay organized with collections
Save and categorize content based on your preferences.
The Places SDK lets you search for and retrieve information for a variety of
place types using a text string or by proximity. Places SDK is the legacy
version of Places SDK (New).
Use this guide to understand the key differences between the Places SDK versions
and migrate to Places SDK (New).
SDK features available in each version
The following table shows which SDK and API versions are required for each SDK
feature:
Feature
Places API enabled on API key
Initialization method
Minimum SDK version
Autocomplete (New)
Places API (New)
initializeWithNewPlacesApiEnabled()
3.5.0
Place Details (New)
Places API (New)
initializeWithNewPlacesApiEnabled()
3.3.0
Nearby Search (New)
Places API (New)
initializeWithNewPlacesApiEnabled()
3.5.0
Place Photos (New)
Places API (New)
initializeWithNewPlacesApiEnabled()
3.4.0
Text Search (New)
Places API (New)
initializeWithNewPlacesApiEnabled()
3.3.0
Place Autocomplete
Places API
initialize() (Deprecated)
Current Place
Places API
initialize() (Deprecated)
Place Details
Places API
initialize() (Deprecated)
Place Photos
Places API
initialize() (Deprecated)
Deprecated: The Places.initialize method is deprecated. Use Places.initializeWithNewPlacesApiEnabled() instead. Note that in order to use Places.initializeWithNewPlacesApiEnabled() , you need to enable the Places API (New) on your API key in the Google Cloud console.
Migrate to the new APIs
To migrate to the new APIs, see the following migration guides:
Migrate to Place Details (New)
Migrate to Place Photo (New)
Migrate to Autocomplete (New)
Enhancements in Places SDK for Android (New)
This section covers key features added to Places SDK for Android (New).
Implemented on the Google Cloud standard platform
Places SDK for Android (New) is implemented on the service
infrastructure
on Google Cloud. This implementation brings a more secure and trusted platform.
This standard design brings a level of consistency across the SDKs that improve
the efficiency of development with Places SDK for Android
(New).
Improved performance
Places SDK for Android (New) provides improved performance, making it
worthwhile to replace apps that use the existing SDK.
New features
The Places SDK for Android (New) includes the latest versions of all of the SDK
features:
Autocomplete (New)
Place Details (New)
Nearby Search (New)
Place Photos (New)
Text Search (New)
New Text Search service
Text Search (New) returns information
about a set of places based on a string — for example "pizza in New York" or
"shoe stores near Ottawa" or "123 Main Street". The service responds with a list
of places matching the text string and any location bias that has been set.
New response data added to Placed Details (New) and Place Photos (New)
Place Details
(New) now includes the new
Review
class in the response Place object. The
Place class
contains the new getReviews() method to support this field. Call
getReviews() to return up to five reviews for a place.
Place Photo
(New) adds the
AuthorAttributions
to the PhotoMetadata class. AuthorAttributions contains a List of
AuthorAttribution
objects.
New URI response added to Place Photos (New)
You can now use
Place Photo
(New) to return a URI to an image bitmap. Previously, you could only return the
image bitmap itself.
Simplified pricing
Pricing is simplified with Places SDK for Android (New) so that you only
pay for the data you use. Simplified pricing is implemented using field lists,
also called field masks .
With Place Details and
Text Search you use field lists to control the list of
fields to return in the response. You are then only billed for the data
requested. Using a field list is a good design practice to ensure that you don't
request unnecessary data, which helps to avoid unnecessary processing time and
billing charges.
For detailed pricing information for both SDKs, see Usage and
Billing .
Expanded place types
The new SDK includes new place types, which are returned as part of the
Place Details and Text Search
response. You can also use these new types, and the existing types, in a search
with Text Search. The new types are included in Table
A .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

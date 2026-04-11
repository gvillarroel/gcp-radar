---
title: "Places API (Legacy) overview \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
  title: "Places API (Legacy) overview \_|\_ Google for Developers"
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
Places API (Legacy) overview
Stay organized with collections
Save and categorize content based on your preferences.
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Introduction
The Places API lets you search for and retrieve information for a variety of
place types using a text string or by proximity. Places API (Legacy) is the legacy
version of
Places API (New) .
The following table lists the corresponding versions of both APIs. Use this
guide to understand the key differences between the two and migrate to
Places API (New).
Places API (Legacy)
Places API (New)
Notes
Find Place (Legacy)
Text Search (New)
There is no new version of Find Place (Legacy). Text Search (New) has replaced it.
Nearby Search (Legacy)
Nearby Search (New)
All requests using the legacy API that include a text query should use
Text Search (New)
because Nearby Search (New) does not support text input.
Text Search (Legacy)
Text Search (New)
Place Details (Legacy)
Place Details (New)
Place Photos (Legacy)
Place Photos (New)
Place Autocomplete (Legacy)
Autocomplete (New)
Query Autocomplete (Legacy)
Autocomplete (New)
Capabilities added to Autocomplete (New).
Migrate to the new APIs
To migrate to the new APIs, see the following migration guides:
Migrate to Nearby Search (New)
Migrate to Text Search (New)
Migrate to Place Details (New)
Migrate to Place Photos (New)
Migrate to Autocomplete (New)
Key features added to Places API (New)
This section covers key features added to Places API (New).
Implemented on the Google Cloud standard platform
Places API (New) is implemented on the service
infrastructure
on Google Cloud. This implementation brings with it a more secure and trusted
platform with enhanced security options like
OAuth . This standard API
design brings a level of consistency across the APIs that improve the efficiency
of development with Places API (New).
Improved performance
Places API (New) provides improved performance, making it worthwhile to
replace apps that use the existing Places API.
Simplified pricing
Pricing is simplified with Places API (New) so that you only pay for the
data you use. Simplified pricing is implemented using a field
mask .
With Place Details (New), Nearby Search (New), and
Text Search (New) you use the field mask to control the list of fields to
return in the response. You are then only billed for the data requested. Using
field masking is a good design practice to ensure that you don't request
unnecessary data, which helps to avoid unnecessary processing time and billing
charges.
Consistent response data for a place
With the legacy APIs, the Place Details (Legacy), Nearby Search (Legacy), and
Text Search (Legacy) APIs returned different response data for a place.
Places API (New) standardizes the response so these APIs all return the
same data for a place.
Expanded place types
The API response can now contain a place's primary type . Every place can have
a single type value that is specified as the place's primary type, as listed in
Table A .
The new API also includes several new types. You can use these new types, and
the existing types, in a search with Nearby Search (New)
and Text Search (New). The new types are all included in Table
A .
Dynamic place data
Places API (New) supports dynamic response data, such as the availability
of an EV charging station or the latest fuel prices for a gas station. Use these
response fields to create dynamic user experiences.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

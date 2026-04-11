---
title: "Place Search \_|\_ Places API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/search
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/search
  title: "Place Search \_|\_ Places API \_|\_ Google for Developers"
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
Place Search
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
If you're building a client-side
application, take a look at the
Places SDK for Android (New) , the
Places SDK for iOS (New) , and the
Places Library, Maps JavaScript API .
The Places API lets you search for place information
using a variety of categories, including establishments, prominent points of
interest, and geographic locations. You can search for places either by
proximity or a text string. A Place Search returns a list of places along with
summary information about each place; additional information is available using
a Place Details (Legacy) query.
Compare search types
There are three search endpoints available with different characteristics. The following table
highlights some of these differences.
Type
Field selection
Text Search (Legacy)
Ambiguous text
Location filter
Additional filters
Find Place (Legacy)
input
Nearby Search (Legacy)
keyword
Text Search (Legacy)
query
Field selection
There is no way to constrain Nearby Search (Legacy) or Text Search (Legacy) to only return specific fields. To
keep from requesting (and paying for) data that you don't need, use a Find Place (Legacy) request instead.
Ambiguous text
Find Place (Legacy) and Text Search (Legacy) are optimized for matching ambiguous text across a number of fields
while Nearby Search (Legacy) is constrained to strict matches on a subset of fields.
Additional filters
Nearby Search (Legacy) and Text Search (Legacy) allow additional parameters to filter results,
(e.g. minprice , maxprice , opennow , and type ).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

---
title: "Overview \_|\_ Places SDK for iOS \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/overview
  title: "Overview \_|\_ Places SDK for iOS \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Places SDK for iOS
Send feedback
Overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places SDK for iOS allows you to build location-aware iOS applications that utilize local business and point of interest data.
The SDK offers two versions: Places SDK for iOS and Places SDK for iOS (New), with the latter featuring a simplified pricing model and Swift support through a separate Preview SDK.
Core functionalities include place details retrieval, place photos, text search, nearby search, autocomplete, and current place detection (in the older SDK version).
The SDK leverages on-device caching for improved performance and requires adherence to Google Maps Platform Terms of Service and attribution display guidelines.
Before starting, ensure you have a project with an active billing account and the Places API enabled.
Select platform:
Android
iOS
JavaScript
Web Service
European Economic Area (EEA) developers
If your billing address is in the European Economic Area, effective on 8 July 2025, the
Google Maps Platform EEA Terms of Service
will apply to your use of the Services. Functionality varies by region.
Learn more .
Before you begin:
Before you start using the Places SDK for iOS, you need a project with a billing account and the
Places API
enabled. We recommend creating multiple Project Owners and Billing Administrators, so that
you'll always have someone with these roles available to your team. To learn more, see
Set up in Cloud console .
Introduction
The Places SDK for iOS lets you build location-aware apps that respond
contextually to the local businesses and other places near the device. This means you
can build rich apps based on places that mean something to the user.
Note: Places API (New) is the current version of the Places SDK for iOS.
Places API is now Legacy and can no longer be enabled. Legacy documentation and migration guides
are available on the
Legacy tab.
Concepts
A place is defined as a physical space that has a name. Another way
of thinking about a place is that it's anything you can find on a map.
Examples include local businesses, points of interest, and geographic
locations. In the API, a place is represented by the
GMSPlace Class Reference .
It includes information such as the name of the place and its address, geographical location,
place ID, phone number, place type, website URL, and more.
Note: Whenever your app displays
information about places sourced from the Places SDK for iOS,
the app must also show all relevant attributions that are returned by the API.
See the documentation on displaying attributions .
SDK overview
Use Places SDK for iOS to help your customers explore where they are and what's around
them. Places SDK for iOS provides the following APIs:
Places SDK for iOS (New)
Description
Place Details (New)
Returns information about places, including the place's name and address, the geographical location, the type of place (such as night club, pet store, museum), and more.
Place Photo (New)
Returns high-quality images of a place.
Text Search (New)
Returns information about a set of places based on a text search.
Nearby Search (New)
Returns information about a set of places by specifying a location as a search area.
Autocomplete (New)
Automatically fills in the name and/or address of a place as users type.
Other highlights of the SDK include:
Accurate place detection at low power with Wi-Fi scan.
On-device caching: Most requests to the Places SDK for iOS may
involve a round trip to a Google server, but you can also cache data
locally for 30 days.
Policies and terms
All applications that use the Places SDK for iOS must adhere
to the requirements described in the
Google Maps Platform Terms of Service ,
and Displaying Attributions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

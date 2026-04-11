---
title: "Overview \_|\_ Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/overview
  title: "Overview \_|\_ Places SDK for Android \_|\_ Google for Developers"
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
Guides
Send feedback
Overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places SDK for Android allows you to build location-aware apps that utilize Google's database of local place and business information.
You can choose between the Places SDK for Android and the Places SDK for Android (New), each with its own features and pricing model.
Key functionalities include Place Autocomplete, Current Place, Place Details, Text Search, Place Photos, and Place IDs to enrich user experiences.
Before using the SDK, you need a project with a billing account and the Places API enabled, along with adhering to Google Maps Platform Terms of Service.
Ensure your app displays relevant attributions when presenting information sourced from the Places SDK for Android.
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
Before you start using the Places SDK for Android, you need a project with a billing account and the
Places API
enabled. We recommend creating multiple Project Owners and Billing Administrators, so that
you'll always have someone with these roles available to your team. To learn more, see
Set up in Cloud console .
Introduction
The Places SDK for Android lets you build location-aware apps that respond
contextually to the local businesses and other places near the user's device. This means you
can build rich apps based on places that mean something to the user, to complement the
straightforward geographic-based services offered by the
Android location services .
Note: Places SDK (New) is the current version of Places SDK for Android.
Places SDK is now Legacy and can no longer be enabled. Legacy documentation and migration guides
are available on the Legacy tab.
Concepts
The following interfaces provide the primary entry points to the
Places SDK for Android:
Places
provides programmatic access to Google's database of local place and business
information, as well as the device's current place.
Autocomplete
provides pre-made widgets to return place predictions in response to user
search queries.
A place is defined as a physical space that has a name. Another way
of thinking about a place is that it's anything you can find on a map.
Examples include local businesses, points of interest, and geographic
locations. In the API, a place is represented by the
Place
interface. It includes information such as the name of the place and its
address, geographical location, place ID, phone number, place type, website
URL, and more.
Note: Whenever your app displays
information about places sourced from the Places SDK for Android,
the app must also show all relevant attributions that are returned by the API.
See the documentation on
displaying
attributions .
API overview
Help your customers explore where they are and what's around them:
Place Autocomplete
automatically fills in the name and/or address of a place as users type.
Place Details return and
display more detailed information about a place.
Nearby Search returns a list of
places based on a location and a search radius.
Place Photos returns high-quality
images of a place.
Text Search returns places based
on a search text string.
Place IDs store the unique ID
for one or more places for retrieval of place information on demand.
Note: Google gathers anonymous usage
statistics.
Policies and Terms
All applications that use the Places SDK for Android must adhere
to the requirements described in the
Google Maps Platform Terms of Service ,
Usage and Billing , and
Displaying Attributions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

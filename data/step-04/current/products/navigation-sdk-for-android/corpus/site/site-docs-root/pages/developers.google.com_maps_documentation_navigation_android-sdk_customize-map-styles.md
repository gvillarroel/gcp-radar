---
title: "Customize map styles \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles
  title: "Customize map styles \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
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
Navigation SDK for Android
Send feedback
Customize map styles
Stay organized with collections
Save and categorize content based on your preferences.
This product or feature is in Preview (pre-GA).
Pre-GA products and features might have limited support, and changes to pre-GA products and
features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by
the Google
Maps Platform Service Specific Terms . For more information, see the
launch stage
descriptions .
Paid feature:
Features accessed by adding a map ID triggers a map
load charged against the Dynamic Maps SKU for Android and iOS. See
Google Maps Billing for more information.
You can use cloud-based map styling to define reusable map styles for the Google navigation
experience in the Navigation SDK. This page provides an overview of how you can define and apply map
styles, as well as specific implementation details for the Navigation SDK. For complete information
about cloud-based map styling, see the
Overview page in Maps SDK for
Android documentation
.
Define map styles
The first step in customizing map styles for the Navigation SDK is creating a map style and
associating it with a map ID. Map styles are created, stored, and edited in the Google Maps
Platform Cloud Console. You then reference the map ID in your app code to display the customized
map.
There are two map types in the Navigation SDK that can be styled: the navigation map, which is
visible during an active navigation session, and the road map, which is visible whenever there is
no navigation session active. The styles that you define and associate with a map ID apply to both
the navigation and road map types.
For complete details about defining map styles, see
Create and use map styles in the Maps SDK for Android documentation.
Note: While it is technically possible to define separate styles for the navigation
and road map types by associating separate styles with different map IDs, this implementation is not
recommended because it requires reloading the map to load the different map ID.
Apply map styles
Once you have map styles associated with a map ID, you can add the ID through a
<fragment> element in the activity's layout file, by using the
MapView class, or by using the
GoogleMapOptions class on a
MapFragment ,
SupportMapFragment , or
SupportNavigationFragment instance.
For more information about applying map styles, see
Add the map ID to your app in the Maps SDK for Android documentation.
Light and dark mode styles
Cloud-based map styling lets you define light mode and dark mode styles. In the Navigation SDK,
road maps (non-navigation maps) can have light and dark modes, and navigation maps can have
daylight and low-light or night modes. When you associate styles with maps in the Navigation SDK,
the styles apply to both road and navigation maps:
Light mode styles in the Cloud Console apply to both light mode road maps
and daylight navigation maps.
Dark mode styles in the Cloud Console apply to both dark mode road maps
and low-light/night mode navigation maps.
Billing
When an app loads a map that has a map ID applied, a map load charged against the Dynamic Maps
SKU is triggered. Note that this trigger is different from that of map loads that don't have map
IDs applied. Map loads without map IDs are charged against the Maps SDK SKU . For more information
about triggers and pricing for each SKU, see Pricing and Billing .
Policies and use
When customizing map styles in the Navigation SDK, you must adhere to the policies
regarding acceptable modifications to the navigation UI. In particular, you must not
remove road networks from the navigation map or significantly reduce color contrast
of map features on the navigation map.
For complete details about acceptable modifications to the Navigation UI, see
Policies for Navigation SDK for
Android .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]

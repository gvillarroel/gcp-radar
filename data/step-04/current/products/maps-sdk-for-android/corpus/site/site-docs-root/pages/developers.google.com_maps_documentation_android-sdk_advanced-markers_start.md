---
title: "Get started \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start
  title: "Get started \_|\_ Maps SDK for Android \_|\_ Google for Developers"
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
Maps SDK for Android
Guides
Send feedback
Get started
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Advanced markers necessitate the utilization of the upgraded map renderer, available in Maps SDK for Android version 18.0.0 and later, and are enabled by default in version 18.2.0 and later.
A crucial initial step involves creating a map ID within the Google Cloud console and integrating it into your map initialization code.
It is imperative to verify if advanced markers are supported on the device using MapCapabilities.isAdvancedMarkersAvailable() , and to provide a fallback mechanism, such as standard markers, if they are not.
Developers must ensure compatibility by checking device requirements for the new map renderer, as some devices might not support it.
Select platform:
Android
iOS
JavaScript
Follow these steps to get set up with advanced markers.
Enable the new map renderer
An upgraded map renderer is available as of version 18.0.0 of the
Maps SDK for Android. This renderer brings many improvements, including
support for Cloud-based maps styling, to Maps SDK for Android.
With the release of version 18.2.0 of the Maps SDK for Android, Google switched the
default renderer from the legacy renderer to the upgraded map renderer. This
change means that the upgraded map renderer is now used by default in your app
when you build a new app or rebuild an existing app.
Caution: To use advanced markers in your app, your app must be
built using the upgraded map renderer. If you are adding
advanced markers to an existing app, ensure that you rebuild
the app so that your app uses the upgraded map renderer. For more information,
see
New Map Renderer .
Create a map ID
To create a new map ID, follow the steps at
Create a map ID . Make sure you
set the Map type to Android .
Important: For testing, you can skip the step of creating and configuring a map
ID by using a map ID of DEMO_MAP_ID in your app code. DEMO_MAP_ID is
intended for testing purposes only. Don't use DEMO_MAP_ID in a production
environment.
Update your map initialization code
This step requires the map ID you just created. It can be found on your Maps
Management page.
To add the map ID to your initialization code, see
Add the map ID to your app .
Check map capabilities (required)
Advanced markers requires a map ID. If the map ID is missing, or an
invalid map ID is passed, advanced markers cannot load. Use
the
MapCapabilities.isAdvancedMarkersAvailable()
method to check to see if advanced markers are supported.
Caution: Some devices might not support the new map renderer and therefore
cannot display advanced markers. You must use
MapCapabilities to check for support at runtime. If
advanced markers are not supported, define a fallback option
such as using standard markers . For
device requirements for the new map renderer, see Supported
devices .
Kotlin
val capabilities : MapCapabilities = googleMap . getMapCapabilities ()
System . out . println ( "is advanced marker enabled?" + capabilities . isAdvancedMarkersAvailable ())
Java
MapCapabilities capabilities = googleMap . getMapCapabilities ();
System . out . println ( "is advanced marker enabled?" + capabilities . isAdvancedMarkersAvailable ());
Next steps
Create an advanced marker
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

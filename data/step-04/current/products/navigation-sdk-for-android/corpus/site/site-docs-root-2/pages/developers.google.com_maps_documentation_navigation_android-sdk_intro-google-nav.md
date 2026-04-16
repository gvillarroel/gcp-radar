---
title: "The Google navigation experience \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav
  title: "The Google navigation experience \_|\_ Navigation SDK for Android \_|\_\
    \ Google for Developers"
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
The Google navigation experience
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Navigation SDK enables developers to easily integrate turn-by-turn navigation into their apps using pre-built UI elements similar to the Google Maps app.
Developers can customize aspects of the Google navigation experience like color schemes, camera views, and guidance information, but for full control, a custom navigation experience is recommended.
The Google navigation experience involves a three-step flow: starting navigation by defining the destination, active navigation with real-time guidance, and stopping navigation upon arrival.
The Navigation SDK offers various options for modifying the navigation UI, such as showing or hiding elements, adjusting traffic and speed limit information, and customizing the map and camera.
The Navigation SDK provides different ways to integrate a navigation
experience into your app. This page explains what the Google navigation
experience is and how it differs from other navigation experiences that are
available in the Navigation SDK.
What is the Google navigation experience?
The Google navigation experience refers to using the Navigation SDK to
embed a turn-by-turn navigation experience that uses Google-provided UI elements
and visuals, which are similar to the navigation experience within the Google
Maps apps. When you embed the Google navigation experience in your app, you
don't need to build the navigation experience from scratch, but you can still
modify parts of the experience. As an alternative, if you need more
customization than is available with the Google navigation experience, you can
request a turn-by-turn navigation feed from the Navigation SDK and then
provide and manage your own UI elements.
For more information, see Custom navigation
experience .
When you use Google navigation experience, your app calls the
Navigation SDK to start, run, and stop navigation, using the following
flow:
Start navigation . To start navigation, your app creates a navigator
instance. From there, it sets the destination for the navigator and
initializes a map. Finally, the app initiates the turn-by-turn guidance.
This app flow can be presented to the user in a variety of ways depending on
your use case. For example, the app might have a store locator with its own
UI elements that users can use to begin navigation to the store. Or, your
app might begin active navigation with a predefined destination when a
driver accepts a delivery task.
Active navigation . Once your app enters active navigation, it uses the
device location to maintain active guidance. You configure event listeners
that are meaningful to your use case, such as for route changes and
remaining time to the destination. During active navigation, the Navigation
SDK provides UI components, which are similar to those in the Google Maps
apps. For example, the navigation experience shows a standard Google maps
layer, with visuals like turn guidance cards, traffic layers, alternate
routes, and speed limits.
Stop navigation . Your app terminates the navigation session in the way
that best works for your use case, such as with an arrival listener that
triggers when the user reaches the destination.
Note: You can configure a maximum of 25 waypoints.
How can you modify the Google navigation experience?
In general, you can modify the Google navigation experience to have different
color schemes, camera views, extra turn guidance, and event response triggers.
The following list describes some of the adjustments you can make. This list is
not exhaustive.
Modification
Details
Modified navigation guidance: show/hide headers, colors
and fonts, directions, alternate routes, and trip progress
Map
UI controls
Modify
the navigation header
Display
directions list
Hide
alternate routes
Display
trip progress
Adjust traffic information and speed limit information
Turn
off traffic layer
Enable
traffic lights and stop signs
Display
the speedometer
Change the map experience UI and adjust the camera.
Add
custom markers
Floating
text
Set
night mode
Adjust the camera
Modify styles for the navigation map and road map (non-navigation map) using cloud-based map styling.
Customize map styles
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

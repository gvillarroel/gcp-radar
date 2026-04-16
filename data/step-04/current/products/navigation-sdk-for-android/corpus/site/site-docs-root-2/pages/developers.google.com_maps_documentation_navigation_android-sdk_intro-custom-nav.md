---
title: "Custom navigation experience \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav
  title: "Custom navigation experience \_|\_ Navigation SDK for Android \_|\_ Google\
    \ for Developers"
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
Custom navigation experience
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK offers both a pre-built Google navigation experience and the flexibility to create custom navigation experiences.
Custom navigation experiences allow developers to manage UI elements, visuals, and event handling for a highly tailored user interface.
This customization ranges from background navigation to projecting guidance onto separate screens, giving developers more control.
Custom experiences involve starting navigation, managing active navigation with event handlers, and ending navigation as needed.
Use cases for custom navigation include text-only guidance, Android Auto integration, and dynamic switching between map views and turn-by-turn instructions.
The Navigation SDK provides different ways to integrate a navigation
experience into your app. This page explains what a custom navigation experience
is and how it differs from other navigation experiences that are available in
the Navigation SDK.
What is a custom navigation experience?
The primary way to implement the Navigation SDK is to use the Google
navigation
experience ,
which lets you embed a turn-by-turn navigation experience that uses
Google-provided UI elements and visuals — similar to the navigation experience
within the Google Maps apps. If you need more flexibility than the Google
navigation experience offers, you can implement a custom navigation experience.
A custom navigation experience refers to anything from eliminating turn guidance
entirely with and running navigation only as a background process, to projecting
a highly customized guidance experience to a screen separate from the device
that runs the navigation. With a custom navigation experience, your app calls
the Navigation SDK to request a turn-by-turn navigation feed, and then
you provide and manage the UI elements and visuals that the user sees in the
navigation experience. While using the Google navigation experience is generally
easier to implement, building your own custom navigation experience allows for
more customization.
When you create a custom navigation experience, your app calls the Navigation
SDK to start, run, and stop navigation, using the following flow:
Start navigation . As with the Google navigation experience, a custom
navigation experience still involves creating a navigation instance and
setting the destination. However, with a customized navigation experience,
you achieve this by first establishing a navigation session using
GMSNavigationService.createNavigationSession , which is a state-bearing
non-UI object that can operate either with a view controller, or without
one.
For more information, see Enable turn-by-turn data
feed .
See the demo: The download of the Navigation SDK contains a demo
you can run to see an example of a navigation experience that switches
between turn-by-turn guidance through standard navigation to a navigation
experience that shows only the device location moving along a road
polyline.
Active navigation . Here is another key difference between a
Google-provided navigation experience and a custom navigation experience.
Instead of handing off guidance to the built-in event manager of the
Navigation SDK, you enable the turn-by-turn feed and implement event
handlers. This allows your experience to respond to the events described in
Listen for navigation
events .
End navigation . As with the Google navigation experience, custom
navigation also requires you to terminate navigation in the manner best
suited for the app's experience.
When might you use a custom navigation experience?
The following table describes some custom navigation scenarios.
Example scenario
High-level steps
You need to provide text-only driver guidance for small devices such
as 2-wheeled vehicles.
Create your navigator and set up the turn-by-turn guidance as a data
feed to a small screen device while the navigator runs on the
driver's mobile phone outside of their immediate view.
You want to make your app available as a car service for drivers who
use Android Auto.
Set up the car service.
Set up your Navigation SDK project.
Establish a navigator if you haven't already.
Enable the turn-by-turn guidance feed.
Draw the map on the auto app surface and populate the fields from the data feed you configured.
For more information, see Enable Navigation for Android Auto
Drivers using your app want an overview map for most of their
journey, with only minimal turn-by-turn guidance for city streets.
Your app should allow drivers to enter and exit the Google navigation
experience as they need, without alternating the navigator's settings for
destination and trip mode.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

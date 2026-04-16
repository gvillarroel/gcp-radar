---
title: "Overview \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview
  title: "Overview \_|\_ Maps SDK for Android \_|\_ Google for Developers"
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
Overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Advanced markers allow you to create highly performant and customizable markers, offering control over background, border, glyph color, and the ability to replace the default icon with custom graphics.
They inherit all existing Marker properties, including title, snippet, click events, and drag events, while adding features like customizing colored pins, using Android views as markers, and controlling collision behavior.
Developers can further personalize markers by customizing the default marker's appearance, including background, glyph, and border color, or even replace it entirely with a custom Android view.
Advanced markers also provide options for managing collision behavior, allowing developers to specify how markers should react when overlapping with other markers or map labels.
Select platform:
Android
iOS
JavaScript
With advanced markers you can create and customize highly
performant markers. Customize the default marker's background, border, and glyph
color, and replace the default marker icon with a custom
graphic image.
Advanced markers are objects of type
AdvancedMarker ,
which is a subclass of
Marker .
With advanced markers, all the existing
Marker properties are customizable, including:
The title and
snippet fields
Click events
Drag events
Advanced markers add the following additional features:
Customize colored pins
Set any Android
View
as the marker
Control collision behavior
Customize marker properties
Customize the default marker's background, glyph, and border color.
Use an Android view as the marker
Replace the default marker icon with an Android
View
containing a custom completely custom marker.
Set marker collision behavior
Specify how a marker should behave when it collides with
another marker or map label. Marker altitude is only supported on vector maps.
Next step
Get started with advanced markers
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Advanced markers enable highly customizable and performant markers on maps. Users can personalize the default marker's background, border, and glyph colors, or substitute it with a custom graphic image or an Android `View`. These markers support standard `Marker` properties like title, snippet, click, and drag events. Unique features include colored pins, `View`-based markers, and collision behavior control. Users can customize the default marker's properties and specify how markers interact with other elements.\n"]]

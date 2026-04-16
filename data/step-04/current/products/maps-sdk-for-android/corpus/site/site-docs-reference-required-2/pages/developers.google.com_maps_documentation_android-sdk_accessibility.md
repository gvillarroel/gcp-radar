---
title: "Enhancing Accessibility \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/accessibility
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/config
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/accessibility
  title: "Enhancing Accessibility \_|\_ Maps SDK for Android \_|\_ Google for Developers"
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
Enhancing Accessibility
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Maps SDK for Android has built-in accessibility features automatically enabled for applications using the API.
TalkBack allows users to navigate the map interface by swiping or dragging a finger, announcing UI elements as they come into focus, and performing actions with a double-tap.
Developers should consider adding a map description announcement using setContentDescription() for improved accessibility.
Further accessibility guidance can be found in the Android accessibility documentation.
When users enable the TalkBack accessibility feature on their mobile devices,
each single swipe across the screen moves the focus from one UI element to the
next. (An alternative to single swiping is to explore UI elements by dragging a
finger over the interface.) As a UI element comes into focus, TalkBack reads out
the name of the element. If the user double-taps anywhere on the screen, the
focused action is performed.
For guidance on enhancing the accessibility of your Android app, refer to the
Android accessibility documentation . In particular, it's good
practice to add an announcement describing the map. To specify the text of the
announcement, call setContentDescription() on the view.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The Maps SDK for Android offers built-in accessibility features. When TalkBack is enabled, single swipes or dragging moves focus between UI elements, with TalkBack announcing the focused element's name. A double-tap performs the action associated with the focused element. Developers can enhance accessibility by adding a map description via `setContentDescription()`, as per the Android accessibility documentation.\n"]]

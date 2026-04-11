---
title: "Verify an auto-migrated map style \_|\_ Maps SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/update-legacy
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/update-legacy
  title: "Verify an auto-migrated map style \_|\_ Maps SDK for Android \_|\_ Google\
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
Maps SDK for Android
Guides
Send feedback
Verify an auto-migrated map style
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Web Service
To use cloud-based maps styling on Android, you must use the
latest renderer for Maps SDK for Android.
Follow these instructions .
Important: With the deprecation of legacy map styles, all legacy map styles have
been automatically migrated to the latest map style and have the prefix of
[AutoMigrated] in the style name.
You should review all automatically migrated styles in the style editor to make
sure the style updates didn't result in any unwanted effects in your custom
style.
Review an automatically migrated map style
To check if your automatically migrated map styles work, do the following:
In the style editor, open the updated map style.
Map features that have custom styles are marked with a solid blue dot.
Expand all map features to find all of the changes.
Check all map features with custom styles in the following areas:
Map features : Check that the earlier map features have been moved to
the appropriate new map features.
Map styling : Check that colors, visibility, and other styling
features are rendering as expected on the preview map.
Take advantage of the new map features : Look to see if there is a
new map feature that is more accurate or detailed that works for your
needs.
For more information on what has changed between legacy styles and the
latest styling, see Map feature changes .
Make any needed adjustments to the updated map style, and test
the adjustments.
When you are satisfied with the updated map style, you can publish it in
the style editor.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

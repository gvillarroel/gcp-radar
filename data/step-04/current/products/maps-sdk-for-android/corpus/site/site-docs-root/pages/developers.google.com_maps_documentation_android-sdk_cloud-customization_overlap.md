---
title: "Manage styles that overlap \_|\_ Maps SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/overlap
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/overlap
  title: "Manage styles that overlap \_|\_ Maps SDK for Android \_|\_ Google for Developers"
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
Manage styles that overlap
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
On the base map, some map features overlap each other at certain
zoom levels. When overlapping happens, you might not see a custom style appear
because another map feature style completely or partially obscures the style
you set. If the overlapping map feature is partially transparent, it changes
the color.
If you are styling a map feature, and aren't seeing your changes appear,
it may be because there is an overlapping map feature. Here are some examples:
Map features completely overlap : The map feature POI>Nature Reserve
may overlap with a Natural>Vegetation map feature. For example, if you
are styling national parks, Yellowstone never shows the Nature Reserve
style because the Vegetation map feature covers it.
Another example is some parking garages have map features of parking
and building overlapping.
A transparent map feature overlaps another : If a transparent map feature
overlaps another map features, it appears as an overlay
at some zoom levels. For example, these two images show hospitals
styled as red. In the first, the Building map feature style overlays the
Hospital map feature, but is semi-transparent, so it alters the color.
In the second image, the building map feature Visibility is Off ,
so it shows the chosen style–a solid red.
Find map features that overlap
To figure out which overlapping map features affect your results,
take the following steps:
If you have an idea what the overlapping map feature is, turn
the Visibility Off for your suspected overlapping map feature, and
see if your style appears as expected.
Try turning off the most likely suspects, like Building or Natural .
If you still haven't found it, start by turning Visibility Off on
the other top-level map features in turn, watching the map for when
your styling appears as expected.
When you've narrowed it down to a top-level feature, test the map
features under it to pinpoint the overlapping feature or features.
Manage overlapping map features
Once you figure out which map features are overlapping, you have a few choices:
Turn visibility off on the overlapping map feature : This change
removes the map feature from the map.
Style the overlapping feature as well : By styling the overlapping
map feature, you change a feature other than the one you intended so that
its styling is more compatible with the style you want to change or add.
Style the overlapping feature instead : If it works for your needs,
style the overlapping feature instead of the original map feature.
Leave it overlapping : As in the hospital example above, sometimes it
works to leave the overlay effect, rather than turn off visibility for
all buildings.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

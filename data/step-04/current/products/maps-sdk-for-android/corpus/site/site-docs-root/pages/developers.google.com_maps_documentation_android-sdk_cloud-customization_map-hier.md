---
title: "Understand map style inheritance and hierarchy \_|\_ Maps SDK for Android\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-hier
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-hier
  title: "Understand map style inheritance and hierarchy \_|\_ Maps SDK for Android\
    \ \_|\_ Google for Developers"
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
Understand map style inheritance and hierarchy
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
When you customize a map style, it helps to understand how styling different map
features may affect other styles on the map. There are several layers that
overlap:
The base map : When you start creating a map style, the initial
you see is the style of the base map; that is, the default map. Any map
features you don't customize retain the base map styling.
Map styles : Custom styles override the styles on the base map layer.
In this image, the custom map style overrides the urban areas as aqua
and roads as dark blue.
Style elements : Each map feature has one or more style elements that
you can customize. In this image, the urban areas map feature polygon
fill color is styled as aqua, and the road network fill color
is styled as blue.
Map feature hierarchy
Within a map style, map features are organized hierarchically, with 4 broad
map features at the top, and all other map features arranged beneath them in
a logical hierarchy. By default, a map feature inherits the element styles
for the map feature above it in the hierarchy (its parent); however, you
can override the top level style by setting one or more of the style elements
for map features underneath it (child map features). For details on the map
feature hierarchy, see What you can style on a map .
Each map feature has one or more elements, or parts of the map feature, that
you can style. For example, the fill color for the polygon (the map feature
shape) is an element, as is the stroke color for the text label. You style
each element separately, and any element you don't style retains the default
style. Since elements are separate, you can style the fill color for label
text, and leave the stroke (outline) color as the default (or inheriting
from a parent style).
Here are some helpful guidelines in understanding how style hierarchy and
inheritance work.
Default child styles inherit from the parent : To have all
child map features inherit a style, set the style for the parent map feature,
and leave the child style as the default.
Custom child styles override the parent : To override the parent style,
set a custom style on the child feature.
Style elements are independent : The style elements you can set for a
map feature (for example, the polygon, the label icon, and the label text
fill and stroke) are independent from each other. If you set the polygon
color, but leave the icon alone, the polygon style overrides the parent
style, but the icon inherits the parent or default style.
Turn off Visibility to hide map features : If you want to see only one
thing on your map, you have to turn off visibility for everything else.
Note: When you hide map features or make them semi-transparent, you may expose
boundary inaccuracies. Map feature boundaries are not always precise, but are
adjusted to look correct when all layers are visible. For more details, see
Manage styles that overlap .
Hierarchy and Inheritance Example
Here is an example of how inheritance and hierarchy works.
Select the top-level map feature of Natural , and set the
Polygon Fill color to yellow. This styles all polygons for map
features under Natural to be yellow:
You want Land cover , which is under Natural , to also be yellow,
so you leave it unstyled, and it inherits the style from Natural .
You want forests to be green, so under Land cover , you open Forest ,
and color its polygon green. This custom child style overrides the
styles for Land cover and Natural .
You want ice to be shown a pale aqua, so also under Land cover , you
open Ice , and color its polygon pale aqua.
And last, you want water to be aqua, so you select Natural>Water , and
color its polygon aqua. Setting the child style Water overrides the parent
style for Natural .
Follow a similar process to highlight the map features for your needs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

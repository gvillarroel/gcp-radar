---
title: "Localize the map \_|\_ Maps JavaScript API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/javascript/3d/localization
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/javascript/3d/localization
  title: "Localize the map \_|\_ Maps JavaScript API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

reviews Get a Maps Demo Key : Try out select Maps JavaScript API and Places UI Kit features at no cost with a Maps Demo Key—no billing information required.
Home
Products
Google Maps Platform
Documentation
Web
Maps JavaScript API
Send feedback
Localize the map
Stay organized with collections
Save and categorize content based on your preferences.
You can customize the language and region settings used in your map by changing
the default language settings and the map's region code, which can affect the
behavior of the map based on the specified country or territory.
Review the coverage for 3D Maps in Maps JavaScript in the Maps coverage
table .
Language localization
By default, the Maps JavaScript API uses the language settings that
the user specifies in their browser to determine which translation of the map to
use. However, you can change this, and set a specific language to be used by
setting the language parameter when creating a 3D map. Language and region
can be updated after the map is initialized.
Setting the language parameter affects the language that controls, tooltips,
and copyright notices are displayed in. It also affects the translation of
political features, descriptors, and natural features; such as changing "Geneva"
to "Genève" or "lake" to "lac", or changing the direction that the language is
rendered.
The 3D Maps in Maps JavaScript looks for localization preferences in the following order. If
preferences aren't defined at the first step, then it continues looking in the
specified order. Any conflicting localization instructions are resolved based on
precedence defined below:
Map3DElement definition . This is the first place that 3D Maps
looks for localization preferences.
Maps JavaScript API loader . The language specified when
loading the Maps JavaScript API is used.
Browser setting and domain . The browser setting is used for language,
and the domain the Maps JavaScript API was loaded from is used
for the region.
The following example displays a map in Chinese and sets the region to China:
const map = new Map3DElement ({
center : { lat : 37.7704 , lng : - 122.3985 , altitude : 500 },
tilt : 67.5 ,
mode : 'HYBRID' ,
language : "ZH" ,
region : "CN"
});
Region localization
The region parameter can serve different map tiles or bias the application
towards more regionally-appropriate results. Additionally, setting the region
tag ensures that the application complies with local laws by ensuring that the
correct regional localization is applied to the country where the application is
hosted.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

---
title: "3D map controls and exploration \_|\_ Maps JavaScript API \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/maps/documentation/javascript/3d/map-controls
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/javascript/3d/map-controls
  title: "3D map controls and exploration \_|\_ Maps JavaScript API \_|\_ Google for\
    \ Developers"
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
3D map controls and exploration
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Controls Overview
The maps displayed through the 3D Maps in Maps JavaScript API contain UI elements, known as
exploration controls , to support user interaction with the map. Exploration
controls are displayed in the map UI by default, but can be disabled for
simplicity or to leave room for custom controls. Note that keyboard shortcuts
for map exploration are available when UI controls are disabled.
The 3D Maps in Maps JavaScript API also supports guiding your users around the map using
preset camera paths. These paths can be customized and combined to create rich
3D experiences.
Tip: To enforce restrictions on the latitude, longitude, and camera behavior,
see Control the map and camera .
Exploration controls
The following image shows the default set of controls displayed by the
3D Maps in Maps JavaScript API:
Below is a list of the full set of controls in the 3D Maps in Maps JavaScript:
The Zoom control displays "+" and "-" buttons for changing the zoom
level of the map.
The Move control displays "←", "→", "↑", and "↓" buttons for changing
the center of the map.
The Rotate controls let you change the camera's heading.
The Tilt control lets you change the camera's tilt.
The Compass control indicates the direction of compass north, and allows
for resetting the camera to a northerly heading.
The following code sample demonstrates toggling exploration controls:
JavaScript
const map = new Map3DElement ({
center : { lat : 37.819852 , lng : - 122.478549 , altitude : 2000 },
tilt : 75 ,
heading : 330 ,
mode : MapMode . SATELLITE ,
defaultUIHidden : true ,
});
HTML
<gmp-map-3d
mode="hybrid"
range="639.274301042242"
tilt="64.92100184857551"
center="34.0768990953219,-118.47450491266041,292.9794737933403"
heading="-61.02026752077781"
default-ui-disabled
></gmp-map-3d>
Next steps
Learn how to restrict the map and camera .
Learn how to listen for and handle user interaction .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

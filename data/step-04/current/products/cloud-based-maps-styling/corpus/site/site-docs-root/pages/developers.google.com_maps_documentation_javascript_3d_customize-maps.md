---
title: "Customize 3D maps \_|\_ Maps JavaScript API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/javascript/3d/customize-maps
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/javascript/3d/customize-maps
  title: "Customize 3D maps \_|\_ Maps JavaScript API \_|\_ Google for Developers"
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
Customize 3D maps
Stay organized with collections
Save and categorize content based on your preferences.
You can customize the look and feel of the 3D basemap using
cloud-based maps styling.
With cloud-based maps styling, you have control over the look and feel of
the map that you present to users. By controlling features such as the density
of points of interest (POIs), the removal of certain POI categories, and
modifying the fill or stroke of features, you can create a map experience
tailored to your users.
Cloud-based maps styling provides a no-code editing
experience in the Google Cloud console. Edits made to your style in the maps
console will appear in your application automatically.
Note: Preview capabilities for 3D cloud-based maps styling aren't
currently available. When creating a 3D style, select the "2D hybrid" option in
the Google Cloud console.
The following example shows a map that uses a custom style to change the color
of recreation feature icons and text to orange:
async function initMap () {
const { Map3DElement } = await google . maps . importLibrary ( 'maps3d' );
const map = new Map3DElement ({
center : {
lat : 37.75183154601466 ,
lng : - 119.52369070507672 ,
altitude : 2200 ,
},
tilt : 67.5 ,
heading : 108.94057782079429 ,
range : 6605.57279990986 ,
mapId : 'bcce776b92de1336e22c569f' ,
mode : 'HYBRID' ,
gestureHandling : 'COOPERATIVE' ,
});
document . body . append ( map );
}
initMap (); index . js
Overview
The process for customizing 3D maps using cloud-based maps styling is the
same as for 2D maps:
1
Create a map ID
Create a Map ID .
Map IDs are passed to your application to handle styling. You'll associate a
custom style with this map ID in subsequent steps.
2
Create a cloud-based map style
You must select "3D Hybrid" and use "light mode" in this step.
3
Associate your map style with a map
Link your style
to the map ID you created in step one
4
Add the map ID to your application
Specify the map ID in your code using the map-id parameter.
5
Publish the map ID
Note that changes to your custom style are automatically incorporated
into your application after publishing.
For an in-depth look at creating map styles, review Create and use map
styles .
Limitations
There are certain limitations to be aware of when using
cloud-based maps styling with 3D Maps in Maps JavaScript:
Dark mode isn't supported.
Map ID-enabled features like data-driven styling aren't supported.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

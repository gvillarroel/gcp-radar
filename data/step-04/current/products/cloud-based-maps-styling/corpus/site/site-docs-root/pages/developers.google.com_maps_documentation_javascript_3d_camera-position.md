---
title: "Control the position of the camera \_|\_ Maps JavaScript API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/javascript/3d/camera-position
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/javascript/3d/camera-position
  title: "Control the position of the camera \_|\_ Maps JavaScript API \_|\_ Google\
    \ for Developers"
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
Control the position of the camera
Stay organized with collections
Save and categorize content based on your preferences.
In the 3D Maps in Maps JavaScript API, you manage the camera's focus using the
cameraPosition option.
Key Behaviors:
With center : The latitude and longitude coordinates specify the
exact point on the map the camera faces.
With cameraPosition : The camera itself is placed at the coordinates
provided during construction. This often makes it difficult to center the
view on a specific point of interest.
The following example demonstrates initializing a map using the center option
to ensure a specific focal point. The marker indicates the center point provided
in the center :
CSS
gmp-map-3d {
height : 100 % ;
}
html ,
body {
height : 100 % ;
margin : 0 ;
padding : 0 ;
} style . css
HTML
<html>
<head>
<title>3D Camera Position</title>
<link rel="stylesheet" type="text/css" href="./style.css" />
</head>
<body>
<gmp-map-3d
center="40.7860524,-73.9634983,0"
range="1500"
tilt="70"
heading="-150"
mode="satellite">
<gmp-marker position="40.7860524,-73.9634983" altitude-mode="clamp-to-ground"></gmp-marker>
</gmp-map-3d>
<script
async
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6myHzS10YXdcazAFalmXvDkrYCp5cLc8&v=weekly&libraries=maps3d"></script>
</body>
</html> index.html
Try Sample
JSFiddle.net
Field of view and range
You can adjust how much of the map is visible in the viewport using two distinct
parameters: range and fov. While they both affect the "zoom" level, they
function differently:
range : Controls the physical distance between the camera and the center
point. Adjusting this is equivalent to moving the camera closer to or
further away from the map.
fov (Field of View): Controls the angle of the camera's lens. A higher
value acts like a wide-angle lens, showing more of the periphery, while a
lower value acts like a telephoto lens.
The following comparison shows the same map at opposite ends of the fov
spectrum. In the left map, the fov is set to 5 (narrow/telephoto); in the right
map, it is set to 80 (wide-angle).
Note: Both parameters are optional and can be used independently or in tandem.
Think of range as controlling distance and field of view as controlling the
width of the scene.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

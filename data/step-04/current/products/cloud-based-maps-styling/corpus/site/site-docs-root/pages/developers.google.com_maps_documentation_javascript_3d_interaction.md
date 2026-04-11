---
title: "Control the map and camera \_|\_ Maps JavaScript API \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/javascript/3d/interaction
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/cloud-customization?csw=1
source_metadata:
  url: https://developers.google.com/maps/documentation/javascript/3d/interaction
  title: "Control the map and camera \_|\_ Maps JavaScript API \_|\_ Google for Developers"
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
Control the map and camera
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
It may be desirable for you to control the camera's pan, maximum altitude, or to
create latitude and longitude boundaries restricting a user's movement in a
given map. You can do this using camera restrictions .
The following example shows a map with location boundaries set to limit the
camera's movement:
Restrict map bounds
You can restrict the geographical boundaries of the camera by setting the
bounds option.
The following code sample demonstrates restricting the map bounds:
async function init () {
const { Map3DElement , MapMode } = await google . maps . importLibrary ( "maps3d" );
const map = new Map3DElement ({
center : { lat : 37.7704 , lng : - 122.3985 , altitude : 500 },
tilt : 67.5 ,
mode : MapMode . HYBRID ,
bounds : { south : 37 , west : - 123 , north : 38 , east : - 121 }
});
init ();
}
Restrict the camera
You can restrict the movement of the camera by setting any of the following
options:
maxAltitude
minAltitude
maxHeading
minHeading
maxTilt
minTilt
The following code sample demonstrates restricting the camera:
async function init () {
const { Map3DElement , MapMode } = await google . maps . importLibrary ( "maps3d" );
const map = new Map3DElement ({
center : { lat : 37.7704 , lng : - 122.3985 , altitude : 500 },
tilt : 67.5 ,
mode : MapMode . HYBRID ,
minAltitude : 1 ,
maxAltitude : 1000 ,
minTilt : 35 ,
maxTilt : 55
});
document . body . append ( map );
}
init ();
Restrict map and camera bounds
You can simultaneously restrict both map and camera bounds. The following code
sample demonstrates restricting both map and camera boundaries:
async function init () {
const { Map3DElement , MapMode } = await google . maps . importLibrary ( "maps3d" );
const map = new Map3DElement ({
center : { lat : 37.7704 , lng : - 122.3985 , altitude : 500 },
tilt : 67.5 ,
mode : MapMode . HYBRID ,
minAltitude : 1 ,
maxAltitude : 1000 ,
minTilt : 35 ,
maxTilt : 55 ,
bounds : { south : 37 , west : - 123 , north : 38 , east : - 121 }
});
document . body . append ( map );
}
init ();
Preset camera paths
3D Maps in Maps JavaScript provides two preset camera paths. The camera paths can be
customized by changing the duration of the animation (thereby increasing or
decreasing speed), or by combining them to create more cinematic experiences.
Additionally, you can control the height of the camera by specifying the
altitudeMode .
3D Maps in Maps JavaScript supports the following camera paths:
flyCameraTo animation flies from the map center to a specified
destination.
flyCameraAround animation rotates around a point on the map the specified
number of revolutions.
The two available paths may be combined to fly to a point of interest, rotate
around it, and then stop when specified.
Fly to
The following code sample demonstrates animating the camera to fly to a
location:
const map = document . querySelector ( 'gmp-map-3d' );
async function init () {
await google . maps . importLibrary ( 'maps3d' );
map . flyCameraTo ({
endCamera : {
center : { lat : 37.6191 , lng : - 122.3816 , altitude : 500 },
altitudeMode : 'RELATIVE_TO_GROUND' ,
tilt : 67.5 ,
range : 1000
},
durationMillis : 5000
});
}
Fly around
The following code sample demonstrates animating the camera to fly around a
location:
const map = document . querySelector ( 'gmp-map-3d' );
async function init () {
await google . maps . importLibrary ( 'maps3d' );
map . flyCameraAround ({
camera ,
durationMillis : 60000 ,
repeatCount : 1
});
}
Combine animations
The following code sample demonstrates combining animations to fly the camera to
a location, and then rotate around the location when the first animation ends:
const map = document . querySelector ( 'gmp-map-3d' );
async function init () {
await google . maps . importLibrary ( 'maps3d' );
map . flyCameraTo ({
endCamera : flyToCamera ,
durationMillis : 5000 ,
});
map . addEventListener ( 'gmp-animationend' , () = > {
map . flyCameraAround ({
camera : flyToCamera ,
durationMillis : 60000 ,
repeatCount : 1
});
}, { once : true });
}
Control gesture handling
When a user scrolls a page containing a map, the scrolling action can
inadvertently cause the map to zoom. You can control this behavior by setting
the gestureHandling map option.
gestureHandling: cooperative
"Cooperative" gesture handling allows the user to scroll the page without
impacting the map's zoom or pan. To zoom, users can use the controls, two-finger
gestures (for touchscreen devices), or by holding CMD/CTRL while scrolling.
The following code demonstrates setting gesture handling to "cooperative":
new Map3DElement ({
center : { lat : 37.729901343702736 , lng : - 119.63788444355905 , altitude : 1500 },
tilt : 70 ,
heading : 50 ,
range : 4000 ,
gestureHandling : 'COOPERATIVE' ,
});
gestureHandling: greedy
"Greedy" gesture handling reacts to all scroll events and touch gestures.
gestureHandling: auto
"Auto" gesture handling changes the behavior of the map depending on whether or
not the map is contained in an <iframe> , and whether the page is scrollable.
If the map is within an <iframe> , gesture handling will be "cooperative".
If the map isn't within an <iframe> , gesture handling will be "greedy".
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

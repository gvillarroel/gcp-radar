---
title: "Adjust the camera \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/camera
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/camera
  title: "Adjust the camera \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
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
Navigation SDK for Android
Send feedback
Adjust the camera
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK offers three camera modes: followMyLocation , Pinned to location , and showRouteOverview to control the user's viewpoint of the map during navigation.
followMyLocation mode centers the map on the user's location and automatically adjusts during navigation, while Pinned to location mode fixes the camera at a specific location with customizable properties.
showRouteOverview mode displays the entire route or remaining route, adjusting the view to fit the route on the screen.
You can customize the camera's perspective, zoom level, bearing, and tilt to enhance the user experience.
High detail setting, when enabled, displays 2-D building outlines when the zoom level is 19 or higher, which can be further customized using FollowMyLocationOptions .
The camera allows you to change the user’s viewpoint of the map. You can
use camera modes to control the behavior of the map view during navigation.
To set the camera mode, call one of the following methods associated
with the camera:
Follow my location ( GoogleMap.followMyLocation ) — The default camera
mode for navigation. This mode sets the camera to the device or vehicle.
During navigation, the camera automatically faces the direction of travel.
Pinned to location ( GoogleMap.animateCamera and GoogleMap.moveCamera )
— Fixes the camera at a specific location. When using this mode, you can
set the camera location along with other camera properties like bearing, tilt,
zoom, etc. When this view is selected and the Navigator has been initialized,
the Re-center button is visible.
Show route overview ( NavigationView.showRouteOverview or
SupportNavigationFragment.showRouteOverview ) — Displays an overview
of the remaining route (up to the next 45 minutes of driving time), panning and zooming as needed to fit the route
into the map view. When this view is selected, the Re-center button
is visible.
Clicking the Re-center button sets the camera to followMyLocation mode.
Follow my location mode
The most common camera setting is to have the camera set to the
device or vehicle, showing its current position within the journey. In
this camera mode, you can view the route with the car always headed up
the screen with an angled perspective ( CameraPerspective.TILTED ), or
you can see the car traveling with north ( CameraPerspective.TOP_DOWN_NORTH_UP )
or with heading ( CameraPerspective.TOP_DOWN_HEADING_UP) always at the top of
the screen.
The following code fragment uses the TILTED perspective:
// Set the camera to follow the device (vehicle):
mNavFragment . getMapAsync ( googleMap - > googleMap . followMyLocation ( CameraPerspective . TILTED ))
Pinned to location mode
The Pinned mode provides you with the most control of the
camera. In this mode, you place the camera in a specific location, assign
a bearing to orient the camera view, change the tilt to set the viewing angle, and
set the camera's zoom level.
The following code snippet demonstrates some of the common ways to move the
camera.
private static final LatLng SYDNEY = new LatLng ( - 33.88 , 151.21 );
private static final LatLng MOUNTAIN_VIEW = new LatLng ( 37.4 , - 122.1 );
private GoogleMap map ;
... // Obtain the map from a SupportNavigationFragment or NavigationView.
// Move the camera instantly to Sydney with a zoom of 15.
map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( SYDNEY , 15 ));
// Zoom in, animating the camera.
map . animateCamera ( CameraUpdateFactory . zoomIn ());
// Zoom out to zoom level 10, animating with a duration of 2 seconds.
map . animateCamera ( CameraUpdateFactory . zoomTo ( 10 ), 2000 , null );
// Construct a CameraPosition focusing on Mountain View and animate the camera to that position.
CameraPosition cameraPosition = new CameraPosition . Builder ()
. target ( MOUNTAIN_VIEW ) // Sets the center of the map to Mountain View
. zoom ( 17 ) // Sets the zoom
. bearing ( 90 ) // Sets the orientation of the camera to east
. tilt ( 30 ) // Sets the tilt of the camera to 30 degrees
. build (); // Creates a CameraPosition from the builder
map . animateCamera ( CameraUpdateFactory . newCameraPosition ( cameraPosition ));
Show route overview mode
The showRouteOverview camera setting displays the entire journey.
For multiple-destination journeys, this mode displays the untraveled
portion of the route.
// Place the camera to see the remaining route:
mNavFragment . showRouteOverview ();
Next step
See Customize the Navigation UI
to learn how to customize the way in which users interact with your map
by determining which of the built-in UI components appear on the map.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

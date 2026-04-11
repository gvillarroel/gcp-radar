---
title: "CameraUpdateFactory \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/CameraUpdateFactory
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/CameraUpdateFactory
  title: "CameraUpdateFactory \_|\_ Navigation SDK for Android \_|\_ Google for Developers"
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
Reference
Send feedback
CameraUpdateFactory
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
CameraUpdateFactory creates CameraUpdate objects used to control the Google Map camera's position and zoom level.
These updates are applied to the map using GoogleMap.animateCamera() , GoogleMap.animateCamera(CameraUpdate, GoogleMap.CancelableCallback) or GoogleMap.moveCamera() .
CameraUpdateFactory provides methods for various camera movements like zooming, scrolling, and changing the camera's target location.
Before using this class, ensure initialization by either waiting for a GoogleMap instance or calling MapsInitializer.initialize(Context) .
public final class
CameraUpdateFactory
extends Object
A class containing methods for creating CameraUpdate objects that change a map's camera.
To modify the map's camera, call GoogleMap.animateCamera(CameraUpdate) , GoogleMap.animateCamera(CameraUpdate, GoogleMap.CancelableCallback) or GoogleMap.moveCamera(CameraUpdate) , using a CameraUpdate object created with this class.
For example, to zoom in on a map, you can use the following code:
GoogleMap map = ...;
map.animateCamera(CameraUpdateFactory.zoomIn());
Prior to using any methods from this class, you must do one of the following to ensure that
this class is initialized:
Wait for a GoogleMap to become available from a MapFragment or MapView that you have added to your application. You can obtain the GoogleMap
instance by calling getMapAsync() and waiting for the onMapReady(GoogleMap
map) callback.
Call MapsInitializer.initialize(Context) . As long as a GooglePlayServicesNotAvailableException isn't thrown, this class will be correctly
initialized.
Developer Guide
For more information, read the Camera and View
developer guide.
Public Method Summary
static
CameraUpdate
newCameraPosition ( CameraPosition cameraPosition)
Returns a CameraUpdate that moves the camera to a specified CameraPosition .
static
CameraUpdate
newLatLng ( LatLng latLng)
Returns a CameraUpdate that moves the center of the screen to a latitude and longitude
specified by a LatLng object.
static
CameraUpdate
newLatLngBounds ( LatLngBounds bounds, int padding)
Returns a CameraUpdate that transforms the camera such that the specified
latitude/longitude bounds are centered on screen at the greatest possible zoom level.
static
CameraUpdate
newLatLngBounds ( LatLngBounds bounds, int width, int height, int padding)
Returns a CameraUpdate that transforms the camera such that the specified
latitude/longitude bounds are centered on screen within a bounding box of specified dimensions
at the greatest possible zoom level.
static
CameraUpdate
newLatLngZoom ( LatLng latLng, float zoom)
Returns a CameraUpdate that moves the center of the screen to a latitude and longitude
specified by a LatLng object, and moves to the given zoom level.
static
CameraUpdate
scrollBy (float xPixel, float yPixel)
Returns a CameraUpdate that scrolls the camera over the map, shifting the center of
view by the specified number of pixels in the x and y directions.
static
CameraUpdate
zoomBy (float amount, Point focus)
Returns a CameraUpdate that shifts the zoom level of the current camera viewpoint.
static
CameraUpdate
zoomBy (float amount)
Returns a CameraUpdate that shifts the zoom level of the current camera viewpoint.
static
CameraUpdate
zoomIn ()
Returns a CameraUpdate that zooms in on the map by moving the viewpoint's height closer
to the Earth's surface.
static
CameraUpdate
zoomOut ()
Returns a CameraUpdate that zooms out on the map by moving the viewpoint's height
farther away from the Earth's surface.
static
CameraUpdate
zoomTo (float zoom)
Returns a CameraUpdate that moves the camera viewpoint to a particular zoom level.
Inherited Method Summary
From class
java.lang.Object
boolean
equals (Object arg0)
final
Class<?>
getClass ()
int
hashCode ()
final
void
notify ()
final
void
notifyAll ()
String
toString ()
final
void
wait (long arg0, int arg1)
final
void
wait (long arg0)
final
void
wait ()
Public Methods
public
static
CameraUpdate
newCameraPosition
( CameraPosition cameraPosition)
Returns a CameraUpdate that moves the camera to a specified CameraPosition . In
effect, this creates a transformation from the CameraPosition object's latitude,
longitude, zoom level, bearing and tilt.
Parameters
cameraPosition
Returns
a CameraUpdate containing the transformation.
public
static
CameraUpdate
newLatLng
( LatLng latLng)
Returns a CameraUpdate that moves the center of the screen to a latitude and longitude
specified by a LatLng object. This centers the camera on the LatLng object.
Parameters
latLng
a LatLng object containing the desired latitude and longitude.
Returns
a CameraUpdate containing the transformation.
public
static
CameraUpdate
newLatLngBounds
( LatLngBounds bounds, int padding)
Returns a CameraUpdate that transforms the camera such that the specified
latitude/longitude bounds are centered on screen at the greatest possible zoom level. You can
specify padding, in order to inset the bounding box from the map view's edges. The returned
CameraUpdate has a bearing of 0 and a tilt of 0.
Do not change the camera with this camera update until the map has undergone layout (in
order for this method to correctly determine the appropriate bounding box and zoom level, the
map must have a size). Otherwise an IllegalStateException will be thrown. It is NOT
sufficient for the map to be available; the view containing the map must have also undergone
layout such that its dimensions have been determined. If you cannot be sure that this has
occurred, use newLatLngBounds(LatLngBounds, int, int, int) instead and provide the
dimensions of the map manually.
Parameters
bounds
region to fit on screen
padding
space (in px) to leave between the bounding box edges and the view edges. This
value is applied to all four sides of the bounding box.
Returns
a CameraUpdate containing the transformation.
public
static
CameraUpdate
newLatLngBounds
( LatLngBounds bounds, int width, int height, int padding)
Returns a CameraUpdate that transforms the camera such that the specified
latitude/longitude bounds are centered on screen within a bounding box of specified dimensions
at the greatest possible zoom level. You can specify additional padding, to further restrict
the size of the bounding box. The returned CameraUpdate has a bearing of 0 and a tilt
of 0.
Unlike newLatLngBounds(LatLngBounds, int) , you can use the CameraUpdate
returned by this method to change the camera prior to the map's the layout phase, because the
arguments specify the desired size of the bounding box.
Parameters
bounds
the region to fit in the bounding box
width
bounding box width in pixels (px)
height
bounding box height in pixels (px)
padding
additional size restriction (in px) of the bounding box
Returns
a CameraUpdate containing the transformation.
public
static
CameraUpdate
newLatLngZoom
( LatLng latLng, float zoom)
Returns a CameraUpdate that moves the center of the screen to a latitude and longitude
specified by a LatLng object, and moves to the given zoom level.
Parameters
latLng
a LatLng object containing the desired latitude and longitude.
zoom
the desired zoom level, in the range of 2.0 to 21.0. Values below this range are
set to 2.0, and values above it are set to 21.0. Increase the value to zoom in. Not all
areas have tiles at the largest zoom levels.
Returns
a CameraUpdate containing the transformation.
public
static
CameraUpdate
scrollBy
(float xPixel, float yPixel)
Returns a CameraUpdate that scrolls the camera over the map, shifting the center of
view by the specified number of pixels in the x and y directions.
Examples:
If xPixel = 5 and yPixel = 0, the system scrolls right by moving the camera so that the
map appears to have shifted 5 pixels to the left.
If xPixel = 0 and yPixel = 5, the system scrolls down by moving the camera so that the
map appears to have shifted 5 pixels upwards.
The scrolling is relative to the camera's current orientation. For example, if the camera is
bearing 90 degrees, then east is "up" and scrolling right will move the camera south.
Parameters
xPixel
the number of pixels to scroll horizontally. A positive value moves the camera to
the right, with respect to its current orientation. A negative value moves the camera to
the left, with respect to its current orientation.
yPixel
the number of pixels to scroll vertically. A positive value moves the camera
downwards, with respect to its current orientation. A negative value moves the camera
upwards, with respect to its current orientation.
Returns
a CameraUpdate containing the transformation.
public
static
CameraUpdate
zoomBy
(float amount, Point focus)
Returns a CameraUpdate that shifts the zoom level of the current camera viewpoint.
A point specified by focus will remain fixed (i.e., it corresponds to the same lat/long both
before and after the zoom process).
This method is different to zoomTo(float) in that zoom is relative to the current
camera.
For example, if the LatLng (11.11, 22.22) is currently at the screen location (23,
45). After calling this method with a zoom amount and this LatLng , the screen location
of this LatLng will still be (23, 45).
Parameters
amount
amount to change the zoom level. Positive values indicate zooming closer to the
surface of the Earth while negative values indicate zooming away from the surface of the
Earth.
focus
pixel location on the screen that is to remain fixed after the zooming process.
The lat/long that was at that pixel location before the camera move will remain the same
after the camera has moved.
Returns
a CameraUpdate containing the transformation.
public
static
CameraUpdate
zoomBy
(float amount)
Returns a CameraUpdate that shifts the zoom level of the current camera viewpoint.
This method is different to zoomTo(float) in that zoom is relative to the current
camera.
Parameters
amount
amount to change the zoom level. Positive values indicate zooming closer to the
surface of the Earth while negative values indicate zooming away from the surface of the
Earth.
Returns
a CameraUpdate containing the transformation.
public
static
CameraUpdate
zoomIn
()
Returns a CameraUpdate that zooms in on the map by moving the viewpoint's height closer
to the Earth's surface. The zoom increment is 1.0.
Returns
a CameraUpdate containing the transformation.
public
static
CameraUpdate
zoomOut
()
Returns a CameraUpdate that zooms out on the map by moving the viewpoint's height
farther away from the Earth's surface. The zoom increment is -1.0.
Returns
a CameraUpdate containing the transformation.
public
static
CameraUpdate
zoomTo
(float zoom)
Returns a CameraUpdate that moves the camera viewpoint to a particular zoom level.
Parameters
zoom
the desired zoom level, in the range of 2.0 to 21.0. Values below this range are
set to 2.0, and values above it are set to 21.0. Increase the value to zoom in. Not all
areas have tiles at the largest zoom levels.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]

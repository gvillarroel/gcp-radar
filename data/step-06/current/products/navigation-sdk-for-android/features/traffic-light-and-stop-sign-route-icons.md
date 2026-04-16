---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.687Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Traffic light and stop sign route icons"
feature_slug: "traffic-light-and-stop-sign-route-icons"
latest_feature_date: "2024-05-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route"
keywords:
  - "traffic"
  - "light"
  - "and"
  - "stop"
  - "sign"
  - "route"
  - "icons"
  - "can"
---

# Traffic light and stop sign route icons

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Traffic light and stop sign icons can now appear along the route in additional supported countries.

## Extended Definition

Traffic light and stop sign icons can now appear along the route in additional supported countries.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed](https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route)

## Supporting Pages

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- However, it does not affect the traffic indications on the route plotted by the navigator. private GoogleMap mMap ; // Get the map, and when the async call returns, setTrafficEnabled // (callback will be on the UI thread) mMap = mNavFragment . getMapAsync ( navMap - > navMap . setTrafficEnabled ( false )); Enable traffic lights and stop signs You can enable the display of traffic lights and stop signs in the map during active navigation, which provides additional context for routes and trip maneuvers.
- DisplayOptions displayOptions = new DisplayOptions (). showTrafficLights ( true ). showStopSigns ( true ); Add custom markers Navigation SDK for Android now uses Google Maps APIs for markers.
- By default, traffic lights and stop signs are disabled in the Navigation SDK.
- Developers can style elements like the navigation header, traffic layer, and speed limit display, as well as manage night mode and route display options.

### "Enable turn-by-turn data feed \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed](https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Lane guidance example The following snippet illustrates the data representation of the lanes displayed above. // Lane 1 LaneDirections = [{/ laneShape= / STRAIGHT, / isRecommended= / false}, {/ laneShape= / SLIGHT LEFT, / isRecommended= / true}] // Lane 2 LaneDirections = [{/ laneShape= / STRAIGHT, / isRecommended= / false}] Create icons for maneuvers The Maneuver enum defines each possible maneuver that could occur while navigating, and you can get the maneuver for a given step from the StepInfo.getManeuver() method.
- Expand to see examples icons for different maneuvers Sample Icon TurnByTurn Maneuvers DEPART UNKNOWN STRAIGHT ON RAMP UNSPECIFIED OFF RAMP UNSPECIFIED NAME CHANGE TURN RIGHT ON RAMP RIGHT TURN LEFT ON RAMP LEFT TURN SLIGHT RIGHT ON RAMP SLIGHT RIGHT OFF RAMP SLIGHT RIGHT TURN SLIGHT LEFT ON RAMP SLIGHT LEFT OFF RAMP SLIGHT LEFT TURN SHARP RIGHT ON RAMP SHARP RIGHT OFF RAMP SHARP RIGHT TURN SHARP LEFT ON RAMP SHARP LEFT OFF RAMP SHARP LEFT TURN U TURN COUNTERCLOCKWISE ON RAMP U TURN COUNTERCLOCKWISE OFF RAMP U TURN COUNTERCLOCKWISE TURN U TURN CLOCKWISE ON RAMP U TURN CLOCKWISE OFF RAMP U TURN CLOCKWISE ROUNDABOUT SHARP RIGHT COUNTERCLOCKWISE ROUNDABOUT SHARP RIGHT CLOCKWISE ROUNDABOUT RIGHT COUNTERCLOCKWISE ROUNDABOUT RIGHT CLOCKWISE ROUNDABOUT SLIGHT RIGHT COUNTERCLOCKWISE ROUNDABOUT SLIGHT RIGHT CLOCKWISE ROUNDABOUT STRAIGHT COUNTERCLOCKWISE ROUNDABOUT STRAIGHT CLOCKWISE ROUNDABOUT SLIGHT LEFT COUNTERCLOCKWISE ROUNDABOUT SLIGHT LEFT CLOCKWISE ROUNDABOUT LEFT COUNTERCLOCKWISE ROUNDABOUT LEFT CLOCKWISE ROUNDABOUT SHARP LEFT COUNTERCLOCKWISE ROUNDABOUT SHARP LEFT CLOCKWISE ROUNDABOUT U TURN COUNTERCLOCKWISE ROUNDABOUT U TURN CLOCKWISE ROUNDABOUT COUNTERCLOCKWISE ROUNDABOUT CLOCKWISE ROUNDABOUT EXIT COUNTERCLOCKWISE ROUNDABOUT EXIT CLOCKWISE MERGE RIGHT OFF RAMP RIGHT MERGE LEFT OFF RAMP LEFT FORK RIGHT TURN KEEP RIGHT ON RAMP KEEP RIGHT OFF RAMP KEEP RIGHT FORK LEFT TURN KEEP LEFT ON RAMP KEEP LEFT OFF RAMP KEEP LEFT MERGE UNSPECIFIED DESTINATION DESTINATION RIGHT DESTINATION LEFT FERRY BOAT FERRY TRAIN Use generated icons To facilitate Android Auto use cases, the Navigation SDK supports generation of maneuver and lane guidance icons.
- Icon generation example NavigationUpdatesOptions options = NavigationUpdatesOptions.builder() .setNumNextStepsToPreview(numNextStepsToPreview) .setGeneratedStepImagesType(GeneratedStepImagesType.BITMAP) .setDisplayMetrics(getResources().getDisplayMetrics()) .build(); boolean isRegistered = navigator.registerServiceForNavUpdates( getPackageName(), NavInfoReceivingService.class.getName(), options); After you enable icon generation, the TurnbyTurn StepInfo object populates the maneuverBitmap and lanesBitmap fields with the icons.
- It provides upcoming maneuvers with elements you supply: icons (left, right, U-turn) turn numbers in roundabouts road names estimated distances and time to the next navigation step or final destination You can use the turn-by-turn feed to create experiences where the full Navigation SDK UI is not appropriate, such as for Android Auto or for small screen displays where a full Android stack is not available.

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- The order in which the deprecated onCameraChange method will be called in relation to the methods in the new camera change listeners is undefined. interface GoogleMap.OnCameraFollowLocationCallback Callback interface to get updates related to camera entering or exiting follow mode. interface GoogleMap.OnCameraIdleListener Callback interface for when camera movement has ended. interface GoogleMap.OnCameraMoveCanceledListener Callback interface for when the camera's motion has been stopped or when the camera starts moving for a new reason. interface GoogleMap.OnCameraMoveListener Callback interface for when the camera changes position. interface GoogleMap.OnCameraMoveStartedListener Callback interface for when the camera motion starts. interface GoogleMap.OnCircleClickListener Callback interface for when a circle is clicked. interface GoogleMap.OnGroundOverlayClickListener Callback interface for when a ground overlay is clicked. interface GoogleMap.OnIndoorStateChangeListener A listener for when the indoor state changes. interface GoogleMap.OnInfoWindowClickListener Callback interface for click/tap events on a marker's info window. interface GoogleMap.OnInfoWindowCloseListener Callback interface for close events on a marker's info window. interface GoogleMap.OnInfoWindowLongClickListener Callback interface for when the user long presses on a marker's info window. interface GoogleMap.OnMapCapabilitiesChangedListener Listener interface for when the map capabilities are changed. interface GoogleMap.OnMapClickListener Callback interface for when the user taps on the map. interface GoogleMap.OnMapLoadedCallback Callback interface for when the map has finished rendering. interface GoogleMap.OnMapLongClickListener Callback interface for when the user long presses on the map. interface GoogleMap.OnMarkerClickListener Defines signatures for methods that are called when a marker is clicked or tapped. interface GoogleMap.OnMarkerDragListener Callback interface for drag events on markers. interface GoogleMap.OnMyLocationButtonClickListener Callback interface for when the My Location button is clicked. interface GoogleMap.OnMyLocationChangeListener This interface is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- Replaced by setOnCameraMoveStartedListener(GoogleMap.OnCameraMoveStartedListener) , setOnCameraMoveListener(GoogleMap.OnCameraMoveListener) , setOnCameraMoveCanceledListener(GoogleMap.OnCameraMoveCanceledListener) and setOnCameraIdleListener(GoogleMap.OnCameraIdleListener) . void setOnCameraIdleListener ( GoogleMap.OnCameraIdleListener listener) Sets a callback that is invoked when camera movement has ended. void setOnCameraMoveCanceledListener ( GoogleMap.OnCameraMoveCanceledListener listener) Sets a callback that is invoked when camera motion is stopped or interrupted by a new type of animation. void setOnCameraMoveListener ( GoogleMap.OnCameraMoveListener listener) Sets a callback that is invoked repeatedly while the camera is in motion. void setOnCameraMoveStartedListener ( GoogleMap.OnCameraMoveStartedListener listener) Sets a callback that's invoked when the camera starts moving or the reason for camera motion has changed. void setOnCircleClickListener ( GoogleMap.OnCircleClickListener listener) Sets a callback that's invoked when a circle is clicked. void setOnFollowMyLocationCallback ( GoogleMap.OnCameraFollowLocationCallback callback) Sets a callback to get notified about the events related to the state of the camera when it's following user's location. void setOnGroundOverlayClickListener ( GoogleMap.OnGroundOverlayClickListener listener) Sets a callback that's invoked when a ground overlay is clicked. void setOnIndoorStateChangeListener ( GoogleMap.OnIndoorStateChangeListener listener) Sets or clears the listener for indoor events. void setOnInfoWindowClickListener ( GoogleMap.OnInfoWindowClickListener listener) Sets a callback that's invoked when a marker info window is clicked. void setOnInfoWindowCloseListener ( GoogleMap.OnInfoWindowCloseListener listener) Sets a callback that's invoked when a marker's info window is closed. void setOnInfoWindowLongClickListener ( GoogleMap.OnInfoWindowLongClickListener listener) Sets a callback that's invoked when a marker's info window is long pressed. void setOnMapClickListener ( GoogleMap.OnMapClickListener listener) Sets a callback that's invoked when the map is tapped. void setOnMapLoadedCallback ( GoogleMap.OnMapLoadedCallback callback) Sets a callback that's invoked when this map has finished rendering. void setOnMapLongClickListener ( GoogleMap.OnMapLongClickListener listener) Sets a callback that's invoked when the map is long pressed. void setOnMarkerClickListener ( GoogleMap.OnMarkerClickListener listener) Sets a callback that's invoked when a marker is clicked. void setOnMarkerDragListener ( GoogleMap.OnMarkerDragListener listener) Sets a callback that's invoked when a marker is dragged. void setOnMyLocationButtonClickListener ( GoogleMap.OnMyLocationButtonClickListener listener) Sets a callback that's invoked when the my location button is clicked. void setOnMyLocationChangeListener ( GoogleMap.OnMyLocationChangeListener listener) This method is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- UiSettings getUiSettings () Gets the user interface settings for the map. boolean isBuildingsEnabled () Returns whether 3D buildings layer is enabled. boolean isCameraFollowingMyLocation () Returns whether the camera is following current location or not. boolean isIndoorEnabled () Gets whether indoor maps are currently enabled. boolean isMyLocationEnabled () Gets the status of the my-location layer. boolean isTrafficEnabled () Checks whether the map is drawing traffic data. boolean isTransitEnabled () Checks whether the map is drawing transit data. void moveCamera ( CameraUpdate update) Repositions the camera according to the instructions defined in the update. void removeOnMapCapabilitiesChangedListener ( GoogleMap.OnMapCapabilitiesChangedListener listener) Removes a listener that's invoked when the map capabilities are changed. void resetMinMaxZoomPreference () Removes any previously specified upper and lower zoom bounds. void setBuildingsEnabled (boolean enabled) Turns the 3D buildings layer on or off. void setContentDescription (String description) Sets a contentDescription for the map. boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled. void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows. void setLatLngBoundsForCameraTarget ( LatLngBounds bounds) Specifies a LatLngBounds to constrain the camera target, so that when users scroll and pan the map, the camera target does not move outside these bounds. void setLocationSource ( LocationSource source) Replaces the location source of the my-location layer. void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization. boolean setMapStyle ( MapStyleOptions style) Sets the styling of the base map. void setMapType (int type) Sets the type of map tiles that should be displayed. void setMaxZoomPreference (float maxZoomPreference) Sets a preferred upper bound for the camera zoom. void setMinZoomPreference (float minZoomPreference) Sets a preferred lower bound for the camera zoom. void setMyLocationEnabled (boolean enabled) Enables or disables the my-location layer. void setOnCameraChangeListener ( GoogleMap.OnCameraChangeListener listener) This method is deprecated.
- RoadSnappedLocationProvider further aligns locations to the road network. void setOnMyLocationClickListener ( GoogleMap.OnMyLocationClickListener listener) Sets a callback that's invoked when the My Location dot (which signifies the user's location) is clicked. void setOnPoiClickListener ( GoogleMap.OnPoiClickListener listener) Sets a listener which will be triggered when a POI is clicked or tapped. void setOnPolygonClickListener ( GoogleMap.OnPolygonClickListener listener) Sets a callback that's invoked when a polygon is clicked. void setOnPolylineClickListener ( GoogleMap.OnPolylineClickListener listener) Sets a callback that's invoked when a polyline is clicked. void setPadding (int left, int top, int right, int bottom) Sets padding on the map. void setTrafficEnabled (boolean enabled) Turns the traffic layer on or off. void setTransitEnabled (boolean enabled) Turns the transit layer on or off. void snapshot ( GoogleMap.SnapshotReadyCallback callback, Bitmap bitmap) Takes a snapshot of the map. void snapshot ( GoogleMap.SnapshotReadyCallback callback) Takes a snapshot of the map. void stopAnimation () Stops the camera animation if there is one in progress.

### Plan a route \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Plan a route using a route token You can plan a route by creating a route token and then passing it to the Navigation SDK, as described in the following steps: Step 1: Create a route token using the Routes API, Routes Preferred API, or Route Optimization API Request a route token with one of the following methods: Routes API : computeRoutes .
- Changing traffic, road conditions, or the vehicle deviating from the given route can result in route changes.
- ArrayList < Waypoint > destinations = Lists . newArrayList (); Waypoint waypoint1 = Waypoint . builder () . setLatLng ( 10 , 20 ) . setTitle ( "title" ) . setVehicleStopover ( true ) . build (); destinations . add ( waypoint1 ); Waypoint waypoint2 = Waypoint . builder () . setPlaceId ( "ChIJYV-J-ziuEmsRIMyoFaMedU4" ) . setTitle ( "title" ) . setVehicleStopover ( true ) . build () destinations . add ( waypoint2 ); String routeToken = "route token returned by Routes API" ; CustomRoutesOptions customRoutesOptions = CustomRoutesOptions . builder () . setRouteToken ( routeToken ) . setTravelMode ( TravelMode .
- Using a route token from the Routes API, Routes Preferred API, or Route Optimization API can help you specify two things for your planned route: A polyline for the route Your route objectives For example, here are some examples of routing objectives you may have: Minimize time to delivery : A business delivering food might want to minimize the time it takes to deliver the food.


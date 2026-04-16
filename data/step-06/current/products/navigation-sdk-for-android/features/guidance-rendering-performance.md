---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.685Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Guidance rendering performance"
feature_slug: "guidance-rendering-performance"
latest_feature_date: "2024-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/support"
keywords:
  - "guidance"
  - "rendering"
  - "performance"
  - "during"
  - "has"
  - "been"
  - "improved"
---

# Guidance rendering performance

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Rendering performance during guidance has been improved.

## Extended Definition

Rendering performance during guidance has been improved.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/support](https://developers.google.com/maps/documentation/navigation/android-sdk/support)

## Supporting Pages

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The order in which the deprecated onCameraChange method will be called in relation to the methods in the new camera change listeners is undefined. interface GoogleMap.OnCameraFollowLocationCallback Callback interface to get updates related to camera entering or exiting follow mode. interface GoogleMap.OnCameraIdleListener Callback interface for when camera movement has ended. interface GoogleMap.OnCameraMoveCanceledListener Callback interface for when the camera's motion has been stopped or when the camera starts moving for a new reason. interface GoogleMap.OnCameraMoveListener Callback interface for when the camera changes position. interface GoogleMap.OnCameraMoveStartedListener Callback interface for when the camera motion starts. interface GoogleMap.OnCircleClickListener Callback interface for when a circle is clicked. interface GoogleMap.OnGroundOverlayClickListener Callback interface for when a ground overlay is clicked. interface GoogleMap.OnIndoorStateChangeListener A listener for when the indoor state changes. interface GoogleMap.OnInfoWindowClickListener Callback interface for click/tap events on a marker's info window. interface GoogleMap.OnInfoWindowCloseListener Callback interface for close events on a marker's info window. interface GoogleMap.OnInfoWindowLongClickListener Callback interface for when the user long presses on a marker's info window. interface GoogleMap.OnMapCapabilitiesChangedListener Listener interface for when the map capabilities are changed. interface GoogleMap.OnMapClickListener Callback interface for when the user taps on the map. interface GoogleMap.OnMapLoadedCallback Callback interface for when the map has finished rendering. interface GoogleMap.OnMapLongClickListener Callback interface for when the user long presses on the map. interface GoogleMap.OnMarkerClickListener Defines signatures for methods that are called when a marker is clicked or tapped. interface GoogleMap.OnMarkerDragListener Callback interface for drag events on markers. interface GoogleMap.OnMyLocationButtonClickListener Callback interface for when the My Location button is clicked. interface GoogleMap.OnMyLocationChangeListener This interface is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- Replaced by setOnCameraMoveStartedListener(GoogleMap.OnCameraMoveStartedListener) , setOnCameraMoveListener(GoogleMap.OnCameraMoveListener) , setOnCameraMoveCanceledListener(GoogleMap.OnCameraMoveCanceledListener) and setOnCameraIdleListener(GoogleMap.OnCameraIdleListener) . void setOnCameraIdleListener ( GoogleMap.OnCameraIdleListener listener) Sets a callback that is invoked when camera movement has ended. void setOnCameraMoveCanceledListener ( GoogleMap.OnCameraMoveCanceledListener listener) Sets a callback that is invoked when camera motion is stopped or interrupted by a new type of animation. void setOnCameraMoveListener ( GoogleMap.OnCameraMoveListener listener) Sets a callback that is invoked repeatedly while the camera is in motion. void setOnCameraMoveStartedListener ( GoogleMap.OnCameraMoveStartedListener listener) Sets a callback that's invoked when the camera starts moving or the reason for camera motion has changed. void setOnCircleClickListener ( GoogleMap.OnCircleClickListener listener) Sets a callback that's invoked when a circle is clicked. void setOnFollowMyLocationCallback ( GoogleMap.OnCameraFollowLocationCallback callback) Sets a callback to get notified about the events related to the state of the camera when it's following user's location. void setOnGroundOverlayClickListener ( GoogleMap.OnGroundOverlayClickListener listener) Sets a callback that's invoked when a ground overlay is clicked. void setOnIndoorStateChangeListener ( GoogleMap.OnIndoorStateChangeListener listener) Sets or clears the listener for indoor events. void setOnInfoWindowClickListener ( GoogleMap.OnInfoWindowClickListener listener) Sets a callback that's invoked when a marker info window is clicked. void setOnInfoWindowCloseListener ( GoogleMap.OnInfoWindowCloseListener listener) Sets a callback that's invoked when a marker's info window is closed. void setOnInfoWindowLongClickListener ( GoogleMap.OnInfoWindowLongClickListener listener) Sets a callback that's invoked when a marker's info window is long pressed. void setOnMapClickListener ( GoogleMap.OnMapClickListener listener) Sets a callback that's invoked when the map is tapped. void setOnMapLoadedCallback ( GoogleMap.OnMapLoadedCallback callback) Sets a callback that's invoked when this map has finished rendering. void setOnMapLongClickListener ( GoogleMap.OnMapLongClickListener listener) Sets a callback that's invoked when the map is long pressed. void setOnMarkerClickListener ( GoogleMap.OnMarkerClickListener listener) Sets a callback that's invoked when a marker is clicked. void setOnMarkerDragListener ( GoogleMap.OnMarkerDragListener listener) Sets a callback that's invoked when a marker is dragged. void setOnMyLocationButtonClickListener ( GoogleMap.OnMyLocationButtonClickListener listener) Sets a callback that's invoked when the my location button is clicked. void setOnMyLocationChangeListener ( GoogleMap.OnMyLocationChangeListener listener) This method is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- RoadSnappedLocationProvider further aligns locations to the road network. interface GoogleMap.OnMyLocationClickListener Callback interface for when the My Location dot (which signifies the user's location) is clicked. interface GoogleMap.OnPoiClickListener A listener for POI taps. interface GoogleMap.OnPolygonClickListener Callback interface for when a polygon is clicked. interface GoogleMap.OnPolylineClickListener Callback interface for when a polyline is clicked. interface GoogleMap.SnapshotReadyCallback Callback interface to notify when the snapshot has been taken.
- To unset the callback, use null . public void setOnMapLoadedCallback ( GoogleMap.OnMapLoadedCallback callback) Sets a callback that's invoked when this map has finished rendering.

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- OnMarkerClickListener () { @Override public boolean onMarkerClick ( Marker marker ) { displayMessage ( "Marker tapped: " + marker . getTitle () + ", at location " + marker . getPosition () . latitude + ", " + marker . getPosition () . longitude ); // The event has been handled . return true ; } }); } // Set the camera to follow the device location with 'TILTED' driving view . mMap . followMyLocation ( CameraPerspective .
- When enabled, the speed limit icon displays in a bottom corner during guidance.
- You can set the following attributes: Attribute Type Attributes Background color Primary day mode - the daytime color of the navigation header Secondary day mode - the daytime color of the next-turn indicator Primary night mode - the nighttime color of the navigation header Secondary night mode - the nighttime color of the next-turn indicator Text elements for instructions Text color Font Text size of the first row Text size of the second row Text elements for next steps Font Text color of the distance value Text size of the distance value Text color of the distance units Text size of the distance units Maneuver icons Color of the large maneuver icon Color of the small maneuver icon Lane guidance Color of the recommended lane or lanes The following example shows how to set styling options: private SupportNavigationFragment mNavFragment ; mNavFragment = ( SupportNavigationFragment ) getFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Set the styling options on the fragment. mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); Turn off the traffic layer Use GoogleMap.setTrafficEnabled() to enable or disable the traffic layer on the map.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .

### "Navigate a multi-destination route \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- ListenableResultFuture<Navigator.RouteStatus> pendingRoute = mNavigator.setDestinations(mWaypoints); // Define the action to perform when the SDK has determined the route. pendingRoute.setOnResultListener( new ListenableResultFuture.OnResultListener<Navigator.RouteStatus>() { @Override public void onResult(Navigator.RouteStatus code) { switch (code) { case OK: mJourneyInProgress = true; // Hide the toolbar to maximize the navigation UI. if (getActionBar() != null) { getActionBar().hide(); } // Register some listeners for navigation events. registerNavigationListeners(); // Display the time and distance to each waypoint. displayTimesAndDistances(); // Enable voice audio guidance (through the device speaker). mNavigator.setAudioGuidance( Navigator.AudioGuidance.VOICE ALERTS AND GUIDANCE); // Simulate vehicle progress along the route for demo/debug builds. if (BuildConfig.DEBUG) { mNavigator.getSimulator().simulateLocationsAlongExistingRoute( new SimulationOptions().speedMultiplier(5)); } // Start turn-by-turn guidance along the current route. mNavigator.startGuidance(); break; // Handle error conditions returned by the navigator. case NO ROUTE FOUND: displayMessage("Error starting navigation: No route found.", DISPLAY BOTH); break; case NETWORK ERROR: displayMessage("Error starting navigation: Network error.", DISPLAY BOTH); break; case ROUTE CANCELED: displayMessage("Error starting navigation: Route canceled.", DISPLAY BOTH); break; default: displayMessage("Error starting navigation: " + String.valueOf(code), DISPLAY BOTH); } } }); } Build and run your app Connect an Android device to your computer.
- If not, it requests the permission: if (ContextCompat.checkSelfPermission(this.getApplicationContext(), android.Manifest.permission.ACCESS FINE LOCATION) == PackageManager.PERMISSION GRANTED) { mLocationPermissionGranted = true; } else { ActivityCompat.requestPermissions(this, new String[] { android.Manifest.permission.ACCESS FINE LOCATION }, PERMISSIONS REQUEST ACCESS FINE LOCATION); } if (!mLocationPermissionGranted) { displayMessage("Error loading Navigation SDK: " + "The user has not granted location permission.", DISPLAY BOTH); return; } Override the onRequestPermissionsResult() callback to handle the result of the permission request: @Override public void onRequestPermissionsResult(int requestCode, @NonNull String permissions[], @NonNull int[] grantResults) { mLocationPermissionGranted = false; switch (requestCode) { case PERMISSIONS REQUEST ACCESS FINE LOCATION: { // If request is canceled, the result arrays are empty. if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION GRANTED) { mLocationPermissionGranted = true; } } } } Initialize the Navigation SDK and configure a journey The NavigationApi class provides initialization logic that authorizes your app to use Google navigation.
- DEBUG ) { mNavigator . getSimulator () . simulateLocationsAlongExistingRoute ( new SimulationOptions () . speedMultiplier ( 5 )); } // Start turn - by - turn guidance along the current route . mNavigator . startGuidance (); break ; // Handle error conditions returned by the navigator . case NO ROUTE FOUND : displayMessage ( "Error starting navigation: No route found." , DISPLAY BOTH ); break ; case NETWORK ERROR : displayMessage ( "Error starting navigation: Network error." , DISPLAY BOTH ); break ; case ROUTE CANCELED : displayMessage ( "Error starting navigation: Route canceled." , DISPLAY BOTH ); break ; default : displayMessage ( "Error starting navigation: " + String . valueOf ( code ), DISPLAY BOTH ); } } }); } / Creates a waypoint from a given place ID and title . @param placeId The ID of the place to be converted to a waypoint . @param title A descriptive title for the waypoint . / private void createWaypoint ( String placeId , String title ) { try { mWaypoints . add ( Waypoint . builder () . setPlaceIdString ( placeId ) . setTitle ( title ) . build ()); } catch ( Waypoint .
- RemainingTimeOrDistanceChangedListener () { @Override public void onRemainingTimeOrDistanceChanged () { displayMessage ( "onRemainingTimeOrDistanceChanged: Time or distance estimate" + " has changed." , DISPLAY LOG ); } }; // Listens for changes in time or distance . mNavigator . addRemainingTimeOrDistanceChangedListener ( 60 , 100 , mRemainingTimeOrDistanceChangedListener ); } / Handles the result of the request for location permissions . / @Override public void onRequestPermissionsResult ( int requestCode , @NonNull String [] permissions , @NonNull int [] grantResults ) { mLocationPermissionGranted = false ; switch ( requestCode ) { case PERMISSIONS REQUEST ACCESS FINE LOCATION : { // If request is canceled , the result arrays are empty . if ( grantResults . length > 0 && grantResults [ 0 ] == PackageManager .

### Support Options for Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/support](https://developers.google.com/maps/documentation/navigation/android-sdk/support)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Search existing requests Request a new feature Issue tracker status codes New This issue/feature request has not been triaged.
- Accepted The issue has been acknowledged by the assignee, who will provide updates when active investigations begin.
- Fixed (Verified) The issue has been addressed and the correctness of the fix has been confirmed.
- Contact the Google Maps Platform support team If you find that your questions have not been answered on Stack Overflow or the Issue Tracker , please visit the Google Maps Platform Support page within the Cloud console.


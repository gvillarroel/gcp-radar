---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.673Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Route-aware road label decluttering"
feature_slug: "route-aware-road-label-decluttering"
latest_feature_date: "2025-11-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
keywords:
  - "route"
  - "aware"
  - "road"
  - "label"
  - "decluttering"
  - "uses"
  - "the"
  - "current"
---

# Route-aware road label decluttering

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Uses the current route context to hide low-priority road labels that do not intersect the route during turn-by-turn navigation.

## Extended Definition

Uses the current route context to hide low-priority road labels that do not intersect the route during turn-by-turn navigation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)

## Supporting Pages

### Plan a route \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Set up your Routes API or Routes Preferred API request to meet the requirements for using a route token: Set travel mode to DRIVING or TWO WHEELER Set routing preference to TRAFFIC AWARE or TRAFFIC AWARE OPTIMAL Do NOT use Via waypoints Step 2: Pass the route token to the Navigation SDK Store the route token : In the Navigation SDK, set up a string to store the route token.
- You might see a difference between your planned route and the route provided by guided navigation due to differences in the road conditions, starting location, or other parameters that have changed since you created the planned route.
- While driving the route, if traffic or other road conditions change, or if a vehicle deviates from the planned route, the modified routes continually attempt to match the best route based on the route objectives in the token.
- If the Navigation SDK has to adjust the returned route, it uses the route objectives you specified when requesting the route token.

### "Navigate a multi-destination route \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Current waypoint: " + mNavigator . getCurrentRouteSegment () . getDestinationWaypoint () . getTitle (), DISPLAY LOG ); } }; // Listens for changes in the route . mNavigator . addRouteChangedListener ( mRouteChangedListener ); // Listens for road - snapped location updates . mRoadSnappedLocationProvider = NavigationApi . getRoadSnappedLocationProvider ( getApplication ()); mLocationListener = new RoadSnappedLocationProvider .
- LocationListener mLocationListener ; private Bundle mSavedInstanceState ; private static final String KEY JOURNEY IN PROGRESS = "journey in progress" ; private boolean mJourneyInProgress = false ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; / Sets up the navigator when the activity is created . @param savedInstanceState The activity state bundle . / @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); // Save the navigator state , used to determine whether a journey is in progress . mSavedInstanceState = savedInstanceState ; if ( mSavedInstanceState != null && mSavedInstanceState . containsKey ( KEY JOURNEY IN PROGRESS )) { mJourneyInProgress = ( mSavedInstanceState . getInt ( KEY JOURNEY IN PROGRESS ) != 0 ); } setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Releases navigation listeners when the activity is destroyed . / @Override protected void onDestroy () { super . onDestroy (); if (( mJourneyInProgress ) && ( this . isFinishing ())) { mNavigator . removeArrivalListener ( mArrivalListener ); mNavigator . removeRouteChangedListener ( mRouteChangedListener ); mNavigator . removeRemainingTimeOrDistanceChangedListener ( mRemainingTimeOrDistanceChangedListener ); if ( mRoadSnappedLocationProvider != null ) { mRoadSnappedLocationProvider . removeLocationListener ( mLocationListener ); } displayMessage ( "OnDestroy: Released navigation listeners." , DISPLAY LOG ); } } / Saves the state of the app when the activity is paused . / @Override protected void onSaveInstanceState ( Bundle outState ) { super . onSaveInstanceState ( outState ); if ( mJourneyInProgress ) { outState . putInt ( KEY JOURNEY IN PROGRESS , 1 ); } else { outState . putInt ( KEY JOURNEY IN PROGRESS , 0 ); } } / Starts the Navigation SDK and sets the camera to follow the device 's location.
- See the code Show/Hide the Java code for the navigation activity. package com . example . navsdkmultidestination ; import android.content.pm.PackageManager ; import android.location.Location ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.libraries.navigation.ArrivalEvent ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.RoadSnappedLocationProvider ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.TimeAndDistance ; import com.google.android.libraries.navigation.Waypoint ; import java.util.ArrayList ; import java.util.List ; / An activity that displays a map and a navigation UI , guiding the user from their current location to multiple destinations , also known as waypoints . / public class NavigationActivityMultiDestination extends AppCompatActivity { private static final String TAG = NavigationActivityMultiDestination . class . getSimpleName (); private static final String DISPLAY BOTH = "both" ; private static final String DISPLAY TOAST = "toast" ; private static final String DISPLAY LOG = "log" ; private Navigator mNavigator ; private RoadSnappedLocationProvider mRoadSnappedLocationProvider ; private SupportNavigationFragment mNavFragment ; private final List<Waypoint> mWaypoints = new ArrayList <> (); private Navigator .
- ListenableResultFuture<Navigator.RouteStatus> pendingRoute = mNavigator.setDestinations(mWaypoints); // Define the action to perform when the SDK has determined the route. pendingRoute.setOnResultListener( new ListenableResultFuture.OnResultListener<Navigator.RouteStatus>() { @Override public void onResult(Navigator.RouteStatus code) { switch (code) { case OK: mJourneyInProgress = true; // Hide the toolbar to maximize the navigation UI. if (getActionBar() != null) { getActionBar().hide(); } // Register some listeners for navigation events. registerNavigationListeners(); // Display the time and distance to each waypoint. displayTimesAndDistances(); // Enable voice audio guidance (through the device speaker). mNavigator.setAudioGuidance( Navigator.AudioGuidance.VOICE ALERTS AND GUIDANCE); // Simulate vehicle progress along the route for demo/debug builds. if (BuildConfig.DEBUG) { mNavigator.getSimulator().simulateLocationsAlongExistingRoute( new SimulationOptions().speedMultiplier(5)); } // Start turn-by-turn guidance along the current route. mNavigator.startGuidance(); break; // Handle error conditions returned by the navigator. case NO ROUTE FOUND: displayMessage("Error starting navigation: No route found.", DISPLAY BOTH); break; case NETWORK ERROR: displayMessage("Error starting navigation: Network error.", DISPLAY BOTH); break; case ROUTE CANCELED: displayMessage("Error starting navigation: Route canceled.", DISPLAY BOTH); break; default: displayMessage("Error starting navigation: " + String.valueOf(code), DISPLAY BOTH); } } }); } Build and run your app Connect an Android device to your computer.

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- DEBUG ) { mNavigator . getSimulator () . simulateLocationsAlongExistingRoute ( new SimulationOptions () . speedMultiplier ( 5 )); } // Start turn - by - turn guidance along the current route . mNavigator . startGuidance (); break ; // Handle error conditions returned by the navigator . case NO ROUTE FOUND : displayMessage ( "Error starting navigation: No route found." ); break ; case NETWORK ERROR : displayMessage ( "Error starting navigation: Network error." ); break ; case ROUTE CANCELED : displayMessage ( "Error starting navigation: Route canceled." ); break ; default : displayMessage ( "Error starting navigation: " + String . valueOf ( code )); } } }); } / Handles the result of the request for location permissions . / @Override public void onRequestPermissionsResult ( int requestCode , @NonNull String [] permissions , @NonNull int [] grantResults ) { mLocationPermissionGranted = false ; switch ( requestCode ) { case PERMISSIONS REQUEST ACCESS FINE LOCATION : { // If request is canceled , the result arrays are empty . if ( grantResults . length > 0 && grantResults [ 0 ] == PackageManager .
- However, it does not affect the traffic indications on the route plotted by the navigator. private GoogleMap mMap ; // Get the map, and when the async call returns, setTrafficEnabled // (callback will be on the UI thread) mMap = mNavFragment . getMapAsync ( navMap - > navMap . setTrafficEnabled ( false )); Enable traffic lights and stop signs You can enable the display of traffic lights and stop signs in the map during active navigation, which provides additional context for routes and trip maneuvers.
- RouteStatus code ) { switch ( code ) { case OK : // Hide the toolbar to maximize the navigation UI . if ( getActionBar () != null ) { getActionBar () . hide (); } // Customize the navigation UI . customizeNavigationUI (); // Enable voice audio guidance ( through the device speaker ) . mNavigator . setAudioGuidance ( Navigator .

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- If you set the minimum zoom to a higher zoom level than the current maximum, then the SDK uses the new minimum value for both minimum and maximum.
- If you set the minimum zoom to a higher zoom level than the current maximum, then the SDK uses the new minimum value for both minimum and maximum.
- Replaced by setOnCameraMoveStartedListener(GoogleMap.OnCameraMoveStartedListener) , setOnCameraMoveListener(GoogleMap.OnCameraMoveListener) , setOnCameraMoveCanceledListener(GoogleMap.OnCameraMoveCanceledListener) and setOnCameraIdleListener(GoogleMap.OnCameraIdleListener) . void setOnCameraIdleListener ( GoogleMap.OnCameraIdleListener listener) Sets a callback that is invoked when camera movement has ended. void setOnCameraMoveCanceledListener ( GoogleMap.OnCameraMoveCanceledListener listener) Sets a callback that is invoked when camera motion is stopped or interrupted by a new type of animation. void setOnCameraMoveListener ( GoogleMap.OnCameraMoveListener listener) Sets a callback that is invoked repeatedly while the camera is in motion. void setOnCameraMoveStartedListener ( GoogleMap.OnCameraMoveStartedListener listener) Sets a callback that's invoked when the camera starts moving or the reason for camera motion has changed. void setOnCircleClickListener ( GoogleMap.OnCircleClickListener listener) Sets a callback that's invoked when a circle is clicked. void setOnFollowMyLocationCallback ( GoogleMap.OnCameraFollowLocationCallback callback) Sets a callback to get notified about the events related to the state of the camera when it's following user's location. void setOnGroundOverlayClickListener ( GoogleMap.OnGroundOverlayClickListener listener) Sets a callback that's invoked when a ground overlay is clicked. void setOnIndoorStateChangeListener ( GoogleMap.OnIndoorStateChangeListener listener) Sets or clears the listener for indoor events. void setOnInfoWindowClickListener ( GoogleMap.OnInfoWindowClickListener listener) Sets a callback that's invoked when a marker info window is clicked. void setOnInfoWindowCloseListener ( GoogleMap.OnInfoWindowCloseListener listener) Sets a callback that's invoked when a marker's info window is closed. void setOnInfoWindowLongClickListener ( GoogleMap.OnInfoWindowLongClickListener listener) Sets a callback that's invoked when a marker's info window is long pressed. void setOnMapClickListener ( GoogleMap.OnMapClickListener listener) Sets a callback that's invoked when the map is tapped. void setOnMapLoadedCallback ( GoogleMap.OnMapLoadedCallback callback) Sets a callback that's invoked when this map has finished rendering. void setOnMapLongClickListener ( GoogleMap.OnMapLongClickListener listener) Sets a callback that's invoked when the map is long pressed. void setOnMarkerClickListener ( GoogleMap.OnMarkerClickListener listener) Sets a callback that's invoked when a marker is clicked. void setOnMarkerDragListener ( GoogleMap.OnMarkerDragListener listener) Sets a callback that's invoked when a marker is dragged. void setOnMyLocationButtonClickListener ( GoogleMap.OnMyLocationButtonClickListener listener) Sets a callback that's invoked when the my location button is clicked. void setOnMyLocationChangeListener ( GoogleMap.OnMyLocationChangeListener listener) This method is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- UiSettings getUiSettings () Gets the user interface settings for the map. boolean isBuildingsEnabled () Returns whether 3D buildings layer is enabled. boolean isCameraFollowingMyLocation () Returns whether the camera is following current location or not. boolean isIndoorEnabled () Gets whether indoor maps are currently enabled. boolean isMyLocationEnabled () Gets the status of the my-location layer. boolean isTrafficEnabled () Checks whether the map is drawing traffic data. boolean isTransitEnabled () Checks whether the map is drawing transit data. void moveCamera ( CameraUpdate update) Repositions the camera according to the instructions defined in the update. void removeOnMapCapabilitiesChangedListener ( GoogleMap.OnMapCapabilitiesChangedListener listener) Removes a listener that's invoked when the map capabilities are changed. void resetMinMaxZoomPreference () Removes any previously specified upper and lower zoom bounds. void setBuildingsEnabled (boolean enabled) Turns the 3D buildings layer on or off. void setContentDescription (String description) Sets a contentDescription for the map. boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled. void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows. void setLatLngBoundsForCameraTarget ( LatLngBounds bounds) Specifies a LatLngBounds to constrain the camera target, so that when users scroll and pan the map, the camera target does not move outside these bounds. void setLocationSource ( LocationSource source) Replaces the location source of the my-location layer. void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization. boolean setMapStyle ( MapStyleOptions style) Sets the styling of the base map. void setMapType (int type) Sets the type of map tiles that should be displayed. void setMaxZoomPreference (float maxZoomPreference) Sets a preferred upper bound for the camera zoom. void setMinZoomPreference (float minZoomPreference) Sets a preferred lower bound for the camera zoom. void setMyLocationEnabled (boolean enabled) Enables or disables the my-location layer. void setOnCameraChangeListener ( GoogleMap.OnCameraChangeListener listener) This method is deprecated.


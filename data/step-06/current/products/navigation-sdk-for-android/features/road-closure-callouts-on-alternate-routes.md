---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.677Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Road closure callouts on alternate routes"
feature_slug: "road-closure-callouts-on-alternate-routes"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination"
keywords:
  - "road"
  - "closure"
  - "callouts"
  - "on"
  - "alternate"
  - "routes"
  - "adds"
  - "to"
---

# Road closure callouts on alternate routes

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Adds road closure callouts to alternate routes as well as the current route.

## Extended Definition

Adds road closure callouts to alternate routes as well as the current route.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)

## Supporting Pages

### Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Road closure callouts appear on both the current route and alternate routes.
- You can control the display and tappability of disruption callouts during active navigation using setTrafficPromptsEnabled , which also controls the display of callouts along routes and the display of automated alerts when a user approaches a disruption . // Using the SupportNavigationFragment mNavFragment . setTrafficPromptsEnabled ( true ); // Using the NavigationView navigationView . setTrafficPromptsEnabled ( true ); Note: setTrafficPromptsEnabled only controls the display of callouts for user-reported disruptions.
- You can control the display of disruption callouts along routes using setTrafficPromptsEnabled , which also controls the display of automated alerts when a user approaches a disruption . // Using the SupportNavigationFragment mNavFragment . setTrafficPromptsEnabled ( true ); // Using the NavigationView navigationView . setTrafficPromptsEnabled ( true ); Notes: setTrafficPromptsEnabled only controls the display of callouts for user-reported disruptions.
- Some disruption types, such as road closures from traffic authorities, may still be visible even when setTrafficPromptsEnabled is set to false .

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- When the user interface becomes cluttered with too much information, you can reduce clutter by displaying fewer alternate routes than the default (two), or by displaying no alternate routes at all.
- The following code example demonstrates how to hide alternate routes altogether.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- However, it does not affect the traffic indications on the route plotted by the navigator. private GoogleMap mMap ; // Get the map, and when the async call returns, setTrafficEnabled // (callback will be on the UI thread) mMap = mNavFragment . getMapAsync ( navMap - > navMap . setTrafficEnabled ( false )); Enable traffic lights and stop signs You can enable the display of traffic lights and stop signs in the map during active navigation, which provides additional context for routes and trip maneuvers.

### "Route to navigation points \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summary of valid waypoint configurations Method setLatLng() setPlaceIdString() setNavigationPointToken() Routing behavior Destination highlighting Latitude/longitude coordinates only set absent absent Routes to road segment nearest to the defined coordinates Shown if destination can be inferred with high confidence Place ID only absent set absent Routes to the default navigation point for the Place ID From Place ID Navigation point token only absent absent set Routes to the precise navigation point represented by the token From destination defined in original destinations method of the Geocoding API request Latitude/longitude coordinates and Place ID combined set set absent Routes to road segment nearest to the defined coordinates From Place ID, though not shown if Place ID is too far from the latitude/longitude coordinates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The result might snap to the nearest road segment, which may not be the most convenient or correct navigation point.
- This allows the Navigation SDK to provide a richer arrival experience by highlighting the destination building or showing nearby points of interest related to the Place ID. // Assuming 'placeId' is the Place ID String // Assuming 'lat' and 'lng' are the double values for latitude and longitude // Assuming 'destinationName' is a String title for the waypoint Waypoint waypointWithPlaceIdAndLatLng = Waypoint . builder () . setTitle ( destinationName ) . setPlaceIdString ( placeId ) . setLatLng ( lat , lng ) . build (); // Use this waypoint in navigator.setDestinations() Considerations When you provide both placeId and latlng : The route primarily targets the specified latlng .
- These methods are mutually exclusive with setNavigationPointToken() . // Assuming 'navPointToken' is a String obtained from the destinations method of the Geocoding API // Assuming 'destinationName' is a String title for the waypoint Waypoint waypointWithToken = Waypoint . builder () . setTitle ( destinationName ) . setNavigationPointToken ( navPointToken ) . build (); // Use this waypoint in navigator.setDestinations() Combine Place ID and latitude and longitude Starting with v7.4, you can provide both a Place ID and latitude and longitude coordinates when creating a Waypoint .

### "Navigate a multi-destination route \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Current waypoint: " + mNavigator . getCurrentRouteSegment () . getDestinationWaypoint () . getTitle (), DISPLAY LOG ); } }; // Listens for changes in the route . mNavigator . addRouteChangedListener ( mRouteChangedListener ); // Listens for road - snapped location updates . mRoadSnappedLocationProvider = NavigationApi . getRoadSnappedLocationProvider ( getApplication ()); mLocationListener = new RoadSnappedLocationProvider .
- LocationListener mLocationListener ; private Bundle mSavedInstanceState ; private static final String KEY JOURNEY IN PROGRESS = "journey in progress" ; private boolean mJourneyInProgress = false ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; / Sets up the navigator when the activity is created . @param savedInstanceState The activity state bundle . / @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); // Save the navigator state , used to determine whether a journey is in progress . mSavedInstanceState = savedInstanceState ; if ( mSavedInstanceState != null && mSavedInstanceState . containsKey ( KEY JOURNEY IN PROGRESS )) { mJourneyInProgress = ( mSavedInstanceState . getInt ( KEY JOURNEY IN PROGRESS ) != 0 ); } setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Releases navigation listeners when the activity is destroyed . / @Override protected void onDestroy () { super . onDestroy (); if (( mJourneyInProgress ) && ( this . isFinishing ())) { mNavigator . removeArrivalListener ( mArrivalListener ); mNavigator . removeRouteChangedListener ( mRouteChangedListener ); mNavigator . removeRemainingTimeOrDistanceChangedListener ( mRemainingTimeOrDistanceChangedListener ); if ( mRoadSnappedLocationProvider != null ) { mRoadSnappedLocationProvider . removeLocationListener ( mLocationListener ); } displayMessage ( "OnDestroy: Released navigation listeners." , DISPLAY LOG ); } } / Saves the state of the app when the activity is paused . / @Override protected void onSaveInstanceState ( Bundle outState ) { super . onSaveInstanceState ( outState ); if ( mJourneyInProgress ) { outState . putInt ( KEY JOURNEY IN PROGRESS , 1 ); } else { outState . putInt ( KEY JOURNEY IN PROGRESS , 0 ); } } / Starts the Navigation SDK and sets the camera to follow the device 's location.
- See the code Show/Hide the Java code for the navigation activity. package com . example . navsdkmultidestination ; import android.content.pm.PackageManager ; import android.location.Location ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.libraries.navigation.ArrivalEvent ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.RoadSnappedLocationProvider ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.TimeAndDistance ; import com.google.android.libraries.navigation.Waypoint ; import java.util.ArrayList ; import java.util.List ; / An activity that displays a map and a navigation UI , guiding the user from their current location to multiple destinations , also known as waypoints . / public class NavigationActivityMultiDestination extends AppCompatActivity { private static final String TAG = NavigationActivityMultiDestination . class . getSimpleName (); private static final String DISPLAY BOTH = "both" ; private static final String DISPLAY TOAST = "toast" ; private static final String DISPLAY LOG = "log" ; private Navigator mNavigator ; private RoadSnappedLocationProvider mRoadSnappedLocationProvider ; private SupportNavigationFragment mNavFragment ; private final List<Waypoint> mWaypoints = new ArrayList <> (); private Navigator .
- ListenableResultFuture<Navigator.RouteStatus> pendingRoute = mNavigator.setDestinations(mWaypoints); // Define the action to perform when the SDK has determined the route. pendingRoute.setOnResultListener( new ListenableResultFuture.OnResultListener<Navigator.RouteStatus>() { @Override public void onResult(Navigator.RouteStatus code) { switch (code) { case OK: mJourneyInProgress = true; // Hide the toolbar to maximize the navigation UI. if (getActionBar() != null) { getActionBar().hide(); } // Register some listeners for navigation events. registerNavigationListeners(); // Display the time and distance to each waypoint. displayTimesAndDistances(); // Enable voice audio guidance (through the device speaker). mNavigator.setAudioGuidance( Navigator.AudioGuidance.VOICE ALERTS AND GUIDANCE); // Simulate vehicle progress along the route for demo/debug builds. if (BuildConfig.DEBUG) { mNavigator.getSimulator().simulateLocationsAlongExistingRoute( new SimulationOptions().speedMultiplier(5)); } // Start turn-by-turn guidance along the current route. mNavigator.startGuidance(); break; // Handle error conditions returned by the navigator. case NO ROUTE FOUND: displayMessage("Error starting navigation: No route found.", DISPLAY BOTH); break; case NETWORK ERROR: displayMessage("Error starting navigation: Network error.", DISPLAY BOTH); break; case ROUTE CANCELED: displayMessage("Error starting navigation: Route canceled.", DISPLAY BOTH); break; default: displayMessage("Error starting navigation: " + String.valueOf(code), DISPLAY BOTH); } } }); } Build and run your app Connect an Android device to your computer.


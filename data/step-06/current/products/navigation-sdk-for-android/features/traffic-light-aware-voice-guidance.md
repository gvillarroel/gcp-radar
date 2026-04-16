---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.681Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Traffic-light-aware voice guidance"
feature_slug: "traffic-light-aware-voice-guidance"
latest_feature_date: "2025-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/events"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav"
keywords:
  - "traffic"
  - "light"
  - "aware"
  - "voice"
  - "guidance"
  - "navigation"
  - "now"
  - "references"
---

# Traffic-light-aware voice guidance

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Navigation voice guidance now references traffic lights when describing upcoming maneuvers.

## Extended Definition

Navigation voice guidance now references traffic lights when describing upcoming maneuvers.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto](https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/events](https://developers.google.com/maps/documentation/navigation/android-sdk/events)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav)

## Supporting Pages

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- DisplayOptions displayOptions = new DisplayOptions (). showTrafficLights ( true ). showStopSigns ( true ); Add custom markers Navigation SDK for Android now uses Google Maps APIs for markers.
- You can set the following attributes: Attribute Type Attributes Background color Primary day mode - the daytime color of the navigation header Secondary day mode - the daytime color of the next-turn indicator Primary night mode - the nighttime color of the navigation header Secondary night mode - the nighttime color of the next-turn indicator Text elements for instructions Text color Font Text size of the first row Text size of the second row Text elements for next steps Font Text color of the distance value Text size of the distance value Text color of the distance units Text size of the distance units Maneuver icons Color of the large maneuver icon Color of the small maneuver icon Lane guidance Color of the recommended lane or lanes The following example shows how to set styling options: private SupportNavigationFragment mNavFragment ; mNavFragment = ( SupportNavigationFragment ) getFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Set the styling options on the fragment. mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); Turn off the traffic layer Use GoogleMap.setTrafficEnabled() to enable or disable the traffic layer on the map.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- However, it does not affect the traffic indications on the route plotted by the navigator. private GoogleMap mMap ; // Get the map, and when the async call returns, setTrafficEnabled // (callback will be on the UI thread) mMap = mNavFragment . getMapAsync ( navMap - > navMap . setTrafficEnabled ( false )); Enable traffic lights and stop signs You can enable the display of traffic lights and stop signs in the map during active navigation, which provides additional context for routes and trip maneuvers.

### "Enable navigation for Android Auto \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto](https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- TYPE NAME CHANGE ) . buildOrThrow (); / Represents the roundabout turn angle for a slight turn in either right or left directions . / private static final int ROUNDABOUT ANGLE SLIGHT = 10 ; / Represents the roundabout turn angle for a normal turn in either right or left directions . / private static final int ROUNDABOUT ANGLE NORMAL = 45 ; / Represents the roundabout turn angle for a sharp turn in either right or left directions . / private static final int ROUNDABOUT ANGLE SHARP = 135 ; / Represents the roundabout turn angle for a u - turn in either right or left directions . / private static final int ROUNDABOUT ANGLE U TURN = 180 ; / Returns the corresponding { @link androidx . car . app . navigation . model .
- Now that you have a registered service for providing navigation information to your app and your app can connect to Android Auto, you're ready to create the rest of the navigation elements necessary for your app to work properly with Android Auto: Draw the map and navigation UI Enable map interaction Display navigation directions Ensure correct maneuver types Draw the map and navigation UI The NavigationViewForAuto class renders a map and navigation UI on Android Auto screens.
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Send feedback Enable navigation for Android Auto Stay organized with collections Save and categorize content based on your preferences.
- Note: Before continuing, make sure you've followed the steps in Enable turn-by-turn guidance feed guide and have a registered service for providing navigation information.

### "Listen for navigation events \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/events](https://developers.google.com/maps/documentation/navigation/android-sdk/events)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- RouteStatus code ) { switch ( code ) { case OK : mJourneyInProgress = true ; // Hide the toolbar to maximize the navigation UI . if ( getActionBar () != null ) { getActionBar () . hide (); } // Register some listeners for navigation events . registerNavigationListeners (); // Display the time and distance to each waypoint . displayTimesAndDistances (); // Enable voice audio guidance ( through the device speaker ) . mNavigator . setAudioGuidance ( Navigator .
- See the code Show/Hide the Java code for the navigation activity. package com . example . navsdkmultidestination ; import android.content.pm.PackageManager ; import android.location.Location ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.libraries.navigation.ArrivalEvent ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.RoadSnappedLocationProvider ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.TimeAndDistance ; import com.google.android.libraries.navigation.Waypoint ; import java.util.ArrayList ; import java.util.List ; / An activity that displays a map and a navigation UI , guiding the user from their current location to multiple destinations , also known as waypoints . / public class NavigationActivityMultiDestination extends AppCompatActivity { private static final String TAG = NavigationActivityMultiDestination . class . getSimpleName (); private static final String DISPLAY BOTH = "both" ; private static final String DISPLAY TOAST = "toast" ; private static final String DISPLAY LOG = "log" ; private Navigator mNavigator ; private RoadSnappedLocationProvider mRoadSnappedLocationProvider ; private SupportNavigationFragment mNavFragment ; private final List<Waypoint> mWaypoints = new ArrayList <> (); private Navigator .
- DEBUG ) { mNavigator . getSimulator () . simulateLocationsAlongExistingRoute ( new SimulationOptions () . speedMultiplier ( 5 )); } // Start turn - by - turn guidance along the current route . mNavigator . startGuidance (); break ; // Handle error conditions returned by the navigator . case NO ROUTE FOUND : displayMessage ( "Error starting navigation: No route found." , DISPLAY BOTH ); break ; case NETWORK ERROR : displayMessage ( "Error starting navigation: Network error." , DISPLAY BOTH ); break ; case ROUTE CANCELED : displayMessage ( "Error starting navigation: Route canceled." , DISPLAY BOTH ); break ; default : displayMessage ( "Error starting navigation: " + String . valueOf ( code ), DISPLAY BOTH ); } } }); } / Creates a waypoint from a given place ID and title . @param placeId The ID of the place to be converted to a waypoint . @param title A descriptive title for the waypoint . / private void createWaypoint ( String placeId , String title ) { try { mWaypoints . add ( Waypoint . builder () . setPlaceIdString ( placeId ) . setTitle ( title ) . build ()); } catch ( Waypoint .
- ArrivalListener () { @Override public void onArrival ( ArrivalEvent arrivalEvent ) { displayMessage ( "onArrival: You've arrived at a waypoint: " + mNavigator . getCurrentRouteSegment (). getDestinationWaypoint (). getTitle (), DISPLAY BOTH ); // Start turn-by-turn guidance for the next leg of the route. if ( arrivalEvent . isFinalDestination ()) { displayMessage ( "onArrival: You've arrived at the final destination." , DISPLAY BOTH ); } else { mNavigator . continueToNextDestination (); mNavigator . startGuidance (); } } }); Receive location updates Obtain a RoadSnappedLocationProvider from the NavigationApi , then call RoadSnappedLocationProvider.addLocationListener() to register for a callback when the device's location or heading changes.

### "The Google navigation experience \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Modification Details Modified navigation guidance: show/hide headers, colors and fonts, directions, alternate routes, and trip progress Map UI controls Modify the navigation header Display directions list Hide alternate routes Display trip progress Adjust traffic information and speed limit information Turn off traffic layer Enable traffic lights and stop signs Display the speedometer Change the map experience UI and adjust the camera.
- For example, the navigation experience shows a standard Google maps layer, with visuals like turn guidance cards, traffic layers, alternate routes, and speed limits.
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Send feedback The Google navigation experience Stay organized with collections Save and categorize content based on your preferences.
- Developers can customize aspects of the Google navigation experience like color schemes, camera views, and guidance information, but for full control, a custom navigation experience is recommended.


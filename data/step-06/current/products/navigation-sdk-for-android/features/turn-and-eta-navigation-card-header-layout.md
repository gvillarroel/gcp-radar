---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.685Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Turn and ETA navigation card header layout"
feature_slug: "turn-and-eta-navigation-card-header-layout"
latest_feature_date: "2024-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav"
keywords:
  - "turn"
  - "and"
  - "eta"
  - "navigation"
  - "card"
  - "header"
  - "layout"
  - "the"
---

# Turn and ETA navigation card header layout

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The turn and ETA navigation card headers now use half the screen width in landscape orientation.

## Extended Definition

The turn and ETA navigation card headers now use half the screen width in landscape orientation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed](https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto](https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav)

## Supporting Pages

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Modify the navigation header Use SupportNavigationFragment.setStylingOptions() or NavigationView.setStylingOptions() to change the theme of the navigation header and the next-turn indicator that appears below the header when available.
- View the code Show/Hide the Java code for the navigation activity. package com . example . navsdkcustomization ; import android.content.pm.PackageManager ; import android.graphics.Bitmap ; import android.graphics.BitmapFactory ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.model.BitmapDescriptorFactory ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.StylingOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.Waypoint ; / An activity that displays a map and a customized navigation UI . / public class NavigationActivityCustomization extends AppCompatActivity { private static final String TAG = NavigationActivityCustomization . class . getSimpleName (); private Navigator mNavigator ; private SupportNavigationFragment mNavFragment ; private GoogleMap mMap ; // Define the Sydney Opera House by specifying its place ID . private static final String SYDNEY OPERA HOUSE = "ChIJ3S-JXmauEmsRUcIaWtf4MzE" ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Starts the Navigation SDK and sets the camera to follow the device 's location.
- You can set the following attributes: Attribute Type Attributes Background color Primary day mode - the daytime color of the navigation header Secondary day mode - the daytime color of the next-turn indicator Primary night mode - the nighttime color of the navigation header Secondary night mode - the nighttime color of the next-turn indicator Text elements for instructions Text color Font Text size of the first row Text size of the second row Text elements for next steps Font Text color of the distance value Text size of the distance value Text color of the distance units Text size of the distance units Maneuver icons Color of the large maneuver icon Color of the small maneuver icon Lane guidance Color of the recommended lane or lanes The following example shows how to set styling options: private SupportNavigationFragment mNavFragment ; mNavFragment = ( SupportNavigationFragment ) getFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Set the styling options on the fragment. mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); Turn off the traffic layer Use GoogleMap.setTrafficEnabled() to enable or disable the traffic layer on the map.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .

### "Enable turn-by-turn data feed \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed](https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The service in the following example receives navigation information and uses the TurnByTurnManager to convert the data into a NavInfo object that contains the navigation details. / Receives turn - by - turn navigation information forwarded from NavSDK . / public class NavInfoReceivingService extends Service { / The messenger used by the service to receive nav step updates . / private Messenger incomingMessenger ; private TurnByTurnManager turnByTurnManager ; private final class IncomingNavStepHandler extends Handler { public IncomingNavStepHandler ( Looper looper ) { super ( looper ); } @ Override public void handleMessage ( Message msg ) { // Identify the message through the msg . what field . if ( TurnByTurnManager .
- Fields for each navigation step Fields for the overall trip Found in StepInfo Found in NavInfo Full road name Remaining time The maneuver icon Distance to destination Distance to the next step Lane guidance fields Lane guidance The Navigation SDK represents lanes in the navigation turn card as Lane and LaneDirection data objects.
- The turn-by-turn feed includes navigation card information fields (road names, maneuver icons, distances, remaining time, and lane guidance) for displaying guidance instructions.
- Expand to see examples icons for different maneuvers Sample Icon TurnByTurn Maneuvers DEPART UNKNOWN STRAIGHT ON RAMP UNSPECIFIED OFF RAMP UNSPECIFIED NAME CHANGE TURN RIGHT ON RAMP RIGHT TURN LEFT ON RAMP LEFT TURN SLIGHT RIGHT ON RAMP SLIGHT RIGHT OFF RAMP SLIGHT RIGHT TURN SLIGHT LEFT ON RAMP SLIGHT LEFT OFF RAMP SLIGHT LEFT TURN SHARP RIGHT ON RAMP SHARP RIGHT OFF RAMP SHARP RIGHT TURN SHARP LEFT ON RAMP SHARP LEFT OFF RAMP SHARP LEFT TURN U TURN COUNTERCLOCKWISE ON RAMP U TURN COUNTERCLOCKWISE OFF RAMP U TURN COUNTERCLOCKWISE TURN U TURN CLOCKWISE ON RAMP U TURN CLOCKWISE OFF RAMP U TURN CLOCKWISE ROUNDABOUT SHARP RIGHT COUNTERCLOCKWISE ROUNDABOUT SHARP RIGHT CLOCKWISE ROUNDABOUT RIGHT COUNTERCLOCKWISE ROUNDABOUT RIGHT CLOCKWISE ROUNDABOUT SLIGHT RIGHT COUNTERCLOCKWISE ROUNDABOUT SLIGHT RIGHT CLOCKWISE ROUNDABOUT STRAIGHT COUNTERCLOCKWISE ROUNDABOUT STRAIGHT CLOCKWISE ROUNDABOUT SLIGHT LEFT COUNTERCLOCKWISE ROUNDABOUT SLIGHT LEFT CLOCKWISE ROUNDABOUT LEFT COUNTERCLOCKWISE ROUNDABOUT LEFT CLOCKWISE ROUNDABOUT SHARP LEFT COUNTERCLOCKWISE ROUNDABOUT SHARP LEFT CLOCKWISE ROUNDABOUT U TURN COUNTERCLOCKWISE ROUNDABOUT U TURN CLOCKWISE ROUNDABOUT COUNTERCLOCKWISE ROUNDABOUT CLOCKWISE ROUNDABOUT EXIT COUNTERCLOCKWISE ROUNDABOUT EXIT CLOCKWISE MERGE RIGHT OFF RAMP RIGHT MERGE LEFT OFF RAMP LEFT FORK RIGHT TURN KEEP RIGHT ON RAMP KEEP RIGHT OFF RAMP KEEP RIGHT FORK LEFT TURN KEEP LEFT ON RAMP KEEP LEFT OFF RAMP KEEP LEFT MERGE UNSPECIFIED DESTINATION DESTINATION RIGHT DESTINATION LEFT FERRY BOAT FERRY TRAIN Use generated icons To facilitate Android Auto use cases, the Navigation SDK supports generation of maneuver and lane guidance icons.

### "Enable navigation for Android Auto \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto](https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PAN ). build ()) . build (); } Zoom with pinch @ Override public void onScale ( float focusX , float focusY , float scaleFactor ) { CameraUpdate update = CameraUpdateFactory . zoomBy (( scaleFactor - 1 ), new Point (( int ) focusX , ( int ) focusY )); googleMap . animateCamera ( update ); // map is set in onSurfaceAvailable. } Panning @ Override public void onScroll ( float distanceX , float distanceY ) { googleMap . moveCamera ( CameraUpdateFactory . scrollBy ( distanceX , distanceY )); } Display navigation directions This section covers how to set up an observer for navigation posts and to populate navigation directions in the turn card template.
- Builder () . setActionStrip ( ... ) . setMapActionStrip ( ... ) if ( currentRoutingInfo != null ) { navigationTemplateBuilder . setNavigationInfo ( currentRoutingInfo ); } return navigationTemplateBuilder . build (); } private void processNextStep ( NavInfo navInfo ) { if ( navInfo == null navinfo . getCurrentStep () == null ) { return ; } / Converts data received from the Navigation data feed into Android-Auto compatible data structures.
- The Android Auto Navigation Template provides a turn card that displays navigation information related to the current trip.
- Use NavigationViewForAuto to draw onto the Surface provided by Android Auto: private boolean isSurfaceReady ( SurfaceContainer surfaceContainer ) { return surfaceContainer . getSurface () != null && surfaceContainer . getDpi () != 0 && surfaceContainer . getHeight () != 0 && surfaceContainer . getWidth () != 0 ; } @ Override public void onSurfaceAvailable (@ NonNull SurfaceContainer surfaceContainer ) { if ( ! isSurfaceReady ( surfaceContainer )) { return ; } virtualDisplay = getCarContext () . getSystemService ( DisplayManager . class ) . createVirtualDisplay ( VIRTUAL DISPLAY NAME , surfaceContainer . getWidth (), surfaceContainer . getHeight (), surfaceContainer . getDpi (), surfaceContainer . getSurface (), DisplayManager .

### "The Google navigation experience \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Modification Details Modified navigation guidance: show/hide headers, colors and fonts, directions, alternate routes, and trip progress Map UI controls Modify the navigation header Display directions list Hide alternate routes Display trip progress Adjust traffic information and speed limit information Turn off traffic layer Enable traffic lights and stop signs Display the speedometer Change the map experience UI and adjust the camera.
- For example, the navigation experience shows a standard Google maps layer, with visuals like turn guidance cards, traffic layers, alternate routes, and speed limits.
- The Google navigation experience refers to using the Navigation SDK to embed a turn-by-turn navigation experience that uses Google-provided UI elements and visuals, which are similar to the navigation experience within the Google Maps apps.
- As an alternative, if you need more customization than is available with the Google navigation experience, you can request a turn-by-turn navigation feed from the Navigation SDK and then provide and manage your own UI elements.


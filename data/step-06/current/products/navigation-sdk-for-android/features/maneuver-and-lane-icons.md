---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.688Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Maneuver and lane icons"
feature_slug: "maneuver-and-lane-icons"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup"
keywords:
  - "maneuver"
  - "and"
  - "lane"
  - "icons"
  - "use"
  - "the"
  - "latest"
  - "material"
---

# Maneuver and lane icons

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Maneuver and lane icons use the latest Material Design style.

## Extended Definition

Maneuver and lane icons use the latest Material Design style.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto](https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed](https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup](https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup)

## Supporting Pages

### "Enable navigation for Android Auto \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto](https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UNIT FEET ); } } Verify correct maneuver types The kinds of maneuvers used in the Android Auto Car library correspond one-to-one to maneuvers provided by the TurnByTurn library.
- Populate the feed display : Access data fields for guidance info and use icons.
- Turn-by-Turn Library Maneuver Android Auto Maneuver DEPART TYPE DEPART DESTINATION TYPE DESTINATION DESTINATION LEFT TYPE DESTINATION LEFT DESTINATION RIGHT TYPE DESTINATION RIGHT TURN U TURN CLOCKWISE TYPE U TURN RIGHT ON RAMP LEFT TYPE ON RAMP NORMAL LEFT ON RAMP RIGHT TYPE ON RAMP NORMAL RIGHT ON RAMP SLIGHT LEFT TYPE ON RAMP SLIGHT LEFT FORK RIGHT TYPE FORK RIGHT Expand to see the code example. import com.google.android.libraries.mapsplatform.turnbyturn.model.Maneuver ; import com.google.common.collect.ImmutableMap ; import javax.annotation.Nullable ; / Converter that converts between turn - by - turn and Android Auto Maneuvers . / public final class ManeuverConverter { private ManeuverConverter () {} // Map from turn - by - turn Maneuver to Android Auto Maneuver .
- Use NavigationViewForAuto to draw onto the Surface provided by Android Auto: private boolean isSurfaceReady ( SurfaceContainer surfaceContainer ) { return surfaceContainer . getSurface () != null && surfaceContainer . getDpi () != 0 && surfaceContainer . getHeight () != 0 && surfaceContainer . getWidth () != 0 ; } @ Override public void onSurfaceAvailable (@ NonNull SurfaceContainer surfaceContainer ) { if ( ! isSurfaceReady ( surfaceContainer )) { return ; } virtualDisplay = getCarContext () . getSystemService ( DisplayManager . class ) . createVirtualDisplay ( VIRTUAL DISPLAY NAME , surfaceContainer . getWidth (), surfaceContainer . getHeight (), surfaceContainer . getDpi (), surfaceContainer . getSurface (), DisplayManager .

### "Enable turn-by-turn data feed \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed](https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Expand to see examples icons for different maneuvers Sample Icon TurnByTurn Maneuvers DEPART UNKNOWN STRAIGHT ON RAMP UNSPECIFIED OFF RAMP UNSPECIFIED NAME CHANGE TURN RIGHT ON RAMP RIGHT TURN LEFT ON RAMP LEFT TURN SLIGHT RIGHT ON RAMP SLIGHT RIGHT OFF RAMP SLIGHT RIGHT TURN SLIGHT LEFT ON RAMP SLIGHT LEFT OFF RAMP SLIGHT LEFT TURN SHARP RIGHT ON RAMP SHARP RIGHT OFF RAMP SHARP RIGHT TURN SHARP LEFT ON RAMP SHARP LEFT OFF RAMP SHARP LEFT TURN U TURN COUNTERCLOCKWISE ON RAMP U TURN COUNTERCLOCKWISE OFF RAMP U TURN COUNTERCLOCKWISE TURN U TURN CLOCKWISE ON RAMP U TURN CLOCKWISE OFF RAMP U TURN CLOCKWISE ROUNDABOUT SHARP RIGHT COUNTERCLOCKWISE ROUNDABOUT SHARP RIGHT CLOCKWISE ROUNDABOUT RIGHT COUNTERCLOCKWISE ROUNDABOUT RIGHT CLOCKWISE ROUNDABOUT SLIGHT RIGHT COUNTERCLOCKWISE ROUNDABOUT SLIGHT RIGHT CLOCKWISE ROUNDABOUT STRAIGHT COUNTERCLOCKWISE ROUNDABOUT STRAIGHT CLOCKWISE ROUNDABOUT SLIGHT LEFT COUNTERCLOCKWISE ROUNDABOUT SLIGHT LEFT CLOCKWISE ROUNDABOUT LEFT COUNTERCLOCKWISE ROUNDABOUT LEFT CLOCKWISE ROUNDABOUT SHARP LEFT COUNTERCLOCKWISE ROUNDABOUT SHARP LEFT CLOCKWISE ROUNDABOUT U TURN COUNTERCLOCKWISE ROUNDABOUT U TURN CLOCKWISE ROUNDABOUT COUNTERCLOCKWISE ROUNDABOUT CLOCKWISE ROUNDABOUT EXIT COUNTERCLOCKWISE ROUNDABOUT EXIT CLOCKWISE MERGE RIGHT OFF RAMP RIGHT MERGE LEFT OFF RAMP LEFT FORK RIGHT TURN KEEP RIGHT ON RAMP KEEP RIGHT OFF RAMP KEEP RIGHT FORK LEFT TURN KEEP LEFT ON RAMP KEEP LEFT OFF RAMP KEEP LEFT MERGE UNSPECIFIED DESTINATION DESTINATION RIGHT DESTINATION LEFT FERRY BOAT FERRY TRAIN Use generated icons To facilitate Android Auto use cases, the Navigation SDK supports generation of maneuver and lane guidance icons.
- Icon generation example NavigationUpdatesOptions options = NavigationUpdatesOptions.builder() .setNumNextStepsToPreview(numNextStepsToPreview) .setGeneratedStepImagesType(GeneratedStepImagesType.BITMAP) .setDisplayMetrics(getResources().getDisplayMetrics()) .build(); boolean isRegistered = navigator.registerServiceForNavUpdates( getPackageName(), NavInfoReceivingService.class.getName(), options); After you enable icon generation, the TurnbyTurn StepInfo object populates the maneuverBitmap and lanesBitmap fields with the icons.
- Lane guidance example The following snippet illustrates the data representation of the lanes displayed above. // Lane 1 LaneDirections = [{/ laneShape= / STRAIGHT, / isRecommended= / false}, {/ laneShape= / SLIGHT LEFT, / isRecommended= / true}] // Lane 2 LaneDirections = [{/ laneShape= / STRAIGHT, / isRecommended= / false}] Create icons for maneuvers The Maneuver enum defines each possible maneuver that could occur while navigating, and you can get the maneuver for a given step from the StepInfo.getManeuver() method.
- It provides upcoming maneuvers with elements you supply: icons (left, right, U-turn) turn numbers in roundabouts road names estimated distances and time to the next navigation step or final destination You can use the turn-by-turn feed to create experiences where the full Navigation SDK UI is not appropriate, such as for Android Auto or for small screen displays where a full Android stack is not available.

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- You can set the following attributes: Attribute Type Attributes Background color Primary day mode - the daytime color of the navigation header Secondary day mode - the daytime color of the next-turn indicator Primary night mode - the nighttime color of the navigation header Secondary night mode - the nighttime color of the next-turn indicator Text elements for instructions Text color Font Text size of the first row Text size of the second row Text elements for next steps Font Text color of the distance value Text size of the distance value Text color of the distance units Text size of the distance units Maneuver icons Color of the large maneuver icon Color of the small maneuver icon Lane guidance Color of the recommended lane or lanes The following example shows how to set styling options: private SupportNavigationFragment mNavFragment ; mNavFragment = ( SupportNavigationFragment ) getFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Set the styling options on the fragment. mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); Turn off the traffic layer Use GoogleMap.setTrafficEnabled() to enable or disable the traffic layer on the map.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- View the code Show/Hide the Java code for the navigation activity. package com . example . navsdkcustomization ; import android.content.pm.PackageManager ; import android.graphics.Bitmap ; import android.graphics.BitmapFactory ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.model.BitmapDescriptorFactory ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.StylingOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.Waypoint ; / An activity that displays a map and a customized navigation UI . / public class NavigationActivityCustomization extends AppCompatActivity { private static final String TAG = NavigationActivityCustomization . class . getSimpleName (); private Navigator mNavigator ; private SupportNavigationFragment mNavFragment ; private GoogleMap mMap ; // Define the Sydney Opera House by specifying its place ID . private static final String SYDNEY OPERA HOUSE = "ChIJ3S-JXmauEmsRUcIaWtf4MzE" ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Starts the Navigation SDK and sets the camera to follow the device 's location.
- NavigatorListener () { / Sets up the navigation UI when the navigator is ready for use . / @Override public void onNavigatorReady ( Navigator navigator ) { displayMessage ( "Navigator ready." ); mNavigator = navigator ; mNavFragment = ( SupportNavigationFragment ) getSupportFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Get the map . mNavFragment . getMapAsync ( new OnMapReadyCallback () { @Override public void onMapReady ( GoogleMap map ) { mMap = map ; // Navigate to a place , specified by Place ID . navigateToPlace ( SYDNEY OPERA HOUSE ); } }); } / Handles errors from the Navigation SDK . @param errorCode The error code returned by the navigator . / @Override public void onError ( @NavigationApi .

### "Set up your Android Studio project \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup](https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check the sample apps for updated sets of dependencies, as the version of Navigation SDK you are using may be slightly ahead or behind this documentation. apply plugin : 'com.android.application' ext { navSdk = " NAVSDK VERSION " } android { compileSdk 33 buildToolsVersion = '28.0.3' defaultConfig { applicationId "<your id>" // Navigation SDK supports SDK 23 and later . minSdkVersion 23 targetSdkVersion 34 versionCode 1 versionName "1.0" // Set this to the languages you actually use , otherwise you 'll include resource strings // for all languages supported by the Navigation SDK . resConfigs "en" multiDexEnabled true } dexOptions { // This increases the amount of memory available to the dexer .
- You must exclude it to prevent duplication--> <exclusion> <!-- declare the exclusion here --> <groupId>com.google.android.gms</groupId> <artifactId>play-services-maps</artifactId> </exclusion> </exclusions> </dependency> </dependencies> Configure the build After you have created the project, you can configure the settings for a successful build and use of the Navigation SDK.
- Update the Gradle build script Open the build.gradle (Module:app) file and use the following guidelines to update the settings to meet the requirements for Navigation SDK and consider setting the optimization options as well.
- Include the required attributions in your app If you use the Navigation SDK for Android in your app, you must include attribution text and open source licenses as part of your app's legal notices section.


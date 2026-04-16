---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.689Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "My Location button enabled setting"
feature_slug: "my-location-button-enabled-setting"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/camera"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup"
keywords:
  - "my"
  - "location"
  - "button"
  - "enabled"
  - "setting"
  - "the"
  - "navsdk"
  - "supports"
---

# My Location button enabled setting

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The NavSDK supports the UiSettings control for enabling or disabling the My Location button.

## Extended Definition

The NavSDK supports the UiSettings control for enabling or disabling the My Location button.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/camera](https://developers.google.com/maps/documentation/navigation/android-sdk/camera)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup](https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup)

## Supporting Pages

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- The icon only appears in locations where reliable speed limit data is available. // Display the Speed Limit icon mNavFragment . setSpeedLimitIconEnabled ( true ); The speed limit icon is temporarily hidden when the recenter button is displayed.
- View the code Show/Hide the Java code for the navigation activity. package com . example . navsdkcustomization ; import android.content.pm.PackageManager ; import android.graphics.Bitmap ; import android.graphics.BitmapFactory ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.model.BitmapDescriptorFactory ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.StylingOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.Waypoint ; / An activity that displays a map and a customized navigation UI . / public class NavigationActivityCustomization extends AppCompatActivity { private static final String TAG = NavigationActivityCustomization . class . getSimpleName (); private Navigator mNavigator ; private SupportNavigationFragment mNavFragment ; private GoogleMap mMap ; // Define the Sydney Opera House by specifying its place ID . private static final String SYDNEY OPERA HOUSE = "ChIJ3S-JXmauEmsRUcIaWtf4MzE" ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Starts the Navigation SDK and sets the camera to follow the device 's location.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- OnMarkerClickListener () { @Override public boolean onMarkerClick ( Marker marker ) { displayMessage ( "Marker tapped: " + marker . getTitle () + ", at location " + marker . getPosition () . latitude + ", " + marker . getPosition () . longitude ); // The event has been handled . return true ; } }); } // Set the camera to follow the device location with 'TILTED' driving view . mMap . followMyLocation ( CameraPerspective .

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- UiSettings getUiSettings () Gets the user interface settings for the map. boolean isBuildingsEnabled () Returns whether 3D buildings layer is enabled. boolean isCameraFollowingMyLocation () Returns whether the camera is following current location or not. boolean isIndoorEnabled () Gets whether indoor maps are currently enabled. boolean isMyLocationEnabled () Gets the status of the my-location layer. boolean isTrafficEnabled () Checks whether the map is drawing traffic data. boolean isTransitEnabled () Checks whether the map is drawing transit data. void moveCamera ( CameraUpdate update) Repositions the camera according to the instructions defined in the update. void removeOnMapCapabilitiesChangedListener ( GoogleMap.OnMapCapabilitiesChangedListener listener) Removes a listener that's invoked when the map capabilities are changed. void resetMinMaxZoomPreference () Removes any previously specified upper and lower zoom bounds. void setBuildingsEnabled (boolean enabled) Turns the 3D buildings layer on or off. void setContentDescription (String description) Sets a contentDescription for the map. boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled. void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows. void setLatLngBoundsForCameraTarget ( LatLngBounds bounds) Specifies a LatLngBounds to constrain the camera target, so that when users scroll and pan the map, the camera target does not move outside these bounds. void setLocationSource ( LocationSource source) Replaces the location source of the my-location layer. void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization. boolean setMapStyle ( MapStyleOptions style) Sets the styling of the base map. void setMapType (int type) Sets the type of map tiles that should be displayed. void setMaxZoomPreference (float maxZoomPreference) Sets a preferred upper bound for the camera zoom. void setMinZoomPreference (float minZoomPreference) Sets a preferred lower bound for the camera zoom. void setMyLocationEnabled (boolean enabled) Enables or disables the my-location layer. void setOnCameraChangeListener ( GoogleMap.OnCameraChangeListener listener) This method is deprecated.
- Replaced by setOnCameraMoveStartedListener(GoogleMap.OnCameraMoveStartedListener) , setOnCameraMoveListener(GoogleMap.OnCameraMoveListener) , setOnCameraMoveCanceledListener(GoogleMap.OnCameraMoveCanceledListener) and setOnCameraIdleListener(GoogleMap.OnCameraIdleListener) . void setOnCameraIdleListener ( GoogleMap.OnCameraIdleListener listener) Sets a callback that is invoked when camera movement has ended. void setOnCameraMoveCanceledListener ( GoogleMap.OnCameraMoveCanceledListener listener) Sets a callback that is invoked when camera motion is stopped or interrupted by a new type of animation. void setOnCameraMoveListener ( GoogleMap.OnCameraMoveListener listener) Sets a callback that is invoked repeatedly while the camera is in motion. void setOnCameraMoveStartedListener ( GoogleMap.OnCameraMoveStartedListener listener) Sets a callback that's invoked when the camera starts moving or the reason for camera motion has changed. void setOnCircleClickListener ( GoogleMap.OnCircleClickListener listener) Sets a callback that's invoked when a circle is clicked. void setOnFollowMyLocationCallback ( GoogleMap.OnCameraFollowLocationCallback callback) Sets a callback to get notified about the events related to the state of the camera when it's following user's location. void setOnGroundOverlayClickListener ( GoogleMap.OnGroundOverlayClickListener listener) Sets a callback that's invoked when a ground overlay is clicked. void setOnIndoorStateChangeListener ( GoogleMap.OnIndoorStateChangeListener listener) Sets or clears the listener for indoor events. void setOnInfoWindowClickListener ( GoogleMap.OnInfoWindowClickListener listener) Sets a callback that's invoked when a marker info window is clicked. void setOnInfoWindowCloseListener ( GoogleMap.OnInfoWindowCloseListener listener) Sets a callback that's invoked when a marker's info window is closed. void setOnInfoWindowLongClickListener ( GoogleMap.OnInfoWindowLongClickListener listener) Sets a callback that's invoked when a marker's info window is long pressed. void setOnMapClickListener ( GoogleMap.OnMapClickListener listener) Sets a callback that's invoked when the map is tapped. void setOnMapLoadedCallback ( GoogleMap.OnMapLoadedCallback callback) Sets a callback that's invoked when this map has finished rendering. void setOnMapLongClickListener ( GoogleMap.OnMapLongClickListener listener) Sets a callback that's invoked when the map is long pressed. void setOnMarkerClickListener ( GoogleMap.OnMarkerClickListener listener) Sets a callback that's invoked when a marker is clicked. void setOnMarkerDragListener ( GoogleMap.OnMarkerDragListener listener) Sets a callback that's invoked when a marker is dragged. void setOnMyLocationButtonClickListener ( GoogleMap.OnMyLocationButtonClickListener listener) Sets a callback that's invoked when the my location button is clicked. void setOnMyLocationChangeListener ( GoogleMap.OnMyLocationChangeListener listener) This method is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- The order in which the deprecated onCameraChange method will be called in relation to the methods in the new camera change listeners is undefined. interface GoogleMap.OnCameraFollowLocationCallback Callback interface to get updates related to camera entering or exiting follow mode. interface GoogleMap.OnCameraIdleListener Callback interface for when camera movement has ended. interface GoogleMap.OnCameraMoveCanceledListener Callback interface for when the camera's motion has been stopped or when the camera starts moving for a new reason. interface GoogleMap.OnCameraMoveListener Callback interface for when the camera changes position. interface GoogleMap.OnCameraMoveStartedListener Callback interface for when the camera motion starts. interface GoogleMap.OnCircleClickListener Callback interface for when a circle is clicked. interface GoogleMap.OnGroundOverlayClickListener Callback interface for when a ground overlay is clicked. interface GoogleMap.OnIndoorStateChangeListener A listener for when the indoor state changes. interface GoogleMap.OnInfoWindowClickListener Callback interface for click/tap events on a marker's info window. interface GoogleMap.OnInfoWindowCloseListener Callback interface for close events on a marker's info window. interface GoogleMap.OnInfoWindowLongClickListener Callback interface for when the user long presses on a marker's info window. interface GoogleMap.OnMapCapabilitiesChangedListener Listener interface for when the map capabilities are changed. interface GoogleMap.OnMapClickListener Callback interface for when the user taps on the map. interface GoogleMap.OnMapLoadedCallback Callback interface for when the map has finished rendering. interface GoogleMap.OnMapLongClickListener Callback interface for when the user long presses on the map. interface GoogleMap.OnMarkerClickListener Defines signatures for methods that are called when a marker is clicked or tapped. interface GoogleMap.OnMarkerDragListener Callback interface for drag events on markers. interface GoogleMap.OnMyLocationButtonClickListener Callback interface for when the My Location button is clicked. interface GoogleMap.OnMyLocationChangeListener This interface is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- RoadSnappedLocationProvider further aligns locations to the road network. void setOnMyLocationClickListener ( GoogleMap.OnMyLocationClickListener listener) Sets a callback that's invoked when the My Location dot (which signifies the user's location) is clicked. void setOnPoiClickListener ( GoogleMap.OnPoiClickListener listener) Sets a listener which will be triggered when a POI is clicked or tapped. void setOnPolygonClickListener ( GoogleMap.OnPolygonClickListener listener) Sets a callback that's invoked when a polygon is clicked. void setOnPolylineClickListener ( GoogleMap.OnPolylineClickListener listener) Sets a callback that's invoked when a polyline is clicked. void setPadding (int left, int top, int right, int bottom) Sets padding on the map. void setTrafficEnabled (boolean enabled) Turns the traffic layer on or off. void setTransitEnabled (boolean enabled) Turns the transit layer on or off. void snapshot ( GoogleMap.SnapshotReadyCallback callback, Bitmap bitmap) Takes a snapshot of the map. void snapshot ( GoogleMap.SnapshotReadyCallback callback) Takes a snapshot of the map. void stopAnimation () Stops the camera animation if there is one in progress.

### Adjust the camera \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/camera](https://developers.google.com/maps/documentation/navigation/android-sdk/camera)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- High detail setting, when enabled, displays 2-D building outlines when the zoom level is 19 or higher, which can be further customized using FollowMyLocationOptions .
- Follow my location mode The most common camera setting is to have the camera set to the device or vehicle, showing its current position within the journey.
- Clicking the Re-center button sets the camera to followMyLocation mode.
- Page Summary outlined flag The Navigation SDK offers three camera modes: followMyLocation , Pinned to location , and showRouteOverview to control the user's viewpoint of the map during navigation. followMyLocation mode centers the map on the user's location and automatically adjusts during navigation, while Pinned to location mode fixes the camera at a specific location with customizable properties. showRouteOverview mode displays the entire route or remaining route, adjusting the view to fit the route on the screen.

### "Set up your Android Studio project \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup](https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check the sample apps for updated sets of dependencies, as the version of Navigation SDK you are using may be slightly ahead or behind this documentation. apply plugin : 'com.android.application' ext { navSdk = " NAVSDK VERSION " } android { compileSdk 33 buildToolsVersion = '28.0.3' defaultConfig { applicationId "<your id>" // Navigation SDK supports SDK 23 and later . minSdkVersion 23 targetSdkVersion 34 versionCode 1 versionName "1.0" // Set this to the languages you actually use , otherwise you 'll include resource strings // for all languages supported by the Navigation SDK . resConfigs "en" multiDexEnabled true } dexOptions { // This increases the amount of memory available to the dexer .
- VERSION 1 8 } } repositories { // Navigation SDK for Android and other libraries are hosted on Google 's Maven repository. google () } dependencies { // Include the Google Navigation SDK . // Note : remember to exclude Google Play service Maps SDK from your transitive // dependencies to avoid duplicate copies of the Google Maps SDK . api "com.google.android.libraries.navigation:navigation:${navSdk}" // Declare other dependencies for your app here . annotationProcessor "androidx.annotation:annotation:1.7.0" coreLibraryDesugaring 'com.android.tools:desugar jdk libs nio:2.0.3' } Add the API key to your app This section describes how to store your API key so that it can be securely referenced by your app.
- Note that the Navigation SDK includes its own ProGuard configuration . // The configuration is included transitively by depending on the Navigation SDK . // If the ProGuard step takes too long , consider enabling multidex for development work // instead . all { minifyEnabled true proguardFiles getDefaultProguardFile ( 'proguard-android.txt' ), 'proguard-rules.pro' } } compileOptions { // Flag to enable support for the new language APIs coreLibraryDesugaringEnabled true // Sets Java compatibility to Java 8 sourceCompatibility JavaVersion .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]


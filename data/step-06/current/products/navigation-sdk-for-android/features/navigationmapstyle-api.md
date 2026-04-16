---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.690Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "NavigationMapStyle API"
feature_slug: "navigationmapstyle-api"
latest_feature_date: "2022-10-25"
deprecation_date: "2022-10-25"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/overview"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview"
keywords:
  - "navigationmapstyle"
  - "api"
  - "the"
  - "controls"
  - "app"
  - "default"
  - "map"
  - "view"
---

# NavigationMapStyle API

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The NavigationMapStyle API controls the app's default map view style; deprecated on 2022-10-25.

## Extended Definition

The NavigationMapStyle API controls the app's default map view style; deprecated on 2022-10-25.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/overview](https://developers.google.com/maps/documentation/navigation/android-sdk/overview)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview](https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview)

## Supporting Pages

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replaced by setOnCameraMoveStartedListener(GoogleMap.OnCameraMoveStartedListener) , setOnCameraMoveListener(GoogleMap.OnCameraMoveListener) , setOnCameraMoveCanceledListener(GoogleMap.OnCameraMoveCanceledListener) and setOnCameraIdleListener(GoogleMap.OnCameraIdleListener) . void setOnCameraIdleListener ( GoogleMap.OnCameraIdleListener listener) Sets a callback that is invoked when camera movement has ended. void setOnCameraMoveCanceledListener ( GoogleMap.OnCameraMoveCanceledListener listener) Sets a callback that is invoked when camera motion is stopped or interrupted by a new type of animation. void setOnCameraMoveListener ( GoogleMap.OnCameraMoveListener listener) Sets a callback that is invoked repeatedly while the camera is in motion. void setOnCameraMoveStartedListener ( GoogleMap.OnCameraMoveStartedListener listener) Sets a callback that's invoked when the camera starts moving or the reason for camera motion has changed. void setOnCircleClickListener ( GoogleMap.OnCircleClickListener listener) Sets a callback that's invoked when a circle is clicked. void setOnFollowMyLocationCallback ( GoogleMap.OnCameraFollowLocationCallback callback) Sets a callback to get notified about the events related to the state of the camera when it's following user's location. void setOnGroundOverlayClickListener ( GoogleMap.OnGroundOverlayClickListener listener) Sets a callback that's invoked when a ground overlay is clicked. void setOnIndoorStateChangeListener ( GoogleMap.OnIndoorStateChangeListener listener) Sets or clears the listener for indoor events. void setOnInfoWindowClickListener ( GoogleMap.OnInfoWindowClickListener listener) Sets a callback that's invoked when a marker info window is clicked. void setOnInfoWindowCloseListener ( GoogleMap.OnInfoWindowCloseListener listener) Sets a callback that's invoked when a marker's info window is closed. void setOnInfoWindowLongClickListener ( GoogleMap.OnInfoWindowLongClickListener listener) Sets a callback that's invoked when a marker's info window is long pressed. void setOnMapClickListener ( GoogleMap.OnMapClickListener listener) Sets a callback that's invoked when the map is tapped. void setOnMapLoadedCallback ( GoogleMap.OnMapLoadedCallback callback) Sets a callback that's invoked when this map has finished rendering. void setOnMapLongClickListener ( GoogleMap.OnMapLongClickListener listener) Sets a callback that's invoked when the map is long pressed. void setOnMarkerClickListener ( GoogleMap.OnMarkerClickListener listener) Sets a callback that's invoked when a marker is clicked. void setOnMarkerDragListener ( GoogleMap.OnMarkerDragListener listener) Sets a callback that's invoked when a marker is dragged. void setOnMyLocationButtonClickListener ( GoogleMap.OnMyLocationButtonClickListener listener) Sets a callback that's invoked when the my location button is clicked. void setOnMyLocationChangeListener ( GoogleMap.OnMyLocationChangeListener listener) This method is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- The order in which the deprecated onCameraChange method will be called in relation to the methods in the new camera change listeners is undefined. interface GoogleMap.OnCameraFollowLocationCallback Callback interface to get updates related to camera entering or exiting follow mode. interface GoogleMap.OnCameraIdleListener Callback interface for when camera movement has ended. interface GoogleMap.OnCameraMoveCanceledListener Callback interface for when the camera's motion has been stopped or when the camera starts moving for a new reason. interface GoogleMap.OnCameraMoveListener Callback interface for when the camera changes position. interface GoogleMap.OnCameraMoveStartedListener Callback interface for when the camera motion starts. interface GoogleMap.OnCircleClickListener Callback interface for when a circle is clicked. interface GoogleMap.OnGroundOverlayClickListener Callback interface for when a ground overlay is clicked. interface GoogleMap.OnIndoorStateChangeListener A listener for when the indoor state changes. interface GoogleMap.OnInfoWindowClickListener Callback interface for click/tap events on a marker's info window. interface GoogleMap.OnInfoWindowCloseListener Callback interface for close events on a marker's info window. interface GoogleMap.OnInfoWindowLongClickListener Callback interface for when the user long presses on a marker's info window. interface GoogleMap.OnMapCapabilitiesChangedListener Listener interface for when the map capabilities are changed. interface GoogleMap.OnMapClickListener Callback interface for when the user taps on the map. interface GoogleMap.OnMapLoadedCallback Callback interface for when the map has finished rendering. interface GoogleMap.OnMapLongClickListener Callback interface for when the user long presses on the map. interface GoogleMap.OnMarkerClickListener Defines signatures for methods that are called when a marker is clicked or tapped. interface GoogleMap.OnMarkerDragListener Callback interface for drag events on markers. interface GoogleMap.OnMyLocationButtonClickListener Callback interface for when the My Location button is clicked. interface GoogleMap.OnMyLocationChangeListener This interface is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- Parameters listener The callback that's invoked when the My Location button is clicked. public void setOnMyLocationChangeListener ( GoogleMap.OnMyLocationChangeListener listener) This method is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- You cannot instantiate a GoogleMap object directly, rather, you must obtain one from the getMapAsync() method on a MapFragment or MapView that you have added to your application.

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- View the code Show/Hide the Java code for the navigation activity. package com . example . navsdkcustomization ; import android.content.pm.PackageManager ; import android.graphics.Bitmap ; import android.graphics.BitmapFactory ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.model.BitmapDescriptorFactory ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.StylingOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.Waypoint ; / An activity that displays a map and a customized navigation UI . / public class NavigationActivityCustomization extends AppCompatActivity { private static final String TAG = NavigationActivityCustomization . class . getSimpleName (); private Navigator mNavigator ; private SupportNavigationFragment mNavFragment ; private GoogleMap mMap ; // Define the Sydney Opera House by specifying its place ID . private static final String SYDNEY OPERA HOUSE = "ChIJ3S-JXmauEmsRUcIaWtf4MzE" ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Starts the Navigation SDK and sets the camera to follow the device 's location.
- These breakpoints are independent of device orientation and how much space the map actually takes up on the screen: Screen height Trip progress bar visibility Trip progress bar height Trip progress bar y-axis position Small: 0 dp - 551 dp Not visible N/A N/A Medium: 552 dp - 739 dp Visible 130 dp Above start side controls (speedometer / Google logo / Re-center button) Large: 740 dp and above Visible 290 dp Above start side controls (speedometer / Google logo / Re-center button) Note: The screen height values shown in the table above apply to Navigation SDK versions 6.2.1 and higher.
- OnMarkerClickListener () { @Override public boolean onMarkerClick ( Marker marker ) { displayMessage ( "Marker tapped: " + marker . getTitle () + ", at location " + marker . getPosition () . latitude + ", " + marker . getPosition () . longitude ); // The event has been handled . return true ; } }); } // Set the camera to follow the device location with 'TILTED' driving view . mMap . followMyLocation ( CameraPerspective .
- This document describes how to modify your map's user interface in two ways: Map UI controls Map UI accessories Note: In most cases, we recommend using SupportNavigationFragment , which is a wrapper for NavigationView , instead of interacting directly with NavigationView .

### "Navigation SDK overview \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/overview](https://developers.google.com/maps/documentation/navigation/android-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For information on the maps API and functionality differences between the Maps SDK and the Navigation SDK, see the Overview page in the Reference section Navigation Experience : Add the navigation experience using the, which includes the turn-by-turn navigation overlay, turn cards, and additional UI elements.
- The two main components of the Navigation SDK are: Map Layer : Begin with a map layer, including map view, styling, UI controls, camera, and interaction behavior.
- 3 Modify the navigation UI Customize the navigation experience and visual appearance by modifying the built-in UI controls and elements appear on the map.
- Page Summary outlined flag The Navigation SDK enables integrating Google Maps turn-by-turn navigation directly into your mobile apps, offering UI customization and advanced route configuration.

### "Overview and requirements \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview](https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your app must specify Android versions as follows: the target version must be Android 13 (API level 33) or higher. the minimum version must be Android 6 (API level 23) or higher.
- You cannot use the Navigation SDK and the Maps SDK in the same app, as the Navigation SDK replaces the Maps SDK's functionalities.
- Note: If your app already uses the Maps SDK , the Navigation SDK replaces the Maps SDK for both map layer and navigation features.
- You cannot use the Navigation SDK and Maps SDK in the same app.


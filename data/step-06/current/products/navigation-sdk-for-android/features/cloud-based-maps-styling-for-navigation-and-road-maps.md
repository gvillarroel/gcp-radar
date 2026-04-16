---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.675Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Cloud-based maps styling for navigation and road maps"
feature_slug: "cloud-based-maps-styling-for-navigation-and-road-maps"
latest_feature_date: "2025-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/overview"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles"
keywords:
  - "based"
  - "maps"
  - "styling"
  - "for"
  - "navigation"
  - "and"
  - "road"
  - "lets"
---

# Cloud-based maps styling for navigation and road maps

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Lets you style both the navigation map and road map with reusable styles associated with Map IDs.

## Extended Definition

Lets you style both the navigation map and road map with reusable styles associated with Map IDs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/overview](https://developers.google.com/maps/documentation/navigation/android-sdk/overview)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles)

## Supporting Pages

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Reference Send feedback GoogleMap Stay organized with collections Save and categorize content based on your preferences.
- This Map ID is not intended for use in production applications and cannot be used for features which require cloud configuration (such as Cloud-based maps styling ).
- UiSettings getUiSettings () Gets the user interface settings for the map. boolean isBuildingsEnabled () Returns whether 3D buildings layer is enabled. boolean isCameraFollowingMyLocation () Returns whether the camera is following current location or not. boolean isIndoorEnabled () Gets whether indoor maps are currently enabled. boolean isMyLocationEnabled () Gets the status of the my-location layer. boolean isTrafficEnabled () Checks whether the map is drawing traffic data. boolean isTransitEnabled () Checks whether the map is drawing transit data. void moveCamera ( CameraUpdate update) Repositions the camera according to the instructions defined in the update. void removeOnMapCapabilitiesChangedListener ( GoogleMap.OnMapCapabilitiesChangedListener listener) Removes a listener that's invoked when the map capabilities are changed. void resetMinMaxZoomPreference () Removes any previously specified upper and lower zoom bounds. void setBuildingsEnabled (boolean enabled) Turns the 3D buildings layer on or off. void setContentDescription (String description) Sets a contentDescription for the map. boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled. void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows. void setLatLngBoundsForCameraTarget ( LatLngBounds bounds) Specifies a LatLngBounds to constrain the camera target, so that when users scroll and pan the map, the camera target does not move outside these bounds. void setLocationSource ( LocationSource source) Replaces the location source of the my-location layer. void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization. boolean setMapStyle ( MapStyleOptions style) Sets the styling of the base map. void setMapType (int type) Sets the type of map tiles that should be displayed. void setMaxZoomPreference (float maxZoomPreference) Sets a preferred upper bound for the camera zoom. void setMinZoomPreference (float minZoomPreference) Sets a preferred lower bound for the camera zoom. void setMyLocationEnabled (boolean enabled) Enables or disables the my-location layer. void setOnCameraChangeListener ( GoogleMap.OnCameraChangeListener listener) This method is deprecated.
- Replaced by setOnCameraMoveStartedListener(GoogleMap.OnCameraMoveStartedListener) , setOnCameraMoveListener(GoogleMap.OnCameraMoveListener) , setOnCameraMoveCanceledListener(GoogleMap.OnCameraMoveCanceledListener) and setOnCameraIdleListener(GoogleMap.OnCameraIdleListener) . void setOnCameraIdleListener ( GoogleMap.OnCameraIdleListener listener) Sets a callback that is invoked when camera movement has ended. void setOnCameraMoveCanceledListener ( GoogleMap.OnCameraMoveCanceledListener listener) Sets a callback that is invoked when camera motion is stopped or interrupted by a new type of animation. void setOnCameraMoveListener ( GoogleMap.OnCameraMoveListener listener) Sets a callback that is invoked repeatedly while the camera is in motion. void setOnCameraMoveStartedListener ( GoogleMap.OnCameraMoveStartedListener listener) Sets a callback that's invoked when the camera starts moving or the reason for camera motion has changed. void setOnCircleClickListener ( GoogleMap.OnCircleClickListener listener) Sets a callback that's invoked when a circle is clicked. void setOnFollowMyLocationCallback ( GoogleMap.OnCameraFollowLocationCallback callback) Sets a callback to get notified about the events related to the state of the camera when it's following user's location. void setOnGroundOverlayClickListener ( GoogleMap.OnGroundOverlayClickListener listener) Sets a callback that's invoked when a ground overlay is clicked. void setOnIndoorStateChangeListener ( GoogleMap.OnIndoorStateChangeListener listener) Sets or clears the listener for indoor events. void setOnInfoWindowClickListener ( GoogleMap.OnInfoWindowClickListener listener) Sets a callback that's invoked when a marker info window is clicked. void setOnInfoWindowCloseListener ( GoogleMap.OnInfoWindowCloseListener listener) Sets a callback that's invoked when a marker's info window is closed. void setOnInfoWindowLongClickListener ( GoogleMap.OnInfoWindowLongClickListener listener) Sets a callback that's invoked when a marker's info window is long pressed. void setOnMapClickListener ( GoogleMap.OnMapClickListener listener) Sets a callback that's invoked when the map is tapped. void setOnMapLoadedCallback ( GoogleMap.OnMapLoadedCallback callback) Sets a callback that's invoked when this map has finished rendering. void setOnMapLongClickListener ( GoogleMap.OnMapLongClickListener listener) Sets a callback that's invoked when the map is long pressed. void setOnMarkerClickListener ( GoogleMap.OnMarkerClickListener listener) Sets a callback that's invoked when a marker is clicked. void setOnMarkerDragListener ( GoogleMap.OnMarkerDragListener listener) Sets a callback that's invoked when a marker is dragged. void setOnMyLocationButtonClickListener ( GoogleMap.OnMyLocationButtonClickListener listener) Sets a callback that's invoked when the my location button is clicked. void setOnMyLocationChangeListener ( GoogleMap.OnMyLocationChangeListener listener) This method is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- View the code Show/Hide the Java code for the navigation activity. package com . example . navsdkcustomization ; import android.content.pm.PackageManager ; import android.graphics.Bitmap ; import android.graphics.BitmapFactory ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.model.BitmapDescriptorFactory ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.StylingOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.Waypoint ; / An activity that displays a map and a customized navigation UI . / public class NavigationActivityCustomization extends AppCompatActivity { private static final String TAG = NavigationActivityCustomization . class . getSimpleName (); private Navigator mNavigator ; private SupportNavigationFragment mNavFragment ; private GoogleMap mMap ; // Define the Sydney Opera House by specifying its place ID . private static final String SYDNEY OPERA HOUSE = "ChIJ3S-JXmauEmsRUcIaWtf4MzE" ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Starts the Navigation SDK and sets the camera to follow the device 's location.
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Send feedback Modify the navigation UI Stay organized with collections Save and categorize content based on your preferences.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- Prompt Visibility API (Experimental) Experimental feature The Prompt Visibility API lets you avoid conflicts between UI elements generated by the Navigation SDK and your own custom UI elements by adding a listener to receive a callback before a Navigation SDK UI element is about to appear and as soon as the element is removed.

### "Navigation SDK overview \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/overview](https://developers.google.com/maps/documentation/navigation/android-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Send feedback Navigation SDK overview Stay organized with collections Save and categorize content based on your preferences.
- For information on the maps API and functionality differences between the Maps SDK and the Navigation SDK, see the Overview page in the Reference section Navigation Experience : Add the navigation experience using the, which includes the turn-by-turn navigation overlay, turn cards, and additional UI elements.
- Integrating navigation into your app lets you provide a superior experience for your users, while applying your own branding and leveraging trip data: Control the end-to-end experience and increase engagement by keeping users within your app during navigation, eliminating the need to switch between apps.
- The Navigation SDK lets you create a comprehensive in-app navigation experience: Provide your users with a seamless and reliable turn-by-turn navigation experience powered by Google Maps.

### Customize map styles \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Send feedback Customize map styles Stay organized with collections Save and categorize content based on your preferences.
- For complete information about cloud-based map styling, see the Overview page in Maps SDK for Android documentation .
- Note: While it is technically possible to define separate styles for the navigation and road map types by associating separate styles with different map IDs, this implementation is not recommended because it requires reloading the map to load the different map ID.
- When you associate styles with maps in the Navigation SDK, the styles apply to both road and navigation maps: Light mode styles in the Cloud Console apply to both light mode road maps and daylight navigation maps.


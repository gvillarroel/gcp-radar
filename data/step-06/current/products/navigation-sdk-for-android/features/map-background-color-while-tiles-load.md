---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.688Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Map background color while tiles load"
feature_slug: "map-background-color-while-tiles-load"
latest_feature_date: "2023-07-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapClickListener"
keywords:
  - "map"
  - "background"
  - "color"
  - "while"
  - "tiles"
  - "load"
  - "googlemapoptions"
  - "supports"
---

# Map background color while tiles load

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

GoogleMapOptions supports setting the map background color while map tiles are loading.

## Extended Definition

GoogleMapOptions supports setting the map background color while map tiles are loading.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapClickListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapClickListener)

## Supporting Pages

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Replaced by setOnCameraMoveStartedListener(GoogleMap.OnCameraMoveStartedListener) , setOnCameraMoveListener(GoogleMap.OnCameraMoveListener) , setOnCameraMoveCanceledListener(GoogleMap.OnCameraMoveCanceledListener) and setOnCameraIdleListener(GoogleMap.OnCameraIdleListener) . void setOnCameraIdleListener ( GoogleMap.OnCameraIdleListener listener) Sets a callback that is invoked when camera movement has ended. void setOnCameraMoveCanceledListener ( GoogleMap.OnCameraMoveCanceledListener listener) Sets a callback that is invoked when camera motion is stopped or interrupted by a new type of animation. void setOnCameraMoveListener ( GoogleMap.OnCameraMoveListener listener) Sets a callback that is invoked repeatedly while the camera is in motion. void setOnCameraMoveStartedListener ( GoogleMap.OnCameraMoveStartedListener listener) Sets a callback that's invoked when the camera starts moving or the reason for camera motion has changed. void setOnCircleClickListener ( GoogleMap.OnCircleClickListener listener) Sets a callback that's invoked when a circle is clicked. void setOnFollowMyLocationCallback ( GoogleMap.OnCameraFollowLocationCallback callback) Sets a callback to get notified about the events related to the state of the camera when it's following user's location. void setOnGroundOverlayClickListener ( GoogleMap.OnGroundOverlayClickListener listener) Sets a callback that's invoked when a ground overlay is clicked. void setOnIndoorStateChangeListener ( GoogleMap.OnIndoorStateChangeListener listener) Sets or clears the listener for indoor events. void setOnInfoWindowClickListener ( GoogleMap.OnInfoWindowClickListener listener) Sets a callback that's invoked when a marker info window is clicked. void setOnInfoWindowCloseListener ( GoogleMap.OnInfoWindowCloseListener listener) Sets a callback that's invoked when a marker's info window is closed. void setOnInfoWindowLongClickListener ( GoogleMap.OnInfoWindowLongClickListener listener) Sets a callback that's invoked when a marker's info window is long pressed. void setOnMapClickListener ( GoogleMap.OnMapClickListener listener) Sets a callback that's invoked when the map is tapped. void setOnMapLoadedCallback ( GoogleMap.OnMapLoadedCallback callback) Sets a callback that's invoked when this map has finished rendering. void setOnMapLongClickListener ( GoogleMap.OnMapLongClickListener listener) Sets a callback that's invoked when the map is long pressed. void setOnMarkerClickListener ( GoogleMap.OnMarkerClickListener listener) Sets a callback that's invoked when a marker is clicked. void setOnMarkerDragListener ( GoogleMap.OnMarkerDragListener listener) Sets a callback that's invoked when a marker is dragged. void setOnMyLocationButtonClickListener ( GoogleMap.OnMyLocationButtonClickListener listener) Sets a callback that's invoked when the my location button is clicked. void setOnMyLocationChangeListener ( GoogleMap.OnMyLocationChangeListener listener) This method is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- UiSettings getUiSettings () Gets the user interface settings for the map. boolean isBuildingsEnabled () Returns whether 3D buildings layer is enabled. boolean isCameraFollowingMyLocation () Returns whether the camera is following current location or not. boolean isIndoorEnabled () Gets whether indoor maps are currently enabled. boolean isMyLocationEnabled () Gets the status of the my-location layer. boolean isTrafficEnabled () Checks whether the map is drawing traffic data. boolean isTransitEnabled () Checks whether the map is drawing transit data. void moveCamera ( CameraUpdate update) Repositions the camera according to the instructions defined in the update. void removeOnMapCapabilitiesChangedListener ( GoogleMap.OnMapCapabilitiesChangedListener listener) Removes a listener that's invoked when the map capabilities are changed. void resetMinMaxZoomPreference () Removes any previously specified upper and lower zoom bounds. void setBuildingsEnabled (boolean enabled) Turns the 3D buildings layer on or off. void setContentDescription (String description) Sets a contentDescription for the map. boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled. void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows. void setLatLngBoundsForCameraTarget ( LatLngBounds bounds) Specifies a LatLngBounds to constrain the camera target, so that when users scroll and pan the map, the camera target does not move outside these bounds. void setLocationSource ( LocationSource source) Replaces the location source of the my-location layer. void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization. boolean setMapStyle ( MapStyleOptions style) Sets the styling of the base map. void setMapType (int type) Sets the type of map tiles that should be displayed. void setMaxZoomPreference (float maxZoomPreference) Sets a preferred upper bound for the camera zoom. void setMinZoomPreference (float minZoomPreference) Sets a preferred lower bound for the camera zoom. void setMyLocationEnabled (boolean enabled) Enables or disables the my-location layer. void setOnCameraChangeListener ( GoogleMap.OnCameraChangeListener listener) This method is deprecated.
- Reinitialize via GoogleMapOptions.mapColorScheme(int) or setMapColorScheme(int) .
- The order in which the deprecated onCameraChange method will be called in relation to the methods in the new camera change listeners is undefined. interface GoogleMap.OnCameraFollowLocationCallback Callback interface to get updates related to camera entering or exiting follow mode. interface GoogleMap.OnCameraIdleListener Callback interface for when camera movement has ended. interface GoogleMap.OnCameraMoveCanceledListener Callback interface for when the camera's motion has been stopped or when the camera starts moving for a new reason. interface GoogleMap.OnCameraMoveListener Callback interface for when the camera changes position. interface GoogleMap.OnCameraMoveStartedListener Callback interface for when the camera motion starts. interface GoogleMap.OnCircleClickListener Callback interface for when a circle is clicked. interface GoogleMap.OnGroundOverlayClickListener Callback interface for when a ground overlay is clicked. interface GoogleMap.OnIndoorStateChangeListener A listener for when the indoor state changes. interface GoogleMap.OnInfoWindowClickListener Callback interface for click/tap events on a marker's info window. interface GoogleMap.OnInfoWindowCloseListener Callback interface for close events on a marker's info window. interface GoogleMap.OnInfoWindowLongClickListener Callback interface for when the user long presses on a marker's info window. interface GoogleMap.OnMapCapabilitiesChangedListener Listener interface for when the map capabilities are changed. interface GoogleMap.OnMapClickListener Callback interface for when the user taps on the map. interface GoogleMap.OnMapLoadedCallback Callback interface for when the map has finished rendering. interface GoogleMap.OnMapLongClickListener Callback interface for when the user long presses on the map. interface GoogleMap.OnMarkerClickListener Defines signatures for methods that are called when a marker is clicked or tapped. interface GoogleMap.OnMarkerDragListener Callback interface for drag events on markers. interface GoogleMap.OnMyLocationButtonClickListener Callback interface for when the My Location button is clicked. interface GoogleMap.OnMyLocationChangeListener This interface is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.

### Customize map styles \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-map-styles)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: While it is technically possible to define separate styles for the navigation and road map types by associating separate styles with different map IDs, this implementation is not recommended because it requires reloading the map to load the different map ID.
- Apply map styles Once you have map styles associated with a map ID, you can add the ID through a <fragment> element in the activity's layout file, by using the MapView class, or by using the GoogleMapOptions class on a MapFragment , SupportMapFragment , or SupportNavigationFragment instance.
- In particular, you must not remove road networks from the navigation map or significantly reduce color contrast of map features on the navigation map.
- Paid feature: Features accessed by adding a map ID triggers a map load charged against the Dynamic Maps SKU for Android and iOS.

### "GoogleMap.OnMapCapabilitiesChangedListener \_|\_ Navigation SDK for Android\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The onMapCapabilitiesChanged method is called when map capabilities are updated, providing information about the available capabilities. public static interface GoogleMap.OnMapCapabilitiesChangedListener Listener interface for when the map capabilities are changed.
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Reference Send feedback GoogleMap.OnMapCapabilitiesChangedListener Stay organized with collections Save and categorize content based on your preferences.
- Public Method Summary abstract void onMapCapabilitiesChanged ( MapCapabilities availableCapabilities) Called when map capabilities are changed.
- Public Methods public abstract void onMapCapabilitiesChanged ( MapCapabilities availableCapabilities) Called when map capabilities are changed.

### "GoogleMap.OnMapClickListener \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapClickListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapClickListener)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag GoogleMap.OnMapClickListener is an interface to handle user tap interactions on a Google Map. onMapClick() method within this interface is triggered when a user taps on the map, provided no overlays have already handled the event.
- This method provides the geographical coordinates ( LatLng ) of the tapped point and is executed on the Android UI thread. public static interface GoogleMap.OnMapClickListener Callback interface for when the user taps on the map.
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Reference Send feedback GoogleMap.OnMapClickListener Stay organized with collections Save and categorize content based on your preferences.
- Public Method Summary abstract void onMapClick ( LatLng point) Called when the user makes a tap gesture on the map, but only if none of the overlays of the map handled the gesture.


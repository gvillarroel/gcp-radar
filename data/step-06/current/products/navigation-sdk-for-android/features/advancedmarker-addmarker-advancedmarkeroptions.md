---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.687Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "AdvancedMarker.addMarker(AdvancedMarkerOptions)"
feature_slug: "advancedmarker-addmarker-advancedmarkeroptions"
latest_feature_date: "2023-11-02"
deprecation_date: "2023-11-02"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraChangeListener"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveCanceledListener"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener"
keywords:
  - "advancedmarker"
  - "addmarker"
  - "advancedmarkeroptions"
  - "the"
  - "method"
  - "added"
  - "an"
  - "advanced"
---

# AdvancedMarker.addMarker(AdvancedMarkerOptions)

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The AdvancedMarker addMarker(AdvancedMarkerOptions) method added an advanced marker to the map; deprecated on 2023-11-02.

## Extended Definition

The AdvancedMarker addMarker(AdvancedMarkerOptions) method added an advanced marker to the map; deprecated on 2023-11-02.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraChangeListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraChangeListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveCanceledListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveCanceledListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener)

## Supporting Pages

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- If an AdvancedMarkerOptions is passed to this method then an AdvancedMarker will be created and returned as a Marker.
- You cannot instantiate a GoogleMap object directly, rather, you must obtain one from the getMapAsync() method on a MapFragment or MapView that you have added to your application.
- Replaced by setOnCameraMoveStartedListener(GoogleMap.OnCameraMoveStartedListener) , setOnCameraMoveListener(GoogleMap.OnCameraMoveListener) , setOnCameraMoveCanceledListener(GoogleMap.OnCameraMoveCanceledListener) and setOnCameraIdleListener(GoogleMap.OnCameraIdleListener) . void setOnCameraIdleListener ( GoogleMap.OnCameraIdleListener listener) Sets a callback that is invoked when camera movement has ended. void setOnCameraMoveCanceledListener ( GoogleMap.OnCameraMoveCanceledListener listener) Sets a callback that is invoked when camera motion is stopped or interrupted by a new type of animation. void setOnCameraMoveListener ( GoogleMap.OnCameraMoveListener listener) Sets a callback that is invoked repeatedly while the camera is in motion. void setOnCameraMoveStartedListener ( GoogleMap.OnCameraMoveStartedListener listener) Sets a callback that's invoked when the camera starts moving or the reason for camera motion has changed. void setOnCircleClickListener ( GoogleMap.OnCircleClickListener listener) Sets a callback that's invoked when a circle is clicked. void setOnFollowMyLocationCallback ( GoogleMap.OnCameraFollowLocationCallback callback) Sets a callback to get notified about the events related to the state of the camera when it's following user's location. void setOnGroundOverlayClickListener ( GoogleMap.OnGroundOverlayClickListener listener) Sets a callback that's invoked when a ground overlay is clicked. void setOnIndoorStateChangeListener ( GoogleMap.OnIndoorStateChangeListener listener) Sets or clears the listener for indoor events. void setOnInfoWindowClickListener ( GoogleMap.OnInfoWindowClickListener listener) Sets a callback that's invoked when a marker info window is clicked. void setOnInfoWindowCloseListener ( GoogleMap.OnInfoWindowCloseListener listener) Sets a callback that's invoked when a marker's info window is closed. void setOnInfoWindowLongClickListener ( GoogleMap.OnInfoWindowLongClickListener listener) Sets a callback that's invoked when a marker's info window is long pressed. void setOnMapClickListener ( GoogleMap.OnMapClickListener listener) Sets a callback that's invoked when the map is tapped. void setOnMapLoadedCallback ( GoogleMap.OnMapLoadedCallback callback) Sets a callback that's invoked when this map has finished rendering. void setOnMapLongClickListener ( GoogleMap.OnMapLongClickListener listener) Sets a callback that's invoked when the map is long pressed. void setOnMarkerClickListener ( GoogleMap.OnMarkerClickListener listener) Sets a callback that's invoked when a marker is clicked. void setOnMarkerDragListener ( GoogleMap.OnMarkerDragListener listener) Sets a callback that's invoked when a marker is dragged. void setOnMyLocationButtonClickListener ( GoogleMap.OnMyLocationButtonClickListener listener) Sets a callback that's invoked when the my location button is clicked. void setOnMyLocationChangeListener ( GoogleMap.OnMyLocationChangeListener listener) This method is deprecated. use RoadSnappedLocationProvider or com.google.android.gms.location.FusedLocationProviderApi instead, depending on your needs.
- UiSettings getUiSettings () Gets the user interface settings for the map. boolean isBuildingsEnabled () Returns whether 3D buildings layer is enabled. boolean isCameraFollowingMyLocation () Returns whether the camera is following current location or not. boolean isIndoorEnabled () Gets whether indoor maps are currently enabled. boolean isMyLocationEnabled () Gets the status of the my-location layer. boolean isTrafficEnabled () Checks whether the map is drawing traffic data. boolean isTransitEnabled () Checks whether the map is drawing transit data. void moveCamera ( CameraUpdate update) Repositions the camera according to the instructions defined in the update. void removeOnMapCapabilitiesChangedListener ( GoogleMap.OnMapCapabilitiesChangedListener listener) Removes a listener that's invoked when the map capabilities are changed. void resetMinMaxZoomPreference () Removes any previously specified upper and lower zoom bounds. void setBuildingsEnabled (boolean enabled) Turns the 3D buildings layer on or off. void setContentDescription (String description) Sets a contentDescription for the map. boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled. void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows. void setLatLngBoundsForCameraTarget ( LatLngBounds bounds) Specifies a LatLngBounds to constrain the camera target, so that when users scroll and pan the map, the camera target does not move outside these bounds. void setLocationSource ( LocationSource source) Replaces the location source of the my-location layer. void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization. boolean setMapStyle ( MapStyleOptions style) Sets the styling of the base map. void setMapType (int type) Sets the type of map tiles that should be displayed. void setMaxZoomPreference (float maxZoomPreference) Sets a preferred upper bound for the camera zoom. void setMinZoomPreference (float minZoomPreference) Sets a preferred lower bound for the camera zoom. void setMyLocationEnabled (boolean enabled) Enables or disables the my-location layer. void setOnCameraChangeListener ( GoogleMap.OnCameraChangeListener listener) This method is deprecated.

### "GoogleMap.OnCameraChangeListener \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraChangeListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraChangeListener)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The order in which the deprecated onCameraChange method will be called in relation to the methods in the new camera change listeners is undefined.
- The onCameraChange method was called after a camera position change, potentially skipping intermediate positions during animations.
- Public Method Summary abstract void onCameraChange ( CameraPosition position) Called after the camera position has changed.
- Public Methods public abstract void onCameraChange ( CameraPosition position) Called after the camera position has changed.

### "GoogleMap.OnCameraMoveCanceledListener \_|\_ Navigation SDK for Android\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveCanceledListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveCanceledListener)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Developers should avoid updating or animating the camera within the onCameraMoveCanceled() method as it's called on the Android UI thread. public static interface GoogleMap.OnCameraMoveCanceledListener Callback interface for when the camera's motion has been stopped or when the camera starts moving for a new reason.
- Public Method Summary abstract void onCameraMoveCanceled () Called when the developer explicitly calls the GoogleMap.stopAnimation() method or if the reason for camera motion has changed before the onCameraIdle had a chance to fire after the previous animation.
- Public Methods public abstract void onCameraMoveCanceled () Called when the developer explicitly calls the GoogleMap.stopAnimation() method or if the reason for camera motion has changed before the onCameraIdle had a chance to fire after the previous animation.
- The onCameraMoveCanceled() method is called when GoogleMap.stopAnimation() is explicitly called or when the camera starts moving for a new reason before the previous animation finishes.

### "GoogleMap.OnIndoorStateChangeListener \_|\_ Navigation SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The focused building is not referenced as a parameter of this method due to synchronization issues: if multiple focus requests are handled, listeners may be notified out-of-order, so should rely on getFocusedBuilding() itself to provide the most up-to-date information.
- These methods are only called after the relevant building data becomes available, ensuring accurate information is provided to the listener. public static interface GoogleMap.OnIndoorStateChangeListener A listener for when the indoor state changes.
- It provides two methods: onIndoorBuildingFocused() which is triggered when the focused building on the map changes, and onIndoorLevelActivated() which is called when the active level within a building changes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]


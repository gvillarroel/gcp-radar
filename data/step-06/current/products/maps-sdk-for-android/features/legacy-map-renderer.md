---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:13.725Z"
product_name: "Maps SDK for Android"
product_slug: "maps-sdk-for-android"
feature_name: "Legacy map renderer"
feature_slug: "legacy-map-renderer"
latest_feature_date: "2024-06-25"
deprecation_date: "2024-06-25"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start"
  - "https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles"
keywords:
  - "legacy"
  - "map"
  - "renderer"
  - "mapsinitializer"
  - "option"
  - "deprecated"
  - "maps"
  - "sdk"
---

# Legacy map renderer

Product: Maps SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The MapsInitializer.Renderer.LEGACY option is deprecated in Maps SDK for Android v19.0.0 in favor of the latest map renderer; deprecated on 2024-06-25.

## Extended Definition

The MapsInitializer.Renderer.LEGACY option is deprecated in Maps SDK for Android v19.0.0 in favor of the latest map renderer; deprecated on 2024-06-25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start](https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start)
- [https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles](https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles)

## Supporting Pages

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UiSettings getUiSettings () Gets the user interface settings for the map. boolean isBuildingsEnabled () Returns whether 3D buildings layer is enabled. boolean isCameraFollowingMyLocation () Returns whether the camera is following current location or not. boolean isIndoorEnabled () Gets whether indoor maps are currently enabled. boolean isMyLocationEnabled () Gets the status of the my-location layer. boolean isTrafficEnabled () Checks whether the map is drawing traffic data. boolean isTransitEnabled () Checks whether the map is drawing transit data. void moveCamera ( CameraUpdate update) Repositions the camera according to the instructions defined in the update. void removeOnMapCapabilitiesChangedListener ( GoogleMap.OnMapCapabilitiesChangedListener listener) Removes a listener that's invoked when the map capabilities are changed. void resetMinMaxZoomPreference () Removes any previously specified upper and lower zoom bounds. void setBuildingsEnabled (boolean enabled) Turns the 3D buildings layer on or off. void setContentDescription (String description) Sets a contentDescription for the map. boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled. void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows. void setLatLngBoundsForCameraTarget ( LatLngBounds bounds) Specifies a LatLngBounds to constrain the camera target, so that when users scroll and pan the map, the camera target does not move outside these bounds. void setLocationSource ( LocationSource source) Replaces the location source of the my-location layer. void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization. boolean setMapStyle ( MapStyleOptions style) Sets the styling of the base map. void setMapType (int type) Sets the type of map tiles that should be displayed. void setMaxZoomPreference (float maxZoomPreference) Sets a preferred upper bound for the camera zoom. void setMinZoomPreference (float minZoomPreference) Sets a preferred lower bound for the camera zoom. void setMyLocationEnabled (boolean enabled) Enables or disables the my-location layer. void setOnCameraChangeListener ( GoogleMap.OnCameraChangeListener listener) This method is deprecated.
- Constant Summary String DEMO MAP ID Data-driven styling features are not available in the Navigation SDK. int MAP TYPE HYBRID Satellite maps with a transparent layer of major streets. int MAP TYPE NONE No base map tiles. int MAP TYPE NORMAL Basic maps. int MAP TYPE SATELLITE Satellite maps with no labels. int MAP TYPE TERRAIN This constant is deprecated.
- Parameters style Returns true if the style was successfully parsed; false if problems were detected with the MapStyleOptions , including, e.g. unparsable styling JSON, unrecognized feature type, unrecognized element type, or invalid styler keys.
- Returns whether it was possible to enable indoor maps. public void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows.

### Get started \_|\_ Maps SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start](https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start)
- Source ID: `site-docs-reference-required-2`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- With the release of version 18.2.0 of the Maps SDK for Android, Google switched the default renderer from the legacy renderer to the upgraded map renderer.
- Page Summary outlined flag Advanced markers necessitate the utilization of the upgraded map renderer, available in Maps SDK for Android version 18.0.0 and later, and are enabled by default in version 18.2.0 and later.
- Enable the new map renderer An upgraded map renderer is available as of version 18.0.0 of the Maps SDK for Android.
- This renderer brings many improvements, including support for Cloud-based maps styling, to Maps SDK for Android.

### Create and use map styles \_|\_ Maps SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles](https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles)
- Source ID: `site-docs-reference-required-2`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Web Service To use cloud-based maps styling on Android, you must use the latest renderer for Maps SDK for Android.
- Page Summary outlined flag Cloud-based map styling requires the latest Maps SDK for Android renderer for implementation.
- In the Make a copy dialog, enter a new map style name and optionally a description. science (Optional) To create the complementary light or dark mode version of the copied style, select the checkbox in the Style mode options section.
- Home Products Google Maps Platform Documentation Android Maps SDK for Android Guides Send feedback Create and use map styles Stay organized with collections Save and categorize content based on your preferences.


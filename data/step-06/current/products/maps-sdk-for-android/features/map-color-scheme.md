---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:13.725Z"
product_name: "Maps SDK for Android"
product_slug: "maps-sdk-for-android"
feature_name: "Map color scheme"
feature_slug: "map-color-scheme"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/android-sdk/cloud-customization/tut"
  - "https://developers.google.com/maps/documentation/android-sdk/cloud-customization/modes-and-types"
keywords:
  - "map"
  - "color"
  - "scheme"
  - "can"
  - "set"
  - "dark"
  - "light"
  - "system"
---

# Map color scheme

Product: Maps SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The map color scheme can be set to dark, light, or system settings.

## Extended Definition

The map color scheme can be set to dark, light, or system settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/android-sdk/cloud-customization/tut](https://developers.google.com/maps/documentation/android-sdk/cloud-customization/tut)
- [https://developers.google.com/maps/documentation/android-sdk/cloud-customization/modes-and-types](https://developers.google.com/maps/documentation/android-sdk/cloud-customization/modes-and-types)

## Supporting Pages

### "Tutorial - Highlight a road network \_|\_ Maps SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/android-sdk/cloud-customization/tut](https://developers.google.com/maps/documentation/android-sdk/cloud-customization/tut)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation Android Maps SDK for Android Guides Send feedback Tutorial - Highlight a road network Stay organized with collections Save and categorize content based on your preferences.
- This tutorial walks you through the steps to create and use a light mode map style that highlights the road network: Create and publish a map style so it's available to use.
- If you don't select a dark style, or have not created any dark mode map styles, your app uses the Google default dark map style.
- Note: To assign a custom dark mode map style, first you must create a new style and select Dark or make a copy .

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UiSettings getUiSettings () Gets the user interface settings for the map. boolean isBuildingsEnabled () Returns whether 3D buildings layer is enabled. boolean isCameraFollowingMyLocation () Returns whether the camera is following current location or not. boolean isIndoorEnabled () Gets whether indoor maps are currently enabled. boolean isMyLocationEnabled () Gets the status of the my-location layer. boolean isTrafficEnabled () Checks whether the map is drawing traffic data. boolean isTransitEnabled () Checks whether the map is drawing transit data. void moveCamera ( CameraUpdate update) Repositions the camera according to the instructions defined in the update. void removeOnMapCapabilitiesChangedListener ( GoogleMap.OnMapCapabilitiesChangedListener listener) Removes a listener that's invoked when the map capabilities are changed. void resetMinMaxZoomPreference () Removes any previously specified upper and lower zoom bounds. void setBuildingsEnabled (boolean enabled) Turns the 3D buildings layer on or off. void setContentDescription (String description) Sets a contentDescription for the map. boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled. void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows. void setLatLngBoundsForCameraTarget ( LatLngBounds bounds) Specifies a LatLngBounds to constrain the camera target, so that when users scroll and pan the map, the camera target does not move outside these bounds. void setLocationSource ( LocationSource source) Replaces the location source of the my-location layer. void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization. boolean setMapStyle ( MapStyleOptions style) Sets the styling of the base map. void setMapType (int type) Sets the type of map tiles that should be displayed. void setMaxZoomPreference (float maxZoomPreference) Sets a preferred upper bound for the camera zoom. void setMinZoomPreference (float minZoomPreference) Sets a preferred lower bound for the camera zoom. void setMyLocationEnabled (boolean enabled) Enables or disables the my-location layer. void setOnCameraChangeListener ( GoogleMap.OnCameraChangeListener listener) This method is deprecated.
- Set to null to use the default location source. public void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization.
- MapCapabilities getMapCapabilities () Returns the mapCapabilities instance. int getMapColorScheme () Returns the MapColorScheme int that the map is currently rendering. int getMapType () Gets the type of map that's currently displayed. float getMaxZoomLevel () Returns the maximum zoom level for the current camera position. float getMinZoomLevel () Returns the minimum zoom level.
- This method exists here only for compile-time compatibility with com.google.android.gms:play-services-maps . public int getMapColorScheme () Returns the MapColorScheme int that the map is currently rendering. public int getMapType () Gets the type of map that's currently displayed.

### "Learn about modes and map types \_|\_ Maps SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/android-sdk/cloud-customization/modes-and-types](https://developers.google.com/maps/documentation/android-sdk/cloud-customization/modes-and-types)
- Source ID: `site-docs-reference-required-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apply your custom styles to multiple map types In the map details page, after you associate your light and dark mode styles to your map ID , click expand more Show more to choose whether to apply your custom styles to multiple map types.
- This document describes the conceptual relationship between custom styles and light and dark modes and defines the different map types and how to apply your styles to them.
- Vector and raster Light and dark mode hybrid A combination of satellite imagery and roadmap data, displaying street names and other key features overlaid on the imagery.
- Map details page: In the Map preview section, you can switch between light and dark mode styles and change the variant in the drop-down list to different map types.


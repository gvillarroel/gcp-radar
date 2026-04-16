---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:13.725Z"
product_name: "Maps SDK for Android"
product_slug: "maps-sdk-for-android"
feature_name: "Default map colors"
feature_slug: "default-map-colors"
latest_feature_date: "2024-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/android-sdk/cloud-customization"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview"
keywords:
  - "default"
  - "map"
  - "colors"
  - "sdk"
  - "updated"
  - "match"
  - "newer"
  - "maps"
---

# Default map colors

Product: Maps SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The SDK updated the default map colors to match the newer Google Maps app color palette.

## Extended Definition

The SDK updated the default map colors to match the newer Google Maps app color palette.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/android-sdk/cloud-customization](https://developers.google.com/maps/documentation/android-sdk/cloud-customization)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview](https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview)

## Supporting Pages

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- UiSettings getUiSettings () Gets the user interface settings for the map. boolean isBuildingsEnabled () Returns whether 3D buildings layer is enabled. boolean isCameraFollowingMyLocation () Returns whether the camera is following current location or not. boolean isIndoorEnabled () Gets whether indoor maps are currently enabled. boolean isMyLocationEnabled () Gets the status of the my-location layer. boolean isTrafficEnabled () Checks whether the map is drawing traffic data. boolean isTransitEnabled () Checks whether the map is drawing transit data. void moveCamera ( CameraUpdate update) Repositions the camera according to the instructions defined in the update. void removeOnMapCapabilitiesChangedListener ( GoogleMap.OnMapCapabilitiesChangedListener listener) Removes a listener that's invoked when the map capabilities are changed. void resetMinMaxZoomPreference () Removes any previously specified upper and lower zoom bounds. void setBuildingsEnabled (boolean enabled) Turns the 3D buildings layer on or off. void setContentDescription (String description) Sets a contentDescription for the map. boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled. void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows. void setLatLngBoundsForCameraTarget ( LatLngBounds bounds) Specifies a LatLngBounds to constrain the camera target, so that when users scroll and pan the map, the camera target does not move outside these bounds. void setLocationSource ( LocationSource source) Replaces the location source of the my-location layer. void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization. boolean setMapStyle ( MapStyleOptions style) Sets the styling of the base map. void setMapType (int type) Sets the type of map tiles that should be displayed. void setMaxZoomPreference (float maxZoomPreference) Sets a preferred upper bound for the camera zoom. void setMinZoomPreference (float minZoomPreference) Sets a preferred lower bound for the camera zoom. void setMyLocationEnabled (boolean enabled) Enables or disables the my-location layer. void setOnCameraChangeListener ( GoogleMap.OnCameraChangeListener listener) This method is deprecated.
- This method exists here only for compile-time compatibility with com.google.android.gms:play-services-maps . public int getMapColorScheme () Returns the MapColorScheme int that the map is currently rendering. public int getMapType () Gets the type of map that's currently displayed.
- Set to null to use the default location source. public void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization.
- The default value is "Google Map" Parameters description a string to use as a description. public boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled.

### "Cloud-based maps styling overview \_|\_ Maps SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/android-sdk/cloud-customization](https://developers.google.com/maps/documentation/android-sdk/cloud-customization)
- Source ID: `site-docs-reference-required-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Cloud-based map styling allows customization of the default roadmap view across Android, iOS, and JavaScript applications through the Google Cloud Console.
- What can you do with cloud-based maps styling You can do the following with cloud-based maps styling: Use a no-code style editor : A designer can create and preview a style to match your goals and branding without needing to code.
- Page Summary outlined flag Cloud-based maps styling allows you to customize the appearance of your Google Maps by changing colors, visibility, and POI density without updating your app's code.
- With the Google Maps Platform cloud-based maps styling in the Google Cloud console, you can select colors and set visibility for features.

### Overview \_|\_ Maps SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview](https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview)
- Source ID: `site-docs-reference-required-2`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Advanced markers enable highly customizable and performant markers on maps.
- Users can personalize the default marker's background, border, and glyph colors, or substitute it with a custom graphic image or an Android View.
- With advanced markers, all the existing Marker properties are customizable, including: The title and snippet fields Click events Drag events Advanced markers add the following additional features: Customize colored pins Set any Android View as the marker Control collision behavior Customize marker properties Customize the default marker's background, glyph, and border color.
- Page Summary outlined flag Advanced markers allow you to create highly performant and customizable markers, offering control over background, border, glyph color, and the ability to replace the default icon with custom graphics.


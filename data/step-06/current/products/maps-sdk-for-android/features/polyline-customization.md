---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:13.727Z"
product_name: "Maps SDK for Android"
product_slug: "maps-sdk-for-android"
feature_name: "Polyline customization"
feature_slug: "polyline-customization"
latest_feature_date: "2022-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/android-sdk/cloud-customization/taxonomy"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/android-sdk/cloud-customization"
keywords:
  - "polyline"
  - "customization"
  - "adds"
  - "advanced"
  - "controls"
  - "styling"
  - "polylines"
---

# Polyline customization

Product: Maps SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Polyline customization adds advanced controls for styling polylines.

## Extended Definition

Polyline customization adds advanced controls for styling polylines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/android-sdk/cloud-customization/taxonomy](https://developers.google.com/maps/documentation/android-sdk/cloud-customization/taxonomy)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/android-sdk/cloud-customization](https://developers.google.com/maps/documentation/android-sdk/cloud-customization)

## Supporting Pages

### "What you can style on the map \_|\_ Maps SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/android-sdk/cloud-customization/taxonomy](https://developers.google.com/maps/documentation/android-sdk/cloud-customization/taxonomy)
- Source ID: `site-docs-root`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Polygon styling customization example - for Reservation feature type Polyline styling customization example - for Highway feature type Stroke color and Stroke width customizations are not available for the following map features: Political map features: Their style conveys meaning on the map, such as indicating the type of territory.
- Polygons and Polylines For map feature types that are represented with a shape, such as Beach, Country, and Town square, or a line, such as Railway track, Highway, and Trail, you can typically style the following elements: Visibility, Fill color, Stroke color, and Stroke width.
- Label text and icon styling customizations example Map feature hierarchy These tables for the top level map features show what child map features are available under each.
- Stroke width : Thickness of the outline for polygons and polylines.

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TileOverlay addTileOverlay ( TileOverlayOptions options) Adds a tile overlay to this map. void animateCamera ( CameraUpdate update, GoogleMap.CancelableCallback callback) Animates the movement of the camera from the current position to the position defined in the update and calls an optional callback on completion. void animateCamera ( CameraUpdate update) Animates the movement of the camera from the current position to the position defined in the update. void animateCamera ( CameraUpdate update, int durationMs, GoogleMap.CancelableCallback callback) Moves the map according to the update with an animation over a specified duration, and calls an optional callback on completion. void clear () Removes all markers, polylines, polygons, overlays, etc from the map. void followMyLocation (int perspective, FollowMyLocationOptions options) Sets the Camera to follow the location of the user, using the given options . void followMyLocation (int perspective) Sets the Camera to follow the location of the user.
- If a callback isn't required, leave it as null . public void clear () Removes all markers, polylines, polygons, overlays, etc from the map. public void followMyLocation (int perspective, FollowMyLocationOptions options) Sets the Camera to follow the location of the user, using the given options .
- Returns The Polyline object that was added to the map. public TileOverlay addTileOverlay ( TileOverlayOptions options) Adds a tile overlay to this map.
- Returns The Polygon object that is added to the map. public Polyline addPolyline ( PolylineOptions options) Adds a polyline to this map.

### "Cloud-based maps styling overview \_|\_ Maps SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/android-sdk/cloud-customization](https://developers.google.com/maps/documentation/android-sdk/cloud-customization)
- Source ID: `site-docs-reference-required-2`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Cloud-based map styling allows customization of the default roadmap view across Android, iOS, and JavaScript applications through the Google Cloud Console.
- Cloud-based maps styling supports customization of a wide range of map features, including roads, buildings, points of interest, and transit routes, offering extensive flexibility in map design.
- Why use cloud-based maps styling With cloud-based maps styling, you can create more engaging and informative maps and update them without code changes: More map features : Customize almost 100 individual map features, in four categories.
- What can you do with cloud-based maps styling You can do the following with cloud-based maps styling: Use a no-code style editor : A designer can create and preview a style to match your goals and branding without needing to code.


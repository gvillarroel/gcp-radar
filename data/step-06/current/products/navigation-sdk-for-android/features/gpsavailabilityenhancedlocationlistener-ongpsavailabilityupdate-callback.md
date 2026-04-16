---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.674Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "GpsAvailabilityEnhancedLocationListener.onGpsAvailabilityUpdate callback"
feature_slug: "gpsavailabilityenhancedlocationlistener-ongpsavailabilityupdate-callback"
latest_feature_date: "2025-10-16"
deprecation_date: "2025-10-16"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowCloseListener"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowClickListener"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener"
keywords:
  - "gpsavailabilityenhancedlocationlistener"
  - "ongpsavailabilityupdate"
  - "callback"
  - "the"
  - "in"
  - "is"
  - "deprecated"
  - "favor"
---

# GpsAvailabilityEnhancedLocationListener.onGpsAvailabilityUpdate callback

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The onGpsAvailabilityUpdate callback in GpsAvailabilityEnhancedLocationListener is deprecated in favor of onGpsAvailabilityChange; deprecated on 2025-10-16.

## Extended Definition

The onGpsAvailabilityUpdate callback in GpsAvailabilityEnhancedLocationListener is deprecated in favor of onGpsAvailabilityChange; deprecated on 2025-10-16.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowCloseListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowCloseListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowClickListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowClickListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener)

## Supporting Pages

### "GoogleMap.OnInfoWindowCloseListener \_|\_ Navigation SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowCloseListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowCloseListener)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This interface is crucial for responding to info window closures and performing actions based on user interactions with markers on the map. public static interface GoogleMap.OnInfoWindowCloseListener Callback interface for close events on a marker's info window.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- Page Summary outlined flag GoogleMap.OnInfoWindowCloseListener is a callback interface used for handling events when a marker's info window is closed on a Google Map.
- The onInfoWindowClose() method is triggered when a marker's info window is closed, providing the associated Marker object.

### "GoogleMap.OnInfoWindowClickListener \_|\_ Navigation SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowClickListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowClickListener)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The onInfoWindowClick method provides the clicked Marker object as a parameter and executes on the Android UI thread. public static interface GoogleMap.OnInfoWindowClickListener Callback interface for click/tap events on a marker's info window.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- Public Method Summary abstract void onInfoWindowClick ( Marker marker) Called when the marker's info window is clicked.
- Public Methods public abstract void onInfoWindowClick ( Marker marker) Called when the marker's info window is clicked.

### "GoogleMap.OnInfoWindowLongClickListener \_|\_ Navigation SDK for Android\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This interaction is handled on the Android UI thread for immediate response. public static interface GoogleMap.OnInfoWindowLongClickListener Callback interface for when the user long presses on a marker's info window.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- The onInfoWindowLongClick method is triggered when a user long presses on an info window, providing access to the associated marker.
- Parameters marker The marker to which the info window is anchored.

### "GoogleMap.OnIndoorStateChangeListener \_|\_ Navigation SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnIndoorStateChangeListener)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When that level changes, this callback will be triggered regardless of whether the building is focused or not.
- This callback is called when the focused building changes.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- Public Method Summary abstract void onIndoorBuildingFocused () The map maintains a notion of focused building , which is the building currently centered in the viewport or otherwise selected by the user through the UI or the location provider. abstract void onIndoorLevelActivated ( IndoorBuilding building) The map keeps track of the active level for each building which has been visited or otherwise had a level selected.


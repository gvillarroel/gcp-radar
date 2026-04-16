---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:13.723Z"
product_name: "Maps SDK for Android"
product_slug: "maps-sdk-for-android"
feature_name: "Data-driven styling for boundaries"
feature_slug: "data-driven-styling-for-boundaries"
latest_feature_date: "2024-07-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/android-sdk/cloud-customization"
keywords:
  - "driven"
  - "styling"
  - "boundaries"
  - "lets"
  - "you"
  - "access"
  - "provided"
  - "administrative"
---

# Data-driven styling for boundaries

Product: Maps SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Data-driven styling for boundaries lets you access Google-provided administrative boundary polygons, style them, and display them on your maps.

## Extended Definition

Data-driven styling for boundaries lets you access Google-provided administrative boundary polygons, style them, and display them on your maps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles](https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/android-sdk/cloud-customization](https://developers.google.com/maps/documentation/android-sdk/cloud-customization)

## Supporting Pages

### Create and use map styles \_|\_ Maps SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles](https://developers.google.com/maps/documentation/android-sdk/cloud-customization/map-styles)
- Source ID: `site-docs-reference-required-2`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use data-driven styling and datasets In the style details page, you can enable and view layers for data-driven styling for boundaries and data-driven styling for datasets on light mode styles.
- To use data-driven styling or datasets with a science dark mode style, you must do the following in the Google Cloud console: Go to Map Styles and either select a light mode style or create one .
- When you link a light mode style that has data-driven styling or datasets enabled to a map ID , the enabled layers are also available for the science dark mode style.
- Select platform: Android iOS JavaScript Web Service To use cloud-based maps styling on Android, you must use the latest renderer for Maps SDK for Android.

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Inherited Method Summary From class java.lang.Object boolean equals (Object arg0) final Class<?> getClass () int hashCode () final void notify () final void notifyAll () String toString () final void wait (long arg0, int arg1) final void wait (long arg0) final void wait () Constants public static final String DEMO MAP ID Data-driven styling features are not available in the Navigation SDK.
- Constant Summary String DEMO MAP ID Data-driven styling features are not available in the Navigation SDK. int MAP TYPE HYBRID Satellite maps with a transparent layer of major streets. int MAP TYPE NONE No base map tiles. int MAP TYPE NORMAL Basic maps. int MAP TYPE SATELLITE Satellite maps with no labels. int MAP TYPE TERRAIN This constant is deprecated.
- If a layer of the specified type does not exist on this map, or if data-driven styling is not enabled, the resulting layer's FeatureLayer.isAvailable() will be false, and will not respond to any calls.
- Returns The current position of the Camera. public FeatureLayer getFeatureLayer ( FeatureLayerOptions featureLayerOptions) Data-driven styling features are not available in the Navigation SDK.

### "Cloud-based maps styling overview \_|\_ Maps SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/android-sdk/cloud-customization](https://developers.google.com/maps/documentation/android-sdk/cloud-customization)
- Source ID: `site-docs-reference-required-2`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Cloud-based map styling allows customization of the default roadmap view across Android, iOS, and JavaScript applications through the Google Cloud Console.
- Why use cloud-based maps styling With cloud-based maps styling, you can create more engaging and informative maps and update them without code changes: More map features : Customize almost 100 individual map features, in four categories.
- What can you do with cloud-based maps styling You can do the following with cloud-based maps styling: Use a no-code style editor : A designer can create and preview a style to match your goals and branding without needing to code.
- Home Products Google Maps Platform Documentation Android Maps SDK for Android Guides Send feedback Cloud-based maps styling overview Stay organized with collections Save and categorize content based on your preferences.


---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:13.726Z"
product_name: "Maps SDK for Android"
product_slug: "maps-sdk-for-android"
feature_name: "Advanced markers"
feature_slug: "advanced-markers"
latest_feature_date: "2023-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview"
  - "https://developers.google.com/maps/documentation/android-sdk/advanced-markers/add-marker"
  - "https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start"
keywords:
  - "advanced"
  - "markers"
  - "provide"
  - "highly"
  - "performant"
  - "customizable"
  - "background"
  - "border"
---

# Advanced markers

Product: Maps SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Advanced markers provide highly performant markers with customizable background, border, glyph color, and custom icon graphics.

## Extended Definition

Advanced markers provide highly performant markers with customizable background, border, glyph color, and custom icon graphics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview](https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview)
- [https://developers.google.com/maps/documentation/android-sdk/advanced-markers/add-marker](https://developers.google.com/maps/documentation/android-sdk/advanced-markers/add-marker)
- [https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start](https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start)

## Supporting Pages

### Overview \_|\_ Maps SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview](https://developers.google.com/maps/documentation/android-sdk/advanced-markers/overview)
- Source ID: `site-docs-reference-required-2`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Page Summary outlined flag Advanced markers allow you to create highly performant and customizable markers, offering control over background, border, glyph color, and the ability to replace the default icon with custom graphics.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["Advanced markers enable highly customizable and performant markers on maps.
- With advanced markers, all the existing Marker properties are customizable, including: The title and snippet fields Click events Drag events Advanced markers add the following additional features: Customize colored pins Set any Android View as the marker Control collision behavior Customize marker properties Customize the default marker's background, glyph, and border color.
- Select platform: Android iOS JavaScript With advanced markers you can create and customize highly performant markers.

### Create an advanced marker \_|\_ Maps SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/android-sdk/advanced-markers/add-marker](https://developers.google.com/maps/documentation/android-sdk/advanced-markers/add-marker)
- Source ID: `site-docs-reference-required-2`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use PinConfig to: Change the background color Change the border color Change the glyph color or add text Hide the glyph Figure 1 : The parts of an Advanced Marker.
- Customize advanced marker properties, such as background color, border color, and glyph, by creating and configuring a PinConfig instance.
- Use PinConfig to customize advanced marker properties, such as the background color, border color, and glyph.
- Select platform: Android iOS JavaScript To add advanced markers to a map, create a new instance of AdvancedMarkerOptions and then use GoogleMap.addMarker() to add the marker: Kotlin private val SYDNEY = LatLng ( - 33.87365 , 151.20689 ) val marker : Marker? = map . addMarker ( AdvancedMarkerOptions () . position ( SYDNEY ) . iconView ( textView ) . zIndex ( zIndex ) ) Java private final LatLng SYDNEY = new LatLng ( - 33.87365 , 151.20689 ); Marker marker = map . addMarker ( new AdvancedMarkerOptions () . position ( SYDNEY ) . iconView ( textView ) . zIndex ( zIndex )); GoogleMap.addMarker() returns an instance of Marker .

### Get started \_|\_ Maps SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start](https://developers.google.com/maps/documentation/android-sdk/advanced-markers/start)
- Source ID: `site-docs-reference-required-2`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It is imperative to verify if advanced markers are supported on the device using MapCapabilities.isAdvancedMarkersAvailable() , and to provide a fallback mechanism, such as standard markers, if they are not.
- Kotlin val capabilities : MapCapabilities = googleMap . getMapCapabilities () System . out . println ( "is advanced marker enabled?" + capabilities . isAdvancedMarkersAvailable ()) Java MapCapabilities capabilities = googleMap . getMapCapabilities (); System . out . println ( "is advanced marker enabled?" + capabilities . isAdvancedMarkersAvailable ()); Next steps Create an advanced marker Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Page Summary outlined flag Advanced markers necessitate the utilization of the upgraded map renderer, available in Maps SDK for Android version 18.0.0 and later, and are enabled by default in version 18.2.0 and later.
- If you are adding advanced markers to an existing app, ensure that you rebuild the app so that your app uses the upgraded map renderer.


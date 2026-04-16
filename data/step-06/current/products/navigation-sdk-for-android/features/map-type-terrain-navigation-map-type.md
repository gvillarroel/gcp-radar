---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.684Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "MAP_TYPE_TERRAIN navigation map type"
feature_slug: "map-type-terrain-navigation-map-type"
latest_feature_date: "2024-09-13"
deprecation_date: "2024-09-13"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
keywords:
  - "map"
  - "type"
  - "terrain"
  - "navigation"
  - "using"
  - "during"
  - "is"
  - "deprecated"
---

# MAP_TYPE_TERRAIN navigation map type

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Using MAP_TYPE_TERRAIN during navigation is deprecated; deprecated on 2024-09-13.

## Extended Definition

Using MAP_TYPE_TERRAIN during navigation is deprecated; deprecated on 2024-09-13.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)

## Supporting Pages

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using MAP TYPE TERRAIN during Navigation is deprecated and will be removed in a future release.
- Constant Summary String DEMO MAP ID Data-driven styling features are not available in the Navigation SDK. int MAP TYPE HYBRID Satellite maps with a transparent layer of major streets. int MAP TYPE NONE No base map tiles. int MAP TYPE NORMAL Basic maps. int MAP TYPE SATELLITE Satellite maps with no labels. int MAP TYPE TERRAIN This constant is deprecated.
- The use of this map type is deprecated during Navigation.
- The use of this map type is deprecated during Navigation.

### Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions](https://developers.google.com/maps/documentation/navigation/android-sdk/real-time-disruptions)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can control the ability of users to tap disruption callouts on route overviews to display more information using setTrafficIncidentCardsEnabled . // Using the SupportNavigationFragment mNavFragment . setTrafficIncidentCardsEnabled ( true ); // Using the NavigationView navigationView . setTrafficIncidentCardsEnabled ( true ); Callout info cards during active navigation When a disruption callout appears along a route during active navigation, users can tap the callout to display an info card with more information about the disruption, including the disruption type and the time it was last reported, as well as buttons for voting on whether the disruption is still present.
- Show or hide the standard reporting button You can configure the visibility of the standard reporting button during active navigation using setReportIncidentButtonEnabled . // Enables the incident reporting button to show in situations where incident // reporting is possible. // Using the SupportNavigationFragment mNavFragment . setReportIncidentButtonEnabled ( true ); // Using the NavigationView navigationView . setReportIncidentButtonEnabled ( true ); Add a custom reporting button In place of the standard disruption reporting button, you can add a custom reporting button to the navigation UI.
- You can control the display and tappability of disruption callouts during active navigation using setTrafficPromptsEnabled , which also controls the display of callouts along routes and the display of automated alerts when a user approaches a disruption . // Using the SupportNavigationFragment mNavFragment . setTrafficPromptsEnabled ( true ); // Using the NavigationView navigationView . setTrafficPromptsEnabled ( true ); Note: setTrafficPromptsEnabled only controls the display of callouts for user-reported disruptions.
- You can configure the display of alert prompts during active navigation using setTrafficPromptsEnabled , which also controls the display of callouts along routes . // Using the SupportNavigationFragment mNavFragment . setTrafficPromptsEnabled ( true ); // Using the NavigationView navigationView . setTrafficPromptsEnabled ( true ); Note: When a user approaches a disruption along a route during active navigation, the disruption is announced with an audio alert.

### "GoogleMap.OnMapCapabilitiesChangedListener \_|\_ Navigation SDK for Android\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnMapCapabilitiesChangedListener)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Reference Send feedback GoogleMap.OnMapCapabilitiesChangedListener Stay organized with collections Save and categorize content based on your preferences.
- The onMapCapabilitiesChanged method is called when map capabilities are updated, providing information about the available capabilities. public static interface GoogleMap.OnMapCapabilitiesChangedListener Listener interface for when the map capabilities are changed.
- Page Summary outlined flag GoogleMap.OnMapCapabilitiesChangedListener is an interface used to listen for changes in map capabilities.
- This interface exists here only for compile-time compatibility with com.google.android.gms:play-services-maps .

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- You can set the following attributes: Attribute Type Attributes Background color Primary day mode - the daytime color of the navigation header Secondary day mode - the daytime color of the next-turn indicator Primary night mode - the nighttime color of the navigation header Secondary night mode - the nighttime color of the next-turn indicator Text elements for instructions Text color Font Text size of the first row Text size of the second row Text elements for next steps Font Text color of the distance value Text size of the distance value Text color of the distance units Text size of the distance units Maneuver icons Color of the large maneuver icon Color of the small maneuver icon Lane guidance Color of the recommended lane or lanes The following example shows how to set styling options: private SupportNavigationFragment mNavFragment ; mNavFragment = ( SupportNavigationFragment ) getFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Set the styling options on the fragment. mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); Turn off the traffic layer Use GoogleMap.setTrafficEnabled() to enable or disable the traffic layer on the map.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- However, it does not affect the traffic indications on the route plotted by the navigator. private GoogleMap mMap ; // Get the map, and when the async call returns, setTrafficEnabled // (callback will be on the UI thread) mMap = mNavFragment . getMapAsync ( navMap - > navMap . setTrafficEnabled ( false )); Enable traffic lights and stop signs You can enable the display of traffic lights and stop signs in the map during active navigation, which provides additional context for routes and trip maneuvers.
- This document describes how to modify your map's user interface in two ways: Map UI controls Map UI accessories Note: In most cases, we recommend using SupportNavigationFragment , which is a wrapper for NavigationView , instead of interacting directly with NavigationView .


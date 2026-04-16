---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.677Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Destination and entrance highlighting"
feature_slug: "destination-and-entrance-highlighting"
latest_feature_date: "2025-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav"
keywords:
  - "destination"
  - "and"
  - "entrance"
  - "highlighting"
  - "visual"
  - "is"
  - "added"
  - "to"
---

# Destination and entrance highlighting

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Visual highlighting is added to destination buildings created with a place ID to help users identify and navigate to the intended destination.

## Extended Definition

Visual highlighting is added to destination buildings created with a place ID to help users identify and navigate to the intended destination.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto](https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav)

## Supporting Pages

### "Route to navigation points \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summary of valid waypoint configurations Method setLatLng() setPlaceIdString() setNavigationPointToken() Routing behavior Destination highlighting Latitude/longitude coordinates only set absent absent Routes to road segment nearest to the defined coordinates Shown if destination can be inferred with high confidence Place ID only absent set absent Routes to the default navigation point for the Place ID From Place ID Navigation point token only absent absent set Routes to the precise navigation point represented by the token From destination defined in original destinations method of the Geocoding API request Latitude/longitude coordinates and Place ID combined set set absent Routes to road segment nearest to the defined coordinates From Place ID, though not shown if Place ID is too far from the latitude/longitude coordinates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This allows the Navigation SDK to provide a richer arrival experience by highlighting the destination building or showing nearby points of interest related to the Place ID. // Assuming 'placeId' is the Place ID String // Assuming 'lat' and 'lng' are the double values for latitude and longitude // Assuming 'destinationName' is a String title for the waypoint Waypoint waypointWithPlaceIdAndLatLng = Waypoint . builder () . setTitle ( destinationName ) . setPlaceIdString ( placeId ) . setLatLng ( lat , lng ) . build (); // Use this waypoint in navigator.setDestinations() Considerations When you provide both placeId and latlng : The route primarily targets the specified latlng .
- These methods are mutually exclusive with setNavigationPointToken() . // Assuming 'navPointToken' is a String obtained from the destinations method of the Geocoding API // Assuming 'destinationName' is a String title for the waypoint Waypoint waypointWithToken = Waypoint . builder () . setTitle ( destinationName ) . setNavigationPointToken ( navPointToken ) . build (); // Use this waypoint in navigator.setDestinations() Combine Place ID and latitude and longitude Starting with v7.4, you can provide both a Place ID and latitude and longitude coordinates when creating a Waypoint .
- The Navigation SDK for Android offers enhanced ways to specify waypoints, providing more accurate routing and a better arrival experience, especially for destinations with multiple entrances or specific navigation points.

### "Enable navigation for Android Auto \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto](https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Turn-by-Turn Library Maneuver Android Auto Maneuver DEPART TYPE DEPART DESTINATION TYPE DESTINATION DESTINATION LEFT TYPE DESTINATION LEFT DESTINATION RIGHT TYPE DESTINATION RIGHT TURN U TURN CLOCKWISE TYPE U TURN RIGHT ON RAMP LEFT TYPE ON RAMP NORMAL LEFT ON RAMP RIGHT TYPE ON RAMP NORMAL RIGHT ON RAMP SLIGHT LEFT TYPE ON RAMP SLIGHT LEFT FORK RIGHT TYPE FORK RIGHT Expand to see the code example. import com.google.android.libraries.mapsplatform.turnbyturn.model.Maneuver ; import com.google.common.collect.ImmutableMap ; import javax.annotation.Nullable ; / Converter that converts between turn - by - turn and Android Auto Maneuvers . / public final class ManeuverConverter { private ManeuverConverter () {} // Map from turn - by - turn Maneuver to Android Auto Maneuver .
- The Android for Cars App Library enables Android applications to run on Android Auto by providing a set of visual templates approved for driver safety.
- VIRTUAL DISPLAY FLAG OWN CONTENT ONLY ); presentation = new Presentation ( getCarContext (), virtualDisplay . getDisplay ()); navigationView = new NavigationViewForAuto ( getCarContext ()); navigationView . onCreate ( null ); navigationView . onStart (); navigationView . onResume (); presentation . setContentView ( navigationView ); presentation . show (); navigationView . getMapAsync ( googleMap - > this . googleMap = googleMap ); } @ Override public void onSurfaceDestroyed (@ NonNull SurfaceContainer surfaceContainer ) { navigationView . onPause (); navigationView . onStop (); navigationView . onDestroy (); presentation . dismiss (); virtualDisplay . release (); } Enable map interaction For driver safety, Android Auto limits screen surface interaction to a series of SurfaceCallback methods.
- Use NavigationViewForAuto to draw onto the Surface provided by Android Auto: private boolean isSurfaceReady ( SurfaceContainer surfaceContainer ) { return surfaceContainer . getSurface () != null && surfaceContainer . getDpi () != 0 && surfaceContainer . getHeight () != 0 && surfaceContainer . getWidth () != 0 ; } @ Override public void onSurfaceAvailable (@ NonNull SurfaceContainer surfaceContainer ) { if ( ! isSurfaceReady ( surfaceContainer )) { return ; } virtualDisplay = getCarContext () . getSystemService ( DisplayManager . class ) . createVirtualDisplay ( VIRTUAL DISPLAY NAME , surfaceContainer . getWidth (), surfaceContainer . getHeight (), surfaceContainer . getDpi (), surfaceContainer . getSurface (), DisplayManager .

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- LENGTH LONG ) . show (); Log . d ( TAG , errorMessage ); } } Destination highlighting and entrances When a destination is created with a placeID , the destination building will be highlighted and an entrance icon will be shown, whenever possible.
- These visual cues help users distinguish and navigate to their destination.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- Unlike the BOTTOM START BELOW and BOTTOM END BELOW custom controls, this control is positioned outside the visible map bounds, which means that any padding added to the map won't change the position of this control.

### "Custom navigation experience \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The primary way to implement the Navigation SDK is to use the Google navigation experience , which lets you embed a turn-by-turn navigation experience that uses Google-provided UI elements and visuals — similar to the navigation experience within the Google Maps apps.
- With a custom navigation experience, your app calls the Navigation SDK to request a turn-by-turn navigation feed, and then you provide and manage the UI elements and visuals that the user sees in the navigation experience.
- Custom navigation experiences allow developers to manage UI elements, visuals, and event handling for a highly tailored user interface.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]


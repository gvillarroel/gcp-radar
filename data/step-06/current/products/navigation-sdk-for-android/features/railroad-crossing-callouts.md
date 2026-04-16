---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.673Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Railroad crossing callouts"
feature_slug: "railroad-crossing-callouts"
latest_feature_date: "2025-11-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination"
keywords:
  - "railroad"
  - "crossing"
  - "callouts"
  - "shows"
  - "on"
  - "navigation"
  - "routes"
  - "in"
---

# Railroad crossing callouts

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Shows railroad crossing callouts on navigation routes in the US and Canada.

## Extended Definition

Shows railroad crossing callouts on navigation routes in the US and Canada.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)

## Supporting Pages

### "Route to navigation points \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summary of valid waypoint configurations Method setLatLng() setPlaceIdString() setNavigationPointToken() Routing behavior Destination highlighting Latitude/longitude coordinates only set absent absent Routes to road segment nearest to the defined coordinates Shown if destination can be inferred with high confidence Place ID only absent set absent Routes to the default navigation point for the Place ID From Place ID Navigation point token only absent absent set Routes to the precise navigation point represented by the token From destination defined in original destinations method of the Geocoding API request Latitude/longitude coordinates and Place ID combined set set absent Routes to road segment nearest to the defined coordinates From Place ID, though not shown if Place ID is too far from the latitude/longitude coordinates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This allows the Navigation SDK to provide a richer arrival experience by highlighting the destination building or showing nearby points of interest related to the Place ID. // Assuming 'placeId' is the Place ID String // Assuming 'lat' and 'lng' are the double values for latitude and longitude // Assuming 'destinationName' is a String title for the waypoint Waypoint waypointWithPlaceIdAndLatLng = Waypoint . builder () . setTitle ( destinationName ) . setPlaceIdString ( placeId ) . setLatLng ( lat , lng ) . build (); // Use this waypoint in navigator.setDestinations() Considerations When you provide both placeId and latlng : The route primarily targets the specified latlng .
- These methods are mutually exclusive with setNavigationPointToken() . // Assuming 'navPointToken' is a String obtained from the destinations method of the Geocoding API // Assuming 'destinationName' is a String title for the waypoint Waypoint waypointWithToken = Waypoint . builder () . setTitle ( destinationName ) . setNavigationPointToken ( navPointToken ) . build (); // Use this waypoint in navigator.setDestinations() Combine Place ID and latitude and longitude Starting with v7.4, you can provide both a Place ID and latitude and longitude coordinates when creating a Waypoint .
- The Navigation SDK for Android offers enhanced ways to specify waypoints, providing more accurate routing and a better arrival experience, especially for destinations with multiple entrances or specific navigation points.

### "GoogleMap.OnInfoWindowLongClickListener \_|\_ Navigation SDK for Android\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnInfoWindowLongClickListener)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Reference Send feedback GoogleMap.OnInfoWindowLongClickListener Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- This interaction is handled on the Android UI thread for immediate response. public static interface GoogleMap.OnInfoWindowLongClickListener Callback interface for when the user long presses on a marker's info window.
- Public Method Summary abstract void onInfoWindowLongClick ( Marker marker) Called when the user makes a long-press gesture on the marker's info window.

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can set the following attributes: Attribute Type Attributes Background color Primary day mode - the daytime color of the navigation header Secondary day mode - the daytime color of the next-turn indicator Primary night mode - the nighttime color of the navigation header Secondary night mode - the nighttime color of the next-turn indicator Text elements for instructions Text color Font Text size of the first row Text size of the second row Text elements for next steps Font Text color of the distance value Text size of the distance value Text color of the distance units Text size of the distance units Maneuver icons Color of the large maneuver icon Color of the small maneuver icon Lane guidance Color of the recommended lane or lanes The following example shows how to set styling options: private SupportNavigationFragment mNavFragment ; mNavFragment = ( SupportNavigationFragment ) getFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Set the styling options on the fragment. mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); Turn off the traffic layer Use GoogleMap.setTrafficEnabled() to enable or disable the traffic layer on the map.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- However, it does not affect the traffic indications on the route plotted by the navigator. private GoogleMap mMap ; // Get the map, and when the async call returns, setTrafficEnabled // (callback will be on the UI thread) mMap = mNavFragment . getMapAsync ( navMap - > navMap . setTrafficEnabled ( false )); Enable traffic lights and stop signs You can enable the display of traffic lights and stop signs in the map during active navigation, which provides additional context for routes and trip maneuvers.
- The following example shows forcing night mode to turn on within a navigation fragment: // Force night mode on. mNavFragment . setForceNightMode ( FORCE NIGHT ); Display directions list First, create the view and add it to your hierarchy. void setupDirectionsListView () { // Create the view.

### "Navigate a multi-destination route \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListenableResultFuture<Navigator.RouteStatus> pendingRoute = mNavigator.setDestinations(mWaypoints); // Define the action to perform when the SDK has determined the route. pendingRoute.setOnResultListener( new ListenableResultFuture.OnResultListener<Navigator.RouteStatus>() { @Override public void onResult(Navigator.RouteStatus code) { switch (code) { case OK: mJourneyInProgress = true; // Hide the toolbar to maximize the navigation UI. if (getActionBar() != null) { getActionBar().hide(); } // Register some listeners for navigation events. registerNavigationListeners(); // Display the time and distance to each waypoint. displayTimesAndDistances(); // Enable voice audio guidance (through the device speaker). mNavigator.setAudioGuidance( Navigator.AudioGuidance.VOICE ALERTS AND GUIDANCE); // Simulate vehicle progress along the route for demo/debug builds. if (BuildConfig.DEBUG) { mNavigator.getSimulator().simulateLocationsAlongExistingRoute( new SimulationOptions().speedMultiplier(5)); } // Start turn-by-turn guidance along the current route. mNavigator.startGuidance(); break; // Handle error conditions returned by the navigator. case NO ROUTE FOUND: displayMessage("Error starting navigation: No route found.", DISPLAY BOTH); break; case NETWORK ERROR: displayMessage("Error starting navigation: Network error.", DISPLAY BOTH); break; case ROUTE CANCELED: displayMessage("Error starting navigation: Route canceled.", DISPLAY BOTH); break; default: displayMessage("Error starting navigation: " + String.valueOf(code), DISPLAY BOTH); } } }); } Build and run your app Connect an Android device to your computer.
- RouteStatus code ) { switch ( code ) { case OK : mJourneyInProgress = true ; // Hide the toolbar to maximize the navigation UI . if ( getActionBar () != null ) { getActionBar () . hide (); } // Register some listeners for navigation events . registerNavigationListeners (); // Display the time and distance to each waypoint . displayTimesAndDistances (); // Enable voice audio guidance ( through the device speaker ) . mNavigator . setAudioGuidance ( Navigator .
- Current waypoint: " + mNavigator . getCurrentRouteSegment () . getDestinationWaypoint () . getTitle (), DISPLAY LOG ); } }; // Listens for changes in the route . mNavigator . addRouteChangedListener ( mRouteChangedListener ); // Listens for road - snapped location updates . mRoadSnappedLocationProvider = NavigationApi . getRoadSnappedLocationProvider ( getApplication ()); mLocationListener = new RoadSnappedLocationProvider .
- Create a helper method to show a message on screen and in the log. private void displayMessage(String errorMessage, String displayMedium) { if (displayMedium.equals(DISPLAY BOTH) displayMedium.equals(DISPLAY TOAST)) { Toast.makeText(this, errorMessage, Toast.LENGTH LONG).show(); } if (displayMedium.equals(DISPLAY BOTH) displayMedium.equals(DISPLAY LOG)) { Log.d(TAG, errorMessage); } } Initialize the Navigation SDK and override the onNavigatorReady() callback to start navigation when the navigator is ready: NavigationApi.getNavigator(this, new NavigationApi.NavigatorListener() { / Sets up the navigation UI when the navigator is ready for use. / @Override public void onNavigatorReady(Navigator navigator) { displayMessage("Navigator ready.", DISPLAY BOTH); mNavigator = navigator; mNavFragment = (SupportNavigationFragment) getFragmentManager() .findFragmentById(R.id.navigation fragment); // Set the camera to follow the device location with 'TILTED' driving view. mNavFragment.getCamera().followMyLocation(Camera.Perspective.TILTED); // Navigate to the specified places. navigateToPlaces(); } / Handles errors from the Navigation SDK. @param errorCode The error code returned by the navigator. / @Override public void onError(@NavigationApi.ErrorCode int errorCode) { switch (errorCode) { case NavigationApi.ErrorCode.NOT AUTHORIZED: displayMessage("Error loading Navigation SDK: Your API key is " + "invalid or not authorized to use the Navigation SDK.", DISPLAY BOTH); break; case NavigationApi.ErrorCode.TERMS NOT ACCEPTED: displayMessage("Error loading Navigation SDK: User did not accept " + "the Navigation Terms of Use.", DISPLAY BOTH); break; case NavigationApi.ErrorCode.NETWORK ERROR: displayMessage("Error loading Navigation SDK: Network error.", DISPLAY BOTH); break; case NavigationApi.ErrorCode.LOCATION PERMISSION MISSING: displayMessage("Error loading Navigation SDK: Location permission " + "is missing.", DISPLAY BOTH); break; default: displayMessage("Error loading Navigation SDK: " + errorCode, DISPLAY BOTH); } } }); Add a method to create a Waypoint object from a given place ID and title. private void createWaypoint(String placeId, String title) { try { mWaypoints.add( Waypoint.builder() .setPlaceIdString(placeId) .setTitle(title) .build() ); } catch (Waypoint.UnsupportedPlaceIdException e) { displayMessage("Error starting navigation: Place ID is not supported: " + placeId, DISPLAY BOTH); } } Add a method to display the calculated travel time and distance to each waypoint. private void displayTimesAndDistances() { List<TimeAndDistance> timesAndDistances = mNavigator.getTimeAndDistanceList(); int leg = 1; String message = "You're on your way!"; for (TimeAndDistance timeAndDistance : timesAndDistances) { message = message + "\nRoute leg: " + leg++ + ": Travel time (seconds): " + timeAndDistance.getSeconds() + ".


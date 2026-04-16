---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.688Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Guidance notifications disable on app dismissal"
feature_slug: "guidance-notifications-disable-on-app-dismissal"
latest_feature_date: "2023-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/route"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav"
keywords:
  - "guidance"
  - "notifications"
  - "disable"
  - "on"
  - "app"
  - "dismissal"
  - "can"
  - "be"
---

# Guidance notifications disable on app dismissal

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Guidance notifications can be disabled and the app and background services can shut down when the user swipes away the app from recent tasks.

## Extended Definition

Guidance notifications can be disabled and the app and background services can shut down when the user swipes away the app from recent tasks.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/route](https://developers.google.com/maps/documentation/navigation/android-sdk/route)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav)

## Supporting Pages

### "Navigate a single-destination route \_|\_ Navigation SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/route](https://developers.google.com/maps/documentation/navigation/android-sdk/route)
- Source ID: `site-docs-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disable the guidance notifications and shut down the app // and background service when the user closes the app. // mNavigator.setTaskRemovedBehavior(Navigator.TaskRemovedBehavior.QUIT SERVICE) // Optional.
- You might want to use the default navigator behavior, which continues to display turn guidance and location updates even when the app is dismissed.
- Configure the app so that guidance notifications and background services shut down when the user dismisses the app from their device.
- If not, it requests the permission: if (ContextCompat.checkSelfPermission(this.getApplicationContext(), android.Manifest.permission.ACCESS FINE LOCATION) == PackageManager.PERMISSION GRANTED) { mLocationPermissionGranted = true; } else { ActivityCompat.requestPermissions(this, new String[] { android.Manifest.permission.ACCESS FINE LOCATION }, PERMISSIONS REQUEST ACCESS FINE LOCATION); } if (!mLocationPermissionGranted) { displayMessage("Error loading Navigation SDK: " + "The user has not granted location permission."); return; } Override the onRequestPermissionsResult() callback to handle the result of the permission request: @Override public void onRequestPermissionsResult(int requestCode, @NonNull String permissions[], @NonNull int[] grantResults) { mLocationPermissionGranted = false; switch (requestCode) { case PERMISSIONS REQUEST ACCESS FINE LOCATION: { // If request is canceled, the result arrays are empty. if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION GRANTED) { mLocationPermissionGranted = true; } } } } Initialize the Navigation SDK The NavigationApi class provides initialization logic that authorizes your app to use Google navigation.

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- You can set the following attributes: Attribute Type Attributes Background color Primary day mode - the daytime color of the navigation header Secondary day mode - the daytime color of the next-turn indicator Primary night mode - the nighttime color of the navigation header Secondary night mode - the nighttime color of the next-turn indicator Text elements for instructions Text color Font Text size of the first row Text size of the second row Text elements for next steps Font Text color of the distance value Text size of the distance value Text color of the distance units Text size of the distance units Maneuver icons Color of the large maneuver icon Color of the small maneuver icon Lane guidance Color of the recommended lane or lanes The following example shows how to set styling options: private SupportNavigationFragment mNavFragment ; mNavFragment = ( SupportNavigationFragment ) getFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Set the styling options on the fragment. mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); Turn off the traffic layer Use GoogleMap.setTrafficEnabled() to enable or disable the traffic layer on the map.
- You can adjust the visibility or visual appearance of these controls as described in this section.
- DEBUG ) { mNavigator . getSimulator () . simulateLocationsAlongExistingRoute ( new SimulationOptions () . speedMultiplier ( 5 )); } // Start turn - by - turn guidance along the current route . mNavigator . startGuidance (); break ; // Handle error conditions returned by the navigator . case NO ROUTE FOUND : displayMessage ( "Error starting navigation: No route found." ); break ; case NETWORK ERROR : displayMessage ( "Error starting navigation: Network error." ); break ; case ROUTE CANCELED : displayMessage ( "Error starting navigation: Route canceled." ); break ; default : displayMessage ( "Error starting navigation: " + String . valueOf ( code )); } } }); } / Handles the result of the request for location permissions . / @Override public void onRequestPermissionsResult ( int requestCode , @NonNull String [] permissions , @NonNull int [] grantResults ) { mLocationPermissionGranted = false ; switch ( requestCode ) { case PERMISSIONS REQUEST ACCESS FINE LOCATION : { // If request is canceled , the result arrays are empty . if ( grantResults . length > 0 && grantResults [ 0 ] == PackageManager .
- However, it does not affect the traffic indications on the route plotted by the navigator. private GoogleMap mMap ; // Get the map, and when the async call returns, setTrafficEnabled // (callback will be on the UI thread) mMap = mNavFragment . getMapAsync ( navMap - > navMap . setTrafficEnabled ( false )); Enable traffic lights and stop signs You can enable the display of traffic lights and stop signs in the map during active navigation, which provides additional context for routes and trip maneuvers.

### "Navigate a multi-destination route \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListenableResultFuture<Navigator.RouteStatus> pendingRoute = mNavigator.setDestinations(mWaypoints); // Define the action to perform when the SDK has determined the route. pendingRoute.setOnResultListener( new ListenableResultFuture.OnResultListener<Navigator.RouteStatus>() { @Override public void onResult(Navigator.RouteStatus code) { switch (code) { case OK: mJourneyInProgress = true; // Hide the toolbar to maximize the navigation UI. if (getActionBar() != null) { getActionBar().hide(); } // Register some listeners for navigation events. registerNavigationListeners(); // Display the time and distance to each waypoint. displayTimesAndDistances(); // Enable voice audio guidance (through the device speaker). mNavigator.setAudioGuidance( Navigator.AudioGuidance.VOICE ALERTS AND GUIDANCE); // Simulate vehicle progress along the route for demo/debug builds. if (BuildConfig.DEBUG) { mNavigator.getSimulator().simulateLocationsAlongExistingRoute( new SimulationOptions().speedMultiplier(5)); } // Start turn-by-turn guidance along the current route. mNavigator.startGuidance(); break; // Handle error conditions returned by the navigator. case NO ROUTE FOUND: displayMessage("Error starting navigation: No route found.", DISPLAY BOTH); break; case NETWORK ERROR: displayMessage("Error starting navigation: Network error.", DISPLAY BOTH); break; case ROUTE CANCELED: displayMessage("Error starting navigation: Route canceled.", DISPLAY BOTH); break; default: displayMessage("Error starting navigation: " + String.valueOf(code), DISPLAY BOTH); } } }); } Build and run your app Connect an Android device to your computer.
- DEBUG ) { mNavigator . getSimulator () . simulateLocationsAlongExistingRoute ( new SimulationOptions () . speedMultiplier ( 5 )); } // Start turn - by - turn guidance along the current route . mNavigator . startGuidance (); break ; // Handle error conditions returned by the navigator . case NO ROUTE FOUND : displayMessage ( "Error starting navigation: No route found." , DISPLAY BOTH ); break ; case NETWORK ERROR : displayMessage ( "Error starting navigation: Network error." , DISPLAY BOTH ); break ; case ROUTE CANCELED : displayMessage ( "Error starting navigation: Route canceled." , DISPLAY BOTH ); break ; default : displayMessage ( "Error starting navigation: " + String . valueOf ( code ), DISPLAY BOTH ); } } }); } / Creates a waypoint from a given place ID and title . @param placeId The ID of the place to be converted to a waypoint . @param title A descriptive title for the waypoint . / private void createWaypoint ( String placeId , String title ) { try { mWaypoints . add ( Waypoint . builder () . setPlaceIdString ( placeId ) . setTitle ( title ) . build ()); } catch ( Waypoint .
- See the notes below about getting different place IDs .) After calculating directions, the SupportNavigationFragment displays a polyline representing the route on the map, with a marker at each waypoint. private void navigateToPlaces() { // Set up a waypoint for each place that we want to go to. createWaypoint("ChIJq6qq6jauEmsRJAf7FjrKnXI", "Sydney Star"); createWaypoint("ChIJ3S-JXmauEmsRUcIaWtf4MzE", "Sydney Opera House"); createWaypoint("ChIJLwgLFGmuEmsRzpDhHQuyyoU", "Sydney Conservatorium of Music"); // If this journey is already in progress, no need to restart navigation. // This can happen when the user rotates the device, or sends the app to the background. if (mSavedInstanceState != null && mSavedInstanceState.containsKey(KEY JOURNEY IN PROGRESS) && mSavedInstanceState.getInt(KEY JOURNEY IN PROGRESS) == 1) { return; } // Create a future to await the result of the asynchronous navigator task.
- If not, it requests the permission: if (ContextCompat.checkSelfPermission(this.getApplicationContext(), android.Manifest.permission.ACCESS FINE LOCATION) == PackageManager.PERMISSION GRANTED) { mLocationPermissionGranted = true; } else { ActivityCompat.requestPermissions(this, new String[] { android.Manifest.permission.ACCESS FINE LOCATION }, PERMISSIONS REQUEST ACCESS FINE LOCATION); } if (!mLocationPermissionGranted) { displayMessage("Error loading Navigation SDK: " + "The user has not granted location permission.", DISPLAY BOTH); return; } Override the onRequestPermissionsResult() callback to handle the result of the permission request: @Override public void onRequestPermissionsResult(int requestCode, @NonNull String permissions[], @NonNull int[] grantResults) { mLocationPermissionGranted = false; switch (requestCode) { case PERMISSIONS REQUEST ACCESS FINE LOCATION: { // If request is canceled, the result arrays are empty. if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION GRANTED) { mLocationPermissionGranted = true; } } } } Initialize the Navigation SDK and configure a journey The NavigationApi class provides initialization logic that authorizes your app to use Google navigation.

### "The Google navigation experience \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-google-nav)
- Source ID: `site-docs-root`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you embed the Google navigation experience in your app, you don't need to build the navigation experience from scratch, but you can still modify parts of the experience.
- For example, the app might have a store locator with its own UI elements that users can use to begin navigation to the store.
- This app flow can be presented to the user in a variety of ways depending on your use case.
- The Google navigation experience refers to using the Navigation SDK to embed a turn-by-turn navigation experience that uses Google-provided UI elements and visuals, which are similar to the navigation experience within the Google Maps apps.


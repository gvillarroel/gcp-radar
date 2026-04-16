---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.684Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "navigator.fetchRouteInfo()"
feature_slug: "navigator-fetchrouteinfo"
latest_feature_date: "2024-09-13"
deprecation_date: "2024-09-13"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/route"
keywords:
  - "navigator"
  - "fetchrouteinfo"
  - "the"
  - "method"
  - "retrieved"
  - "route"
  - "information"
  - "for"
---

# navigator.fetchRouteInfo()

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The navigator.fetchRouteInfo() method retrieved route information for Mobility Services customers; deprecated on 2024-09-13.

## Extended Definition

The navigator.fetchRouteInfo() method retrieved route information for Mobility Services customers; deprecated on 2024-09-13.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference](https://developers.google.com/maps/documentation/navigation/android-sdk/reference)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/route](https://developers.google.com/maps/documentation/navigation/android-sdk/route)

## Supporting Pages

### Plan a route \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: String routeToken = "route token returned by Routes API" ; Example of a returned route token: { // Other fields "routeToken" : "CqMBCjoKCJQOor5DHcwiEhBon3XpHXFnVvDeWMwd9PpAGgz6wtnFDKIBrAHTARpCApUDSggAAAAACjcrP3gBEAQaTApKChgKDQoCCAERAAAAAACAZkAR3SQGgZUXdUASEggAEAMQBhATEBIYAkIEGgIIBSIYChZ2VEJiWlBPSkk1aU5wUVRzNTV5d0FRKAEiFQBcJuds-Efh-2QZhOMTtUCCxEVL g" , } Pass the route token to the Navigation SDK using the Navigator.setDestinations method, specifying the same destination waypoints that you used when creating the route token: setDestinations ( List destinations , CustomRoutesOptions customRoutesOptions , DisplayOptions displayOptions ); For example: CustomRoutesOptions customRoutesOptions = CustomRoutesOptions . builder () . setRouteToken ( routeToken ) . setTravelMode ( TravelMode .
- For more information about requesting a route token in the Route Optimization API, see Transition Polylines and Route Tokens .
- For more information about requesting a route token in the Routes API, see Compute a route and Request a route token .
- For more information about requesting a route token in the Routes Preferred API, see Plan a route .

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- DEBUG ) { mNavigator . getSimulator () . simulateLocationsAlongExistingRoute ( new SimulationOptions () . speedMultiplier ( 5 )); } // Start turn - by - turn guidance along the current route . mNavigator . startGuidance (); break ; // Handle error conditions returned by the navigator . case NO ROUTE FOUND : displayMessage ( "Error starting navigation: No route found." ); break ; case NETWORK ERROR : displayMessage ( "Error starting navigation: Network error." ); break ; case ROUTE CANCELED : displayMessage ( "Error starting navigation: Route canceled." ); break ; default : displayMessage ( "Error starting navigation: " + String . valueOf ( code )); } } }); } / Handles the result of the request for location permissions . / @Override public void onRequestPermissionsResult ( int requestCode , @NonNull String [] permissions , @NonNull int [] grantResults ) { mLocationPermissionGranted = false ; switch ( requestCode ) { case PERMISSIONS REQUEST ACCESS FINE LOCATION : { // If request is canceled , the result arrays are empty . if ( grantResults . length > 0 && grantResults [ 0 ] == PackageManager .
- However, it does not affect the traffic indications on the route plotted by the navigator. private GoogleMap mMap ; // Get the map, and when the async call returns, setTrafficEnabled // (callback will be on the UI thread) mMap = mNavFragment . getMapAsync ( navMap - > navMap . setTrafficEnabled ( false )); Enable traffic lights and stop signs You can enable the display of traffic lights and stop signs in the map during active navigation, which provides additional context for routes and trip maneuvers.
- You can configure this option before you fetch the routes by calling the RoutingOptions.alternateRoutesStrategy() method with one of the following enumeration values: Enumeration Value Description AlternateRoutesStrategy.SHOW ALL Default.

### Overview \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference](https://developers.google.com/maps/documentation/navigation/android-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are not a Mobility Services customer, the following methods are no-ops: NavigationTransactionRecorder.pickup() NavigationTransactionRecorder.dropoff() NavigationTransactionRecorder.generatedTransactionId() Navigator.fetchRouteInfo() Navigator.setTransactionIds() Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- This means that, if your app previously depended on the Maps SDK for Android, you can change its dependency to the Navigation SDK for Android without affecting the existing functionality of your app, with two notable exceptions: APIs that throw an exception.
- APIs that are only intended for use by Mobility Services customers There are several APIs in the Navigation SDK that are only intended for use by Mobility Services customers, who are billed by Google on a per-transaction basis.

### "Navigate a single-destination route \_|\_ Navigation SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/route](https://developers.google.com/maps/documentation/navigation/android-sdk/route)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- Set the last digit of the car's license plate to get // route restrictions for supported countries. // mNavigator.setLicensePlateRestrictionInfo(getLastDigit(), "BZ"); // Set the camera to follow the device location with 'TILTED' driving view. mNavFragment.getCamera().followMyLocation(Camera.Perspective.TILTED); // Set the travel mode (DRIVING, WALKING, CYCLING, TWO WHEELER, or TAXI). mRoutingOptions = new RoutingOptions(); mRoutingOptions.travelMode(RoutingOptions.TravelMode.DRIVING); // Navigate to a place, specified by Place ID. navigateToPlace(SYDNEY OPERA HOUSE, mRoutingOptions); } / Handles errors from the Navigation SDK. @param errorCode The error code returned by the navigator. / @Override public void onError(@NavigationApi.ErrorCode int errorCode) { switch (errorCode) { case NavigationApi.ErrorCode.NOT AUTHORIZED: displayMessage("Error loading Navigation SDK: Your API key is " + "invalid or not authorized to use the Navigation SDK."); break; case NavigationApi.ErrorCode.TERMS NOT ACCEPTED: displayMessage("Error loading Navigation SDK: User did not accept " + "the Navigation Terms of Use."); break; case NavigationApi.ErrorCode.NETWORK ERROR: displayMessage("Error loading Navigation SDK: Network error."); break; case NavigationApi.ErrorCode.LOCATION PERMISSION MISSING: displayMessage("Error loading Navigation SDK: Location permission " + "is missing."); break; default: displayMessage("Error loading Navigation SDK: " + errorCode); } } }); Set a destination The Navigator class provides control over configuring, starting, and stopping a navigation journey.
- DEBUG ) { mNavigator . getSimulator () . simulateLocationsAlongExistingRoute ( new SimulationOptions () . speedMultiplier ( 5 )); } // Start turn - by - turn guidance along the current route . mNavigator . startGuidance (); break ; // Handle error conditions returned by the navigator . case NO ROUTE FOUND : displayMessage ( "Error starting navigation: No route found." ); break ; case NETWORK ERROR : displayMessage ( "Error starting navigation: Network error." ); break ; case ROUTE CANCELED : displayMessage ( "Error starting navigation: Route canceled." ); break ; default : displayMessage ( "Error starting navigation: " + String . valueOf ( code )); } } }); } / Handles the result of the request for location permissions . / @Override public void onRequestPermissionsResult ( int requestCode , @NonNull String [] permissions , @NonNull int [] grantResults ) { mLocationPermissionGranted = false ; switch ( requestCode ) { case PERMISSIONS REQUEST ACCESS FINE LOCATION : { // If request is canceled , the result arrays are empty . if ( grantResults . length > 0 && grantResults [ 0 ] == PackageManager .
- NavigatorListener () { / Sets up the navigation UI when the navigator is ready for use . / @Override public void onNavigatorReady ( Navigator navigator ) { displayMessage ( "Navigator ready." ); mNavigator = navigator ; mNavFragment = ( SupportNavigationFragment ) getSupportFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Set the last digit of the car 's license plate to get route restrictions // in supported countries . ( optional ) // mNavigator . setLicensePlateRestrictionInfo ( getLastDigit (), "BZ" ); // Set the camera to follow the device location with 'TILTED' driving view . mNavFragment . getMapAsync ( googleMap - > googleMap . followMyLocation ( CameraPerspective .
- RouteStatus > pendingRoute = mNavigator . setDestination ( destination , travelMode ); // Define the action to perform when the SDK has determined the route . pendingRoute . setOnResultListener ( new ListenableResultFuture .


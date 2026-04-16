---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.678Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Route-relevant orientation landmark POIs"
feature_slug: "route-relevant-orientation-landmark-pois"
latest_feature_date: "2025-06-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/intro-route-experience"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination"
keywords:
  - "route"
  - "relevant"
  - "orientation"
  - "landmark"
  - "pois"
  - "prominent"
  - "points"
  - "of"
---

# Route-relevant orientation landmark POIs

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Prominent landmark points of interest are shown by default along routes and near key intersections where maneuvers are required.

## Extended Definition

Prominent landmark points of interest are shown by default along routes and near key intersections where maneuvers are required.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-route-experience](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-route-experience)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)

## Supporting Pages

### "Route to navigation points \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- This allows the Navigation SDK to provide a richer arrival experience by highlighting the destination building or showing nearby points of interest related to the Place ID. // Assuming 'placeId' is the Place ID String // Assuming 'lat' and 'lng' are the double values for latitude and longitude // Assuming 'destinationName' is a String title for the waypoint Waypoint waypointWithPlaceIdAndLatLng = Waypoint . builder () . setTitle ( destinationName ) . setPlaceIdString ( placeId ) . setLatLng ( lat , lng ) . build (); // Use this waypoint in navigator.setDestinations() Considerations When you provide both placeId and latlng : The route primarily targets the specified latlng .
- Summary of valid waypoint configurations Method setLatLng() setPlaceIdString() setNavigationPointToken() Routing behavior Destination highlighting Latitude/longitude coordinates only set absent absent Routes to road segment nearest to the defined coordinates Shown if destination can be inferred with high confidence Place ID only absent set absent Routes to the default navigation point for the Place ID From Place ID Navigation point token only absent absent set Routes to the precise navigation point represented by the token From destination defined in original destinations method of the Geocoding API request Latitude/longitude coordinates and Place ID combined set set absent Routes to road segment nearest to the defined coordinates From Place ID, though not shown if Place ID is too far from the latitude/longitude coordinates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Navigation SDK for Android offers enhanced ways to specify waypoints, providing more accurate routing and a better arrival experience, especially for destinations with multiple entrances or specific navigation points.
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Send feedback Route to navigation points Stay organized with collections Save and categorize content based on your preferences.

### Route experience \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-route-experience](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-route-experience)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can: Adjust routing preferences Manage waypoints Navigate a multi-destination route Plan a route Routing to access points Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Developers can adjust routing preferences, manage waypoints, navigate multi-destination routes, and plan routes using these features.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Send feedback Route experience Stay organized with collections Save and categorize content based on your preferences.

### Plan a route \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route](https://developers.google.com/maps/documentation/navigation/android-sdk/customize-route)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- For example: String routeToken = "route token returned by Routes API" ; Example of a returned route token: { // Other fields "routeToken" : "CqMBCjoKCJQOor5DHcwiEhBon3XpHXFnVvDeWMwd9PpAGgz6wtnFDKIBrAHTARpCApUDSggAAAAACjcrP3gBEAQaTApKChgKDQoCCAERAAAAAACAZkAR3SQGgZUXdUASEggAEAMQBhATEBIYAkIEGgIIBSIYChZ2VEJiWlBPSkk1aU5wUVRzNTV5d0FRKAEiFQBcJuds-Efh-2QZhOMTtUCCxEVL g" , } Pass the route token to the Navigation SDK using the Navigator.setDestinations method, specifying the same destination waypoints that you used when creating the route token: setDestinations ( List destinations , CustomRoutesOptions customRoutesOptions , DisplayOptions displayOptions ); For example: CustomRoutesOptions customRoutesOptions = CustomRoutesOptions . builder () . setRouteToken ( routeToken ) . setTravelMode ( TravelMode .
- DisplayOptions displayOptions = new DisplayOptions (); ListenableResultFuture<RouteStatus> routeStatusFuture = navigator . setDestinations ( destinations , customRoutesOptions , displayOptions ); Note: You can configure a maximum of 25 waypoints.
- ArrayList < Waypoint > destinations = Lists . newArrayList (); Waypoint waypoint1 = Waypoint . builder () . setLatLng ( 10 , 20 ) . setTitle ( "title" ) . setVehicleStopover ( true ) . build (); destinations . add ( waypoint1 ); Waypoint waypoint2 = Waypoint . builder () . setPlaceId ( "ChIJYV-J-ziuEmsRIMyoFaMedU4" ) . setTitle ( "title" ) . setVehicleStopover ( true ) . build () destinations . add ( waypoint2 ); String routeToken = "route token returned by Routes API" ; CustomRoutesOptions customRoutesOptions = CustomRoutesOptions . builder () . setRouteToken ( routeToken ) . setTravelMode ( TravelMode .
- Using a route token from the Routes API, Routes Preferred API, or Route Optimization API can help you specify two things for your planned route: A polyline for the route Your route objectives For example, here are some examples of routing objectives you may have: Minimize time to delivery : A business delivering food might want to minimize the time it takes to deliver the food.

### "Navigate a multi-destination route \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Create a helper method to show a message on screen and in the log. private void displayMessage(String errorMessage, String displayMedium) { if (displayMedium.equals(DISPLAY BOTH) displayMedium.equals(DISPLAY TOAST)) { Toast.makeText(this, errorMessage, Toast.LENGTH LONG).show(); } if (displayMedium.equals(DISPLAY BOTH) displayMedium.equals(DISPLAY LOG)) { Log.d(TAG, errorMessage); } } Initialize the Navigation SDK and override the onNavigatorReady() callback to start navigation when the navigator is ready: NavigationApi.getNavigator(this, new NavigationApi.NavigatorListener() { / Sets up the navigation UI when the navigator is ready for use. / @Override public void onNavigatorReady(Navigator navigator) { displayMessage("Navigator ready.", DISPLAY BOTH); mNavigator = navigator; mNavFragment = (SupportNavigationFragment) getFragmentManager() .findFragmentById(R.id.navigation fragment); // Set the camera to follow the device location with 'TILTED' driving view. mNavFragment.getCamera().followMyLocation(Camera.Perspective.TILTED); // Navigate to the specified places. navigateToPlaces(); } / Handles errors from the Navigation SDK. @param errorCode The error code returned by the navigator. / @Override public void onError(@NavigationApi.ErrorCode int errorCode) { switch (errorCode) { case NavigationApi.ErrorCode.NOT AUTHORIZED: displayMessage("Error loading Navigation SDK: Your API key is " + "invalid or not authorized to use the Navigation SDK.", DISPLAY BOTH); break; case NavigationApi.ErrorCode.TERMS NOT ACCEPTED: displayMessage("Error loading Navigation SDK: User did not accept " + "the Navigation Terms of Use.", DISPLAY BOTH); break; case NavigationApi.ErrorCode.NETWORK ERROR: displayMessage("Error loading Navigation SDK: Network error.", DISPLAY BOTH); break; case NavigationApi.ErrorCode.LOCATION PERMISSION MISSING: displayMessage("Error loading Navigation SDK: Location permission " + "is missing.", DISPLAY BOTH); break; default: displayMessage("Error loading Navigation SDK: " + errorCode, DISPLAY BOTH); } } }); Add a method to create a Waypoint object from a given place ID and title. private void createWaypoint(String placeId, String title) { try { mWaypoints.add( Waypoint.builder() .setPlaceIdString(placeId) .setTitle(title) .build() ); } catch (Waypoint.UnsupportedPlaceIdException e) { displayMessage("Error starting navigation: Place ID is not supported: " + placeId, DISPLAY BOTH); } } Add a method to display the calculated travel time and distance to each waypoint. private void displayTimesAndDistances() { List<TimeAndDistance> timesAndDistances = mNavigator.getTimeAndDistanceList(); int leg = 1; String message = "You're on your way!"; for (TimeAndDistance timeAndDistance : timesAndDistances) { message = message + "\nRoute leg: " + leg++ + ": Travel time (seconds): " + timeAndDistance.getSeconds() + ".
- ListenableResultFuture<Navigator.RouteStatus> pendingRoute = mNavigator.setDestinations(mWaypoints); // Define the action to perform when the SDK has determined the route. pendingRoute.setOnResultListener( new ListenableResultFuture.OnResultListener<Navigator.RouteStatus>() { @Override public void onResult(Navigator.RouteStatus code) { switch (code) { case OK: mJourneyInProgress = true; // Hide the toolbar to maximize the navigation UI. if (getActionBar() != null) { getActionBar().hide(); } // Register some listeners for navigation events. registerNavigationListeners(); // Display the time and distance to each waypoint. displayTimesAndDistances(); // Enable voice audio guidance (through the device speaker). mNavigator.setAudioGuidance( Navigator.AudioGuidance.VOICE ALERTS AND GUIDANCE); // Simulate vehicle progress along the route for demo/debug builds. if (BuildConfig.DEBUG) { mNavigator.getSimulator().simulateLocationsAlongExistingRoute( new SimulationOptions().speedMultiplier(5)); } // Start turn-by-turn guidance along the current route. mNavigator.startGuidance(); break; // Handle error conditions returned by the navigator. case NO ROUTE FOUND: displayMessage("Error starting navigation: No route found.", DISPLAY BOTH); break; case NETWORK ERROR: displayMessage("Error starting navigation: Network error.", DISPLAY BOTH); break; case ROUTE CANCELED: displayMessage("Error starting navigation: Route canceled.", DISPLAY BOTH); break; default: displayMessage("Error starting navigation: " + String.valueOf(code), DISPLAY BOTH); } } }); } Build and run your app Connect an Android device to your computer.
- DEBUG ) { mNavigator . getSimulator () . simulateLocationsAlongExistingRoute ( new SimulationOptions () . speedMultiplier ( 5 )); } // Start turn - by - turn guidance along the current route . mNavigator . startGuidance (); break ; // Handle error conditions returned by the navigator . case NO ROUTE FOUND : displayMessage ( "Error starting navigation: No route found." , DISPLAY BOTH ); break ; case NETWORK ERROR : displayMessage ( "Error starting navigation: Network error." , DISPLAY BOTH ); break ; case ROUTE CANCELED : displayMessage ( "Error starting navigation: Route canceled." , DISPLAY BOTH ); break ; default : displayMessage ( "Error starting navigation: " + String . valueOf ( code ), DISPLAY BOTH ); } } }); } / Creates a waypoint from a given place ID and title . @param placeId The ID of the place to be converted to a waypoint . @param title A descriptive title for the waypoint . / private void createWaypoint ( String placeId , String title ) { try { mWaypoints . add ( Waypoint . builder () . setPlaceIdString ( placeId ) . setTitle ( title ) . build ()); } catch ( Waypoint .
- LocationListener mLocationListener ; private Bundle mSavedInstanceState ; private static final String KEY JOURNEY IN PROGRESS = "journey in progress" ; private boolean mJourneyInProgress = false ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; / Sets up the navigator when the activity is created . @param savedInstanceState The activity state bundle . / @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); // Save the navigator state , used to determine whether a journey is in progress . mSavedInstanceState = savedInstanceState ; if ( mSavedInstanceState != null && mSavedInstanceState . containsKey ( KEY JOURNEY IN PROGRESS )) { mJourneyInProgress = ( mSavedInstanceState . getInt ( KEY JOURNEY IN PROGRESS ) != 0 ); } setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Releases navigation listeners when the activity is destroyed . / @Override protected void onDestroy () { super . onDestroy (); if (( mJourneyInProgress ) && ( this . isFinishing ())) { mNavigator . removeArrivalListener ( mArrivalListener ); mNavigator . removeRouteChangedListener ( mRouteChangedListener ); mNavigator . removeRemainingTimeOrDistanceChangedListener ( mRemainingTimeOrDistanceChangedListener ); if ( mRoadSnappedLocationProvider != null ) { mRoadSnappedLocationProvider . removeLocationListener ( mLocationListener ); } displayMessage ( "OnDestroy: Released navigation listeners." , DISPLAY LOG ); } } / Saves the state of the app when the activity is paused . / @Override protected void onSaveInstanceState ( Bundle outState ) { super . onSaveInstanceState ( outState ); if ( mJourneyInProgress ) { outState . putInt ( KEY JOURNEY IN PROGRESS , 1 ); } else { outState . putInt ( KEY JOURNEY IN PROGRESS , 0 ); } } / Starts the Navigation SDK and sets the camera to follow the device 's location.


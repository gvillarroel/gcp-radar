---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.680Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Turn card design update"
feature_slug: "turn-card-design-update"
latest_feature_date: "2025-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/try-demo"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap"
keywords:
  - "turn"
  - "card"
  - "design"
  - "update"
  - "the"
  - "default"
  - "header"
  - "footer"
---

# Turn card design update

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The default turn card header, footer, and height behavior were updated to match the Google Maps app.

## Extended Definition

The default turn card header, footer, and height behavior were updated to match the Google Maps app.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed](https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/try-demo](https://developers.google.com/maps/documentation/navigation/android-sdk/try-demo)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)

## Supporting Pages

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following snippet removes the any custom secondary header and returns to the default content: mNavFragment . setCustomControl ( null , CustomControlPosition .
- You can set the following attributes: Attribute Type Attributes Background color Primary day mode - the daytime color of the navigation header Secondary day mode - the daytime color of the next-turn indicator Primary night mode - the nighttime color of the navigation header Secondary night mode - the nighttime color of the next-turn indicator Text elements for instructions Text color Font Text size of the first row Text size of the second row Text elements for next steps Font Text color of the distance value Text size of the distance value Text color of the distance units Text size of the distance units Maneuver icons Color of the large maneuver icon Color of the small maneuver icon Lane guidance Color of the recommended lane or lanes The following example shows how to set styling options: private SupportNavigationFragment mNavFragment ; mNavFragment = ( SupportNavigationFragment ) getFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Set the styling options on the fragment. mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); Turn off the traffic layer Use GoogleMap.setTrafficEnabled() to enable or disable the traffic layer on the map.
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- DEBUG ) { mNavigator . getSimulator () . simulateLocationsAlongExistingRoute ( new SimulationOptions () . speedMultiplier ( 5 )); } // Start turn - by - turn guidance along the current route . mNavigator . startGuidance (); break ; // Handle error conditions returned by the navigator . case NO ROUTE FOUND : displayMessage ( "Error starting navigation: No route found." ); break ; case NETWORK ERROR : displayMessage ( "Error starting navigation: Network error." ); break ; case ROUTE CANCELED : displayMessage ( "Error starting navigation: Route canceled." ); break ; default : displayMessage ( "Error starting navigation: " + String . valueOf ( code )); } } }); } / Handles the result of the request for location permissions . / @Override public void onRequestPermissionsResult ( int requestCode , @NonNull String [] permissions , @NonNull int [] grantResults ) { mLocationPermissionGranted = false ; switch ( requestCode ) { case PERMISSIONS REQUEST ACCESS FINE LOCATION : { // If request is canceled , the result arrays are empty . if ( grantResults . length > 0 && grantResults [ 0 ] == PackageManager .

### "Enable turn-by-turn data feed \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed](https://developers.google.com/maps/documentation/navigation/android-sdk/tbt-feed)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The service in the following example receives navigation information and uses the TurnByTurnManager to convert the data into a NavInfo object that contains the navigation details. / Receives turn - by - turn navigation information forwarded from NavSDK . / public class NavInfoReceivingService extends Service { / The messenger used by the service to receive nav step updates . / private Messenger incomingMessenger ; private TurnByTurnManager turnByTurnManager ; private final class IncomingNavStepHandler extends Handler { public IncomingNavStepHandler ( Looper looper ) { super ( looper ); } @ Override public void handleMessage ( Message msg ) { // Identify the message through the msg . what field . if ( TurnByTurnManager .
- Icon generation example NavigationUpdatesOptions options = NavigationUpdatesOptions.builder() .setNumNextStepsToPreview(numNextStepsToPreview) .setGeneratedStepImagesType(GeneratedStepImagesType.BITMAP) .setDisplayMetrics(getResources().getDisplayMetrics()) .build(); boolean isRegistered = navigator.registerServiceForNavUpdates( getPackageName(), NavInfoReceivingService.class.getName(), options); After you enable icon generation, the TurnbyTurn StepInfo object populates the maneuverBitmap and lanesBitmap fields with the icons.
- Fields for each navigation step Fields for the overall trip Found in StepInfo Found in NavInfo Full road name Remaining time The maneuver icon Distance to destination Distance to the next step Lane guidance fields Lane guidance The Navigation SDK represents lanes in the navigation turn card as Lane and LaneDirection data objects.
- THREAD PRIORITY DEFAULT ); thread . start (); incomingMessenger = new Messenger ( new IncomingNavStepHandler ( thread . getLooper ())); } Message codes NavInfo messages can be identified through the Message.what field of the Message class, which is set to the value of TurnByTurnManager.MSG NAV INFO .

### Try the demo \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/try-demo](https://developers.google.com/maps/documentation/navigation/android-sdk/try-demo)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open local.defaults.properties and update the value of the MAPS API KEY property: MAPS API KEY= YOUR API KEY Click build and examine the SDK implementation details.
- Open local.defaults.properties and update the value of the MAPS API KEY property: MAPS API KEY= YOUR API KEY Click build and examine the SDK implementation details.
- Note: The app will fail to load the map until you update local.defaults.properties with the provisioned API key.
- Note: The app fails to load the map until you update local.defaults.properties with the provisioned API key.

### GoogleMap \_|\_ Navigation SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- UiSettings getUiSettings () Gets the user interface settings for the map. boolean isBuildingsEnabled () Returns whether 3D buildings layer is enabled. boolean isCameraFollowingMyLocation () Returns whether the camera is following current location or not. boolean isIndoorEnabled () Gets whether indoor maps are currently enabled. boolean isMyLocationEnabled () Gets the status of the my-location layer. boolean isTrafficEnabled () Checks whether the map is drawing traffic data. boolean isTransitEnabled () Checks whether the map is drawing transit data. void moveCamera ( CameraUpdate update) Repositions the camera according to the instructions defined in the update. void removeOnMapCapabilitiesChangedListener ( GoogleMap.OnMapCapabilitiesChangedListener listener) Removes a listener that's invoked when the map capabilities are changed. void resetMinMaxZoomPreference () Removes any previously specified upper and lower zoom bounds. void setBuildingsEnabled (boolean enabled) Turns the 3D buildings layer on or off. void setContentDescription (String description) Sets a contentDescription for the map. boolean setIndoorEnabled (boolean enabled) Sets whether indoor maps should be enabled. void setInfoWindowAdapter ( GoogleMap.InfoWindowAdapter adapter) Sets a custom renderer for the contents of info windows. void setLatLngBoundsForCameraTarget ( LatLngBounds bounds) Specifies a LatLngBounds to constrain the camera target, so that when users scroll and pan the map, the camera target does not move outside these bounds. void setLocationSource ( LocationSource source) Replaces the location source of the my-location layer. void setMapColorScheme (int mapColorScheme) Sets the map rendering color scheme to light, dark, or follow system settings after initialization. boolean setMapStyle ( MapStyleOptions style) Sets the styling of the base map. void setMapType (int type) Sets the type of map tiles that should be displayed. void setMaxZoomPreference (float maxZoomPreference) Sets a preferred upper bound for the camera zoom. void setMinZoomPreference (float minZoomPreference) Sets a preferred lower bound for the camera zoom. void setMyLocationEnabled (boolean enabled) Enables or disables the my-location layer. void setOnCameraChangeListener ( GoogleMap.OnCameraChangeListener listener) This method is deprecated.
- If you have fetched the Navigator , then the top padding value only applies when the header is disabled (see NavigationView.setHeaderEnabled(boolean) ), and the bottom padding only applies when the ETA card is disabled (see NavigationView.setEtaCardEnabled(boolean) ).
- The CameraPosition returned is a snapshot of the current position, and will not automatically update when the camera moves.
- The Projection returned is a snapshot of the current projection, and will not automatically update when the camera moves.


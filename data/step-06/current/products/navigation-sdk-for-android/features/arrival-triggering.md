---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.670Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Arrival triggering"
feature_slug: "arrival-triggering"
latest_feature_date: "2026-03-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/events"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav"
keywords:
  - "arrival"
  - "triggering"
  - "improves"
  - "to"
  - "detect"
  - "destination"
  - "more"
  - "accurately"
---

# Arrival triggering

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Improves arrival triggering to detect destination arrival more accurately and consistently.

## Extended Definition

Improves arrival triggering to detect destination arrival more accurately and consistently.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/events](https://developers.google.com/maps/documentation/navigation/android-sdk/events)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav)

## Supporting Pages

### "Navigate a multi-destination route \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination](https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- See the code Show/Hide the Java code for the navigation activity. package com . example . navsdkmultidestination ; import android.content.pm.PackageManager ; import android.location.Location ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.libraries.navigation.ArrivalEvent ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.RoadSnappedLocationProvider ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.TimeAndDistance ; import com.google.android.libraries.navigation.Waypoint ; import java.util.ArrayList ; import java.util.List ; / An activity that displays a map and a navigation UI , guiding the user from their current location to multiple destinations , also known as waypoints . / public class NavigationActivityMultiDestination extends AppCompatActivity { private static final String TAG = NavigationActivityMultiDestination . class . getSimpleName (); private static final String DISPLAY BOTH = "both" ; private static final String DISPLAY TOAST = "toast" ; private static final String DISPLAY LOG = "log" ; private Navigator mNavigator ; private RoadSnappedLocationProvider mRoadSnappedLocationProvider ; private SupportNavigationFragment mNavFragment ; private final List<Waypoint> mWaypoints = new ArrayList <> (); private Navigator .
- ArrivalListener () { @Override public void onArrival ( ArrivalEvent arrivalEvent ) { displayMessage ( "onArrival: You've arrived at a waypoint: " + mNavigator . getCurrentRouteSegment () . getDestinationWaypoint () . getTitle (), DISPLAY BOTH ); // Start turn - by - turn guidance for the next leg of the route . if ( arrivalEvent . isFinalDestination ()) { displayMessage ( "onArrival: You've arrived at the final destination." , DISPLAY BOTH ); } else { mNavigator . continueToNextDestination (); mNavigator . startGuidance (); } } }; // Listens for arrival at a waypoint . mNavigator . addArrivalListener ( mArrivalListener ); mRouteChangedListener = new Navigator .
- LocationListener mLocationListener ; private Bundle mSavedInstanceState ; private static final String KEY JOURNEY IN PROGRESS = "journey in progress" ; private boolean mJourneyInProgress = false ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; / Sets up the navigator when the activity is created . @param savedInstanceState The activity state bundle . / @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); // Save the navigator state , used to determine whether a journey is in progress . mSavedInstanceState = savedInstanceState ; if ( mSavedInstanceState != null && mSavedInstanceState . containsKey ( KEY JOURNEY IN PROGRESS )) { mJourneyInProgress = ( mSavedInstanceState . getInt ( KEY JOURNEY IN PROGRESS ) != 0 ); } setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Releases navigation listeners when the activity is destroyed . / @Override protected void onDestroy () { super . onDestroy (); if (( mJourneyInProgress ) && ( this . isFinishing ())) { mNavigator . removeArrivalListener ( mArrivalListener ); mNavigator . removeRouteChangedListener ( mRouteChangedListener ); mNavigator . removeRemainingTimeOrDistanceChangedListener ( mRemainingTimeOrDistanceChangedListener ); if ( mRoadSnappedLocationProvider != null ) { mRoadSnappedLocationProvider . removeLocationListener ( mLocationListener ); } displayMessage ( "OnDestroy: Released navigation listeners." , DISPLAY LOG ); } } / Saves the state of the app when the activity is paused . / @Override protected void onSaveInstanceState ( Bundle outState ) { super . onSaveInstanceState ( outState ); if ( mJourneyInProgress ) { outState . putInt ( KEY JOURNEY IN PROGRESS , 1 ); } else { outState . putInt ( KEY JOURNEY IN PROGRESS , 0 ); } } / Starts the Navigation SDK and sets the camera to follow the device 's location.
- ListenableResultFuture<Navigator.RouteStatus> pendingRoute = mNavigator.setDestinations(mWaypoints); // Define the action to perform when the SDK has determined the route. pendingRoute.setOnResultListener( new ListenableResultFuture.OnResultListener<Navigator.RouteStatus>() { @Override public void onResult(Navigator.RouteStatus code) { switch (code) { case OK: mJourneyInProgress = true; // Hide the toolbar to maximize the navigation UI. if (getActionBar() != null) { getActionBar().hide(); } // Register some listeners for navigation events. registerNavigationListeners(); // Display the time and distance to each waypoint. displayTimesAndDistances(); // Enable voice audio guidance (through the device speaker). mNavigator.setAudioGuidance( Navigator.AudioGuidance.VOICE ALERTS AND GUIDANCE); // Simulate vehicle progress along the route for demo/debug builds. if (BuildConfig.DEBUG) { mNavigator.getSimulator().simulateLocationsAlongExistingRoute( new SimulationOptions().speedMultiplier(5)); } // Start turn-by-turn guidance along the current route. mNavigator.startGuidance(); break; // Handle error conditions returned by the navigator. case NO ROUTE FOUND: displayMessage("Error starting navigation: No route found.", DISPLAY BOTH); break; case NETWORK ERROR: displayMessage("Error starting navigation: Network error.", DISPLAY BOTH); break; case ROUTE CANCELED: displayMessage("Error starting navigation: Route canceled.", DISPLAY BOTH); break; default: displayMessage("Error starting navigation: " + String.valueOf(code), DISPLAY BOTH); } } }); } Build and run your app Connect an Android device to your computer.

### "Listen for navigation events \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/events](https://developers.google.com/maps/documentation/navigation/android-sdk/events)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- LENGTH LONG ) . show (); } if ( displayMedium . equals ( DISPLAY BOTH ) displayMedium . equals ( DISPLAY LOG )) { Log . d ( TAG , errorMessage ); } } } Detect arrival at a destination Here, a destination refers to either a final destination or a waypoint.
- You can register callbacks to detect arrival at waypoints or the final destination and trigger actions like resuming or stopping navigation.
- To detect arrival, call Navigator.addArrivalListener() , which registers for a callback when the device reaches a destination.
- See the code Show/Hide the Java code for the navigation activity. package com . example . navsdkmultidestination ; import android.content.pm.PackageManager ; import android.location.Location ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.libraries.navigation.ArrivalEvent ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.RoadSnappedLocationProvider ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.TimeAndDistance ; import com.google.android.libraries.navigation.Waypoint ; import java.util.ArrayList ; import java.util.List ; / An activity that displays a map and a navigation UI , guiding the user from their current location to multiple destinations , also known as waypoints . / public class NavigationActivityMultiDestination extends AppCompatActivity { private static final String TAG = NavigationActivityMultiDestination . class . getSimpleName (); private static final String DISPLAY BOTH = "both" ; private static final String DISPLAY TOAST = "toast" ; private static final String DISPLAY LOG = "log" ; private Navigator mNavigator ; private RoadSnappedLocationProvider mRoadSnappedLocationProvider ; private SupportNavigationFragment mNavFragment ; private final List<Waypoint> mWaypoints = new ArrayList <> (); private Navigator .

### "Route to navigation points \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points](https://developers.google.com/maps/documentation/navigation/android-sdk/navigation-points)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- The Navigation SDK for Android offers enhanced ways to specify waypoints, providing more accurate routing and a better arrival experience, especially for destinations with multiple entrances or specific navigation points.
- This allows the Navigation SDK to provide a richer arrival experience by highlighting the destination building or showing nearby points of interest related to the Place ID. // Assuming 'placeId' is the Place ID String // Assuming 'lat' and 'lng' are the double values for latitude and longitude // Assuming 'destinationName' is a String title for the waypoint Waypoint waypointWithPlaceIdAndLatLng = Waypoint . builder () . setTitle ( destinationName ) . setPlaceIdString ( placeId ) . setLatLng ( lat , lng ) . build (); // Use this waypoint in navigator.setDestinations() Considerations When you provide both placeId and latlng : The route primarily targets the specified latlng .
- Summary of valid waypoint configurations Method setLatLng() setPlaceIdString() setNavigationPointToken() Routing behavior Destination highlighting Latitude/longitude coordinates only set absent absent Routes to road segment nearest to the defined coordinates Shown if destination can be inferred with high confidence Place ID only absent set absent Routes to the default navigation point for the Place ID From Place ID Navigation point token only absent absent set Routes to the precise navigation point represented by the token From destination defined in original destinations method of the Geocoding API request Latitude/longitude coordinates and Place ID combined set set absent Routes to road segment nearest to the defined coordinates From Place ID, though not shown if Place ID is too far from the latitude/longitude coordinates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- These methods are mutually exclusive with setNavigationPointToken() . // Assuming 'navPointToken' is a String obtained from the destinations method of the Geocoding API // Assuming 'destinationName' is a String title for the waypoint Waypoint waypointWithToken = Waypoint . builder () . setTitle ( destinationName ) . setNavigationPointToken ( navPointToken ) . build (); // Use this waypoint in navigator.setDestinations() Combine Place ID and latitude and longitude Starting with v7.4, you can provide both a Place ID and latitude and longitude coordinates when creating a Waypoint .

### "Custom navigation experience \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- For more information, see Enable Navigation for Android Auto Drivers using your app want an overview map for most of their journey, with only minimal turn-by-turn guidance for city streets.
- Your app should allow drivers to enter and exit the Google navigation experience as they need, without alternating the navigator's settings for destination and trip mode.
- While using the Google navigation experience is generally easier to implement, building your own custom navigation experience allows for more customization.


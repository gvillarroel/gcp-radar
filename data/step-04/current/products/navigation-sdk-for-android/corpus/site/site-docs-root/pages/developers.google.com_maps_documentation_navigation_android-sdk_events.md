---
title: "Listen for navigation events \_|\_ Navigation SDK for Android \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/events
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/events
  title: "Listen for navigation events \_|\_ Navigation SDK for Android \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Navigation SDK for Android
Send feedback
Listen for navigation events
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Navigation SDK for Android allows you to listen for events like arrival at destinations, location updates, and changes in time or distance during navigation.
You can register callbacks to detect arrival at waypoints or the final destination and trigger actions like resuming or stopping navigation.
Utilize listeners to receive road-snapped location updates, remaining time/distance changes, and route updates, ensuring proper resource management to prevent memory leaks.
The SDK provides methods for accessing route information, handling ETA visualization, and responding to night mode changes for a comprehensive navigation experience.
Remember to remove listeners when they are no longer needed to avoid memory leaks and optimize resource utilization.
Your app can listen to events that occur as the user navigates along a route.
Overview
Use the following interfaces to listen for navigation events:
Navigator.ArrivalListener provides the onArrival()
callback, triggered when the device arrives at a destination.
RoadSnappedLocationProvider.LocationListener provides
the onLocationChanged() callback, triggered when the device's location
changes.
Navigator.RemainingTimeOrDistanceChangedListener
provides the onRemainingTimeOrDistanceChanged() callback, triggered when
the time or distance to the next destination changes by more than a given
amount.
Navigator.RouteChangedListener provides the
onRouteChanged() callback, triggered when the route changes.
See the code
Show/Hide the Java code
for the navigation activity.
package com . example . navsdkmultidestination ;
import android.content.pm.PackageManager ;
import android.location.Location ;
import android.os.Bundle ;
import android.util.Log ;
import android.widget.Toast ;
import androidx.annotation.NonNull ;
import androidx.appcompat.app.AppCompatActivity ;
import androidx.core.app.ActivityCompat ;
import androidx.core.content.ContextCompat ;
import com.google.android.gms.maps.GoogleMap.CameraPerspective ;
import com.google.android.libraries.navigation.ArrivalEvent ;
import com.google.android.libraries.navigation.ListenableResultFuture ;
import com.google.android.libraries.navigation.NavigationApi ;
import com.google.android.libraries.navigation.Navigator ;
import com.google.android.libraries.navigation.RoadSnappedLocationProvider ;
import com.google.android.libraries.navigation.SimulationOptions ;
import com.google.android.libraries.navigation.SupportNavigationFragment ;
import com.google.android.libraries.navigation.TimeAndDistance ;
import com.google.android.libraries.navigation.Waypoint ;
import java.util.ArrayList ;
import java.util.List ;
/**
* An activity that displays a map and a navigation UI , guiding the user from their current location
* to multiple destinations , also known as waypoints .
*/
public class NavigationActivityMultiDestination extends AppCompatActivity {
private static final String TAG = NavigationActivityMultiDestination . class . getSimpleName ();
private static final String DISPLAY_BOTH = "both" ;
private static final String DISPLAY_TOAST = "toast" ;
private static final String DISPLAY_LOG = "log" ;
private Navigator mNavigator ;
private RoadSnappedLocationProvider mRoadSnappedLocationProvider ;
private SupportNavigationFragment mNavFragment ;
private final List<Waypoint> mWaypoints = new ArrayList <> ();
private Navigator . ArrivalListener mArrivalListener ;
private Navigator . RouteChangedListener mRouteChangedListener ;
private Navigator . RemainingTimeOrDistanceChangedListener mRemainingTimeOrDistanceChangedListener ;
private RoadSnappedLocationProvider . LocationListener mLocationListener ;
private Bundle mSavedInstanceState ;
private static final String KEY_JOURNEY_IN_PROGRESS = "journey_in_progress" ;
private boolean mJourneyInProgress = false ;
// Set fields for requesting location permission .
private static final int PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION = 1 ;
private boolean mLocationPermissionGranted ;
/**
* Sets up the navigator when the activity is created .
*
* @param savedInstanceState The activity state bundle .
*/
@Override
protected void onCreate ( Bundle savedInstanceState ) {
super . onCreate ( savedInstanceState );
// Save the navigator state , used to determine whether a journey is in progress .
mSavedInstanceState = savedInstanceState ;
if ( mSavedInstanceState != null && mSavedInstanceState . containsKey ( KEY_JOURNEY_IN_PROGRESS )) {
mJourneyInProgress = ( mSavedInstanceState . getInt ( KEY_JOURNEY_IN_PROGRESS ) != 0 );
}
setContentView ( R . layout . activity_main );
// Initialize the Navigation SDK .
initializeNavigationSdk ();
}
/** Releases navigation listeners when the activity is destroyed . */
@Override
protected void onDestroy () {
super . onDestroy ();
if (( mJourneyInProgress ) && ( this . isFinishing ())) {
mNavigator . removeArrivalListener ( mArrivalListener );
mNavigator . removeRouteChangedListener ( mRouteChangedListener );
mNavigator . removeRemainingTimeOrDistanceChangedListener (
mRemainingTimeOrDistanceChangedListener );
if ( mRoadSnappedLocationProvider != null ) {
mRoadSnappedLocationProvider . removeLocationListener ( mLocationListener );
}
displayMessage ( "OnDestroy: Released navigation listeners." , DISPLAY_LOG );
}
}
/** Saves the state of the app when the activity is paused . */
@Override
protected void onSaveInstanceState ( Bundle outState ) {
super . onSaveInstanceState ( outState );
if ( mJourneyInProgress ) {
outState . putInt ( KEY_JOURNEY_IN_PROGRESS , 1 );
} else {
outState . putInt ( KEY_JOURNEY_IN_PROGRESS , 0 );
}
}
/**
* Starts the Navigation SDK and sets the camera to follow the device 's location. Calls the
* navigateToPlaces () method when the navigator is ready .
*/
private void initializeNavigationSdk () {
/*
* Request location permission , so that we can get the location of the
* device . The result of the permission request is handled by a callback ,
* onRequestPermissionsResult .
*/
if ( ContextCompat . checkSelfPermission (
this . getApplicationContext (), android . Manifest . permission . ACCESS_FINE_LOCATION )
== PackageManager . PERMISSION_GRANTED ) {
mLocationPermissionGranted = true ;
} else {
ActivityCompat . requestPermissions (
this ,
new String [] { android . Manifest . permission . ACCESS_FINE_LOCATION },
PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION );
}
if ( ! mLocationPermissionGranted ) {
displayMessage (
"Error loading Navigation SDK: " + "The user has not granted location permission." ,
DISPLAY_BOTH );
return ;
}
// Get a navigator .
NavigationApi . getNavigator (
this ,
new NavigationApi . NavigatorListener () {
/** Sets up the navigation UI when the navigator is ready for use . */
@Override
public void onNavigatorReady ( Navigator navigator ) {
displayMessage ( "Navigator ready." , DISPLAY_BOTH );
mNavigator = navigator ;
mNavFragment =
( SupportNavigationFragment )
getSupportFragmentManager () . findFragmentById ( R . id . navigation_fragment );
// Set the camera to follow the device location with 'TILTED' driving view .
mNavFragment . getMapAsync (
googleMap - > googleMap . followMyLocation ( CameraPerspective . TILTED ));
// Navigate to the specified places .
navigateToPlaces ();
}
/**
* Handles errors from the Navigation SDK .
*
* @param errorCode The error code returned by the navigator .
*/
@Override
public void onError ( @NavigationApi . ErrorCode int errorCode ) {
switch ( errorCode ) {
case NavigationApi . ErrorCode . NOT_AUTHORIZED :
displayMessage (
"Error loading Navigation SDK: Your API key is "
+ "invalid or not authorized to use the Navigation SDK." ,
DISPLAY_BOTH );
break ;
case NavigationApi . ErrorCode . TERMS_NOT_ACCEPTED :
displayMessage (
"Error loading Navigation SDK: User did not accept "
+ "the Navigation Terms of Use." ,
DISPLAY_BOTH );
break ;
case NavigationApi . ErrorCode . NETWORK_ERROR :
displayMessage ( "Error loading Navigation SDK: Network error." , DISPLAY_BOTH );
break ;
case NavigationApi . ErrorCode . LOCATION_PERMISSION_MISSING :
displayMessage (
"Error loading Navigation SDK: Location permission " + "is missing." ,
DISPLAY_BOTH );
break ;
default :
displayMessage ( "Error loading Navigation SDK: " + errorCode , DISPLAY_BOTH );
}
}
});
}
/** Requests directions from the user 's current location to a list of waypoints. */
private void navigateToPlaces () {
// Set up a waypoint for each place that we want to go to .
createWaypoint ( "ChIJq6qq6jauEmsRJAf7FjrKnXI" , "Sydney Star" );
createWaypoint ( "ChIJ3S-JXmauEmsRUcIaWtf4MzE" , "Sydney Opera House" );
createWaypoint ( "ChIJLwgLFGmuEmsRzpDhHQuyyoU" , "Sydney Conservatorium of Music" );
// If this journey is already in progress , no need to restart navigation .
// This can happen when the user rotates the device , or sends the app to the background .
if ( mSavedInstanceState != null
&& mSavedInstanceState . containsKey ( KEY_JOURNEY_IN_PROGRESS )
&& mSavedInstanceState . getInt ( KEY_JOURNEY_IN_PROGRESS ) == 1 ) {
return ;
}
// Create a future to await the result of the asynchronous navigator task .
ListenableResultFuture<Navigator . RouteStatus > pendingRoute =
mNavigator . setDestinations ( mWaypoints );
// Define the action to perform when the SDK has determined the route .
pendingRoute . setOnResultListener (
new ListenableResultFuture . OnResultListener<Navigator . RouteStatus > () {
@Override
public void onResult ( Navigator . RouteStatus code ) {
switch ( code ) {
case OK :
mJourneyInProgress = true ;
// Hide the toolbar to maximize the navigation UI .
if ( getActionBar () != null ) {
getActionBar () . hide ();
}
// Register some listeners for navigation events .
registerNavigationListeners ();
// Display the time and distance to each waypoint .
displayTimesAndDistances ();
// Enable voice audio guidance ( through the device speaker ) .
mNavigator . setAudioGuidance ( Navigator . AudioGuidance . VOICE_ALERTS_AND_GUIDANCE );
// Simulate vehicle progress along the route for demo / debug builds .
if ( BuildConfig . DEBUG ) {
mNavigator
. getSimulator ()
. simulateLocationsAlongExistingRoute (
new SimulationOptions () . speedMultiplier ( 5 ));
}
// Start turn - by - turn guidance along the current route .
mNavigator . startGuidance ();
break ;
// Handle error conditions returned by the navigator .
case NO_ROUTE_FOUND :
displayMessage ( "Error starting navigation: No route found." , DISPLAY_BOTH );
break ;
case NETWORK_ERROR :
displayMessage ( "Error starting navigation: Network error." , DISPLAY_BOTH );
break ;
case ROUTE_CANCELED :
displayMessage ( "Error starting navigation: Route canceled." , DISPLAY_BOTH );
break ;
default :
displayMessage ( "Error starting navigation: " + String . valueOf ( code ), DISPLAY_BOTH );
}
}
});
}
/**
* Creates a waypoint from a given place ID and title .
*
* @param placeId The ID of the place to be converted to a waypoint .
* @param title A descriptive title for the waypoint .
*/
private void createWaypoint ( String placeId , String title ) {
try {
mWaypoints . add ( Waypoint . builder () . setPlaceIdString ( placeId ) . setTitle ( title ) . build ());
} catch ( Waypoint . UnsupportedPlaceIdException e ) {
displayMessage (
"Error starting navigation: Place ID is not supported: " + placeId , DISPLAY_BOTH );
}
}
/** Displays the calculated travel time and distance to each waypoint . */
private void displayTimesAndDistances () {
List<TimeAndDistance> timesAndDistances = mNavigator . getTimeAndDistanceList ();
int leg = 1 ;
String message = "You're on your way!" ;
for ( TimeAndDistance timeAndDistance : timesAndDistances ) {
message =
message
+ " \n Route leg: "
+ leg ++
+ ": Travel time (seconds): "
+ timeAndDistance . getSeconds ()
+ ". Distance (meters): "
+ timeAndDistance . getMeters ();
}
displayMessage ( message , DISPLAY_BOTH );
}
/**
* Registers some event listeners to show a message and take other necessary steps when specific
* navigation events occur .
*/
private void registerNavigationListeners () {
mArrivalListener =
new Navigator . ArrivalListener () {
@Override
public void onArrival ( ArrivalEvent arrivalEvent ) {
displayMessage (
"onArrival: You've arrived at a waypoint: "
+ mNavigator . getCurrentRouteSegment () . getDestinationWaypoint () . getTitle (),
DISPLAY_BOTH );
// Start turn - by - turn guidance for the next leg of the route .
if ( arrivalEvent . isFinalDestination ()) {
displayMessage ( "onArrival: You've arrived at the final destination." , DISPLAY_BOTH );
} else {
mNavigator . continueToNextDestination ();
mNavigator . startGuidance ();
}
}
};
// Listens for arrival at a waypoint .
mNavigator . addArrivalListener ( mArrivalListener );
mRouteChangedListener =
new Navigator . RouteChangedListener () {
@Override
public void onRouteChanged () {
displayMessage (
"onRouteChanged: The driver's route has changed. Current waypoint: "
+ mNavigator . getCurrentRouteSegment () . getDestinationWaypoint () . getTitle (),
DISPLAY_LOG );
}
};
// Listens for changes in the route .
mNavigator . addRouteChangedListener ( mRouteChangedListener );
// Listens for road - snapped location updates .
mRoadSnappedLocationProvider = NavigationApi . getRoadSnappedLocationProvider ( getApplication ());
mLocationListener =
new RoadSnappedLocationProvider . LocationListener () {
@Override
public void onLocationChanged ( Location location ) {
displayMessage (
"onLocationUpdated: Navigation engine has provided a new"
+ " road-snapped location: "
+ location . toString (),
DISPLAY_LOG );
}
@Override
public void onRawLocationUpdate ( Location location ) {
displayMessage (
"onLocationUpdated: Navigation engine has provided a new"
+ " raw location: "
+ location . toString (),
DISPLAY_LOG );
}
};
if ( mRoadSnappedLocationProvider != null ) {
mRoadSnappedLocationProvider . addLocationListener ( mLocationListener );
} else {
displayMessage ( "ERROR: Failed to get a location provider" , DISPLAY_LOG );
}
mRemainingTimeOrDistanceChangedListener =
new Navigator . RemainingTimeOrDistanceChangedListener () {
@Override
public void onRemainingTimeOrDistanceChanged () {
displayMessage (
"onRemainingTimeOrDistanceChanged: Time or distance estimate" + " has changed." ,
DISPLAY_LOG );
}
};
// Listens for changes in time or distance .
mNavigator . addRemainingTimeOrDistanceChangedListener (
60 , 100 , mRemainingTimeOrDistanceChangedListener );
}
/** Handles the result of the request for location permissions . */
@Override
public void onRequestPermissionsResult (
int requestCode , @NonNull String [] permissions , @NonNull int [] grantResults ) {
mLocationPermissionGranted = false ;
switch ( requestCode ) {
case PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION :
{
// If request is canceled , the result arrays are empty .
if ( grantResults . length > 0 && grantResults [ 0 ] == PackageManager . PERMISSION_GRANTED ) {
mLocationPermissionGranted = true ;
}
}
}
}
/**
* Shows a message on screen and in the log . Used when something goes wrong .
*
* @param errorMessage The message to display .
*/
private void displayMessage ( String errorMessage , String displayMedium ) {
if ( displayMedium . equals ( DISPLAY_BOTH ) || displayMedium . equals ( DISPLAY_TOAST )) {
Toast . makeText ( this , errorMessage , Toast . LENGTH_LONG ) . show ();
}
if ( displayMedium . equals ( DISPLAY_BOTH ) || displayMedium . equals ( DISPLAY_LOG )) {
Log . d ( TAG , errorMessage );
}
}
}
Detect arrival at a destination
Here, a destination refers to either a final destination or a waypoint. To
detect arrival, call Navigator.addArrivalListener() ,
which registers for a callback when the device reaches a destination.
Upon arrival, the Navigation SDK for Android fires the
onArrival() callback, which can then be used to either stop the
turn-by-turn guidance using Navigator.stopGuidance() , or
advance to the next waypoint using
Navigator.continueToNextDestination() . If the
navigation session only included a single destination, or if there are no
destinations left in the list of destinations, calling
Navigator.continueToNextDestination()
automatically stops guidance.
When you call continueToNextDestination() , the navigator discards all
information about the previous destination. If you want to analyze information
about the previous route segment, you must retrieve the information from the
navigator before calling continueToNextDestination() .
To avoid memory leaks, you must call
removeArrivalListener(listener) when you no longer
need the listener.
mNavigator . addArrivalListener ( new Navigator . ArrivalListener () {
@Override
public void onArrival ( ArrivalEvent arrivalEvent ) {
displayMessage ( "onArrival: You've arrived at a waypoint: "
+ mNavigator . getCurrentRouteSegment (). getDestinationWaypoint (). getTitle (),
DISPLAY_BOTH );
// Start turn-by-turn guidance for the next leg of the route.
if ( arrivalEvent . isFinalDestination ()) {
displayMessage ( "onArrival: You've arrived at the final destination." ,
DISPLAY_BOTH );
} else {
mNavigator . continueToNextDestination ();
mNavigator . startGuidance ();
}
}
});
Receive location updates
Obtain a RoadSnappedLocationProvider from the
NavigationApi , then call
RoadSnappedLocationProvider.addLocationListener() to
register for a callback when the device's location or heading changes. Note that
this location is snapped to a road, and so it may be different from the location
returned by the fused location provider in the Google Play services
location APIs.
The Navigation SDK provides location updates as often
as possible. When a location update is available, the
Navigation SDK fires the
onLocationChanged() callback.
Road-snapped location updates are independent of navigation, and can continue
even after navigation has stopped. Subscribing to location updates may cause
battery drain, a memory leak, or unintentional collection of device location
data if you leave the location updates running in the background. Call
RoadSnappedLocationProvider.removeLocationListener
when you no longer need the listener.
mRoadSnappedLocationProvider =
NavigationApi . getRoadSnappedLocationProvider ( getApplication ());
if ( mRoadSnappedLocationProvider != null ) {
mRoadSnappedLocationProvider . addLocationListener (
new RoadSnappedLocationProvider . LocationListener () {
@Override
public void onLocationChanged ( Location location ) {
displayMessage ( "onLocationUpdated: Navigation engine has provided a new"
+ " road-snapped location: "
+ location . toString (),
DISPLAY_LOG );
}
});
} else {
displayMessage ( "ERROR: Failed to get a location provider" , DISPLAY_LOG );
}
Receive time and distance updates
Call
Navigator.addRemainingTimeOrDistanceChangedListener()
to register for a callback when the remaining time (seconds) or distance
(meters) changes by more than a given threshold.
When the change in time or distance exceeds the specified amount, the
Navigation SDK fires the
onRemainingTimeOrDistanceChanged()
callback.
To find the remaining time and distance, call
Navigator.getTimeAndDistanceList() . Note that the
times and distances in the list are cumulative: they show the time and distance
from the current location to each waypoint, not from one waypoint to another.
The TimeAndDistance object now also returns delaySeverity . This enum will be
either heavy, meduim, light, or unknown. This corresponds to the color you see
on eta in the maps UI (heavy = red, medium = yellow, light = green). This is
helpful if you need to create your own eta footer.
To avoid memory leaks, you must call
Navigator.removeRemainingTimeOrDistanceChangedListener(listener)
when you no longer need the listener.
The sample below requests a callback if the remaining time changes by more than
60 seconds or the remaining distance changes by more than 100 meters.
mNavigator . addRemainingTimeOrDistanceChangedListener ( 60 , 100 ,
new Navigator . RemainingTimeOrDistanceChangedListener () {
@Override
public void onRemainingTimeOrDistanceChanged () {
displayMessage ( "onRemainingTimeOrDistanceChanged: Time or distance estimate"
+ " has changed." ,
DISPLAY_LOG );
}
});
You can show remaining time and distance information using the built-in display
using the setEtaCardEnabled() method and passing a
parameter with the value TRUE . To suppress the time and distance display, set
this value to FALSE .
You can also expose the ETA for multiple waypoints using the
getTimeAndDistanceList() method.
Receive route updates
Call Navigator.addRouteChangedListener() to
register for a callback when the route changes.
When the route changes, the Navigation SDK fires the
onRouteChanged() callback. You can call
Navigator.getRouteSegments and
Navigator.getCurrentRouteSegment() to find the new
route.
To avoid memory leaks, you must call
removeRouteChangedListener(listener) when you no
longer need the listener.
mNavigator . addRouteChangedListener ( new Navigator . RouteChangedListener () {
@Override
public void onRouteChanged () {
displayMessage ( "onRouteChanged: The driver's route has changed. Current waypoint: "
+ mNavigator . getCurrentRouteSegment (). getDestinationWaypoint (). getTitle (),
DISPLAY_LOG );
}
});
Detect when night mode changes
Call
NavigationView.addOnNightModeChangedListener
or
SupportNavigationFragment.addOnNightModeChangedListener
to register for a callback when night mode changes.
Note: In most cases, we recommend using
SupportNavigationFragment ,
which is a wrapper for
NavigationView ,
instead of interacting directly with NavigationView . For more information, see
Navigation map interaction best practices
.
The following example shows listening for night mode changes on a navigation
fragment.
mNavFragment . addOnNightModeChangedListener ( new NavigationView . OnNightModeChangedListener () {
@Override
public void onNightModeChanged ( NightModeChangedEvent nightModeChangedEvent ) {
displayMessage ( "Night mode is active: " + nightModeChangedEvent . inNightMode (),
DISPLAY_LOG );
}
});
You can also set night mode programmatically. For more information, see Set
night mode .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]

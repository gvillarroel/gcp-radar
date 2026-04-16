---
title: "Navigate a multi-destination route \_|\_ Navigation SDK for Android \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/multi-destination
  title: "Navigate a multi-destination route \_|\_ Navigation SDK for Android \_|\_\
    \ Google for Developers"
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
Navigate a multi-destination route
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Maps Navigation SDK for Android enables turn-by-turn navigation with multiple destinations (waypoints) within your app.
Integrate the SDK by setting up your project, adding UI elements, and initializing the Navigation API.
Create waypoints using place IDs, set them as destinations for the navigator, and start guidance to begin navigation.
The SDK provides features for simulating progress, handling errors, and customizing the user interface.
Request location permissions and ensure users accept Google Navigation Terms of Service for a smooth user experience.
Notice: fromLatLng() and fromPlaceId()
are deprecated, but will remain available with no further updates. We
recommend migrating to the new Waypoint.Builder .
Follow this guide to plot a route within your app to multiple destinations,
also called waypoints, using the Navigation SDK for Android.
Overview
Integrate the Navigation SDK into your app, as
described in Set up your project .
Add a SupportNavigationFragment or
NavigationView to your app. This UI element
adds the interactive map and turn-by-turn navigation UI to your activity.
Use the NavigationApi class to initialize the SDK.
Define a Navigator to control turn-by-turn navigation:
Add destinations using setDestinations() .
Start navigation with startGuidance() .
Use getSimulator() to simulate the progress of the
vehicle along the route, for testing, debugging, and demonstrating your
app.
Build and run your app.
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
Add a navigation fragment
The SupportNavigationFragment is the UI component
that displays the visual output of navigation, including an interactive map and
turn-by-turn directions. You can declare the fragment in your XML layout file as
shown below:
<?xml version="1.0" encoding="utf-8"?>
<fragment xmlns:android="http://schemas.android.com/apk/res/android"
android:name="com.google.android.libraries.navigation.SupportNavigationFragment"
android:id="@+id/navigation_fragment"
android:layout_width="match_parent"
android:layout_height="match_parent"/>
Alternatively, you can construct the fragment programmatically, as described in
the Android documentation , using
FragmentActivity.getSupportFragmentManager() .
As an alternative to a fragment, the UI component is also available as a
NavigationView . In most cases, we recommend using
SupportNavigationFragment ,
which is a wrapper for
NavigationView ,
instead of interacting directly with NavigationView . For more information, see
Navigation map interaction best practices
.
Request location permission
Your app must request location permission in order to determine the
location of the device.
This tutorial provides the code you need to request fine location permission.
For more details, see the guide to Android permissions .
Add the permission as a child of the <manifest> element in your Android
manifest:
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
package="com.example.navsdkmultidestination">
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
</manifest>
Request runtime permissions in your app, giving the user the opportunity
to allow or deny location permission. The following code checks whether the
user has granted fine location permission. If not, it requests the permission:
if (ContextCompat.checkSelfPermission(this.getApplicationContext(),
android.Manifest.permission.ACCESS_FINE_LOCATION)
== PackageManager.PERMISSION_GRANTED) {
mLocationPermissionGranted = true;
} else {
ActivityCompat.requestPermissions(this,
new String[] { android.Manifest.permission.ACCESS_FINE_LOCATION },
PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION);
}
if (!mLocationPermissionGranted) {
displayMessage("Error loading Navigation SDK: "
+ "The user has not granted location permission.", DISPLAY_BOTH);
return;
}
Override the onRequestPermissionsResult() callback to handle the result of
the permission request:
@Override
public void onRequestPermissionsResult(int requestCode, @NonNull String permissions[],
@NonNull int[] grantResults) {
mLocationPermissionGranted = false;
switch (requestCode) {
case PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION: {
// If request is canceled, the result arrays are empty.
if (grantResults.length > 0
&& grantResults[0] == PackageManager.PERMISSION_GRANTED) {
mLocationPermissionGranted = true;
}
}
}
}
Initialize the Navigation SDK and configure a journey
The NavigationApi class provides initialization logic
that authorizes your app to use Google navigation. The Navigator
class provides control over configuring, starting, and stopping a navigation
journey.
Create a helper method to show a message on screen and in the log.
private void displayMessage(String errorMessage, String displayMedium) {
if (displayMedium.equals(DISPLAY_BOTH) || displayMedium.equals(DISPLAY_TOAST)) {
Toast.makeText(this, errorMessage, Toast.LENGTH_LONG).show();
}
if (displayMedium.equals(DISPLAY_BOTH) || displayMedium.equals(DISPLAY_LOG)) {
Log.d(TAG, errorMessage);
}
}
Initialize the Navigation SDK and override the
onNavigatorReady() callback to start navigation when the navigator is
ready:
NavigationApi.getNavigator(this, new NavigationApi.NavigatorListener() {
/**
* Sets up the navigation UI when the navigator is ready for use.
*/
@Override
public void onNavigatorReady(Navigator navigator) {
displayMessage("Navigator ready.", DISPLAY_BOTH);
mNavigator = navigator;
mNavFragment = (SupportNavigationFragment) getFragmentManager()
.findFragmentById(R.id.navigation_fragment);
// Set the camera to follow the device location with 'TILTED' driving view.
mNavFragment.getCamera().followMyLocation(Camera.Perspective.TILTED);
// Navigate to the specified places.
navigateToPlaces();
}
/**
* Handles errors from the Navigation SDK.
* @param errorCode The error code returned by the navigator.
*/
@Override
public void onError(@NavigationApi.ErrorCode int errorCode) {
switch (errorCode) {
case NavigationApi.ErrorCode.NOT_AUTHORIZED:
displayMessage("Error loading Navigation SDK: Your API key is "
+ "invalid or not authorized to use the Navigation SDK.",
DISPLAY_BOTH);
break;
case NavigationApi.ErrorCode.TERMS_NOT_ACCEPTED:
displayMessage("Error loading Navigation SDK: User did not accept "
+ "the Navigation Terms of Use.", DISPLAY_BOTH);
break;
case NavigationApi.ErrorCode.NETWORK_ERROR:
displayMessage("Error loading Navigation SDK: Network error.",
DISPLAY_BOTH);
break;
case NavigationApi.ErrorCode.LOCATION_PERMISSION_MISSING:
displayMessage("Error loading Navigation SDK: Location permission "
+ "is missing.", DISPLAY_BOTH);
break;
default:
displayMessage("Error loading Navigation SDK: " + errorCode,
DISPLAY_BOTH);
}
}
});
Add a method to create a Waypoint object from a given place
ID and title.
private void createWaypoint(String placeId, String title) {
try {
mWaypoints.add(
Waypoint.builder()
.setPlaceIdString(placeId)
.setTitle(title)
.build()
);
} catch (Waypoint.UnsupportedPlaceIdException e) {
displayMessage("Error starting navigation: Place ID is not supported: " + placeId,
DISPLAY_BOTH);
}
}
Add a method to display the calculated travel time and distance to each
waypoint.
private void displayTimesAndDistances() {
List<TimeAndDistance> timesAndDistances = mNavigator.getTimeAndDistanceList();
int leg = 1;
String message = "You're on your way!";
for (TimeAndDistance timeAndDistance : timesAndDistances) {
message = message + "\nRoute leg: " + leg++
+ ": Travel time (seconds): " + timeAndDistance.getSeconds()
+ ". Distance (meters): " + timeAndDistance.getMeters();
}
displayMessage(message, DISPLAY_BOTH);
}
Set all the waypoints for this journey. (Note that you may receive an error
if you use place IDs for which the navigator cannot plot a route. The sample
app in this tutorial uses place IDs for waypoints in Australia. See the notes
below about getting different place IDs .) After calculating
directions, the SupportNavigationFragment
displays a polyline representing the route on the map, with a marker at
each waypoint.
private void navigateToPlaces() {
// Set up a waypoint for each place that we want to go to.
createWaypoint("ChIJq6qq6jauEmsRJAf7FjrKnXI", "Sydney Star");
createWaypoint("ChIJ3S-JXmauEmsRUcIaWtf4MzE", "Sydney Opera House");
createWaypoint("ChIJLwgLFGmuEmsRzpDhHQuyyoU", "Sydney Conservatorium of Music");
// If this journey is already in progress, no need to restart navigation.
// This can happen when the user rotates the device, or sends the app to the background.
if (mSavedInstanceState != null
&& mSavedInstanceState.containsKey(KEY_JOURNEY_IN_PROGRESS)
&& mSavedInstanceState.getInt(KEY_JOURNEY_IN_PROGRESS) == 1) {
return;
}
// Create a future to await the result of the asynchronous navigator task.
ListenableResultFuture<Navigator.RouteStatus> pendingRoute =
mNavigator.setDestinations(mWaypoints);
// Define the action to perform when the SDK has determined the route.
pendingRoute.setOnResultListener(
new ListenableResultFuture.OnResultListener<Navigator.RouteStatus>() {
@Override
public void onResult(Navigator.RouteStatus code) {
switch (code) {
case OK:
mJourneyInProgress = true;
// Hide the toolbar to maximize the navigation UI.
if (getActionBar() != null) {
getActionBar().hide();
}
// Register some listeners for navigation events.
registerNavigationListeners();
// Display the time and distance to each waypoint.
displayTimesAndDistances();
// Enable voice audio guidance (through the device speaker).
mNavigator.setAudioGuidance(
Navigator.AudioGuidance.VOICE_ALERTS_AND_GUIDANCE);
// Simulate vehicle progress along the route for demo/debug builds.
if (BuildConfig.DEBUG) {
mNavigator.getSimulator().simulateLocationsAlongExistingRoute(
new SimulationOptions().speedMultiplier(5));
}
// Start turn-by-turn guidance along the current route.
mNavigator.startGuidance();
break;
// Handle error conditions returned by the navigator.
case NO_ROUTE_FOUND:
displayMessage("Error starting navigation: No route found.",
DISPLAY_BOTH);
break;
case NETWORK_ERROR:
displayMessage("Error starting navigation: Network error.",
DISPLAY_BOTH);
break;
case ROUTE_CANCELED:
displayMessage("Error starting navigation: Route canceled.",
DISPLAY_BOTH);
break;
default:
displayMessage("Error starting navigation: "
+ String.valueOf(code), DISPLAY_BOTH);
}
}
});
}
Build and run your app
Connect an Android device to your computer. Follow the
instructions to enable developer options on your Android
device and configure your system to detect the device. (Alternatively, you can
use the
Android Virtual Device (AVD) Manager to configure a virtual
device. When choosing an emulator, make sure you pick an image that includes
the Google APIs.)
In Android Studio, click the Run menu option (or the play button icon).
Choose a device as prompted.
Hints for improved user experience
The user must accept the Google Navigation Terms of Service before
navigation becomes available. This acceptance is only required once. By
default, the SDK prompts for acceptance the first time the navigator is
invoked. If you prefer, you can trigger the Navigation Terms of Service dialog
at an early point in your app's UX flow, such as during signup or login, using
showTermsAndConditionsDialog() .
Navigation quality and ETA accuracy are significantly improved if you use
place IDs to initialize a waypoint, rather than a latitude/longitude
destination.
This sample derives the waypoints from specific place
IDs. Other ways to get a place ID include the following:
Use the place ID finder to get place IDs for specific
locations.
Use the Geocoding API to find the place ID
for a given address. The Geocoding API works well if you have
complete, unambiguous addresses for the waypoints. See the geocoding best
practices guide .
Use the Places API text search to find the place
ID for a given address. The Places API works well if you have
incomplete or ambiguous addresses for the waypoints. See the geocoding best
practices guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

---
title: "Navigate a single-destination route \_|\_ Navigation SDK for Android \_|\_\
  \ Google for Developers"
url: https://developers.google.com/maps/documentation/navigation/android-sdk/route
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/navigation/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/navigation/android-sdk/route
  title: "Navigate a single-destination route \_|\_ Navigation SDK for Android \_\
    |\_ Google for Developers"
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
Navigate a single-destination route
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide provides instructions on integrating the Google Maps Navigation SDK into your Android application for route plotting and navigation.
It covers key steps such as adding a UI element for the map, requesting necessary location permissions, initializing the Navigation SDK, and setting destinations for navigation.
Developers can control aspects like audio guidance, route simulation for testing, and handling navigation results or errors.
It's crucial to handle user acceptance of Navigation Terms of Service and ensure accurate waypoint information using place IDs for optimal navigation quality.
The guide offers a code example and emphasizes using the latest methods and referring to official documentation for comprehensive details.
Notice: fromLatLng() and fromPlaceId()
are deprecated, but will remain available with no further updates. We
recommend migrating to the new Waypoint.Builder .
Follow this guide to plot a route within your app using the
Navigation SDK for Android. This guide assumes you have already integrated the
Navigation SDK into your app, as described in
Set up your project .
Summary
Add a UI element to your app, either as a navigation fragment or as a
navigation view. This UI element adds the interactive map and turn-by-turn
navigation UI to your activity.
Request location permissions. Your app must request location permission
to determine the location of the device.
Initialize the SDK using the
NavigationApi
class.
Set a destination and control turn-by-turn navigation using the
Navigator
class. This involves three steps:
Set destination using
setDestination() .
Start navigation with
startGuidance() .
Use getSimulator()
to simulate the progress of the vehicle along the route,
for testing, debugging, and demonstrating your app.
Build and run your app.
See the code
Show or hide Java code
for a single-destination navigation activity.
package com . example . navsdksingledestination ;
import android.content.pm.PackageManager ;
import android.os.Bundle ;
import android.util.Log ;
import android.widget.Toast ;
import androidx.annotation.NonNull ;
import androidx.appcompat.app.AppCompatActivity ;
import androidx.core.app.ActivityCompat ;
import androidx.core.content.ContextCompat ;
import com.google.android.gms.maps.GoogleMap.CameraPerspective ;
import com.google.android.libraries.navigation.ListenableResultFuture ;
import com.google.android.libraries.navigation.NavigationApi ;
import com.google.android.libraries.navigation.Navigator ;
import com.google.android.libraries.navigation.RoutingOptions ;
import com.google.android.libraries.navigation.SimulationOptions ;
import com.google.android.libraries.navigation.SupportNavigationFragment ;
import com.google.android.libraries.navigation.Waypoint ;
/**
* An activity that displays a map and a navigation UI , guiding the user from their current location
* to a single , given destination .
*/
public class NavigationActivitySingleDestination extends AppCompatActivity {
private static final String TAG = NavigationActivitySingleDestination . class . getSimpleName ();
private Navigator mNavigator ;
private SupportNavigationFragment mNavFragment ;
private RoutingOptions mRoutingOptions ;
// Define the Sydney Opera House by specifying its place ID .
private static final String SYDNEY_OPERA_HOUSE = "ChIJ3S-JXmauEmsRUcIaWtf4MzE" ;
// Set fields for requesting location permission .
private static final int PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION = 1 ;
private boolean mLocationPermissionGranted ;
@Override
protected void onCreate ( Bundle savedInstanceState ) {
super . onCreate ( savedInstanceState );
setContentView ( R . layout . activity_main );
// Initialize the Navigation SDK .
initializeNavigationSdk ();
}
/**
* Starts the Navigation SDK and sets the camera to follow the device 's location. Calls the
* navigateToPlace () method when the navigator is ready .
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
"Error loading Navigation SDK: " + "The user has not granted location permission." );
return ;
}
// Get a navigator .
NavigationApi . getNavigator (
this ,
new NavigationApi . NavigatorListener () {
/** Sets up the navigation UI when the navigator is ready for use . */
@Override
public void onNavigatorReady ( Navigator navigator ) {
displayMessage ( "Navigator ready." );
mNavigator = navigator ;
mNavFragment =
( SupportNavigationFragment )
getSupportFragmentManager () . findFragmentById ( R . id . navigation_fragment );
// Set the last digit of the car 's license plate to get route restrictions
// in supported countries . ( optional )
// mNavigator . setLicensePlateRestrictionInfo ( getLastDigit (), "BZ" );
// Set the camera to follow the device location with 'TILTED' driving view .
mNavFragment . getMapAsync (
googleMap - > googleMap . followMyLocation ( CameraPerspective . TILTED ));
// Set the travel mode ( DRIVING , WALKING , CYCLING , or TWO_WHEELER ) .
mRoutingOptions = new RoutingOptions ();
mRoutingOptions . travelMode ( RoutingOptions . TravelMode . DRIVING );
// Navigate to a place , specified by Place ID .
navigateToPlace ( SYDNEY_OPERA_HOUSE , mRoutingOptions );
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
+ "invalid or not authorized to use the Navigation SDK." );
break ;
case NavigationApi . ErrorCode . TERMS_NOT_ACCEPTED :
displayMessage (
"Error loading Navigation SDK: User did not accept "
+ "the Navigation Terms of Use." );
break ;
case NavigationApi . ErrorCode . NETWORK_ERROR :
displayMessage ( "Error loading Navigation SDK: Network error." );
break ;
case NavigationApi . ErrorCode . LOCATION_PERMISSION_MISSING :
displayMessage (
"Error loading Navigation SDK: Location permission " + "is missing." );
break ;
default :
displayMessage ( "Error loading Navigation SDK: " + errorCode );
}
}
});
}
/**
* Requests directions from the user 's current location to a specific place (provided by the
* Google Places API ) .
*/
private void navigateToPlace ( String placeId , RoutingOptions travelMode ) {
Waypoint destination ;
try {
destination = Waypoint . builder () . setPlaceIdString ( placeId ) . build ();
} catch ( Waypoint . UnsupportedPlaceIdException e ) {
displayMessage ( "Error starting navigation: Place ID is not supported." );
return ;
}
// Create a future to await the result of the asynchronous navigator task .
ListenableResultFuture<Navigator . RouteStatus > pendingRoute =
mNavigator . setDestination ( destination , travelMode );
// Define the action to perform when the SDK has determined the route .
pendingRoute . setOnResultListener (
new ListenableResultFuture . OnResultListener<Navigator . RouteStatus > () {
@Override
public void onResult ( Navigator . RouteStatus code ) {
switch ( code ) {
case OK :
// Hide the toolbar to maximize the navigation UI .
if ( getActionBar () != null ) {
getActionBar () . hide ();
}
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
displayMessage ( "Error starting navigation: No route found." );
break ;
case NETWORK_ERROR :
displayMessage ( "Error starting navigation: Network error." );
break ;
case ROUTE_CANCELED :
displayMessage ( "Error starting navigation: Route canceled." );
break ;
default :
displayMessage ( "Error starting navigation: " + String . valueOf ( code ));
}
}
});
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
private void displayMessage ( String errorMessage ) {
Toast . makeText ( this , errorMessage , Toast . LENGTH_LONG ) . show ();
Log . d ( TAG , errorMessage );
}
}
Add a UI element to your app
This section covers two ways you can add the interactive map and UI for
displaying turn-by-turn navigation. In most cases, we recommend using
SupportNavigationFragment ,
which is a wrapper for
NavigationView ,
instead of interacting directly with NavigationView . For more information, see
Navigation map interaction best practices
.
Use a navigation fragment
SupportNavigationFragment
is the UI component that displays the visual output of navigation, including an
interactive map and turn-by-turn directions. You can declare the fragment in
your XML layout file as shown here:
<?xml version="1.0" encoding="utf-8"?>
<fragment xmlns:android="http://schemas.android.com/apk/res/android"
android:name="com.google.android.libraries.navigation.SupportNavigationFragment"
android:id="@+id/navigation_fragment"
android:layout_width="match_parent"
android:layout_height="match_parent"/>
Alternatively, you can construct the fragment programmatically, as described in
the
Android documentation ,
using
FragmentActivity.getSupportFragmentManager() .
Use a navigation view
As an alternative to a fragment, the UI component to display a map for
navigation is also available as a
NavigationView .
Caution: Be sure to read the guidance at the top of the
NavigationView
class description, particularly the advice to properly forward and call the
lifecycle methods from the activity or fragment containing the view.
Request location permission
This section illustrates how to request fine location permission.
For more details, see the guide to
Android permissions .
Add the permission as a child of the <manifest> element in your Android
manifest:
< manifest xmlns : android = "http://schemas.android.com/apk/res/android"
package = "com.example.navsdksingledestination" >
< uses - permission android : name = "android.permission.ACCESS_FINE_LOCATION" / >
< / manifest >
Request runtime permissions in your app, giving the user the opportunity
to grant or deny location permission. The following code checks whether the
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
+ "The user has not granted location permission.");
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
Initialize the Navigation SDK
The
NavigationApi
class provides initialization logic that authorizes your app to use Google
navigation. This section covers how to initialize the navigator, along with some
other configurations you can enable for your app:
Initialize the Navigation SDK and override the
onNavigatorReady() callback to start navigation when the navigator is
ready.
Optional. Configure the app so that guidance notifications and background
services shut down when the user dismisses the app from their device. This
choice depends on your business model. You might want to use the default
navigator behavior, which continues to display turn guidance and location
updates even when the app is dismissed. If instead you want to shut down
navigation and location updates when the end user dismissed the app, you
would use this configuration.
Optional. Enable road restrictions in supported countries. Set the last
digit of the license plate. This call only needs to be made once: subsequent
directions requests continue to use it. This call only works on supported
regions. See
Navigation SDK supported countries .
NavigationApi.getNavigator(this, new NavigationApi.NavigatorListener() {
/**
* Sets up the navigation UI when the navigator is ready for use.
*/
@Override
public void onNavigatorReady(Navigator navigator) {
displayMessage("Navigator ready.");
mNavigator = navigator;
mNavFragment = (NavigationFragment) getFragmentManager()
.findFragmentById(R.id.navigation_fragment);
// Optional. Disable the guidance notifications and shut down the app
// and background service when the user closes the app.
// mNavigator.setTaskRemovedBehavior(Navigator.TaskRemovedBehavior.QUIT_SERVICE)
// Optional. Set the last digit of the car's license plate to get
// route restrictions for supported countries.
// mNavigator.setLicensePlateRestrictionInfo(getLastDigit(), "BZ");
// Set the camera to follow the device location with 'TILTED' driving view.
mNavFragment.getCamera().followMyLocation(Camera.Perspective.TILTED);
// Set the travel mode (DRIVING, WALKING, CYCLING, TWO_WHEELER, or TAXI).
mRoutingOptions = new RoutingOptions();
mRoutingOptions.travelMode(RoutingOptions.TravelMode.DRIVING);
// Navigate to a place, specified by Place ID.
navigateToPlace(SYDNEY_OPERA_HOUSE, mRoutingOptions);
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
+ "invalid or not authorized to use the Navigation SDK.");
break;
case NavigationApi.ErrorCode.TERMS_NOT_ACCEPTED:
displayMessage("Error loading Navigation SDK: User did not accept "
+ "the Navigation Terms of Use.");
break;
case NavigationApi.ErrorCode.NETWORK_ERROR:
displayMessage("Error loading Navigation SDK: Network error.");
break;
case NavigationApi.ErrorCode.LOCATION_PERMISSION_MISSING:
displayMessage("Error loading Navigation SDK: Location permission "
+ "is missing.");
break;
default:
displayMessage("Error loading Navigation SDK: " + errorCode);
}
}
});
Set a destination
The
Navigator
class provides control over configuring, starting, and stopping a navigation
journey.
Using the
Navigator
obtained in the previous section, set a destination
Waypoint
for this journey. After calculating directions, the
SupportNavigationFragment
displays a polyline representing the route on the map, and a marker at the
destination.
``` none
private void navigateToPlace ( String placeId , RoutingOptions travelMode ) {
Waypoint destination ;
try {
destination = Waypoint . builder () . setPlaceIdString ( placeId ) . build ();
} catch ( Waypoint . UnsupportedPlaceIdException e ) {
displayMessage ( "Error starting navigation: Place ID is not supported." );
return ;
}
// Create a future to await the result of the asynchronous navigator task .
ListenableResultFuture<Navigator . RouteStatus > pendingRoute =
mNavigator . setDestination ( destination , travelMode );
// Define the action to perform when the SDK has determined the route .
pendingRoute . setOnResultListener (
new ListenableResultFuture . OnResultListener<Navigator . RouteStatus > () {
@ Override
public void onResult ( Navigator . RouteStatus code ) {
switch ( code ) {
case OK :
// Hide the toolbar to maximize the navigation UI .
if ( getActionBar () != null ) {
getActionBar () . hide ();
}
// Enable voice audio guidance ( through the device speaker ) .
mNavigator . setAudioGuidance (
Navigator . AudioGuidance . VOICE_ALERTS_AND_GUIDANCE );
// Simulate vehicle progress along the route for demo / debug builds .
if ( BuildConfig . DEBUG ) {
mNavigator . getSimulator () . simulateLocationsAlongExistingRoute (
new SimulationOptions () . speedMultiplier ( 5 ));
}
// Start turn - by - turn guidance along the current route .
mNavigator . startGuidance ();
break ;
// Handle error conditions returned by the navigator .
case NO_ROUTE_FOUND :
displayMessage ( "Error starting navigation: No route found." );
break ;
case NETWORK_ERROR :
displayMessage ( "Error starting navigation: Network error." );
break ;
case ROUTE_CANCELED :
displayMessage ( "Error starting navigation: Route canceled." );
break ;
default :
displayMessage ( "Error starting navigation: "
+ String . valueOf ( code ));
}
}
});
}
```
Build and run your app
Connect an Android device to your computer. Follow the Android Studio
instructions on how to Run apps on a hardware device
Alternatively, you can configure a virtual device using the
Android Virtual Device (AVD) Manager .
When choosing an emulator, make sure you pick an image that includes
the Google APIs.
In Android Studio, click the Run menu option or the play button icon.
Choose a device as prompted.
Hints for improved user experience
The user must accept the Google Navigation Terms of Service before
navigation becomes available. This acceptance is only required once. By
default, the SDK prompts for acceptance the first time the navigator is
invoked. If you prefer, you can trigger the Navigation Terms of Service dialog
at an early point in your app's UX flow, such as during signup or login, using
TermsAndConditionsCheckOption .
To significantly improve navigation quality and ETA accuracy, use
place IDs to initialize a waypoint rather than latitude/longitude
coordinates.
This sample derives the destination waypoint from a specific place ID for the
Sydney Opera House. You can use the
place ID finder
to get place IDs for other specific locations.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

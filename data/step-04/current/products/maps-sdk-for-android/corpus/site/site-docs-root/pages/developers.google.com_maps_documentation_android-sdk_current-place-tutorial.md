---
title: "Select Current Place and Show Details on a Map \_|\_ Maps SDK for Android\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/android-sdk/current-place-tutorial
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/maps/documentation/android-sdk
source_metadata:
  url: https://developers.google.com/maps/documentation/android-sdk/current-place-tutorial
  title: "Select Current Place and Show Details on a Map \_|\_ Maps SDK for Android\
    \ \_|\_ Google for Developers"
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
Maps SDK for Android
Samples
Send feedback
Select Current Place and Show Details on a Map
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This tutorial demonstrates building an Android app to find the device's location and display nearby places using the Maps SDK, Places SDK, and Fused Location Provider.
The app requests location permission, retrieves the device's location, and presents a list of likely places for the user to choose from.
Upon selection, a marker is added to the map at the chosen location, displaying its name and address, and the map's camera focuses on that place.
Code samples are provided in both Java and Kotlin, covering initialization, permission handling, location retrieval, place selection, and UI updates.
The tutorial requires Google Play services, API keys for the Maps and Places SDKs, and a basic understanding of Android development.
Learn how to find find the current location of an Android device
and display details of the place (a business or other point of interest) at
that location. Follow this tutorial to build an Android app using the
Maps SDK for Android ,
the Places SDK for Android ,
and the
fused
location provider in the Google Play services location APIs.
Note: This tutorial requires Google Play services
version 11.2.0 or later.
Get the code
Clone or download the
Google Maps Android API v2 Samples repository from GitHub.
View the Java version of the activity:
Show / Hide Code
// Copyright 2020 Google LLC
//
// Licensed under the Apache License , Version 2.0 ( the "License" );
// you may not use this file except in compliance with the License .
// You may obtain a copy of the License at
//
// http : // www . apache . org / licenses / LICENSE - 2.0
//
// Unless required by applicable law or agreed to in writing , software
// distributed under the License is distributed on an "AS IS" BASIS ,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND , either express or implied .
// See the License for the specific language governing permissions and
// limitations under the License .
package com . example . currentplacedetailsonmap ;
import android.content.DialogInterface ;
import android.content.pm.PackageManager ;
import android.location.Location ;
import android.os.Bundle ;
import android.util.Log ;
import android.view.Menu ;
import android.view.MenuItem ;
import android.view.View ;
import android.widget.FrameLayout ;
import android.widget.TextView ;
import androidx.annotation.NonNull ;
import androidx.appcompat.app.AlertDialog ;
import androidx.appcompat.app.AppCompatActivity ;
import androidx.core.app.ActivityCompat ;
import androidx.core.content.ContextCompat ;
import com.google.android.gms.location.FusedLocationProviderClient ;
import com.google.android.gms.location.LocationServices ;
import com.google.android.gms.maps.CameraUpdateFactory ;
import com.google.android.gms.maps.GoogleMap ;
import com.google.android.gms.maps.OnMapReadyCallback ;
import com.google.android.gms.maps.SupportMapFragment ;
import com.google.android.gms.maps.model.CameraPosition ;
import com.google.android.gms.maps.model.LatLng ;
import com.google.android.gms.maps.model.Marker ;
import com.google.android.gms.maps.model.MarkerOptions ;
import com.google.android.gms.tasks.OnCompleteListener ;
import com.google.android.gms.tasks.Task ;
import com.google.android.libraries.places.api.Places ;
import com.google.android.libraries.places.api.model.Place ;
import com.google.android.libraries.places.api.model.PlaceLikelihood ;
import com.google.android.libraries.places.api.net.FindCurrentPlaceRequest ;
import com.google.android.libraries.places.api.net.FindCurrentPlaceResponse ;
import com.google.android.libraries.places.api.net.PlacesClient ;
import java.util.Arrays ;
import java.util.List ;
/**
* An activity that displays a map showing the place at the device 's current location.
*/
public class MapsActivityCurrentPlace extends AppCompatActivity
implements OnMapReadyCallback {
private static final String TAG = MapsActivityCurrentPlace . class . getSimpleName ();
private GoogleMap map ;
private CameraPosition cameraPosition ;
// The entry point to the Places API .
private PlacesClient placesClient ;
// The entry point to the Fused Location Provider .
private FusedLocationProviderClient fusedLocationProviderClient ;
// A default location ( Sydney , Australia ) and default zoom to use when location permission is
// not granted .
private final LatLng defaultLocation = new LatLng ( - 33.8523341 , 151.2106085 );
private static final int DEFAULT_ZOOM = 15 ;
private static final int PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION = 1 ;
private boolean locationPermissionGranted ;
// The geographical location where the device is currently located . That is , the last - known
// location retrieved by the Fused Location Provider .
private Location lastKnownLocation ;
// Keys for storing activity state .
private static final String KEY_CAMERA_POSITION = "camera_position" ;
private static final String KEY_LOCATION = "location" ;
// Used for selecting the current place .
private static final int M_MAX_ENTRIES = 5 ;
private String [] likelyPlaceNames ;
private String [] likelyPlaceAddresses ;
private List [] likelyPlaceAttributions ;
private LatLng [] likelyPlaceLatLngs ;
@Override
protected void onCreate ( Bundle savedInstanceState ) {
super . onCreate ( savedInstanceState );
// Retrieve location and camera position from saved instance state .
if ( savedInstanceState != null ) {
lastKnownLocation = savedInstanceState . getParcelable ( KEY_LOCATION );
cameraPosition = savedInstanceState . getParcelable ( KEY_CAMERA_POSITION );
}
// Retrieve the content view that renders the map .
setContentView ( R . layout . activity_maps );
// Construct a PlacesClient
Places . initialize ( getApplicationContext (), BuildConfig . PLACES_API_KEY );
placesClient = Places . createClient ( this );
// Construct a FusedLocationProviderClient .
fusedLocationProviderClient = LocationServices . getFusedLocationProviderClient ( this );
// Build the map .
SupportMapFragment mapFragment = ( SupportMapFragment ) getSupportFragmentManager ()
. findFragmentById ( R . id . map );
mapFragment . getMapAsync ( this );
}
/**
* Saves the state of the map when the activity is paused .
*/
@Override
protected void onSaveInstanceState ( Bundle outState ) {
if ( map != null ) {
outState . putParcelable ( KEY_CAMERA_POSITION , map . getCameraPosition ());
outState . putParcelable ( KEY_LOCATION , lastKnownLocation );
}
super . onSaveInstanceState ( outState );
}
/**
* Sets up the options menu .
* @param menu The options menu .
* @return Boolean .
*/
@Override
public boolean onCreateOptionsMenu ( Menu menu ) {
getMenuInflater () . inflate ( R . menu . current_place_menu , menu );
return true ;
}
/**
* Handles a click on the menu option to get a place .
* @param item The menu item to handle .
* @return Boolean .
*/
@Override
public boolean onOptionsItemSelected ( MenuItem item ) {
if ( item . getItemId () == R . id . option_get_place ) {
showCurrentPlace ();
}
return true ;
}
/**
* Manipulates the map when it 's available.
* This callback is triggered when the map is ready to be used .
*/
@Override
public void onMapReady ( GoogleMap map ) {
this . map = map ;
// Use a custom info window adapter to handle multiple lines of text in the
// info window contents .
this . map . setInfoWindowAdapter ( new GoogleMap . InfoWindowAdapter () {
@Override
// Return null here , so that getInfoContents () is called next .
public View getInfoWindow ( Marker arg0 ) {
return null ;
}
@Override
public View getInfoContents ( Marker marker ) {
// Inflate the layouts for the info window , title and snippet .
View infoWindow = getLayoutInflater () . inflate ( R . layout . custom_info_contents ,
( FrameLayout ) findViewById ( R . id . map ), false );
TextView title = infoWindow . findViewById ( R . id . title );
title . setText ( marker . getTitle ());
TextView snippet = infoWindow . findViewById ( R . id . snippet );
snippet . setText ( marker . getSnippet ());
return infoWindow ;
}
});
// Prompt the user for permission .
getLocationPermission ();
// Turn on the My Location layer and the related control on the map .
updateLocationUI ();
// Get the current location of the device and set the position of the map .
getDeviceLocation ();
}
/**
* Gets the current location of the device , and positions the map 's camera.
*/
private void getDeviceLocation () {
/*
* Get the best and most recent location of the device , which may be null in rare
* cases when a location is not available .
*/
try {
if ( locationPermissionGranted ) {
Task<Location> locationResult = fusedLocationProviderClient . getLastLocation ();
locationResult . addOnCompleteListener ( this , new OnCompleteListener<Location> () {
@Override
public void onComplete ( @NonNull Task<Location> task ) {
if ( task . isSuccessful ()) {
// Set the map 's camera position to the current location of the device.
lastKnownLocation = task . getResult ();
if ( lastKnownLocation != null ) {
map . moveCamera ( CameraUpdateFactory . newLatLngZoom (
new LatLng ( lastKnownLocation . getLatitude (),
lastKnownLocation . getLongitude ()), DEFAULT_ZOOM ));
}
} else {
Log . d ( TAG , "Current location is null. Using defaults." );
Log . e ( TAG , "Exception: %s " , task . getException ());
map . moveCamera ( CameraUpdateFactory
. newLatLngZoom ( defaultLocation , DEFAULT_ZOOM ));
map . getUiSettings () . setMyLocationButtonEnabled ( false );
}
}
});
}
} catch ( SecurityException e ) {
Log . e ( "Exception: %s " , e . getMessage (), e );
}
}
/**
* Prompts the user for permission to use the device location .
*/
private void getLocationPermission () {
/*
* Request location permission , so that we can get the location of the
* device . The result of the permission request is handled by a callback ,
* onRequestPermissionsResult .
*/
if ( ContextCompat . checkSelfPermission ( this . getApplicationContext (),
android . Manifest . permission . ACCESS_FINE_LOCATION )
== PackageManager . PERMISSION_GRANTED ) {
locationPermissionGranted = true ;
} else {
ActivityCompat . requestPermissions ( this ,
new String []{ android . Manifest . permission . ACCESS_FINE_LOCATION },
PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION );
}
}
/**
* Handles the result of the request for location permissions .
*/
@Override
public void onRequestPermissionsResult ( int requestCode ,
@NonNull String [] permissions ,
@NonNull int [] grantResults ) {
locationPermissionGranted = false ;
if ( requestCode
== PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION ) { // If request is cancelled , the result arrays are empty .
if ( grantResults . length > 0
&& grantResults [ 0 ] == PackageManager . PERMISSION_GRANTED ) {
locationPermissionGranted = true ;
}
} else {
super . onRequestPermissionsResult ( requestCode , permissions , grantResults );
}
updateLocationUI ();
}
/**
* Prompts the user to select the current place from a list of likely places , and shows the
* current place on the map - provided the user has granted location permission .
*/
private void showCurrentPlace () {
if ( map == null ) {
return ;
}
if ( locationPermissionGranted ) {
// Use fields to define the data types to return .
List<Place . Field > placeFields = Arrays . asList ( Place . Field . NAME , Place . Field . ADDRESS ,
Place . Field . LAT_LNG );
// Use the builder to create a FindCurrentPlaceRequest .
FindCurrentPlaceRequest request =
FindCurrentPlaceRequest . newInstance ( placeFields );
// Get the likely places - that is , the businesses and other points of interest that
// are the best match for the device 's current location.
@SuppressWarnings ( "MissingPermission" ) final
Task<FindCurrentPlaceResponse> placeResult =
placesClient . findCurrentPlace ( request );
placeResult . addOnCompleteListener ( new OnCompleteListener<FindCurrentPlaceResponse> () {
@Override
public void onComplete ( @NonNull Task<FindCurrentPlaceResponse> task ) {
if ( task . isSuccessful () && task . getResult () != null ) {
FindCurrentPlaceResponse likelyPlaces = task . getResult ();
// Set the count , handling cases where less than 5 entries are returned .
int count ;
if ( likelyPlaces . getPlaceLikelihoods () . size () < M_MAX_ENTRIES ) {
count = likelyPlaces . getPlaceLikelihoods () . size ();
} else {
count = M_MAX_ENTRIES ;
}
int i = 0 ;
likelyPlaceNames = new String [ count ];
likelyPlaceAddresses = new String [ count ];
likelyPlaceAttributions = new List [ count ];
likelyPlaceLatLngs = new LatLng [ count ];
for ( PlaceLikelihood placeLikelihood : likelyPlaces . getPlaceLikelihoods ()) {
// Build a list of likely places to show the user .
likelyPlaceNames [ i ] = placeLikelihood . getPlace () . getName ();
likelyPlaceAddresses [ i ] = placeLikelihood . getPlace () . getAddress ();
likelyPlaceAttributions [ i ] = placeLikelihood . getPlace ()
. getAttributions ();
likelyPlaceLatLngs [ i ] = placeLikelihood . getPlace () . getLatLng ();
i ++ ;
if ( i > ( count - 1 )) {
break ;
}
}
// Show a dialog offering the user the list of likely places , and add a
// marker at the selected place .
MapsActivityCurrentPlace . this . openPlacesDialog ();
}
else {
Log . e ( TAG , "Exception: %s " , task . getException ());
}
}
});
} else {
// The user has not granted permission .
Log . i ( TAG , "The user did not grant location permission." );
// Add a default marker , because the user hasn 't selected a place.
map . addMarker ( new MarkerOptions ()
. title ( getString ( R . string . default_info_title ))
. position ( defaultLocation )
. snippet ( getString ( R . string . default_info_snippet )));
// Prompt the user for permission .
getLocationPermission ();
}
}
/**
* Displays a form allowing the user to select a place from a list of likely places .
*/
private void openPlacesDialog () {
// Ask the user to choose the place where they are now .
DialogInterface . OnClickListener listener = new DialogInterface . OnClickListener () {
@Override
public void onClick ( DialogInterface dialog , int which ) {
// The "which" argument contains the position of the selected item .
LatLng markerLatLng = likelyPlaceLatLngs [ which ];
String markerSnippet = likelyPlaceAddresses [ which ];
if ( likelyPlaceAttributions [ which ] != null ) {
markerSnippet = markerSnippet + " \n " + likelyPlaceAttributions [ which ];
}
// Add a marker for the selected place , with an info window
// showing information about that place .
map . addMarker ( new MarkerOptions ()
. title ( likelyPlaceNames [ which ])
. position ( markerLatLng )
. snippet ( markerSnippet ));
// Position the map 's camera at the location of the marker.
map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( markerLatLng ,
DEFAULT_ZOOM ));
}
};
// Display the dialog .
AlertDialog dialog = new AlertDialog . Builder ( this )
. setTitle ( R . string . pick_place )
. setItems ( likelyPlaceNames , listener )
. show ();
}
/**
* Updates the map 's UI settings based on whether the user has granted location permission.
*/
private void updateLocationUI () {
if ( map == null ) {
return ;
}
try {
if ( locationPermissionGranted ) {
map . setMyLocationEnabled ( true );
map . getUiSettings () . setMyLocationButtonEnabled ( true );
} else {
map . setMyLocationEnabled ( false );
map . getUiSettings () . setMyLocationButtonEnabled ( false );
lastKnownLocation = null ;
}
} catch ( SecurityException e ) {
Log . e ( "Exception: %s " , e . getMessage ());
}
}
}
View the Kotlin version of the activity:
Show / Hide Code
// Copyright 2020 Google LLC
//
// Licensed under the Apache License , Version 2.0 ( the "License" );
// you may not use this file except in compliance with the License .
// You may obtain a copy of the License at
//
// http : // www . apache . org / licenses / LICENSE - 2.0
//
// Unless required by applicable law or agreed to in writing , software
// distributed under the License is distributed on an "AS IS" BASIS ,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND , either express or implied .
// See the License for the specific language governing permissions and
// limitations under the License .
package com . example . currentplacedetailsonmap
import android.Manifest
import android.annotation.SuppressLint
import android.content.DialogInterface
import android.content.pm.PackageManager
import android.location.Location
import android.os.Bundle
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.FrameLayout
import android.widget.TextView
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.GoogleMap.InfoWindowAdapter
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.CameraPosition
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.Marker
import com.google.android.gms.maps.model.MarkerOptions
import com.google.android.libraries.places.api.Places
import com.google.android.libraries.places.api.model.Place
import com.google.android.libraries.places.api.net.FindCurrentPlaceRequest
import com.google.android.libraries.places.api.net.PlacesClient
/**
* An activity that displays a map showing the place at the device 's current location.
*/
class MapsActivityCurrentPlace : AppCompatActivity (), OnMapReadyCallback {
private var map : GoogleMap ? = null
private var cameraPosition : CameraPosition ? = null
// The entry point to the Places API .
private lateinit var placesClient : PlacesClient
// The entry point to the Fused Location Provider .
private lateinit var fusedLocationProviderClient : FusedLocationProviderClient
// A default location ( Sydney , Australia ) and default zoom to use when location permission is
// not granted .
private val defaultLocation = LatLng ( - 33.8523341 , 151.2106085 )
private var locationPermissionGranted = false
// The geographical location where the device is currently located . That is , the last - known
// location retrieved by the Fused Location Provider .
private var lastKnownLocation : Location ? = null
private var likelyPlaceNames : Array<String ? > = arrayOfNulls ( 0 )
private var likelyPlaceAddresses : Array<String ? > = arrayOfNulls ( 0 )
private var likelyPlaceAttributions : Array<List < * > ? > = arrayOfNulls ( 0 )
private var likelyPlaceLatLngs : Array<LatLng ? > = arrayOfNulls ( 0 )
override fun onCreate ( savedInstanceState : Bundle ? ) {
super . onCreate ( savedInstanceState )
// Retrieve location and camera position from saved instance state .
if ( savedInstanceState != null ) {
lastKnownLocation = savedInstanceState . getParcelable ( KEY_LOCATION )
cameraPosition = savedInstanceState . getParcelable ( KEY_CAMERA_POSITION )
}
// Retrieve the content view that renders the map .
setContentView ( R . layout . activity_maps )
// Construct a PlacesClient
Places . initialize ( applicationContext , BuildConfig . MAPS_API_KEY )
placesClient = Places . createClient ( this )
// Construct a FusedLocationProviderClient .
fusedLocationProviderClient = LocationServices . getFusedLocationProviderClient ( this )
// Build the map .
val mapFragment = supportFragmentManager
. findFragmentById ( R . id . map ) as SupportMapFragment ?
mapFragment ? . getMapAsync ( this )
}
/**
* Saves the state of the map when the activity is paused .
*/
override fun onSaveInstanceState ( outState : Bundle ) {
map ? . let { map - >
outState . putParcelable ( KEY_CAMERA_POSITION , map . cameraPosition )
outState . putParcelable ( KEY_LOCATION , lastKnownLocation )
}
super . onSaveInstanceState ( outState )
}
/**
* Sets up the options menu .
* @param menu The options menu .
* @return Boolean .
*/
override fun onCreateOptionsMenu ( menu : Menu ): Boolean {
menuInflater . inflate ( R . menu . current_place_menu , menu )
return true
}
/**
* Handles a click on the menu option to get a place .
* @param item The menu item to handle .
* @return Boolean .
*/
override fun onOptionsItemSelected ( item : MenuItem ): Boolean {
if ( item . itemId == R . id . option_get_place ) {
showCurrentPlace ()
}
return true
}
/**
* Manipulates the map when it 's available.
* This callback is triggered when the map is ready to be used .
*/
override fun onMapReady ( map : GoogleMap ) {
this . map = map
// Use a custom info window adapter to handle multiple lines of text in the
// info window contents .
this . map ? . setInfoWindowAdapter ( object : InfoWindowAdapter {
// Return null here , so that getInfoContents () is called next .
override fun getInfoWindow ( arg0 : Marker ): View ? {
return null
}
override fun getInfoContents ( marker : Marker ): View {
// Inflate the layouts for the info window , title and snippet .
val infoWindow = layoutInflater . inflate ( R . layout . custom_info_contents ,
findViewById<FrameLayout> ( R . id . map ), false )
val title = infoWindow . findViewById<TextView> ( R . id . title )
title . text = marker . title
val snippet = infoWindow . findViewById<TextView> ( R . id . snippet )
snippet . text = marker . snippet
return infoWindow
}
})
// Prompt the user for permission .
getLocationPermission ()
// Turn on the My Location layer and the related control on the map .
updateLocationUI ()
// Get the current location of the device and set the position of the map .
getDeviceLocation ()
}
/**
* Gets the current location of the device , and positions the map 's camera.
*/
@SuppressLint ( "MissingPermission" )
private fun getDeviceLocation () {
/*
* Get the best and most recent location of the device , which may be null in rare
* cases when a location is not available .
*/
try {
if ( locationPermissionGranted ) {
val locationResult = fusedLocationProviderClient . lastLocation
locationResult . addOnCompleteListener ( this ) { task - >
if ( task . isSuccessful ) {
// Set the map 's camera position to the current location of the device.
lastKnownLocation = task . result
if ( lastKnownLocation != null ) {
map ? . moveCamera ( CameraUpdateFactory . newLatLngZoom (
LatLng ( lastKnownLocation !! . latitude ,
lastKnownLocation !! . longitude ), DEFAULT_ZOOM . toFloat ()))
}
} else {
Log . d ( TAG , "Current location is null. Using defaults." )
Log . e ( TAG , "Exception: %s " , task . exception )
map ? . moveCamera ( CameraUpdateFactory
. newLatLngZoom ( defaultLocation , DEFAULT_ZOOM . toFloat ()))
map ? . uiSettings ? . isMyLocationButtonEnabled = false
}
}
}
} catch ( e : SecurityException ) {
Log . e ( "Exception: %s " , e . message , e )
}
}
/**
* Prompts the user for permission to use the device location .
*/
private fun getLocationPermission () {
/*
* Request location permission , so that we can get the location of the
* device . The result of the permission request is handled by a callback ,
* onRequestPermissionsResult .
*/
if ( ContextCompat . checkSelfPermission ( this . applicationContext ,
Manifest . permission . ACCESS_FINE_LOCATION )
== PackageManager . PERMISSION_GRANTED ) {
locationPermissionGranted = true
} else {
ActivityCompat . requestPermissions ( this , arrayOf ( Manifest . permission . ACCESS_FINE_LOCATION ),
PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION )
}
}
/**
* Handles the result of the request for location permissions .
*/
override fun onRequestPermissionsResult ( requestCode : Int ,
permissions : Array<String> ,
grantResults : IntArray ) {
locationPermissionGranted = false
when ( requestCode ) {
PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION - > {
// If request is cancelled , the result arrays are empty .
if ( grantResults . isNotEmpty () &&
grantResults [ 0 ] == PackageManager . PERMISSION_GRANTED ) {
locationPermissionGranted = true
}
}
else - > super . onRequestPermissionsResult ( requestCode , permissions , grantResults )
}
updateLocationUI ()
}
/**
* Prompts the user to select the current place from a list of likely places , and shows the
* current place on the map - provided the user has granted location permission .
*/
@SuppressLint ( "MissingPermission" )
private fun showCurrentPlace () {
if ( map == null ) {
return
}
if ( locationPermissionGranted ) {
// Use fields to define the data types to return .
val placeFields = listOf ( Place . Field . NAME , Place . Field . ADDRESS , Place . Field . LAT_LNG )
// Use the builder to create a FindCurrentPlaceRequest .
val request = FindCurrentPlaceRequest . newInstance ( placeFields )
// Get the likely places - that is , the businesses and other points of interest that
// are the best match for the device 's current location.
val placeResult = placesClient . findCurrentPlace ( request )
placeResult . addOnCompleteListener { task - >
if ( task . isSuccessful && task . result != null ) {
val likelyPlaces = task . result
// Set the count , handling cases where less than 5 entries are returned .
val count = if ( likelyPlaces != null && likelyPlaces . placeLikelihoods . size < M_MAX_ENTRIES ) {
likelyPlaces . placeLikelihoods . size
} else {
M_MAX_ENTRIES
}
var i = 0
likelyPlaceNames = arrayOfNulls ( count )
likelyPlaceAddresses = arrayOfNulls ( count )
likelyPlaceAttributions = arrayOfNulls<List < * > ? > ( count )
likelyPlaceLatLngs = arrayOfNulls ( count )
for ( placeLikelihood in likelyPlaces ? . placeLikelihoods ? : emptyList ()) {
// Build a list of likely places to show the user .
likelyPlaceNames [ i ] = placeLikelihood . place . name
likelyPlaceAddresses [ i ] = placeLikelihood . place . address
likelyPlaceAttributions [ i ] = placeLikelihood . place . attributions
likelyPlaceLatLngs [ i ] = placeLikelihood . place . latLng
i ++
if ( i > count - 1 ) {
break
}
}
// Show a dialog offering the user the list of likely places , and add a
// marker at the selected place .
openPlacesDialog ()
} else {
Log . e ( TAG , "Exception: %s " , task . exception )
}
}
} else {
// The user has not granted permission .
Log . i ( TAG , "The user did not grant location permission." )
// Add a default marker , because the user hasn 't selected a place.
map ? . addMarker ( MarkerOptions ()
. title ( getString ( R . string . default_info_title ))
. position ( defaultLocation )
. snippet ( getString ( R . string . default_info_snippet )))
// Prompt the user for permission .
getLocationPermission ()
}
}
/**
* Displays a form allowing the user to select a place from a list of likely places .
*/
private fun openPlacesDialog () {
// Ask the user to choose the place where they are now .
val listener = DialogInterface . OnClickListener { dialog , which - > // The "which" argument contains the position of the selected item .
val markerLatLng = likelyPlaceLatLngs [ which ]
var markerSnippet = likelyPlaceAddresses [ which ]
if ( likelyPlaceAttributions [ which ] != null ) {
markerSnippet = """
$markerSnippet
$ {likelyPlaceAttributions[which]}
""" . trimIndent ()
}
if ( markerLatLng == null ) {
return @OnClickListener
}
// Add a marker for the selected place , with an info window
// showing information about that place .
map ? . addMarker ( MarkerOptions ()
. title ( likelyPlaceNames [ which ])
. position ( markerLatLng )
. snippet ( markerSnippet ))
// Position the map 's camera at the location of the marker.
map ? . moveCamera ( CameraUpdateFactory . newLatLngZoom ( markerLatLng ,
DEFAULT_ZOOM . toFloat ()))
}
// Display the dialog .
AlertDialog . Builder ( this )
. setTitle ( R . string . pick_place )
. setItems ( likelyPlaceNames , listener )
. show ()
}
/**
* Updates the map 's UI settings based on whether the user has granted location permission.
*/
@SuppressLint ( "MissingPermission" )
private fun updateLocationUI () {
if ( map == null ) {
return
}
try {
if ( locationPermissionGranted ) {
map ? . isMyLocationEnabled = true
map ? . uiSettings ? . isMyLocationButtonEnabled = true
} else {
map ? . isMyLocationEnabled = false
map ? . uiSettings ? . isMyLocationButtonEnabled = false
lastKnownLocation = null
getLocationPermission ()
}
} catch ( e : SecurityException ) {
Log . e ( "Exception: %s " , e . message , e )
}
}
companion object {
private val TAG = MapsActivityCurrentPlace :: class . java . simpleName
private const val DEFAULT_ZOOM = 15
private const val PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION = 1
// Keys for storing activity state .
private const val KEY_CAMERA_POSITION = "camera_position"
private const val KEY_LOCATION = "location"
// Used for selecting the current place .
private const val M_MAX_ENTRIES = 5
}
}
Set up your development project
Follow these steps to create the tutorial project in Android Studio.
Download and
install
Android Studio.
Add
the Google Play services package to Android
Studio.
Clone
or download the Google Maps Android API v2 Samples repository if you
didn't do that when you started reading this tutorial.
Import the tutorial project:
In Android Studio, select File > New > Import
Project .
Go to the location where you saved the
Google Maps Android API v2 Samples repository after downloading it.
Find the CurrentPlaceDetailsOnMap project at this
location:
PATH-TO-SAVED-REPO /android-samples/tutorials/java/CurrentPlaceDetailsOnMap (Java) or
PATH-TO-SAVED-REPO /android-samples/tutorials/kotlin/CurrentPlaceDetailsOnMap (Kotlin)
Select the project directory, then click Open . Android
Studio now builds your project, using the Gradle build tool.
Enable the necessary APIs and get an API key
To complete this tutorial, you need a Google Cloud project with the necessary
APIs enabled and an API key that's authorized to use the Maps SDK for Android.
For more details, see:
Set up your Google Cloud project
Use an API key
Note: This tutorial requires that you enable the Places API
as well as the Maps SDK for Android.
To view the APIs your enabled APIs, go to the Google Maps Platform page
in the Cloud console and select your project:
Go to Google Maps Platform page
If you do not see that the Places API is enabled in your project, you must enable it:
Enable the Places API
If you add any restrictions to your API key, make sure to add the Places API
to the key. See Using API Keys
for more information.
Add the API key to your app
Open your project's local.properties file.
Add the following string and then replace YOUR_API_KEY with the value of your API key:
MAPS_API_KEY= YOUR_API_KEY
When you build your app, the
Secrets Gradle Plugin for Android
will copy the API key and make it available as a build variable in the Android manifest.
Build and run your app
Connect an Android device to your computer. Follow the
instructions
to enable developer options on your Android device and configure your system
to detect the device.
Alternatively, you can use the
Android
Virtual Device (AVD) Manager to configure a virtual device. When choosing an emulator,
make sure you pick an image that includes the Google APIs. For more details, see the
Set Up an Android Studio Project .
In Android Studio, click the Run menu option (or the play
button icon). Choose a device as prompted.
Android Studio invokes Gradle to build the app, and then runs the app on
the device or on the emulator. You should see a map with a number of markers
centered around your current location, similar to the image on this page.
Select Get Place to open a list of places (a business or other point of interest)
near your current location.
Select a place from the list. A marker is added to the map for the selected place.
Troubleshooting:
If you don't see a map, check that you've obtained an API key and added it
to the app, as described above . Check the log in
Android Studio's
Android
Monitor for error messages about the API key.
If the map shows just a single marker located on Sydney Harbour Bridge
(the default location specified in the app), check that you've granted
location permission to the app. The app prompts for
location permission at run time, following the pattern described in the
Android
permissions guide . Note that you can also set permissions directly on
the device, by choosing Settings > Apps > app name >
Permissions > Location . For details on how to handle permissions in
your code, see the guide below to requesting
location permission in your app .
Use the
Android
Studio debugging tools to view logs and debug the app.
Understand the code
This part of the tutorial explains the most significant parts of the
CurrentPlaceDetailsOnMap app, to help you understand how to
build a similar app.
Instantiate the Places API client
These objects are the primary entry points to the Places SDK for Android:
The
Places
class creates and manages clients for the Places SDK for Android.
The
PlacesClient
interface retrieves the current location of the device and the places near the location.
The LocationServices
interface is the main entry point for Android location services.
To use the APIs, do the following in the
onCreate()
method of your fragment or activity:
Initialize a Places object.
Create a PlacesClient object.
Create a FusedLocationProviderClient object.
For example:
Java
@Override
protected void onCreate ( Bundle savedInstanceState ) {
super . onCreate ( savedInstanceState );
// ...
// Retrieve the content view that renders the map.
setContentView ( R . layout . activity_maps );
// Construct a PlacesClient
Places . initialize ( getApplicationContext (), getString ( R . string . maps_api_key ));
placesClient = Places . createClient ( this );
// Construct a FusedLocationProviderClient.
fusedLocationProviderClient = LocationServices . getFusedLocationProviderClient ( this );
}
Kotlin
override fun onCreate ( savedInstanceState : Bundle?) {
super . onCreate ( savedInstanceState )
// ...
// Retrieve the content view that renders the map.
setContentView ( R . layout . activity_maps )
// Construct a PlacesClient
Places . initialize ( applicationContext , getString ( R . string . maps_api_key ))
placesClient = Places . createClient ( this )
// Construct a FusedLocationProviderClient.
fusedLocationProviderClient = LocationServices . getFusedLocationProviderClient ( this )
}
Request location permission
Your app must request location permission in order to determine the
location of the device and to allow the user to tap the My Location
button on the map.
This tutorial provides the code you need to request fine location permission.
For more details, see the guide to
Android
permissions .
Add the permission as a child of the <manifest>
element in your Android manifest:
< manifest xmlns : android = "http://schemas.android.com/apk/res/android"
package = "com.example.currentplacedetailsonmap" >
< uses - permission android : name = "android.permission.ACCESS_FINE_LOCATION" / >
< / manifest >
Request runtime permissions in your app, giving the user the
opportunity to allow or deny location permission. The following code checks
whether the user has granted fine location permission. If not, it requests
the permission:
Java
private void getLocationPermission () {
/*
* Request location permission, so that we can get the location of the
* device. The result of the permission request is handled by a callback,
* onRequestPermissionsResult.
*/
if ( ContextCompat . checkSelfPermission ( this . getApplicationContext (),
android . Manifest . permission . ACCESS_FINE_LOCATION )
== PackageManager . PERMISSION_GRANTED ) {
locationPermissionGranted = true ;
} else {
ActivityCompat . requestPermissions ( this ,
new String [] { android . Manifest . permission . ACCESS_FINE_LOCATION },
PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION );
}
} MapsActivityCurrentPlace . java
Kotlin
private fun getLocationPermission () {
/*
* Request location permission, so that we can get the location of the
* device. The result of the permission request is handled by a callback,
* onRequestPermissionsResult.
*/
if ( ContextCompat . checkSelfPermission ( this . applicationContext ,
Manifest . permission . ACCESS_FINE_LOCATION )
== PackageManager . PERMISSION_GRANTED ) {
locationPermissionGranted = true
} else {
ActivityCompat . requestPermissions ( this , arrayOf ( Manifest . permission . ACCESS_FINE_LOCATION ),
PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION )
}
} MapsActivityCurrentPlace . kt
Override the onRequestPermissionsResult() callback to
handle the result of the permission request:
Java
@Override
public void onRequestPermissionsResult ( int requestCode ,
@NonNull String [] permissions ,
@NonNull int [] grantResults ) {
locationPermissionGranted = false ;
if ( requestCode
== PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION ) { // If request is cancelled, the result arrays are empty.
if ( grantResults . length > 0
&& grantResults [ 0 ] == PackageManager . PERMISSION_GRANTED ) {
locationPermissionGranted = true ;
}
} else {
super . onRequestPermissionsResult ( requestCode , permissions , grantResults );
}
updateLocationUI ();
} MapsActivityCurrentPlace . java
Kotlin
override fun onRequestPermissionsResult ( requestCode : Int ,
permissions : Array<String> ,
grantResults : IntArray ) {
locationPermissionGranted = false
when ( requestCode ) {
PERMISSIONS_REQUEST_ACCESS_FINE_LOCATION - > {
// If request is cancelled, the result arrays are empty.
if ( grantResults . isNotEmpty () &&
grantResults [ 0 ] == PackageManager . PERMISSION_GRANTED ) {
locationPermissionGranted = true
}
}
else - > super . onRequestPermissionsResult ( requestCode , permissions , grantResults )
}
updateLocationUI ()
} MapsActivityCurrentPlace . kt
A later section of this tutorial describes the
updateLocationUI() method.
Add a map
Display a map, using the Maps SDK for Android.
Add a <fragment> element to your activity's layout
file, activity_maps.xml . This element defines a
SupportMapFragment
to act as a container for the map and to provide access to the
GoogleMap object. The tutorial uses the Android support library
version of the map fragment, to ensure backward compatibility with earlier
versions of the Android framework.
< !--
Copyright 2020 Google LLC
Licensed under the Apache License , Version 2.0 ( the "License" );
you may not use this file except in compliance with the License .
You may obtain a copy of the License at
http : // www . apache . org / licenses / LICENSE - 2.0
Unless required by applicable law or agreed to in writing , software
distributed under the License is distributed on an "AS IS" BASIS ,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND , either express or implied .
See the License for the specific language governing permissions and
limitations under the License .
-- >
< fragment xmlns : android = "http://schemas.android.com/apk/res/android"
xmlns : tools = "http://schemas.android.com/tools"
android : id = "@+id/map"
android : name = "com.google.android.gms.maps.SupportMapFragment"
android : layout_width = "match_parent"
android : layout_height = "match_parent"
tools : context = "com.example.currentplacedetailsonmap.MapsActivityCurrentPlace" / >
In your activity's onCreate() method, set the layout file
as the content view:
Java
@Override
protected void onCreate ( Bundle savedInstanceState ) {
super . onCreate ( savedInstanceState );
// Retrieve the content view that renders the map.
setContentView ( R . layout . activity_maps );
} MapsActivityCurrentPlace . java
Kotlin
override fun onCreate ( savedInstanceState : Bundle?) {
super . onCreate ( savedInstanceState )
// Retrieve the content view that renders the map.
setContentView ( R . layout . activity_maps )
} MapsActivityCurrentPlace . kt
Implement the
OnMapReadyCallback
interface and override the onMapReady() method, to set up the
map when the GoogleMap object is available:
Java
@Override
public void onMapReady ( GoogleMap map ) {
this . map = map ;
// ...
// Turn on the My Location layer and the related control on the map.
updateLocationUI ();
// Get the current location of the device and set the position of the map.
getDeviceLocation ();
} MapsActivityCurrentPlace . java
Kotlin
override fun onMapReady ( map : GoogleMap ) {
this . map = map
// ...
// Turn on the My Location layer and the related control on the map.
updateLocationUI ()
// Get the current location of the device and set the position of the map.
getDeviceLocation ()
} MapsActivityCurrentPlace . kt
In your activity's onCreate() method, get a handle to
the map fragment by calling
FragmentManager.findFragmentById() .
Then use
getMapAsync()
to register for the map callback:
Java
SupportMapFragment mapFragment = ( SupportMapFragment ) getSupportFragmentManager ()
. findFragmentById ( R . id . map );
mapFragment . getMapAsync ( this ); MapsActivityCurrentPlace . java
Kotlin
val mapFragment = supportFragmentManager
. findFragmentById ( R . id . map ) as SupportMapFragment?
mapFragment ?. getMapAsync ( this ) MapsActivityCurrentPlace . kt
Write an updateLocationUI() method to set the location
controls on the map. If the user has granted location permission, enable the
My Location layer and the related control on the map, otherwise disable the
layer and the control, and set the current location to null:
Java
private void updateLocationUI () {
if ( map == null ) {
return ;
}
try {
if ( locationPermissionGranted ) {
map . setMyLocationEnabled ( true );
map . getUiSettings (). setMyLocationButtonEnabled ( true );
} else {
map . setMyLocationEnabled ( false );
map . getUiSettings (). setMyLocationButtonEnabled ( false );
lastKnownLocation = null ;
}
} catch ( SecurityException e ) {
Log . e ( "Exception: %s" , e . getMessage ());
}
} MapsActivityCurrentPlace . java
Kotlin
@SuppressLint ( "MissingPermission" )
private fun updateLocationUI () {
if ( map == null ) {
return
}
try {
if ( locationPermissionGranted ) {
map ?. isMyLocationEnabled = true
map ?. uiSettings ?. isMyLocationButtonEnabled = true
} else {
map ?. isMyLocationEnabled = false
map ?. uiSettings ?. isMyLocationButtonEnabled = false
lastKnownLocation = null
getLocationPermission ()
}
} catch ( e : SecurityException ) {
Log . e ( "Exception: %s" , e . message , e )
}
} MapsActivityCurrentPlace . kt
Get the location of the Android device and position the map
Use the fused location provider to find the device's last-known location,
then use that location to position the map. The tutorial provides the code you
need. For more details on getting the device's location, see the guide to the
fused
location provider in the Google Play services location APIs.
Java
private void getDeviceLocation () {
/*
* Get the best and most recent location of the device, which may be null in rare
* cases when a location is not available.
*/
try {
if ( locationPermissionGranted ) {
Task<Location> locationResult = fusedLocationProviderClient . getLastLocation ();
locationResult . addOnCompleteListener ( this , new OnCompleteListener<Location> () {
@Override
public void onComplete ( @NonNull Task<Location> task ) {
if ( task . isSuccessful ()) {
// Set the map's camera position to the current location of the device.
lastKnownLocation = task . getResult ();
if ( lastKnownLocation != null ) {
map . moveCamera ( CameraUpdateFactory . newLatLngZoom (
new LatLng ( lastKnownLocation . getLatitude (),
lastKnownLocation . getLongitude ()), DEFAULT_ZOOM ));
}
} else {
Log . d ( TAG , "Current location is null. Using defaults." );
Log . e ( TAG , "Exception: %s" , task . getException ());
map . moveCamera ( CameraUpdateFactory
. newLatLngZoom ( defaultLocation , DEFAULT_ZOOM ));
map . getUiSettings (). setMyLocationButtonEnabled ( false );
}
}
});
}
} catch ( SecurityException e ) {
Log . e ( "Exception: %s" , e . getMessage (), e );
}
} MapsActivityCurrentPlace . java
Kotlin
@SuppressLint ( "MissingPermission" )
private fun getDeviceLocation () {
/*
* Get the best and most recent location of the device, which may be null in rare
* cases when a location is not available.
*/
try {
if ( locationPermissionGranted ) {
val locationResult = fusedLocationProviderClient . lastLocation
locationResult . addOnCompleteListener ( this ) { task - >
if ( task . isSuccessful ) {
// Set the map's camera position to the current location of the device.
lastKnownLocation = task . result
if ( lastKnownLocation != null ) {
map ?. moveCamera ( CameraUpdateFactory . newLatLngZoom (
LatLng ( lastKnownLocation !! . latitude ,
lastKnownLocation !! . longitude ), DEFAULT_ZOOM . toFloat ()))
}
} else {
Log . d ( TAG , "Current location is null. Using defaults." )
Log . e ( TAG , "Exception: %s" , task . exception )
map ?. moveCamera ( CameraUpdateFactory
. newLatLngZoom ( defaultLocation , DEFAULT_ZOOM . toFloat ()))
map ?. uiSettings ?. isMyLocationButtonEnabled = false
}
}
}
} catch ( e : SecurityException ) {
Log . e ( "Exception: %s" , e . message , e )
}
} MapsActivityCurrentPlace . kt
Get the current place
Use the Places SDK for Android to get a list of likely places at the
device's current location. In this context, a place is a business
or other point of interest.
This tutorial gets the current place when the user clicks a
Get Place button. It offers the user a list of likely places
to choose from, then adds a marker on the map at the location of the selected
place. The tutorial provides the code you need to interact with the
Places SDK for Android. For more details, see the guide to
getting the current place .
Create a layout file ( current_place_menu.xml ) for the options
menu, and override the onCreateOptionsMenu() method, to set up
the options menu. See the accompanying sample app for the code.
Override the onOptionsItemSelected() method to get the
current place when the user clicks the Get Place option:
Java
@Override
public boolean onOptionsItemSelected ( MenuItem item ) {
if ( item . getItemId () == R . id . option_get_place ) {
showCurrentPlace ();
}
return true ;
} MapsActivityCurrentPlace . java
Kotlin
override fun onOptionsItemSelected ( item : MenuItem ): Boolean {
if ( item . itemId == R . id . option_get_place ) {
showCurrentPlace ()
}
return true
} MapsActivityCurrentPlace . kt
Create a showCurrentPlace() method to get a list of likely
places at the device's current location:
Java
private void showCurrentPlace () {
if ( map == null ) {
return ;
}
if ( locationPermissionGranted ) {
// Use fields to define the data types to return.
List<Place . Field > placeFields = Arrays . asList ( Place . Field . NAME , Place . Field . ADDRESS ,
Place . Field . LAT_LNG );
// Use the builder to create a FindCurrentPlaceRequest.
FindCurrentPlaceRequest request =
FindCurrentPlaceRequest . newInstance ( placeFields );
// Get the likely places - that is, the businesses and other points of interest that
// are the best match for the device's current location.
@SuppressWarnings ( "MissingPermission" ) final
Task<FindCurrentPlaceResponse> placeResult =
placesClient . findCurrentPlace ( request );
placeResult . addOnCompleteListener ( new OnCompleteListener<FindCurrentPlaceResponse> () {
@Override
public void onComplete ( @NonNull Task<FindCurrentPlaceResponse> task ) {
if ( task . isSuccessful () && task . getResult () != null ) {
FindCurrentPlaceResponse likelyPlaces = task . getResult ();
// Set the count, handling cases where less than 5 entries are returned.
int count ;
if ( likelyPlaces . getPlaceLikelihoods (). size () < M_MAX_ENTRIES ) {
count = likelyPlaces . getPlaceLikelihoods (). size ();
} else {
count = M_MAX_ENTRIES ;
}
int i = 0 ;
likelyPlaceNames = new String [ count ] ;
likelyPlaceAddresses = new String [ count ] ;
likelyPlaceAttributions = new List [ count ] ;
likelyPlaceLatLngs = new LatLng [ count ] ;
for ( PlaceLikelihood placeLikelihood : likelyPlaces . getPlaceLikelihoods ()) {
// Build a list of likely places to show the user.
likelyPlaceNames [ i ] = placeLikelihood . getPlace (). getName ();
likelyPlaceAddresses [ i ] = placeLikelihood . getPlace (). getAddress ();
likelyPlaceAttributions [ i ] = placeLikelihood . getPlace ()
. getAttributions ();
likelyPlaceLatLngs [ i ] = placeLikelihood . getPlace (). getLatLng ();
i ++ ;
if ( i > ( count - 1 )) {
break ;
}
}
// Show a dialog offering the user the list of likely places, and add a
// marker at the selected place.
MapsActivityCurrentPlace . this . openPlacesDialog ();
}
else {
Log . e ( TAG , "Exception: %s" , task . getException ());
}
}
});
} else {
// The user has not granted permission.
Log . i ( TAG , "The user did not grant location permission." );
// Add a default marker, because the user hasn't selected a place.
map . addMarker ( new MarkerOptions ()
. title ( getString ( R . string . default_info_title ))
. position ( defaultLocation )
. snippet ( getString ( R . string . default_info_snippet )));
// Prompt the user for permission.
getLocationPermission ();
}
} MapsActivityCurrentPlace . java
Kotlin
@SuppressLint ( "MissingPermission" )
private fun showCurrentPlace () {
if ( map == null ) {
return
}
if ( locationPermissionGranted ) {
// Use fields to define the data types to return.
val placeFields = listOf ( Place . Field . NAME , Place . Field . ADDRESS , Place . Field . LAT_LNG )
// Use the builder to create a FindCurrentPlaceRequest.
val request = FindCurrentPlaceRequest . newInstance ( placeFields )
// Get the likely places - that is, the businesses and other points of interest that
// are the best match for the device's current location.
val placeResult = placesClient . findCurrentPlace ( request )
placeResult . addOnCompleteListener { task - >
if ( task . isSuccessful && task . result != null ) {
val likelyPlaces = task . result
// Set the count, handling cases where less than 5 entries are returned.
val count = if ( likelyPlaces != null && likelyPlaces . placeLikelihoods . size < M_MAX_ENTRIES ) {
likelyPlaces . placeLikelihoods . size
} else {
M_MAX_ENTRIES
}
var i = 0
likelyPlaceNames = arrayOfNulls ( count )
likelyPlaceAddresses = arrayOfNulls ( count )
likelyPlaceAttributions = arrayOfNulls<List < *>? > ( count )
likelyPlaceLatLngs = arrayOfNulls ( count )
for ( placeLikelihood in likelyPlaces ?. placeLikelihoods ?: emptyList ()) {
// Build a list of likely places to show the user.
likelyPlaceNames [ i ] = placeLikelihood . place . name
likelyPlaceAddresses [ i ] = placeLikelihood . place . address
likelyPlaceAttributions [ i ] = placeLikelihood . place . attributions
likelyPlaceLatLngs [ i ] = placeLikelihood . place . latLng
i ++
if ( i > count - 1 ) {
break
}
}
// Show a dialog offering the user the list of likely places, and add a
// marker at the selected place.
openPlacesDialog ()
} else {
Log . e ( TAG , "Exception: %s" , task . exception )
}
}
} else {
// The user has not granted permission.
Log . i ( TAG , "The user did not grant location permission." )
// Add a default marker, because the user hasn't selected a place.
map ?. addMarker ( MarkerOptions ()
. title ( getString ( R . string . default_info_title ))
. position ( defaultLocation )
. snippet ( getString ( R . string . default_info_snippet )))
// Prompt the user for permission.
getLocationPermission ()
}
} MapsActivityCurrentPlace . kt
Create an openPlacesDialog() method to display a form
allowing the user to select a place from a list of likely places. Add a
marker on the map for the selected place. The marker content includes the
name and address of the place, and any attributions that the API supplies:
Java
private void openPlacesDialog () {
// Ask the user to choose the place where they are now.
DialogInterface . OnClickListener listener = new DialogInterface . OnClickListener () {
@Override
public void onClick ( DialogInterface dialog , int which ) {
// The "which" argument contains the position of the selected item.
LatLng markerLatLng = likelyPlaceLatLngs [ which ] ;
String markerSnippet = likelyPlaceAddresses [ which ] ;
if ( likelyPlaceAttributions [ which ] != null ) {
markerSnippet = markerSnippet + "\n" + likelyPlaceAttributions [ which ] ;
}
// Add a marker for the selected place, with an info window
// showing information about that place.
map . addMarker ( new MarkerOptions ()
. title ( likelyPlaceNames [ which ] )
. position ( markerLatLng )
. snippet ( markerSnippet ));
// Position the map's camera at the location of the marker.
map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( markerLatLng ,
DEFAULT_ZOOM ));
}
};
// Display the dialog.
AlertDialog dialog = new AlertDialog . Builder ( this )
. setTitle ( R . string . pick_place )
. setItems ( likelyPlaceNames , listener )
. show ();
} MapsActivityCurrentPlace . java
Kotlin
private fun openPlacesDialog () {
// Ask the user to choose the place where they are now.
val listener = DialogInterface . OnClickListener { dialog , which - > // The "which" argument contains the position of the selected item.
val markerLatLng = likelyPlaceLatLngs [ which ]
var markerSnippet = likelyPlaceAddresses [ which ]
if ( likelyPlaceAttributions [ which ] != null ) {
markerSnippet = """
$ markerSnippet
${ likelyPlaceAttributions [ which ] }
""" . trimIndent ()
}
if ( markerLatLng == null ) {
return @OnClickListener
}
// Add a marker for the selected place, with an info window
// showing information about that place.
map ?. addMarker ( MarkerOptions ()
. title ( likelyPlaceNames [ which ] )
. position ( markerLatLng )
. snippet ( markerSnippet ))
// Position the map's camera at the location of the marker.
map ?. moveCamera ( CameraUpdateFactory . newLatLngZoom ( markerLatLng ,
DEFAULT_ZOOM . toFloat ()))
}
// Display the dialog.
AlertDialog . Builder ( this )
. setTitle ( R . string . pick_place )
. setItems ( likelyPlaceNames , listener )
. show ()
} MapsActivityCurrentPlace . kt
Create a custom layout for the info window content. This makes it
possible to display multiple lines of content in the info window. First, add
an XML layout file, custom_info_contents.xml , containing a text
view for the info window title, and another text view for the snippet (that
is, the info window's textual content):
< ? xml version = "1.0" encoding = "utf-8" ? >
< ! --
Copyright 2020 Google LLC
Licensed under the Apache License , Version 2.0 ( the "License" );
you may not use this file except in compliance with the License .
You may obtain a copy of the License at
http : //www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing , software
distributed under the License is distributed on an "AS IS" BASIS ,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND , either express or implied .
See the License for the specific language governing permissions and
limitations under the License .
-- >
< LinearLayout xmlns : android = "http://schemas.android.com/apk/res/android"
android : layout_width = "wrap_content"
android : layout_height = "wrap_content"
android : layoutDirection = "locale"
android : orientation = "vertical" >
< TextView
android : id = "@+id/title"
android : layout_width = "wrap_content"
android : layout_height = "wrap_content"
android : layout_gravity = "center_horizontal"
android : textColor = "#ff000000"
android : textStyle = "bold" / >
< TextView
android : id = "@+id/snippet"
android : layout_width = "wrap_content"
android : layout_height = "wrap_content"
android : textColor = "#ff7f7f7f" / >
< / LinearLayout >
Implement the
InfoWindowAdapter
interface to inflate the layout and load the info window content:
Java
// Use a custom info window adapter to handle multiple lines of text in the
// info window contents.
this . map . setInfoWindowAdapter ( new GoogleMap . InfoWindowAdapter () {
@Override
// Return null here, so that getInfoContents() is called next.
public View getInfoWindow ( Marker arg0 ) {
return null ;
}
@Override
public View getInfoContents ( Marker marker ) {
// Inflate the layouts for the info window, title and snippet.
View infoWindow = getLayoutInflater (). inflate ( R . layout . custom_info_contents ,
( FrameLayout ) findViewById ( R . id . map ), false );
TextView title = infoWindow . findViewById ( R . id . title );
title . setText ( marker . getTitle ());
TextView snippet = infoWindow . findViewById ( R . id . snippet );
snippet . setText ( marker . getSnippet ());
return infoWindow ;
}
}); MapsActivityCurrentPlace . java
Kotlin
// Use a custom info window adapter to handle multiple lines of text in the
// info window contents.
this . map ?. setInfoWindowAdapter ( object : InfoWindowAdapter {
// Return null here, so that getInfoContents() is called next.
override fun getInfoWindow ( arg0 : Marker ): View? {
return null
}
override fun getInfoContents ( marker : Marker ): View {
// Inflate the layouts for the info window, title and snippet.
val infoWindow = layoutInflater . inflate ( R . layout . custom_info_contents ,
findViewById<FrameLayout> ( R . id . map ), false )
val title = infoWindow . findViewById<TextView> ( R . id . title )
title . text = marker . title
val snippet = infoWindow . findViewById<TextView> ( R . id . snippet )
snippet . text = marker . snippet
return infoWindow
}
}) MapsActivityCurrentPlace . kt
Note: By default, the
Maps SDK for Android displays the content of the info window when the
user taps a marker. There's no need to add a click listener for the marker if
you’re happy to use the default behavior.
Save the map's state
Save the map's camera position and the device location. When a user rotates
an Android device, or makes configuration changes, the Android framework
destroys and rebuilds the map activity. To ensure a smooth user experience,
it's good to store relevant application state and restore it when needed.
This tutorial provides all the code you need to save the map's state. For
more details, see the guide to the
savedInstanceState
bundle .
In your map activity, set up key values for storing activity state:
Java
private static final String KEY_CAMERA_POSITION = "camera_position" ;
private static final String KEY_LOCATION = "location" ; MapsActivityCurrentPlace . java
Kotlin
private const val KEY_CAMERA_POSITION = "camera_position"
private const val KEY_LOCATION = "location" MapsActivityCurrentPlace . kt
Implement the onSaveInstanceState() callback to save the
state when the activity pauses:
Java
@Override
protected void onSaveInstanceState ( Bundle outState ) {
if ( map != null ) {
outState . putParcelable ( KEY_CAMERA_POSITION , map . getCameraPosition ());
outState . putParcelable ( KEY_LOCATION , lastKnownLocation );
}
super . onSaveInstanceState ( outState );
} MapsActivityCurrentPlace . java
Kotlin
override fun onSaveInstanceState ( outState : Bundle ) {
map ?. let { map - >
outState . putParcelable ( KEY_CAMERA_POSITION , map . cameraPosition )
outState . putParcelable ( KEY_LOCATION , lastKnownLocation )
}
super . onSaveInstanceState ( outState )
} MapsActivityCurrentPlace . kt
In your activity's onCreate() method, retrieve the
device's location and the map's camera position if previously saved:
Java
// Retrieve location and camera position from saved instance state.
if ( savedInstanceState != null ) {
lastKnownLocation = savedInstanceState . getParcelable ( KEY_LOCATION );
cameraPosition = savedInstanceState . getParcelable ( KEY_CAMERA_POSITION );
} MapsActivityCurrentPlace . java
Kotlin
if ( savedInstanceState != null ) {
lastKnownLocation = savedInstanceState . getParcelable ( KEY_LOCATION )
cameraPosition = savedInstanceState . getParcelable ( KEY_CAMERA_POSITION )
} MapsActivityCurrentPlace . kt
Congratulations! You've built an Android
app that shows the current place on a Google map. You've also learned how to
use the
Maps SDK for Android ,
the Places SDK for Android , and the
fused
location provider .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

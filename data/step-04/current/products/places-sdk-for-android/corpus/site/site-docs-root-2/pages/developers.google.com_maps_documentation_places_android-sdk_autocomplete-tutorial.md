---
title: "Add Place Autocomplete to an address form \_|\_ Places SDK for Android \_\
  |\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial
  title: "Add Place Autocomplete to an address form \_|\_ Places SDK for Android \_\
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
Places SDK for Android
Guides
Send feedback
Add Place Autocomplete to an address form
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Streamline address entry in Android apps using Google Maps Platform's Place Autocomplete, reducing user effort and errors.
Implement the Autocomplete widget to provide search suggestions, populate address fields automatically, and display the selected location on a map.
Enable necessary APIs, handle the returned address data, and consider optional proximity checks for location verification.
Familiarize yourself with key concepts like Place Autocomplete, Place Object, Address Components, LatLng, Map Fragment, and Marker for a comprehensive understanding.
Refer to the original documentation and provided code snippets for detailed implementation guidance and best practices.
When filling out a delivery address, billing information, or event information, enabling forms with Place Autocomplete helps users reduce keystrokes and mistakes when entering address information. This tutorial walks through the steps needed to enable an input field with Place Autocomplete and populate address form fields with address components from the user-selected address, and present the selected address on a map to aid with visual confirmation.
Videos: Enhance address forms with Place Autocomplete
Address forms
Android
iOS
Web
Google Maps Platform provides a Place Autocomplete widget for mobile
platforms and web. The widget, shown in the previous figures, provides a
search dialog with built-in autocomplete functionality that you can even
optimize for location-scoped search.
Get the code
Clone or download the
Google Places SDK for Android Demos repository from GitHub.
View the Java version of the activity:
Show / Hide Code
/*
* Copyright 2022 Google LLC
*
* Licensed under the Apache License , Version 2.0 ( the "License" );
* you may not use this file except in compliance with the License .
* You may obtain a copy of the License at
*
* https : // www . apache . org / licenses / LICENSE - 2.0
*
* Unless required by applicable law or agreed to in writing , software
* distributed under the License is distributed on an "AS IS" BASIS ,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND , either express or implied .
* See the License for the specific language governing permissions and
* limitations under the License .
*/
package com . example . placesdemo ;
import android.annotation.SuppressLint ;
import android.app.Activity ;
import android.content.Intent ;
import android.content.pm.PackageManager ;
import android.content.res.Resources ;
import android.os.Bundle ;
import android.util.Log ;
import android.view.View ;
import android.view.ViewStub ;
import android.widget.Button ;
import android.widget.CheckBox ;
import android.widget.Toast ;
import androidx.activity.result.ActivityResultLauncher ;
import androidx.activity.result.contract.ActivityResultContracts ;
import androidx.annotation.NonNull ;
import androidx.annotation.Nullable ;
import androidx.appcompat.app.AppCompatActivity ;
import androidx.core.content.ContextCompat ;
import com.example.placesdemo.databinding.AutocompleteAddressActivityBinding ;
import com.google.android.gms.location.FusedLocationProviderClient ;
import com.google.android.gms.location.LocationServices ;
import com.google.android.gms.maps.CameraUpdateFactory ;
import com.google.android.gms.maps.GoogleMap ;
import com.google.android.gms.maps.GoogleMapOptions ;
import com.google.android.gms.maps.OnMapReadyCallback ;
import com.google.android.gms.maps.SupportMapFragment ;
import com.google.android.gms.maps.model.LatLng ;
import com.google.android.gms.maps.model.MapStyleOptions ;
import com.google.android.gms.maps.model.Marker ;
import com.google.android.gms.maps.model.MarkerOptions ;
import com.google.android.libraries.places.api.Places ;
import com.google.android.libraries.places.api.model.AddressComponent ;
import com.google.android.libraries.places.api.model.AddressComponents ;
import com.google.android.libraries.places.api.model.Place ;
import com.google.android.libraries.places.api.model.PlaceTypes ;
import com.google.android.libraries.places.api.net.PlacesClient ;
import com.google.android.libraries.places.widget.Autocomplete ;
import com.google.android.libraries.places.widget.model.AutocompleteActivityMode ;
import java.util.Arrays ;
import java.util.List ;
import static android . Manifest . permission . ACCESS_FINE_LOCATION ;
import static com . google . maps . android . SphericalUtil . computeDistanceBetween ;
import androidx.activity.EdgeToEdge ;
/**
* Activity for using Place Autocomplete to assist filling out an address form .
*/
@SuppressWarnings ( "FieldCanBeLocal" )
public class AutocompleteAddressActivity extends AppCompatActivity implements OnMapReadyCallback {
private static final String TAG = "ADDRESS_AUTOCOMPLETE" ;
private static final String MAP_FRAGMENT_TAG = "MAP" ;
private LatLng coordinates ;
private boolean checkProximity = false ;
private SupportMapFragment mapFragment ;
private GoogleMap map ;
private Marker marker ;
private PlacesClient placesClient ;
private View mapPanel ;
private LatLng deviceLocation ;
private static final double acceptedProximity = 150 ;
private AutocompleteAddressActivityBinding binding ;
View . OnClickListener startAutocompleteIntentListener = view - > {
view . setOnClickListener ( null );
startAutocompleteIntent ();
};
private final ActivityResultLauncher<Intent> startAutocomplete = registerForActivityResult (
new ActivityResultContracts . StartActivityForResult (),
result - > {
if ( result . getResultCode () == Activity . RESULT_OK ) {
Intent intent = result . getData ();
if ( intent != null ) {
Place place = Autocomplete . getPlaceFromIntent ( intent );
// Write a method to read the address components from the Place
// and populate the form with the address components
Log . d ( TAG , "Place: " + place . getAddressComponents ());
fillInAddress ( place );
}
} else if ( result . getResultCode () == Activity . RESULT_CANCELED ) {
// The user canceled the operation .
Log . i ( TAG , "User canceled autocomplete" );
}
});
@Override
protected void onActivityResult ( int requestCode , int resultCode , @Nullable Intent intent ) {
super . onActivityResult ( requestCode , resultCode , intent );
binding . autocompleteAddress1 . setOnClickListener ( startAutocompleteIntentListener );
}
@Override
protected void onCreate ( Bundle savedInstanceState ) {
// Enable edge - to - edge display . This must be called before calling super . onCreate () .
EdgeToEdge . enable ( this );
super . onCreate ( savedInstanceState );
binding = AutocompleteAddressActivityBinding . inflate ( getLayoutInflater ());
setContentView ( binding . getRoot ());
// Retrieve a PlacesClient ( previously initialized - see MainActivity )
placesClient = Places . createClient ( this );
// Attach an Autocomplete intent to the Address 1 EditText field
binding . autocompleteAddress1 . setOnClickListener ( startAutocompleteIntentListener );
// Update checkProximity when user checks the checkbox
CheckBox checkProximityBox = findViewById ( R . id . checkbox_proximity );
checkProximityBox . setOnCheckedChangeListener (( view , isChecked ) - > {
// Set the boolean to match user preference for when the Submit button is clicked
checkProximity = isChecked ;
});
// Submit and optionally check proximity
Button saveButton = findViewById ( R . id . autocomplete_save_button );
saveButton . setOnClickListener ( v - > saveForm ());
// Reset the form
Button resetButton = findViewById ( R . id . autocomplete_reset_button );
resetButton . setOnClickListener ( v - > clearForm ());
}
private void startAutocompleteIntent () {
// Set the fields to specify which types of place data to
// return after the user has made a selection .
List<Place . Field > fields = Arrays . asList ( Place . Field . ADDRESS_COMPONENTS ,
Place . Field . LOCATION , Place . Field . VIEWPORT );
// Build the autocomplete intent with field , country , and type filters applied
Intent intent = new Autocomplete . IntentBuilder ( AutocompleteActivityMode . OVERLAY , fields )
. setCountries ( List . of ( "US" ))
. setTypesFilter ( List . of ( "establishment" ))
. build ( this );
startAutocomplete . launch ( intent );
}
@Override
public void onMapReady ( @NonNull GoogleMap googleMap ) {
map = googleMap ;
try {
// Customise the styling of the base map using a JSON object defined
// in a string resource .
boolean success = map . setMapStyle (
MapStyleOptions . loadRawResourceStyle ( this , R . raw . style_json ));
if ( ! success ) {
Log . e ( TAG , "Style parsing failed." );
}
} catch ( Resources . NotFoundException e ) {
Log . e ( TAG , "Can't find style. Error: " , e );
}
map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( coordinates , 15 f ));
marker = map . addMarker ( new MarkerOptions () . position ( coordinates ));
}
private void fillInAddress ( Place place ) {
AddressComponents components = place . getAddressComponents ();
StringBuilder address1 = new StringBuilder ();
StringBuilder postcode = new StringBuilder ();
// Get each component of the address from the place details ,
// and then fill - in the corresponding field on the form .
// Possible AddressComponent types are documented at https : // goo . gle / 32 SJPM1
if ( components != null ) {
for ( AddressComponent component : components . asList ()) {
String type = component . getTypes () . get ( 0 );
switch ( type ) {
case "street_number" : {
address1 . insert ( 0 , component . getName ());
break ;
}
case "route" : {
address1 . append ( " " );
address1 . append ( component . getShortName ());
break ;
}
case "postal_code" : {
postcode . insert ( 0 , component . getName ());
break ;
}
case "postal_code_suffix" : {
postcode . append ( "-" ) . append ( component . getName ());
break ;
}
case "locality" :
binding . autocompleteCity . setText ( component . getName ());
break ;
case "administrative_area_level_1" : {
binding . autocompleteState . setText ( component . getShortName ());
break ;
}
case "country" :
binding . autocompleteCountry . setText ( component . getName ());
break ;
}
}
}
binding . autocompleteAddress1 . setText ( address1 . toString ());
binding . autocompletePostal . setText ( postcode . toString ());
// After filling the form with address components from the Autocomplete
// prediction , set cursor focus on the second address line to encourage
// entry of sub - premise information such as apartment , unit , or floor number .
binding . autocompleteAddress2 . requestFocus ();
// Add a map for visual confirmation of the address
showMap ( place );
}
private void showMap ( Place place ) {
coordinates = place . getLocation ();
// It isn 't possible to set a fragment' s id programmatically so we set a tag instead and
// search for it using that .
mapFragment = ( SupportMapFragment )
getSupportFragmentManager () . findFragmentByTag ( MAP_FRAGMENT_TAG );
// We only create a fragment if it doesn 't already exist.
if ( mapFragment == null ) {
mapPanel = (( ViewStub ) findViewById ( R . id . stub_map )) . inflate ();
GoogleMapOptions mapOptions = new GoogleMapOptions ();
mapOptions . mapToolbarEnabled ( false );
// To programmatically add the map , we first create a SupportMapFragment .
mapFragment = SupportMapFragment . newInstance ( mapOptions );
// Then we add it using a FragmentTransaction .
getSupportFragmentManager ()
. beginTransaction ()
. add ( R . id . confirmation_map , mapFragment , MAP_FRAGMENT_TAG )
. commit ();
mapFragment . getMapAsync ( this );
} else {
updateMap ( coordinates );
}
}
private void updateMap ( LatLng latLng ) {
marker . setPosition ( latLng );
map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( latLng , 15 f ));
if ( mapPanel . getVisibility () == View . GONE ) {
mapPanel . setVisibility ( View . VISIBLE );
}
}
private void saveForm () {
Log . d ( TAG , "checkProximity = " + checkProximity );
if ( checkProximity ) {
checkLocationPermissions ();
} else {
Toast . makeText (
this ,
R . string . autocomplete_skipped_message ,
Toast . LENGTH_SHORT )
. show ();
}
}
private void clearForm () {
binding . autocompleteAddress1 . setText ( "" );
binding . autocompleteAddress2 . getText () . clear ();
binding . autocompleteCity . getText () . clear ();
binding . autocompleteState . getText () . clear ();
binding . autocompletePostal . getText () . clear ();
binding . autocompleteCountry . getText () . clear ();
if ( mapPanel != null ) {
mapPanel . setVisibility ( View . GONE );
}
binding . autocompleteAddress1 . requestFocus ();
}
// Register the permissions callback , which handles the user 's response to the
// system permissions dialog . Save the return value , an instance of
// ActivityResultLauncher , as an instance variable .
private final ActivityResultLauncher<String> requestPermissionLauncher =
registerForActivityResult ( new ActivityResultContracts . RequestPermission (), isGranted - > {
if ( isGranted ) {
// Since ACCESS_FINE_LOCATION is the only permission in this sample ,
// run the location comparison task once permission is granted .
// Otherwise , check which permission is granted .
getAndCompareLocations ();
} else {
// Fallback behavior if user denies permission
Log . d ( TAG , "User denied permission" );
}
});
private void checkLocationPermissions () {
if ( ContextCompat . checkSelfPermission ( this , ACCESS_FINE_LOCATION )
== PackageManager . PERMISSION_GRANTED ) {
getAndCompareLocations ();
} else {
requestPermissionLauncher . launch (
ACCESS_FINE_LOCATION );
}
}
@SuppressLint ( "MissingPermission" )
private void getAndCompareLocations () {
// TODO : Detect and handle if user has entered or modified the address manually and update
// the coordinates variable to the Lat / Lng of the manually entered address . May use
// Geocoding API to convert the manually entered address to a Lat / Lng .
LatLng enteredLocation = coordinates ;
map . setMyLocationEnabled ( true );
FusedLocationProviderClient fusedLocationClient =
LocationServices . getFusedLocationProviderClient ( this );
fusedLocationClient . getLastLocation ()
. addOnSuccessListener ( this , location - > {
// Got last known location . In some rare situations this can be null .
if ( location == null ) {
return ;
}
deviceLocation = new LatLng ( location . getLatitude (), location . getLongitude ());
Log . d ( TAG , "device location = " + deviceLocation );
Log . d ( TAG , "entered location = " + enteredLocation . toString ());
// Use the computeDistanceBetween function in the Maps SDK for Android Utility Library
// to use spherical geometry to compute the distance between two Lat / Lng points .
double distanceInMeters = computeDistanceBetween ( deviceLocation , enteredLocation );
if ( distanceInMeters < = acceptedProximity ) {
Log . d ( TAG , "location matched" );
// TODO : Display UI based on the locations matching
} else {
Log . d ( TAG , "location not matched" );
// TODO : Display UI based on the locations not matching
}
});
}
}
Enabling APIs
To implement these recommendations, you must enable the following APIs in the
Google Cloud console:
Maps SDK for Android
(or the API for your platform of choice)
Places API
For more information about setup, see Set up your Google Cloud project .
Adding autocomplete to input fields
This section describes how to add Place Autocomplete to an address form.
Adding the Place Autocomplete widget
In Android, you can add the autocomplete widget using an
Autocomplete intent
that launches Place Autocomplete from the Address Line 1 input field, where
the user will start entering their address. When they start typing, they'll
be able to select their address from the list of Autocomplete predictions.
First, prepare an activity launcher, using
ActivityResultLauncher ,
that will listen for a result
from the launched activity. The result callback will contain a Place object
corresponding to the address that the user selects from Autocomplete
predictions.
private final ActivityResultLauncher<Intent> startAutocomplete = registerForActivityResult (
new ActivityResultContracts . StartActivityForResult (),
result - > {
if ( result . getResultCode () == Activity . RESULT_OK ) {
Intent intent = result . getData ();
if ( intent != null ) {
Place place = Autocomplete . getPlaceFromIntent ( intent );
// Write a method to read the address components from the Place
// and populate the form with the address components
Log . d ( TAG , "Place: " + place . getAddressComponents ());
fillInAddress ( place );
}
} else if ( result . getResultCode () == Activity . RESULT_CANCELED ) {
// The user canceled the operation.
Log . i ( TAG , "User canceled autocomplete" );
}
});
Next, define the fields, location, and type properties of the
Place Autocomplete intent and build it with
Autocomplete.IntentBuilder .
Finally, launch the intent using the ActivityResultLauncher defined in the
previous code sample.
private void startAutocompleteIntent () {
// Set the fields to specify which types of place data to
// return after the user has made a selection.
List<Place . Field > fields = Arrays . asList ( Place . Field . ADDRESS_COMPONENTS ,
Place . Field . LOCATION , Place . Field . VIEWPORT );
// Build the autocomplete intent with field, country, and type filters applied
Intent intent = new Autocomplete . IntentBuilder ( AutocompleteActivityMode . OVERLAY , fields )
. setCountries ( List . of ( "US" ))
. setTypesFilter ( List . of ( "establishment" ))
. build ( this );
startAutocomplete . launch ( intent );
}
Handling the address returned by Place Autocomplete
Defining the ActivityResultLauncher earlier also defined what should be
done when the activity result is returned in the callback. If the user
selected a prediction, it will be delivered in the intent contained in
the result object. Since the intent was built by Autocomplete.IntentBuilder ,
the method Autocomplete.getPlaceFromIntent() can extract the Place object
from it.
private final ActivityResultLauncher<Intent> startAutocomplete = registerForActivityResult (
new ActivityResultContracts . StartActivityForResult (),
result - > {
if ( result . getResultCode () == Activity . RESULT_OK ) {
Intent intent = result . getData ();
if ( intent != null ) {
Place place = Autocomplete . getPlaceFromIntent ( intent );
// Write a method to read the address components from the Place
// and populate the form with the address components
Log . d ( TAG , "Place: " + place . getAddressComponents ());
fillInAddress ( place );
}
} else if ( result . getResultCode () == Activity . RESULT_CANCELED ) {
// The user canceled the operation.
Log . i ( TAG , "User canceled autocomplete" );
}
});
From there, call Place.getAddressComponents() and match each address
component to its corresponding input field in the address form, populating the
field with the value from the user's selected Place.
An example implementation for populating the address form fields is shared in the fillInAddress method of sample code provided under the Get the code section of this page.
Capturing address data from the prediction instead of a manually entered
address helps ensure address accuracy, ensures that the address is known and
can be delivered to, and reduces user keystrokes.
Considerations when implementing Place Autocomplete
Place Autocomplete has a number of options that allow it to be flexible with
its implementation if you want to use more than just the widget. You can use
a combination of services to get exactly what you need to match a location
in the correct way.
For an ADDRESS form, set the types parameter to address to restrict the
matches to full street addresses. Learn more about
types supported in Place Autocomplete requests .
Set the appropriate restrictions and biases
if you don’t need to search worldwide. There are a number of parameters that
can be used to bias or restrict any match to only specific regions.
Use RectangularBounds to set the rectangular bounds to constrain for
an area, use setLocationRestriction() to make sure only addresses in
those areas are returned.
Use setCountries() to restrict responses to a certain set of countries.
Leave fields editable in case certain fields are missed from the match,
and allow customers to update the address if required. Since most addresses
returned by Place Autocomplete do not contain subpremise numbers such as
apartment, suite, or unit numbers, you can move the focus to Address Line 2
to encourage the user to fill in that information if necessary.
Providing visual confirmation of the address
As part of address entry, provide users with visual confirmation of the
address on a map. This offers users additional assurance that the address
is correct.
The following figure shows a map below the address with a pin at the address
entered.
The following example follows the basic steps for adding a map
in Android. Refer to the documentation for more details.
Adding SupportMapFragment (in this case, adding a fragment dynamically)
Getting a handle to the fragment and registering the callback
Styling and adding a marker to the map
Disabling map controls
Adding SupportMapFragment
First, add a SupportMapFragment fragment to the
layout XML file .
<fragment
android:name="com.google.android.gms.maps.SupportMapFragment"
android:id="@+id/confirmation_map"
android:layout_width="match_parent"
android:layout_height="match_parent"/>
Then, programmatically add the fragment if it doesn't exist yet.
private void showMap(Place place) {
coordinates = place.getLocation();
// It isn't possible to set a fragment's id programmatically so we set a tag instead and
// search for it using that.
mapFragment = (SupportMapFragment)
getSupportFragmentManager().findFragmentByTag(MAP_FRAGMENT_TAG);
// We only create a fragment if it doesn't already exist.
if (mapFragment == null) {
mapPanel = ((ViewStub) findViewById(R.id.stub_map)).inflate();
GoogleMapOptions mapOptions = new GoogleMapOptions();
mapOptions.mapToolbarEnabled(false);
// To programmatically add the map, we first create a SupportMapFragment.
mapFragment = SupportMapFragment.newInstance(mapOptions);
// Then we add it using a FragmentTransaction.
getSupportFragmentManager()
.beginTransaction()
.add(R.id.confirmation_map, mapFragment, MAP_FRAGMENT_TAG)
.commit();
mapFragment.getMapAsync(this);
} else {
updateMap(coordinates);
}
}
Getting a handle to the fragment and registering the callback
To get a handle to the fragment, call the
FragmentManager.findFragmentById method and pass it
the resource ID of the fragment in your layout file. If you added the fragment
dynamically , skip this step because you already retrieved the handle.
Call the getMapAsync method to set the
callback on the fragment.
For example, if you added the fragment statically:
Kotlin
val mapFragment = supportFragmentManager
. findFragmentById ( R . id . map ) as SupportMapFragment
mapFragment . getMapAsync ( this )
Java
SupportMapFragment mapFragment = ( SupportMapFragment ) getSupportFragmentManager ()
. findFragmentById ( R . id . map );
mapFragment . getMapAsync ( this );
Styling and adding a marker to the map
When the map is ready, set the style, center the camera, and add a marker at
the coordinates of the entered address. The following code uses styling
defined in a JSON object or you can alternatively load a map ID that has
been defined with
Cloud-based Maps Styling .
@ Override
public void onMapReady ( @ NonNull GoogleMap googleMap ) {
map = googleMap ;
try {
// Customise the styling of the base map using a JSON object defined
// in a string resource .
boolean success = map . setMapStyle (
MapStyleOptions . loadRawResourceStyle ( this , R . raw . style_json ));
if ( ! success ) {
Log . e ( TAG , "Style parsing failed." );
}
} catch ( Resources . NotFoundException e ) {
Log . e ( TAG , "Can't find style. Error: " , e );
}
map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( coordinates , 15 f ));
marker = map . addMarker ( new MarkerOptions () . position ( coordinates ));
}
( See full code sample )
Disabling map controls
To keep the map simple by showing location without additional map controls
(such as compass, toolbar, or other built-in features), consider disabling
the controls you don't find
necessary. On Android, another option is to enable
lite mode to provide limited
interactivity.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The system utilizes the Google Maps Platform to enhance address input and validation. Key actions include: using Place Autocomplete to predict addresses as users type, extracting detailed address components from selections, and automatically populating form fields. The selected address is then displayed on a map for visual confirmation. It also compares the entered location with the user's actual device location. The workflow involves launching an autocomplete intent, retrieving a `Place` object, extracting components, populating forms, and updating the map with a marker. It also requests permissions to access device location.\n"]]

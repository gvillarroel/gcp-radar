---
title: "Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/overview
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit
  title: "Places SDK for Android \_|\_ Google for Developers"
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
Stay organized with collections
Save and categorize content based on your preferences.
Select platform:
Android
iOS
JavaScript
Place Details component
The Place Details component of the Places UI Kit lets you add an individual UI component that displays place details in your app. This component is customizable.
The Place Details component can be used independently or in conjunction with other Google Maps Platform APIs and services. The component takes either a Place ID , resource name, or latitude/longitude coordinates and returns rendered Place Details information.
The Place Details component is fully themeable, allowing you to customize fonts, colors, and corner radii to match your use case and visual brand guidelines. You can customize the appearance of the place details by creating a theme that extends PlacesMaterialTheme and provides overrides for the theme attributes. You can also customize which place details fields are included by specifying a list of Content entries, each of which corresponds to a piece of information shown about the place.
Tip: Use the Customization tool to visualize how different sets of properties will affect the appearance of a Places Details element and access the code in HTML/CSS, Kotlin/XML, and Swift.
Layout variants
The Place Details component supports two main layout variants:
Compact: A layout for previewing key information.
Full: A comprehensive layout displaying all available place details.
The compact layout can be displayed in either vertical or horizontal orientation. This lets you integrate the component into various design layouts and screen sizes. The full layout can only be displayed vertically.
Horizontal and vertical layouts
The Place Details component gives you granular control over the content displayed in the component. Each element (like photos, reviews, and contact information) can be individually shown or hidden, allowing for precise customization of the components appearance and information density.
Content display options
Place Details compact view
The Place Details compact fragment ( PlaceDetailsCompactFragment ) renders details for a selected place using minimal space. This may be useful in an info window highlighting a place on a map, in a social media experience like sharing a location in a chat, as a suggestion for selecting your current location, or within a media article to reference the place on Google Maps.
Place Details full view
Place details full view ( PlaceDetailsFragment ) offers a larger surface to display place detail information, and lets you display more types of information.
Content display options
You can specify which content to display using the enums in PlaceDetailsCompactFragment.Content or PlaceDetailsFragment.Content .
Compact view
Full view
Place photo
Lightbox enabled for full-screen photo enlargement
Place address
Rating and rating count
Place type
Price
Accessible entrance information
Open now status
Place photo collage
Place address
Rating and rating count
Place type
Price
Accessibility info
Open now status
Open hours
Editorial summary
Website
Phone number
Reviews rendered in dedicated tab
Plus code
Feature list, rendered in a dedicated tab
Type-specific highlights, such as gas prices for gas stations
Billing
When using the Place Details UI Kit, you are billed for each time the .loadWithPlaceId() , .loadWithResourceName() , or loadWithCoordinates() method is called. If you load the same place multiple times, you are billed for each request.
To avoid being charged multiple times, don't directly add .loadWithPlaceId() or .loadWithResourceName() in Android lifecycle methods. For example, don't directly call .loadWithPlaceId() or .loadWithResourceName() in the onResume() method.
Add place details to your app
You can add place details to your app by adding a fragment to a layout. When you instantiate the fragment, you can customize the look and feel of the place details information to suit your needs and match your app's appearance. Learn more about customization .
You have three methods available in both Kotlin and Java: one to load the fragment with a Place ID ( loadWithPlaceId() ), one to load the fragment with a resource name ( loadWithResourceName() ), and one to load the fragment with latitude/longitude coordinates ( loadWithCoordinates() ). You can choose any method, or multiple.
The default position for the compact view is vertical. If you would like a horizontal layout, specify Orientation.HORIZONTAL . You can also optionally specify Orientation.VERTICAL for clarity. The full view can only be displayed vertically.
See examples in the Place Details component examples section.
Customize the visual appearance
Custom styling
You can customize the colors, typography, spacing, borders, and corners of your Place Details component.
Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications). See Material Design's reference for Color and Typography . By default, the style adheres to the Google Maps visual design language.
The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes. To customize the dark theme, add an entry for the color in values-night/colors.xml .
See the Custom styling section for more information about styling.
Width and height customization
Compact views
Recommended widths:
Vertical orientation: Between 180dp and 300dp.
Horizontal orientation: Between 180dp and 500dp.
Widths smaller than 160dp may not display correctly.
Best practice is to not set a height for compact views. This will allow the content in the window to set the height, allowing all the information to be displayed.
Note: The Place thumbnail image won't appear for views less than 350dp wide.
Full views
For full views, the recommended width is between 250dp and 450dp. A width smaller than 250dp may not display correctly.
You can set the height of the component: the vertical Place Details view will scroll vertically within the allotted space.
Best practice is to set a height for full views. This will allow the content in the window to scroll properly.
Place Details component examples
Note: If you don't specify a visual customization, it will retain the default value.
Create a compact or full view
Kotlin
// We create a new instance of the fragment using its factory method.
// We can specify which content to show, the orientation, and a custom theme.
val fragment = PlaceDetailsCompactFragment . newInstance (
PlaceDetailsCompactFragment . ALL_CONTENT , // Show all available content.
orientation ,
R . style . CustomizedPlaceDetailsTheme ,
). apply {
// The PlaceLoadListener provides callbacks for when the place data is successfully
// loaded or when an error occurs. This is where we update our UI state.
setPlaceLoadListener ( object : PlaceLoadListener {
override fun onSuccess ( place : Place ) {
Log . d ( TAG , & quot ; Place loaded : $ { place . id } & quot ;)
// Once the data is loaded, we hide the loading indicator and show the fragment.
binding . loadingIndicatorMain . visibility = View . GONE
binding . placeDetailsContainer . visibility = View . VISIBLE
binding . dismissButton . visibility = View . VISIBLE
}
override fun onFailure ( e : Exception ) {
Log . e ( TAG , & quot ; Place failed to load&quot ;, e )
// On failure, we hide the UI and notify the user.
dismissPlaceDetails ()
Toast . makeText ( this @MainActivity , & quot ; Failed to load place details . & quot ;, Toast . LENGTH_SHORT ). show ()
}
})
}
// We add the fragment to our layout&#39;s container view.
// `commitNow()` is used to ensure the fragment is immediately added and available,
// which is important because we need to call a method on it right after.
supportFragmentManager
. beginTransaction ()
. replace ( binding . placeDetailsContainer . id , fragment )
. commitNow ()
// **This is the key step**: After adding the fragment, we call `loadWithPlaceId`
// to trigger the data loading process for the selected place.
// We use `post` to ensure this runs after the layout has been measured,
// which can prevent potential timing issues.
binding . root . post {
fragment . loadWithPlaceId ( placeId )
}
}
Java
PlaceDetailsCompactFragment fragment =
PlaceDetailsCompactFragment . newInstance (
Orientation . HORIZONTAL ,
Arrays . asList ( Content . ADDRESS , Content . TYPE , Content . RATING , Content . ACCESSIBLE_ENTRANCE_ICON ),
R . style . CustomizedPlaceDetailsTheme );
fragment . setPlaceLoadListener (
new PlaceLoadListener () {
@Override public void onSuccess ( Place place ) { ... }
@Override public void onFailure ( Exception e ) { ... }
});
getSupportFragmentManager ()
. beginTransaction ()
. add ( R . id . fragment_container , fragment )
. commitNow ();
// Load the fragment with a Place ID.
fragment . loadWithPlaceId ( placeId );
// Load the fragment with a resource name.
fragment . loadWithResourceName ( resourceName );
This full code sample determines the orientation of the compact view programmatically based on the configuration of the user's device.
Kotlin
package com.example.placedetailsuikit
import android.Manifest
import android.annotation.SuppressLint
import android.content.pm.PackageManager
import android.content.res.Configuration
import android.location.Location
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.lifecycle.ViewModel
import com.example.placedetailsuikit.databinding.ActivityMainBinding
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.PointOfInterest
import com.google.android.libraries.places.api.Places
import com.google.android.libraries.places.api.model.Place
import com.google.android.libraries.places.widget.PlaceDetailsCompactFragment
import com.google.android.libraries.places.widget.PlaceLoadListener
import com.google.android.libraries.places.widget.model.Orientation
private const val TAG = & quot ; PlacesUiKit&quot ;
/**
* A simple ViewModel to store UI state that needs to survive configuration changes.
* In this case, it holds the ID of the selected place. Using a ViewModel is good practice
* as it prevents data loss during events like screen rotation, ensuring a
* seamless user experience.
*/
class MainViewModel : ViewModel () {
var selectedPlaceId : String? = null
}
/**
* This activity serves as a basic example of integrating the Place Details UI Kit.
* It demonstrates the fundamental steps required:
* 1. Setting up a Google Map.
* 2. Requesting location permissions to center the map.
* 3. Handling clicks on Points of Interest (POIs) to get a Place ID.
* 4. Using the Place ID to load and display place details in a [PlaceDetailsCompactFragment].
*/
class MainActivity : AppCompatActivity (), OnMapReadyCallback , GoogleMap . OnPoiClickListener {
// ViewBinding provides type-safe access to views defined in the XML layout,
// eliminating the need for `findViewById` and preventing null pointer exceptions.
private lateinit var binding : ActivityMainBinding
private var googleMap : GoogleMap? = null
// The FusedLocationProviderClient is the main entry point for interacting with the
// fused location provider, which intelligently manages the underlying location technologies.
private lateinit var fusedLocationClient : FusedLocationProviderClient
// Using registerForActivityResult is the modern, recommended approach for handling
// permission requests. It decouples the request from the handling logic, making the
// code cleaner and easier to manage compared to the older `onRequestPermissionsResult` callback.
private lateinit var requestPermissionLauncher : ActivityResultLauncher&lt ; Array&lt ; String&gt ; & gt ;
// The `by viewModels()` delegate provides a lazy-initialized ViewModel scoped to this Activity.
// This ensures that we get the same ViewModel instance across configuration changes.
private val viewModel : MainViewModel by viewModels ()
override fun onCreate ( savedInstanceState : Bundle?) {
super . onCreate ( savedInstanceState )
// The ActivityResultLauncher is initialized here. The lambda defines the callback
// that will be executed once the user responds to the permission dialog.
requestPermissionLauncher =
registerForActivityResult ( ActivityResultContracts . RequestMultiplePermissions ()) { permissions - & gt ;
// We check if either fine or coarse location permission was granted.
if ( permissions [ Manifest . permission . ACCESS_FINE_LOCATION ] == true || permissions [ Manifest . permission . ACCESS_COARSE_LOCATION ] == true ) {
Log . d ( TAG , & quot ; Location permission granted by user . & quot ;)
fetchLastLocation ()
} else {
// If permission is denied, we inform the user and default to a known location.
// This ensures the app remains functional even without location access.
Log . d ( TAG , & quot ; Location permission denied by user . & quot ;)
Toast . makeText (
this ,
& quot ; Location permission denied . Showing default location . & quot ;,
Toast . LENGTH_LONG
). show ()
moveToSydney ()
}
}
// enableEdgeToEdge() allows the app to draw behind the system bars for a more immersive experience.
enableEdgeToEdge ()
binding = ActivityMainBinding . inflate ( layoutInflater )
setContentView ( binding . root )
binding . dismissButton . setOnClickListener {
dismissPlaceDetails ()
}
// --- Crucial: Initialize Places SDK ---
// It&#39;s essential to initialize the Places SDK before making any other Places API calls.
// This should ideally be done once, for example, in the Application&#39;s `onCreate`.
val apiKey = BuildConfig . PLACES_API_KEY
if ( apiKey . isEmpty () || apiKey == & quot ; YOUR_API_KEY&quot ;) {
// A valid API key is required for the Places SDK to function.
Log . e ( TAG , & quot ; No api key&quot ;)
Toast . makeText (
this ,
& quot ; Add your own API_KEY in local . properties&quot ;,
Toast . LENGTH_LONG
). show ()
finish ()
return
}
// `initializeWithNewPlacesApiEnabled` is used to opt-in to the new SDK version.
Places . initializeWithNewPlacesApiEnabled ( applicationContext , apiKey )
fusedLocationClient = LocationServices . getFusedLocationProviderClient ( this )
// ------------------------------------
// The SupportMapFragment is the container for the map. `getMapAsync` allows us to
// work with the GoogleMap object via a callback once it&#39;s fully initialized.
val mapFragment =
supportFragmentManager . findFragmentById ( R . id . map_fragment ) as SupportMapFragment?
mapFragment ?. getMapAsync ( this )
// This block handles restoration after a configuration change (e.g., screen rotation).
// If a place was selected before the rotation, its ID is stored in the ViewModel.
// We use this ID to immediately show the details fragment again.
if ( viewModel . selectedPlaceId != null ) {
viewModel . selectedPlaceId ?. let { placeId - & gt ;
Log . d ( TAG , & quot ; Restoring PlaceDetailsFragment for place ID : $ placeId&quot ;)
showPlaceDetailsFragment ( placeId )
}
}
}
/**
* This callback is triggered when the GoogleMap object is ready to be used.
* All map setup logic should be placed here.
*/
override fun onMapReady ( map : GoogleMap ) {
Log . d ( TAG , & quot ; Map is ready&quot ;)
googleMap = map
// Setting the OnPoiClickListener allows us to capture user taps on points of interest.
googleMap ?. setOnPoiClickListener ( this )
// After the map is ready, we determine the initial camera position based on location permissions.
if ( isLocationPermissionGranted ()) {
fetchLastLocation ()
} else {
requestLocationPermissions ()
}
}
/**
* A helper function to centralize the check for location permissions.
*/
private fun isLocationPermissionGranted (): Boolean {
return ActivityCompat . checkSelfPermission (
this ,
Manifest . permission . ACCESS_FINE_LOCATION
) == PackageManager . PERMISSION_GRANTED ||
ActivityCompat . checkSelfPermission (
this ,
Manifest . permission . ACCESS_COARSE_LOCATION
) == PackageManager . PERMISSION_GRANTED
}
/**
* This function triggers the permission request flow. The result is handled by the
* ActivityResultLauncher defined in `onCreate`.
*/
private fun requestLocationPermissions () {
Log . d ( TAG , & quot ; Requesting location permissions . & quot ;)
requestPermissionLauncher . launch (
arrayOf (
Manifest . permission . ACCESS_FINE_LOCATION ,
Manifest . permission . ACCESS_COARSE_LOCATION
)
)
}
/**
* Fetches the device&#39;s last known location. This is a fast and battery-efficient way
* to get a location fix. It should only be called after verifying permissions.
*/
@SuppressLint ( & quot ; MissingPermission&quot ;)
private fun fetchLastLocation () {
// Double-checking permissions here is a good practice, although the call sites are already guarded.
if ( isLocationPermissionGranted ()) {
fusedLocationClient . lastLocation
. addOnSuccessListener { location : Location? - & gt ;
if ( location != null ) {
val userLocation = LatLng ( location . latitude , location . longitude )
googleMap ?. moveCamera ( CameraUpdateFactory . newLatLngZoom ( userLocation , 13f ))
Log . d ( TAG , & quot ; Moved to user & # 39 ; s last known location . & quot ;)
} else {
// `lastLocation` can be null if the location has never been recorded.
// In this case, we fall back to a default location.
Log . d ( TAG , & quot ; Last known location is null . Falling back to Sydney . & quot ;)
moveToSydney ()
}
}
. addOnFailureListener {
// This listener handles errors in the location fetching process.
Log . e ( TAG , & quot ; Failed to get location . & quot ;, it )
moveToSydney ()
}
}
}
/**
* Moves the map camera to a default, hardcoded location (Sydney).
* This serves as a reliable fallback.
*/
private fun moveToSydney () {
val sydney = LatLng ( - 33.8688 , 151.2093 )
googleMap ?. moveCamera ( CameraUpdateFactory . newLatLngZoom ( sydney , 13f ))
Log . d ( TAG , & quot ; Moved to Sydney&quot ;)
}
/**
* This is the callback for the `OnPoiClickListener`. It&#39;s triggered when a user
* taps a POI on the map.
*/
override fun onPoiClick ( poi : PointOfInterest ) {
val placeId = poi . placeId
Log . d ( TAG , & quot ; Place ID : $ placeId&quot ;)
// We save the selected place ID to the ViewModel. This is critical for surviving
// configuration changes. If the user rotates the screen now, the `onCreate`
// method will be able to restore the place details view.
viewModel . selectedPlaceId = placeId
showPlaceDetailsFragment ( placeId )
}
/**
* This function is the core of the integration. It creates, configures, and displays
* the [PlaceDetailsCompactFragment].
* @param placeId The unique identifier for the place to be displayed.
*/
private fun showPlaceDetailsFragment ( placeId : String ) {
Log . d ( TAG , & quot ; Showing PlaceDetailsFragment for place ID : $ placeId&quot ;)
// We manage the visibility of UI elements to provide feedback to the user.
// The wrapper is shown, and a loading indicator is displayed while the data is fetched.
binding . placeDetailsWrapper . visibility = View . VISIBLE
binding . dismissButton . visibility = View . GONE
binding . placeDetailsContainer . visibility = View . GONE
binding . loadingIndicatorMain . visibility = View . VISIBLE
// The Place Details widget can be displayed vertically or horizontally.
// We dynamically choose the orientation based on the device&#39;s current configuration.
val orientation =
if ( resources . configuration . orientation == Configuration . ORIENTATION_LANDSCAPE ) {
Orientation . HORIZONTAL
} else {
Orientation . VERTICAL
}
// We create a new instance of the fragment using its factory method.
// We can specify which content to show, the orientation, and a custom theme.
val fragment = PlaceDetailsCompactFragment . newInstance (
PlaceDetailsCompactFragment . ALL_CONTENT , // Show all available content.
orientation ,
R . style . CustomizedPlaceDetailsTheme ,
). apply {
// The PlaceLoadListener provides callbacks for when the place data is successfully
// loaded or when an error occurs. This is where we update our UI state.
setPlaceLoadListener ( object : PlaceLoadListener {
override fun onSuccess ( place : Place ) {
Log . d ( TAG , & quot ; Place loaded : $ { place . id } & quot ;)
// Once the data is loaded, we hide the loading indicator and show the fragment.
binding . loadingIndicatorMain . visibility = View . GONE
binding . placeDetailsContainer . visibility = View . VISIBLE
binding . dismissButton . visibility = View . VISIBLE
}
override fun onFailure ( e : Exception ) {
Log . e ( TAG , & quot ; Place failed to load&quot ;, e )
// On failure, we hide the UI and notify the user.
dismissPlaceDetails ()
Toast . makeText ( this @MainActivity , & quot ; Failed to load place details . & quot ;, Toast . LENGTH_SHORT ). show ()
}
})
}
// We add the fragment to our layout&#39;s container view.
// `commitNow()` is used to ensure the fragment is immediately added and available,
// which is important because we need to call a method on it right after.
supportFragmentManager
. beginTransaction ()
. replace ( binding . placeDetailsContainer . id , fragment )
. commitNow ()
// **This is the key step**: After adding the fragment, we call `loadWithPlaceId`
// to trigger the data loading process for the selected place.
// We use `post` to ensure this runs after the layout has been measured,
// which can prevent potential timing issues.
binding . root . post {
fragment . loadWithPlaceId ( placeId )
}
}
/**
* Hides the place details view and clears the selected place ID from the ViewModel.
*/
private fun dismissPlaceDetails () {
binding . placeDetailsWrapper . visibility = View . GONE
// Clearing the ID in the ViewModel is important so that if the user rotates the
// screen after dismissing, the details view doesn&#39;t reappear.
viewModel . selectedPlaceId = null
}
override fun onDestroy () {
super . onDestroy ()
// It&#39;s a good practice to nullify references to objects that have a lifecycle
// tied to the activity, like the GoogleMap object, to prevent potential memory leaks.
googleMap = null
}
}
Tip: Access the full code samples on GitHub .
Create a theme
When instantiating a fragment, you can specify a theme that overrides any of the default style attributes. Any theme attributes that are not overridden use the default styles. If you'd like to support a dark theme, you can add an entry for the color in values-night/colors.xml .
The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes. To customize the dark theme, add an entry for the color in values-night/colors.xml .
< style name = "CustomizedPlaceDetailsTheme" parent = "PlacesMaterialTheme" >
< item name = "placesColorPrimary" > @color / app_primary_color < / item >
< item name = "placesColorOnSurface" > @color / app_color_on_surface < / item >
< item name = "placesColorOnSurfaceVariant" > @color / app_color_on_surface < / item >
< item name = "placesTextAppearanceBodySmall" > @style / app_text_appearence_small < / item >
< item name = "placesCornerRadius" > 20 dp < / item >
< / style >
Use standard content
This sample uses the standard content.
val fragmentStandardContent = PlaceDetailsCompactFragment.newInstance(
PlaceDetailsCompactFragment.STANDARD_CONTENT,
orientation,
R.style.CustomizedPlaceDetailsTheme
)
Customize specific content
This sample selects only the address, accessible entrance, and media Content options for a compact view, and renders them with the CustomizedPlaceDetailsTheme .
val placeDetailsFragment = PlaceDetailsCompactFragment.newInstance(
orientation,
listOf(
Content.ADDRESS,
Content.ACCESSIBLE_ENTRANCE,
Content.MEDIA
),
R.style.CustomizedPlaceDetailsTheme
)
Use all content
This sample uses all Content options of a compact view.
val fragmentAllContent = PlaceDetailsCompactFragment.newInstance(
orientation,
PlaceDetailsCompactFragment.ALL_CONTENT,
R.style.CustomizedPlaceDetailsTheme
)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]

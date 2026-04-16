---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.790Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Place name language code"
feature_slug: "place-name-language-code"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-id"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-photos"
keywords:
  - "place"
  - "name"
  - "language"
  - "code"
  - "adds"
  - "getnamelanguagecode"
  - "to"
  - "retrieve"
---

# Place name language code

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Adds Place.getNameLanguageCode() to retrieve the language code for the place name string.

## Extended Definition

Adds Place.getNameLanguageCode() to retrieve the language code for the place name string.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-id](https://developers.google.com/maps/documentation/places/android-sdk/place-id)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-photos](https://developers.google.com/maps/documentation/places/android-sdk/place-photos)

## Supporting Pages

### "Add Place Autocomplete to an address form \_|\_ Places SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Error: " , e ); } map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( coordinates , 15 f )); marker = map . addMarker ( new MarkerOptions () . position ( coordinates )); } private void fillInAddress ( Place place ) { AddressComponents components = place . getAddressComponents (); StringBuilder address1 = new StringBuilder (); StringBuilder postcode = new StringBuilder (); // Get each component of the address from the place details , // and then fill - in the corresponding field on the form . // Possible AddressComponent types are documented at https : // goo . gle / 32 SJPM1 if ( components != null ) { for ( AddressComponent component : components . asList ()) { String type = component . getTypes () . get ( 0 ); switch ( type ) { case "street number" : { address1 . insert ( 0 , component . getName ()); break ; } case "route" : { address1 . append ( " " ); address1 . append ( component . getShortName ()); break ; } case "postal code" : { postcode . insert ( 0 , component . getName ()); break ; } case "postal code suffix" : { postcode . append ( "-" ) . append ( component . getName ()); break ; } case "locality" : binding . autocompleteCity . setText ( component . getName ()); break ; case "administrative area level 1" : { binding . autocompleteState . setText ( component . getShortName ()); break ; } case "country" : binding . autocompleteCountry . setText ( component . getName ()); break ; } } } binding . autocompleteAddress1 . setText ( address1 . toString ()); binding . autocompletePostal . setText ( postcode . toString ()); // After filling the form with address components from the Autocomplete // prediction , set cursor focus on the second address line to encourage // entry of sub - premise information such as apartment , unit , or floor number . binding . autocompleteAddress2 . requestFocus (); // Add a map for visual confirmation of the address showMap ( place ); } private void showMap ( Place place ) { coordinates = place . getLocation (); // It isn 't possible to set a fragment' s id programmatically so we set a tag instead and // search for it using that . mapFragment = ( SupportMapFragment ) getSupportFragmentManager () . findFragmentByTag ( MAP FRAGMENT TAG ); // We only create a fragment if it doesn 't already exist. if ( mapFragment == null ) { mapPanel = (( ViewStub ) findViewById ( R . id . stub map )) . inflate (); GoogleMapOptions mapOptions = new GoogleMapOptions (); mapOptions . mapToolbarEnabled ( false ); // To programmatically add the map , we first create a SupportMapFragment . mapFragment = SupportMapFragment . newInstance ( mapOptions ); // Then we add it using a FragmentTransaction . getSupportFragmentManager () . beginTransaction () . add ( R . id . confirmation map , mapFragment , MAP FRAGMENT TAG ) . commit (); mapFragment . getMapAsync ( this ); } else { updateMap ( coordinates ); } } private void updateMap ( LatLng latLng ) { marker . setPosition ( latLng ); map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( latLng , 15 f )); if ( mapPanel . getVisibility () == View .
- See the License for the specific language governing permissions and limitations under the License . / package com . example . placesdemo ; import android.annotation.SuppressLint ; import android.app.Activity ; import android.content.Intent ; import android.content.pm.PackageManager ; import android.content.res.Resources ; import android.os.Bundle ; import android.util.Log ; import android.view.View ; import android.view.ViewStub ; import android.widget.Button ; import android.widget.CheckBox ; import android.widget.Toast ; import androidx.activity.result.ActivityResultLauncher ; import androidx.activity.result.contract.ActivityResultContracts ; import androidx.annotation.NonNull ; import androidx.annotation.Nullable ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.content.ContextCompat ; import com.example.placesdemo.databinding.AutocompleteAddressActivityBinding ; import com.google.android.gms.location.FusedLocationProviderClient ; import com.google.android.gms.location.LocationServices ; import com.google.android.gms.maps.CameraUpdateFactory ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMapOptions ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.SupportMapFragment ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.MapStyleOptions ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.places.api.Places ; import com.google.android.libraries.places.api.model.AddressComponent ; import com.google.android.libraries.places.api.model.AddressComponents ; import com.google.android.libraries.places.api.model.Place ; import com.google.android.libraries.places.api.model.PlaceTypes ; import com.google.android.libraries.places.api.net.PlacesClient ; import com.google.android.libraries.places.widget.Autocomplete ; import com.google.android.libraries.places.widget.model.AutocompleteActivityMode ; import java.util.Arrays ; import java.util.List ; import static android .
- Adding SupportMapFragment (in this case, adding a fragment dynamically) Getting a handle to the fragment and registering the callback Styling and adding a marker to the map Disabling map controls Adding SupportMapFragment First, add a SupportMapFragment fragment to the layout XML file . <fragment android:name="com.google.android.gms.maps.SupportMapFragment" android:id="@+id/confirmation map" android:layout width="match parent" android:layout height="match parent"/> Then, programmatically add the fragment if it doesn't exist yet. private void showMap(Place place) { coordinates = place.getLocation(); // It isn't possible to set a fragment's id programmatically so we set a tag instead and // search for it using that. mapFragment = (SupportMapFragment) getSupportFragmentManager().findFragmentByTag(MAP FRAGMENT TAG); // We only create a fragment if it doesn't already exist. if (mapFragment == null) { mapPanel = ((ViewStub) findViewById(R.id.stub map)).inflate(); GoogleMapOptions mapOptions = new GoogleMapOptions(); mapOptions.mapToolbarEnabled(false); // To programmatically add the map, we first create a SupportMapFragment. mapFragment = SupportMapFragment.newInstance(mapOptions); // Then we add it using a FragmentTransaction. getSupportFragmentManager() .beginTransaction() .add(R.id.confirmation map, mapFragment, MAP FRAGMENT TAG) .commit(); mapFragment.getMapAsync(this); } else { updateMap(coordinates); } } Getting a handle to the fragment and registering the callback To get a handle to the fragment, call the FragmentManager.findFragmentById method and pass it the resource ID of the fragment in your layout file.
- EdgeToEdge . enable ( this ); super . onCreate ( savedInstanceState ); binding = AutocompleteAddressActivityBinding . inflate ( getLayoutInflater ()); setContentView ( binding . getRoot ()); // Retrieve a PlacesClient ( previously initialized - see MainActivity ) placesClient = Places . createClient ( this ); // Attach an Autocomplete intent to the Address 1 EditText field binding . autocompleteAddress1 . setOnClickListener ( startAutocompleteIntentListener ); // Update checkProximity when user checks the checkbox CheckBox checkProximityBox = findViewById ( R . id . checkbox proximity ); checkProximityBox . setOnCheckedChangeListener (( view , isChecked ) - > { // Set the boolean to match user preference for when the Submit button is clicked checkProximity = isChecked ; }); // Submit and optionally check proximity Button saveButton = findViewById ( R . id . autocomplete save button ); saveButton . setOnClickListener ( v - > saveForm ()); // Reset the form Button resetButton = findViewById ( R . id . autocomplete reset button ); resetButton . setOnClickListener ( v - > clearForm ()); } private void startAutocompleteIntent () { // Set the fields to specify which types of place data to // return after the user has made a selection .

### Autocomplete (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Autocomplete can match on full words and substrings of the input, resolving place names, addresses, and plus codes .
- For example: < ? xml version = "1.0" encoding = "utf-8" ? > < resources > < style name = "BrandedTheme" parent = "PlacesMaterialTheme" > < ! -- Color tokens. -- > < item name = "placesColorOnNeutralContainer" > #5300e8 < / item > < item name = "placesColorOnNeutralContainerVariant" > #ee6002 < / item > ... < ! -- Typography tokens. -- > < item name = "placesTextAppearanceTitleLarge" > @style / PlacesTextAppearance < / item > < item name = "placesTextAppearanceBodyMedium" > @style / PlacesTextAppearance < / item > ... < ! -- Spacing tokens. -- > < item name = "placesSpacingSmall" > 6 dp < / item > < item name = "placesSpacingMedium" > 12 dp < / item > ... < ! -- Attribution tokens. -- > < item name = "placesColorAttributionLightTheme" > white < / item > < item name = "placesColorAttributionDarkTheme" > black < / item > < / style > < / resources > Note: For reference on the theme attributes that you can customize, see the UI Kit Custom styling page.
- Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Sicilian piz") .setRegionCode("ES") .setLocationRestriction(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); Note: For more information on initializing PlacesClient , see Initialize the Places API client .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Autocomplete feature returns place predictions based on a text query.

### Place IDs \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-id](https://developers.google.com/maps/documentation/places/android-sdk/place-id)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- LOCATION ); // Construct a request object, passing the place ID and fields array. final FetchPlaceRequest request = FetchPlaceRequest . newInstance ( placeId , placeFields ); placesClient . fetchPlace ( request ). addOnSuccessListener (( response ) - > { Place place = response . getPlace (); final CharSequence name = place . getDisplayName (); final CharSequence address = place . getFormattedAddress (); final LatLng location = place . getLocation (); binding . placeName . setText ( name ); binding . placeAddress . setText ( address ); if ( location != null ) { binding . placeLocation . setText ( getString ( R . string . place location , location . latitude , location . longitude ) ); } else { binding . placeLocation . setText ( null ); } Log . i ( TAG , "Place found: " + place . getDisplayName ()); }). addOnFailureListener (( exception ) - > { if ( exception instanceof ApiException apiException ) { final String message = getString ( R . string . place not found , apiException . getMessage ()); binding . placeName . setText ( message ); Log . e ( TAG , "Place not found: " + exception . getMessage ()); final int statusCode = apiException . getStatusCode (); // TODO: Handle error with given status code. } }); Save place IDs for later use Place IDs are exempt from the caching restrictions stated in Section 3.2.3(b) of the Google Maps Platform Terms of Service.
- LOCATION ) // Construct a request object, passing the place ID and fields array. val request = FetchPlaceRequest . newInstance ( placeId , placeFields ) placesClient . fetchPlace ( request ) . addOnSuccessListener { response : FetchPlaceResponse - > val place = response . place val name = place . displayName val address = place . formattedAddress val location = place . location binding . placeName . text = name binding . placeAddress . text = address if ( location != null ) { binding . placeLocation . text = getString ( R . string . place location , location . latitude , location . longitude ) } else { binding . placeLocation . text = null } Log . i ( TAG , "Place found: ${ place . displayName } " ) }. addOnFailureListener { exception : Exception - > if ( exception is ApiException ) { val message = getString ( R . string . place not found , exception . message ) binding . placeName . text = message Log . e ( TAG , "Place not found: ${ exception . message } " ) val statusCode = exception . statusCode TODO ( "Handle error with given status code" ) } } Java // Define a Place ID. final String placeId = PlaceIdProvider . getRandomPlaceId (); // Specify the fields to return. final List<Place .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Place IDs are unique text identifiers for locations in Google's database, usable across various Maps APIs.
- Retrieve place details using the place ID A common way of using place IDs is to search for a place (using the Places API or the Places library in the Maps JavaScript API, for example) then use the returned place ID to retrieve place details.

### Place Photos (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-photos](https://developers.google.com/maps/documentation/places/android-sdk/place-photos)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SIZE ORIGINAL ); Glide . with ( this ). load ( uri ). apply ( requestOptions ). into ( imageView ); }). addOnFailureListener (( exception ) -> { if ( exception instanceof ApiException ) { final ApiException apiException = ( ApiException ) exception ; Log . e ( TAG , "Place not found: " + exception . getMessage ()); final int statusCode = apiException . getStatusCode (); // TODO: Handle error with given status code. } }); }); Attributions In most cases, place photos can be used without attribution, or will have the required attribution included as part of the image.
- To retrieve a place photo, you must first fetch a Place object using Place Details (New) with the PHOTO METADATAS field, then use this metadata to request the photo URI via the Places SDK.
- Place Photos requests To retrieve an image for a place: Use Place Details (New) to fetch a Place object using fetchPlace() .
- PHOTO METADATAS ); // Get a Place object final FetchPlaceRequest placeRequest = FetchPlaceRequest . newInstance ( placeId , fields ); placesClient . fetchPlace ( placeRequest ). addOnSuccessListener (( response ) -> { final Place place = response . getPlace (); // Get the photo metadata. final List<PhotoMetadata> metadata = place . getPhotoMetadatas (); if ( metadata == null metadata . isEmpty ()) { Log . w ( TAG , "No photo metadata." ); return ; } final PhotoMetadata photoMetadata = metadata . get ( 0 ); // Get the attribution text and author attributions. final String attributions = photoMetadata . getAttributions (); final AuthorAttributions authorAttributions = photoMetadata . getAuthorAttributions (); // Create a FetchResolvedPhotoUriRequest. final FetchResolvedPhotoUriRequest photoRequest = FetchResolvedPhotoUriRequest . builder ( photoMetadata ) . setMaxWidth ( 500 ) . setMaxHeight ( 300 ) . build (); // Request the photo URI placesClient . fetchResolvedPhotoUri ( photoRequest ). addOnSuccessListener (( fetchResolvedPhotoUriResponse ) -> { Uri uri = fetchResolvedPhotoUriResponse . getUri (); RequestOptions requestOptions = new RequestOptions (). override ( Target .


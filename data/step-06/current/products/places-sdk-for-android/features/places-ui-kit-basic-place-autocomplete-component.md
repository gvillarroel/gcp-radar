---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.784Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Places UI Kit Basic Place Autocomplete component"
feature_slug: "places-ui-kit-basic-place-autocomplete-component"
latest_feature_date: "2025-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit"
  - "https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling"
  - "https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete"
keywords:
  - "places"
  - "ui"
  - "kit"
  - "basic"
  - "place"
  - "autocomplete"
  - "component"
  - "this"
---

# Places UI Kit Basic Place Autocomplete component

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

This component lets developers customize a full-screen search bar that shows autocomplete results as the user types.

## Extended Definition

This component lets developers customize a full-screen search bar that shows autocomplete results as the user types.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit)
- [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling)
- [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)

## Supporting Pages

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the Basic Autocomplete component to your app Set the autocomplete filter parameters (for example, the types to return, the country to limit results to, the region coordinates for results, the origin of the request to display distance information, if available) as you would to use Place Autocomplete (New) without the Places UI Kit.
- CustomizedTheme ) . build ()) . build ( this ); basicPlaceAutocompleteActivityResultLauncher . launch ( basicPlaceAutocompleteIntent ); Customize the theme The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- Select platform: Android iOS JavaScript Basic Place Autocomplete component The Basic Place Autocomplete component of the Places UI Kit lets you add an individual UI component that returns a place ID when a user selects a place.
- StartActivityForResult ()) { result : ActivityResult - > val intent = result . data val place : Place? = BasicPlaceAutocomplete . getPlaceFromIntent ( intent !! ) val status : Status? = BasicPlaceAutocomplete . getResultStatusFromIntent ( intent !! ) // ... } val autocompleteIntent : Intent = BasicPlaceAutocomplete . createIntent ( this ) { setInitialQuery ( "INSERT QUERY TEXT" ) setOrigin ( LatLng ( 10.0 , 10.0 )) // ... setAutocompleteUiCustomization ( AutocompleteUiCustomization . create ( listDensity = AutocompleteListDensity .

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Customizeable style properties Visual customization examples You can customize the colors, typography, spacing, borders, and corners of these Places UI kit components and non-UI kit features: Place Details component Place Search component Basic Place Autocomplete component Non-UI Kit Place Autocomplete widget Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications).
- To create a dark theme, add an entry for the colors in values-night/colors.xml Customization tool Use this tool to visualize custom configurations in a Places UI Kit element.
- Any theme attributes that are not overridden use the default styles. < style name = "CustomizedPlaceDetailsTheme" parent = "PlacesMaterialTheme" > < item name = "placesColorPrimary" > @color / app primary color < / item > < item name = "placesColorOnSurface" > @color / app color on surface < / item > < item name = "placesColorOnSurfaceVariant" > @color / app color on surface < / item > < item name = "placesTextAppearanceBodySmall" > @style / app text appearence small < / item > < item name = "placesCornerRadius" > 20 dp < / item > < / style > Important: The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- Use the Customization tool to visualize custom configurations in a Places UI Kit element.

### "Add Place Autocomplete to an address form \_|\_ Places SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Error: " , e ); } map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( coordinates , 15 f )); marker = map . addMarker ( new MarkerOptions () . position ( coordinates )); } private void fillInAddress ( Place place ) { AddressComponents components = place . getAddressComponents (); StringBuilder address1 = new StringBuilder (); StringBuilder postcode = new StringBuilder (); // Get each component of the address from the place details , // and then fill - in the corresponding field on the form . // Possible AddressComponent types are documented at https : // goo . gle / 32 SJPM1 if ( components != null ) { for ( AddressComponent component : components . asList ()) { String type = component . getTypes () . get ( 0 ); switch ( type ) { case "street number" : { address1 . insert ( 0 , component . getName ()); break ; } case "route" : { address1 . append ( " " ); address1 . append ( component . getShortName ()); break ; } case "postal code" : { postcode . insert ( 0 , component . getName ()); break ; } case "postal code suffix" : { postcode . append ( "-" ) . append ( component . getName ()); break ; } case "locality" : binding . autocompleteCity . setText ( component . getName ()); break ; case "administrative area level 1" : { binding . autocompleteState . setText ( component . getShortName ()); break ; } case "country" : binding . autocompleteCountry . setText ( component . getName ()); break ; } } } binding . autocompleteAddress1 . setText ( address1 . toString ()); binding . autocompletePostal . setText ( postcode . toString ()); // After filling the form with address components from the Autocomplete // prediction , set cursor focus on the second address line to encourage // entry of sub - premise information such as apartment , unit , or floor number . binding . autocompleteAddress2 . requestFocus (); // Add a map for visual confirmation of the address showMap ( place ); } private void showMap ( Place place ) { coordinates = place . getLocation (); // It isn 't possible to set a fragment' s id programmatically so we set a tag instead and // search for it using that . mapFragment = ( SupportMapFragment ) getSupportFragmentManager () . findFragmentByTag ( MAP FRAGMENT TAG ); // We only create a fragment if it doesn 't already exist. if ( mapFragment == null ) { mapPanel = (( ViewStub ) findViewById ( R . id . stub map )) . inflate (); GoogleMapOptions mapOptions = new GoogleMapOptions (); mapOptions . mapToolbarEnabled ( false ); // To programmatically add the map , we first create a SupportMapFragment . mapFragment = SupportMapFragment . newInstance ( mapOptions ); // Then we add it using a FragmentTransaction . getSupportFragmentManager () . beginTransaction () . add ( R . id . confirmation map , mapFragment , MAP FRAGMENT TAG ) . commit (); mapFragment . getMapAsync ( this ); } else { updateMap ( coordinates ); } } private void updateMap ( LatLng latLng ) { marker . setPosition ( latLng ); map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( latLng , 15 f )); if ( mapPanel . getVisibility () == View .
- See the License for the specific language governing permissions and limitations under the License . / package com . example . placesdemo ; import android.annotation.SuppressLint ; import android.app.Activity ; import android.content.Intent ; import android.content.pm.PackageManager ; import android.content.res.Resources ; import android.os.Bundle ; import android.util.Log ; import android.view.View ; import android.view.ViewStub ; import android.widget.Button ; import android.widget.CheckBox ; import android.widget.Toast ; import androidx.activity.result.ActivityResultLauncher ; import androidx.activity.result.contract.ActivityResultContracts ; import androidx.annotation.NonNull ; import androidx.annotation.Nullable ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.content.ContextCompat ; import com.example.placesdemo.databinding.AutocompleteAddressActivityBinding ; import com.google.android.gms.location.FusedLocationProviderClient ; import com.google.android.gms.location.LocationServices ; import com.google.android.gms.maps.CameraUpdateFactory ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMapOptions ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.SupportMapFragment ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.MapStyleOptions ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.places.api.Places ; import com.google.android.libraries.places.api.model.AddressComponent ; import com.google.android.libraries.places.api.model.AddressComponents ; import com.google.android.libraries.places.api.model.Place ; import com.google.android.libraries.places.api.model.PlaceTypes ; import com.google.android.libraries.places.api.net.PlacesClient ; import com.google.android.libraries.places.widget.Autocomplete ; import com.google.android.libraries.places.widget.model.AutocompleteActivityMode ; import java.util.Arrays ; import java.util.List ; import static android .
- EdgeToEdge . enable ( this ); super . onCreate ( savedInstanceState ); binding = AutocompleteAddressActivityBinding . inflate ( getLayoutInflater ()); setContentView ( binding . getRoot ()); // Retrieve a PlacesClient ( previously initialized - see MainActivity ) placesClient = Places . createClient ( this ); // Attach an Autocomplete intent to the Address 1 EditText field binding . autocompleteAddress1 . setOnClickListener ( startAutocompleteIntentListener ); // Update checkProximity when user checks the checkbox CheckBox checkProximityBox = findViewById ( R . id . checkbox proximity ); checkProximityBox . setOnCheckedChangeListener (( view , isChecked ) - > { // Set the boolean to match user preference for when the Submit button is clicked checkProximity = isChecked ; }); // Submit and optionally check proximity Button saveButton = findViewById ( R . id . autocomplete save button ); saveButton . setOnClickListener ( v - > saveForm ()); // Reset the form Button resetButton = findViewById ( R . id . autocomplete reset button ); resetButton . setOnClickListener ( v - > clearForm ()); } private void startAutocompleteIntent () { // Set the fields to specify which types of place data to // return after the user has made a selection .
- In some rare situations this can be null . if ( location == null ) { return ; } deviceLocation = new LatLng ( location . getLatitude (), location . getLongitude ()); Log . d ( TAG , "device location = " + deviceLocation ); Log . d ( TAG , "entered location = " + enteredLocation . toString ()); // Use the computeDistanceBetween function in the Maps SDK for Android Utility Library // to use spherical geometry to compute the distance between two Lat / Lng points . double distanceInMeters = computeDistanceBetween ( deviceLocation , enteredLocation ); if ( distanceInMeters < = acceptedProximity ) { Log . d ( TAG , "location matched" ); // TODO : Display UI based on the locations matching } else { Log . d ( TAG , "location not matched" ); // TODO : Display UI based on the locations not matching } }); } } Enabling APIs To implement these recommendations, you must enable the following APIs in the Google Cloud console: Maps SDK for Android (or the API for your platform of choice) Places API For more information about setup, see Set up your Google Cloud project .

### Autocomplete (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example sets the origin to the center of San Francisco: Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Amoeba") .setOrigin(center) .setLocationRestriction(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); Autocomplete (New) optimization This section describes best practices to help you make the most of the Autocomplete (New) service.
- RESULT OK ) { // get prediction object AutocompletePrediction prediction = PlaceAutocomplete . getPredictionFromIntent ( Preconditions . checkNotNull ( intent )); // get session token AutocompleteSessionToken sessionToken = PlaceAutocomplete . getSessionTokenFromIntent ( Preconditions . checkNotNull ( intent )); // create PlacesClient to make FetchPlace request (optional) PlacesClient placesClient = Places . createClient ( this ); FetchPlaceRequest request = FetchPlaceRequest . builder ( prediction . getPlaceId (), Arrays . asList ( Field .
- BrandedTheme ) . build ()) . build ( this ); placeAutocompleteActivityResultLauncher . launch ( placeAutocompleteIntent ); Get place predictions programmatically Your app can get a list of predicted place names and/or addresses from the autocomplete API by calling PlacesClient.findAutocompletePredictions() , passing a FindAutocompletePredictionsRequest object.
- The following example specifies a query string of "Soccer" and uses the primary types parameter to restrict results to establishments of type "sporting goods store" : Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); final List<Place.Field> primaryTypes = Arrays.asList("sporting goods store"); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Soccer") .setIncludedPrimaryTypes(primaryTypes) .setLocationBias(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); If you omit the primary types parameter, the results can include establishments of a type that you may not want, such as "athletic field" .


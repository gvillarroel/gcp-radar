---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.794Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Places Autocomplete country filtering"
feature_slug: "places-autocomplete-country-filtering"
latest_feature_date: "2023-04-13"
deprecation_date: "2023-04-13"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken"
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompletePrediction"
keywords:
  - "places"
  - "autocomplete"
  - "country"
  - "filtering"
  - "can"
  - "restrict"
  - "predictions"
  - "to"
---

# Places Autocomplete country filtering

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Places Autocomplete can restrict predictions to one or more countries; deprecated on 2023-04-13.

## Extended Definition

Places Autocomplete can restrict predictions to one or more countries; deprecated on 2023-04-13.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken)
- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompletePrediction](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompletePrediction)

## Supporting Pages

### "Add Place Autocomplete to an address form \_|\_ Places SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SphericalUtil . computeDistanceBetween ; import androidx.activity.EdgeToEdge ; / Activity for using Place Autocomplete to assist filling out an address form . / @SuppressWarnings ( "FieldCanBeLocal" ) public class AutocompleteAddressActivity extends AppCompatActivity implements OnMapReadyCallback { private static final String TAG = "ADDRESS AUTOCOMPLETE" ; private static final String MAP FRAGMENT TAG = "MAP" ; private LatLng coordinates ; private boolean checkProximity = false ; private SupportMapFragment mapFragment ; private GoogleMap map ; private Marker marker ; private PlacesClient placesClient ; private View mapPanel ; private LatLng deviceLocation ; private static final double acceptedProximity = 150 ; private AutocompleteAddressActivityBinding binding ; View .
- Error: " , e ); } map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( coordinates , 15 f )); marker = map . addMarker ( new MarkerOptions () . position ( coordinates )); } private void fillInAddress ( Place place ) { AddressComponents components = place . getAddressComponents (); StringBuilder address1 = new StringBuilder (); StringBuilder postcode = new StringBuilder (); // Get each component of the address from the place details , // and then fill - in the corresponding field on the form . // Possible AddressComponent types are documented at https : // goo . gle / 32 SJPM1 if ( components != null ) { for ( AddressComponent component : components . asList ()) { String type = component . getTypes () . get ( 0 ); switch ( type ) { case "street number" : { address1 . insert ( 0 , component . getName ()); break ; } case "route" : { address1 . append ( " " ); address1 . append ( component . getShortName ()); break ; } case "postal code" : { postcode . insert ( 0 , component . getName ()); break ; } case "postal code suffix" : { postcode . append ( "-" ) . append ( component . getName ()); break ; } case "locality" : binding . autocompleteCity . setText ( component . getName ()); break ; case "administrative area level 1" : { binding . autocompleteState . setText ( component . getShortName ()); break ; } case "country" : binding . autocompleteCountry . setText ( component . getName ()); break ; } } } binding . autocompleteAddress1 . setText ( address1 . toString ()); binding . autocompletePostal . setText ( postcode . toString ()); // After filling the form with address components from the Autocomplete // prediction , set cursor focus on the second address line to encourage // entry of sub - premise information such as apartment , unit , or floor number . binding . autocompleteAddress2 . requestFocus (); // Add a map for visual confirmation of the address showMap ( place ); } private void showMap ( Place place ) { coordinates = place . getLocation (); // It isn 't possible to set a fragment' s id programmatically so we set a tag instead and // search for it using that . mapFragment = ( SupportMapFragment ) getSupportFragmentManager () . findFragmentByTag ( MAP FRAGMENT TAG ); // We only create a fragment if it doesn 't already exist. if ( mapFragment == null ) { mapPanel = (( ViewStub ) findViewById ( R . id . stub map )) . inflate (); GoogleMapOptions mapOptions = new GoogleMapOptions (); mapOptions . mapToolbarEnabled ( false ); // To programmatically add the map , we first create a SupportMapFragment . mapFragment = SupportMapFragment . newInstance ( mapOptions ); // Then we add it using a FragmentTransaction . getSupportFragmentManager () . beginTransaction () . add ( R . id . confirmation map , mapFragment , MAP FRAGMENT TAG ) . commit (); mapFragment . getMapAsync ( this ); } else { updateMap ( coordinates ); } } private void updateMap ( LatLng latLng ) { marker . setPosition ( latLng ); map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( latLng , 15 f )); if ( mapPanel . getVisibility () == View .
- See the License for the specific language governing permissions and limitations under the License . / package com . example . placesdemo ; import android.annotation.SuppressLint ; import android.app.Activity ; import android.content.Intent ; import android.content.pm.PackageManager ; import android.content.res.Resources ; import android.os.Bundle ; import android.util.Log ; import android.view.View ; import android.view.ViewStub ; import android.widget.Button ; import android.widget.CheckBox ; import android.widget.Toast ; import androidx.activity.result.ActivityResultLauncher ; import androidx.activity.result.contract.ActivityResultContracts ; import androidx.annotation.NonNull ; import androidx.annotation.Nullable ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.content.ContextCompat ; import com.example.placesdemo.databinding.AutocompleteAddressActivityBinding ; import com.google.android.gms.location.FusedLocationProviderClient ; import com.google.android.gms.location.LocationServices ; import com.google.android.gms.maps.CameraUpdateFactory ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMapOptions ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.SupportMapFragment ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.MapStyleOptions ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.places.api.Places ; import com.google.android.libraries.places.api.model.AddressComponent ; import com.google.android.libraries.places.api.model.AddressComponents ; import com.google.android.libraries.places.api.model.Place ; import com.google.android.libraries.places.api.model.PlaceTypes ; import com.google.android.libraries.places.api.net.PlacesClient ; import com.google.android.libraries.places.widget.Autocomplete ; import com.google.android.libraries.places.widget.model.AutocompleteActivityMode ; import java.util.Arrays ; import java.util.List ; import static android .
- EdgeToEdge . enable ( this ); super . onCreate ( savedInstanceState ); binding = AutocompleteAddressActivityBinding . inflate ( getLayoutInflater ()); setContentView ( binding . getRoot ()); // Retrieve a PlacesClient ( previously initialized - see MainActivity ) placesClient = Places . createClient ( this ); // Attach an Autocomplete intent to the Address 1 EditText field binding . autocompleteAddress1 . setOnClickListener ( startAutocompleteIntentListener ); // Update checkProximity when user checks the checkbox CheckBox checkProximityBox = findViewById ( R . id . checkbox proximity ); checkProximityBox . setOnCheckedChangeListener (( view , isChecked ) - > { // Set the boolean to match user preference for when the Submit button is clicked checkProximity = isChecked ; }); // Submit and optionally check proximity Button saveButton = findViewById ( R . id . autocomplete save button ); saveButton . setOnClickListener ( v - > saveForm ()); // Reset the form Button resetButton = findViewById ( R . id . autocomplete reset button ); resetButton . setOnClickListener ( v - > clearForm ()); } private void startAutocompleteIntent () { // Set the fields to specify which types of place data to // return after the user has made a selection .

### Autocomplete (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example specifies a query string of "Soccer" and uses the primary types parameter to restrict results to establishments of type "sporting goods store" : Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); final List<Place.Field> primaryTypes = Arrays.asList("sporting goods store"); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Soccer") .setIncludedPrimaryTypes(primaryTypes) .setLocationBias(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); If you omit the primary types parameter, the results can include establishments of a type that you may not want, such as "athletic field" .
- The following example uses location restriction to limit the request to a circular location restriction with a 5000-meter radius centered on San Francisco: Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Amoeba") .setLocationRestriction(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); With location bias, the location serves as a bias which means results around the specified location can be returned, including results outside the specified area.
- This example sets the origin to the center of San Francisco: Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Amoeba") .setOrigin(center) .setLocationRestriction(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); Autocomplete (New) optimization This section describes best practices to help you make the most of the Autocomplete (New) service.
- The next example changes the previous request to use location bias: Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Amoeba") .setLocationBias(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); Use primary types Use the primary types parameter to restrict results from a request to be of a certain type as listed in Table A and Table B .

### AutocompleteSessionToken \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multiple instances of com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest can be created using the same session token.
- This token can be used for multiple FindAutocompletePredictionsRequest instances.
- Once that is done, the token can then be used in a subsequent com.google.android.libraries.places.api.net.FetchPlaceRequest to conclude the session.
- Summary Public constructors AutocompleteSessionToken () Public methods static AutocompleteSessionToken newInstance () final String toString () Inherited Constants From android.os.Parcelable static final int CONTENTS FILE DESCRIPTOR = 1 static final int PARCELABLE STABILITY LOCAL = 0 static final int PARCELABLE STABILITY VINTF = 1 static final int PARCELABLE WRITE RETURN VALUE = 1 Inherited methods From android.os.Parcelable abstract int describeContents () int getStability () abstract void writeToParcel ( Parcel p, int p1) Public constructors AutocompleteSessionToken public AutocompleteSessionToken () Public methods newInstance public static AutocompleteSessionToken newInstance () toString public final String toString () Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### AutocompletePrediction \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompletePrediction](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompletePrediction)
- Source ID: `site-docs-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This provides extra context on the place, and can be used as a second line when showing autocomplete predictions.
- Inherited Constants From android.os.Parcelable static final int CONTENTS FILE DESCRIPTOR = 1 static final int PARCELABLE STABILITY LOCAL = 0 static final int PARCELABLE STABILITY VINTF = 1 static final int PARCELABLE WRITE RETURN VALUE = 1 Inherited methods From android.os.Parcelable abstract int describeContents () int getStability () abstract void writeToParcel ( Parcel p, int p1) Public constructors AutocompletePrediction public AutocompletePrediction () Public methods builder public static AutocompletePrediction.Builder builder ( String placeId) Returns a Builder .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["AutocompletePrediction represents a place suggestion based on a text query.
- Public constructors AutocompletePrediction () Public methods static AutocompletePrediction.Builder builder ( String placeId) Returns a Builder . abstract @ Nullable Integer getDistanceMeters () Returns the straight-line distance between the place being referred to by getPlaceId and the origin specified in the request.


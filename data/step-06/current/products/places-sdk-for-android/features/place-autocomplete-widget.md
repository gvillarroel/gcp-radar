---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.785Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Place Autocomplete widget"
feature_slug: "place-autocomplete-widget"
latest_feature_date: "2025-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial"
  - "https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken"
  - "https://developers.google.com/maps/documentation/places/android-sdk/overview"
keywords:
  - "place"
  - "autocomplete"
  - "widget"
  - "the"
  - "provides"
  - "predictions"
  - "for"
  - "new"
---

# Place Autocomplete widget

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The Place Autocomplete widget provides autocomplete place predictions for Autocomplete (New).

## Extended Definition

The Place Autocomplete widget provides autocomplete place predictions for Autocomplete (New).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken)
- [https://developers.google.com/maps/documentation/places/android-sdk/overview](https://developers.google.com/maps/documentation/places/android-sdk/overview)

## Supporting Pages

### Autocomplete (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 323
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can integrate Autocomplete (New) functionality into your app in two main ways: Add the Place Autocomplete widget : Provides a ready-to-use search autocomplete experience through the PlaceAutocomplete class that displays predictions as the user types.
- Page Summary outlined flag Autocomplete (New) provides on-the-fly place predictions based on user input, using text search and geographic bounds for refined results.
- Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Sicilian piz") .setRegionCode("ES") .setLocationRestriction(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); Note: For more information on initializing PlacesClient , see Initialize the Places API client .
- Here are some general guidelines: The quickest way to develop a working user interface is to use the Maps JavaScript API Autocomplete (New) widget , Places SDK for Android Autocomplete (New) widget , or Places SDK for iOS Autocomplete (New) widget .

### "Add Place Autocomplete to an address form \_|\_ Places SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The result callback will contain a Place object corresponding to the address that the user selects from Autocomplete predictions. private final ActivityResultLauncher<Intent> startAutocomplete = registerForActivityResult ( new ActivityResultContracts .
- Error: " , e ); } map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( coordinates , 15 f )); marker = map . addMarker ( new MarkerOptions () . position ( coordinates )); } private void fillInAddress ( Place place ) { AddressComponents components = place . getAddressComponents (); StringBuilder address1 = new StringBuilder (); StringBuilder postcode = new StringBuilder (); // Get each component of the address from the place details , // and then fill - in the corresponding field on the form . // Possible AddressComponent types are documented at https : // goo . gle / 32 SJPM1 if ( components != null ) { for ( AddressComponent component : components . asList ()) { String type = component . getTypes () . get ( 0 ); switch ( type ) { case "street number" : { address1 . insert ( 0 , component . getName ()); break ; } case "route" : { address1 . append ( " " ); address1 . append ( component . getShortName ()); break ; } case "postal code" : { postcode . insert ( 0 , component . getName ()); break ; } case "postal code suffix" : { postcode . append ( "-" ) . append ( component . getName ()); break ; } case "locality" : binding . autocompleteCity . setText ( component . getName ()); break ; case "administrative area level 1" : { binding . autocompleteState . setText ( component . getShortName ()); break ; } case "country" : binding . autocompleteCountry . setText ( component . getName ()); break ; } } } binding . autocompleteAddress1 . setText ( address1 . toString ()); binding . autocompletePostal . setText ( postcode . toString ()); // After filling the form with address components from the Autocomplete // prediction , set cursor focus on the second address line to encourage // entry of sub - premise information such as apartment , unit , or floor number . binding . autocompleteAddress2 . requestFocus (); // Add a map for visual confirmation of the address showMap ( place ); } private void showMap ( Place place ) { coordinates = place . getLocation (); // It isn 't possible to set a fragment' s id programmatically so we set a tag instead and // search for it using that . mapFragment = ( SupportMapFragment ) getSupportFragmentManager () . findFragmentByTag ( MAP FRAGMENT TAG ); // We only create a fragment if it doesn 't already exist. if ( mapFragment == null ) { mapPanel = (( ViewStub ) findViewById ( R . id . stub map )) . inflate (); GoogleMapOptions mapOptions = new GoogleMapOptions (); mapOptions . mapToolbarEnabled ( false ); // To programmatically add the map , we first create a SupportMapFragment . mapFragment = SupportMapFragment . newInstance ( mapOptions ); // Then we add it using a FragmentTransaction . getSupportFragmentManager () . beginTransaction () . add ( R . id . confirmation map , mapFragment , MAP FRAGMENT TAG ) . commit (); mapFragment . getMapAsync ( this ); } else { updateMap ( coordinates ); } } private void updateMap ( LatLng latLng ) { marker . setPosition ( latLng ); map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( latLng , 15 f )); if ( mapPanel . getVisibility () == View .
- See the License for the specific language governing permissions and limitations under the License . / package com . example . placesdemo ; import android.annotation.SuppressLint ; import android.app.Activity ; import android.content.Intent ; import android.content.pm.PackageManager ; import android.content.res.Resources ; import android.os.Bundle ; import android.util.Log ; import android.view.View ; import android.view.ViewStub ; import android.widget.Button ; import android.widget.CheckBox ; import android.widget.Toast ; import androidx.activity.result.ActivityResultLauncher ; import androidx.activity.result.contract.ActivityResultContracts ; import androidx.annotation.NonNull ; import androidx.annotation.Nullable ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.content.ContextCompat ; import com.example.placesdemo.databinding.AutocompleteAddressActivityBinding ; import com.google.android.gms.location.FusedLocationProviderClient ; import com.google.android.gms.location.LocationServices ; import com.google.android.gms.maps.CameraUpdateFactory ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMapOptions ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.SupportMapFragment ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.MapStyleOptions ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.places.api.Places ; import com.google.android.libraries.places.api.model.AddressComponent ; import com.google.android.libraries.places.api.model.AddressComponents ; import com.google.android.libraries.places.api.model.Place ; import com.google.android.libraries.places.api.model.PlaceTypes ; import com.google.android.libraries.places.api.net.PlacesClient ; import com.google.android.libraries.places.widget.Autocomplete ; import com.google.android.libraries.places.widget.model.AutocompleteActivityMode ; import java.util.Arrays ; import java.util.List ; import static android .
- Since the intent was built by Autocomplete.IntentBuilder , the method Autocomplete.getPlaceFromIntent() can extract the Place object from it. private final ActivityResultLauncher<Intent> startAutocomplete = registerForActivityResult ( new ActivityResultContracts .

### AutocompleteSessionToken \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken](https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/model/AutocompleteSessionToken)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multiple instances of com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest can be created using the same session token.
- Summary Public constructors AutocompleteSessionToken () Public methods static AutocompleteSessionToken newInstance () final String toString () Inherited Constants From android.os.Parcelable static final int CONTENTS FILE DESCRIPTOR = 1 static final int PARCELABLE STABILITY LOCAL = 0 static final int PARCELABLE STABILITY VINTF = 1 static final int PARCELABLE WRITE RETURN VALUE = 1 Inherited methods From android.os.Parcelable abstract int describeContents () int getStability () abstract void writeToParcel ( Parcel p, int p1) Public constructors AutocompleteSessionToken public AutocompleteSessionToken () Public methods newInstance public static AutocompleteSessionToken newInstance () toString public final String toString () Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],["AutocompleteSessionToken identifies an Autocomplete session for billing.
- This token can be used for multiple FindAutocompletePredictionsRequest instances.

### Overview \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/overview](https://developers.google.com/maps/documentation/places/android-sdk/overview)
- Source ID: `site-docs-reference`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Autocomplete provides pre-made widgets to return place predictions in response to user search queries.
- Concepts The following interfaces provide the primary entry points to the Places SDK for Android: Places provides programmatic access to Google's database of local place and business information, as well as the device's current place.
- You can choose between the Places SDK for Android and the Places SDK for Android (New), each with its own features and pricing model.
- Note: Places SDK (New) is the current version of Places SDK for Android.


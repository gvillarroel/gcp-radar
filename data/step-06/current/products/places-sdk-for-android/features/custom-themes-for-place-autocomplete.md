---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.780Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Custom themes for Place Autocomplete"
feature_slug: "custom-themes-for-place-autocomplete"
latest_feature_date: "2025-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial"
  - "https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling"
  - "https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit"
keywords:
  - "custom"
  - "themes"
  - "for"
  - "place"
  - "autocomplete"
  - "can"
  - "now"
  - "be"
---

# Custom themes for Place Autocomplete

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

Custom themes can now be used to style both the Autocomplete (New) widget and the UI Kit Basic Place Autocomplete component.

## Extended Definition

Custom themes can now be used to style both the Autocomplete (New) widget and the UI Kit Basic Place Autocomplete component.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling)
- [https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit)

## Supporting Pages

### Autocomplete (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/android-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can then reference the override styles by calling setAutocompleteUiCustomization : ActivityResultLauncher<Intent> placeAutocompleteActivityResultLauncher = registerForActivityResult ( new ActivityResultContracts .
- The following example uses location restriction to limit the request to a circular location restriction with a 5000-meter radius centered on San Francisco: Places.initializeWithNewPlacesApiEnabled(context, apiKey); final List<Field> placeFields = getPlaceFields(); LatLng center = new LatLng(37.7749, -122.4194); CircularBounds circle = CircularBounds.newInstance(center, / radius = / 5000); final FindAutocompletePredictionsRequest autocompletePlacesRequest = FindAutocompletePredictionsRequest.builder() .setQuery("Amoeba") .setLocationRestriction(circle) .build()); placesClient.findAutocompletePredictions(autoCompletePlacesRequest) .addOnSuccessListener( (response) -> { List<AutocompletePrediction> predictions = response.getResult().getAutocompletePredictions(); } ).addOnFailureListener( exception -> { Log.e(TAG, "some exception happened" + exception.getMessage()); }) ); With location bias, the location serves as a bias which means results around the specified location can be returned, including results outside the specified area.
- For example: < ? xml version = "1.0" encoding = "utf-8" ? > < resources > < style name = "BrandedTheme" parent = "PlacesMaterialTheme" > < ! -- Color tokens. -- > < item name = "placesColorOnNeutralContainer" > #5300e8 < / item > < item name = "placesColorOnNeutralContainerVariant" > #ee6002 < / item > ... < ! -- Typography tokens. -- > < item name = "placesTextAppearanceTitleLarge" > @style / PlacesTextAppearance < / item > < item name = "placesTextAppearanceBodyMedium" > @style / PlacesTextAppearance < / item > ... < ! -- Spacing tokens. -- > < item name = "placesSpacingSmall" > 6 dp < / item > < item name = "placesSpacingMedium" > 12 dp < / item > ... < ! -- Attribution tokens. -- > < item name = "placesColorAttributionLightTheme" > white < / item > < item name = "placesColorAttributionDarkTheme" > black < / item > < / style > < / resources > Note: For reference on the theme attributes that you can customize, see the UI Kit Custom styling page.
- When requesting Place Details (New) about the selected prediction, include the following parameters: The place ID from the Autocomplete (New) response The session token used in the Autocomplete (New) request The fields parameter specifying the Autocomplete (New) data fields you need No, needs only address and location Geocoding API could be a more cost-effective option than Place Details (New) for your application, depending on the performance of your Autocomplete (New) usage.

### "Add Place Autocomplete to an address form \_|\_ Places SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial](https://developers.google.com/maps/documentation/places/android-sdk/autocomplete-tutorial)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SphericalUtil . computeDistanceBetween ; import androidx.activity.EdgeToEdge ; / Activity for using Place Autocomplete to assist filling out an address form . / @SuppressWarnings ( "FieldCanBeLocal" ) public class AutocompleteAddressActivity extends AppCompatActivity implements OnMapReadyCallback { private static final String TAG = "ADDRESS AUTOCOMPLETE" ; private static final String MAP FRAGMENT TAG = "MAP" ; private LatLng coordinates ; private boolean checkProximity = false ; private SupportMapFragment mapFragment ; private GoogleMap map ; private Marker marker ; private PlacesClient placesClient ; private View mapPanel ; private LatLng deviceLocation ; private static final double acceptedProximity = 150 ; private AutocompleteAddressActivityBinding binding ; View .
- Since most addresses returned by Place Autocomplete do not contain subpremise numbers such as apartment, suite, or unit numbers, you can move the focus to Address Line 2 to encourage the user to fill in that information if necessary.
- Error: " , e ); } map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( coordinates , 15 f )); marker = map . addMarker ( new MarkerOptions () . position ( coordinates )); } private void fillInAddress ( Place place ) { AddressComponents components = place . getAddressComponents (); StringBuilder address1 = new StringBuilder (); StringBuilder postcode = new StringBuilder (); // Get each component of the address from the place details , // and then fill - in the corresponding field on the form . // Possible AddressComponent types are documented at https : // goo . gle / 32 SJPM1 if ( components != null ) { for ( AddressComponent component : components . asList ()) { String type = component . getTypes () . get ( 0 ); switch ( type ) { case "street number" : { address1 . insert ( 0 , component . getName ()); break ; } case "route" : { address1 . append ( " " ); address1 . append ( component . getShortName ()); break ; } case "postal code" : { postcode . insert ( 0 , component . getName ()); break ; } case "postal code suffix" : { postcode . append ( "-" ) . append ( component . getName ()); break ; } case "locality" : binding . autocompleteCity . setText ( component . getName ()); break ; case "administrative area level 1" : { binding . autocompleteState . setText ( component . getShortName ()); break ; } case "country" : binding . autocompleteCountry . setText ( component . getName ()); break ; } } } binding . autocompleteAddress1 . setText ( address1 . toString ()); binding . autocompletePostal . setText ( postcode . toString ()); // After filling the form with address components from the Autocomplete // prediction , set cursor focus on the second address line to encourage // entry of sub - premise information such as apartment , unit , or floor number . binding . autocompleteAddress2 . requestFocus (); // Add a map for visual confirmation of the address showMap ( place ); } private void showMap ( Place place ) { coordinates = place . getLocation (); // It isn 't possible to set a fragment' s id programmatically so we set a tag instead and // search for it using that . mapFragment = ( SupportMapFragment ) getSupportFragmentManager () . findFragmentByTag ( MAP FRAGMENT TAG ); // We only create a fragment if it doesn 't already exist. if ( mapFragment == null ) { mapPanel = (( ViewStub ) findViewById ( R . id . stub map )) . inflate (); GoogleMapOptions mapOptions = new GoogleMapOptions (); mapOptions . mapToolbarEnabled ( false ); // To programmatically add the map , we first create a SupportMapFragment . mapFragment = SupportMapFragment . newInstance ( mapOptions ); // Then we add it using a FragmentTransaction . getSupportFragmentManager () . beginTransaction () . add ( R . id . confirmation map , mapFragment , MAP FRAGMENT TAG ) . commit (); mapFragment . getMapAsync ( this ); } else { updateMap ( coordinates ); } } private void updateMap ( LatLng latLng ) { marker . setPosition ( latLng ); map . moveCamera ( CameraUpdateFactory . newLatLngZoom ( latLng , 15 f )); if ( mapPanel . getVisibility () == View .
- In some rare situations this can be null . if ( location == null ) { return ; } deviceLocation = new LatLng ( location . getLatitude (), location . getLongitude ()); Log . d ( TAG , "device location = " + deviceLocation ); Log . d ( TAG , "entered location = " + enteredLocation . toString ()); // Use the computeDistanceBetween function in the Maps SDK for Android Utility Library // to use spherical geometry to compute the distance between two Lat / Lng points . double distanceInMeters = computeDistanceBetween ( deviceLocation , enteredLocation ); if ( distanceInMeters < = acceptedProximity ) { Log . d ( TAG , "location matched" ); // TODO : Display UI based on the locations matching } else { Log . d ( TAG , "location not matched" ); // TODO : Display UI based on the locations not matching } }); } } Enabling APIs To implement these recommendations, you must enable the following APIs in the Google Cloud console: Maps SDK for Android (or the API for your platform of choice) Places API For more information about setup, see Set up your Google Cloud project .

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Style properties You can customize the following styles: Theme attribute Usage Color placesColorSurface Container and dialog background placesColorOutlineDecorative Container border placesColorPrimary Links, loading indicator, overview icons placesColorOnSurface Headings, dialog content placesColorOnSurfaceVariant Place information placesColorSecondaryContainer Button background placesColorOnSecondaryContainer Button text and icon placesColorNeutralContainer Review date badge, loading placeholder shapes placesColorOnNeutralContainer Review date, loading error placesColorPositiveContainer Available EV charger badge placesColorOnPositiveContainer Available EV charger badge content placesColorPositive Place "Open" now label placesColorNegative Place "Closed" now label placesColorInfo Accessible entrance icon placesColorButtonBorder Open in maps and OK buttons Typography placesTextAppearanceBodySmall Place information placesTextAppearanceBodyMedium Place information, dialog content placesTextAppearanceLabelMedium Badge content placesTextAppearanceLabelLarge Button content placesTextAppearanceHeadlineMedium Dialog headings placesTextAppearanceDisplaySmall Place name placesTextAppearanceTitleSmall Place name Spacing placesSpacingExtraSmall placesSpacingSmall placesSpacingMedium placesSpacingLarge placesSpacingExtraLarge placesSpacingTwoExtraLarge Measurement placesBorderWidth Container placesBorderWidthButton Shape placesCornerRadius Container placesCornerRadiusButton Open in Maps and OK buttons (excludes round icon button) placesCornerRadiusThumbnail Place thumbnail image placesCornerRadiusCollageOuter Media collage placesCornerRadiusCard Place card, User review card placesCornerRadiusDialog Google Maps disclosure dialog Google Maps Brand Attribution placesColorAttributionLightTheme Light theme Google Maps attribution and disclosure button (enums for white, gray, and black) placesColorAttributionDarkTheme Dark theme Google Maps attribution and disclosure button (enums for white, gray, and black) Attribution colors Attribution Google Maps' terms of service require you to use one of three brand colors for the Google Maps attribution.
- Select platform: Android iOS JavaScript Customizeable style properties Visual customization examples You can customize the colors, typography, spacing, borders, and corners of these Places UI kit components and non-UI kit features: Place Details component Place Search component Basic Place Autocomplete component Non-UI Kit Place Autocomplete widget Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications).
- We offer 3 brand colors to choose from that can be independently set for light and dark themes: Light theme: placesColorAttributionLight with enum values for white, gray, and black.
- Any theme attributes that are not overridden use the default styles. < style name = "CustomizedPlaceDetailsTheme" parent = "PlacesMaterialTheme" > < item name = "placesColorPrimary" > @color / app primary color < / item > < item name = "placesColorOnSurface" > @color / app color on surface < / item > < item name = "placesColorOnSurfaceVariant" > @color / app color on surface < / item > < item name = "placesTextAppearanceBodySmall" > @style / app text appearence small < / item > < item name = "placesCornerRadius" > 20 dp < / item > < / style > Important: The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- StartActivityForResult ()) { result : ActivityResult - > val intent = result . data val place : Place? = BasicPlaceAutocomplete . getPlaceFromIntent ( intent !! ) val status : Status? = BasicPlaceAutocomplete . getResultStatusFromIntent ( intent !! ) // ... } val autocompleteIntent : Intent = BasicPlaceAutocomplete . createIntent ( this ) { setInitialQuery ( "INSERT QUERY TEXT" ) setOrigin ( LatLng ( 10.0 , 10.0 )) // ... setAutocompleteUiCustomization ( AutocompleteUiCustomization . create ( listDensity = AutocompleteListDensity .
- CustomizedTheme ) . build ()) . build ( this ); basicPlaceAutocompleteActivityResultLauncher . launch ( basicPlaceAutocompleteIntent ); Customize the theme The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- CustomizedTheme , ) ) } basicPlaceAutocompleteActivityResultLauncher . launch ( autocompleteIntent ) Java ActivityResultLauncher<Intent> basicPlaceAutocompleteActivityResultLauncher = registerForActivityResult ( new ActivityResultContracts .
- You can use the Basic Place Autocomplete component independently or in conjunction with other Google Maps Platform APIs and services.


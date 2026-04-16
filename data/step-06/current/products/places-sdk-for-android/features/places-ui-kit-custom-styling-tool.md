---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.776Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Places UI Kit custom styling tool"
feature_slug: "places-ui-kit-custom-styling-tool"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling"
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit"
  - "https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-customization-tool"
  - "https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit"
keywords:
  - "places"
  - "ui"
  - "kit"
  - "custom"
  - "styling"
  - "tool"
  - "this"
  - "creates"
---

# Places UI Kit custom styling tool

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

This tool creates and visualizes custom styling configurations for Places UI Kit elements.

## Extended Definition

This tool creates and visualizes custom styling configurations for Places UI Kit elements.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling)
- [https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit)
- [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-customization-tool](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-customization-tool)
- [https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit)

## Supporting Pages

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a dark theme, add an entry for the colors in values-night/colors.xml Customization tool Use this tool to visualize custom configurations in a Places UI Kit element.
- Use the Customization tool to visualize custom configurations in a Places UI Kit element.
- Any theme attributes that are not overridden use the default styles. < style name = "CustomizedPlaceDetailsTheme" parent = "PlacesMaterialTheme" > < item name = "placesColorPrimary" > @color / app primary color < / item > < item name = "placesColorOnSurface" > @color / app color on surface < / item > < item name = "placesColorOnSurfaceVariant" > @color / app color on surface < / item > < item name = "placesTextAppearanceBodySmall" > @style / app text appearence small < / item > < item name = "placesCornerRadius" > 20 dp < / item > < / style > Important: The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- Select platform: Android iOS JavaScript Customizeable style properties Visual customization examples You can customize the colors, typography, spacing, borders, and corners of these Places UI kit components and non-UI kit features: Place Details component Place Search component Basic Place Autocomplete component Non-UI Kit Place Autocomplete widget Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications).

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications).
- The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- Kotlin package com.example.placedetailsuikit import android.Manifest import android.annotation.SuppressLint import android.content.pm.PackageManager import android.content.res.Configuration import android.location.Location import android.os.Bundle import android.util.Log import android.view.View import android.widget.Toast import androidx.activity.enableEdgeToEdge import androidx.activity.result.ActivityResultLauncher import androidx.activity.result.contract.ActivityResultContracts import androidx.activity.viewModels import androidx.appcompat.app.AppCompatActivity import androidx.core.app.ActivityCompat import androidx.lifecycle.ViewModel import com.example.placedetailsuikit.databinding.ActivityMainBinding import com.google.android.gms.location.FusedLocationProviderClient import com.google.android.gms.location.LocationServices import com.google.android.gms.maps.CameraUpdateFactory import com.google.android.gms.maps.GoogleMap import com.google.android.gms.maps.OnMapReadyCallback import com.google.android.gms.maps.SupportMapFragment import com.google.android.gms.maps.model.LatLng import com.google.android.gms.maps.model.PointOfInterest import com.google.android.libraries.places.api.Places import com.google.android.libraries.places.api.model.Place import com.google.android.libraries.places.widget.PlaceDetailsCompactFragment import com.google.android.libraries.places.widget.PlaceLoadListener import com.google.android.libraries.places.widget.model.Orientation private const val TAG = & quot ; PlacesUiKit&quot ; / A simple ViewModel to store UI state that needs to survive configuration changes.

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-customization-tool](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-customization-tool)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Places UI Kit customization tool Use the Customization tool to visualize how different sets of properties will affect the appearance of a Places Details element.
- Refer to Custom styling for more information about how to customize your Places UI Kit elements and for a CSS properties reference table.
- Home Products Google Maps Platform Documentation Android Places SDK for Android Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/basic-place-autocomplete-ui-kit)
- Source ID: `site-docs-root`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- CustomizedTheme ) . build ()) . build ( this ); basicPlaceAutocompleteActivityResultLauncher . launch ( basicPlaceAutocompleteIntent ); Customize the theme The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- To customize the dark theme, add an entry for the color in values-night/colors.xml . <style name="CustomizedTheme" parent="PlacesMaterialTheme"> <item name="placesColorPrimary">@color/app primary color</item> <item name="placesColorOnSurface">@color/app color on surface</item> <item name="placesColorOnSurfaceVariant">@color/app color on surface</item> <item name="placesTextAppearanceBodySmall">@style/app text appearence small</item> <item name="placesCornerRadius">20dp</item> </style> Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- StartActivityForResult ()) { result : ActivityResult - > val intent = result . data val place : Place? = BasicPlaceAutocomplete . getPlaceFromIntent ( intent !! ) val status : Status? = BasicPlaceAutocomplete . getResultStatusFromIntent ( intent !! ) // ... } val autocompleteIntent : Intent = BasicPlaceAutocomplete . createIntent ( this ) { setInitialQuery ( "INSERT QUERY TEXT" ) setOrigin ( LatLng ( 10.0 , 10.0 )) // ... setAutocompleteUiCustomization ( AutocompleteUiCustomization . create ( listDensity = AutocompleteListDensity .


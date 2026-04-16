---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.777Z"
product_name: "Places SDK for Android"
product_slug: "places-sdk-for-android"
feature_name: "Places UI Kit Place Details Compact Widget lightbox"
feature_slug: "places-ui-kit-place-details-compact-widget-lightbox"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit"
  - "https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling"
  - "https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-overview"
  - "https://developers.google.com/maps/documentation/places/android-sdk/details-place"
keywords:
  - "places"
  - "ui"
  - "kit"
  - "place"
  - "details"
  - "compact"
  - "widget"
  - "lightbox"
---

# Places UI Kit Place Details Compact Widget lightbox

Product: Places SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The Place Details Compact Widget now supports a lightbox for full-screen photo enlargement.

## Extended Definition

The Place Details Compact Widget now supports a lightbox for full-screen photo enlargement.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit)
- [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling)
- [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-overview](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-overview)
- [https://developers.google.com/maps/documentation/places/android-sdk/details-place](https://developers.google.com/maps/documentation/places/android-sdk/details-place)

## Supporting Pages

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit](https://developers.google.com/maps/documentation/places/android-sdk/place-details-ui-kit)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Kotlin package com.example.placedetailsuikit import android.Manifest import android.annotation.SuppressLint import android.content.pm.PackageManager import android.content.res.Configuration import android.location.Location import android.os.Bundle import android.util.Log import android.view.View import android.widget.Toast import androidx.activity.enableEdgeToEdge import androidx.activity.result.ActivityResultLauncher import androidx.activity.result.contract.ActivityResultContracts import androidx.activity.viewModels import androidx.appcompat.app.AppCompatActivity import androidx.core.app.ActivityCompat import androidx.lifecycle.ViewModel import com.example.placedetailsuikit.databinding.ActivityMainBinding import com.google.android.gms.location.FusedLocationProviderClient import com.google.android.gms.location.LocationServices import com.google.android.gms.maps.CameraUpdateFactory import com.google.android.gms.maps.GoogleMap import com.google.android.gms.maps.OnMapReadyCallback import com.google.android.gms.maps.SupportMapFragment import com.google.android.gms.maps.model.LatLng import com.google.android.gms.maps.model.PointOfInterest import com.google.android.libraries.places.api.Places import com.google.android.libraries.places.api.model.Place import com.google.android.libraries.places.widget.PlaceDetailsCompactFragment import com.google.android.libraries.places.widget.PlaceLoadListener import com.google.android.libraries.places.widget.model.Orientation private const val TAG = & quot ; PlacesUiKit&quot ; / A simple ViewModel to store UI state that needs to survive configuration changes.
- Compact view Full view Place photo Lightbox enabled for full-screen photo enlargement Place address Rating and rating count Place type Price Accessible entrance information Open now status Place photo collage Place address Rating and rating count Place type Price Accessibility info Open now status Open hours Editorial summary Website Phone number Reviews rendered in dedicated tab Plus code Feature list, rendered in a dedicated tab Type-specific highlights, such as gas prices for gas stations Billing When using the Place Details UI Kit, you are billed for each time the .loadWithPlaceId() , .loadWithResourceName() , or loadWithCoordinates() method is called.
- Select platform: Android iOS JavaScript Place Details component The Place Details component of the Places UI Kit lets you add an individual UI component that displays place details in your app.
- To customize the dark theme, add an entry for the color in values-night/colors.xml . < style name = "CustomizedPlaceDetailsTheme" parent = "PlacesMaterialTheme" > < item name = "placesColorPrimary" > @color / app primary color < / item > < item name = "placesColorOnSurface" > @color / app color on surface < / item > < item name = "placesColorOnSurfaceVariant" > @color / app color on surface < / item > < item name = "placesTextAppearanceBodySmall" > @style / app text appearence small < / item > < item name = "placesCornerRadius" > 20 dp < / item > < / style > Use standard content This sample uses the standard content. val fragmentStandardContent = PlaceDetailsCompactFragment.newInstance( PlaceDetailsCompactFragment.STANDARD CONTENT, orientation, R.style.CustomizedPlaceDetailsTheme ) Customize specific content This sample selects only the address, accessible entrance, and media Content options for a compact view, and renders them with the CustomizedPlaceDetailsTheme . val placeDetailsFragment = PlaceDetailsCompactFragment.newInstance( orientation, listOf( Content.ADDRESS, Content.ACCESSIBLE ENTRANCE, Content.MEDIA ), R.style.CustomizedPlaceDetailsTheme ) Use all content This sample uses all Content options of a compact view. val fragmentAllContent = PlaceDetailsCompactFragment.newInstance( orientation, PlaceDetailsCompactFragment.ALL CONTENT, R.style.CustomizedPlaceDetailsTheme ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-custom-styling)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Customizeable style properties Visual customization examples You can customize the colors, typography, spacing, borders, and corners of these Places UI kit components and non-UI kit features: Place Details component Place Search component Basic Place Autocomplete component Non-UI Kit Place Autocomplete widget Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications).
- Any theme attributes that are not overridden use the default styles. < style name = "CustomizedPlaceDetailsTheme" parent = "PlacesMaterialTheme" > < item name = "placesColorPrimary" > @color / app primary color < / item > < item name = "placesColorOnSurface" > @color / app color on surface < / item > < item name = "placesColorOnSurfaceVariant" > @color / app color on surface < / item > < item name = "placesTextAppearanceBodySmall" > @style / app text appearence small < / item > < item name = "placesCornerRadius" > 20 dp < / item > < / style > Important: The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- To create a dark theme, add an entry for the colors in values-night/colors.xml Customization tool Use this tool to visualize custom configurations in a Places UI Kit element.
- Use the Customization tool to visualize custom configurations in a Places UI Kit element.

### Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-overview](https://developers.google.com/maps/documentation/places/android-sdk/places-ui-kit-overview)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Similarly, a Places UI Kit Place Details request may return photos, price, and rating for a selected place, but you will only be billed for the Places UI Kit Place Details request.
- The Places UI Kit provides the following components for rendering Places data: Place Details renders details for a selected place.
- Select platform: Android iOS JavaScript Places UI Kit The Places UI Kit component library lets you bring the familiar Google Maps user experience for Places to your apps and web pages, using the same data that powers the Places API.
- Places UI Kit requests are always billed at the Places UI Kit API rate , regardless of which search method they use or what data types they return.

### Place Details (New) \_|\_ Places SDK for Android \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/android-sdk/details-place](https://developers.google.com/maps/documentation/places/android-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Home Products Google Maps Platform Documentation Android Places SDK for Android Guides Send feedback Place Details (New) Stay organized with collections Save and categorize content based on your preferences.
- Place Details (New) requests You can request place details by calling PlacesClient.fetchPlace() and passing a FetchPlaceRequest object containing a place ID and field list , as well as any optional parameters : // Define a place ID. final String placeId = "INSERT PLACE ID HERE" ; // Specify the list of fields to return. final List<Place .
- Place Details example The following example requests the ID , DISPLAY NAME , and FORMATTED ADDRESS fields for the Empire State Building in New York City. // Define a place ID. final String placeId = "ChIJaXQRs6lZwokRY6EFpJnhNNE" ; // Specify the list of fields to return. final List<Place .
- Specify one or more of the following fields: The following fields trigger the Place Details Essentials IDs Only SKU : Place.Field.ID Place.Field.PHOTO METADATAS Place.Field.RESOURCE NAME Note: The RESOURCE NAME field contains the place resource name in the form: places/PLACE ID .


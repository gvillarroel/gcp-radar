---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.689Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "Android Auto support"
feature_slug: "android-auto-support"
latest_feature_date: "2023-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/overview"
keywords:
  - "android"
  - "auto"
  - "the"
  - "sdk"
  - "supports"
  - "driver"
  - "optimized"
  - "navigation"
---

# Android Auto support

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The SDK supports driver-optimized navigation experiences in Android Auto.

## Extended Definition

The SDK supports driver-optimized navigation experiences in Android Auto.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto](https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/overview](https://developers.google.com/maps/documentation/navigation/android-sdk/overview)

## Supporting Pages

### "Enable navigation for Android Auto \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto](https://developers.google.com/maps/documentation/navigation/android-sdk/android-auto)
- Source ID: `site-docs-root`
- Final score: 293
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Start with Android Auto Before you begin working with the Navigation SDK features designed to work with Android Auto, you must set up a car service for your app so that Android Auto can discover it.
- Set up The first part of getting your app working with Android Auto involves setting up a car service with Android Auto and then enabling the TurnByTurn library in your Navigation SDK app.
- The TurnByTurn library in Navigation SDK provides this navigation information, which your code uses to populate the Android Auto navigation template.
- Page Summary outlined flag This guide explains how to integrate the Navigation SDK with Android Auto to display navigation on car head units.

### "Custom navigation experience \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav](https://developers.google.com/maps/documentation/navigation/android-sdk/intro-custom-nav)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Enable Navigation for Android Auto Drivers using your app want an overview map for most of their journey, with only minimal turn-by-turn guidance for city streets.
- See the demo: The download of the Navigation SDK contains a demo you can run to see an example of a navigation experience that switches between turn-by-turn guidance through standard navigation to a navigation experience that shows only the device location moving along a road polyline.
- The primary way to implement the Navigation SDK is to use the Google navigation experience , which lets you embed a turn-by-turn navigation experience that uses Google-provided UI elements and visuals — similar to the navigation experience within the Google Maps apps.
- With a custom navigation experience, your app calls the Navigation SDK to request a turn-by-turn navigation feed, and then you provide and manage the UI elements and visuals that the user sees in the navigation experience.

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When the built-in layout changes, Navigation SDK for Android automatically repositions your custom controls.
- View the code Show/Hide the Java code for the navigation activity. package com . example . navsdkcustomization ; import android.content.pm.PackageManager ; import android.graphics.Bitmap ; import android.graphics.BitmapFactory ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.model.BitmapDescriptorFactory ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.StylingOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.Waypoint ; / An activity that displays a map and a customized navigation UI . / public class NavigationActivityCustomization extends AppCompatActivity { private static final String TAG = NavigationActivityCustomization . class . getSimpleName (); private Navigator mNavigator ; private SupportNavigationFragment mNavFragment ; private GoogleMap mMap ; // Define the Sydney Opera House by specifying its place ID . private static final String SYDNEY OPERA HOUSE = "ChIJ3S-JXmauEmsRUcIaWtf4MzE" ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Starts the Navigation SDK and sets the camera to follow the device 's location.
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Send feedback Modify the navigation UI Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Android Navigation SDK offers UI customization through predefined map UI controls and accessories, allowing developers to tailor the navigation experience.

### "Navigation SDK overview \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/overview](https://developers.google.com/maps/documentation/navigation/android-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How to use the Navigation SDK The steps below cover a typical use case scenario for using the Navigation SDK: 1 Get set up Create a Google Cloud project, add the Navigation SDK to your API key, and set up your Android Studio project.
- For information on the maps API and functionality differences between the Maps SDK and the Navigation SDK, see the Overview page in the Reference section Navigation Experience : Add the navigation experience using the, which includes the turn-by-turn navigation overlay, turn cards, and additional UI elements.
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Send feedback Navigation SDK overview Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag The Navigation SDK enables integrating Google Maps turn-by-turn navigation directly into your mobile apps, offering UI customization and advanced route configuration.


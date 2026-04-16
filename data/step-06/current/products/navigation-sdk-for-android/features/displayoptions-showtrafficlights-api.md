---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.676Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "DisplayOptions.showTrafficLights API"
feature_slug: "displayoptions-showtrafficlights-api"
latest_feature_date: "2025-09-24"
deprecation_date: "2025-09-24"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveStartedListener"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview"
keywords:
  - "displayoptions"
  - "showtrafficlights"
  - "api"
  - "is"
  - "deprecated"
  - "and"
  - "now"
  - "defaults"
---

# DisplayOptions.showTrafficLights API

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

DisplayOptions.showTrafficLights is deprecated and now defaults to true; deprecated on 2025-09-24.

## Extended Definition

DisplayOptions.showTrafficLights is deprecated and now defaults to true; deprecated on 2025-09-24.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveStartedListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveStartedListener)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project](https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview](https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview)

## Supporting Pages

### "GoogleMap.OnCameraMoveStartedListener \_|\_ Navigation SDK for Android \_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveStartedListener](https://developers.google.com/maps/documentation/navigation/android-sdk/reference/com/google/android/gms/maps/GoogleMap.OnCameraMoveStartedListener)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- Home Products Google Maps Platform Documentation Android Navigation SDK for Android Reference Send feedback GoogleMap.OnCameraMoveStartedListener Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Java is a registered trademark of Oracle and/or its affiliates.

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- DisplayOptions displayOptions = new DisplayOptions (). showTrafficLights ( true ). showStopSigns ( true ); Add custom markers Navigation SDK for Android now uses Google Maps APIs for markers.
- View the code Show/Hide the Java code for the navigation activity. package com . example . navsdkcustomization ; import android.content.pm.PackageManager ; import android.graphics.Bitmap ; import android.graphics.BitmapFactory ; import android.os.Bundle ; import android.util.Log ; import android.widget.Toast ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.GoogleMap.CameraPerspective ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.model.BitmapDescriptorFactory ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.libraries.navigation.ListenableResultFuture ; import com.google.android.libraries.navigation.NavigationApi ; import com.google.android.libraries.navigation.Navigator ; import com.google.android.libraries.navigation.SimulationOptions ; import com.google.android.libraries.navigation.StylingOptions ; import com.google.android.libraries.navigation.SupportNavigationFragment ; import com.google.android.libraries.navigation.Waypoint ; / An activity that displays a map and a customized navigation UI . / public class NavigationActivityCustomization extends AppCompatActivity { private static final String TAG = NavigationActivityCustomization . class . getSimpleName (); private Navigator mNavigator ; private SupportNavigationFragment mNavFragment ; private GoogleMap mMap ; // Define the Sydney Opera House by specifying its place ID . private static final String SYDNEY OPERA HOUSE = "ChIJ3S-JXmauEmsRUcIaWtf4MzE" ; // Set fields for requesting location permission . private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean mLocationPermissionGranted ; @Override protected void onCreate ( Bundle savedInstanceState ) { super . onCreate ( savedInstanceState ); setContentView ( R . layout . activity main ); // Initialize the Navigation SDK . initializeNavigationSdk (); } / Starts the Navigation SDK and sets the camera to follow the device 's location.
- NavigatorListener () { / Sets up the navigation UI when the navigator is ready for use . / @Override public void onNavigatorReady ( Navigator navigator ) { displayMessage ( "Navigator ready." ); mNavigator = navigator ; mNavFragment = ( SupportNavigationFragment ) getSupportFragmentManager () . findFragmentById ( R . id . navigation fragment ); // Get the map . mNavFragment . getMapAsync ( new OnMapReadyCallback () { @Override public void onMapReady ( GoogleMap map ) { mMap = map ; // Navigate to a place , specified by Place ID . navigateToPlace ( SYDNEY OPERA HOUSE ); } }); } / Handles errors from the Navigation SDK . @param errorCode The error code returned by the navigator . / @Override public void onError ( @NavigationApi .
- Prompt Visibility API (Experimental) Experimental feature The Prompt Visibility API lets you avoid conflicts between UI elements generated by the Navigation SDK and your own custom UI elements by adding a listener to receive a callback before a Navigation SDK UI element is about to appear and as soon as the element is removed.

### "Overview and requirements \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project](https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- Set up the Navigation SDK for Android Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Navigation SDK setup process To set up and start using the Navigation SDK, you first need to configure your Google Cloud project and obtain an API key that has the Navigation SDK enabled.
- Your app must specify Android versions as follows: the target version must be Android 13 (API level 33) or higher. the minimum version must be Android 6 (API level 23) or higher.

### "Overview and requirements \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview](https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- Set up the Navigation SDK for Android Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Navigation SDK setup process To set up and start using the Navigation SDK, you first need to configure your Google Cloud project and obtain an API key that has the Navigation SDK enabled.
- Your app must specify Android versions as follows: the target version must be Android 13 (API level 33) or higher. the minimum version must be Android 6 (API level 23) or higher.


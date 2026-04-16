---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:13.722Z"
product_name: "Maps SDK for Android"
product_slug: "maps-sdk-for-android"
feature_name: "Legacy Apache HTTP library"
feature_slug: "legacy-apache-http-library"
latest_feature_date: "2026-01-31"
deprecation_date: "2026-01-31"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/android-sdk/config"
keywords:
  - "legacy"
  - "apache"
  - "http"
  - "library"
  - "sdk"
  - "no"
  - "longer"
  - "includes"
---

# Legacy Apache HTTP library

Product: Maps SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The SDK no longer includes the deprecated org.apache.http.legacy library in its AndroidManifest.xml, which can break apps that load the legacy map renderer; deprecated on 2026-01-31.

## Extended Definition

The SDK no longer includes the deprecated org.apache.http.legacy library in its AndroidManifest.xml, which can break apps that load the legacy map renderer; deprecated on 2026-01-31.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/android-sdk/config](https://developers.google.com/maps/documentation/android-sdk/config)

## Supporting Pages

### "Set up an Android Studio project \_|\_ Maps SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/android-sdk/config](https://developers.google.com/maps/documentation/android-sdk/config)
- Source ID: `site-docs-reference-required-2`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Otherwise, skip this declaration. < uses - library android : name = "org.apache.http.legacy" android : required = "false" / > Step 5: Set up an Android device To run an app that uses the Maps SDK for Android, you must deploy it to an Android device or Android emulator that is based on Android 5.0 or higher and includes the Google APIs.
- If you're targeting earlier versions of the Google Play services SDK, you must request the WRITE EXTERNAL STORAGE permission, in the manifest element. <uses-permission android:name="android.permission.WRITE EXTERNAL STORAGE" /> Apache HTTP Legacy library If you are using com.google.android.gms:play-services-maps:16.0.0 or below and your app is targeting API level 28 (Android 9.0) or above, you must include the following declaration within the <application> element of AndroidManifest.xml .
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Set up the SDK The Maps SDK for Android library is available through Google's Maven repository .

### "Select Current Place and Show Details on a Map \_|\_ Maps SDK for Android\

- URL: [https://developers.google.com/maps/documentation/android-sdk/current-place-tutorial](https://developers.google.com/maps/documentation/android-sdk/current-place-tutorial)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Builder ( this ) . setTitle ( R . string . pick place ) . setItems ( likelyPlaceNames , listener ) . show (); } / Updates the map 's UI settings based on whether the user has granted location permission. / private void updateLocationUI () { if ( map == null ) { return ; } try { if ( locationPermissionGranted ) { map . setMyLocationEnabled ( true ); map . getUiSettings () . setMyLocationButtonEnabled ( true ); } else { map . setMyLocationEnabled ( false ); map . getUiSettings () . setMyLocationButtonEnabled ( false ); lastKnownLocation = null ; } } catch ( SecurityException e ) { Log . e ( "Exception: %s " , e . getMessage ()); } } } View the Kotlin version of the activity: Show / Hide Code // Copyright 2020 Google LLC // // Licensed under the Apache License , Version 2.0 ( the "License" ); // you may not use this file except in compliance with the License . // You may obtain a copy of the License at // // http : // www . apache . org / licenses / LICENSE - 2.0 // // Unless required by applicable law or agreed to in writing , software // distributed under the License is distributed on an "AS IS" BASIS , // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND , either express or implied . // See the License for the specific language governing permissions and // limitations under the License . package com . example . currentplacedetailsonmap import android.Manifest import android.annotation.SuppressLint import android.content.DialogInterface import android.content.pm.PackageManager import android.location.Location import android.os.Bundle import android.util.Log import android.view.Menu import android.view.MenuItem import android.view.View import android.widget.FrameLayout import android.widget.TextView import androidx.appcompat.app.AlertDialog import androidx.appcompat.app.AppCompatActivity import androidx.core.app.ActivityCompat import androidx.core.content.ContextCompat import com.google.android.gms.location.FusedLocationProviderClient import com.google.android.gms.location.LocationServices import com.google.android.gms.maps.CameraUpdateFactory import com.google.android.gms.maps.GoogleMap import com.google.android.gms.maps.GoogleMap.InfoWindowAdapter import com.google.android.gms.maps.OnMapReadyCallback import com.google.android.gms.maps.SupportMapFragment import com.google.android.gms.maps.model.CameraPosition import com.google.android.gms.maps.model.LatLng import com.google.android.gms.maps.model.Marker import com.google.android.gms.maps.model.MarkerOptions import com.google.android.libraries.places.api.Places import com.google.android.libraries.places.api.model.Place import com.google.android.libraries.places.api.net.FindCurrentPlaceRequest import com.google.android.libraries.places.api.net.PlacesClient / An activity that displays a map showing the place at the device 's current location. / class MapsActivityCurrentPlace : AppCompatActivity (), OnMapReadyCallback { private var map : GoogleMap ? = null private var cameraPosition : CameraPosition ? = null // The entry point to the Places API . private lateinit var placesClient : PlacesClient // The entry point to the Fused Location Provider . private lateinit var fusedLocationProviderClient : FusedLocationProviderClient // A default location ( Sydney , Australia ) and default zoom to use when location permission is // not granted . private val defaultLocation = LatLng ( - 33.8523341 , 151.2106085 ) private var locationPermissionGranted = false // The geographical location where the device is currently located .
- View the Java version of the activity: Show / Hide Code // Copyright 2020 Google LLC // // Licensed under the Apache License , Version 2.0 ( the "License" ); // you may not use this file except in compliance with the License . // You may obtain a copy of the License at // // http : // www . apache . org / licenses / LICENSE - 2.0 // // Unless required by applicable law or agreed to in writing , software // distributed under the License is distributed on an "AS IS" BASIS , // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND , either express or implied . // See the License for the specific language governing permissions and // limitations under the License . package com . example . currentplacedetailsonmap ; import android.content.DialogInterface ; import android.content.pm.PackageManager ; import android.location.Location ; import android.os.Bundle ; import android.util.Log ; import android.view.Menu ; import android.view.MenuItem ; import android.view.View ; import android.widget.FrameLayout ; import android.widget.TextView ; import androidx.annotation.NonNull ; import androidx.appcompat.app.AlertDialog ; import androidx.appcompat.app.AppCompatActivity ; import androidx.core.app.ActivityCompat ; import androidx.core.content.ContextCompat ; import com.google.android.gms.location.FusedLocationProviderClient ; import com.google.android.gms.location.LocationServices ; import com.google.android.gms.maps.CameraUpdateFactory ; import com.google.android.gms.maps.GoogleMap ; import com.google.android.gms.maps.OnMapReadyCallback ; import com.google.android.gms.maps.SupportMapFragment ; import com.google.android.gms.maps.model.CameraPosition ; import com.google.android.gms.maps.model.LatLng ; import com.google.android.gms.maps.model.Marker ; import com.google.android.gms.maps.model.MarkerOptions ; import com.google.android.gms.tasks.OnCompleteListener ; import com.google.android.gms.tasks.Task ; import com.google.android.libraries.places.api.Places ; import com.google.android.libraries.places.api.model.Place ; import com.google.android.libraries.places.api.model.PlaceLikelihood ; import com.google.android.libraries.places.api.net.FindCurrentPlaceRequest ; import com.google.android.libraries.places.api.net.FindCurrentPlaceResponse ; import com.google.android.libraries.places.api.net.PlacesClient ; import java.util.Arrays ; import java.util.List ; / An activity that displays a map showing the place at the device 's current location. / public class MapsActivityCurrentPlace extends AppCompatActivity implements OnMapReadyCallback { private static final String TAG = MapsActivityCurrentPlace . class . getSimpleName (); private GoogleMap map ; private CameraPosition cameraPosition ; // The entry point to the Places API . private PlacesClient placesClient ; // The entry point to the Fused Location Provider . private FusedLocationProviderClient fusedLocationProviderClient ; // A default location ( Sydney , Australia ) and default zoom to use when location permission is // not granted . private final LatLng defaultLocation = new LatLng ( - 33.8523341 , 151.2106085 ); private static final int DEFAULT ZOOM = 15 ; private static final int PERMISSIONS REQUEST ACCESS FINE LOCATION = 1 ; private boolean locationPermissionGranted ; // The geographical location where the device is currently located .
- The tutorial uses the Android support library version of the map fragment, to ensure backward compatibility with earlier versions of the Android framework. < !-- Copyright 2020 Google LLC Licensed under the Apache License , Version 2.0 ( the "License" ); you may not use this file except in compliance with the License .
- You may obtain a copy of the License at http : // www . apache . org / licenses / LICENSE - 2.0 Unless required by applicable law or agreed to in writing , software distributed under the License is distributed on an "AS IS" BASIS , WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND , either express or implied .

### "Cloud-based maps styling overview \_|\_ Maps SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/android-sdk/cloud-customization](https://developers.google.com/maps/documentation/android-sdk/cloud-customization)
- Source ID: `site-docs-reference-required-2`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Points of interest includes features such as Entertainment, Recreation, and Services, which each also have several child features.
- For example, Services includes ATM, Bank, Gas station, and Restroom.


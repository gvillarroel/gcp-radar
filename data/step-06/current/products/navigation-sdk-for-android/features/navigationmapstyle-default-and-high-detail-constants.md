---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:00.691Z"
product_name: "Navigation SDK for Android"
product_slug: "navigation-sdk-for-android"
feature_name: "NavigationMapStyle DEFAULT and HIGH_DETAIL constants"
feature_slug: "navigationmapstyle-default-and-high-detail-constants"
latest_feature_date: "2022-10-25"
deprecation_date: "2022-10-25"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup"
  - "https://developers.google.com/maps/documentation/navigation/android-sdk/controls"
keywords:
  - "navigationmapstyle"
  - "default"
  - "and"
  - "high"
  - "detail"
  - "constants"
  - "the"
  - "switch"
---

# NavigationMapStyle DEFAULT and HIGH_DETAIL constants

Product: Navigation SDK for Android
Coverage: MEDIUM

## Step 02 Summary

The DEFAULT and HIGH_DETAIL constants switch the app's default map view between simple and detailed styles; deprecated on 2022-10-25.

## Extended Definition

The DEFAULT and HIGH_DETAIL constants switch the app's default map view between simple and detailed styles; deprecated on 2022-10-25.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project](https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview](https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup](https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup)
- [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)

## Supporting Pages

### "Overview and requirements \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project](https://developers.google.com/maps/documentation/navigation/android-sdk/set-up-project)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your app must specify Android versions as follows: the target version must be Android 13 (API level 33) or higher. the minimum version must be Android 6 (API level 23) or higher.
- Note: European Economic Area (EEA) : The default user interface and functionality of the Navigation SDK are deemed fully compliant with the EEA Safety Requirements .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- Set up the Navigation SDK for Android Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Overview and requirements \_|\_ Navigation SDK for Android \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview](https://developers.google.com/maps/documentation/navigation/android-sdk/setup-overview)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your app must specify Android versions as follows: the target version must be Android 13 (API level 33) or higher. the minimum version must be Android 6 (API level 23) or higher.
- Note: European Economic Area (EEA) : The default user interface and functionality of the Navigation SDK are deemed fully compliant with the EEA Safety Requirements .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
- Set up the Navigation SDK for Android Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Set up your Android Studio project \_|\_ Navigation SDK for Android \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup](https://developers.google.com/maps/documentation/navigation/android-sdk/android-studio-setup)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check the sample apps for updated sets of dependencies, as the version of Navigation SDK you are using may be slightly ahead or behind this documentation. apply plugin : 'com.android.application' ext { navSdk = " NAVSDK VERSION " } android { compileSdk 33 buildToolsVersion = '28.0.3' defaultConfig { applicationId "<your id>" // Navigation SDK supports SDK 23 and later . minSdkVersion 23 targetSdkVersion 34 versionCode 1 versionName "1.0" // Set this to the languages you actually use , otherwise you 'll include resource strings // for all languages supported by the Navigation SDK . resConfigs "en" multiDexEnabled true } dexOptions { // This increases the amount of memory available to the dexer .
- Note that the Navigation SDK includes its own ProGuard configuration . // The configuration is included transitively by depending on the Navigation SDK . // If the ProGuard step takes too long , consider enabling multidex for development work // instead . all { minifyEnabled true proguardFiles getDefaultProguardFile ( 'proguard-android.txt' ), 'proguard-rules.pro' } } compileOptions { // Flag to enable support for the new language APIs coreLibraryDesugaringEnabled true // Sets Java compatibility to Java 8 sourceCompatibility JavaVersion .
- Add desugaring for Java8 support If you're building your app using the Android Gradle plugin 4.0.0 or higher, the plugin extends support for using a number of Java 8 language APIs.
- If you are a Mobility or Fleet Engine Deliveries customer, consult the Mobility documentation for billing details and transaction recording.

### "Modify the navigation UI \_|\_ Navigation SDK for Android \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/android-sdk/controls](https://developers.google.com/maps/documentation/navigation/android-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- DEBUG ) { mNavigator . getSimulator () . simulateLocationsAlongExistingRoute ( new SimulationOptions () . speedMultiplier ( 5 )); } // Start turn - by - turn guidance along the current route . mNavigator . startGuidance (); break ; // Handle error conditions returned by the navigator . case NO ROUTE FOUND : displayMessage ( "Error starting navigation: No route found." ); break ; case NETWORK ERROR : displayMessage ( "Error starting navigation: Network error." ); break ; case ROUTE CANCELED : displayMessage ( "Error starting navigation: Route canceled." ); break ; default : displayMessage ( "Error starting navigation: " + String . valueOf ( code )); } } }); } / Handles the result of the request for location permissions . / @Override public void onRequestPermissionsResult ( int requestCode , @NonNull String [] permissions , @NonNull int [] grantResults ) { mLocationPermissionGranted = false ; switch ( requestCode ) { case PERMISSIONS REQUEST ACCESS FINE LOCATION : { // If request is canceled , the result arrays are empty . if ( grantResults . length > 0 && grantResults [ 0 ] == PackageManager .
- LOCATION PERMISSION MISSING : displayMessage ( "Error loading Navigation SDK: Location permission " + "is missing." ); break ; default : displayMessage ( "Error loading Navigation SDK: " + errorCode ); } } }); } / Customizes the navigation UI and the map . / private void customizeNavigationUI () { // Set custom colors for the navigator . mNavFragment . setStylingOptions ( new StylingOptions () . primaryDayModeThemeColor ( 0xff1A237E ) . secondaryDayModeThemeColor ( 0xff3F51B5 ) . primaryNightModeThemeColor ( 0xff212121 ) . secondaryNightModeThemeColor ( 0xff424242 ) . headerLargeManeuverIconColor ( 0xffffff00 ) . headerSmallManeuverIconColor ( 0xffffa500 ) . headerNextStepTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerNextStepTextColor ( 0xff00ff00 ) . headerNextStepTextSize ( 20 f ) . headerDistanceTypefacePath ( "/system/fonts/NotoSerif-Italic.ttf" ) . headerDistanceValueTextColor ( 0xff00ff00 ) . headerDistanceUnitsTextColor ( 0xff0000ff ) . headerDistanceValueTextSize ( 20 f ) . headerDistanceUnitsTextSize ( 18 f ) . headerInstructionsTypefacePath ( "/system/fonts/NotoSerif-BoldItalic.ttf" ) . headerInstructionsTextColor ( 0xffffff00 ) . headerInstructionsFirstRowTextSize ( 24 f ) . headerInstructionsSecondRowTextSize ( 20 f ) . headerGuidanceRecommendedLaneColor ( 0xffffa500 )); mMap . setTrafficEnabled ( false ); // Place a marker at the final destination . if ( mNavigator . getCurrentRouteSegment () != null ) { LatLng destinationLatLng = mNavigator . getCurrentRouteSegment () . getDestinationLatLng (); Bitmap destinationMarkerIcon = BitmapFactory . decodeResource ( getResources (), R . drawable . ic person pin 48dp ); mMap . addMarker ( new MarkerOptions () . position ( destinationLatLng ) . icon ( BitmapDescriptorFactory . fromBitmap ( destinationMarkerIcon )) . title ( "Destination marker" )); // Listen for a tap on the marker . mMap . setOnMarkerClickListener ( new GoogleMap .
- These breakpoints are independent of device orientation and how much space the map actually takes up on the screen: Screen height Trip progress bar visibility Trip progress bar height Trip progress bar y-axis position Small: 0 dp - 551 dp Not visible N/A N/A Medium: 552 dp - 739 dp Visible 130 dp Above start side controls (speedometer / Google logo / Re-center button) Large: 740 dp and above Visible 290 dp Above start side controls (speedometer / Google logo / Re-center button) Note: The screen height values shown in the table above apply to Navigation SDK versions 6.2.1 and higher.
- LENGTH LONG ) . show (); Log . d ( TAG , errorMessage ); } } Destination highlighting and entrances When a destination is created with a placeID , the destination building will be highlighted and an entrance icon will be shown, whenever possible.


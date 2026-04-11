---
title: "Places SDK for Android \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/Places
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/reference
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/reference/com/google/android/libraries/places/api/Places
  title: "Places SDK for Android \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Android
Places SDK for Android
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Places
public final class Places
Entry point for the Places API.
Summary
Public methods
static void
addInternalUsageAttributionId ( String internalUsageAttributionId)
Adds a usage attribution ID to the initializer, which helps Google understand which libraries and samples are helpful to developers, such as usage of a marker clustering library.
synchronized static PlacesClient
createClient ( Context context)
Gets an instance of PlacesClient for a given Context .
synchronized static void
deinitialize ()
Deinitializes Places .
static void
initialize ( Context applicationContext, String apiKey)
This method is deprecated.
Use initializeWithNewPlacesApiEnabled instead.
static void
initialize ( Context applicationContext, String apiKey, @ Nullable Locale locale )
This method is deprecated.
Use initializeWithNewPlacesApiEnabled instead.
static void
initializeWithNewPlacesApiEnabled ( Context applicationContext, String apiKey )
Initializes Places for the given application context with the given API key which has the Places API (New) enabled in the Google Cloud Console.
static void
initializeWithNewPlacesApiEnabled ( Context applicationContext, String apiKey, @ Nullable Locale locale )
Initializes Places for the given application context with the given API key which has the Places API (New) enabled in the Google Cloud Console.
synchronized static boolean
isInitialized ()
Returns whether or not Places has been initialized.
static void
setPlacesAppCheckTokenProvider ( PlacesAppCheckTokenProvider appCheckTokenProvider )
Sets the PlacesAppCheckTokenProvider .
Public methods
addInternalUsageAttributionId
public static void addInternalUsageAttributionId ( String internalUsageAttributionId)
Adds a usage attribution ID to the initializer, which helps Google understand which libraries and samples are helpful to developers, such as usage of a marker clustering library. To opt out of sending the usage attribution ID, it is safe to delete this function call or replace the value with an empty string.
createClient
synchronized public static PlacesClient createClient ( Context context)
Gets an instance of PlacesClient for a given Context .
Call initialize or initialize before calling this method.
Throws
java.lang.IllegalStateException
if Places hasn't been initialized first (for more info, see initialize or initialize ).
deinitialize
synchronized public static void deinitialize ()
Deinitializes Places .
This puts Places into its uninitialized state.
Note: this does not need to be called in order to change the API key; to do so, simply call initialize or initialize again.
initialize
public static void initialize ( Context applicationContext, String apiKey)
This method is deprecated.
Use initializeWithNewPlacesApiEnabled instead.
Initializes Places for the given application context with the given API key.
All Places API responses are localized using the device's locale. This method should only be called once prior to using the Places API. You may call this method again to update the API key used; if so, all widgets and instances of PlacesClient will now use this new key.
Parameters
Context applicationContext
The application context in which the Places API will be used in.
String apiKey
The Places API key.
Throws
java.lang.IllegalArgumentException
If the apiKey is empty.
initialize
public static void initialize ( Context applicationContext, String apiKey, @ Nullable Locale locale )
This method is deprecated.
Use initializeWithNewPlacesApiEnabled instead.
Initializes Places for the given application context with the provided API key and Locale .
This method should only be called once prior to using the Places API. You may call this method again to update the API key and locale used; if you do so, all widgets and instances of PlacesClient will now use these new values.
If using this method to initialize within an app which is published as an app bundle, please see documentation to ensure that required resources are available at runtime.
Parameters
Context applicationContext
The application context in which the Places API will be used in.
String apiKey
The Places API key.
@ Nullable Locale locale
The locale in which Places API responses will be localized. If null, the device locale at the point of request is used.
Throws
java.lang.IllegalArgumentException
If the apiKey is empty.
initializeWithNewPlacesApiEnabled
public static void initializeWithNewPlacesApiEnabled ( Context applicationContext, String apiKey )
Initializes Places for the given application context with the given API key which has the Places API (New) enabled in the Google Cloud Console.
All Places API responses are localized using the device's locale. This method should only be called once prior to using the Places API. You may call this method again to update the API key used; if so, all widgets and instances of PlacesClient will now use this new key.
Parameters
Context applicationContext
The application context in which the Places API will be used in.
String apiKey
The Places API key which has the Places API (New) enabled in the Google Cloud Console.
Throws
java.lang.IllegalArgumentException
If the apiKey is empty.
initializeWithNewPlacesApiEnabled
public static void initializeWithNewPlacesApiEnabled ( Context applicationContext, String apiKey, @ Nullable Locale locale )
Initializes Places for the given application context with the given API key which has the Places API (New) enabled in the Google Cloud Console.
This method should only be called once prior to using the Places API. You may call this method again to update the API key and locale used; if you do so, all widgets and instances of PlacesClient will now use these new values.
If using this method to initialize within an app which is published as an app bundle, please see documentation to ensure that required resources are available at runtime.
Parameters
Context applicationContext
The application context in which the Places API will be used in.
String apiKey
The Places API key which has the Places API (New) enabled in the Google Cloud Console.
@ Nullable Locale locale
The locale in which Places API responses will be localized. If null, the device locale at the point of request is used.
Throws
java.lang.IllegalArgumentException
If the apiKey is empty.
isInitialized
synchronized public static boolean isInitialized ()
Returns whether or not Places has been initialized.
setPlacesAppCheckTokenProvider
public static void setPlacesAppCheckTokenProvider ( PlacesAppCheckTokenProvider appCheckTokenProvider )
Sets the PlacesAppCheckTokenProvider .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

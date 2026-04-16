---
title: "Places SDK for Android release notes \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/android-sdk/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/android-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/android-sdk/release-notes
  title: "Places SDK for Android release notes \_|\_ Google for Developers"
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
Resources
Send feedback
Places SDK for Android release notes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Places SDK for Android has evolved significantly, introducing a new generation ("Places SDK for Android (New)") with enhanced features and pricing.
The SDK offers various functionalities like searching for places, retrieving place details, and using autocomplete, with continuous updates and improvements.
Developers must choose between the existing and new SDK versions based on their needs and target Android versions.
Minimum Android and Kotlin versions have increased, requiring developers to update their projects accordingly for compatibility.
Key updates include new search features (Search Along Route, Nearby Search), place data fields (editorial summaries, atmosphere data), Kotlin support, and security enhancements (AppCheck).
This page is updated with each product release. The changelog lists releases by date and includes
any new features, bug fixes and significant performance improvements.
You can also browse and filter all release notes for all products in the
Google API Console .
To subscribe to these release notes, add the feed URL of this page to your RSS feed
reader .
April 07, 2026
5.2.0
Announcement
Release 5.2.0
The Places SDK for Android version 5.2.0 is now available. For information about
this release, and for all previous releases, see the Release
Notes
or subscribe to the Release Notes XML
feed .
If you are a new user, see Set Up in the Google Cloud
Console
to start the installation process. If you are an existing customer, see the
upgrade instructions at
Versions .
5.2.0
Feature
New fields added to provide more comprehensive place details.
You can now include the following in your FetchPlaceRequest to retrieve additional information:
AddressDescriptor : Returns a relational description of the location, including landmarks and areas.
ContainingPlaces : Returns other notable places that contain the requested place.
PostalAddress : Returns the place's address in a structured PostalAddress format.
PriceRange : Returns the price range of the place.
TimeZone : Returns the time zone of the place.
5.2.0
Feature
Enhanced Photo metadata.
The `PhotoMetadata class now also provides links:
flagContentURL : Flags the photo content.
googleMapsURL : Allows the photo to be viewed directly on Google Maps.
5.2.0
Fixed
The manual keep rule needed to fix ServiceConfigurationError in version 5.1.1 is no longer needed as of version 5.2.0.
December 18, 2025
Feature
Places UI Kit customization tool. Create custom, cross-platform, Place Details
configurations using our tool. You can use toggles to create your configuration,
or upload an image to have Gemini get you started. Access the
tool .
November 20, 2025
5.1.1
Announcement
Release 5.1.1
The Places SDK for Android version 5.1.1 is now available. For information about
this release, and for all previous releases, see the Release
Notes
or subscribe to the Release Notes XML
feed .
If you are a new user, see Set Up in the Google Cloud
Console
to start the installation process. If you are an existing customer, see the
upgrade instructions at
Versions .
5.1.1
Feature
Text Search (New) now supports pagination through the getPagination() method. For more information, see Pagination .
5.1.1
Feature
You can now return a link to the Google Maps page for a place by including the GOOGLE_MAPS_LINKS field in your request.
5.1.1
Feature
The Places UI Kit Place Details Compact Widget now supports a Lightbox for full-screen photo enlargement. For more information, see Content display options .
5.1.1
Feature
You can now use the custom styling Customization tool to create and visualize custom styling configurations for Places UI Kit elements.
5.1.1
Issue
ServiceConfigurationError when using R8 Full Mode. The interim solution for version 5.1.1 is to add a proguard keep rule:
-keepclassmembers class com.google.android.libraries.places.internal.** {
<init>();
}
September 25, 2025
5.0.0
Announcement
Release 5.0.0
The Places SDK for Android version 5.0.0 is now available. For information about
this release, and for all previous releases, see the Release
Notes
or subscribe to the Release Notes XML
feed .
If you are a new user, see Set Up in the Google Cloud
Console
to start the installation process. If you are an existing customer, see the
upgrade instructions at
Versions .
5.0.0
Breaking
The following previously deprecated fields have been removed:
ADDRESS - use FORMATTED_ADDRESS instead.
ICON_URL - use ICON_MASK_URL instead.
LAT_LNG - use LOCATION instead.
NAME - use DISPLAY_NAME instead.
PHONE_NUMBER - use INTERNATIONAL_PHONE_NUMBER instead.
USER_RATINGS_TOTAL - use USER_RATING_COUNT instead.
WHEELCHAIR_ACCESSIBLE_ENTRANCE - use ACCESSIBILITY_OPTIONS instead.
For more information on alternate fields, see Place Data Fields (New) .
5.0.0
Breaking
In accordance with the Mobile OS version support policy , we are freezing support for Android 6.0 (API levels 23 and below) as of Places SDK for Android v5.0.0. The new minSDK is Android 7.0 (API level 24). Earlier Places SDK versions will continue supporting Android 6.0.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support Android 6.0.
Specify a version of the Places SDKs for Android in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
5.0.0
Breaking
The previously deprecated AutocompleteFragment class has been removed. Use AutocompleteSupportFragment instead.
5.0.0
Breaking
Apps that use the Places SDK for Android must now enable Java 8 library support.
For more information, see https://developer.android.com/studio/write/java8-support .
5.0.0
Breaking
The following previously deprecated methods have been removed from the Place class, along with their associated Place.Builder methods:
getAddress() - use getFormattedAddress() instead.
getIconUrl() - use getIconMaskUrl() instead.
getLatLng - use getLocation() instead.
getName() - use getDisplayName() instead.
getNameLanguageCode() - use getDisplayNameLanguageCode() instead.
getPhoneNumber() - use getInternationalPhoneNumber() instead.
getTypes() - use getPlaceTypes() instead.
getUserRatingsTotal() - use getUserRatingCount() instead.
getWheelchairAccessibleEntrance() - use getAccessibilityOptions() instead.
5.0.0
Deprecated
The following Places SDK (Legacy) APIs are now deprecated:
Places.initialize() — use Places.initializeWithNewPlacesApiEnabled() instead.
PlacesClient.findCurrentPlace() and the associated request and response classes — use PlacesClient.searchNearby() instead.
PlacesClient.fetchPhoto() and the associated request and response classes — use PlacesClient.fetchResolvedPhotoUri() instead.
The Places API (Legacy) autocomplete widget — migrate to Place Autocomplete (New) to use the Autocomplete (New) widget , or get place predictions programmatically .
AutocompleteActivityMode
PlacesClient.awaitFindCurrentPlace() and the associated request class
PlacesClient.awaitFetchPhoto() and the associated request class
5.0.0
Feature
The following Generative AI summary fields are now available:
GENERATIVE_SUMMARY
NEIGHBORHOOD_SUMMARY
REVIEW_SUMMARY
EV_CHARGE_AMENITY_SUMMARY
5.0.0
Feature
The following classes and methods are now available:
ConsumerAlert
getVisitDate()
getFlagContentUri()
5.0.0
Feature
You can now define custom themes to modify the styling of both the Autocomplete (New) Place Autocomplete widget and the UI Kit Basic Place Autocomplete component . For more information, see Custom Styling .
July 16, 2025
4.4.1
Feature
Full Place Details available in Places UI Kit Place Details component
The Places UI Kit Place Details component now allows you to display full
information about a place. See the full documentation
4.4.1
Announcement
Release 4.4.1
The Places SDK for Android version 4.4.1 is now available. For information about
this release, and for all previous releases, see the Release
Notes
or subscribe to the Release Notes XML
feed .
If you are a new user, see Set Up in the Google Cloud
Console
to start the installation process. If you are an existing customer, see the
upgrade instructions at
Versions .
4.4.1
Feature
Places UI Kit Basic Place Autocomplete component
The Places UI Kit Autocomplete component allows you to customize the look, feel,
and content of a full-screen search bar that provides autocomplete results as a
user types. See the full documentation .
4.4.1
Feature
Places UI Kit Place Search component
The Places UI Kit Place Search component allows you to customize the look, feel,
and content of the place card generated by a search by text or search nearby
request. See the full documentation .
May 28, 2025
4.3.1
Feature
The Place Autocomplete widget is now available for Autocomplete (New) .
4.3.1
Feature
The Place Details UI Kit is now in General Availability.
4.3.1
Issue
Apps that use the Places SDK for Android 4.3.1 fail to build if the Material Components for Android are not included as a dependency. To resolve this issue, add the components as a dependency in your module-level build.gradle file:
dependencies {
implementation ' com . google . android . libraries . places : places : 4.3.1 '
implementation ' com . google . android . material : material : 1.12.0 '
}
4.3.1
Announcement
Release 4.3.1
The Places SDK for Android version 4.3.1 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
March 19, 2025
4.2.0
Announcement
Release 4.2.0
The Places SDK for Android version 4.2.0 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
4.2.0
Issue
Apps configured with both minifyEnabled and coreLibraryDesugaringEnabled set to true may encounter a java.lang.NoSuchMethodException: j$.time.Instant.getNano crash. This issue is specific to release builds and has been fixed in version 4.3.1 of the Places SDK for Android.
To resolve this crash, please upgrade your Places SDK dependency to version 4.3.1.
4.2.0
Issue
Apps that use the Places SDK for Android 4.2.0 fail to build if the Material Components for Android are not included as a dependency. To resolve this issue, add the components as a dependency in your module-level build.gradle file:
dependencies {
implementation ' com . google . android . libraries . places : places : 4.2.0 '
implementation ' com . google . android . material : material : 1.12.0 '
}
4.2.0
Feature
The Place Details UI Kit for Place Details, now available as an Experimental feature, allows you to add an individual UI component that displays place details to your app.
For more information, see Places UI Kit: Place Details (Experimental) .
December 06, 2024
4.1.0
Feature
AppCheck is now available in the Places SDK for Android. AppCheck allows you to add another layer of security for your Google Maps Platform credentials.
For more information, see the AppCheck overview .
November 12, 2024
4.1.0
Announcement
Release 4.1.0
The Places SDK for Android version 4.1.0 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
4.1.0
Feature
Search Along Route features are now available, which allow you to search for places along predefined routes and calculate routing summaries to places in the search results.
For more information, see the Search Along Route overview .
4.1.0
Feature
The Places SDK (New) now supports 104 new types, which can be used to filter results in Autocomplete (New), Nearby Search (New), and Text Search (New) requests and are returned in the API response.
For a complete list of supported types, see Place Types (New) .
September 18, 2024
4.0.0
Feature
Native Kotlin APIs are now available for the Places SDK for Android.
For more information, including reference documentation see the Reference Overview .
4.0.0
Feature
New Place data fields are now available.
For a complete list of new fields, see Migrate to the new Place data fields in the Places SDK for Android 4.0 .
4.0.0
Breaking
In accordance with the Mobile OS version support policy , we are freezing support for Android 5 (API levels 22 and below) as of Places SDK for Android v4.0.0. The new minSDK is Android 5 (API level 23). Earlier Places SDK versions will continue supporting Android 5.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support Android 5.
Specify a version of the Places SDKs for Android in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
4.0.0
Deprecated
Several of the Place data fields are now deprecated and have been replaced by new fields.
For a complete list of deprecated fields and their replacements, see Migrate to the new Place data fields in the Places SDK for Android 4.0 .
4.0.0
Breaking
Apps that use the Places SDK for Android now must now enable Java 8 library support.
For more information, see https://developer.android.com/studio/write/java8-support .
4.0.0
Announcement
Release 4.0.0
The Places SDK for Android version 4.0.0 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
May 28, 2024
3.5.0
Announcement
Release 3.5.0
The Places SDK for Android version 3.5.0 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
3.5.0
Feature
The new features added to Places SDK for Android use a new pricing model. For pricing information for all new features, see Places SDK for Android (New) .
3.5.0
Feature
The new version of Autocomplete is now available. Autocomplete (New) returns place predictions in response to user search queries. For more information, see Autocomplete (New) .
3.5.0
Feature
Nearby Search is now available in the Places SDK for Android. A Nearby Search (New) request takes as input the region to search specified as a circle, defined by the latitude and longitude coordinates of the center point of the circle and the radius in meters. For more information, see Nearby Search (New) .
3.5.0
Change
isOpen() can now access results from Places Details (New) . If Place Details (New) is enabled, the isOpen() request uses the Place Details (New) result. Otherwise, it uses the Place Details result. The result from both services is the same, but the pricing is different. For more information, see Places SDK for Android Usage and Billing .
3.5.0
Change
Session tokens and session pricing are now supported for the Places SDK (New). For more information, see Session tokens .
3.5.0
Change
Places SDK for Android version 3.5.0 requires a minimum of Kotlin 1.8.0. You can ensure that your Kotlin dependencies meet this minimum by updating the dependencies section of your module-level build.gradle file to add the kotlin-bom dependency:
dependencies {
implementation ( platform ( "org.jetbrains.kotlin:kotlin-bom:1.8.0" ))
implementation ' com . google . android . libraries . places : places : 3.5.0 '
}
For more information on the kotlin-bom dependency, see Usage of the latest kotlin-stdlib version in transitive dependencies .
March 19, 2024
3.4.0
Announcement
Release 3.4.0
The Places SDK for Android version 3.4.0 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
3.4.0
Feature
Places SDK for Android version 3.4.0 supports two SDK versions: the existing Places SDK for Android and Places SDK for Android (New) , the next generation version of the SDK.
The new features added in version 3.4.0 are all part of Places SDK for Android (New) , so you must use that SDK to access the new features.
Your first task is to decide which SDK to use. This is true if you are a new customer or an existing customer already using the SDK. To learn the key differences between the two SDK versions, see Choose your SDK version .
Note: If you are an existing customer and are using session tokens, continue using the existing SDK. Places SDK for Android (New) does not currently support session tokens.
3.4.0
Feature
The Places SDK for Android added support for retrieving photo URIs for a place, along with the existing ability to retrieve photo bitmaps. For more information, see Place Photos .
3.4.0
Change
Places SDK for Android version 3.4.0 requires a minimum of Kotlin 1.8.0. You can ensure that your Kotlin dependencies meet this minimum by updating the dependencies section of your module-level build.gradle file to add the kotlin-bom dependency:
dependencies {
implementation ( platform ( "org.jetbrains.kotlin:kotlin-bom:1.8.0" ))
implementation ' com . google . android . libraries . places : places : 3.4.0 '
}
For more information on the kotlin-bom dependency, see Usage of the latest kotlin-stdlib version in transitive dependencies .
3.4.0
Feature
SKU: Place Details (Location Only) is a Preview feature that contains fields that were previously included in SKU: Place Details (Basic) . Usage during Preview is at no charge.
For more information, see SKU: Place Details (Location Only) .
November 14, 2023
3.3.0
Announcement
Release 3.3.0
The Places SDK for Android version 3.3.0 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
3.3.0
Feature
Places SDK for Android version 3.3.0 supports two SDK versions: the existing Places SDK for Android and Places SDK for Android (New) , the next generation version of the SDK.
The new features added in v3.3.0 are all part of Places SDK for Android (New) , so you must use that SDK to access the new features.
Your first task is to decide which SDK to use. This is true if you are a new customer or an existing customer already using the SDK. To learn the key differences between the two SDK versions, see Choose your SDK version .
Note: If you are an existing customer and are using session tokens, continue using the existing SDK. Places SDK for Android (New) does not currently support session tokens.
3.3.0
Feature
The Places SDK for Android (New) adds the AuthorAttributions field to the PhotoMetadata class used by Place Photos . You must use Places SDK for Android (New) to be able to access author attributions.
The PhotoMetadata object returned by Place.getPhotoMetadas() can contain one or more author attributions represented by a List of AuthorAttribution objects.
3.3.0
Feature
Added Text Search , which returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street". You must use Places SDK for Android (New) to be able to use Text Search.
3.3.0
Feature
Place Details now includes the new Review class and the new language code for the name string in the response Place object. You must use Places SDK for Android (New) to be able to access these new fields.
Use the new Place.getReviews() method to return up to five reviews for a place.
Use the new Place.getNameLanguageCode() method to access the language code.
For more information, see Place Details .
3.3.0
Feature
New place type values are now available. You must use Places SDK for Android (New) to be able to access new type values.
Use the new Place.getPlaceTypes() method to access these new types.
3.3.0
Issue
If you run into errors for "Missing classes detected while running R8", please add the following rules to your existing keep rules in proguard-rules.pro :
-dontwarn io.grpc.internal.DnsNameResolverProvider
-dontwarn io.grpc.internal.PickFirstLoadBalancerProvider
3.3.0
Change
Places SDK for Android version 3.3.0 requires a minimum of Kotlin 1.8.0. You can ensure that your Kotlin dependencies meet this minimum by updating the dependencies section of your module-level build.gradle file to add the kotlin-bom dependency:
dependencies {
implementation ( platform ( "org.jetbrains.kotlin:kotlin-bom:1.8.0" ))
implementation ' com . google . android . libraries . places : places : 3.3.0 '
}
For more information on the kotlin-bom dependency, see Usage of the latest kotlin-stdlib version in transitive dependencies .
3.3.0
Deprecated
New place type values have been added in v3.3.0. You must use Places SDK for Android (New) to be able to access new type values.
These new type values are not accessible by the existing Place.getTypes() method. Place.getTypes() in the Places SDK for Android
is deprecated as of v3.3.0.
Instead, use Place.getPlaceTypes() .
The minimum version of the Places SDK for Android with Place.getPlaceTypes() is v3.3.0.
July 05, 2023
3.2.0
Announcement
Release 3.2.0
The Places SDK for Android version 3.2.0 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
3.2.0
Deprecated
To clarify which class provides supported String constants for filtering Place Autocomplete predictions, the TypeFilter class in the Places SDK for Android
is deprecated as of v3.2.0.
Instead, use PlaceTypes . For more information, see Filter results by place type or type collection .
The minimum version of the Places SDK for Android with PlaceTypes is v2.7.0. The v2.7.0 release notes have been amended to clarify that the deprecated methods in v2.7.0 should use PlaceTypes instead of TypeFilter .
3.2.0
Feature
Place Details now supports the following new Atmosphere Data Field , which contains a summary of a place up to 150 characters in length:
Place.Field.EDITORIAL_SUMMARY
The Place class now contain the following new methods to support this field:
getEditorialSummary()
getEditorialSummaryLanguageCode()
April 13, 2023
3.1.0
Announcement
Release 3.1.0
The Places SDK for Android version 3.1.0 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
3.1.0
Deprecated
To simplify filtering results by country, the following methods in the Places SDK for Android are deprecated as of v3.1.0:
FindAutocompletePredictionsRequest.Builder.setCountry(String countryCode)
Autocomplete.setCountry(String country)
AutocompleteSupportFragment.setCountry(String country)
FindAutocompletePredictionsRequest.getCountry()
Instead, use the following methods. The minimum version of the Places SDK for Android with the following methods is v2.2.0:
FindAutocompletePredictionsRequest.Builder.setCountries(List<String> countries)
Autocomplete.IntentBuilder.setCountries(List<String> countries)
AutocompleteSupportFragment.setCountries(List<String> countries)
FindAutocompletePredictionsRequest.getCountries()
3.1.0
Deprecated
To provide a more convenient method for checking on open status of a place, Place.isOpen()
is deprecated as of v3.1.0. Instead, use PlacesClient.isOpen() . The minimum version of the Places SDK for Android with PlacesClient.isOpen() is v3.1.0.
For more information on PlacesClient.isOpen() , see Get open status .
3.1.0
Feature
Place Details now supports the following new Basic Data Field :
Place.Field.WHEELCHAIR_ACCESSIBLE_ENTRANCE
And the following new Atmosphere Data Fields :
Place.Field.RESERVABLE
Place.Field.SERVES_BEER
Place.Field.SERVES_BREAKFAST
Place.Field.SERVES_BRUNCH
Place.Field.SERVES_DINNER
Place.Field.SERVES_LUNCH
Place.Field.SERVES_VEGETARIAN_FOOD
Place.Field.SERVES_WINE
3.1.0
Feature
The following methods have been added to Place :
getCurrentOpeningHours() returns a place's hours of operation over the next seven days. The time period starts at midnight on the date of the request and ends at 11:59 pm six days later.
getSecondaryOpeningHours() returns a place's secondary hours of operation over the next seven days. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as secondary hours.
December 12, 2022
3.0.0
Announcement
Release 3.0.0
The Places SDK for Android version 3.0.0 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
3.0.0
Breaking
According to the Mobile OS version support policy , we are freezing support for Android 4 (API levels 20 and below) as of Places SDK for Android v3.0.0. The new minSDK is Android 5 (API level 21). Earlier Places SDK versions will continue supporting Android 4.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support Android 4.
Specify a version of the Places SDKs for Android in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
3.0.0
Feature
Place Details now supports four new Atmosphere Data Fields :
Place.Field.TAKEOUT
Place.Field.DELIVERY
Place.Field.DINE_IN
Place.Field.CURBSIDE_PICKUP
Added new Place.BooleanPlaceAttributeValue class that defines the values of these new place attribute fields.
November 01, 2022
2.7.0
Announcement
Release 2.7.0
The Places SDK for Android version 2.7.0 is now available. For information about this release, and for all previous releases, see the Release Notes or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
2.7.0
Deprecated
To provide expanded support for filtering Place Autocomplete by multiple place types, the following are deprecated as of v2.7.0:
AutocompleteSupportFragment.setTypeFilter(TypeFilter typeFilter)
FindAutocompletePredictionsRequest.Builder.setTypeFilter(TypeFilter typeFilter)
Autocomplete.IntentBuilder.setTypeFilter(TypeFilter typeFilter)
Instead, use:
AutocompleteSupportFragment.setTypesFilter(List<String> placeTypes)
FindAutocompletePredictionsRequest.Builder.setTypesFilter(List<String> placeTypes)
Autocomplete.IntentBuilder.setTypesFilter(List<String> placeTypes)
The minimum version of the Places SDK for Android with setTypesFilter(List<String> placeTypes) is v2.7.0.
2.7.0
Feature
Added the setTypesFilter(List<String> placeTypes) method to AutocompleteSupportFragment , FindAutocompletePredictionsRequest.Builder , and Autocomplete.IntentBuilder . Use this method to specify up to five values to restrict results from a Place Autocomplete request.
For more information, see Filter results by place type or type collection .
2.7.0
Change
If your app does not use PlacesClient.findCurrentPlace() , you must now explicitly remove both the
ACCESS_FINE_LOCATION and ACCESS_COARSE_LOCATION permissions. In previous releases, you only had to remove ACCESS_FINE_LOCATION .
For more information, see Current Place .
2.7.0
Fixed
122841340 : When you call Places.initialize(Context, String, Locale) and the specified Locale is different from the device's locale, the autocomplete widget now localizes both the search hint and the search results based on the setting of Locale . If you omit Locale , then it uses the device's locale.
March 31, 2022 - v2.6.0
Features
The Place.isOpen()
method now considers the value of
Place.Field.BUSINESS_STATUS
and Place.Field.UTC_OFFSET
to compute its return value.
To ensure accurate results from the Place.isOpen() method, request the
Place.Field.BUSINESS_STATUS field and the Place.Field.UTC_OFFSET
field in your original place request.
If the returned Place object contains Place.Field.BUSINESS_STATUS with a
value of CLOSED_PERMANENTLY or CLOSED_TEMPORARILY , Places.isOpen() returns
false . If Place.Field.BUSINESS_STATUS was not requested or is unavailable,
Places.isOpen() assumes that the business is operational.
Deprecation
Places SDK for Android Version 2.6.0 is the last version that supports
the equivalent Places SDK for Android compatibility library.
If you are using the compatibility library to access Places SDK for Android
features or data, we recommend that you follow the
migration guide
to use the Places SDK for Android directly before the release of
Places SDK for Android Version 2.7.0. The compatibility library
will not be supported above Version 2.6.0.
October 18, 2021 - Freezing support for API Level 23, 24 and 25
In response to changes in our internal dependencies, Android API Level 23,
24, and 25 (Android 6, 7.0 and 7.1) will not be supported in new versions of the
Places SDK for Android beginning in the third quarter of 2022.
Places SDK for Android versions released beginning in the third
quarter of 2022 will only support devices running a minimum of
Android API Level 26.
App versions built with v2.x or lower of the Places SDK for Android
will continue to work on devices running Android API Level 25 and below.
Be sure to specify a version
in your application's build dependencies in order to control when you raise
the minimum supported OS for new versions of your app.
October 14, 2021 - v2.5.0
Features
Added new Place fields
( iconBackgroundColor and iconURL ) to allow for rendering icons that
indicate the place (POI) type.
Improvements
Added @RecentlyNonNull and @RecentlyNullable annotations. This change
will cause warnings on null safety violations, and provides better Kotlin
interoperability and better static null checking for apps that use Java null
checking frameworks.
Autocomplete widgets now have debouncing when typing quickly.
Volley dependency updated to 1.2.1 in observation of the sunset of JCenter .
Bug fixes
Fixed a bug where the Autocomplete widget was resetting the text query in
some cases.
September 16, 2020 - v2.4.0
API changes
Added getters to request builders and model builders, for better Kotlin
interoperability.
Bug Fixes
Fixes an issue where the autocomplete search box would unexpectedly clear.
May 26, 2020 - v2.3.0
New Features
Added BusinessStatus
field and mask for FetchPlace
and FindCurrentPlace .
April 21, 2020 - Plus code support in Place Autocomplete
Place Autocomplete now supports plus codes . This change
is supported for all versions.
February 3, 2020 - v.2.2.0
New Features
Place Autocomplete response now returns the distance in meters from each
supported prediction, based on the specified origin (LatLng) in programmatic
predictions requests . See the blog
post to learn
more about this enhancement.
Place Autocomplete now supports filtering by multiple countries
(up to five).
November 4, 2019 - v.2.1.0
New Features
Added ability to create AutocompleteSupportFragment programmatically with a
static newInstance method.
AutocompleteSupportFragment.newInstance returns a new autocomplete
fragment with default config.
AutocompleteSupportFragment setters now return the instance so the setters
can be chained in a builder-like fashion.
Resolved Issues
Resolved issue where empty AddressComponent types incorrectly threw
IllegalStateException . Some address components legitimately have no types.
Resolved issue where the autocomplete widget would lose its state on
configuration change, for example, from portrait to landscape layout.
Resolved issue where findCurrentPlace may crash when there are too many access
points nearby.
Known Issues
Our dependency on FragmentFactory is implemented by AndroidX, but our
javadocs believe it is implemented by the Support Libraries.
July 17, 2019 - v.2.0.0
Incompatible Changes
Changed from support library to AndroidX .
For details, see the migration guide .
Features
Adds two new methods to Place :
Place.getUtcOffsetMinutes() returns the UTC offset for a place, in
minutes.
Place.isOpen() and Place.isOpen(long utcTimeMillis) return a boolean
indicating whether the place is currently open.
Added Autcomplete.IntentBuilder.setHint(String hint) to allow changing the
hint text for the search box.
Improvements
Autocomplete API behavior has changed: All leading whitespace will be
removed, and trailing whitespace will be replaced with a single space. This
helps to conserve on network requests by using previously cached responses when
user types in extra whitespace (e.g “Google ”).
Dependency on Glide has been removed, resulting in a smaller APK size.
April 1, 2019 - v.1.1.0
API changes
minSDKVersion is increased from 14 to 16.
New Features
Added support for AddressComponents to the Place object (with the exception
of findCurrentPlace() ).
Improvements
Improved model class validation (e.g OpeningHours.getWeekdayText() may not
contain empty or null values).
Removed Maven dependency on Guava resulting in reduced app size.
Resolved issues
Resolved proguard issue that caused OpeningHours.Builder and
AutocompletePrediction.builder.setPlaceTypes() to be stripped from the AAR,
and Place.Builder.autoBuild() to not be stripped from the AAR.
The AutocompleteActivity editText has been updated to manually request focus
(required on API level 28).
Made all collections in models classes immutable.
Added support for restoring AutocompleteActivity state on config changes.
January 29, 2019 - v.1.0
Features
The Places SDK for Android is now distributed via a standalone static
library, to enable more frequent updates and quicker bug fixes.
Added a compatibility library to help with migration from the previous
Android library, to the new and improved library.
Added the ability to programmatically set/replace API keys.
Added support for cancelling requests.
Added support for using fields to enable specifying the types of place data
to return.
The Place object can now return the total number of reviews for each place.
The Place object now returns business opening hours.
Added support for Plus codes . Plus codes are short
codes that provide an address for every location in the world, even in
areas where traditional street addresses don't exist.
Place autocomplete now supports session-based billing.
June 14, 2018
Enabled the new basemap style for the Place Picker. This applies to all
versions of the Places SDK for Android. See the
blog post
for more information about the new style.
September 2016 - v.9.6
Added the
setCountry
method to restrict the scope of a Places autocomplete request to a single
country.
Bug fixes and improvements to the Place Picker and Autocomplete Widget.
August 2016 - v.9.4
The Places API now includes a redesigned
Place Picker UI that implements the
principles of material design.
December 17, 2015
This release adds the autocomplete widget ,
a search dialog with built-in autocomplete functionality. As a user enters
search terms, the widget presents a list of predicted places to choose from.
Autocomplete functionality has also been added to the place picker .
September 24, 2015
This release adds three new methods to
AutocompletePrediction ,
giving you easy access to the primary and secondary parts of the place
description as well as the full text of the description. This is useful, for
example, when you want to display a short title followed by further detail
about the place. See the
sample code on GitHub .
The new methods are as follows:
getFullText(CharacterStyle matchStyle)
returns the full text of a place description. This is a
combination of the primary and secondary text. Example:
" Eiffel Tower, Avenue Anatole France, Paris, France ".
This method is equivalent to the existing getDescription() method. In
addition, it lets you highlight the sections of the description that match
the search with a style of your choice, using
CharacterStyle .
The CharacterStyle parameter is optional. Set it to null if you don't
need any highlighting.
getPrimaryText(CharacterStyle matchStyle)
returns the main text describing a place. This is usually
the name of the place. Examples: " Eiffel Tower ", and
" 123 Pitt Street ".
getSecondaryText(CharacterStyle matchStyle) returns the subsidiary text
of a place description.
This is useful, for example, as a second line when showing autocomplete
predictions. Examples: " Avenue Anatole France, Paris, France ", and
" Sydney, New South Wales ".
Accompanying the above improvement, the following methods on
AutocompletePrediction ,
are now deprecated:
getDescription() is now deprecated. Please use getFullText() ,
getPrimaryText() , and/or getSecondaryText() to retrieve the full or
partial description,
getMatchedSubstrings() is now deprecated. Please use getFullText()
to format matches more easily.
The upcoming release of Android (Android M) introduces a new model for
handling permissions, which streamlines the process for users when they
install and upgrade apps. Provided you're using version 8.1 or later of
Google Play services, you can configure your app to target the Android M SDK
and use the new permissions model. To learn more, see
Working
with System Permissions .
August 13, 2015
Added support for retrieving and displaying Place Photos .
April 28, 2015
Added a getAttributions() method on
PlaceBuffer .
You now need to display third-party attributions if your app uses a
PlaceBuffer by calling
get place by ID . See the
attributions guide for details.
March 2015
This is the first release of the Places SDK for Android,
included as part of the Google Play services SDK.
Features
Help your customers explore where they are and what’s around them:
Use the built-in place picker UI widget, allowing users to
select a place on an interactive map.
Get the current place , that is, the place where the device
is last known to be located.
Retrieve and display rich
information about a place .
Make it easy to enter place names and addresses, by
autocompleting your users' queries as they type.
Add a place to Google's Places database, for retrieval
immediately from within your own app and for visibility to other apps after
moderation.
Improve the map around you by reporting the presence of a
device at a particular place.
Store the unique place ID for one or more places, and use the
ID to retrieve place information on demand.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The Places SDK for Android release notes detail new features, bug fixes, and deprecations across various versions. Key updates include the introduction of Search Along Route, Nearby Search, and Autocomplete features, along with new place types and fields. Support for older Android versions was dropped, and Java 8 and Kotlin 1.8.0 became minimum requirements. Filtering methods for Autocomplete were enhanced, and place data fields were deprecated and replaced. Additional features like AppCheck integration, session token pricing, and the ability to retrieve place photos were introduced.\n"]]

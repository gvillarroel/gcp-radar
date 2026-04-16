---
title: "Places SDK for iOS release notes \_|\_ Google for Developers"
url: https://developers.google.com/maps/documentation/places/ios-sdk/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/ios-sdk/release-notes
source_metadata:
  url: https://developers.google.com/maps/documentation/places/ios-sdk/release-notes
  title: "Places SDK for iOS release notes \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
iOS
Places SDK for iOS
Resources
Send feedback
Places SDK for iOS release notes
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Google Places SDK for iOS has added Swift Package Manager support, App Check Token support, and a native Swift interface (Preview) for various Place APIs.
The minimum iOS version support has been raised to 15 for the latest releases of the SDK, with iOS 14 support frozen and previous versions (iOS 13 and older) no longer supported.
The Places SDK introduced 104 new place types, reorganized its API reference with Swift documentation, and combined its GitHub repositories for better developer experience.
Several updates were made to existing features like Place Details API, Place Photos API, Nearby Search API, and Autocomplete API, including bug fixes and performance improvements.
While the Places SDK is evolving, features like the Place Picker have been deprecated and replaced with newer solutions like Autocomplete.
This page is updated with each product release. The changelog lists releases by date and includes
any new features, bug fixes and significant performance improvements.
You can also browse and filter all release notes for all products in the
Google API Console .
To subscribe to these release notes, add the feed URL of this page to your RSS feed
reader .
Consult the Getting Started documentation for information on how to
download the most recent version of the Places SDK for iOS.
April 07, 2026
10.12.0
Announcement
The Places SDK for iOS version 10.12.0 is now available . See the Release
Notes
for information about this release and for all previous releases or subscribe to
the Release Notes XML
feed .
If you are a new user, see Set Up in the Google Cloud
Console
to start the installation process. If you are an existing customer, see the
upgrade instructions at
Versions .
10.12.0
Feature
New fields added to provide more comprehensive place details.
You can now include the following in your FetchPlaceRequest to retrieve additional information:
PlaceProperty.addressDescriptor : Returns a relational description of the location, including landmarks and areas.
PlaceProperty.containingPlace : Returns other notable places that contain the requested place.
PlaceProperty.postalAddress : Returns the place's address in a structured PostalAddress format.
PlaceProperty.priceRange : Returns the price range of the place.
PlaceProperty.timeZone : Returns the time zone of the place.
10.12.0
Feature
Enhanced Photo metadata.
The Photo object now also provides links:
flagContentURL : Flags the photo content.
googleMapsURL : Allows the photo to be viewed directly on Google Maps.
February 24, 2026
10.10.0
Announcement
The Places SDK for iOS version 10.10.0 is now available . See the Release
Notes
for information about this release and for all previous releases or subscribe to
the Release Notes XML
feed .
If you are a new user, see Set Up in the Google Cloud
Console
to start the installation process. If you are an existing customer, see the
upgrade instructions at
Versions .
10.10.0
Feature
Search Along Route features are now available, which allow you to search for
places along predefined routes and calculate routing summaries to places in the
search results.
For more information, see the Search Along Route
overview .
10.10.0
Feature
More Place data fields are now available, including: outdoorSeating ,
liveMusic , menuForChildren , servesCocktails , servesDessert ,
servesCoffee , goodForChildren , allowsDogs , restroom ,
goodForGroups , goodForWatchingSports , accessibilityOptions ,
fuelOptions , and paymentOptions .
See the Place data fields
documentation for more
information.
10.10.0
Feature
Google Maps links now appear in Place results, a Directions URL in route summary, and a Search URL in text search response.
January 27, 2026
10.8.0
Announcement
The Places SDK for iOS version 10.8.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
10.8.0
Change
All Google Maps SDKs for iOS now require you to build with Xcode version 26
December 18, 2025
Feature
Places UI Kit customization tool. Create custom, cross-platform, Place
Details configurations using our tool. You can use toggles to create your
configuration, or upload an image to have Gemini get you started. Access the
tool .
November 20, 2025
10.6.0
Announcement
The Places SDK for iOS version 10.6.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
10.6.0
Feature
Pagination is now supported in Place Search results . See the documentation .
10.6.0
Feature
Autocomplete session token exposure . You can now expose your Places Autocomplete session token in order to pass it to other services that are not a part of the Places SDK for iOS, such as to Address Validation . See the documentation .
October 02, 2025
10.4.0
Announcement
The Places SDK for iOS version 10.4.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
10.4.0
Feature
EV charge and parking options added to place attributes.
GMSPlaceEVChargeOptions class.
GMSPlaceParkingOptions class.
10.4.0
Feature
AI summaries added to place attributes.
GMSPlaceAISummary protocol.
GMSPlaceEVChargeAmenitySummary class.
GMSPlaceGenerativeSummary class.
GMSPlaceNeighborhoodSummary class.
GMSPlaceReviewSummary class.
10.4.0
Feature
Review visit date and Place consumer alert added to place attributes.
Visit month and year added to GMSPlaceReview class.
GMSPlaceConsumerAlert class.
GMSPlaceConsumerAlertDetails class.
August 18, 2025
Deprecated
CocoaPods is in maintenance mode as of 8/18/2025 and we won't release more versions of CocoaPods after Q2 2026. Use Swift Package Manager instead. See the installation page for information about using Swift Package Manager.
July 16, 2025
10.1.0
Feature
Full Place Details available in Places UI Kit Place Details component . The Places UI Kit Place Details component now lets you display full information about a place. See the full documentation .
10.1.0
Feature
Places UI Kit Basic Place Autocomplete component . The Places UI Kit Basic Place Autocomplete component lets you customize the look, feel, and content of a full-screen search bar that provides autocomplete results as a user types. See the full documentation .
10.1.0
Feature
Places UI Kit Place Search component . The Places UI Kit Place Search component lets you customize the look, feel, and content of the place card generated by a search by text or search nearby request. See the full documentation .
July 14, 2025
10.1.0
Feature
The Places SDK for iOS version 10.1.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
10.1.0
Feature
Pure Service Area Business attribute. The Pure Service Area Business attribute indicates whether a place is a pure service area business, and includes these businesses in search by text and autocomplete results.
A pure service area business is a business that visits or delivers to customers directly, but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses may not have a physical address or location on Google Maps.
See the full documentation:
Search by text
Autocomplete
May 28, 2025
10.0.0
Announcement
The Places SDK for iOS version 10.0.0 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
10.0.0
Breaking
According to the Mobile OS version support policy , we are freezing support for iOS 15 as of Places SDK for iOS v10.0.0. The new minimum supported OS is iOS 16. Earlier SDK versions will continue supporting iOS 15.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support iOS 15.
Specify a version of the Places SDK for iOS in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
10.0.0
Feature
The Place Autocomplete widget is now available for Autocomplete (New) .
10.0.0
Feature
The Places Swift SDK for iOS has moved from Preview to GA status . See the documentation for more information and migration instructions.
See the Google Maps Platform launch stage descriptions .
10.0.0
Feature
The Place Details UI Kit is now in General Availability.
10.0.0
Announcement
The new minimum version of Xcode is 16.0.
March 21, 2025
9.4.1
Change
The Places SDK for iOS version 9.4.1 is now available . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
9.4.1
Feature
Place Details UI Kit . The Place Details UI Kit allows you to add an individual UI component that displays place details to your app. See the full documentation .
March 17, 2025
9.4.0
Announcement
The Places SDK for iOS version 9.4.0 is now available. This version is functionally identical to v9.3.0. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
January 27, 2025
9.3.0
Announcement
The Places SDK for iOS version 9.3.0 is now available. This version is functionally identical to v9.2.0. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
9.3.0
Fixed
Swift Preview no longer breaks when the Places SDK for iOS is added using Swift Package Manager.
December 06, 2024
9.2.0
Feature
App check token support. You can now use Firebase App Check to protect against malicious requests. See the documentation for more information and integration instructions.
November 11, 2024
9.2.0
Announcement
The Places SDK for iOS version 9.2.0 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
9.2.0
Feature
New place types. Places API (New) supports 104 new types, which can be used to filter results in Autocomplete (New), Nearby Search (New), and Text Search (New) requests and are returned in the API response.
For a complete list of supported types, see Place Types (New) .
9.2.0
Change
Updated API reference. The look and organization of the Places SDK for iOS API reference has changed, and we've added documentation in Swift.
Note: The URLs for the API references pages have changed, so any pages you may have bookmarked will redirect you to the API reference homepage.
Visit the new API references:
Swift
Objective-C
9.2.0
Change
Access Google Places and Google Places Swift from the same Github repository. The Google Places and Google Places Swift Packages are now available through the same GitHub repository, https://github.com/googlemaps/ios-places-sdk . Use this GitHub repository to access either or both SDKs. The repository that was dedicated to GooglePlacesSwift will soon be deprecated. See the documentation for details and migration instructions.
Note: You can get version 0.3.0 of the Places Swift SDK for iOS by adding the 9.2.0 version of the Places SDK for iOS repository.
August 21, 2024
9.1.0
Announcement
The Places SDK for iOS version 9.1.0 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed.
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
9.1.0
Feature
This release introduces a new GMSPlacesClient.isOpenWithRequest:callback: API. The API gets all necessary details to determine a Place's open status and returns that status. See the documentation .
9.1.0
Feature
(Preview) Places Swift SDK for iOS version 0.2.0 is now available . This release introduces a preview of the PlacesClient isPlaceOpen(with request:) API for the Places Swift SDK for iOS (GooglePlacesSwift) . The API gets all necessary details to determine a Place's open status and returns that status.
Note: You can get version 0.2.0 of the Places Swift SDK for iOS by adding the 9.1.0 version of the Places SDK for iOS repository.
May 28, 2024
9.0.0
Announcement
Release 9.0.0
The Places SDK for iOS version 9.0.0 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed.
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
9.0.0
Announcement
This release includes the Preview release of GooglePlacesSwift version 0.1.0. GooglePlacesSwift lets you use a fully native Swift interface to call Place APIs, including:
Place Autocomplete (New)
Place Details (New)
Place Photos (New)
Text Search (New)
Nearby Search (New)
You can get version 0.1.0 of the Places Swift SDK for iOS by adding the 9.0.0 version of the Places SDK for iOS repository.
For more information, see the documentation and the GooglePlacesSwift API Reference .
GooglePlacesSwift requires:
You to enable Places API (New) on your API Key. For more information, see Set up your Google Cloud project .
Xcode 15.3
Note: GooglePlacesSwift is in Preview (pre-GA). Pre-GA products and features might have limited support, and changes to pre-GA products and features might not be compatible with other pre-GA versions. Pre-GA Offerings are covered by the Google Maps Platform Service Specific Terms . For more information, see the launch stage descriptions .
9.0.0
Announcement
According to the Mobile OS version support policy , we are freezing support for iOS 15 in an upcoming major version of Maps, Places, and Navigation SDKs for iOS.
Versions of Maps, Places, and Navigation SDKs for iOS released beginning the second quarter of 2025 will support a minimum of iOS 16. Earlier SDK versions will continue supporting iOS 15.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support iOS 15.
Specify a version of the Maps, Places, and Navigation SDKs for iOS in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
9.0.0
Breaking
According to the Mobile OS version support policy , we are freezing support for iOS 14 as of Places SDK for iOS v9.0.0. The new minimum supported OS is iOS 15. Earlier SDK versions will continue supporting iOS 14.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support iOS 14.
Specify a version of the Places SDK for iOS in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
9.0.0
Feature
The new features added to Places SDK for iOS use a new pricing model. For pricing information for all new features, see Places SDK for iOS (New) .
9.0.0
Feature
The Apple Privacy Manifest file is now included in the resources bundle for the SDK. For more information, see Inspect the privacy manifest file .
9.0.0
Feature
The new version of the Place Details API , is now available. Place Details provides your app with rich information about places, including the place's name and address, the geographical location specified as latitude/longitude coordinates, the type of place (such as night club, pet store, and museum), and more.
9.0.0
Feature
Nearby Search API is now available. A Nearby Search (New) request takes as input the region to search specified as a circle, defined by the latitude and longitude coordinates of the center point of the circle and the radius in meters.
9.0.0
Feature
The new version of the Place Photos API , is now available. Use Place Photos to request place photos to display in your application. Photos returned by the photos service come from a variety of sources, including business owners and user-contributed photos.
9.0.0
Feature
The new version of the Autocomplete API , is now available. Autocomplete returns place predictions in response to user search queries.
April 01, 2024
8.5.0
Announcement
Release 8.5.0
The Places SDK for iOS version 8.5.0 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed.
If you are a new user, see Set up your Google Cloud project to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
8.5.0
Feature
The new version of the Text Search API , is now available. Text Search returns information about a set of places based on a string — for example "pizza in New York" or "shoe stores near Ottawa" or "123 Main Street". You must use Places SDK for Android (New) to be able to use Text Search.
8.5.0
Announcement
The new minimum supported version of Xcode is 15.0.
February 05, 2024
8.4.0
Announcement
Release 8.4.0
Issues with the Places SDK build has caused us to abandon the scheduled 8.4.0 release. The latest version remains v.8.3.0 . See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
December 14, 2023
8.3.0
Announcement
Release 8.3.0
Infrastructure update . The Places SDK for iOS now supports Swift Package Manager .
Using Xcode's Swift Package Manager integration, you can add or update the Places SDK dependency directly from Xcode. Select the version of the Places SDK for iOS that you want to use. For new projects, Google recommends you specify the latest version and use the option
To learn how to add the Places SDK for iOS to a project through Swift Package Manager, see the Set up an Xcode project guide.
November 14, 2023
8.3.0
Announcement
Release 8.3.0
The Places SDK for iOS version 8.3.0 is now available. Version bump, no changes . This version is functionally identical to v.8.2.1. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
September 14, 2023
8.2.1
Change
Release 8.2.1
The Places SDK for iOS version 8.2.1 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
8.2.1
Fixed
Fixes a bug when using GMSPlaceSpecialDay . The app may fail to build.
September 05, 2023
8.2.0
Change
Release 8.2.0
The Places SDK for iOS version 8.2.0 is now available. Version bump, no changes . This version is functionally identical to v.8.1.0. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
July 24, 2023
8.1.0
Feature
New currentOpeningHours and secondaryOpeningHours fields that take holiday and temporary changes in schedule for a place. Also introduces a new isOpen API to fetch these fields and return the open status based on a specific time.
8.1.0
Announcement
Release 8.1.0
The Places SDK for iOS version 8.1.0 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
8.1.0
Feature
New editorialSummary Place field that provides a simple description of a place.
May 17, 2023
8.0.0
Breaking
According to the Mobile OS version support policy , we are freezing support for iOS 13 as of Places SDK for iOS v8.0.0. The new minimum supported OS is iOS 14. Earlier SDK versions will continue supporting iOS 13.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support iOS 13.
Specify a version of the Places SDK for iOS in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
8.0.0
Deprecated
In order to provide expanded functionality for filtering place results by multiple types and countries, the property type of GMSAddressComponent and the properties type and country of GMSAutocompleteFilter are deprecated as of v8.0.0 , and will be unsupported in the major version that will be released in the second quarter of 2024.
Instead, use the following replacement properties:
types property in the GMSAddressComponent class . The minimum version of the Places SDK for iOS with types property in the GMSAddressComponent class is v3.1.0.
types property in the GMSAutocompleteFilter class . The minimum version of the Places SDK for iOS with types property in the GMSAutocompleteFilter class is v7.1.0.
countries property in the GMSAutocompleteFilter class . The minimum version of the Places SDK for iOS with countries property in the GMSAutocompleteFilter class is v3.8.0.
8.0.0
Announcement
Release 8.0.0
The Places SDK for iOS version 8.0.0 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
May 15, 2023
7.4.0
Announcement
Freezing support for iOS 14
According to the Mobile OS version support policy , we are freezing support for iOS 14 in an upcoming major version of Places SDK for iOS.
Versions of Maps SDK for iOS released beginning the second quarter of 2024 will support a minimum of iOS 15. Earlier SDK versions will continue supporting iOS 14.
If your dependencies do not specify a version number, your IDE will load the newest SDK version and new builds of your app will not support iOS 14.
Specify a version of the Places SDK for iOS in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
February 27, 2023
7.4.0
Announcement
Release 7.4.0
The Places SDK for iOS version 7.4.0 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
7.4.0
Feature
Feature
Place Details now supports eight new Atmosphere Data Fields and one new Basic Data Field .
GMSPlaceFieldReservable
GMSPlaceFieldServesBreakfast
GMSPlaceFieldServesLunch
GMSPlaceFieldServesDinner
GMSPlaceFieldServesBeer
GMSPlaceFieldServesWine
GMSPlaceFieldServesBrunch
GMSPlaceFieldServesVegetarianFood
GMSPlaceFieldWheelchairAccessibleEntrance
January 12, 2023
7.3.0
Announcement
Release 7.3.0
The Maps SDK for iOS version 7.3.0 is now available. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
7.3.0
Feature
Place Details now supports four new Atmosphere Data Fields :
GMSPlaceFieldTakeout
GMSPlaceFieldDelivery
GMSPlaceFieldDineIn
GMSPlaceFieldCurbsidePickup
Added new GMSBooleanPlaceAttribute enumeration that defines the values of the place attribute fields.
7.3.0
Change
Places SDK framework installation with CocoaPods now includes built-in support for XCFramework . This framework allows developers to build code for Xcode Simulator on M1 Macs.
November 03, 2022
7.2.0
Announcement
Release 7.2.0
The Places SDK for iOS version 7.2.0 is now available. Version bump, no changes . This version is functionally identical to v.7.1.0. See the Release Notes for information about this release and for all previous releases or subscribe to the Release Notes XML feed .
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
August 29, 2022
7.1.0
Announcement
Release 7.1.0
The Places SDK for iOS version 7.1.0 is now available. See the Release Notes for information about this release and for all previous releases.
If you are a new user, see Set Up in the Google Cloud Console to start the installation process.
If you are an existing customer, see the upgrade instructions at Versions .
7.1.0
Feature
Added the new types property to the GMSAutocompleteFilter class. Specify up to five values to the types property to restrict results from a Place Autocomplete request.
For more information, see Filter results by place type or type collection .
August 15, 2022
7.0.0
Announcement
Freezing support for iOS 13 - August 15, 2022
According to the Mobile OS version support policy ,
we are freezing support for iOS 13 in an upcoming major version of
Maps and Places SDKs for iOS.
Versions of Maps and Places SDKs for iOS that release beginning the second quarter
of 2023 will support a minimum of iOS 14. Earlier SDK versions will continue
supporting iOS 13.
If your dependencies do not specify a version number, your IDE will load the
newest SDK version and new builds of your app will not support iOS 13.
Be sure to specify a version
in your application's build dependencies in order to control when you raise the
minimum supported OS for new versions of your app.
7.0.0
Announcement
With this release of the Places SDK for iOS, we have moved the XML feed to a new location. Subscribe to the new location of the XML feed at:
https://developers.google.com/feeds/places-sdk-ios-release-notes.xml
Version 7.0 - June 27, 2022
Support freezes
Support for iOS 12 is now frozen. The minimum iOS version is now 13.0.
The new minimum version of Xcode is 13.0.
Note: Carthage does not currently support libraries built targeting a minimum
version of iOS 13 and later. That means the latest supported version of
the Places SDK for iOS is 6.2.1.
Version 6.2.1 - May 9, 2022
Features
Version bump with no feature changes. This version is functionally identical
to v.6.2.0.
Version 6.2.0 - April 25, 2022
Features
Version bump with no feature changes. This version is functionally identical
to v.6.1.1.
Version 6.1.1 - March 22, 2022
Features
Version bump with no feature changes. This version is functionally identical
to v.6.1.0.
Version 6.1.0 - March 9, 2022
Features
Version bump with no feature changes. This version is functionally identical
to v.6.0.0.
Version 6.0.0 - November 29, 2021
Features
(Beta) This release contains a preview of support for the XCFramework format.
You can now install
the Places SDK for iOS as an XCFramework, a binary package that you
can use on multiple platforms including machines using the M1 chipset.
Google recommends that you only use this Beta release for development and testing,
and rely on the .framework version of the SDK for your production apps.
Support freezes
Support for iOS 11 is now frozen. The minimum iOS version is now 12.0.
The new minimum version of Xcode is 12.0.
Freezing support for iOS 12 - October 18, 2021
In response to changes in our internal dependencies, we are freezing support for
iOS 12 in an upcoming major version of Places SDK for iOS.
Versions of Places SDK for iOS released beginning the second quarter
of 2022 will support a minimum of iOS 13. Earlier SDK versions will continue
supporting iOS 12.
If your dependencies in CocoaPods or Carthage do not specify a version number,
Xcode will load the newest version and new builds of your app will not support iOS 12.
Be sure to specify a version in your application's build dependencies in order to control when you raise the minimum supported OS for new versions of your app.
See the guidance on app maintenance best practices .
Freezing support for iOS 11 - July 20, 2021
In response to changes in our internal dependencies, we are freezing
support of iOS 11 in an upcoming major version of Google Maps Platform
SDKs for iOS. Earlier SDK versions will continue supporting iOS 11.
Versions of Places SDK for iOS released beginning the fourth quarter
of 2021 will support a minimum of iOS 12.
If your dependencies in CocoaPods or Carthage do not specify a version number,
Xcode will load the newest version and new builds of your app will stop supporting iOS 11.
Be sure to specify a version
in your application's build dependencies in order to control when you raise the
minimum supported OS for new versions of your app. See the guidance on
app maintenance best practices .
Version 5.1.0 - September 22, 2021
Features
Added new Place fields ( iconBackgroundColor and iconImageURL ) to allow
for rendering icons that indicate the place (POI) type.
Version 5.0.0 - May 13, 2021
Support freezes
Support for iOS 10 is now frozen. The minimum iOS version is now 11.0.
Deprecations
ARMv7 32-bit architecture no longer supported.
GMSCoordinateBounds is deprecated, replaced by GMSPlacesViewportInfo .
Improvements
The Places SDK for iOS is no longer dependant on the
GoogleMapsBase framework.
Version 4.2.0 - March 8, 2021
Version bump, no changes. This version is functionally identical to v.4.1.0.
Changes are coming in version 5.0.0:
Support for iOS 10.0 will be dropped in version 5.0.0.
The viewport property in Place Details will change in version 5.0.0.
To avoid unexpected errors, be sure to specify a version number
in your Podfile or Cartfile. This will ensure that your builds remain
stable against a known version, and will not switch to the next major
version until you are ready to update your code.
Version 4.1.0 - December 8, 2020
Features:
Fixed an issue where the autocomplete widget background color was not
correctly flipped when in Dark Mode.
Version 4.0.0 - October 13, 2020
Deprecations
Support for iOS 9.0 has been dropped. The new minimum is iOS 10.0.
The new minimum version of Xcode is 11.7.
The deprecated openNowStatus property in GMSPlace is no longer supported.
Instead, call the functions
isOpen or isOpenAtDate
on the GMSPlace object. To use these replacement functions, specify
GMSPlaceFieldOpeningHours and GMSPlaceFieldUTCOffsetMinutes in the
Place Autocomplete
or
Place Details
request.
The deprecated autocompleteBounds and autocompleteBoundsMode
properties in GMSAutocompleteViewController are no longer supported.
See release notes from v3.9.0 for alternatives.
The deprecated initWithBounds:filter
method in GMSAutocompleteFetcher is no longer supported.
See release notes from v3.10.0 for the alternative.
The deprecated setAutocompleteBoundsUsingNorthEastCorner:SouthWestCorner helper
method in GMSAutocompleteViewController ,
GMSAutocompleteResultsViewController ,
and GMSAutocompleteTableDataSource ,
is no longer supported.
See release notes from v3.10.0 for the alternative.
GMSPlaceField now uses the NS_OPTIONS macro instead of NS_ENUM for
better Swift support. Read more about Migrating to GMSPlaceField as NS_OPTIONS .
Summary of deprecated iOS SDK replacement methods .
The maximum supporting version for the above deprecated properties, methods and macro is
v3.10.0 .
Version 3.10.0 - August 10, 2020
Note:
To build apps using the Places SDK for iOS, the current minimum IDE
version supported is Xcode 11.5.
Features
There is a new Places Swift Demo App in GooglePlaces cocoapods.
Deprecations
The setAutocompleteBoundsUsingNorthEastCorner:SouthWestCorner helper
method in GMSAutocompleteViewController ,
GMSAutocompleteResultsViewController ,
and GMSAutocompleteTableDataSource ,
is deprecated.
Instead, use locationBias
or locationRestriction in the GMSAutocompleteFilter class.
The initWithBounds:filter
method is deprecated.
Instead, use
initWithFilter:
in GMSAutocompleteFetcher.h .
Version 3.9.0 - May 26, 2020
Features
GMSPlace.BusinessStatus
is a new property that returns the current operational status for businesses
(operational, closed temporarily, or closed permanently). This new property is
returned if you make a place details request, and include the
GMSPlaceFieldBusinessStatus
field.
Plus codes are now supported in the autocomplete APIs, and will return plus
codes suggestions include the GMSPlaceFieldPlusCode
field.
Deprecations
The GMSCoordinateBounds class is deprecated.
Instead, use locationBias
or locationRestriction in the GMSAutocompleteFilter class. This applies to both the programmatic
API as well as the Autocomplete Widget API. For more details, see the
deprecations page .
Bug fixes
locationBias
and locationRestriction properties in GMSAutocompleteFilter are now directly accessible in Swift.
Version 3.8.2 - May 18, 2020
Version bump, no changes. This version is functionally identical to v.3.8.0.
Version 3.8.0 - February 18, 2020
Features:
Location Bias/Restriction support added to GMSAutocompleteFilter .
Place Autocomplete now supports filtering by multiple countries
(up to five).
Note:
To build apps using the Places SDK for iOS, the current minimum IDE version supported is Xcode 11.0.
Version 3.7.0 - December 2, 2019
Features:
Autocomplete Predictions (GMSAutocompletePrediction.h) now return the
straight-line distance in meters from the optionally specified location
origin property in the Autocomplete Filter (GMSAutocompleteFilter.h). Call
distanceMeters on the GMSAutocompletePrediction instance to get this value.
If the origin property is not set, no distance value will be returned.
Version 3.6.0 - October 29, 2019
Note:
Added local caching for UIImages fetched using loadPlacePhoto:callback
such that calling the method twice in a row returns the same UIImage .
Version 3.5.0 - October 08, 2019
Note:
<GooglePlaces/GooglePlaces.h> no longer transitively includes classes from
GoogleMapsBase.h, so if you use the GMSCoordinateBounds class in your code,
you must now #import <GoogleMapsBase/GoogleMapsBase.h> as well.
Version 3.4.0 - September 04, 2019
Version bump, no changes. This version is functionally identical to v.3.3.0.
Version 3.3.0 - July 29, 2019
Features:
Added a new field
GMSPlaceFieldUTCOffsetMinutes to GMSPlace , to represent the UTC offset in minutes for the timezone of the place.
Added a new method
isOpen
to GMSPlace , to query whether the place is currently open.
Added a new method
isOpenAtDate
to GMSPlace , to query whether the place is open at the specified date.
Improvements:
Programmatic autocomplete now trims blank space from query text, as with the
Autocomplete widget.
Resolved issues:
Fixed an occasional scrolling glitch in the autocomplete results view (this
would occur when the device orientation changed).
Version 3.2.0 - July 8, 2019
Improvements:
findAutocompletePredictionsFromQuery API now accepts a nil value for the
GMSAutocompleteSessionToken parameter , if the user does not want to be billed
by session.
Autocomplete widget no longer returns "no results" for leading
whitespaces.
Smaller binary sizes.
Version 3.1.0 - April 16, 2019
Improvements
GMSAddressComponents API.
Now returns an array of types associated with each address component.
Deprecates the older singular type in favor of the new array of types.
Improved Error Handling
Common error messages are now returned from the server back to clients.
Resolved issues
Fixed inaccurate references of Places API in public facing code.
Version 3.0.2 - January 31, 2019
Resolved issues
The GooglePlaces sample has been fixed.
Version 3.0.0 - January 29, 2019
Features
Added support for using fields to enable specifying the types of place data
to return.
The Place object can now return the total number of reviews for each place.
The Place object now returns business opening hours.
Added support for Plus codes . Plus codes are short
codes that provide an address for every location in the world, even in
areas where traditional street addresses don't exist.
Place autocomplete now supports session-based billing.
Deprecated features
The Place Picker is deprecated as
of January 29, 2019. This feature will be turned off on July 29, 2019, and
will no longer be available after that date.
The openNowStatus property is no longer supported, and should not be used.
Support for iOS 8.0 has been dropped. The new minimum is iOS 9.0.
Place Picker Old Style Removed - November 1, 2018
Features:
Removed support for the old basemap style for the Place Picker. The opt-in
and opt-out API options (see below) are no longer supported. This applies to
all versions of the Places SDK for iOS. See the
blog post
for more information about the new style.
Place Picker New Style Default - June 28, 2018
Features:
Enabled the new basemap style for the Place Picker by default. You can still
opt-out temporarily if you need time to modify your app to accommodate the
new style. If you do, please follow Issue 72853629 which contains the
timeline for end of support of the previous basemap style. We will be
posting updates there as they are available.
To opt-out, use the code snippet
below. The best place to do this in your app is right after providing your
API key, via GMSServices provideAPIKey . You must be using at least
Version 2.6.0 in order to opt-out. If you had previously opted-in to the new
basemap style, this should replace the code you added to opt-in. See the
blog post
for more information about the new style.
NSArray * options = @[ @"B3H9HE845CFHYG" ] ;
BOOL didSetApiOptions = [ GMSServices provideAPIOptions : options ];
NSLog (@ “ Options were set : % d ” , didSetApiOptions );
Version 2.7.0 - April 2018
Note:
Support for Xcode 8.0 has been dropped. The new minimum is Xcode 9.0.
Place Picker New Style Opt-In - February 2018
Features:
Enabled opt-in to the new basemap style for the Place Picker. To opt-in,
use the code snippet below. The best place to do this in your app is right
after providing your API key, via GMSServices provideAPIKey .
You must be using at least Version 2.6.0 in order to opt-in. See the blog
post
for more information about the new style.
NSArray * options = @[ @"B3MWHUG2MR0DQW" ] ;
BOOL didSetApiOptions = [ GMSServices provideAPIOptions : options ];
NSLog (@ “ Options were set : % d ” , didSetApiOptions );
Version 2.6.0 - February 2018
Improvements:
Updated the Place Picker default marker to match the new Google Maps
marker.
Note:
- Updated for compatibility with GoogleMaps/GooglePlacePicker 2.6.0
Version 2.5.0 - October 2017
Improvements:
Added boundsMode to the Autocomplete APIs to enable bounds restriction.
( Issue 38188941 .)
Improved iOS 11 & iPhone X support.
Fixed UI layout issues in the Place Picker when used on iOS 11.
Resolved Issues:
Fixed an issue where Xcode 9's Main Thread Checker warns that [UIApplication
applicationState] is being called on a background thread.
( Issue 64469528 .)
Note: Support for Xcode 7.3 has been dropped. The new minimum is Xcode 8.0.
Version 2.4 - August 2, 2017
Note:
- The Add Place feature is deprecated as of June 30, 2017. This feature will
be turned down on June 30, 2018, and will no longer be available after that
date. Note:
- The armv7s architecture in the frameworks has been removed. Devices which
previously used armv7s are still supported using the armv7 architecture.
All applications using the default architecture settings in any supported
version of Xcode should not notice any change. Note:
- The layout of the static frameworks has changed. There is no longer a
Versions directory. The contents of Versions/A has been moved to the root
directory of the framework. Developers who manually integrate frameworks
with their project should take additional care during the upgrade. Note:
- Support for Xcode 7.3 will be dropped with 2.5.0.
Version 2.3.1 - June 19, 2017
Resolved Issues
Fixed an issue resulting in a crash when receiving photos for certain
places. ( Issue 36575500 .)
Version 2.3 - May 30, 2017
Features
Expanded the number of scenarios where you can use the place picker with the
addition of GMSPlacePickerViewController. The old GMSPlacePicker is now
deprecated.
Improvements
Dropped support for iOS 7, which enabled the use of modern core data
threading models. This means that applications should be able to use
-com.apple.CoreData.ConcurrencyDebug 1 when debugging with iOS 10 devices.
Note:
- The armv7s architecture in the frameworks will be removed in 2.4. Devices
which previously used armv7s can continue to be supported using the armv7
architecture. All applications using the default architecture settings
in any supported version of Xcode shouldn't notice any change.
Version 2.2 - February 14, 2017
Resolved Issues
Fixes an issue where the Place Picker viewport was not being centered
correctly ( Issue 11206 .)
Fixes an issue where the Autocomplete error delegate method was not called
in all conditions.
Note:
- iOS 7 support is intended to be dropped starting with 2.3. 2.2.x will be
the last release series to support iOS 7.
Version 2.1.1 - November 8, 2016
Resolved Issues
Fixes an issue which caused rotation of the place picker to move the marker.
Reduces the timeout on calls to currentPlace(callback:) to match Android
( Issue 10563 .)
Version 2.1 - September 22, 2016
Resolved Issues
Added workaround for the userEmail triggering false positives during
submission to the Apple app store ( Issue 10508 .)
Errors returned from lookUpPlaceID(_:callback:) now have the correct error
domain and codes.
Small fixes to RTL support in the place picker.
Minor reliability improvements for the autocomplete widget and place picker.
Version 2.0.1 - July 29, 2016
Resolved Issues
Array properties are now correctly typed when accessed from Swift.
( Issue 10183 .)
Version 2.0.0 - July 26, 2016
Improvements
This release splits the Places API from the Maps SDK. Previously, if you
wanted to use the Places API you had to include all of GoogleMaps. As a
result of the split, the final size of the Places API binary is 70% smaller
than the previous combined binary. If you are using only the Maps SDK you
will not be affected unless you have pinned your dependency on GoogleMaps
to a version earlier than 2.0. In this case, you should update this
restriction in your Podfile. If you are using the Places API, see
Migrating to Places SDK for iOS .
Places SDK demos are now available
separately from Maps demo apps.
Resolved Issues
The Places framework is now available as a download for manual installation.
For details, see Get Started .
( Issue 8856 .)
The Places API no longer requests permission to access the user's location
on behalf of the app. This means that existing code which calls
GMSPlacesClient.currentPlaceWithCallback(_:) must be updated to ensure that
the location permission has been granted beforehand.
Version 1.13.2 - May 12, 2016
Resolved Issues
Added a workaround to avoid the false positive for the non-public API
imageWithName: selector. ( Issue 9704 .)
Version 1.13.1 - May 02, 2016
Resolved Issues
Fixed an application hang when using a UIView with autolayout enabled as an info
window or as a marker iconView. ( Issue 9525 .)
Changed lookUpPlaceID to not call its callback twice in error scenarios.
( Issue 9310 .)
Version 1.13.0 - March 29, 2016
Features
Autocomplete widgets in the Places API now provide options for custom styling.
UIView based markers. Marker content can now show advanced animations by
providing a custom view hierarchy to be displayed through the iconView property.
See the documentation for details.
( Issue 5203 .)
Info windows can now have their custom views animated. Set tracksInfoWindowChanges
on the associated marker to YES to enable real-time updates. ( Issue 5559 .)
Map rendering now defaults to 60fps on modern iOS devices. Set the new
preferredFrameRate property on GMSMapView to revert to the old behavior
(Conservative) or a new low frame rate option to save battery (PowerSave).
( Issue 5066 .)
Added mapViewSnapshotReady: to GMSMapViewDelegate which fires when map content,
including markers and other overlays, has been fully rendered.
Resolved Issues
GMSAutocompleteViewController now works when used in a storyboard.
Added missing Place Type constants. ( Issue 8121 .)
GMSCoordinateBounds initWithVisibleRegion: now chooses correct bounds for large
viewports.
Added a workaround to avoid a graphical glitch in snapshots taken using pre iOS 7
methods when the My Location button is disabled. ( Issue 9173 .)
Version 1.12.3 - February 2016
Resolved Issues
Fixed corruption in included bitcode that caused Xcode archive action to fail.
( Issue 9368 .)
Added a workaround for a limitation in Xcode 6.4 which was failing to compile
the included headers.
Version 1.12.2 - February 2016
Features
Added place photos to the Places API. ( Issue 8202 .)
Added structured address components to GMSPlace objects. ( Issue 8121 .)
SDK method signatures have been updated with generics and nullability annotations.
Resolved Issues
GMSPlace objects now contain rating and price level where available.
Minor bugfixes for the autocomplete widget UI.
panoramaView:didMoveCamera: is no longer raised during the panoramaView delegate
setter. ( Issue 5630 .)
Old unused logo files have been removed from the SDK. ( Issue 9148 .)
Tap events on polygons near the anti-meridian are more reliable.
Resolved an issue resulting in unrecognized selector crashes when calling
class methods on categories. ( Issue 9000 .)
Version 1.12.1 - February 2016
This version is exactly the same as 1.11.1. It was released to replace the
removed 1.12.0 release.
Version 1.12.0 - February 2016
This version was removed because of errors in the framework and should not be
used.
Version 1.11.1 - December 2015
Resolved Issues
Modally presented Place Autocomplete widgets now correctly respect
UINavigationBar appearance proxy settings.
Resolved minor UI issues with the Place Autocomplete widgets.
Updated GoogleMaps.bundle info.plist to avoid triggering checks in
pre-submission verification. ( Issue 8488 .)
Version 1.11.0 - December 2015
Features
Bitcode is now included in the SDK binary for all device architectures.
( Issue 8219 .)
Added Place Autocomplete widget classes.
New events for long press on an info window, and closing an info window, have
been added to GMSMapViewDelegate.
GMSMapViewDelegate has new events to indicate when map tiles and labels are
pending and finished rendering. ( Issue 5430 .)
GMSPanoramaViewDelegate has new events to indicate when panorama tiles are
pending and finished rendering. ( Issue 5430 .)
GMSGroundOverlay now supports an alpha multiplier via the opacity property.
Added a holes property to GMSPolygon to allow for the subtraction away from
the filled area in order to create more complex shapes. ( Issue 5464 .)
At zoom levels greater than 14, the maximum tilt has been increased.
( Issue 5169 .)
Added an autocomplete screen to the Place Picker.
Split autocomplete predictions into primary and secondary text fields.
Added a country filter option to GMSAutocompleteFilter.
Added a viewport field to GMSPlace.
Resolved Issues
Correct handling of taps on overlapping markers. ( Issue 7587 ,
Issue 8591 .)
Address a race condition dependent crash which can happen when an application
enters and leaves the background while showing a map. ( Issue 7011 .)
Fix blank maps which can happen when launching an app into the background.
( Issue 8510 .)
Workaround issues with core animation that caused markers to jump.
( Issue 8451 .)
Updated to avoid subtle conflicts with applications which use
google-toolbox-for-mac.
Use the iPhone language instead of the region formatting language for Places
API results ( Issue 8536 .)
Notes
- Setting GMSMapView selectedMarker to a marker not on the map is now ignored,
always set the marker's map property before attempting to select it.
Version 1.10.5 - October 2015
Resolved Issues
Worked around an issue in the Swift compiler's handling of umbrella header
module entries. ( Issue 8524 .)
Version 1.10.4 - October 2015
Resolved Issues
Fixed a crash on iOS 9 when dismissing the place picker without a selection.
( Issue 8672 .)
Fixed a crash when using both a GMSMapView and a UIWebView or WKWebView in
the view hierarchy at the same time. ( Issue 8343 .)
Recompiled with Xcode 7 to avoid raising failed to load optimized model log
messages on iOS 9 devices. ( Issue 8459 .)
Version 1.10.3 - September 21, 2015
Features:
Google logos have been updated.
Resolved Issues:
Framework now ships with the device version of bundles to pass Xcode 7
archive checks. ( Issue 8568 .)
Version 1.10.2 - August 25, 2015
Resolved Issues:
Fixed a crash releasing a map view while in background. ( Issue 8200 .)
Resolved a conflict with apps using gtm-session-fetcher resumable downloads.
Recompiled with Xcode 6.4 to avoid some bugs in Xcode 6.3 compiler.
Updated GoogleMaps.bundle info.plist to avoid triggering new checks in
pre-submission verification. ( Issue 8488 .)
Version 1.10.1 - June 10, 2015
Resolved Issues
Fixed an issue where instantiating GMSPlacesClient triggered a request to
the user to enable Bluetooth on the device.
Miscellaneous improvements to the GMSPlacePicker UI.
Version 1.10.0 - May 28, 2015
This is the first fully-public release of the Places SDK for iOS.
Features
Help your customers explore where they are and what’s around them:
Use the built-in [place picker][place-picker] UI widget, allowing users to
select a place on an interactive map.
Get the current place , that is, the place where the device
is last known to be located.
Retrieve and display rich
information about a place .
Store the unique place ID for one or more places, and use the
ID to retrieve place information on demand.
Make it easy to enter place names and addresses, by
autocompleting your users' queries as they type.
[Add a place][add-place] to Google's Places database, for retrieval
immediately from within your own app and for visibility to other apps after
moderation.
Improve the map around you by [reporting][report-place] the presence of a
device at a particular place.
Version 1.9.2 - March 2015
Initial public beta release.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],["The Places SDK for iOS release notes detail changes across versions, including new features, bug fixes, and support updates. Key actions include introducing Firebase App Check, adding new place types and APIs like `GMSPlacesClient.isOpenWithRequest:callback:`, and launching GooglePlacesSwift. Support for older iOS versions (10-14) has been dropped, with iOS 15 now the minimum and iOS 15 support planned to be dropped. Other highlights include Swift Package Manager integration, new pricing models, and deprecating older features.\n"]]

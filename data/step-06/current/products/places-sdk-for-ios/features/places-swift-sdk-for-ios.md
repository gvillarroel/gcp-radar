---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.467Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Places Swift SDK for iOS"
feature_slug: "places-swift-sdk-for-ios"
latest_feature_date: "2025-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/config"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/app-check"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/attributions"
keywords:
  - "places"
  - "swift"
  - "sdk"
  - "for"
  - "ios"
  - "on"
  - "that"
  - "moved"
---

# Places Swift SDK for iOS

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

A Swift SDK for Places on iOS that moved from Preview to General Availability; A Swift SDK for Places on iOS that moved from Preview to General Availability.

## Extended Definition

A Swift SDK for Places on iOS that moved from Preview to General Availability; A Swift SDK for Places on iOS that moved from Preview to General Availability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift](https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift)
- [https://developers.google.com/maps/documentation/places/ios-sdk/config](https://developers.google.com/maps/documentation/places/ios-sdk/config)
- [https://developers.google.com/maps/documentation/places/ios-sdk/app-check](https://developers.google.com/maps/documentation/places/ios-sdk/app-check)
- [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)

## Supporting Pages

### Places Swift SDK for iOS \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift](https://developers.google.com/maps/documentation/places/ios-sdk/google-places-swift)
- Source ID: `site-docs-reference`
- Final score: 423
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Places Swift SDK for iOS is available exclusively in the Places SDK for iOS (New) APIs, which are comprised of the following products: Place Autocomplete (New) Place Details (New) Places UI Kit Place Photos (New) Text Search (New) Nearby Search (New) Migrate from the Places SDK for iOS to the Places Swift SDK for iOS Places Swift SDK for iOS code works alongside older implementations, so your migration can be done incrementally.
- Page Summary outlined flag Places Swift SDK for iOS (Preview) offers a Swift-native experience with benefits like value types, default parameters, optionals, concurrency support, and improved type safety, built upon the existing Places SDK for iOS.
- See the release notes for Places Swift SDK for iOS Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Google Maps Platform Documentation iOS Places SDK for iOS Send feedback Places Swift SDK for iOS Stay organized with collections Save and categorize content based on your preferences.

### Set up an Xcode project \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/config](https://developers.google.com/maps/documentation/places/ios-sdk/config)
- Source ID: `site-docs-root`
- Final score: 341
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is an example that specifies your application target name, and the names of the GooglePlaces and GooglePlacesSwift pods: source 'https://github.com/CocoaPods/Specs.git' platform :ios, '16.0' target 'YOUR APPLICATION TARGET NAME HERE' do pod 'GooglePlaces', '10.12.0' pod 'GooglePlacesSwift', '10.12.0' end Make sure to regularly run pod outdated to detect when there is a newer version to ensure you're always on the latest.
- Step 1: Install the required software To build a project using the Places SDK for iOS, you need: Xcode version 26.0 or later Step 2: Create the Xcode project and install the Places SDK for iOS Swift Package Manager The Places SDK for iOS can be installed via Swift Package Manager .
- If you are updating a version of GooglePlacesSwift that was accessed through the old URL, https://github.com/googlemaps/ios-places-swift-sdk , remove it from your Xcode's package dependencies section.
- If you are updating a version of GooglePlacesSwift that was accessed through the old URL, https://github.com/googlemaps/ios-places-swift-sdk , remove it from your Xcode's package dependencies section.

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/app-check](https://developers.google.com/maps/documentation/places/ios-sdk/app-check)
- Source ID: `site-docs-root`
- Final score: 331
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the following import statements and class definition: Places Swift SDK for iOS // AppCheckTokenProvider.swift import FirebaseAppCheck import Foundation import GooglePlacesSwift struct TokenProvider : AppCheckTokenProvider { func fetchAppCheckToken () async throws - > String { return try await AppCheck . appCheck (). token ( forcingRefresh : false ). token } } Swift // AppCheckTokenProvider.swift import FirebaseAppCheck import Foundation import GooglePlaces class AppCheckTokenProvider : NSObject , GMSPlacesAppCheckTokenProvider { func fetchAppCheckToken () async throws - > String { return try await AppCheck . appCheck (). token ( forcingRefresh : false ). token } } Objective-C // AppCheckTokenProvider.h @import Foundation ; @import GooglePlaces ; @interface AppCheckTokenProvider : NSObject < GMSPlacesAppCheckTokenProvider > @end // AppCheckTokenProvider.m #import "AppCheckTokenProvider.h" @import FirebaseAppCheck ; @implementation AppCheckTokenProvider - ( void ) fetchAppCheckTokenWithCompletion: ( nonnull GMSAppCheckTokenCompletion ) completion { [[ FIRAppCheck appCheck ] tokenForcingRefresh : NO completion : ^ ( FIRAppCheckToken Nullable token , NSError Nullable error ) { if ( token ) { completion ( token . token , nil ); } else { completion ( nil , error ); } }]; } @end Step 4: Initialize the Places and App Check APIs In your AppDelegate file, initialize the Places API: Places Swift SDK for iOS PlacesClient . provideAPIKey ( "YOUR API KEY" ) Swift GMSPlacesClient . provideAPIKey ( "YOUR API KEY" ) Objective-C [ GMSPlacesClient provideAPIKey : @"YOUR API KEY" ]; Then, initialize the App Check API: Places Swift SDK for iOS PlacesClient . setAppCheckTokenProvider ( AppCheckTokenProvider ()) Swift GMSPlacesClient . setAppCheckTokenProvider ( AppCheckTokenProvider ()) Objective-C [ GMSPlacesClient setAppCheckTokenProvider : [[ AppCheckTokenProvider alloc ] init ]]; Step 5: Enable debugging (optional) If you'd like to develop and test your app locally, or run it in a continuous integration (CI) environment, you can create a debug build of your app that uses a debug secret to obtain valid App Check tokens.
- This code sample handles both the debugging and production scenarios: Places Swift SDK for iOS #if targetEnvironment ( simulator ) let providerFactory = AppCheckDebugProviderFactory () #else let providerFactory = YourAppCheckProviderFactory () #endif Swift #if targetEnvironment ( simulator ) let providerFactory = AppCheckDebugProviderFactory () #else let providerFactory = YourAppCheckProviderFactory () #endif Objective-C if ( targetEnvironment == simulator ){ FIRAppCheckDebugProviderFactory providerFactory = [[ FIRAppCheckDebugProviderFactory alloc ] init ]; [ FIRAppCheck setAppCheckProviderFactory : providerFactory ]; } else { YourAppCheckProviderFactory providerFactory = [[ YourAppCheckProviderFactory alloc ] init ]; [ FIRAppCheck setAppCheckProviderFactory : providerFactory ]; } Enable logging on your Xcode project, launch the app, and find the local debug token in the log.
- This code sample handles both the debugging and production scenarios: Places Swift SDK for iOS #if DEBUG let providerFactory = AppCheckDebugProviderFactory () #else let providerFactory = YourAppCheckProviderFactory () #endif AppCheck . setAppCheckProviderFactory ( providerFactory ) Swift #if DEBUG let providerFactory = AppCheckDebugProviderFactory () #else let providerFactory = YourAppCheckProviderFactory () #endif AppCheck . setAppCheckProviderFactory ( providerFactory ) Objective-C #if DEBUG id<FIRAppCheckProviderFactory> providerFactory = [[ FIRAppCheckDebugProviderFactory alloc ] init ]; #else // DEBUG id<FIRAppCheckProviderFactory> providerFactory = [[ YourAppCheckProviderFactory alloc ] init ]; #endif // DEBUG AppCheck . setAppCheckProviderFactory ( providerFactory ) For more information and instructions, see the App Check documentation .
- Note: In step 5 of the Firebase developer documentation , where you add Firebase modules to your AppDelegate file, add the following modules: Places Swift SDK for iOS import FirebaseCore import FirebaseAppCheck import GooglePlacesSwift Swift import FirebaseCore import FirebaseAppCheck import GooglePlaces Objective-C @import FirebaseCore ; @import FirebaseAppCheck ; @import GooglePlaces ; Step 2: Add the App Check library and initialize App Check Firebase provides instructions for each default attestation provider.

### Policies and attributions for Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/attributions](https://developers.google.com/maps/documentation/places/ios-sdk/attributions)
- Source ID: `site-docs-root`
- Final score: 321
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This document lists requirements that are specific to all applications developed with the Places SDK for iOS, including the Place Autocomplete service that is part of that API.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["Applications using the Places SDK for iOS must include a Terms of Use and Privacy Policy, referencing Google's policies.
- Home Products Google Maps Platform Documentation iOS Places SDK for iOS Resources Send feedback Policies and attributions for Places SDK for iOS Stay organized with collections Save and categorize content based on your preferences.
- Page Summary outlined flag To use the Places SDK for iOS, you must display Terms of Use and a Privacy Policy that incorporates Google's policies and discloses the use of Google Maps APIs.


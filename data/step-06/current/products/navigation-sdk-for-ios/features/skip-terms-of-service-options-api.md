---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.311Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Skip Terms of Service Options API"
feature_slug: "skip-terms-of-service-options-api"
latest_feature_date: "2024-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/support"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/reference"
keywords:
  - "skip"
  - "terms"
  - "of"
  - "options"
  - "api"
  - "new"
  - "lets"
  - "developers"
---

# Skip Terms of Service Options API

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

A new options API lets developers present the terms and conditions dialog.

## Extended Definition

A new options API lets developers present the terms and conditions dialog.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/support](https://developers.google.com/maps/documentation/navigation/ios-sdk/support)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup](https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)

## Supporting Pages

### Support Options for Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/support](https://developers.google.com/maps/documentation/navigation/ios-sdk/support)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Since you are the Project Owner for this new project, you have access to Google Maps Platform API support case creation from that new project and can make inquiries about the billing account attached to it.
- Escalation managers can provide additional expertise or better prioritize a case based on business requirements, but they cannot grant exceptions to policies or terms of service.
- Go to the Billing page of the Cloud console to ensure you have a valid billing account and visit the Marketplace to enable an API on your project.
- Enable a Google Maps Platform API from this new project.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference/objc/Classes/GMSMapView)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to enable Metal at https://developers.google.com/maps/documentation/ios-sdk/config#use-metal Declaration Swift func featureLayer ( of featureType : FeatureType ) -> FeatureLayer < PlaceFeature > Objective-C - ( nonnull GMSFeatureLayer < GMSPlaceFeature > ) featureLayerOfFeatureType : ( nonnull GMSFeatureType ) featureType ; -datasetFeatureLayerOfDatasetID: Returns a dataset feature layer of the specified dataset.
- Declaration Swift class func map ( withFrame frame : CGRect , camera : GMSCameraPosition ) -> Self Objective-C + ( nonnull instancetype ) mapWithFrame :( CGRect ) frame camera :( nonnull GMSCameraPosition ) camera ; +mapWithFrame:mapID:camera: Deprecated Use -init or -initWithOptions: instead.
- Declaration Swift convenience init ( frame : CGRect , camera : GMSCameraPosition ) Objective-C - ( nonnull instancetype ) initWithFrame :( CGRect ) frame camera :( nonnull GMSCameraPosition ) camera ; -initWithFrame:mapID:camera: Deprecated Use -init or -initWithOptions: instead.
- Declaration Objective-C + ( nonnull instancetype ) mapWithFrame :( CGRect ) frame mapID :( nonnull GMSMapID ) mapID camera :( nonnull GMSCameraPosition ) camera ; -initWithFrame:camera: Deprecated Use -init or -initWithOptions: instead.

### Set up an Xcode project \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup](https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Step 3: Add your API key to the project The following examples show how to add the API key to your project in Xcode: Swift Add your API key to your AppDelegate.swift as follows: Add the following import statements: import GoogleMaps import GoogleNavigation Add the following to your application( :didFinishLaunchingWithOptions:) method: GMSServices . provideAPIKey ( " YOUR API KEY " ) Objective-C Add your API key to your AppDelegate.m as follows: Add the following import statements: @import GoogleMaps ; @import GoogleNavigation ; Add the following to your application:didFinishLaunchingWithOptions: method: [ GMSServices provideAPIKey : @" YOUR API KEY " ]; Step 4 (optional): Inspect Apple Privacy Manifest file Note: The following is relevant when you deploy your app to the web store.
- If you are creating a purely Objective-C project, you must also create an empty .swift file in your project, or add the following into the Other Linker Flags section of the Xcode project. - L $ ( DEVELOPER DIR ) / Toolchains / XcodeDefault . xctoolchain / usr / lib / swift /$ ( PLATFORM NAME ) To update the API for an existing project, follow these steps: Open a terminal and go to the project directory containing the Podfile .
- Step 1: Install the required software To build a project using the Navigation SDK for iOS, you must download and install: Xcode version 26.0 or later Step 2: Create the Xcode project and install the Navigation SDK Warning: Apple introduced a new linker in Xcode 15 which is not compatible with Navigation SDK when the app's deployment target is iOS 18.0 or later.
- To install a specific version , set the Dependency Rule field to one of the version-based options.

### "GoogleNavigation Framework Reference \_|\_ Navigation SDK for iOS \_|\_\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/reference](https://developers.google.com/maps/documentation/navigation/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift class GMSNavigationTermsAndConditionsOptions : NSObject , NSCopying Objective-C @interface GMSNavigationTermsAndConditionsOptions : NSObject < NSCopying > GMSNavigationTermsDialogUIParams Parameters that describe the look and feel of the dialog.
- Declaration Swift class GMSNavigationSpeedometerUIOptions : NSObject , NSCopying , NSMutableCopying Objective-C @interface GMSNavigationSpeedometerUIOptions : NSObject < NSCopying , NSMutableCopying > GMSNavigationMutableSpeedometerUIOptions The mutable class that encapsulates UI configuration for different severities of speed alerts, represented by GMSNavigationSpeedAlertSeverity .
- Declaration Swift class GMSNavigationSpeedAlertOptions : NSObject , NSCopying , NSMutableCopying Objective-C @interface GMSNavigationSpeedAlertOptions : NSObject < NSCopying , NSMutableCopying > GMSNavigationMutableSpeedAlertOptions A mutable class that defines triggering thresholds for different severities of speed alerts, represented by GMSNavigationSpeedAlertSeverity .
- Declaration Swift class GMSNavigationMutableSpeedAlertOptions : GMSNavigationSpeedAlertOptions Objective-C @interface GMSNavigationMutableSpeedAlertOptions : GMSNavigationSpeedAlertOptions GMSNavigationSpeedometerUIOptions An immutable class that encapsulates UI configuration for different severities of speed alerts, represented by GMSNavigationSpeedAlertSeverity .


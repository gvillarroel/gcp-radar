---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.312Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Apple Privacy Manifest bundle file"
feature_slug: "apple-privacy-manifest-bundle-file"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/carplay"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/support"
keywords:
  - "apple"
  - "privacy"
  - "manifest"
  - "bundle"
  - "file"
  - "the"
  - "sdk"
  - "now"
---

# Apple Privacy Manifest bundle file

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The SDK now includes the Apple Privacy Manifest file in its resources bundle.

## Extended Definition

The SDK now includes the Apple Privacy Manifest file in its resources bundle.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup](https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo](https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/carplay](https://developers.google.com/maps/documentation/navigation/ios-sdk/carplay)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/support](https://developers.google.com/maps/documentation/navigation/ios-sdk/support)

## Supporting Pages

### Set up an Xcode project \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup](https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup)
- Source ID: `site-docs-root`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Apple Privacy Manifest file is included in the resources bundle for the SDK.
- Step 3: Add your API key to the project The following examples show how to add the API key to your project in Xcode: Swift Add your API key to your AppDelegate.swift as follows: Add the following import statements: import GoogleMaps import GoogleNavigation Add the following to your application( :didFinishLaunchingWithOptions:) method: GMSServices . provideAPIKey ( " YOUR API KEY " ) Objective-C Add your API key to your AppDelegate.m as follows: Add the following import statements: @import GoogleMaps ; @import GoogleNavigation ; Add the following to your application:didFinishLaunchingWithOptions: method: [ GMSServices provideAPIKey : @" YOUR API KEY " ]; Step 4 (optional): Inspect Apple Privacy Manifest file Note: The following is relevant when you deploy your app to the web store.
- Add your API key to the project's AppDelegate using GMSServices.provideAPIKey() (Swift) or [GMSServices provideAPIKey:] (Objective-C). (Optional) For App Store deployment, inspect the included Apple Privacy Manifest file and generate a privacy report.
- For details, see the CocoaPods Getting Started guide . sudo gem install cocoapods Create a Podfile for the Navigation SDK for iOS and use it to install the API and its dependencies: If you don't have an Xcode project yet, create one now and save it to your local machine.

### Try the demo \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo](https://developers.google.com/maps/documentation/navigation/ios-sdk/try-demo)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Navigate to the GoogleNavigation repository. cd ios-navigation-sdk-samples/GoogleNavigation/ Open the Xcode project: open GoogleNavSwiftXCFrameworkDemos.xcodeproj Add your own API key to the SDKDemoAPIKey.swift file.
- To run the demo, Xcode must be installed, and the API key added to the SDKDemoAPIKey file.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The Navigation SDK requires a Google Cloud account and an API key enabled by sales.
- Download the demo Clone the code samples repository: git clone https://github.com/googlemaps-samples/ios-navigation-sdk-samples.git You can also view the Swift navigation demo code on GitHub: Configure the demo Follow these steps to configure your demo app.

### "Enable navigation for CarPlay \_|\_ Navigation SDK for iOS \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/carplay](https://developers.google.com/maps/documentation/navigation/ios-sdk/carplay)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Setup Start with CarPlay First, familiarize yourself with the Apple documentation: Apple CarPlay Developer Guide Apple CarPlay Developer PDF Set up the Navigation SDK Once you've read through the Apple documentation, you're ready to work with the Navigation SDK.
- This section describes how you can use the Navigation SDK with the Apple CarPlay library to display your app's navigation experience on in-dash head units .
- Page Summary outlined flag The Google Maps Navigation SDK can be integrated with Apple CarPlay to provide turn-by-turn navigation on a vehicle's display.
- Swift init ( window : CPWindow ) { super . init ( nibName : nil , bundle : nil ) self . window = window // More CPMapTemplate initialization } override func viewDidLoad () { super . viewDidLoad () let mapViewOptions = GMSMapViewOptions () mapViewOptions . screen = window . screen mapViewOptions . frame = self . view . bounds mapView = GMSMapView ( options : mapViewOptions ) mapView . autoresizingMask = [. flexibleHeight , . flexibleWidth ] mapView . settings . isNavigationHeaderEnabled = false mapView . settings . isNavigationFooterEnabled = false // Disable buttons: in CarPlay, no part of the map is clickable. // The app should instead place these buttons in the appropriate slots of the CarPlay template. mapView . settings . compassButton = false mapView . settings . isRecenterButtonEnabled = false mapView . shouldDisplaySpeedometer = false mapView . isMyLocationEnabled = true self . view . addSubview ( mapView ) } Objective-C - ( instancetype ) initWithWindow: ( CPWindow ) window { self = [ super initWithNibName : nil bundle : nil ]; if ( self ) { window = window ; // More CPMapTemplate initialization } } - ( void ) viewDidLoad { [ super viewDidLoad ]; GMSMapViewOptions options = [[ GMSMapViewOptions alloc ] init ]; options . screen = window . screen ; options . frame = self . view . bounds ; mapView = [[ GMSMapView alloc ] initWithOptions : options ]; mapView . autoresizingMask = UIViewAutoresizingFlexibleHeight UIViewAutoresizingFlexibleWidth ; mapView . settings . navigationHeaderEnabled = NO ; mapView . settings . navigationFooterEnabled = NO ; // Disable buttons: in CarPlay, no part of the map is clickable. // The app should instead place these buttons in the appropriate slots of the CarPlay template. mapView . settings . compassButton = NO ; mapView . settings . recenterButtonEnabled = NO ; mapView . shouldDisplaySpeedometer = NO ; mapView . myLocationEnabled = YES ; [ self . view addSubview : mapView ]; } Enable map interaction To ensure driver safety, CarPlay limits screen surface interaction to a series of CPMapTemplateDelegate methods.

### Support Options for Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/support](https://developers.google.com/maps/documentation/navigation/ios-sdk/support)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Ask a new question Report an issue or feature request If you think you may have found a bug, or if you have a feature request that you would like to share with the Google Maps Platform team, please file a bug or feature request in our issue tracker .
- 24 hours on weekdays 24 hours on weekdays Privacy inquiries For questions related to data privacy and protection, you can contact us using the Data Privacy Inquiry Form .
- Community support on Stack Overflow We use the popular programming Q&A website Stack Overflow to field technical questions about the Navigation SDK for iOS.
- Page Summary outlined flag Get community support for the Navigation SDK for iOS through Stack Overflow using the google-nav-sdk+ios and google-maps tags.


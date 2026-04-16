---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.317Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "GMSNavigationMapStyle API"
feature_slug: "gmsnavigationmapstyle-api"
latest_feature_date: "2022-08-29"
deprecation_date: "2022-08-29"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/setup-overview"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/config"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/controls"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup"
keywords:
  - "gmsnavigationmapstyle"
  - "api"
  - "the"
  - "and"
  - "its"
  - "default"
  - "high"
  - "detail"
---

# GMSNavigationMapStyle API

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The GMSNavigationMapStyle API and its default and high-detail enumerators are deprecated because the detailed base map is now enabled by default; deprecated on 2022-08-29.

## Extended Definition

The GMSNavigationMapStyle API and its default and high-detail enumerators are deprecated because the detailed base map is now enabled by default; deprecated on 2022-08-29.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/setup-overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/setup-overview)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/config](https://developers.google.com/maps/documentation/navigation/ios-sdk/config)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup](https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup)

## Supporting Pages

### "Overview and requirements \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/setup-overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/setup-overview)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To use the Navigation SDK for iOS, configure a Google Cloud project with both the Navigation and Maps SDKs for iOS enabled, and obtain an API key.
- Navigation SDK for iOS setup process To set up and start using the Navigation SDK for iOS, you first need to configure your Google Cloud project and obtain an API key that has the Navigation SDK for iOS and the Maps SDK for iOS enabled.
- Note: European Economic Area (EEA) : The default user interface and functionality of the Navigation SDK are deemed fully compliant with the EEA Safety Requirements .
- Then, you can set up your Xcode project by adding both the SDK and your API key.

### "Overview and requirements \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/config](https://developers.google.com/maps/documentation/navigation/ios-sdk/config)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To use the Navigation SDK for iOS, configure a Google Cloud project with both the Navigation and Maps SDKs for iOS enabled, and obtain an API key.
- Navigation SDK for iOS setup process To set up and start using the Navigation SDK for iOS, you first need to configure your Google Cloud project and obtain an API key that has the Navigation SDK for iOS and the Maps SDK for iOS enabled.
- Note: European Economic Area (EEA) : The default user interface and functionality of the Navigation SDK are deemed fully compliant with the EEA Safety Requirements .
- Then, you can set up your Xcode project by adding both the SDK and your API key.

### Modify the navigation UI \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/controls](https://developers.google.com/maps/documentation/navigation/ios-sdk/controls)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- You can toggle the visibility of the navigation header and footer and set its colors programmatically using the following properties: navigationHeaderEnabled — controls whether the navigation header is visible (default is true ). navigationFooterEnabled — controls whether the navigation footer is visible (default is true ). navigationHeaderPrimaryBackgroundColor — sets the primary background color for the navigation header. navigationHeaderSecondaryBackgroundColor — sets the secondary background color for the navigation header.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["The content details UI controls and accessories for map navigation.
- Prompt Visibility API (Experimental) Experimental feature The Prompt Visibility API lets you avoid conflicts between UI elements generated by the Navigation SDK and your own custom UI elements by adding a listener to receive a callback before a Navigation SDK UI element is about to appear and as soon as the element is removed.
- You can configure this option before you fetch the routes by configuring GMSNavigationRoutingOptions , and setting the alternateRoutesStrategy with one of the following enumeration values: Enumeration Value Description GMSNavigationAlternateRoutesStrategyAll Default.

### Set up an Xcode project \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup](https://developers.google.com/maps/documentation/navigation/ios-sdk/xcode-setup)
- Source ID: `site-docs-root`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For details, see the CocoaPods Getting Started guide . sudo gem install cocoapods Create a Podfile for the Navigation SDK for iOS and use it to install the API and its dependencies: If you don't have an Xcode project yet, create one now and save it to your local machine.
- If you are creating a purely Objective-C project, you must also create an empty .swift file in your project, or add the following into the Other Linker Flags section of the Xcode project. - L $ ( DEVELOPER DIR ) / Toolchains / XcodeDefault . xctoolchain / usr / lib / swift /$ ( PLATFORM NAME ) To update the API for an existing project, follow these steps: Open a terminal and go to the project directory containing the Podfile .
- If you are creating a purely Objective-C project, you must also create an empty .swift file in your project, or add the following into the Other Linker Flags section of the Xcode project. - L $ ( DEVELOPER DIR ) / Toolchains / XcodeDefault . xctoolchain / usr / lib / swift /$ ( PLATFORM NAME ) Open Info.plist and add the following key-value pairs: Key: NSLocationWhenInUseUsageDescription ( Privacy - Location When In Use Usage Description ) Value: "This app needs permission to use your location for turn-by-turn navigation." Key: NSLocationAlwaysAndWhenInUseUsageDescription ( Privacy - Location Always and When In Use Usage Description ) Value: "This app needs permission to use your location for turn-by-turn navigation." CocoaPods Deprecated: CocoaPods is in maintenance mode as of 8/18/2025 and we won't release more versions of CocoaPods after Q2 2026.
- For more details, see: Tutorials Navigate a route Listen for navigation evens Code samples and Codelab Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .


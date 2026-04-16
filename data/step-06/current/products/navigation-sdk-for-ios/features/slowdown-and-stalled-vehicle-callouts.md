---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:01.308Z"
product_name: "Navigation SDK for iOS"
product_slug: "navigation-sdk-for-ios"
feature_name: "Slowdown and stalled vehicle callouts"
feature_slug: "slowdown-and-stalled-vehicle-callouts"
latest_feature_date: "2025-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/overview"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/setup-overview"
  - "https://developers.google.com/maps/documentation/navigation/ios-sdk/config"
keywords:
  - "slowdown"
  - "and"
  - "stalled"
  - "vehicle"
  - "callouts"
  - "for"
  - "slowdowns"
  - "vehicles"
---

# Slowdown and stalled vehicle callouts

Product: Navigation SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Callouts for slowdowns and stalled vehicles are disabled, and stalled vehicle voting and reporting are no longer available.

## Extended Definition

Callouts for slowdowns and stalled vehicles are disabled, and stalled vehicle voting and reporting are no longer available.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints](https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/setup-overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/setup-overview)
- [https://developers.google.com/maps/documentation/navigation/ios-sdk/config](https://developers.google.com/maps/documentation/navigation/ios-sdk/config)

## Supporting Pages

### Navigation SDK overview \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/overview)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Leverage the Navigation SDK to support various modes of transportation, including driving, walking, cycling, and two-wheel vehicles, and customize UI elements for a personalized user experience.
- Support various modes of transportation, including driving, walking, cycling, and two-wheel vehicles.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- Integrating navigation into your app lets you provide a superior experience for your users, while applying your own branding and leveraging trip data: Control the end-to-end experience and increase engagement by keeping users within your app during navigation, eliminating the need to switch between apps.

### Manage waypoints \_|\_ Navigation SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints](https://developers.google.com/maps/documentation/navigation/ios-sdk/manage-waypoints)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To do this, set the preference for a stopover on a GMSNavigationMutableWaypoint as shown in the following example: Swift let location = CLLocationCoordinate2D ( latitude : 47.67 , longitude : - 122.20 ) let waypoint = GMSNavigationMutableWaypoint ( location : location , title : "waypoint from location" ) ! waypoint . vehicleStopover = true mapView . navigator ?. setDestinations ([ waypoint ], routingOptions : routingOptions , callback : {...}) Objective-C CLLocationCoordinate2D location = CLLocationCoordinate2DMake ( 47.67 , -122.20 ); GMSNavigationMutableWaypoint waypoint = [[ GMSNavigationMutableWaypoint alloc ] initWithLocation : location title : @"waypoint from location" ]; waypoint . vehicleStopover = YES ; [ mapView . navigator setDestinations : @[ waypoint1 ] routingOptions : routingOptions callback : ^ ( GMSRouteStatus routeStatus ){...}]; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Manage waypoints Stay organized with collections Save and categorize content based on your preferences.
- Set stopover preference In certain places, it's not possible for users to stop safely (for example, elevated areas, ferries, underground locations, and other areas of limited access).

### "Overview and requirements \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/setup-overview](https://developers.google.com/maps/documentation/navigation/ios-sdk/setup-overview)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To use the Navigation SDK for iOS, configure a Google Cloud project with both the Navigation and Maps SDKs for iOS enabled, and obtain an API key.
- Navigation SDK for iOS setup process To set up and start using the Navigation SDK for iOS, you first need to configure your Google Cloud project and obtain an API key that has the Navigation SDK for iOS and the Maps SDK for iOS enabled.
- Set up the Navigation SDK for iOS Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Overview and requirements Stay organized with collections Save and categorize content based on your preferences.

### "Overview and requirements \_|\_ Navigation SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/navigation/ios-sdk/config](https://developers.google.com/maps/documentation/navigation/ios-sdk/config)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["To use the Navigation SDK for iOS, configure a Google Cloud project with both the Navigation and Maps SDKs for iOS enabled, and obtain an API key.
- Navigation SDK for iOS setup process To set up and start using the Navigation SDK for iOS, you first need to configure your Google Cloud project and obtain an API key that has the Navigation SDK for iOS and the Maps SDK for iOS enabled.
- Set up the Navigation SDK for iOS Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Products Google Maps Platform Documentation iOS Navigation SDK for iOS Send feedback Overview and requirements Stay organized with collections Save and categorize content based on your preferences.

